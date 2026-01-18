import { Callout } from './Callout'
import { ResourceCard } from './ResourceCard'
import {
  Wallet,
  Eye,
  Coins,
  Zap,
  BookOpen,
  Users,
  Code,
  ExternalLink,
  ArrowRight,
  Network,
  Shield,
  BarChart3,
  FileText,
  MessageSquare,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function GettingStartedContent() {
  return (
    <div className="space-y-12">
      {/* Development Status Banner */}
      <Callout type="warning" title="Platform Status: In Development">
        kas.me is currently being built. Nothing described on this page is live or accessible yet. This guide explains what I'm planning to build and how it would work once launched. No timeline guarantees.
      </Callout>

      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Zap className="w-10 h-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold">Getting Started with kas.me</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          This guide explains how kas.me is designed to work once it's live. Think of this as a preview of the planned user experience - from connecting your wallet to unlocking advanced features.
        </p>
      </div>

      {/* What is kas.me? */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What is kas.me?</h2>
        <p className="text-lg text-muted-foreground">
          kas.me is a platform I'm building to solve a specific problem: how do you get real-time blockchain analytics for Kaspa without depending on centralized APIs or running expensive infrastructure yourself?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Callout type="tip" title="The Core Idea">
            Instead of relying on a single API provider, kas.me uses a distributed network of nodes (CyberPumpNetwork) that validate blockchain data peer-to-peer. This means no single point of failure and cryptographically verified data.
          </Callout>

          <Callout type="note" title="Built for Kaspa">
            Kaspa's BlockDAG architecture and 1-second block times make it perfect for real-time analytics. The platform is designed to leverage this speed while adding compliance features needed for institutional use.
          </Callout>
        </div>

        <Link to="/docs/getting-started/kasme-info">
          <button className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium">
            Learn more about the architecture
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </section>

      {/* Why Kaspa? */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Why Kaspa?</h2>
        <p className="text-lg text-muted-foreground">
          If you're new to Kaspa, here's why I chose it as the foundation:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg border border-border/50 bg-card/50 p-6 space-y-3">
            <Network className="w-8 h-8 text-accent" />
            <div className="font-semibold">BlockDAG Architecture</div>
            <p className="text-sm text-muted-foreground">
              Not a traditional blockchain - a Directed Acyclic Graph that processes blocks in parallel, not sequentially. This enables higher throughput without sacrificing decentralization.
            </p>
          </div>

          <div className="rounded-lg border border-border/50 bg-card/50 p-6 space-y-3">
            <Zap className="w-8 h-8 text-accent" />
            <div className="font-semibold">Fast Block Times</div>
            <p className="text-sm text-muted-foreground">
              ~1 second block times mean near-real-time data. For analytics, this is a huge advantage over Bitcoin's 10-minute blocks or Ethereum's ~12 seconds.
            </p>
          </div>

          <div className="rounded-lg border border-border/50 bg-card/50 p-6 space-y-3">
            <Shield className="w-8 h-8 text-accent" />
            <div className="font-semibold">GHOSTDAG Consensus</div>
            <p className="text-sm text-muted-foreground">
              The consensus mechanism that makes BlockDAG secure. It allows high throughput while maintaining the security properties of proof-of-work.
            </p>
          </div>
        </div>

        <Link to="/docs/getting-started/basics">
          <button className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium">
            Deep dive into Kaspa fundamentals
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </section>

      {/* The Two-Token System */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">The Two-Token System</h2>
        <p className="text-lg text-muted-foreground">
          kas.me uses two KRC-20 tokens, each serving a different purpose:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CYPU */}
          <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Coins className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">$CYPU - Platform Token</h3>
            </div>
            <p className="text-sm text-muted-foreground">The main utility token for accessing platform features</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Max Supply: 1,000,000,000 tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Purpose: Token-gated feature access</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Acquisition: Mint with KAS (1:1) or trade on DEX</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Standard: KRC-20 on Kaspa blockchain</span>
              </li>
            </ul>
          </div>

          {/* CYPUV */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">$CYPUV - Vault Token</h3>
            </div>
            <p className="text-sm text-muted-foreground">1:1 backed by CYPU in cold storage (Tangem wallet)</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Max Supply: 54,550,000 tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Purpose: Verifiable backing mechanism</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Security: Hardware wallet cold storage</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Standard: KRC-20 on Kaspa blockchain</span>
              </li>
            </ul>
          </div>
        </div>

        <Callout type="tip" title="Why Two Tokens?">
          CYPU is for platform utility. CYPUV provides verifiable backing - you can check the cold wallet balance on-chain to verify the 1:1 peg. This transparency is the goal, though the mechanism is still being finalized.
        </Callout>

        <div className="flex gap-4">
          <Link to="/docs/tokenomics/det-tokenomics">
            <button className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium">
              Detailed Tokenomics
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link to="/docs/tokenomics/publicmarket/mint">
            <button className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium">
              How to Mint CYPU
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

      {/* Planned User Journey */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Planned User Journey (Once Live)</h2>
        <p className="text-lg text-muted-foreground">
          Here's how the platform is designed to work:
        </p>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="rounded-lg border border-border/50 bg-card/50 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Step 1: Connect Your Wallet</h3>
            </div>
            <p className="text-muted-foreground">
              No signup, no email required. Just connect your Kaspa wallet address to start tracking your portfolio in real-time. The platform checks your wallet balance to determine feature access tiers.
            </p>
            <Callout type="note" title="Supported Wallets">
              Any standard Kaspa wallet address (KRC-20 compatible). The system reads your on-chain balance - no tokens need to be deposited or locked.
            </Callout>
          </div>

          {/* Step 2 */}
          <div className="rounded-lg border border-border/50 bg-card/50 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Step 2: Explore Free Features</h3>
            </div>
            <p className="text-muted-foreground">
              You don't need tokens to get started. Basic blockchain explorer functionality and public analytics would be available to everyone.
            </p>
            <div className="space-y-2">
              <div className="text-sm font-semibold">Planned Free Features:</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Real-time Kaspa block explorer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Basic on-chain analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Community insights and trends</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-lg border border-border/50 bg-card/50 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Coins className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Step 3: Acquire CYPU (When Ready)</h3>
            </div>
            <p className="text-muted-foreground">
              When you want to unlock advanced features, you can acquire CYPU through minting or DEX trading.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border/50 bg-card/30 p-4 space-y-2">
                <div className="font-semibold text-sm">Mint Directly</div>
                <p className="text-sm text-muted-foreground">Use KAS to mint CYPU at 1:1 ratio. Max 1,000 CYPU per transaction during ICO phase.</p>
                <Link to="/docs/tokenomics/publicmarket/mint" className="text-sm text-accent hover:underline inline-flex items-center gap-1">
                  Learn how <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="rounded-lg border border-border/50 bg-card/30 p-4 space-y-2">
                <div className="font-semibold text-sm">Trade on DEX</div>
                <p className="text-sm text-muted-foreground">Buy CYPU from liquidity pools on KaspaCom DEX infrastructure.</p>
                <a href="https://chainge.finance" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline inline-flex items-center gap-1">
                  Visit DEX <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="rounded-lg border border-border/50 bg-card/50 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Step 4: Unlock Features Automatically</h3>
            </div>
            <p className="text-muted-foreground">
              Hold-to-Access model: Features unlock based on your wallet balance. No staking, no lock-ups - just hold CYPU and access tier benefits.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-2 px-4">Tier</th>
                    <th className="text-left py-2 px-4">CYPU Required</th>
                    <th className="text-left py-2 px-4">Features</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4 font-semibold">Basic</td>
                    <td className="py-2 px-4">1+</td>
                    <td className="py-2 px-4">Portfolio tracking, basic analytics</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4 font-semibold">Analytics</td>
                    <td className="py-2 px-4">100+</td>
                    <td className="py-2 px-4">Advanced metrics, multi-wallet support</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4 font-semibold">Intelligence</td>
                    <td className="py-2 px-4">2,500+</td>
                    <td className="py-2 px-4">Intelligence Center, pro analytics</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-4 font-semibold">Elite</td>
                    <td className="py-2 px-4">20,000+</td>
                    <td className="py-2 px-4">Reserved for future premium features</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Link to="/docs/platform/infocenter/features">
              <button className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium text-sm">
                See complete feature matrix
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Legal & Compliance */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Legal & Compliance</h2>

        <Callout type="warning" title="Regulatory Status">
          <div className="space-y-3">
            <p>
              kas.me is being built with regulatory compliance in mind from day one. However, regulatory approval is PENDING, not granted.
            </p>
            <div className="space-y-2 text-sm">
              <div className="font-semibold">Designed for compliance with:</div>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  <span>BaFin (German Federal Financial Supervisory Authority)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  <span>EU MiCA (Markets in Crypto-Assets Regulation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  <span>DORA (Digital Operational Resilience Act)</span>
                </li>
              </ul>
            </div>
          </div>
        </Callout>

        <Callout type="note" title="Important Disclaimers">
          <ul className="space-y-2 text-sm">
            <li>→ Platform features may change based on regulatory requirements</li>
            <li>→ No guarantees on launch timeline (depends on BaFin approval process)</li>
            <li>→ CYPU is a pure utility token - no profit guarantees, dividends, or staking rewards</li>
            <li>→ Value derives solely from platform utility and market demand</li>
          </ul>
        </Callout>
      </section>

      {/* Resources */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Essential Resources</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResourceCard
            icon={BookOpen}
            title="Platform Guides"
            description="Step-by-step tutorials for every feature (when available)"
            href="/docs/platform/infocenter/guides"
          />
          <ResourceCard
            icon={Users}
            title="Community & Support"
            description="FAQ, our story, and dev talks from the founder"
            href="/docs/community"
          />
          <ResourceCard
            icon={Code}
            title="For Developers"
            description="API docs and integration guides (coming later)"
            href="/docs/development"
            badge="Coming Soon"
          />
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Choose Your Path</h2>
        <p className="text-center text-lg text-muted-foreground">
          Dive deeper based on what matters to you:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResourceCard
            icon={Coins}
            title="For Investors"
            description="Detailed tokenomics, supply model, and liquidity strategy"
            href="/docs/tokenomics/det-tokenomics"
          />
          <ResourceCard
            icon={BarChart3}
            title="For Users"
            description="Complete feature list, FAQ, and platform capabilities"
            href="/docs/platform/infocenter/features"
          />
          <ResourceCard
            icon={MessageSquare}
            title="Our Story"
            description="Learn about The IT CyberSpace and the development journey"
            href="/docs/community/hub/story"
          />
        </div>
      </section>

      {/* Social Links */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Stay Connected</h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
          <a
            href="https://kas.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all"
          >
            Website
            <ExternalLink className="w-4 h-4" />
          </a>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <a
            href="https://x.com/TheITCyberSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all"
          >
            X (Twitter)
            <ExternalLink className="w-4 h-4" />
          </a>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <a
            href="https://github.com/CyberPumpNetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all"
          >
            GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Final Note */}
      <div className="text-center py-8 space-y-4">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          This is what I'm building. The code exists, the architecture is documented, but nothing is live yet. Follow along as I develop it.
        </p>
      </div>
    </div>
  )
}
