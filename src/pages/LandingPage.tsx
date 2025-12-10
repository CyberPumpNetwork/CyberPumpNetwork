import { Navbar } from '@/components/Navbar'
import { DevBanner } from '@/components/DevBanner'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Tokenomics } from '@/components/Tokenomics'
import { Roadmap } from '@/components/Roadmap'
import { Blog } from '@/components/Blog'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <DevBanner />
      <main>
        <Hero />
        <Features />
        <Tokenomics />
        <Roadmap />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
