import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

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
