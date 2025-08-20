import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Testimonial } from '@/components/sections/testimonial'
import { Star, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Testimonials | What Our Customers Say',
  description: 'Read reviews from happy families in La Jolla who use our student-run trash can valet service. Real testimonials from real customers.',
}

const detailedTestimonials = [
  {
    id: 1,
    content: "Mark and Matt are absolute lifesavers! As a working mom with three kids, I was constantly forgetting to put the bins out. Now I never have to worry about it. They're so reliable and professional—you'd never guess they're teenagers. I tell all my mom friends about them!",
    author: "Sarah Mitchell",
    location: "La Jolla Shores",
    title: "Working Mom of 3",
    rating: 5,
    date: "December 2024"
  },
  {
    id: 2,
    content: "We've been using Curbside Cans for over a year now and couldn't be happier. The boys are punctual, respectful, and take great care with our property. It's wonderful to support young entrepreneurs who are so dedicated to their business. Five stars!",
    author: "David and Linda Rodriguez",
    location: "Bird Rock",
    title: "Retired Couple",
    rating: 5,
    date: "November 2024"
  },
  {
    id: 3,
    content: "I was skeptical at first—teenage entrepreneurs handling our trash service? But these kids have exceeded every expectation. They send reminder texts, they're always on time, and they even helped us during that big storm last month. Highly recommend!",
    author: "Jennifer Thompson",
    location: "UTC Area", 
    title: "Busy Professional",
    rating: 5,
    date: "October 2024"
  },
  {
    id: 4,
    content: "As grandparents, we love supporting these hardworking students. They're always polite, they handle our bins carefully, and it's such a relief not to have to remember trash day anymore. Our whole street should sign up!",
    author: "Robert & Mary Chen",
    location: "La Jolla Village",
    title: "Grandparents",
    rating: 5,
    date: "September 2024"
  },
]

export default function TestimonialsPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              What Our Customers Say
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Real reviews from real families in La Jolla
            </p>
          </div>
        </Container>
      </Section>

      <Testimonial />

      <Section className="bg-slate-50">
        <Container>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            In-Depth Reviews
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {detailedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-green-600 mr-4" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-4 text-sm text-slate-500">{testimonial.date}</span>
                </div>
                <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-600">{testimonial.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="bg-green-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Happy Customers
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Don't just take our word for it—experience the convenience and reliability 
              that dozens of La Jolla families already enjoy.
            </p>
            <div className="flex justify-center">
              <a
                href="/start"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Start Service Today
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}