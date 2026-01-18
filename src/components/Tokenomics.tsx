import { Link } from 'react-router-dom'
import { Badge } from './ui/badge'

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 uppercase tracking-wider">
            Token Economics
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            $CYPU{' '}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            1 Billion max supply. 80% unminted. Full transparency on every wallet.
          </p>
        </div>

        {/* Main Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-6 rounded-xl border border-border/50 bg-card/30">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-1">1B</div>
            <div className="text-sm text-muted-foreground">Max Supply</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-border/50 bg-card/30">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">800M</div>
            <div className="text-sm text-muted-foreground">Unminted</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-border/50 bg-card/30">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">200M</div>
            <div className="text-sm text-muted-foreground">Initial Supply</div>
          </div>
          <div className="text-center p-6 rounded-xl border border-accent/30 bg-accent/5">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-1">1:1</div>
            <div className="text-sm text-muted-foreground">$KAS Mint Ratio</div>
          </div>
        </div>

        {/* Initial 200M Breakdown */}
        <div className="rounded-2xl border border-border/50 bg-card/20 p-8 mb-8">
          <h3 className="text-xl font-bold mb-6 text-center">Initial 200M Distribution</h3>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Tangem Locked */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="font-semibold">Tangem Locked</span>
              </div>
              <div className="text-3xl font-bold">~109M</div>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Vault: 54.55M</div>
                <div>Firm: 54.55M</div>
                <div>Dev Ops: ~0.9M</div>
              </div>
              <div className="text-xs text-accent">Hardware immovable</div>
            </div>

            {/* L1 Sale Orders */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="font-semibold">L1 Sale Orders</span>
              </div>
              <div className="text-3xl font-bold">50M</div>
              <div className="text-sm text-muted-foreground">
                Locked in KaspaCom marketplace until purchased
              </div>
              <div className="text-xs text-accent">Locked until sold</div>
            </div>

            {/* Dev Wallet */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="font-semibold text-orange-500">Dev Wallet</span>
              </div>
              <div className="text-3xl font-bold text-orange-500">20M</div>
              <div className="text-sm text-muted-foreground">
                Reserved for BaFin-compliant Private Sale
              </div>
              <div className="text-xs text-orange-500">MOVABLE - only dump risk</div>
            </div>

            {/* Burned */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="font-semibold">Burned</span>
              </div>
              <div className="text-3xl font-bold">20M</div>
              <div className="text-sm text-muted-foreground">
                Permanently removed from circulation
              </div>
              <div className="text-xs text-red-500">Gone forever</div>
            </div>
          </div>

          {/* Summary Line */}
          <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div>
              <span className="text-muted-foreground">Total Locked:</span>
              <span className="font-bold ml-2">159M</span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div>
              <span className="text-muted-foreground">Movable:</span>
              <span className="font-bold text-orange-500 ml-2">20M</span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div>
              <span className="text-muted-foreground">Burned:</span>
              <span className="font-bold ml-2">20M</span>
            </div>
          </div>
        </div>

        {/* Token Info + CTA */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Token Details */}
          <div className="rounded-xl border border-border/50 bg-card/30 p-6">
            <h4 className="font-semibold mb-4">Token Details</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name</span>
                <span className="font-medium">CyberPump ($CYPU)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Standard</span>
                <span className="font-medium">KRC-20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Network</span>
                <span className="font-medium">Kaspa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mint Price</span>
                <span className="font-medium">1 $KAS = 1 $CYPU</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 flex flex-col justify-center">
            <h4 className="font-semibold mb-2">Full Transparency</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Every wallet address is public. Verify holdings on-chain anytime.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/docs/tokenomics/det-token/wallets"
                className="text-sm font-medium text-accent hover:underline"
              >
                View All Wallets →
              </Link>
              <Link
                to="/docs/tokenomics/det-token/token-supply"
                className="text-sm font-medium text-accent hover:underline"
              >
                Token Supply Details →
              </Link>
            </div>
          </div>
        </div>

        {/* CYPUV Section */}
        <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h3 className="text-2xl font-bold text-red-500">$CYPUV</h3>
            <Badge className="bg-red-500/20 text-red-500 border-red-500/30">Governance Token</Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Bonding Curve Progress */}
            <div className="text-center space-y-2">
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Bonding Curve</div>
              <div className="text-3xl font-bold text-red-500">26%</div>
              <div className="w-full h-1.5 bg-red-500/20 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full" style={{ width: '26%' }} />
              </div>
              <div className="text-xs text-muted-foreground">Complete</div>
            </div>

            {/* Developer Lock */}
            <div className="text-center space-y-2">
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Dev Lock</div>
              <div className="text-xl font-bold text-red-500">1695d</div>
              <div className="text-xs text-muted-foreground">Curve: 25.99%</div>
            </div>

            {/* Curve Rest */}
            <div className="text-center space-y-2">
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Curve</div>
              <div className="text-3xl font-bold text-foreground">59.52%</div>
              <div className="text-xs text-muted-foreground">Remaining</div>
            </div>

            {/* Supply */}
            <div className="text-center space-y-2">
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Supply</div>
              <div className="text-3xl font-bold text-foreground">54.55M</div>
              <div className="text-xs text-muted-foreground">1:1 $CYPU Vault</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-red-500/20 text-center">
            <Link
              to="/docs/tokenomics/det-token/cypuv"
              className="text-sm font-medium text-red-500 hover:underline"
            >
              Learn about $CYPUV Governance →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
