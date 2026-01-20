import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { LiveDAGBackground } from './LiveDAGBackground'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background - Kaspa Energy Waves */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a608_1px,transparent_1px),linear-gradient(to_bottom,#14b8a608_1px,transparent_1px)] bg-[size:40px_40px]" />
      {/* Live Kaspa DAG Visualization */}
      <LiveDAGBackground />
      {/* Turquoise energy gradient - top corner */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#14b8a615] via-[#14b8a608] to-transparent rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <Badge className="mb-8 px-4 py-2 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2" />
          Built on Kaspa Technology
        </Badge>

        {/* Main Heading - Bolder with turquoise shadow */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="text-foreground drop-shadow-sm">Unveiling Insights for the</span>
          <br />
          <span
            className="bg-gradient-to-r from-accent via-[#2dd4bf] to-accent/70 bg-clip-text text-transparent"
            style={{ textShadow: '0 0 80px rgba(20, 184, 166, 0.3)' }}
          >
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
            <Link to="/docs">
              Open the Docs
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
            </Link>
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

        {/* Stats - Asymmetric layout: 1 large left, 3 stacked right */}
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          {/* Large featured stat */}
          <Card className="flex-1 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:scale-[1.02] transition-transform duration-200">
            <CardContent className="p-8 text-center md:text-left">
              <div className="text-4xl sm:text-5xl font-extrabold text-accent mb-2" style={{ textShadow: '0 0 30px rgba(20, 184, 166, 0.2)' }}>
                1B $CYPU
              </div>
              <div className="text-sm text-muted-foreground">Total Supply</div>
            </CardContent>
          </Card>

          {/* 3 smaller stats stacked */}
          <div className="flex-1 grid grid-cols-3 md:grid-cols-1 gap-3">
            {[
              { label: 'Initial Circulating', value: '~200M' },
              { label: 'Locked in Vault', value: '~110M' },
              { label: 'Minting Ratio', value: '1:1 KAS' },
            ].map((stat) => (
              <Card key={stat.label} className="bg-card/30 border-border/30 hover:border-accent/20 transition-colors duration-200">
                <CardContent className="p-4">
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
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
