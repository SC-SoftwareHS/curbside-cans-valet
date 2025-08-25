import { Metadata } from 'next'
import { Hero } from '@/components/sections/hero'
import { FeatureGrid } from '@/components/sections/feature-grid'
import { NewsVideo } from '@/components/sections/news-video'
import { StepList } from '@/components/sections/step-list'
import { PricingCards } from '@/components/sections/pricing-cards'
import { Testimonial } from '@/components/sections/testimonial'
import { FAQAccordion } from '@/components/sections/faq-accordion'

export const metadata: Metadata = {
  title: 'Curbside Cans Valet | Student-Run Trash Can Service La Jolla',
  description: 'Never miss trash day again! Student-run valet service in La Jolla. We take your bins out before pickup and return them after. Weekly service, rain or shine.',
  keywords: 'trash service, La Jolla, student business, curbside valet, waste collection',
  openGraph: {
    title: 'Curbside Cans Valet | Student-Run Trash Can Service',
    description: 'Student-run trash can valet service in La Jolla. We curb your cans—rain or shine.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curbside Cans Valet',
    description: 'Student-run trash can valet service in La Jolla',
  },
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Curbside Cans Valet",
    "description": "Student-run trash can valet service in La Jolla & San Diego",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "email": "hello@curbsidecansvalet.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "La Jolla",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.8328,
      "longitude": -117.2713
    },
    "openingHours": "Mo-Su 06:00-20:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 32.8328,
        "longitude": -117.2713
      },
      "geoRadius": 15000
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trash Can Valet Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Plan - 3 Cans Weekly",
            "description": "Weekly trash and recycling bin service"
          },
          "price": "29",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "29",
            "priceCurrency": "USD",
            "unitCode": "MON"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Plus Plan - Up to 4 Cans",
            "description": "Weekly service for larger families"
          },
          "price": "39",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "39",
            "priceCurrency": "USD",
            "unitCode": "MON"
          }
        }
      ]
    },
    "founder": [
      {
        "@type": "Person",
        "name": "Mark",
        "jobTitle": "Co-Founder"
      },
      {
        "@type": "Person", 
        "name": "Matt",
        "jobTitle": "Co-Founder"
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "25"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <FeatureGrid />
      <NewsVideo />
      <StepList />
      <PricingCards />
      <Testimonial />
      <FAQAccordion />
    </>
  )
}