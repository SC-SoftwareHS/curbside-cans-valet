import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { UserPlus, Calendar, CheckCircle } from 'lucide-react'

const steps = [
  {
    id: 1,
    name: 'Sign Up',
    description: 'Quick online form with your address and service preferences.',
    icon: UserPlus,
  },
  {
    id: 2,
    name: 'We Handle Your Bins',
    description: 'We move your cans to the curb before pickup day.',
    icon: Calendar,
  },
  {
    id: 3,
    name: 'Bins Returned',
    description: 'After collection, we return your bins to their designated spot.',
    icon: CheckCircle,
  },
]

export function StepList() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Three simple steps to never worry about trash day again
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {index !== steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full -translate-x-1/2 bg-slate-200 md:block" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg">
                    {step.id}
                  </div>
                  <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100">
                    <step.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.name}</h3>
                  <p className="mt-2 text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}