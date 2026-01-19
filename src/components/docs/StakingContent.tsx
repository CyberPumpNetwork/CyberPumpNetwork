import { Callout } from './Callout'
import { ResourceCard } from './ResourceCard'
import {
  Lock,
  Shield,
  AlertTriangle,
  FileText,
  CheckCircle,
  XCircle
} from 'lucide-react'

export function StakingContent() {
  return (
    <div className="space-y-12">
      {/* Development Status Banner */}
      <Callout type="info" title="Development Status">
        Staking features are in the design phase - NOT yet implemented or live. This page describes theoretical concepts pending BaFin regulatory approval. No launch timeline set.
      </Callout>

      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Lock className="w-10 h-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold">$CYPU Staking (Planned)</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          I'm designing two approaches to token utility: hold-to-access (no lock-up) and optional staking (still being researched). Both systems are theoretical - the code doesn't exist yet, and regulatory approval is required before launch.
        </p>
      </div>

      {/* Pure Utility Token Disclaimer */}
      <Callout type="danger" title="Pure Utility Token - No Investment Returns">
        $CYPU is a pure utility token designed for platform access. It does NOT generate guaranteed yields, dividends, or promised returns. Any future staking mechanism (if approved) would be for governance participation, NOT investment income. This is NOT financial advice.
      </Callout>

      {/* Two Approaches */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Two Theoretical Approaches</h2>
        <p className="text-lg text-muted-foreground">
          I'm exploring two different models for how $CYPU could provide platform utility:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hold-to-Access */}
          <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Lock className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">Hold-to-Access (Preferred)</h3>
            </div>
            <p className="text-sm text-muted-foreground">Simpler, no lock-up, immediate access</p>

            <Callout type="tip" title="How It Would Work">
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>Platform checks your wallet balance on-chain</li>
                <li>If you hold ≥ required $CYPU, features unlock</li>
                <li>Sell tokens anytime - no lock-up periods</li>
                <li>Access persists as long as you hold the threshold</li>
              </ol>
            </Callout>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>No smart contract risk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>No slashing penalties</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Exit liquidity anytime</span>
              </div>
            </div>

            <Callout type="note" title="Example Tiers (Theoretical)">
              <ul className="space-y-1 text-sm">
                <li>• Basic (1+ CYPU): Explorer access</li>
                <li>• Analytics (100+ CYPU): Advanced tools</li>
                <li>• Intelligence (2,500+ CYPU): Pro features</li>
                <li>• Elite (20,000+ CYPU): Reserved</li>
              </ul>
            </Callout>
          </div>

          {/* Optional Staking */}
          <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-500" />
              <h3 className="text-xl font-bold">Governance Staking (Research)</h3>
            </div>
            <p className="text-sm text-muted-foreground">Still being designed, regulatory approval needed</p>

            <Callout type="warning" title="Status: Early Research">
              <p className="text-sm">
                I'm researching how staking could work for governance rights, NOT for financial returns. No promises, no guarantees, no timeline.
              </p>
            </Callout>

            <div className="space-y-2 text-sm">
              <p className="font-semibold">Potential Use Cases (IF implemented):</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">→</span>
                  <span>Vote on treasury spending (≥ $50k decisions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">→</span>
                  <span>Feature prioritization votes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">→</span>
                  <span>Protocol parameter changes</span>
                </li>
              </ul>
            </div>

            <Callout type="danger" title="NOT for Investment Returns">
              <p className="text-sm">
                IF staking is implemented, it would be for governance rights ONLY - not for earning yields, interest, or any form of financial return. This is critical for regulatory compliance.
              </p>
            </Callout>
          </div>
        </div>
      </section>

      {/* The Problem with Traditional Staking */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Why I'm Hesitant About Traditional Staking</h2>
        <p className="text-lg text-muted-foreground">
          Most crypto projects push staking hard because it locks up supply and creates artificial scarcity. I have concerns about this approach:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Callout type="warning" title="Smart Contract Risk">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Bugs can lock funds permanently</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Exploits drain entire pools</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Kaspa's UTXO model complicates staking contracts</span>
              </li>
            </ul>
          </Callout>

          <Callout type="warning" title="Regulatory Complexity">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>BaFin may classify staking rewards as securities</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>EU MiCA regulations unclear on staking</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Requires extensive legal review</span>
              </li>
            </ul>
          </Callout>

          <Callout type="warning" title="Exit Liquidity Issues">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Lock-up periods trap users</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Unstaking delays create selling pressure</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Can't sell during market volatility</span>
              </li>
            </ul>
          </Callout>

          <Callout type="warning" title="Incentive Misalignment">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Users stake for yields, not platform usage</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Incentivizes holding over utility</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Defeats purpose of utility token</span>
              </li>
            </ul>
          </Callout>
        </div>

        <Callout type="success" title="Hold-to-Access Solves This">
          <p>
            By checking wallet balances on-chain WITHOUT requiring smart contract lock-up, users get platform access while maintaining full liquidity. If the platform sucks, they can sell immediately. This aligns incentives: I have to build something people actually want to use.
          </p>
        </Callout>
      </section>

      {/* What Exists vs What Doesn't */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Current Status (Honest Assessment)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Callout type="success" title="What EXISTS">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Theoretical design for hold-to-access</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Research notes on governance staking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>This documentation explaining concepts</span>
              </li>
            </ul>
          </Callout>

          <Callout type="warning" title="What DOES NOT EXIST">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>ANY working staking system</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Smart contracts for locking tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>On-chain balance checker implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>BaFin approval for staking mechanisms</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Any form of yield generation</span>
              </li>
            </ul>
          </Callout>
        </div>

        <Callout type="danger" title="Regulatory Approval Required">
          <p>
            Even the simpler hold-to-access model needs BaFin review to ensure it doesn't accidentally create a security. IF staking (governance-only) is pursued, expect extensive legal review. No promises, no guarantees.
          </p>
        </Callout>
      </section>

      {/* Related Resources */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Related Documentation</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResourceCard
            icon={FileText}
            title="Detailed Tokenomics"
            description="Complete token economics model and distribution"
            href="/docs/tokenomics/det-tokenomics"
          />
          <ResourceCard
            icon={Shield}
            title="Platform Features"
            description="Explore kas.me platform tiers and access levels"
            href="/docs/platform/infocenter/features"
          />
          <ResourceCard
            icon={AlertTriangle}
            title="Compliance Framework"
            description="BaFin/MiCA compliance and regulatory status"
            href="/docs/community/hub/audits"
          />
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">The Bottom Line</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <Callout type="warning" title="No Staking System Exists Yet">
            <p>
              This entire page describes theoretical concepts I'm researching. Nothing is implemented, deployed, or approved. Hold-to-access is the preferred approach, but even that needs regulatory approval before launch.
            </p>
          </Callout>

          <p className="text-center text-muted-foreground">
            <strong>Status:</strong> Design phase. No code written. BaFin approval required. Timeline: Unknown.
          </p>

          <Callout type="info" title="Why Document This Now?">
            <p className="text-sm">
              I'm documenting my thought process as I research these systems. This isn't a roadmap or promise - it's my engineering notebook made public. Transparency over hype.
            </p>
          </Callout>
        </div>
      </section>
    </div>
  )
}