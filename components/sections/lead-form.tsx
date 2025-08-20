'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { leadFormSchema, type LeadFormData } from '@/lib/validators'
import { formatPhoneNumber } from '@/lib/utils'

export function LeadForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  })
  const [errors, setErrors] = useState<Partial<LeadFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: formatPhoneNumber(value) }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    // Clear error for this field
    if (errors[name as keyof LeadFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Validate form data
      const validatedData = leadFormSchema.parse(formData)
      
      // Submit to API
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      setSubmitStatus('success')
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        notes: '',
      })
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('validation')) {
          const validationError = error as any
          if (validationError.errors) {
            const fieldErrors: Partial<LeadFormData> = {}
            validationError.errors.forEach((err: any) => {
              fieldErrors[err.path[0] as keyof LeadFormData] = err.message
            })
            setErrors(fieldErrors)
          }
        }
      }
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
          required
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
          required
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-slate-700">
          Service Address *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
          placeholder="123 Main St, La Jolla, CA 92037"
          required
        />
        {errors.address && (
          <p className="mt-1 text-sm text-red-600">{errors.address}</p>
        )}
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-slate-700">
          Special Instructions
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
          placeholder="Gate code, preferred bin location, pet warnings, etc."
        />
        {errors.notes && (
          <p className="mt-1 text-sm text-red-600">{errors.notes}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="rounded-lg bg-green-50 p-4">
          <p className="text-green-800">
            Thank you! We'll contact you within 24 hours to confirm your service details.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-lg bg-red-50 p-4">
          <p className="text-red-800">
            Something went wrong. Please try again or email us at hello@curbsidecansvalet.com.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? 'Submitting...' : 'Start Service'}
      </Button>

      <p className="text-sm text-slate-600 text-center">
        No contracts • Cancel anytime • Service starts this week
      </p>
    </form>
  )
}