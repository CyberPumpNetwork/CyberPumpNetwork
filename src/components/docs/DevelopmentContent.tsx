import { Callout } from './Callout'
import {
  Code,
  Terminal,
  BookOpen,
  Rocket,
  Zap,
  Database,
  GitBranch,
  Package,
} from 'lucide-react'

export function DevelopmentContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Code className="w-10 h-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold">Development</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Build on kas.me • Integrate our API • Access the Kaspa ecosystem
        </p>
      </div>

      {/* Active Development Banner */}
      <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/20 to-accent/5 p-8 text-center space-y-6">
        <Rocket className="w-16 h-16 text-accent mx-auto" />
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">API Development - Built & Tested Internally</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong>REST endpoints built and functional on development infrastructure.</strong> Worker node architecture tested internally.
            <br />
            Public access requires BaFin approval. OpenAPI specs + developer portal in preparation.
          </p>
        </div>
        <Callout type="info" title="Code Works - Regulatory Approval Gates Public Access">
          <p className="text-sm">
            API layer tested on private infrastructure. Public developer portal + authentication pending regulatory clearance. This isn't vaporware - it's pre-approval phase development.
          </p>
        </Callout>
      </div>

      <hr className="border-border/50" />

      {/* What's Coming */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">What's Coming</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          When the API docs launch, you'll get access to everything you need to build on kas.me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* REST API Endpoints */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">REST API Endpoints</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Wallet data queries</li>
              <li>• Transaction history</li>
              <li>• Address balance lookups</li>
              <li>• Network statistics</li>
              <li>• Price aggregation data</li>
            </ul>
          </div>

          {/* WebSocket Streams */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">WebSocket Streams</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Real-time transaction updates</li>
              <li>• Live price feeds</li>
              <li>• Network event notifications</li>
              <li>• Wallet activity monitoring</li>
              <li>• Block confirmations</li>
            </ul>
          </div>

          {/* Analytics Access */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Database className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">Analytics Access</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Historical data queries</li>
              <li>• Aggregated metrics</li>
              <li>• On-chain analytics</li>
              <li>• Market insights (premium tiers)</li>
              <li>• Custom data exports</li>
            </ul>
          </div>

          {/* Code Examples */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">Code Examples</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• JavaScript/TypeScript SDKs</li>
              <li>• Python integration examples</li>
              <li>• Rust library bindings</li>
              <li>• cURL command references</li>
              <li>• Full working demos</li>
            </ul>
          </div>

          {/* Integration Guides */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <GitBranch className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">Integration Guides</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Quick start tutorials</li>
              <li>• Authentication flows</li>
              <li>• Rate limiting best practices</li>
              <li>• Error handling patterns</li>
              <li>• Production deployment tips</li>
            </ul>
          </div>

          {/* Node Operator Docs */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Package className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">Worker Node Setup</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Workers can run in multiple architectures: lightweight (receives validated data), full node (runs own Kaspa blockchain), or hybrid (both). Choose based on your infrastructure and trust model.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Architecture modes: Lightweight / Full Node / Hybrid</li>
              <li>• Installation requirements (per mode)</li>
              <li>• Configuration options & feature flags</li>
              <li>• Kaspa node integration (full mode)</li>
              <li>• Monitoring & maintenance</li>
              <li>• Earning mechanics ($CYPU rewards)</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Why Build on kas.me */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Why Build on kas.me?</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="rounded-xl border border-border bg-card p-8 space-y-4">
            <h3 className="text-2xl font-bold text-accent">Public Kaspa Data, Developer-Friendly Access</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                kas.me aggregates public Kaspa blockchain data and serves it through clean, well-documented APIs. No need to run your own archive node - we handle the infrastructure.
              </p>
              <p>
                <strong>Free tier access:</strong> Basic endpoints for wallet lookups, transaction queries, and network stats.
                <br />
                <strong>Premium tiers:</strong> Advanced analytics, ML-powered insights, higher rate limits, priority support.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 space-y-4">
            <h3 className="text-2xl font-bold text-accent">Decentralized Infrastructure</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Unlike centralized explorers, kas.me runs on a distributed Worker node mesh. Node operators worldwide host infrastructure, earning $CYPU rewards for serving API requests.
              </p>
              <p>
                <strong>Direct blockchain access:</strong> Godfathers ARE full Kaspa nodes. Workers CAN BE full Kaspa nodes (reading chain directly). This isn't data aggregation - it's decentralized blockchain validation.
                <br />
                <strong>Geographic distribution:</strong> Lower latency, higher uptime.
                <br />
                <strong>Compliance-distributed:</strong> Workers configure features per jurisdiction, ensuring regulatory flexibility.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 space-y-4">
            <h3 className="text-2xl font-bold text-accent">Build Once, Scale Forever</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Integrate the kas.me API into your wallet, exchange, analytics dashboard, or DeFi protocol. As the platform scales, your integration benefits from improved data quality and expanded features.
              </p>
              <p>
                No vendor lock-in. Public blockchain data remains public. But kas.me makes it easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Current Status */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Current Development Status</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <Callout type="warning" title="Alpha Stage - API Under Construction">
            <div className="space-y-2 text-sm">
              <p><strong>Platform Status:</strong> Core platform in active development. API endpoints being designed alongside platform architecture.</p>
              <p><strong>Documentation Timeline:</strong> API docs will launch when the platform reaches stable beta.</p>
              <p><strong>Early Access:</strong> No early access program yet. When ready, we'll announce on X/Twitter and in community channels.</p>
            </div>
          </Callout>

          <Callout type="info" title="Want Updates?">
            <p className="text-sm">
              Follow development progress on <a href="https://x.com/kas_me_" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">X/Twitter @kas_me_</a> for announcements about API beta releases and developer documentation.
            </p>
          </Callout>
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Developer Ecosystem */}
      <section className="space-y-6">
        <div className="max-w-4xl mx-auto rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 text-center space-y-4">
          <h2 className="text-3xl font-bold text-accent">Developer-First Kaspa Ecosystem</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            kas.me isn't just an explorer - it's infrastructure for the Kaspa ecosystem.
            <br /><br />
            <strong>API built and tested internally.</strong> Architecture ready for wallets, analytics tools, trading bots, DeFi protocols. REST endpoints functional on development servers, WebSocket streams tested, GraphQL layer in development.
            <br /><br />
            <strong>Public access awaits BaFin regulatory approval.</strong> No proprietary lock-in planned. Public blockchain data served efficiently.
          </p>
          <p className="text-muted-foreground italic pt-4 border-t border-border/30">
            Code works on private infrastructure. Regulatory approval gates public deployment. Developer documentation prepares alongside approval process.
          </p>
        </div>
      </section>
    </div>
  )
}
