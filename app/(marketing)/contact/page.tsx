import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Curbside Cans Valet',
  description: 'Contact our student-run trash can valet service in La Jolla. Phone, email, or text us about service questions, scheduling, or support.',
}

export default function ContactPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              We're here to help! Reach out with any questions about our service.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
<div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600 mt-1">We respond within 24 hours</p>
                    <a 
                      href="mailto:hello@curbsidecansvalet.com" 
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      hello@curbsidecansvalet.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-900">Service Area</h3>
                    <p className="text-slate-600 mt-1">La Jolla & select San Diego neighborhoods</p>
                    <Link 
                      href="/service-area" 
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Check availability →
                    </Link>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-900">Response Times</h3>
                    <div className="text-slate-600 mt-1 space-y-1">
                      <p>Text/Call: Usually within 2 hours</p>
                      <p>Email: Within 24 hours</p>
                      <p>Emergency: Call for fastest response</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Ready to Start Service?
                </h3>
                <p className="text-slate-600 mb-6">
                  Skip the back-and-forth and get started right away. Our quick form 
                  takes less than 2 minutes to complete.
                </p>
                <Link href="/start">
                  <Button size="lg" className="w-full mb-4">
                    Start Service Now
                  </Button>
                </Link>
                <p className="text-sm text-slate-500 text-center">
                  Service typically starts within 3 days
                </p>
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-blue-900">Common Questions</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-blue-800">
                    <strong>Service changes?</strong> Text us anytime to pause, resume, or modify service.
                  </p>
                  <p className="text-blue-800">
                    <strong>Billing questions?</strong> We handle all billing via email and text.
                  </p>
                  <p className="text-blue-800">
                    <strong>Emergency?</strong> Call us directly for same-day issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Student-Run, Parent-Approved
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              As student entrepreneurs, we're committed to building trust through 
              consistent communication and reliable service. Your feedback helps us grow!
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}