import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ArrowRight, CheckCircle, Star, Users } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <Container>
        <div className="relative z-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 ring-1 ring-green-600/20 mb-8">
                <Users className="h-4 w-4 mr-2" />
                Local La Jolla students
              </div>
              
              {/* Main headline */}
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl animate-fade-in">
                <span className="block">Never worry about</span>
                <span className="block text-green-600">
                  trash day again
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="mt-6 text-lg text-slate-600 leading-relaxed animate-slide-up">
                Hey! We're Mark & Matt, two La Jolla students who started this business to help our neighbors. 
                <strong className="text-slate-900"> We handle your bins every week—rain or shine!</strong>
              </p>
              
              {/* Quote */}
              <div className="mt-6 animate-slide-up">
                <blockquote className="text-lg font-medium text-green-700 italic">
                  "We love our job!" — Mark & Matt
                </blockquote>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
                <Link href="/start">
                  <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto whitespace-nowrap inline-flex items-center justify-center">
                    <span>Start Service Today</span>
                    <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto whitespace-nowrap">
                    View Pricing
                  </button>
                </Link>
              </div>
            </div>

            {/* Right side - Team Photo */}
            <div className="relative lg:order-last animate-slide-up">
              <div className="relative mx-auto max-w-lg">
                {/* Team Photo */}
                <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 shadow-2xl">
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-xl">
                    <img
                      src="/images/IMG_1809.jpeg"
                      alt="Mark and Matt celebrating after completing their trash can service route"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  {/* Photo Caption */}
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                      💪 "We love our job!"
                    </div>
                    <p className="text-slate-700 font-medium text-sm">
                      Mark & Matt celebrating another successful service day in La Jolla
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/80 rounded-lg p-3">
                      <div className="text-lg font-bold text-green-600">3 Years</div>
                      <div className="text-xs text-slate-600">In Business</div>
                    </div>
                    <div className="bg-white/80 rounded-lg p-3">
                      <div className="text-lg font-bold text-green-600">99%</div>
                      <div className="text-xs text-slate-600">On-Time Rate</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-slate-200 animate-slide-up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 font-medium">5-star service</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span>3+ years in business</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span>99% on-time rate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span>Local La Jolla students</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}