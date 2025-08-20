import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { StepList } from '@/components/sections/step-list'
import { ArrowRight, Clock, MessageSquare, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works | Simple 3-Step Trash Can Service',
  description: 'Learn how our student-run trash can valet service works in La Jolla. Simple signup, reliable weekly service, bins returned safely.',
}

export default function HowItWorksPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              How It Works
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Three simple steps to never worry about trash day again
            </p>
          </div>
        </Container>
      </Section>

      <StepList />

      <Section className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                What makes us different?
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Consistent Timing</h3>
                    <p className="text-slate-600">We arrive the same time each week, so you know what to expect.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Text Updates</h3>
                    <p className="text-slate-600">Get reminder texts the night before and confirmations when we're done.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Careful Handling</h3>
                    <p className="text-slate-600">We treat your bins like our own—returned clean and in the right spot.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Ready to get started?
              </h3>
              <p className="text-slate-600 mb-6">
                Join dozens of happy families in La Jolla. Service starts this week!
              </p>
              <Link href="/start">
                <Button size="lg" className="w-full">
                  Start Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-sm text-slate-500 mt-3 text-center">
                No contracts • Cancel anytime
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}