import { ResourceCard } from './ResourceCard'
import { Callout } from './Callout'
import { StatsGrid } from './StatsGrid'
import { BlockchainSpeedComparison } from './BlockchainSpeedComparison'
import {
  BookOpen,
  Zap,
  Network,
  Lock,
  TrendingUp,
  Cpu,
  Database,
  Activity
} from 'lucide-react'

export function BasicsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-blue-500/5 rounded-2xl blur-2xl -z-10" />
        <div className="relative space-y-6 py-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-accent bg-clip-text text-transparent">
            Kaspa Basics
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Welcome to the <span className="text-accent font-semibold">#Study $KASPA</span> Hub – your starting point
            for understanding why Kaspa is the perfect foundation for kas.me's high-frequency trading, machine learning,
            and zero-knowledge analytics infrastructure.
          </p>
        </div>
      </div>

      {/* Why Kaspa for kas.me */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Why Kaspa for kas.me?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />
            <div className="relative space-y-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Unmatched Speed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kaspa's blockDAG architecture enables <strong>near-instant block times</strong> with a target
                of <strong>100 BPS (blocks per second)</strong>. This is crucial for HFT analytics where milliseconds matter.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
            <div className="relative space-y-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-3">
                <Network className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold">Scalable Infrastructure</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Unlike traditional blockchains that sacrifice decentralization for speed, Kaspa's <strong>GHOSTDAG consensus</strong> scales
                without compromising security or decentralization.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full" />
            <div className="relative space-y-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center mb-3">
                <Cpu className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold">ML & ZK Ready</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                High throughput and low latency make Kaspa ideal for <strong>machine learning model training</strong> and
                <strong> zero-knowledge proof verification</strong> on-chain – essential for our analytics platform.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full" />
            <div className="relative space-y-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center mb-3">
                <Lock className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold">Security & Decentralization</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kaspa maintains <strong>Bitcoin-level security</strong> with proof-of-work consensus, ensuring
                our analytics data remains tamper-proof and verifiable.
              </p>
            </div>
          </div>
        </div>

        <Callout type="info" title="HFT Analytics on Kaspa">
          <p className="text-sm">
            kas.me leverages Kaspa's <strong>100 BPS target</strong> to perform real-time high-frequency trading analysis,
            machine learning inference, and zero-knowledge computations directly on-chain. This combination of speed,
            security, and scalability is unmatched in the blockchain space.
          </p>
        </Callout>
      </div>

      {/* Kaspa Stats */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Kaspa at a Glance
        </h2>
        <StatsGrid
          columns={4}
          stats={[
            {
              label: 'Target Block Rate',
              value: '100 BPS',
              icon: Zap,
              trend: 'up',
              trendValue: 'Scaling'
            },
            {
              label: 'Consensus',
              value: 'GHOSTDAG',
              icon: Network,
            },
            {
              label: 'Confirmation Time',
              value: '~10 seconds',
              icon: Activity,
            },
            {
              label: 'Architecture',
              value: 'blockDAG',
              icon: Database,
            },
          ]}
        />
      </div>

      <hr className="border-border/50" />

      {/* Learning Resources */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          #Study $KAS
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ResourceCard
            icon={BookOpen}
            title="Introduction to Kaspa"
            description="Discover the origins of Kaspa, its groundbreaking blockDAG technology, and how it stands apart from traditional blockchains. Essential reading for understanding the foundation of kas.me."
            href="https://kaspa.com/learn-kaspa"
            external={true}
            badge="Official"
          />

          <ResourceCard
            icon={Cpu}
            title="Technical Overview"
            description="Delve into kas.me's technical foundation, highlighting our innovative analytics technology and how we leverage Kaspa's unique strengths in scalability, speed, and security."
            href="/docs/basics/audits"
          />

          <ResourceCard
            icon={TrendingUp}
            title="Community & Story"
            description="Explore our perspective on Kaspa's ecosystem and why we selected $KAS as the backbone for kas.me. Learn about our decision-making process and vision."
            href="/docs/basics/story"
          />
        </div>
      </div>

      {/* Key Advantages */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Kaspa vs. Alternatives
        </h2>
        <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3 pb-3 border-b border-border/30">
              <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Speed Without Compromise</h3>
                <p className="text-sm text-muted-foreground">
                  While chains like Solana achieve high TPS through centralization, Kaspa maintains decentralization
                  with comparable speeds through its innovative blockDAG structure.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pb-3 border-b border-border/30">
              <Lock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Proof-of-Work Security</h3>
                <p className="text-sm text-muted-foreground">
                  Kaspa uses PoW consensus like Bitcoin, providing battle-tested security without the energy waste
                  thanks to efficient ASIC mining and fast block times.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Network className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">True Scalability</h3>
                <p className="text-sm text-muted-foreground">
                  Unlike Layer 2 solutions that add complexity, Kaspa scales at Layer 1 with parallel block processing,
                  making it ideal for our on-chain HFT analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Speed Comparison Animation */}
        <BlockchainSpeedComparison />
      </div>

      {/* Quote */}
      <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blue-500/10 opacity-50" />
        <p className="relative text-lg font-medium text-foreground italic">
          "Kaspa isn't just fast – it's the only blockchain that can handle real-time HFT analytics at scale."
        </p>
      </div>
    </div>
  )
}
