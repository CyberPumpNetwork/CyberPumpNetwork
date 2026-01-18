import { Callout } from './Callout'
import { ResourceCard } from './ResourceCard'
import { TOKENOMICS } from '@/lib/tokenomics-data'
import {
  Lock,
  ArrowLeftRight,
  CheckCircle,
  XCircle,
  FileText,
  TrendingUp,
  Zap
} from 'lucide-react'

export function PegContent() {
  return (
    <div className="space-y-12">
      {/* Development Status Banner */}
      <Callout type="info" title="Current Status">
        Phase 1 (Community-Driven Dynamic Peg) is LIVE via manual DEX pool liquidity provision on KaspaCom & ZealousSwap. Automated PEG Bot NOT deployed (awaiting MiCA regulatory clarity). Phase 2 (1:1 Smart Contract Vault) is planned but depends on BaFin approval and further technical development. Timeline: Unknown.
      </Callout>

      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <ArrowLeftRight className="w-10 h-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold">$CYPU ↔ $CYPUV Peg</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          This page explains how the two tokens maintain their price relationship. Phase 1 (dynamic community peg) is currently live via manual liquidity provision on KaspaCom and ZealousSwap. Automated PEG Bot not yet deployed. Phase 2 (1:1 vault-backed peg) is planned for the future.
        </p>
      </div>

      {/* What is a Token Peg? */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What is a Token Peg?</h2>
        <p className="text-lg text-muted-foreground">
          A "peg" is a price relationship between two assets. It can be enforced through smart contracts, maintained by market forces, or backed by collateral in a vault.
        </p>

        <Callout type="tip" title="Types of Pegs">
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold">Community-Driven Dynamic Peg (LIVE):</p>
              <p className="text-muted-foreground">Market participants maintain the price relationship through arbitrage opportunities in DEX pools. The ratio adjusts based on supply/demand but naturally converges toward equilibrium.</p>
            </div>
            <div>
              <p className="font-semibold">Hard Peg (1:1 backed - PLANNED):</p>
              <p className="text-muted-foreground">Every token is backed by exactly one unit of the underlying asset in a vault. Example: USDC (1 USDC = 1 USD in bank account). This is our Phase 2 goal.</p>
            </div>
          </div>
        </Callout>
      </section>

      {/* Why We Have Two Tokens */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Why Two Tokens?</h2>
        <p className="text-lg text-muted-foreground">
          The dual-token system separates utility ($CYPU) from governance ($CYPUV) to prevent short-term traders from controlling long-term project decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Callout type="note" title={`${TOKENOMICS.CYPU.ticker} (Utility Token)`}>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Max Supply:</strong> {TOKENOMICS.CYPU.maxSupply.toLocaleString()}</li>
              <li>• <strong>Purpose:</strong> {TOKENOMICS.CYPU.purpose}</li>
              <li>• <strong>Trading:</strong> Live on KaspaCom L1 Marketplace</li>
              <li>• <strong>Liquidity:</strong> High (publicly tradeable)</li>
              <li>• <strong>Governance:</strong> None</li>
            </ul>
          </Callout>

          <Callout type="note" title={`${TOKENOMICS.CYPUV.ticker} (Governance Token)`}>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Max Supply:</strong> {TOKENOMICS.CYPUV.maxSupply.toLocaleString()}</li>
              <li>• <strong>Purpose:</strong> {TOKENOMICS.CYPUV.purpose}</li>
              <li>• <strong>Trading:</strong> LIVE on L2 KaspaCom DEX (Bonding Curve)</li>
              <li>• <strong>User Liquidity:</strong> FULL - buy/sell anytime (max 2300 KAS per order)</li>
              <li>• <strong>Firm Lock:</strong> Dev wallet purchases = 4 years locked via KaspaCom SC</li>
              <li>• <strong>Governance:</strong> Full voting rights (when governance system launches)</li>
            </ul>
          </Callout>
        </div>

        <Callout type="success" title="Why This Structure Works">
          <p className="text-sm">
            $CYPU provides liquidity and platform access. $CYPUV provides governance rights. Users can freely trade $CYPUV on DEX, but the firm's dev wallet purchases are locked for 4 years via KaspaCom smart contract - creating a trust signal that the firm can't dump on the community. This is publicly verifiable on-chain.
          </p>
        </Callout>
      </section>

      {/* Phase 1: Community-Driven Dynamic Peg (LIVE) */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Phase 1: Community-Driven Dynamic Peg (LIVE ✅)</h2>
        <p className="text-lg text-muted-foreground">
          The current peg mechanism is maintained through community-seeded liquidity pools on KaspaCom and ZealousSwap. I've been bootstrapping these pools with my own capital over months.
        </p>

        <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 space-y-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-accent" />
            <div>
              <h3 className="text-xl font-bold">How It Works (Live System)</h3>
              <p className="text-sm text-muted-foreground">Active since token launch</p>
            </div>
          </div>

          <Callout type="success" title="Live DEX Pools">
            <div className="space-y-3 text-sm">
              <p><strong>1. KaspaCom L1 Marketplace:</strong> Primary $CYPU sale & minting</p>
              <p><strong>2. L2 DEX Pools:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>→ $CYPUV ↔ $CYPU PEG Pool (Contract: 0x715D6...)</li>
                <li>→ $CYPUV / wKAS Community Pool</li>
                <li>→ ZealousSwap high-efficiency routes</li>
              </ul>
              <p><strong>3. Community Participation:</strong> Anyone can seed liquidity on L2 pools</p>
              <p><strong>4. Price Discovery:</strong> Market determines the ratio through arbitrage</p>
            </div>
          </Callout>

          <div className="space-y-2 text-sm">
            <p className="font-semibold">Benefits of This Approach:</p>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>No smart contract complexity (just DEX pools)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Pure market price discovery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Community can participate in liquidity provision</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Publicly verifiable on-chain (all pool addresses documented)</span>
            </div>
          </div>

          <Callout type="info" title="Bootstrapped with Personal Capital">
            <p className="text-sm">
              I've been seeding these pools over months with my own bootstrapped capital. No VC funding, no investors - just me putting skin in the game to establish initial liquidity. The community can verify all liquidity pool transactions on-chain.
            </p>
          </Callout>

          <Callout type="success" title="4-Year Lock = Trust Signal (Firm Only)">
            <div className="space-y-2 text-sm">
              <p><strong>Users:</strong> Can buy/sell $CYPUV freely on DEX - no lock, full liquidity (max 2300 KAS per order for protection)</p>
              <p><strong>The IT CyberSpace (Firm):</strong> Our dev wallet purchases are automatically locked for 4 years via KaspaCom smart contract. This is publicly visible on-chain.</p>
              <p className="mt-3"><strong>Why this matters:</strong> We can't dump our tokens even if we wanted to. This creates trust - the firm is locked in for the long term, users have exit liquidity. After 4 years, tokens unlock and we'll move them to Tangem for community governance voting.</p>
              <p className="mt-3 font-semibold text-accent">"Blockchain KYC" - Governance participation is on-chain tracked. Who votes is public. Transparency without traditional KYC.</p>
            </div>
          </Callout>
        </div>

        <Callout type="warning" title="Note: Dynamic Ratio">
          <div className="space-y-2 text-sm">
            <p>The ratio between $CYPU and $CYPUV is NOT fixed at 1:1 in Phase 1. It's determined by market forces:</p>
            <ul className="ml-4 space-y-1">
              <li>→ Supply constraints ({TOKENOMICS.CYPUV.maxSupply.toLocaleString()} $CYPUV vs {TOKENOMICS.CYPU.maxSupply.toLocaleString()} $CYPU)</li>
              <li>→ Governance value premium for $CYPUV</li>
              <li>→ Liquidity pool depth and trading activity</li>
            </ul>
            <p className="mt-2"><strong>This is by design.</strong> The dynamic ratio allows for price discovery and rewards early community members who understand the governance value.</p>
          </div>
        </Callout>
      </section>

      {/* Phase 2: 1:1 Vault-Backed Peg (PLANNED) */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Phase 2: 1:1 Vault-Backed Peg (PLANNED)</h2>
        <p className="text-lg text-muted-foreground">
          The future plan is to implement a hard 1:1 peg where every $CYPUV can be redeemed for exactly 1 $CYPU from a smart contract vault. This is theoretical - depends on BaFin approval and technical development.
        </p>

        <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Lock className="w-8 h-8 text-purple-500" />
            <div>
              <h3 className="text-xl font-bold">Planned Mechanism (Not Live)</h3>
              <p className="text-sm text-muted-foreground">Future implementation - timeline unknown</p>
            </div>
          </div>

          <Callout type="warning" title="How It Would Work">
            <div className="space-y-2 text-sm">
              <p><strong>1. Vault Creation:</strong> Lock {TOKENOMICS.CYPUV.maxSupply.toLocaleString()} $CYPU in smart contract vault</p>
              <p><strong>2. 1:1 Redemption:</strong> Burn 1 $CYPUV → Receive 1 $CYPU from vault</p>
              <p><strong>3. One-Way Only:</strong> No minting $CYPUV from $CYPU (prevents inflation)</p>
              <p><strong>4. Hard Peg Floor:</strong> $CYPUV can never trade below $CYPU (arbitrage ensures parity)</p>
            </div>
          </Callout>

          <div className="space-y-2 text-sm">
            <p className="font-semibold">Benefits (If Implemented):</p>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-500" />
              <span>Price stability (1:1 floor guaranteed)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-500" />
              <span>Cryptographically guaranteed backing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-500" />
              <span>Exit liquidity for $CYPUV holders</span>
            </div>
          </div>
        </div>

        <Callout type="danger" title="Why Phase 2 Isn't Live Yet">
          <div className="space-y-3 text-sm">
            <p><strong>Technical Blockers:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>→ Smart contract vault design for Kaspa's UTXO model</li>
              <li>→ Security audits required (expensive, time-consuming)</li>
              <li>→ Testing and deployment infrastructure</li>
            </ul>
            <p className="mt-3"><strong>Regulatory Approval Needed:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>→ BaFin approval for redemption mechanism</li>
              <li>→ EU MiCA compliance verification</li>
              <li>→ Must ensure vault doesn't create security classification</li>
            </ul>
            <p className="mt-3 font-semibold">This is part of the long-term roadmap, but it's NOT a promise. Regulatory and technical feasibility still being evaluated.</p>
          </div>
        </Callout>
      </section>

      {/* BaFin Compliance Note */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Pure Utility Token - No Investment Returns</h2>

        <Callout type="danger" title="Critical Regulatory Compliance">
          <div className="space-y-3 text-sm">
            <p>
              <strong>$CYPU and $CYPUV are pure utility tokens, NOT investment vehicles.</strong> The peg mechanism (both Phase 1 and planned Phase 2) is designed for platform functionality (governance + utility separation), NOT to generate financial returns.
            </p>
            <p>
              <strong>No Promised Returns:</strong> Neither token promises yields, dividends, interest, or guaranteed appreciation. The dynamic ratio in Phase 1 is market-driven, not a promise of gains. The planned 1:1 peg in Phase 2 would provide redemption functionality, NOT investment returns.
            </p>
            <p>
              <strong>DeFi Utility:</strong> Seeding liquidity on KaspaCom or ZealousSwap is standard DeFi participation - you're providing liquidity to enable trading, not investing in a promise of returns.
            </p>
            <p>
              <strong>BaFin/MiCA Compliance:</strong> This dual-token structure is designed to comply with German BaFin regulations and EU MiCA framework. Phase 2 vault system requires additional approval before implementation.
            </p>
          </div>
        </Callout>
      </section>

      {/* Current Status */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Current Status (Honest Assessment)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Callout type="success" title="What EXISTS (LIVE)">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>KaspaCom L1 Marketplace (primary $CYPU sale)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>L2 DEX pools ($CYPUV ↔ $CYPU, $CYPUV / wKAS)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Community-driven dynamic peg (market-based ratio)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Publicly verifiable pool addresses and transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Months of bootstrapped liquidity seeding</span>
              </li>
            </ul>
          </Callout>

          <Callout type="warning" title="What DOES NOT EXIST (Yet)">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>1:1 vault-backed peg (Phase 2)</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Smart contract redemption mechanism</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>BaFin approval for vault system</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Fixed 1:1 ratio (current ratio is market-driven)</span>
              </li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* Related Resources */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Related Documentation</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResourceCard
            icon={Zap}
            title="Liquidity Pools"
            description="Official pool addresses, LP guide, and verified contracts"
            href="/docs/tokenomics/det-token/liquidity-pools"
          />
          <ResourceCard
            icon={FileText}
            title="Detailed Tokenomics"
            description="Complete dual-token economics model"
            href="/docs/tokenomics/det-tokenomics"
          />
          <ResourceCard
            icon={Lock}
            title="Token Locks"
            description="Current lock status and security measures"
            href="/docs/tokenomics/det-token/lock"
          />
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">The Bottom Line</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <Callout type="success" title="Phase 1 is Live - Publicly Verifiable">
            <p>
              The community-driven dynamic peg has been live since token launch. You can verify all liquidity pool addresses, transactions, and market activity on-chain. I've been bootstrapping pools with my own capital for months - no VC funding, no investors, just skin in the game.
            </p>
          </Callout>

          <Callout type="warning" title="Phase 2 is Planned - Not Guaranteed">
            <p>
              The 1:1 vault-backed peg is part of the long-term vision, but it's NOT a promise. It depends on BaFin regulatory approval and technical feasibility. Timeline: Unknown. No guarantees.
            </p>
          </Callout>

          <p className="text-center text-muted-foreground">
            <strong>Status:</strong> Phase 1 (dynamic peg) live and publicly verifiable. Phase 2 (1:1 vault) planned pending BaFin approval.
          </p>

          <Callout type="tip" title="Why Document Both Phases?">
            <p className="text-sm">
              Transparency. Phase 1 is live and operational - you can verify it yourself on-chain. Phase 2 is a planned evolution, but I'm documenting it as a future goal, not a guarantee. Honesty about what exists vs. what's planned.
            </p>
          </Callout>
        </div>
      </section>
    </div>
  )
}
