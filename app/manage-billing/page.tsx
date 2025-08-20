import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Nav } from '@/components/ui/nav'
import { Footer } from '@/components/ui/footer'
import { CreditCard, Clock, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Manage Billing | Customer Portal Coming Soon',
  description: 'Customer billing portal for Curbside Cans Valet service. Full payment management features coming soon.',
}

export default function ManageBillingPage() {
  return (
    <>
      <Nav />
      <main>
        <Section>
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
                Customer Portal Coming Soon
              </h1>
              
              <p className="text-lg text-slate-600 mb-8">
                We're building a secure customer portal where you'll be able to manage 
                your billing, update payment methods, and view service history.
              </p>

              <div className="bg-slate-50 rounded-xl p-8 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-slate-500 mr-2" />
                  <span className="font-semibold text-slate-700">In the meantime...</span>
                </div>
                
                <div className="space-y-4 text-left">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold text-slate-900">Current Billing</h3>
                    <p className="text-slate-600 text-sm">
                      We send monthly invoices via email with simple payment options (Venmo, Zelle, check).
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-slate-900">Service Changes</h3>
                    <p className="text-slate-600 text-sm">
                      Text or call us to pause service, change billing, or update your plan.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h3 className="font-semibold text-slate-900">Questions</h3>
                    <p className="text-slate-600 text-sm">
                      Contact us anytime at hello@curbsidecansvalet.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <a
                  href="mailto:hello@curbsidecansvalet.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Email Us
                </a>
              </div>

              <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}