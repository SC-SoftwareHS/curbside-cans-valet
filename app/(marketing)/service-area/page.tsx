import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, CheckCircle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Area | La Jolla & San Diego Neighborhoods',
  description: 'We serve La Jolla, Bird Rock, UTC, and select San Diego neighborhoods. Check if trash can valet service is available in your area.',
}

const serviceAreas = [
  { name: 'La Jolla Village', zip: '92037', status: 'active' },
  { name: 'La Jolla Shores', zip: '92037', status: 'active' },
  { name: 'Bird Rock', zip: '92037', status: 'active' },
  { name: 'Torrey Pines', zip: '92037', status: 'looking-for-partners' },
  { name: 'La Jolla Farms', zip: '92037', status: 'looking-for-partners' },
  { name: 'UTC Area', zip: '92122', status: 'looking-for-partners' },
  { name: 'Del Mar Heights', zip: '92130', status: 'looking-for-partners' },
  
]

export default function ServiceAreaPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Service Area
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Currently serving La Jolla and expanding throughout San Diego
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Current Service Areas
              </h2>
              <div className="space-y-3">
                {serviceAreas.map((area) => (
                  <div key={area.name} className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-slate-400 mr-3" />
                      <div>
                        <span className="font-medium text-slate-900">{area.name}</span>
                        <span className="text-sm text-slate-500 ml-2">{area.zip}</span>
                      </div>
                    </div>
                    <div>
                      {area.status === 'active' && (
                        <Badge variant="success">Available</Badge>
                      )}
                      {area.status === 'limited' && (
                        <Badge variant="info">Limited</Badge>
                      )}
                      {area.status === 'looking-for-partners' && (
                        <Badge>Looking for Partners</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Not sure if we serve your area?
                </h3>
                <p className="text-slate-600 mb-6">
                  We're always expanding! If you don't see your neighborhood listed, reach out and we'll let you know our timeline.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Clock className="h-5 w-5 text-green-600 mr-3" />
                    <span>Service starts this week</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="h-5 w-5 text-green-600 mr-3" />
                    <span>Route optimization for your area</span>
                  </div>
                </div>
                <Link href="/start">
                  <Button size="lg" className="w-full">
                    Check Availability
                  </Button>
                </Link>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Special Requests
                </h4>
                <p className="text-blue-800 text-sm">
                  Need service outside our current area? We sometimes make exceptions for groups of neighbors. 
                  Contact us to discuss options for your street or building.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Expanding Throughout San Diego
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Started by local students, we're growing responsibly to serve more families. 
              Our goal is to make trash day stress-free for busy parents throughout San Diego County.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}