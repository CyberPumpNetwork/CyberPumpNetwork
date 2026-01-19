import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Real-Time Analytics',
    description: 'Access Total Capital, PnL tracking, evolution over time, and behavior patterns. Get deep insights into the Kaspa ecosystem with our advanced analytics tools.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Multi-Wallet Dashboard',
    description: 'Connect and track multiple wallets from a single dashboard. Add wallets based on your $CYPU holdings - the more you hold, the more you can track.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Privacy Controls',
    description: 'Wallet locking functionality lets you restrict visibility to user-owned wallets. Your privacy, your control - powered by $CYPU utility.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'BlockDAG Technology',
    description: 'Built on Kaspa\'s revolutionary BlockDAG architecture - experience high throughput, secure PoW consensus, and lightning-fast transaction speeds.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'DCA Analytics',
    description: 'Advanced Dollar-Cost Averaging insights with general buy/sell areas and market performance tracking. Make informed decisions with data-driven strategies.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'KRC-20 Standard',
    description: '$CYPU is a KRC-20 utility token on Kaspa. Fair minting with 1:1 $KAS ratio, no bots at launch, and sustainable tokenomics for long-term stability.',
  },
]

export function Features() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background - subtle, different from other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-muted/30 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 uppercase tracking-wider">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-6">
            Built for the{' '}
            <span
              className="bg-gradient-to-r from-accent via-[#2dd4bf] to-accent/70 bg-clip-text text-transparent"
              style={{ textShadow: '0 0 50px rgba(20, 184, 166, 0.2)' }}
            >
              Future
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            kas.me combines real-time Kaspa analytics with sustainable tokenomics -
            built by The IT CyberSpace, a German IT startup.
          </p>
        </div>

        {/* Features Grid - Asymmetric with Kaspa turquoise accents */}
        {/* Row 1: 1 tall + 2 stacked */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {/* Tall card - Analytics (Kaspa speed feature) */}
          <Card className="group md:row-span-2 bg-gradient-to-b from-accent/5 to-transparent border-accent/30 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center text-accent mb-6">
                {features[0].icon}
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ textShadow: '0 0 40px rgba(20, 184, 166, 0.15)' }}>{features[0].title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {features[0].description}
              </p>
            </CardContent>
          </Card>

          {/* 2 stacked cards */}
          <Card className="group bg-card/50 border-border/40 hover:border-accent/40 hover:scale-[1.02] transition-all duration-200">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-muted/60 flex items-center justify-center text-accent/80 mb-4">
                {features[1].icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{features[1].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{features[1].description}</p>
            </CardContent>
          </Card>

          <Card className="group bg-card/50 border-border/40 hover:border-accent/40 hover:scale-[1.02] transition-all duration-200">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-xl bg-muted/60 flex items-center justify-center text-accent/80 mb-4">
                {features[2].icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{features[2].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{features[2].description}</p>
            </CardContent>
          </Card>

          {/* Row 2 right side: BlockDAG (key Kaspa feature) with turquoise border */}
          <Card className="group md:col-span-2 bg-card/40 border-[#14b8a6]/40 hover:border-[#14b8a6]/60 hover:shadow-lg hover:shadow-[#14b8a6]/5 transition-all duration-300">
            <CardContent className="p-8 flex gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-[#14b8a6]/10 flex items-center justify-center text-[#14b8a6] shrink-0">
                {features[3].icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#14b8a6]">{features[3].title}</h3>
                <p className="text-muted-foreground leading-relaxed">{features[3].description}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Row 3: 2 remaining cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {features.slice(4).map((feature, index) => (
            <Card
              key={index + 4}
              className="group bg-card/30 border-border/30 hover:bg-card/50 hover:border-border/50 transition-all duration-200"
            >
              <CardContent className="p-6 flex gap-5 items-start">
                <div className="w-11 h-11 rounded-xl bg-muted/40 flex items-center justify-center text-accent/70 shrink-0 group-hover:bg-accent/10 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
