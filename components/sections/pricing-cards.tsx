import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CheckCircle } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 29,
    description: 'Perfect for standard households',
    features: [
      '2 cans (trash & recycle)',
      'Weekly service',
      'Rain or shine service',
      'Professional service',
    ],
    cta: 'Start Basic',
    featured: false,
  },
  {
    name: 'Plus',
    price: 39,
    description: 'Great for larger families',
    features: [
      'Up to 4 cans',
      'Weekly service',
      'Rain or shine service',
      'Priority support',
      'Professional service',
    ],
    cta: 'Start Plus',
    featured: true,
  },
]

export function PricingCards() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No contracts. Cancel anytime. Add extra cans for just $5/month each.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl ${
                plan.featured
                  ? 'ring-2 ring-green-600 shadow-xl'
                  : 'ring-1 ring-slate-200'
              } bg-white`}
            >
              {plan.featured && (
                <div className="bg-green-600 text-white text-center py-2 rounded-t-xl text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 text-slate-600">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                  <span className="text-slate-600">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/start" className="block mt-8">
                  <Button
                    variant={plan.featured ? 'default' : 'outline'}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            Service available in La Jolla and select San Diego neighborhoods.{' '}
            <Link href="/service-area" className="text-green-600 hover:text-green-700 font-medium">
              Check availability
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  )
}