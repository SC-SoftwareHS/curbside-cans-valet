'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What if I have a gate code?',
    answer: 'No problem! Just provide your gate code when you sign up, and we\'ll handle the rest. We keep all codes secure and confidential.',
  },
  {
    question: 'What happens on holidays?',
    answer: 'We track all holiday schedules for La Jolla waste collection. If pickup is delayed, we\'ll adjust our service accordingly and notify you.',
  },
  {
    question: 'Do you service in bad weather?',
    answer: 'Yes! Rain or shine, we\'ll be there. The only exception would be truly dangerous conditions, in which case we\'ll notify you immediately.',
  },
  {
    question: 'What if I forget to put my bins out for you?',
    answer: 'We\'ll send you a reminder text the night before. If your bins aren\'t accessible, we\'ll text you to let you know we couldn\'t complete the service.',
  },
  {
    question: 'How can we trust student-run service?',
    answer: 'We\'re local La Jolla students who take pride in our work. Our families know your families, and our reputation matters to us. We\'ve been serving the community reliably for 2 years.',
  },
  {
    question: 'How do I cancel or pause service?',
    answer: 'Just text or email us anytime. No contracts, no cancellation fees. You can pause for vacations and resume whenever you\'re ready.',
  },
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about our service
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 text-slate-500 transition-transform',
                      openIndex === index && 'rotate-180'
                    )}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}