import { Nav } from '@/components/ui/nav'
import { Footer } from '@/components/ui/footer'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}