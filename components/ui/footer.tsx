import Link from 'next/link'
import { Container } from './container'
import { Badge } from './badge'
import { Trash2, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Trash2 className="h-8 w-8 text-green-600" />
                <span className="font-bold text-xl text-slate-900">Curbside Cans Valet</span>
              </div>
              <p className="text-slate-600 mb-4">
                Student-run trash can valet service in La Jolla & San Diego. We take your bins out and bring them back, rain or shine.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success">Student Operated</Badge>
                <Badge variant="info">Locally Owned</Badge>
                <Badge>Weekly Service</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/how-it-works" className="text-slate-600 hover:text-slate-900">How It Works</Link></li>
                <li><Link href="/pricing" className="text-slate-600 hover:text-slate-900">Pricing</Link></li>
                <li><Link href="/service-area" className="text-slate-600 hover:text-slate-900">Service Area</Link></li>
                <li><Link href="/about" className="text-slate-600 hover:text-slate-900">About Us</Link></li>
                <li><Link href="/faq" className="text-slate-600 hover:text-slate-900">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:hello@curbsidecansvalet.com" className="flex items-center text-slate-600 hover:text-slate-900">
                    <Mail className="h-4 w-4 mr-2" />
                    hello@curbsidecansvalet.com
                  </a>
                </li>
                <li className="flex items-start text-slate-600">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <span>La Jolla, CA</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-slate-600">
                © {new Date().getFullYear()} Curbside Cans Valet. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/terms" className="text-sm text-slate-600 hover:text-slate-900">Terms</Link>
                <Link href="/privacy" className="text-sm text-slate-600 hover:text-slate-900">Privacy</Link>
                <Link href="/service-policy" className="text-sm text-slate-600 hover:text-slate-900">Service Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}