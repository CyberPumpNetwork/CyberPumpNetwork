import { Link } from 'react-router-dom'
import { ResourceCard } from './ResourceCard'
import { Callout } from './Callout'
import { StatsGrid } from './StatsGrid'
import { TOKENOMICS, formatSupply } from '@/lib/tokenomics-data'
import {
  FileText,
  BarChart3,
  Shield,
  Network,
  Database,
  Coins,
  Vote,
  Lock,
  Zap,
  Users,
  TrendingUp
} from 'lucide-react'

export function TokenomicsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 rounded-2xl blur-2xl -z-10" />
        <div className="relative space-y-6 py-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-accent bg-clip-text text-transparent">
            Token Economy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            kas.me operates with a dual-token system on Kaspa: <span className="text-accent font-semibold">$CYPU</span> for platform utility
            and <span className="text-accent font-semibold">$CYPUV</span> for governance rights.
          </p>
        </div>
      </div>

      {/* Important Notice */}
      <Callout type="warning" title="Risk Disclosure">
        <p className="text-sm">
          This is an experimental project under active development. Features described here are planned and subject to change.
          This documentation does not constitute financial advice. Participation carries technical and financial risks.
        </p>
      </Callout>

      {/* Token Overview */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Dual-Token System
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* CYPU Token */}
          <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent">$CYPU</h3>
                  <p className="text-sm text-muted-foreground">Utility Token</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Access to kas.me platform services, analytics tools, and infrastructure participation.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-accent/20">
                <div>
                  <p className="text-xs text-muted-foreground">Max Supply</p>
                  <p className="text-sm font-semibold">{formatSupply(TOKENOMICS.CYPU.maxSupply)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Type</p>
                  <p className="text-sm font-semibold">{TOKENOMICS.CYPU.type.split(' ')[0]}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CYPUV Token */}
          <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Vote className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent">$CYPUV</h3>
                  <p className="text-sm text-muted-foreground">Governance Token</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                DAO voting rights for community governance. Earned through contributions and ecosystem participation.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-accent/20">
                <div>
                  <p className="text-xs text-muted-foreground">Max Supply</p>
                  <p className="text-sm font-semibold">{formatSupply(TOKENOMICS.CYPUV.maxSupply)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Type</p>
                  <p className="text-sm font-semibold">{TOKENOMICS.CYPUV.type.split(' ')[0]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <StatsGrid
          columns={4}
          stats={[
            {
              label: 'Blockchain',
              value: 'Kaspa',
              icon: Zap,
            },
            {
              label: 'Token Standard',
              value: 'KRC-20',
              icon: Coins,
            },
            {
              label: 'Regulatory Target',
              value: 'EU MiCA',
              icon: Shield,
            },
            {
              label: 'Launch Type',
              value: 'Fair Launch',
              icon: Users,
            },
          ]}
        />
      </div>

      <hr className="border-border/50" />

      {/* Key Features */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-accent/50 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparency First</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All wallets and transactions are publicly verifiable on-chain. No hidden allocations.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-accent/50 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Treasury Management</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Multi-signature wallets and DAO governance for community-controlled treasury.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-accent/50 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Utility-Driven</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Value derived from real platform services and analytics tools, not speculation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-border/50" />

      {/* CYPUV Governance System */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Governance System
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
          Platform governance is handled by CYPUV token holders through decentralized voting on treasury spending, feature priorities, and protocol changes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* CYPUV Token Details */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Vote className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold">$CYPUV Token</h3>
                <p className="text-sm text-muted-foreground">Governance Rights</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-muted-foreground">Max Supply:</span>
                <span className="font-semibold">{TOKENOMICS.CYPUV.maxSupply.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-muted-foreground">Type:</span>
                <span className="font-semibold">{TOKENOMICS.CYPUV.type.split(' (')[0]}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border/50">
                <span className="text-muted-foreground">Purpose:</span>
                <span className="font-semibold">{TOKENOMICS.CYPUV.purpose}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Classification:</span>
                <span className="font-semibold">{TOKENOMICS.CYPUV.classification}</span>
              </div>
            </div>
          </div>

          {/* Voting Rights */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              Voting Rights
            </h4>
            <ul className="space-y-3 text-sm">
              {TOKENOMICS.CYPUV.votingRights.map((right) => (
                <li key={right} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{right}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Callout type="warning" title="Acquiring $CYPUV">
          <p className="text-sm mb-2">
            <strong>$CYPUV is freely available via the Bonding Curve on KaspaCom L2.</strong> User-purchased tokens are fully liquid - no locks, no restrictions.
          </p>
          <p className="text-sm">
            Only firm-acquired tokens are locked (Tangem hardware + 4-year smart contract).{' '}
            <Link
              to="/docs/tokenomics/det-token/lock#firm-cypuv-lock"
              className="text-accent font-semibold hover:underline"
            >
              See lock details →
            </Link>
          </p>
        </Callout>
      </div>

      <hr className="border-border/50" />

      {/* Documentation Resources */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1.5 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Detailed Documentation
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard
            icon={FileText}
            title="Whitepaper"
            description="Complete vision, architecture, and roadmap for the kas.me ecosystem."
            href="https://drive.google.com/file/d/15VvRoxo2g-s6Q1FiX-BYvyxYhJTAGjBs/view"
            external={true}
            badge="WIP"
          />

          <ResourceCard
            icon={BarChart3}
            title="Token Distribution"
            description="Detailed breakdown of supply, distribution mechanics, and vesting schedules."
            href="/docs/tokenomics/det-tokenomics"
          />

          <ResourceCard
            icon={Database}
            title="Treasury & Wallets"
            description="Multi-sig wallet structure, treasury management, and public transparency."
            href="/docs/tokenomics/det-token/wallets"
          />

          <ResourceCard
            icon={Lock}
            title="Token Locks"
            description="Locking mechanisms and vesting schedules for long-term stability."
            href="/docs/tokenomics/det-token/lock"
          />

          <ResourceCard
            icon={Shield}
            title="Compliance"
            description="BaFin, EU MiCA, and DORA compliance framework and risk management."
            href="/docs/tokenomics/det-token/compliance"
          />

          <ResourceCard
            icon={Network}
            title="Infrastructure"
            description="P2P network architecture, audit trails, and node operations (planned)."
            href="/docs/tokenomics/det-token/infrastructure"
          />
        </div>
      </div>

      {/* Compliance Note */}
      <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/10 opacity-50" />
        <div className="relative flex items-start gap-3">
          <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Regulatory Compliance</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              kas.me is designed with BaFin and EU MiCA regulations in mind. All features include appropriate risk disclosures and compliance considerations.
              Detailed compliance documentation is available in the dedicated sections.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy Quote */}
      <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/10 opacity-50" />
        <p className="relative text-lg font-medium text-foreground italic">
          "Transparency, utility, and compliance – not speculation."
        </p>
      </div>
    </div>
  )
}
