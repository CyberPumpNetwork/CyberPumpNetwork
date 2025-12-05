import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <Badge className="mb-8 px-4 py-2 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2" />
          Built on Kaspa's BlockDAG Technology
        </Badge>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Unveiling Insights for the</span>
          <br />
          <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
            Kaspa Ecosystem
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          kas.me is the cutting-edge platform by The IT CyberSpace, a German IT startup.
          Real-time analytics, wallet tracking, and $CYPU token-based features
          for the modern Kaspa investor.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-background font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
            asChild
          >
            <a href="https://kas.me" target="_blank" rel="noopener noreferrer">
              Discover kas.me
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
            className="px-8 py-6 text-lg rounded-xl border-accent/30 hover:border-accent/50 hover:bg-accent/5"
            asChild
          >
            <a href="https://x.com/TheITCyberSpace" target="_blank" rel="noopener noreferrer">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow on X
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Total Supply', value: '1B $CYPU' },
            { label: 'Initial Circulating', value: '~200M' },
            { label: 'Locked in Vault', value: '~110M' },
            { label: 'Minting Ratio', value: '1:1 KAS' },
          ].map((stat) => (
            <Card
              key={stat.label}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/30 transition-colors duration-300"
            >
              <CardContent className="p-6">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
