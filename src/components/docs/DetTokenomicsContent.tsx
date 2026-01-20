import { ResourceCard } from './ResourceCard'
import { Callout } from './Callout'
import { StatsGrid } from './StatsGrid'
import { SupplyDistributionChart, TreasuryAllocationChart } from './TokenomicsCharts'
import { PaymentFlowDiagram, NetworkTopologyFlow } from './PaymentFlowDiagram'
import { ComparisonFlow } from './FlowDiagram'
import { TOKENOMICS, formatSupply } from '@/lib/tokenomics-data'
import { NETWORK_DATA } from '@/lib/network-data'
import {
  Coins,
  Lock,
  Shield,
  Network,
  Wallet,
  TrendingUp,
  Database,
  Zap,
  Users,
  FileText,
  DollarSign,
  GitBranch,
  Target,
  CheckCircle,
  AlertTriangle,
  ArrowRightLeft,
  Layers,
  Timer,
  CreditCard,
  Building2,
  Scale,
  Activity,
  Flame
} from 'lucide-react'

export function DetTokenomicsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-2xl blur-3xl -z-10" />
        <div className="relative space-y-6 py-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            Technical Deep-Dive
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground via-accent to-accent bg-clip-text text-transparent">
            $CYPU Detailed Tokenomics
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
            A comprehensive technical documentation of the $CYPU token economy, including the groundbreaking
            <span className="text-accent font-semibold"> Hold-to-Access model</span>, payment flows, treasury management,
            network economics, and compliance systems.
          </p>
        </div>
      </div>

      {/* Core Stats */}
      <StatsGrid
        columns={4}
        stats={[
          {
            label: 'Max Supply',
            value: `${formatSupply(TOKENOMICS.CYPU.maxSupply)} CYPU`,
            icon: Coins,
          },
          {
            label: 'ICO Allocation',
            value: `Up to ${formatSupply(TOKENOMICS.ICO.totalAllocation)}`,
            icon: Users,
          },
          {
            label: 'Locked Tokens',
            value: `~${formatSupply(TOKENOMICS.TREASURY.companyColdStorage.amount)}`,
            icon: Lock,
          },
          {
            label: 'Minting Ratio',
            value: '1 KAS = 1 CYPU',
            icon: ArrowRightLeft,
          },
        ]}
      />

      <hr className="border-border/50" />

      {/* 1. CYPU HOLD = ACCESS MODEL */}
      <div id="hold-access-model">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1.5 h-10 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          The Core Value Proposition: CYPU Hold = Access
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The fundamental innovation of $CYPU is its <strong className="text-foreground">Hold-to-Access</strong> model.
            Unlike traditional tokens requiring staking or locking, $CYPU grants platform access simply by holding tokens in your wallet.
          </p>

          <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/10 opacity-50" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4 text-accent">How It Works</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">No Staking Required</p>
                      <p className="text-sm text-muted-foreground">Keep full control of your tokens at all times</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Instant Access</p>
                      <p className="text-sm text-muted-foreground">Features unlock the moment you hold required amount</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Lifetime Benefits</p>
                      <p className="text-sm text-muted-foreground">Access persists as long as you hold the tokens</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Tradeable Anytime</p>
                      <p className="text-sm text-muted-foreground">No lock-up periods or withdrawal penalties</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Verifiable On-Chain</p>
                      <p className="text-sm text-muted-foreground">Platform checks your wallet balance in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Pure Utility</p>
                      <p className="text-sm text-muted-foreground">No yields or dividends - platform access only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-accent" />
              Access Tier System
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Coins className="w-6 h-6 text-green-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-green-500">Basic Access</h4>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm font-semibold">1 CYPU</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Free Explorer features, basic analytics, public market data access
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-accent/10 to-transparent border border-accent/20">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-accent">Intelligence Pro</h4>
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold">5,000 CYPU</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Advanced on-chain analytics, whale tracking, real-time alerts, API access
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-accent/10 to-transparent border border-accent/20">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-accent">Node Operator Access</h4>
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold">Custom</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    CyberPumpNetwork node operation, data validation rewards, infrastructure participation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Callout type="tip" title="Why Hold-to-Access?">
            <p>
              Traditional staking locks tokens and reduces liquidity. The Hold-to-Access model maintains market liquidity
              while still requiring token ownership for platform benefits. Users can exit anytime by selling, making
              the token more tradeable and liquid.
            </p>
          </Callout>
        </div>
      </div>

      <hr className="border-border/50" />

      {/* 2. PAYMENT MODELS */}
      <div id="payment-models">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1.5 h-10 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Payment Models & Revenue Flow
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            kas.me accepts payments in two forms, each with distinct flow mechanisms that balance
            sustainability with network rewards.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Option 1: CYPU Payment */}
            <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Coins className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent">Option 1: CYPU Tokens</h3>
                    <p className="text-sm text-muted-foreground">Native payment method</p>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-accent/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Payment Amount</span>
                    <span className="font-semibold">100 CYPU</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Service Value</span>
                    <span className="font-semibold">$20 @ $0.20/CYPU</span>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-lg p-4 space-y-3">
                  <p className="font-semibold text-sm mb-3">Automatic Split:</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">50 CYPU (50%)</p>
                      <p className="text-xs text-muted-foreground">Company Treasury</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                      <Network className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">50 CYPU (50%)</p>
                      <p className="text-xs text-muted-foreground">Node Reward Pool</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 2: Fiat Payment */}
            <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent">Option 2: Fiat (USD/EUR)</h3>
                    <p className="text-sm text-muted-foreground">Traditional payment</p>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-accent/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Payment Amount</span>
                    <span className="font-semibold">$20 USD</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Payment Method</span>
                    <span className="font-semibold">Stripe/PayPal</span>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-lg p-4 space-y-3">
                  <p className="font-semibold text-sm mb-3">Revenue Flow:</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">$20 USD (100%)</p>
                      <p className="text-xs text-muted-foreground">Company Bank Account</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-accent/20">
                    <p className="text-xs text-muted-foreground italic">
                      Company then buys CYPU from DEX to reward node operators
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Flow Diagram */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-accent" />
              Complete Payment Flow Architecture
            </h3>

            <PaymentFlowDiagram />
          </div>

          <Callout type="info" title="Treasury vs Burn Model">
            <p>
              Unlike deflationary burn models that permanently destroy tokens, kas.me routes revenue to a <strong>Company Treasury</strong>.
              This ensures sustainable operations (development, infrastructure, compliance) while maintaining the flexibility
              to strategically buy back tokens when beneficial. The 50/50 split balances company sustainability with network
              incentives.
            </p>
          </Callout>
        </div>
      </div>

      <hr className="border-border/50" />

      {/* 3. TOKEN ECONOMICS FLOW */}
      <div id="token-economics">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1.5 h-10 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Token Economics Flow
        </h2>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <StatsGrid
              columns={2}
              stats={[
                {
                  label: 'Maximum Supply',
                  value: TOKENOMICS.CYPU.maxSupply.toLocaleString(),
                  icon: Coins,
                },
                {
                  label: 'ICO Maximum',
                  value: TOKENOMICS.ICO.totalAllocation.toLocaleString(),
                  icon: Users,
                },
                {
                  label: 'Locked (Tangem Vaults)',
                  value: `~${TOKENOMICS.TREASURY.companyColdStorage.amount.toLocaleString()}`,
                  icon: Lock,
                },
                {
                  label: 'Minting Rate',
                  value: '1 KAS : 1 CYPU',
                  icon: ArrowRightLeft,
                },
              ]}
            />
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              Supply Distribution
            </h3>
            <SupplyDistributionChart />
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              Fair Launch Mechanics
            </h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">1:1 KAS Minting</p>
                    <p className="text-sm text-muted-foreground">Send 1 KAS, receive 1 CYPU - simple and transparent</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Maximum 1,000 per Batch</p>
                    <p className="text-sm text-muted-foreground">Prevents whale dominance during minting</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">1 Transaction per User</p>
                    <p className="text-sm text-muted-foreground">Fair distribution mechanism</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">No Pre-mine</p>
                    <p className="text-sm text-muted-foreground">All tokens accounted for and verifiable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Callout type="warning" title="ICO Participation Notice">
            <p>
              The ICO allocation of up to 70M CYPU is limited and distributed on a first-come, first-served basis.
              Once the ICO cap is reached, new tokens can only be acquired through DEX trading. The fair launch
              mechanics ensure equal opportunity for all participants.
            </p>
          </Callout>
        </div>
      </div>

      <hr className="border-border/50" />

      {/* 4. TREASURY MANAGEMENT */}
      <div id="treasury-management">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1.5 h-10 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Treasury Management Strategy
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The treasury system is designed for <strong className="text-foreground">sustainable operations</strong> rather
            than deflationary burning. This approach provides operational funding while maintaining strategic flexibility.
          </p>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-accent" />
              Treasury vs Burn: Strategic Comparison
            </h3>

            <ComparisonFlow
              oldFlow={{
                title: 'OLD - Deflationary Burn',
                nodes: [
                  {
                    id: 'user-burn',
                    label: '100 CYPU Payment',
                    icon: Users,
                    color: 'accent',
                  },
                  {
                    id: 'burned',
                    label: '50 CYPU → 🔥 BURNED',
                    sublabel: 'Gone forever',
                    icon: Flame,
                    color: 'red',
                  },
                  {
                    id: 'nodes-burn',
                    label: '50 CYPU → Node operators',
                    icon: Network,
                    color: 'green',
                  },
                ],
                problem: 'No operational funding! Company has no revenue to sustain itself.',
              }}
              newFlow={{
                title: 'NEW - Treasury Model',
                nodes: [
                  {
                    id: 'user-treasury',
                    label: '100 CYPU Payment',
                    icon: Users,
                    color: 'accent',
                  },
                  {
                    id: 'treasury',
                    label: '50 CYPU → 🏦 TREASURY',
                    sublabel: 'Company operations',
                    icon: Building2,
                    color: 'blue',
                  },
                  {
                    id: 'nodes-treasury',
                    label: '50 CYPU → Node operators',
                    icon: Network,
                    color: 'green',
                  },
                ],
                benefit: 'Sustainable operations! Can still burn tokens strategically when needed.',
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-accent" />
                Treasury Allocation
              </h3>
              <TreasuryAllocationChart />
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Buyback vs Burn Strategy
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">When to Buy Back:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Token price drops below fundamental value</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Market sentiment is pessimistic (buy low)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Treasury has excess fiat reserves</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <p className="font-semibold mb-2">Options After Buyback:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Burn (deflationary pressure)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Rewards (ecosystem growth)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Liquidity (market stability)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Hold (strategic reserve)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Callout type="info" title="Multi-Signature Security">
            <p>
              The treasury wallet requires <strong>3 of 5 signatures</strong> for transactions: CTO, CEO, 2 Community Representatives,
              and Legal Advisor. No single person controls funds. All transactions are publicly verifiable on-chain with
              monthly transparency reports published to the community.
            </p>
          </Callout>
        </div>
      </div>

      <hr className="border-border/50" />

      {/* 5. NETWORK ECONOMICS */}
      <div id="network-economics">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1.5 h-10 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Network Economics (CyberPumpNetwork)
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The <strong className="text-foreground">CyberPumpNetwork (CPN)</strong> creates value through decentralized
            infrastructure for Kaspa blockchain data. Node operators earn rewards for validating and distributing on-chain data.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">P2P Architecture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  libp2p-based decentralized network eliminates single points of failure. Data flows peer-to-peer
                  with cryptographic verification.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Data Validation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Multi-source validation ensures data integrity. Nodes cross-reference multiple sources before
                  accepting blockchain data.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent p-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Node Rewards</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  50% of CYPU payments go to node operators. Rewards distributed proportionally based on
                  validation work.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              Performance Metrics
            </h3>
            <StatsGrid
              columns={4}
              stats={[
                {
                  label: 'Regional Latency',
                  value: NETWORK_DATA.PERFORMANCE.latency.regional,
                  icon: Zap,
                },
                {
                  label: 'Order Capacity',
                  value: `${NETWORK_DATA.PERFORMANCE.throughput.ordersPerSecond}/sec`,
                  icon: Activity,
                },
                {
                  label: 'Audit Trail Speed',
                  value: NETWORK_DATA.PERFORMANCE.auditTrail.eventProcessing,
                  icon: Shield,
                },
                {
                  label: 'Signature Algo',
                  value: NETWORK_DATA.SECURITY.cryptography,
                  icon: Lock,
                },
              ]}
            />
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Network className="w-5 h-5 text-accent" />
              Network Topology
            </h3>

            <NetworkTopologyFlow />
          </div>

          <Callout type="tip" title="Why Decentralization Matters">
            <p>
              Centralized data providers create single points of failure and control. CPN's P2P architecture ensures
              that if any Godfather node fails, Workers continue receiving data from other sources. Multi-source
              validation prevents data manipulation, making the network resilient and trustworthy.
            </p>
          </Callout>
        </div>
      </div>

      <hr className="border-border/50" />

      {/* 6. COMPLIANCE & SAFETY */}
      <div id="compliance-safety">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1.5 h-10 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Compliance & Safety Systems
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            kas.me implements enterprise-grade compliance systems designed to meet <strong className="text-foreground">BaFin</strong>,
            <strong className="text-foreground"> EU MiCA</strong>, and <strong className="text-foreground">DORA</strong> regulatory requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Kill Switch */}
            <div className="relative overflow-hidden rounded-lg border border-border bg-gradient-to-br from-accent/5 to-transparent p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Kill Switch</h3>
                    <p className="text-sm text-muted-foreground">Emergency shutdown</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Instantly halts all trading operations in emergency scenarios. Can be triggered automatically or manually.
                </p>

                <div className="space-y-2 pt-3 border-t border-border/50">
                  <p className="font-semibold text-sm">Auto-Trigger Conditions:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Portfolio loss &gt;5% in 1 minute</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Exchange API errors &gt;50%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Market volatility &gt;20% swing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Security breach detected</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pre-Trade Controls */}
            <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent">Pre-Trade Controls</h3>
                    <p className="text-sm text-muted-foreground">Risk prevention</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Validates every trade BEFORE execution to prevent violations of risk limits and regulatory requirements.
                </p>

                <div className="space-y-2 pt-3 border-t border-accent/20">
                  <p className="font-semibold text-sm">Validation Checks:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Position size limits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>DORA concentration (max 40% per exchange)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Liquidity requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Margin sufficiency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              Audit Trail System
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Tamper-Proof Logs</p>
                  <p className="text-sm text-muted-foreground">HMAC-SHA256 cryptographic signatures on every event</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Timer className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold mb-1">10-Year Retention</p>
                  <p className="text-sm text-muted-foreground">Meets BaFin regulatory storage requirements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Real-Time Logging</p>
                  <p className="text-sm text-muted-foreground">0.051ms per event - no performance impact</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent" />
              Regulatory Compliance Mapping
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-accent/10 to-transparent border border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-accent" />
                  </div>
                  <h4 className="font-bold">BaFin (German Financial Regulator)</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Risk Management Framework:</p>
                    <p className="font-medium">Pre-trade controls (automated)</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Emergency Procedures:</p>
                    <p className="font-medium">Kill switch (instant shutdown)</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Audit Trail:</p>
                    <p className="font-medium">10-year tamper-proof retention</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Position Limits:</p>
                    <p className="font-medium">Enforced at pre-trade level</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-accent/10 to-transparent border border-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center">
                    <Scale className="w-4 h-4 text-accent" />
                  </div>
                  <h4 className="font-bold">EU MiCA & DORA</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">DORA Article 8 (Concentration):</p>
                    <p className="font-medium">Max 40% per exchange enforced</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Business Continuity:</p>
                    <p className="font-medium">Decentralized P2P architecture</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Operational Resilience:</p>
                    <p className="font-medium">Multi-source data validation</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">MiCA Compliance:</p>
                    <p className="font-medium">Pure utility token (no yields)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Callout type="danger" title="Pure Utility Token - No Investment Returns">
            <p>
              $CYPU is designed as a <strong>pure utility token</strong> under EU MiCA regulations. It grants access to
              platform features but does <strong>NOT</strong> generate yields, dividends, or promised returns. There are
              no staking rewards, no profit-sharing mechanisms, and no guaranteed appreciation. Value derives solely from
              platform utility and market demand.
            </p>
          </Callout>
        </div>
      </div>

      <hr className="border-border/50" />

      {/* 7. DETAIL PAGES */}
      <div id="documentation-resources">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1.5 h-10 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Detailed Documentation Resources
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Explore comprehensive technical documentation for each aspect of the $CYPU tokenomics system.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard
            icon={Coins}
            title="Token Supply Details"
            description="Complete breakdown of supply distribution, minting mechanics, ICO allocation, and circulating supply."
            href="/docs/tokenomics/det-token/tokensupply"
          />

          <ResourceCard
            icon={Database}
            title="Liquidity Pools"
            description="DEX pool strategies, initial seeding, Kaspacom & Zealous Swap integration, and liquidity management."
            href="/docs/tokenomics/det-token/liquiditypools"
          />

          <ResourceCard
            icon={ArrowRightLeft}
            title="PEG System (CYPU ↔ CYPUV)"
            description="Planned 1:1 peg mechanism with vault-backed CYPUV token, cold storage integration, and redemption process."
            href="/docs/tokenomics/det-token/peg"
          />

          <ResourceCard
            icon={Layers}
            title="Staking & Hold-to-Access"
            description="Tier system details, no traditional staking model, lifetime access mechanics, and platform unlocks."
            href="/docs/tokenomics/det-token/staking"
          />

          <ResourceCard
            icon={Timer}
            title="Vesting Schedules"
            description="Release timelines for ICO, dev allocation, Tangem reserves, and controlled token distribution."
            href="/docs/tokenomics/det-token/vesting"
          />

          <ResourceCard
            icon={Lock}
            title="Token Locks & Security"
            description="Tangem vault integration, 12-month dev locks, multi-sig wallets, and lock verification."
            href="/docs/tokenomics/det-token/lock"
          />

          <ResourceCard
            icon={Wallet}
            title="Wallet Infrastructure"
            description="Multi-signature treasury wallets, public transparency, community oversight, and fund management."
            href="/docs/tokenomics/det-token/wallets"
          />

          <ResourceCard
            icon={Activity}
            title="Minting Process"
            description="Fair launch mechanics, 1 KAS = 1 CYPU minting, batch limits, and ICO participation guide."
            href="/docs/tokenomics/publicmarket/mint"
          />

          <ResourceCard
            icon={FileText}
            title="Whitepaper (WIP)"
            description="Complete vision, technical architecture, economic model, and long-term roadmap for kas.me ecosystem."
            href="https://drive.google.com/file/d/15VvRoxo2g-s6Q1FiX-BYvyxYhJTAGjBs/view"
            external={true}
            badge="In Progress"
          />
        </div>
      </div>

      {/* Final Disclaimer */}
      <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/10 opacity-50" />
        <div className="relative flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Important Risk Disclosure</h3>
            <p className="text-muted-foreground leading-relaxed">
              This is an experimental project under active development. Features described here are planned and subject to change
              based on technical feasibility, regulatory guidance, and community feedback. Participation in the kas.me ecosystem
              carries technical, financial, and regulatory risks. This documentation does not constitute financial, legal, or
              investment advice. Always conduct your own research and consult professionals before making financial decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              $CYPU is designed as a utility token for platform access. It does not represent equity, debt, revenue-sharing rights,
              or guaranteed returns. Token value may fluctuate significantly. The kas.me team makes no promises regarding future
              token performance, platform adoption, or feature delivery timelines.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy Quote */}
      <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/10 opacity-50" />
        <p className="relative text-xl font-medium text-foreground italic">
          "Built on transparency. Driven by utility. Secured by compliance."
        </p>
        <p className="relative text-sm text-muted-foreground mt-3">
          – The kas.me Philosophy
        </p>
      </div>
    </div>
  )
}
