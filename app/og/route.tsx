import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Curbside Cans Valet'
    const description = searchParams.get('description') || 'Student-run trash can valet service in La Jolla'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8fafc',
            backgroundImage: 'linear-gradient(to bottom right, #f1f5f9, #e2e8f0)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#16a34a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px',
                }}
              >
                <div
                  style={{
                    color: 'white',
                    fontSize: '40px',
                    fontWeight: 'bold',
                  }}
                >
                  🗑️
                </div>
              </div>
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: '#0f172a',
                }}
              >
                Curbside Cans
              </div>
            </div>
            
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#0f172a',
                marginBottom: '24px',
                lineHeight: 1.2,
              }}
            >
              {title}
            </div>
            
            <div
              style={{
                fontSize: '24px',
                color: '#475569',
                marginBottom: '32px',
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
            
            <div
              style={{
                display: 'flex',
                gap: '12px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#22c55e',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Student Operated
              </div>
              <div
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                La Jolla Based
              </div>
              <div
                style={{
                  backgroundColor: '#64748b',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Weekly Service
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}