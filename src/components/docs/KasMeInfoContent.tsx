import { Callout } from './Callout'
import { StatsGrid } from './StatsGrid'
import { ResourceCard } from './ResourceCard'
import { NETWORK_DATA } from '@/lib/network-data'
import {
  Network,
  Shield,
  Code,
  Zap,
  TrendingUp,
  Clock,
  Activity,
  AlertTriangle,
  Lock,
  CheckCircle,
  XCircle,
  Users,
  FileText,
  Coins,
  BarChart3,
  Globe
} from 'lucide-react'

export function KasMeInfoContent() {
  return (
    <div className="space-y-12">
      {/* Development Status Banner */}
      <Callout type="info" title="Active Development - Infrastructure Operational Internally">
        Development infrastructure running: Kaspa nodes extracting blockchain data, ML training testing models, mining funding operations. <strong>Built and tested internally, not public-facing.</strong> Public deployment awaits BaFin regulatory approval. This is bootstrapped engineering with real infrastructure, not vaporware.
      </Callout>

      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Network className="w-10 h-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold">About kas.me</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          kas.me is a platform I'm building on top of Kaspa to solve a specific problem: how do you create real-time, institutional-grade blockchain analytics without relying on centralized infrastructure?
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          The core is <strong>CyberPumpNetwork (CPN)</strong> - a multi-layered P2P network using libp2p's gossipsub protocol for data broadcasting and validation. It's similar to how IPFS handles distributed data, but optimized for real-time on-chain analytics rather than file storage.
        </p>
      </div>

      {/* The Problem */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">The Problem I'm Solving</h2>
        <p className="text-lg text-muted-foreground">
          When building trading tools for Kaspa, I ran into several issues with existing approaches:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Callout type="warning" title="Centralized APIs are Fragile">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Single point of failure</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Rate limits prevent HFT</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Dependent on external infrastructure</span>
              </li>
            </ul>
          </Callout>

          <Callout type="warning" title="Self-Hosted Nodes are Expensive">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Dedicated hardware required</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Constant monitoring needed</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>High bandwidth costs</span>
              </li>
            </ul>
          </Callout>

          <Callout type="warning" title="Compliance Features Missing">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>No built-in risk controls</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Missing audit trails</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Not designed for institutions</span>
              </li>
            </ul>
          </Callout>
        </div>

        <p className="text-lg text-muted-foreground">
          kas.me addresses these by building a <strong>distributed network</strong> where multiple nodes validate blockchain data peer-to-peer, with built-in compliance systems and cryptographic verification.
        </p>
      </section>

      {/* Core Architecture */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Core Architecture</h2>

        <Callout type="tip" title="Why libp2p?">
          I chose libp2p (the same protocol IPFS uses) because it's battle-tested and handles peer discovery, NAT traversal, and message routing out of the box. The alternative was building custom WebSocket mesh networking - reinventing problems libp2p already solves.
        </Callout>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Layer 1: Godfather Nodes */}
          <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">Layer 1: Godfather Nodes</h3>
            </div>
            <p className="text-sm text-muted-foreground">Full Kaspa Validators + ML</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span><strong>ARE full Kaspa nodes</strong> (validate blockchain)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Read chain directly (UTXO indexing)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Train ML models (whale tracking)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Broadcast via libp2p to Workers</span>
              </li>
            </ul>
          </div>

          {/* Layer 2: Worker Nodes */}
          <div className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Activity className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">Layer 2: Worker Nodes</h3>
            </div>
            <p className="text-sm text-muted-foreground">Flexible Architecture (Lightweight/Full)</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span><strong>CAN BE full Kaspa nodes</strong> (operator choice)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Lightweight: Receive from Godfathers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Full: Read blockchain directly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Serve REST API + analytics</span>
              </li>
            </ul>
          </div>

          {/* Layer 3: Platform */}
          <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">Layer 3: Platform</h3>
            </div>
            <p className="text-sm text-muted-foreground">End Users</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>React web interface</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>REST API access</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>WebSocket streams</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Token-gated features</span>
              </li>
            </ul>
          </div>
        </div>

        <Callout type="success" title="What This Means">
          If one Godfather node fails, Workers still receive data from others. Multi-source validation prevents manipulation. Regional processing keeps latency low. No single point of failure.
        </Callout>
      </section>

      {/* Performance Metrics */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Technical Performance (Design Targets)</h2>
        <p className="text-muted-foreground">
          These are theoretical targets based on the architecture design. Real-world performance will depend on network topology, bandwidth, and usage patterns. I haven't stress-tested beyond 100 simulated nodes yet.
        </p>

        <StatsGrid
          columns={4}
          stats={[
            { label: 'Regional Latency', value: NETWORK_DATA.PERFORMANCE.latency.regional, icon: Zap, trend: 'up', trendValue: 'Worker → User (same region)' },
            { label: 'Orders Per Second', value: NETWORK_DATA.PERFORMANCE.throughput.ordersPerSecond, icon: TrendingUp, trend: 'up', trendValue: 'Per Worker cluster' },
            { label: 'Audit Trail Processing', value: NETWORK_DATA.PERFORMANCE.auditTrail.eventProcessing, icon: Clock, trend: 'up', trendValue: 'Per event' },
            { label: 'End-to-End Latency', value: '<100ms', icon: Activity, trend: 'up', trendValue: 'Kaspa block → Worker' }
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Callout type="note" title="Latency Breakdown">
            <ul className="space-y-1 text-sm">
              <li>→ Regional: &lt;5ms</li>
              <li>→ Inter-regional: 15-30ms</li>
              <li>→ End-to-end: &lt;100ms</li>
            </ul>
          </Callout>

          <Callout type="note" title="Throughput Capacity">
            <ul className="space-y-1 text-sm">
              <li>→ 40k+ orders/sec per cluster</li>
              <li>→ 100k+ WebSocket connections</li>
              <li>→ Horizontal Redis scaling</li>
            </ul>
          </Callout>

          <Callout type="note" title="Validation Speed">
            <ul className="space-y-1 text-sm">
              <li>→ Multi-source: 2-8ms (3+ sources)</li>
              <li>→ Audit trail: 0.051ms/event</li>
              <li>→ Crypto verify: &lt;1ms</li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* Compliance Systems */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Compliance & Risk Management</h2>
        <p className="text-lg text-muted-foreground">
          Since I'm based in Germany, the platform is being built with BaFin/EU MiCA compliance in mind from day one:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kill Switch */}
          <div className="rounded-xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <h3 className="text-xl font-bold">Kill Switch</h3>
            </div>
            <p className="text-sm text-muted-foreground">Implemented in code, ready to deploy</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Instant trading halt capability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Auto-trigger on: 5% loss in 1min</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Auto-trigger on: API errors &gt;50%</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Manual emergency shutdown</span>
              </li>
            </ul>
          </div>

          {/* Pre-Trade Controls */}
          <div className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">Pre-Trade Controls</h3>
            </div>
            <p className="text-sm text-muted-foreground">Design phase, not yet deployed</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Validates trades BEFORE execution</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Position limits enforcement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>DORA concentration (max 40% per exchange)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Margin requirement checks</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Audit Trail */}
        <Callout type="success" title="Audit Trail System (Implemented)">
          <div className="space-y-3">
            <p>Every event logged with HMAC-SHA256 cryptographic signature - tamper-proof hash chain similar to blockchain verification.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold">Performance</div>
                <div className="text-muted-foreground">0.051ms per event</div>
              </div>
              <div>
                <div className="font-semibold">Retention</div>
                <div className="text-muted-foreground">10-year (BaFin requirement)</div>
              </div>
              <div>
                <div className="font-semibold">Integrity</div>
                <div className="text-muted-foreground">Hash chain verification</div>
              </div>
            </div>
          </div>
        </Callout>

        <Callout type="warning" title="Regulatory Status">
          These compliance systems are BUILT but regulatory approval is PENDING. BaFin approval timeline depends on their review process - no guarantees.
        </Callout>
      </section>

      {/* Token-Gated Access */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Token-Gated Access System</h2>
        <p className="text-lg text-muted-foreground">
          Unlike traditional staking (tokens locked), the plan is a <strong>Hold-to-Access</strong> model:
        </p>

        <Callout type="tip" title="How It Works (Planned)">
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li>Platform checks your wallet balance on-chain</li>
            <li>If you hold ≥ required $CYPU, features unlock automatically</li>
            <li>Sell tokens anytime - no lock-up periods</li>
            <li>Access persists as long as you hold the threshold</li>
          </ol>
        </Callout>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg border border-border/50 bg-card/50 p-4 space-y-2">
            <div className="font-semibold">Basic (1+ CYPU)</div>
            <p className="text-sm text-muted-foreground">Explorer access, public blockchain data</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/50 p-4 space-y-2">
            <div className="font-semibold">Analytics (100+ CYPU)</div>
            <p className="text-sm text-muted-foreground">Advanced analytics, multi-wallet tracking</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/50 p-4 space-y-2">
            <div className="font-semibold">Intelligence (2,500+ CYPU)</div>
            <p className="text-sm text-muted-foreground">Intelligence Center pro features</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/50 p-4 space-y-2">
            <div className="font-semibold">Elite (20,000+ CYPU)</div>
            <p className="text-sm text-muted-foreground">Reserved for future premium features</p>
          </div>
        </div>

        <Callout type="note" title="Still Theoretical">
          This is the plan - still figuring out edge cases around real-time balance checks and gas optimization.
        </Callout>
      </section>

      {/* What Exists vs What Doesn't */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What Exists vs What Doesn't</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* What EXISTS */}
          <Callout type="success" title="What EXISTS (Verified Code)">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>CyberPumpNetwork architecture design</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Audit trail cryptography system</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Kill Switch implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Multi-sig treasury wallet setup</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>This React documentation site</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>libp2p P2P network prototype</span>
              </li>
            </ul>
          </Callout>

          {/* What DOES NOT EXIST */}
          <Callout type="warning" title="What DOES NOT EXIST (Yet)">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Live platform (nothing accessible to users)</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Working CyberPumpNetwork with real nodes</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Node reward distribution system</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Token-gated access implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>BaFin regulatory approval</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Any actual users or revenue</span>
              </li>
            </ul>
          </Callout>
        </div>

        <Callout type="info" title="External Infrastructure (We're Users, Not Providers)">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>DEX pools (using KaspaCom infrastructure)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>$CYPU token on Kaspa blockchain</span>
            </li>
          </ul>
        </Callout>

        <Callout type="note" title="Critical Distinction">
          When I write "the platform checks your wallet balance," that's FUTURE tense - describing what I'm building. The code exists in the repo, but it's not deployed or live. Think of this documentation as a blueprint, not a product manual.
        </Callout>
      </section>

      {/* The Learning Process */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">The Learning Process</h2>
        <p className="text-lg text-muted-foreground">
          This project started as an experiment in P2P networking for blockchain data. Along the way, I discovered:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Callout type="note" title="libp2p is Powerful But Complex">
            <ul className="space-y-2 text-sm">
              <li>→ Peer discovery works great</li>
              <li>→ Debugging gossipsub routing is hard</li>
              <li>→ NAT traversal sometimes fails on restrictive networks</li>
              <li>→ Message deduplication trickier than expected</li>
            </ul>
          </Callout>

          <Callout type="note" title="Multi-Source Validation is Necessary">
            <ul className="space-y-2 text-sm">
              <li>→ Single-source data can be manipulated</li>
              <li>→ Consensus from 3+ sources adds latency but prevents attacks</li>
              <li>→ Reputation scoring helps identify malicious peers</li>
            </ul>
          </Callout>

          <Callout type="note" title="Regulatory Compliance is Unavoidable">
            <ul className="space-y-2 text-sm">
              <li>→ Can't build trading infrastructure without BaFin compliance</li>
              <li>→ Kill switches and pre-trade controls aren't optional</li>
              <li>→ Audit trail requirements stricter than expected (10-year retention!)</li>
            </ul>
          </Callout>

          <Callout type="note" title="Bootstrapped Constraints are Real">
            <ul className="space-y-2 text-sm">
              <li>→ No VC funding = slower development</li>
              <li>→ Every design choice balances cost vs features</li>
              <li>→ Can't hire specialists, have to learn everything myself</li>
            </ul>
          </Callout>
        </div>

        <Callout type="tip" title="Honest Disclaimer">
          This is a solo developer project. I'm not claiming to be an expert in P2P networking, cryptography, or regulatory compliance - I'm learning as I build and documenting what I discover.
        </Callout>
      </section>

      {/* Related Resources */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Learn More</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResourceCard
            icon={Coins}
            title="Detailed Tokenomics"
            description="Full economic model, revenue streams, and treasury management"
            href="/docs/tokenomics/det-tokenomics"
          />
          <ResourceCard
            icon={Network}
            title="CyberPumpNetwork"
            description="Deep dive into The IT CyberSpace network architecture"
            href="/docs/tokenomics/titcs/network"
          />
          <ResourceCard
            icon={BarChart3}
            title="Platform Features"
            description="Feature comparison matrix and access tiers"
            href="/docs/platform/infocenter/features"
          />
          <ResourceCard
            icon={FileText}
            title="Dev-Talks Archive"
            description="Behind-the-scenes development journey"
            href="/docs/community/devtalks/devtalk-1"
          />
          <ResourceCard
            icon={Users}
            title="FAQ"
            description="Common questions answered"
            href="/docs/community/hub/faq"
          />
          <ResourceCard
            icon={Shield}
            title="Security Audits"
            description="Transparency and security audit information"
            href="/docs/community/hub/audits"
          />
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">The Bottom Line</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-lg text-muted-foreground text-center">
            kas.me is an experiment in building institutional-grade blockchain infrastructure using P2P networking. It's:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-border/50 bg-card/50 p-4 space-y-2">
              <div className="font-semibold flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" />
                Not Live
              </div>
              <p className="text-sm text-muted-foreground">Everything described here is being built, not launched</p>
            </div>

            <div className="rounded-lg border border-border/50 bg-card/50 p-4 space-y-2">
              <div className="font-semibold flex items-center gap-2">
                <Code className="w-4 h-4 text-accent" />
                Bootstrapped
              </div>
              <p className="text-sm text-muted-foreground">No investors, no deadlines, no hype pressure</p>
            </div>

            <div className="rounded-lg border border-border/50 bg-card/50 p-4 space-y-2">
              <div className="font-semibold flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                Compliance-First
              </div>
              <p className="text-sm text-muted-foreground">Designed for BaFin/MiCA from the ground up</p>
            </div>

            <div className="rounded-lg border border-border/50 bg-card/50 p-4 space-y-2">
              <div className="font-semibold flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent" />
                Open-Source
              </div>
              <p className="text-sm text-muted-foreground">Code is public, architecture is documented</p>
            </div>
          </div>

          <Callout type="warning" title="Not a Moon Rocket">
            <p>
              If you're looking for a "revolutionary DeFi protocol" or the next "10000x gem," this isn't it. This is an engineering project focused on solving real problems with honest technical solutions.
            </p>
          </Callout>

          <p className="text-center text-muted-foreground">
            <strong>Status:</strong> Development infrastructure operational internally. DeFi components (PEG pool, token minting) live on-chain. Platform features (API, Worker nodes, Intelligence Center) built and tested internally, awaiting BaFin approval for public deployment.
          </p>
        </div>
      </section>
    </div>
  )
}
