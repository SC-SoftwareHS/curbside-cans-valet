import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Gallery | See Our Service in Action',
  description: 'Photos of our trash can valet service in La Jolla. See how we handle bins with care and keep neighborhoods tidy.',
}

const galleryItems = [
  {
    id: 1,
    title: '"We Love Our Job!"',
    description: 'Mark proudly representing our team after completing morning routes.',
    category: 'Team Spirit',
    realContent: 'Founder photo with trash cans and "We love our job!" message',
    hasImage: false,
  },
  {
    id: 2,
    title: 'Team Celebration',
    description: 'Mark and Matt celebrating another successful week of service - "Go Team Go!"',
    category: 'Team',
    realContent: 'Celebration photo with "Go Team Go!" overlay',
    hasImage: false,
  },
  {
    id: 3,
    title: 'Professional Service',
    description: 'Ensuring bins are handled with care and returned properly to each home.',
    category: 'Service',
    hasImage: false,
  },
  {
    id: 4,
    title: 'Rain or Shine Commitment',
    description: 'Weather never stops us from completing our rounds in La Jolla.',
    category: 'Reliability',
    hasImage: false,
  },
  {
    id: 5,
    title: 'Customer Appreciation',
    description: 'Handwritten notes from Sharon & Jerry: "You\'re doing great work!"',
    category: 'Testimonials',
    hasImage: false,
  },
  {
    id: 6,
    title: 'Growing Business',
    description: 'From helping a few neighbors to serving dozens of families.',
    category: 'Growth',
    hasImage: false,
  },
]

export default function GalleryPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Gallery
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              See our service in action throughout La Jolla
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-slate-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{item.id}</span>
                    </div>
                    <p className="text-slate-600 text-sm">Photo placeholder</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="info" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              See the difference for yourself
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Every photo tells the story of our commitment to reliable, careful service. 
              Join our growing community of satisfied customers in La Jolla.
            </p>
            <div className="bg-slate-100 rounded-xl p-6">
              <p className="text-slate-600 text-sm mb-4">
                📸 <strong>Photo submissions welcome!</strong> Share your before/after photos and we'll feature them here.
              </p>
              <p className="text-slate-500 text-xs">
                All photos used with customer permission. Privacy always respected.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}