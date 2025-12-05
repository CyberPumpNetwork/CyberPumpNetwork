import { Button } from './ui/button'

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to Explore the{' '}
          <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
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
            <a href="https://kas.me" target="_blank" rel="noopener noreferrer">
              Launch kas.me
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
            { name: 'X (Twitter)', href: 'https://x.com/TheITCyberSpace', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            { name: 'GitHub', href: 'https://github.com/H34R7L3s/CyberPump', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
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
