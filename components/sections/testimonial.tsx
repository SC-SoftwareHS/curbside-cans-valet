import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: "You're doing great work! Thanks so much from Sharon & Jerry!",
    author: "Sharon & Jerry",
    location: "La Jolla",
    rating: 5,
    type: "handwritten note"
  },
  {
    id: 2,
    content: "Thanks Mark! Hope your school year is going well. We appreciate your reliable service.",
    author: "Satisfied Customer",
    location: "La Jolla",
    rating: 5,
    type: "handwritten note"
  },
  {
    id: 3,
    content: "These students are amazing! So reliable and professional. They even send reminder texts the night before.",
    author: "Sarah M.",
    location: "La Jolla Shores",
    rating: 5,
    type: "review"
  },
]

export function Testimonial() {
  return (
    <Section className="bg-gradient-to-br from-slate-50 to-emerald-50 py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
            What neighbors are saying
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real feedback from real families in La Jolla
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="card p-8 relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-6xl text-emerald-100 font-serif">"</div>
              
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </div>
              
              {testimonial.type === 'handwritten note' && (
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                  ✍️ Handwritten note
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}