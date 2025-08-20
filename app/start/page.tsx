import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { LeadForm } from '@/components/sections/lead-form'
import { Nav } from '@/components/ui/nav'
import { Footer } from '@/components/ui/footer'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Start Service | Get Your Trash Can Valet Today',
  description: 'Sign up for student-run trash can valet service in La Jolla. Quick form, no contracts, start this week.',
}

export default function StartPage() {
  return (
    <>
      <Nav />
      <main>
        <Section>
          <Container>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  Start Your Service
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                  Join dozens of happy families in La Jolla. Service starts this week!
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    What you get:
                  </h2>
                  <div className="space-y-2">
                    <div className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Weekly bin service (out & back)</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Text reminders night before</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Rain or shine reliability</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>No contracts, cancel anytime</span>
                    </div>
                  </div>
                </div>

                <LeadForm />
              </div>

              <div className="mt-8 text-center text-sm text-slate-600">
                <p>
                  Questions? Email us at{' '}
                  <a href="mailto:hello@curbsidecansvalet.com" className="text-green-600 hover:text-green-700 font-medium">
                    hello@curbsidecansvalet.com
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}