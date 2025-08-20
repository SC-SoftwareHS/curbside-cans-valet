import { NextRequest, NextResponse } from 'next/server'
import { leadFormSchema } from '@/lib/validators'
import { sanitizeInput } from '@/lib/utils'
import fs from 'fs/promises'
import path from 'path'

// Simple rate limiting store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
  return ip
}

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const limit = rateLimitStore.get(key)
  
  if (!limit || now > limit.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + 60000 }) // 1 minute window
    return true
  }
  
  if (limit.count >= 10) { // 10 requests per minute
    return false
  }
  
  limit.count++
  return true
}

async function sendNotificationEmail(leadData: any) {
  const resendApiKey = process.env.RESEND_API_KEY
  const adminEmail = process.env.ADMIN_EMAIL
  
  if (!resendApiKey || !adminEmail) {
    return false
  }
  
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: 'Curbside Cans <onboarding@resend.dev>',
        to: [adminEmail],
        subject: 'New Lead - Curbside Cans Valet',
        html: `
          <h2>New Lead Submission</h2>
          <p><strong>Name:</strong> ${leadData.fullName}</p>
          <p><strong>Email:</strong> ${leadData.email}</p>
          <p><strong>Phone:</strong> ${leadData.phone || 'Not provided'}</p>
          <p><strong>Address:</strong> ${leadData.address}</p>
          <p><strong>Notes:</strong> ${leadData.notes || 'None'}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `
      })
    })
    
    if (!response.ok) {
      return false
    }
    
    return true
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}

async function saveToFile(leadData: any) {
  try {
    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data')
    try {
      await fs.mkdir(dataDir, { recursive: true })
    } catch (e) {
      // Directory might already exist
    }
    
    // Read existing leads or create new array
    const filePath = path.join(dataDir, 'leads.json')
    let leads = []
    
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8')
      leads = JSON.parse(fileContent)
    } catch (e) {
      // File doesn't exist yet, start with empty array
      leads = []
    }
    
    // Add new lead with timestamp
    const newLead = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...leadData,
      status: 'new'
    }
    
    leads.push(newLead)
    
    // Save back to file
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2))
    
    // Also create a CSV version for easy viewing
    const csvPath = path.join(dataDir, 'leads.csv')
    const csvHeader = 'Date,Name,Email,Phone,Address,Notes,Status\n'
    const csvRow = `"${new Date().toLocaleString()}","${leadData.fullName}","${leadData.email}","${leadData.phone || ''}","${leadData.address}","${leadData.notes || ''}","new"\n`
    
    try {
      await fs.appendFile(csvPath, csvRow)
    } catch (e) {
      // If file doesn't exist, create it with header
      await fs.writeFile(csvPath, csvHeader + csvRow)
    }
    
    console.log('Lead saved:', newLead)
    return true
  } catch (error) {
    console.error('Failed to save lead to file:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request)
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { ok: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    
    // Sanitize inputs
    const sanitizedData = {
      fullName: sanitizeInput(body.fullName || ''),
      email: sanitizeInput(body.email || ''),
      phone: sanitizeInput(body.phone || ''),
      address: sanitizeInput(body.address || ''),
      notes: sanitizeInput(body.notes || ''),
    }
    
    // Validate with Zod
    const validatedData = leadFormSchema.parse(sanitizedData)
    
    // Save to file
    const saved = await saveToFile(validatedData)
    
    // Send email notification (optional)
    const emailSent = await sendNotificationEmail(validatedData)
    
    if (!saved && !emailSent) {
      // In production on Vercel, file system is read-only
      // So just log it and return success
      console.log('New lead (file save failed, logging only):', validatedData)
    }
    
    return NextResponse.json({ 
      ok: true,
      message: 'Thank you! We\'ll be in touch soon.' 
    })
    
  } catch (error) {
    console.error('Lead submission error:', error)
    
    if (error instanceof Error && error.message.includes('validation')) {
      return NextResponse.json(
        { ok: false, error: 'Please check your form data and try again.' },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve leads (for local development)
export async function GET(request: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'leads.json')
    const fileContent = await fs.readFile(filePath, 'utf-8')
    const leads = JSON.parse(fileContent)
    
    return NextResponse.json({ leads })
  } catch (error) {
    return NextResponse.json({ leads: [], message: 'No leads yet' })
  }
}