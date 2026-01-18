import { Callout } from '@/components/docs/Callout'
import { Sprout, ChartLine, Rocket, Crown } from 'lucide-react'

export function GuidesContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Platform Guides</h1>
        <p className="text-muted-foreground">
          Step-by-step tutorials for navigating kas.me. From beginner basics to expert-level customization.
        </p>
      </div>

      {/* Coming Soon Notice */}
      <Callout type="info" title="Guides In Development">
        I'm building comprehensive guides as the platform features are finalized. Documentation follows implementation, not the other way around. Real guides with real screenshots, not placeholder content.
      </Callout>

      {/* Planned Guide Categories */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Planned Guide Categories</h2>

        <div className="grid gap-4">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Sprout className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Beginner</h3>
            </div>
            <p className="text-muted-foreground">
              Getting started with kas.me. Wallet integration, basic analytics, understanding the platform interface.
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>How to connect your wallet</li>
              <li>Understanding Total Capital and PnL metrics</li>
              <li>Navigating the explorer</li>
              <li>Reading transaction history</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <ChartLine className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Trader</h3>
            </div>
            <p className="text-muted-foreground">
              Market insights and portfolio tracking. Using analytics features for trading decisions.
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>Portfolio performance tracking</li>
              <li>Whale wallet monitoring (Intelligence tier)</li>
              <li>Token holder analysis</li>
              <li>Network metrics interpretation</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Rocket className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Advanced</h3>
            </div>
            <p className="text-muted-foreground">
              Running Worker nodes, contributing to infrastructure, advanced privacy settings.
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>Setting up a Worker node (Port 9934 P2P, Port 8080 REST)</li>
              <li>Configuring libp2p peer discovery</li>
              <li>Running local React dashboard (localhost:3000)</li>
              <li>Multi-wallet management (Elite tier)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Crown className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Expert</h3>
            </div>
            <p className="text-muted-foreground">
              Full node operation, custom analytics integrations, API development.
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>Running Kaspa node + Worker node</li>
              <li>Custom indexing for specific analytics needs</li>
              <li>REST API integration (Port 8080)</li>
              <li>Enterprise Godfather node setup (institutions only)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Not Now */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Why Guides Are Not Live Yet</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <p className="text-muted-foreground">
            I'm not writing guides for features that don't exist yet. Traditional projects create documentation first, then build the product. I build the product first, then document what actually works.
          </p>
          <p className="text-muted-foreground">
            Current status: Explorer is functional, analytics dashboard is in development, Worker node distribution system is in architecture phase. Guides will be written when features are stable and screenshots are real.
          </p>
          <p className="text-muted-foreground">
            This approach avoids placeholder content, outdated screenshots, and "in development" disclaimers in every guide. When guides go live, they'll be accurate, complete, and immediately useful.
          </p>
        </div>
      </section>

      {/* What EXISTS vs What DOESN'T */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What EXISTS vs What DOESN'T</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h3 className="text-lg font-bold">What Exists Today</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Explorer functionality (address lookup, transaction details)</li>
              <li>Basic analytics architecture (Total Capital, PnL calculations)</li>
              <li>Worker node software (internal testing)</li>
              <li>React dashboard framework</li>
              <li>REST API design (Port 8080)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <h3 className="text-lg font-bold">What Doesn't Exist Yet</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Written guides with step-by-step instructions</li>
              <li>Public Worker node release (software exists, release pending)</li>
              <li>Intelligence Center full deployment</li>
              <li>Advanced privacy features (wallet locking, anonymous mode)</li>
              <li>API documentation for third-party integrations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interim Resources */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Resources Available Now</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <p className="text-muted-foreground">
            While comprehensive guides are in development, you can explore:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li><strong>Platform Features:</strong> Overview of Basic, Analytics, Intelligence, and Elite tiers</li>
            <li><strong>Detailed Features:</strong> Deep comparison with existing analytics tools (TradingView, Glassnode, Bloomberg)</li>
            <li><strong>Explorer:</strong> How the decentralized infrastructure works (Godfather nodes, Workers, P2P architecture)</li>
            <li><strong>Free Features:</strong> Pilot phase strategy and what's available without holding $CYPU</li>
            <li><strong>Dev Talks:</strong> Behind-the-scenes reflections on building kas.me</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-4">
        <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Stay Updated</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Guides will be published as features go live. No placeholder content, no outdated screenshots. Real documentation for real features.
          </p>
          <p className="font-semibold">
            Quality over speed. Always.
          </p>
        </div>
      </section>
    </div>
  )
}
