import { Callout } from './Callout'
import { ResourceCard } from './ResourceCard'
import { TOKENOMICS } from '@/lib/tokenomics-data'
import { Lock, Calendar, CheckCircle, XCircle, Shield, FileText, AlertTriangle } from 'lucide-react'

export function VestingContent() {
  return (
    <div className="space-y-12">
      {/* Development Status Banner */}
      <Callout type="info" title="Current Vesting Status">
        LIVE: Dev wallet $CYPUV purchases = 4-year lock via KaspaCom smart contract. PLANNED: Additional vesting systems pending BaFin approval. IMPORTANT: Users can freely trade $CYPUV - only firm tokens are locked.
      </Callout>

      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Lock className="w-10 h-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold">Token Vesting</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          This page explains how company-held tokens are managed to prevent market dumps and ensure long-term alignment. I'm documenting my approach to vesting - the technical mechanics and the reasoning behind the design.
        </p>
      </div>

      {/* What is Vesting */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What is Token Vesting?</h2>
        <p className="text-lg text-muted-foreground">
          Vesting is a time-locked release mechanism that prevents large token holders (usually founders/team) from dumping their allocation immediately. It's a trust signal to users: "I can't exit even if I wanted to."
        </p>

        <Callout type="tip" title="Why Vesting Exists">
          <p className="text-sm">
            Without vesting, a founder could launch a token, sell their entire allocation on day one, and disappear. Vesting creates forced long-term commitment by making it technically impossible to access tokens before specific conditions are met.
          </p>
        </Callout>
      </section>

      {/* Dual Token Vesting */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Our Dual-Token Approach</h2>
        <p className="text-lg text-muted-foreground">
          We have two tokens with different vesting strategies:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* $CYPU - No Vesting Needed */}
          <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{TOKENOMICS.CYPU.ticker} (Utility Token)</h3>
                <p className="text-sm text-muted-foreground">Max Supply: {TOKENOMICS.CYPU.maxSupply.toLocaleString()}</p>
              </div>
            </div>

            <Callout type="success" title="No Founder Allocation = No Vesting Needed">
              <p className="text-sm">
                The company treasury holds {TOKENOMICS.TREASURY.companyColdStorage.amount.toLocaleString()} $CYPU in cold storage, but these are NOT "founder tokens" - they're operational reserves for:
              </p>
              <ul className="space-y-1 text-sm mt-2">
                <li>• Development costs</li>
                <li>• Marketing</li>
                <li>• Buybacks (if treasury system is approved)</li>
                <li>• Emergency reserves</li>
              </ul>
            </Callout>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Treasury controlled by {TOKENOMICS.TREASURY.multisigConfig} multisig</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>No single-person access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Transparent on-chain movements</span>
              </div>
            </div>
          </div>

          {/* $CYPUV - Vesting Planned */}
          <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{TOKENOMICS.CYPUV.ticker} (Governance Token)</h3>
                <p className="text-sm text-muted-foreground">Max Supply: {TOKENOMICS.CYPUV.maxSupply.toLocaleString()}</p>
              </div>
            </div>

            <Callout type="success" title="4-Year Vesting LIVE (Firm Only)">
              <div className="space-y-2 text-sm">
                <p><strong>Already Implemented:</strong> Dev wallet $CYPUV purchases are automatically locked for 4 years via KaspaCom smart contract.</p>
                <p><strong>Users NOT affected:</strong> User-purchased $CYPUV tokens on DEX are fully liquid - no vesting, no locks.</p>
                <p><strong>Publicly Visible:</strong> On-chain verification shows firm tokens locked, creating trust signal.</p>
              </div>
            </Callout>

            <div className="space-y-2 text-sm">
              <p className="font-semibold">Planned Vesting Mechanism (Not Yet Implemented):</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Lock className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <span>Trigger: After Tangem integration is live (12+ months minimum)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <span>Initial unlock: 25% (~13.6M CYPUV)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <span>Linear release: 1% per month (~545K CYPUV/month)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Lock Status */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Current Lock Status (Unintentional but Effective)</h2>

        <Callout type="info" title="Two Lock Mechanisms (Firm Only)">
          <div className="space-y-3 text-sm">
            <p><strong>Lock Type 1: Tangem Hardware Lock</strong></p>
            <p>Existing firm-owned $CYPUV tokens stored in Tangem wallets are physically immovable (Tangem doesn't support KRC-20 movement for our tokens yet). This affects only pre-existing firm holdings.</p>

            <p className="mt-3"><strong>Lock Type 2: KaspaCom Smart Contract (4-Year Vesting)</strong></p>
            <p>When we (The IT CyberSpace) purchase $CYPUV via dev wallet on KaspaCom DEX, tokens are automatically locked for 4 years by smart contract. Publicly visible on-chain.</p>

            <p className="mt-3 font-semibold text-accent">Users: NOT affected by either lock. Full trading freedom on L2 DEX.</p>
          </div>
        </Callout>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Callout type="success" title="Benefits of This Situation">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Impossible for founders to dump (even if wanted to)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>No smart contract risk (no code to exploit)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Ultimate trust signal to community</span>
              </li>
            </ul>
          </Callout>

          <Callout type="note" title="When Tangem Support Arrives">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent">→</span>
                <span>Tokens become movable again</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">→</span>
                <span>THEN implement smart contract vesting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">→</span>
                <span>Community can verify contract on-chain</span>
              </li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* Smart Contract Vesting Plan */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Smart Contract Vesting (Future Implementation)</h2>
        <p className="text-lg text-muted-foreground">
          When the vesting system is built, it will use on-chain smart contracts that are:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Callout type="tip" title="Immutable">
            <p className="text-sm">
              Once deployed, the vesting contract's rules cannot be changed. No "admin override" function - code is law.
            </p>
          </Callout>

          <Callout type="tip" title="Transparent">
            <p className="text-sm">
              Anyone can verify the contract on Kaspa blockchain explorer. Every unlock event is publicly visible.
            </p>
          </Callout>

          <Callout type="tip" title="Audited">
            <p className="text-sm">
              Before deployment, the contract will undergo third-party security audits to find bugs and exploits.
            </p>
          </Callout>
        </div>

        <Callout type="warning" title="Why We Haven't Deployed Vesting Yet">
          <div className="space-y-2 text-sm">
            <p><strong>Reason 1:</strong> Tokens are already locked (Tangem limitation)</p>
            <p><strong>Reason 2:</strong> Smart contract development takes time and audits cost money</p>
            <p><strong>Reason 3:</strong> Kaspa's UTXO model complicates vesting contract design</p>
            <p><strong>Reason 4:</strong> Waiting for Tangem support makes more sense than rushing a contract</p>
          </div>
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
                <span>159,100,003 $CYPU total locked (109.1M Tangem + 50M L1 sale orders)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Tangem Lock: Firm Wallet (54.55M) + Vault Wallet (54.55M)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>L1 Sale Lock: 50M $CYPU in KaspaCom Marketplace orders</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>20M $CYPU Dev Wallet (KasWare) - movable, only dump risk</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Dev wallet $CYPUV purchases locked 4 years via KaspaCom smart contract</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>{TOKENOMICS.TREASURY.multisigConfig} multisig treasury setup</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Planned vesting design (this documentation)</span>
              </li>
            </ul>
          </Callout>

          <Callout type="warning" title="What DOES NOT EXIST">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Smart contract vesting implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Automated unlock mechanisms</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>On-chain vesting contract audits</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Ability to move Tangem-stored tokens</span>
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
            icon={FileText}
            title="Detailed Tokenomics"
            description="Complete token economics and distribution model"
            href="/docs/tokenomics/det-tokenomics"
          />
          <ResourceCard
            icon={Lock}
            title="Token Locks"
            description="Lock mechanisms and cold storage security"
            href="/docs/tokenomics/det-token/lock"
          />
          <ResourceCard
            icon={Shield}
            title="Wallet Overview"
            description="Official wallet addresses and treasury management"
            href="/docs/tokenomics/det-token/wallets"
          />
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">The Bottom Line</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <Callout type="info" title="Long-Term Commitment Through Multiple Locks">
            <p>
              159,100,003 $CYPU are effectively locked: 109.1M in Tangem (physically unmovable due to KRC-20 limitations) + 50M in L1 sale orders (locked until users purchase). Only 20M $CYPU in Dev Wallet are movable - earmarked for BaFin-compliant Private Sale. This creates stronger founder commitment than any smart contract. User tokens remain fully liquid on DEX.
            </p>
          </Callout>

          <p className="text-center text-muted-foreground">
            <strong>Lock Status:</strong> Tangem (109.1M) + L1 Sale Orders (50M) = 159.1M locked | Dev Wallet (20M) = movable. Dev wallet $CYPUV purchases locked 4 years via KaspaCom SC.
          </p>

          <Callout type="tip" title="Why Document This?">
            <p className="text-sm">
              Transparency. I could have kept the Tangem limitation quiet and let people assume vesting contracts exist. Instead, I'm documenting the actual situation: unintentional but effective long-term lock. Honesty over marketing.
            </p>
          </Callout>
        </div>
      </section>
    </div>
  )
}
