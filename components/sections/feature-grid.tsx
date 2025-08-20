import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Clock, Shield, Sparkles, Users, Calendar, CloudRain } from 'lucide-react'

const features = [
  {
    name: 'Never Miss Pickup',
    description: 'We track your collection days and handle everything for you.',
    icon: Calendar,
  },
  {
    name: 'Rain or Shine',
    description: 'Weather never stops us from getting your bins to the curb.',
    icon: CloudRain,
  },
  {
    name: 'Teen Entrepreneurs',
    description: 'Support local students building their first business.',
    icon: Users,
  },
  {
    name: 'Reliable Service',
    description: 'Same-day service, every week. You can count on us.',
    icon: Clock,
  },
  {
    name: 'Trustworthy Service',
    description: 'Responsible students you can rely on every week.',
    icon: Shield,
  },
  {
    name: 'Clean & Tidy',
    description: 'We return bins neatly to your designated spot.',
    icon: Sparkles,
  },
]

export function FeatureGrid() {
  return (
    <Section className="bg-white py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
            Why families choose us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional service from responsible local students who care about your community
          </p>
          
          {/* Real Service Photo */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-4 shadow-lg">
              <img
                src="/images/IMG_4502.jpeg"
                alt="Professional trash can service in action in beautiful La Jolla neighborhood"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                {/* <p className="font-bold text-lg">Service in action</p> */}
                <p className="text-sm opacity-90">Professional care for every home</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className="card p-8 text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.name}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}