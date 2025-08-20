'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Trash2 } from 'lucide-react'
import { Button } from './button'
import { Container } from './container'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Service Area', href: '/service-area' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Trash2 className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl text-slate-900">Curbside Cans</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/start">
              <Button size="sm">Start Service</Button>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div className={cn('md:hidden', mobileMenuOpen ? 'block' : 'hidden')}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
              <Trash2 className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl text-slate-900">Curbside Cans</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link href="/start" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Start Service</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}