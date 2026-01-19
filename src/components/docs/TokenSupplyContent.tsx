import { ResourceCard } from './ResourceCard'
import { Callout } from './Callout'
import { StatsGrid } from './StatsGrid'
import {
  Coins,
  ShoppingCart,
  ArrowLeftRight,
  TrendingUp,
  Lock,
  Zap,
  Info,
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function TokenSupplyContent() {
  return (
    <div className="space-y-16">
      {/* Hero Section with Gradient Background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-2xl blur-3xl -z-10" />
        <div className="relative space-y-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-accent bg-clip-text text-transparent">
            $CYPU Token Supply
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Fair minting • 1:1 with $KAS • No bots at launch • Long-term stability
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
              <Coins className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Fair Launch</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Transparent Distribution</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-border/50" />

      {/* How to Acquire $CYPU Section */}
      <div>
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          How to Acquire $CYPU
        </h2>
        <p className="text-muted-foreground mb-8">
          Three main methods to get $CYPU tokens with fair pricing and transparent mechanics
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <ResourceCard
            icon={Coins}
            title="1:1 Minting"
            description="Mint directly at 1 $KAS = 1 $CYPU via Kaspacom L1 Marketplace, KasWare Mint, or other L1 tools. 1 transaction per user • Max 1,000 per batch. The fairest way to acquire tokens."
            href="/docs/tokenomics/publicmarket/mint"
            badge="Fair Price"
          />

          <ResourceCard
            icon={ShoppingCart}
            title="ICO via Kaspacom L1"
            description="Participate in the community-first ICO with up to 50M $CYPU available. Price: ~1:1 $KAS sale. Join early supporters in shaping the future of kas.me."
            href="/docs/tokenomics/det-tokenomics"
            badge="Limited Supply"
          />

          <ResourceCard
            icon={ArrowLeftRight}
            title="DEX Pools (Post-ICO)"
            description="Trade on Kaspacom DEX and Zealous Swap Pool with CYPUV ↔ $CYPU pairings. Community-driven liquidity and price discovery. Full transparency on all swaps."
            href="/docs/tokenomics/det-token/liquidity-pools"
            badge="Trading"
          />
        </div>
      </div>

      <hr className="border-border/50" />

      {/* Supply Distribution Overview */}
      <div>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Supply Distribution Overview
        </h2>

        <StatsGrid
          columns={3}
          stats={[
            {
              label: 'Maximum Supply',
              value: '1B $CYPU',
              icon: Coins,
            },
            {
              label: 'Initial Circulating',
              value: '~200M',
              icon: TrendingUp,
            },
            {
              label: 'Locked Tokens',
              value: '~110M',
              icon: Lock,
            },
          ]}
        />
      </div>

      <hr className="border-border/50" />

      {/* Detailed Breakdown Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-500/30 rounded-full" />
          Supply Breakdown
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Total Supply Card */}
          <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-8 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Total Supply</h3>
              </div>
              <p className="text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent mb-2">
                1,000,000,000
              </p>
              <p className="text-sm text-muted-foreground">
                Complete maximum supply of $CYPU tokens
              </p>
            </div>
          </div>

          {/* Initial Circulating Card */}
          <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-8 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Initial Circulating</h3>
              </div>
              <p className="text-3xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent mb-2">
                ~200M
              </p>
              <p className="text-sm text-muted-foreground">
                Tokens available at launch
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown List - Hierarchical Structure */}
        <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-50" />
          <div className="relative space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-accent">
              Token Allocation Breakdown
            </h3>

            {/* 1. Unminted - Future Supply */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent to-accent/60" />
                <div>
                  <p className="font-semibold">Unminted (Future Minting)</p>
                  <p className="text-sm text-muted-foreground">Available for future minting only</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">800M</p>
                <p className="text-sm text-muted-foreground">80%</p>
              </div>
            </div>

            {/* 2. Initial 200M Coins - Breakdown */}
            <div className="space-y-3">
              {/* Header for Initial 200M */}
              <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-500/60" />
                  <div>
                    <p className="font-bold text-lg">Initial 200M $CYPU</p>
                    <p className="text-sm text-muted-foreground">Preminted at launch - breakdown below</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-2xl text-blue-500">200M</p>
                  <p className="text-sm text-muted-foreground">20%</p>
                </div>
              </div>

              {/* Sub-category: ~110M Locked (Tangem Wallets) */}
              <div className="ml-6 space-y-2 border-l-2 border-purple-500/30 pl-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
                  <div className="flex items-center gap-3">
                    <Lock className="w-4 h-4 text-purple-500" />
                    <div>
                      <p className="font-semibold text-purple-500">~110M Locked Tokens</p>
                      <p className="text-xs text-muted-foreground">Immovable (Tangem hardware limitation)</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-purple-500">~110M</p>
                    <p className="text-xs text-muted-foreground">11%</p>
                  </div>
                </div>

                {/* Sub-sub-category: Individual locked wallets */}
                <div className="ml-6 space-y-2 border-l-2 border-border/50 pl-4">
                  <div className="flex items-center justify-between p-2 rounded bg-card/30 border border-border/30 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500/60" />
                      <span>Vault Wallet (CYPUV peg backing)</span>
                    </div>
                    <span className="font-semibold">54.55M</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-card/30 border border-border/30 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500/60" />
                      <span>Firm Wallet (operational backbone)</span>
                    </div>
                    <span className="font-semibold">54.55M</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-orange-500/20 border border-orange-500/30 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500/60" />
                      <span className="text-orange-500">Dev Operations Wallet (minting hub - outflow risk)</span>
                    </div>
                    <span className="font-semibold text-orange-500">~0.9M</span>
                  </div>
                </div>
              </div>

              {/* Sub-category: ~70M Treasury (Company Holdings) */}
              <div className="ml-6 space-y-2 border-l-2 border-green-500/30 pl-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="w-4 h-4 text-green-500" />
                    <div>
                      <p className="font-semibold text-green-500">~70M Treasury</p>
                      <p className="text-xs text-muted-foreground">Company cold storage - breakdown below</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-500">~70M</p>
                    <p className="text-xs text-muted-foreground">7%</p>
                  </div>
                </div>

                {/* Sub-sub-category: Treasury breakdown */}
                <div className="ml-6 space-y-2 border-l-2 border-border/50 pl-4">
                  <div className="flex items-center justify-between p-2 rounded bg-card/30 border border-border/30 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                      <span>L1 Public Sale (sale orders lock supply)</span>
                    </div>
                    <span className="font-semibold">50M</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-red-500/20 border border-red-500/30 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <span className="text-red-500">Dev Wallet (MOVABLE - dump risk)</span>
                      <Link 
                        to="/docs/tokenomics/det-token/wallets#dev-wallet" 
                        className="group relative"
                        title="Reserved for angel investors & BaFin-compliant funding post-approval. Click for details."
                      >
                        <Info className="w-4 h-4 text-red-400 hover:text-red-300 transition-colors cursor-pointer" />
                      </Link>
                    </div>
                    <span className="font-semibold text-red-500">20M</span>
                  </div>
                </div>
              </div>

              {/* Sub-category: 20M Burned */}
              <div className="ml-6 flex items-center justify-between p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-red-500" />
                  <div>
                    <p className="font-semibold text-red-500">20M Burned</p>
                    <p className="text-xs text-muted-foreground">Permanently removed from circulation</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-500">20M</p>
                  <p className="text-xs text-muted-foreground">2%</p>
                </div>
              </div>
            </div>

            {/* Visual Summary Callout */}
            <Callout type="info" title="Initial 200M Breakdown Summary">
              <div className="space-y-2 text-sm">
                <p><strong>~110M Locked (Tangem):</strong> Vault (54.55M) + Firm (54.55M) + Dev Ops (~0.9M) = Immovable</p>
                <p><strong>~70M Treasury:</strong> L1 Public Sale (50M locked in sale orders) + Dev Wallet (20M movable)</p>
                <p><strong>20M Burned:</strong> Removed forever, reducing effective supply to 980M max</p>
                <p className="pt-2 border-t border-border/30 font-semibold">Total Initial: 200M $CYPU (20% of 1B max supply)</p>
                <p className="text-xs text-muted-foreground italic">Note: Only 20M Dev Wallet is movable - all other tokens locked via Tangem or L1 sale orders</p>
              </div>
            </Callout>
          </div>
        </div>
      </div>

      <hr className="border-border/50" />

      {/* Key Principles Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-500/30 rounded-full" />
          Supply Principles
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Callout type="success" title="Fair Minting">
            <p>
              1:1 ratio with $KAS ensures everyone has equal opportunity to acquire $CYPU at the same price. No special privileges or early access advantages.
            </p>
          </Callout>

          <Callout type="tip" title="No Bots at Launch">
            <p>
              Rate limiting (1 transaction per user, max 1,000 per batch) prevents bot manipulation and ensures fair distribution to genuine community members.
            </p>
          </Callout>

          <Callout type="info" title="Long-Term Stability">
            <p>
              With 80% of supply remaining unminted, future minting can be carefully controlled based on platform needs and community governance, ensuring sustainable growth.
            </p>
          </Callout>

          <Callout type="note" title="Transparency First">
            <p>
              All token allocations are publicly documented and locked with multi-signature wallets. Full visibility into dev, vault, and community holdings.
            </p>
          </Callout>
        </div>
      </div>

      <hr className="border-border/50" />

      {/* Related Resources Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-cyan-500/30 rounded-full" />
          Explore More
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ResourceCard
            icon={Zap}
            title="Liquidity Pools"
            description="Discover DEX pools, peg mechanisms, and how to trade $CYPU on Kaspacom and Zealous Swap."
            href="/docs/tokenomics/det-token/liquidity-pools"
          />

          <ResourceCard
            icon={TrendingUp}
            title="Detailed Tokenomics"
            description="Complete overview of $CYPU mechanics including vesting, staking, locks, and long-term sustainability."
            href="/docs/tokenomics/det-tokenomics"
          />
        </div>
      </div>

      <hr className="border-border/50" />

      {/* Footer Disclaimer */}
      <Callout type="warning" title="Investment Disclaimer">
        <p className="text-sm">
          This is an experimental project under active development. Features described here are planned and subject to change.
          This documentation does not constitute financial advice. Participation carries technical and financial risks.
          Always DYOR (Do Your Own Research).
        </p>
      </Callout>

      {/* Footer Navigation */}
      <div className="flex flex-wrap gap-4 justify-between items-center pt-8">
        <Link
          to="/docs/tokenomics"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
        >
          ← Back to Token Overview
        </Link>
        <Link
          to="/docs/tokenomics/det-tokenomics"
          className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
        >
          View Detailed Tokenomics →
        </Link>
      </div>
    </div>
  )
}
