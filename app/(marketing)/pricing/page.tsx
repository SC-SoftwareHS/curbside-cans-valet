import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { PricingCards } from '@/components/sections/pricing-cards'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Pricing | Affordable Weekly Trash Can Service',
  description: 'Simple, transparent pricing for trash can valet service in La Jolla. No contracts, cancel anytime. Plans starting at $29/month.',
}

export default function PricingPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="text-center">
            <Badge variant="success" className="mb-4">Student Rates</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Simple Pricing
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Transparent rates with no hidden fees or long-term contracts
            </p>
          </div>
        </Container>
      </Section>

      <PricingCards />

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Frequently Asked About Pricing
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900">Can I add extra cans?</h3>
                <p className="text-slate-600 mt-1">
                  Yes! Each additional can is just $5/month. Perfect for yard waste or overflow weeks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">What if I want to pause service?</h3>
                <p className="text-slate-600 mt-1">
                  No problem! Pause for vacations or any reason. Just text us and we'll pause your billing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">How do I pay?</h3>
                <p className="text-slate-600 mt-1">
                  We'll send you a simple monthly invoice via email. Pay by Venmo, Zelle, or check—whatever works for you.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Are there any setup fees?</h3>
                <p className="text-slate-600 mt-1">
                  Nope! No setup fees, no cancellation fees, no hidden charges. Just simple monthly pricing.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}