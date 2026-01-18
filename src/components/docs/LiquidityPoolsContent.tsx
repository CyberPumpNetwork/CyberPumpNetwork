import { ResourceCard } from './ResourceCard'
import { Callout } from './Callout'
import {
  Store,
  Shield,
  Link2,
  Users,
  Zap,
  TrendingUp
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function LiquidityPoolsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 rounded-2xl blur-2xl -z-10" />
        <div className="relative space-y-6 py-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-foreground to-accent bg-clip-text text-transparent">
            $CYPU & $CYPUV Liquidity Pools
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Verified L1 & L2 pools • Transparent • Community-driven • No hidden liquidity
          </p>
        </div>
      </div>

      {/* Official & Verified Pools */}
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          <span>Official & Verified Pools</span>
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* L1 Marketplace */}
          <ResourceCard
            icon={Store}
            title="L1 Marketplace (Kaspacom)"
            description="Primary $CYPU Sale & Minting. ICO + 1:1 Minting via Kaspacom L1."
            href="https://kaspa.com/tokens/marketplace/token/CYPU"
            external={true}
            badge="Primary"
          />

          {/* L2 Vault Token */}
          <ResourceCard
            icon={Shield}
            title="L2 Vault Token: $CYPUV"
            description="Hardware-backed 1:1 peg to $CYPU. Physically stored via Tangem."
            href="https://lfg.kaspa.com/app/token/0xDB82e671DB8712D7F22277f9b1436320ACf9a659"
            external={true}
            badge="Verified"
          />

          {/* DEX PEG Pool */}
          <ResourceCard
            icon={Link2}
            title="DEX PEG Pool: $CYPUV ↔ $CYPU"
            description="Official 1:1 Community peg pool (manual liquidity provision). Ensures price parity between digital & physical token. Automated PEG Bot not yet deployed."
            href="https://explorer.kasplex.org/token/0x715D6940779Ccf4d089D611DE413EF30e8aDF128"
            external={true}
            badge="LIVE (Manual)"
          />

          {/* Community DEX Pool */}
          <ResourceCard
            icon={Users}
            title="Community DEX Pool: $CYPUV / wKAS"
            description="Community-driven liquidity. Deep wKAS pairing for stable trading."
            href="https://explorer.kasplex.org"
            external={true}
            badge="Community"
          />

          {/* Zealous Swap */}
          <ResourceCard
            icon={Zap}
            title="Zealous Swap Pool"
            description="High-efficiency swap route. Note: Be aware of slippage and low liquidity impacts."
            href="https://explorer.kasplex.org/token/0x272793b89028faFd6e6860F8cb4Ed7717871FE7a"
            external={true}
            badge="Advanced"
          />
        </div>
      </div>

      <hr className="border-border/50" />

      {/* Provide Liquidity Section */}
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          <span>Provide Liquidity (LP)</span>
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
        </h2>

        <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 p-8 max-w-3xl mx-auto">
          <div className="relative space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">
                Add Liquidity to Any L2 Pool
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All L2 pools are open for community LP contribution. We encourage decentralized liquidity to strengthen the ecosystem.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Supported Assets</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>$CYPU</li>
                  <li>$CYPUV</li>
                  <li>wKAS</li>
                  <li>KAS</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Supported Platforms</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>Kaspacom DEX</li>
                  <li>Zealous Swap</li>
                  <li>Other compatible platforms</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Risks to Consider</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>Impermanent loss</li>
                  <li>Smart contract risk</li>
                  <li>Market volatility</li>
                </ul>
              </div>
            </div>

            <Callout type="tip" title="LP Guide Planned">
              <p className="text-sm">
                A comprehensive step-by-step LP guide is in development. Full instructions covering pool selection, capital allocation, and risk management are planned for a future Dev Talk.
              </p>
            </Callout>
          </div>
        </div>
      </div>

      <hr className="border-border/50" />

      {/* Pool Addresses Callout */}
      <Callout type="note" title="Verified Pool Addresses">
        <div className="space-y-3 text-sm">
          <p className="font-semibold">
            All pool addresses are verified • No hidden liquidity • Full transparency
          </p>
          <div className="bg-background/50 rounded-lg p-4 space-y-2 font-mono text-xs border border-purple-500/20">
            <div>
              <p className="text-muted-foreground">$CYPUV Token Contract</p>
              <p className="text-accent break-all">0xDB82e671DB8712D7F22277f9b1436320ACf9a659</p>
            </div>
            <div className="border-t border-purple-500/20 pt-2">
              <p className="text-muted-foreground">$CYPUV - $CYPU PEG Contract</p>
              <p className="text-accent break-all">0x715D6940779Ccf4d089D611DE413EF30e8aDF128</p>
            </div>
          </div>
        </div>
      </Callout>

      {/* Related Resources */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          Related Documentation
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ResourceCard
            icon={TrendingUp}
            title="Token Economics"
            description="Complete tokenomics overview • Dual-token system • Supply & distribution • Compliance framework"
            href="/docs/tokenomics/det-tokenomics"
          />
          <ResourceCard
            icon={Zap}
            title="PEG Mechanics"
            description="Learn how the 1:1 peg between $CYPU and $CYPUV is maintained • Technical details • Oracle systems"
            href="/docs/tokenomics/det-tokenomics#peg"
          />
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex flex-wrap gap-4 justify-between items-center pt-8 border-t border-border/50">
        <Link
          to="/docs/tokenomics/det-tokenomics"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
        >
          ← Back to Token Economics
        </Link>
        <Link
          to="/docs/tokenomics/det-tokenomics"
          className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
        >
          Token Economics →
        </Link>
      </div>
    </div>
  )
}
