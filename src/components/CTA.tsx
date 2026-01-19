import { Button } from './ui/button'

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background - subtle turquoise energy gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#14b8a6]/[0.03] to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading - bolder with turquoise glow */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Explore the{' '}
          <span
            className="bg-gradient-to-r from-accent via-[#2dd4bf] to-accent/70 bg-clip-text text-transparent"
            style={{ textShadow: '0 0 60px rgba(20, 184, 166, 0.25)' }}
          >
            Kaspa Ecosystem?
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join The IT CyberSpace community and discover the power of kas.me. 
          Track your portfolio, analyze the market, and be part of the fastest-growing 
          Kaspa analytics platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-background font-semibold px-10 py-6 text-lg rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
            asChild
          >
            <a href="/docs">
              Explore Documentation
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-10 py-6 text-lg rounded-xl border-accent/30 hover:border-accent/50 hover:bg-accent/5"
            asChild
          >
            <a href="https://x.com/TheITCyberSpace" target="_blank" rel="noopener noreferrer">
              Follow @TheITCyberSpace
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center gap-6">
          {[
            { name: 'X (IT CyberSpace)', href: 'https://x.com/TheITCyberSpace', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-300"
              aria-label={social.name}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
