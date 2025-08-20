import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { FAQAccordion } from '@/components/sections/faq-accordion'

export const metadata: Metadata = {
  title: 'FAQ | Common Questions About Our Trash Can Service',
  description: 'Get answers to frequently asked questions about our student-run trash can valet service in La Jolla. Gate codes, weather, cancellations, and more.',
}

export default function FAQPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Everything you need to know about our service
            </p>
          </div>
        </Container>
      </Section>

      <FAQAccordion />

      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              We're here to help! Reach out anytime.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:hello@curbsidecansvalet.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Email: hello@curbsidecansvalet.com
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}