import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Award, Heart, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Student Entrepreneurs Behind Curbside Cans Valet',
  description: 'Meet Mark and Matt, the teen entrepreneurs who started Curbside Cans Valet in La Jolla. Learn about our mission to serve families while building business skills.',
}

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="text-center">
            <Badge variant="success" className="mb-4">Student Entrepreneurs</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              About Us
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              Two La Jolla students making trash day stress-free for busy families
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Curbside Cans Valet was founded by Mark Stoneham, an 11-year-old from La Jolla, along with his brother Matt. The idea came from a mix of family conversations and inspiration from the book <em>Way of the Warrior Kid</em> by Jocko Willink. In the book, the main character learns the value of doing the tough jobs that others don't want to do — and that message stuck.
                </p>
                <p>
                  One day, after talking with his grandpa about old paper routes and realizing how much his dad disliked taking out the trash, Mark saw an opportunity. What started as a simple idea quickly turned into a business: helping neighbors by taking their garbage cans to the curb and bringing them back in.
                </p>
                <p>
                  With support from family — Mom helping with flyers, Dad building the website, and siblings Matt and Ali spreading the word — Curbside Cans Valet was born. Today, the business continues to grow by offering a reliable, helpful service to neighbors, many of whom are elderly and appreciate the extra hand.
                </p>
                <p>
                  For Mark and Matt, it's not just about earning money. It's about discipline, responsibility, and serving the community.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Real Service Photo */}
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-6 shadow-lg">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/IMG_1271.jpeg"
                    alt="One of our founders providing reliable trash can service in La Jolla"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-green-600 font-semibold">Professional service, every time</p>
                  <p className="text-slate-600 text-sm">Making sure your bins are exactly where they need to be</p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">Many</div>
                  <div className="text-sm text-slate-600">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">1000+</div>
                  <div className="text-sm text-slate-600">Cans Moved</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">99%</div>
                  <div className="text-sm text-slate-600">On-Time Rate</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">2</div>
                  <div className="text-sm text-slate-600">Years Running</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Student Entrepreneurs?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Personal Investment</h3>
                <p className="text-slate-600 text-sm">
                  This isn't just a job for us—it's our business. We care about every customer.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Growing Together</h3>
                <p className="text-slate-600 text-sm">
                  Your support helps us develop skills while we help make your life easier.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Reliable Service</h3>
                <p className="text-slate-600 text-sm">
                  We've built our reputation on consistency and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-green-600">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to support young entrepreneurs?
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Join our growing community of families who believe in supporting student businesses 
              while getting exceptional service.
            </p>
            <Link href="/start">
              <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-green-50 border-white">
                Start Service Today
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}