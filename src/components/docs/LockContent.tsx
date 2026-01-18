import { ResourceCard } from './ResourceCard'
import { Callout } from './Callout'
import { StatsGrid } from './StatsGrid'
import { TOKENOMICS } from '@/lib/tokenomics-data'
import { useScrollAndHighlight } from '@/hooks/useScrollAndHighlight'
import {
  Lock,
  Shield,
  CheckCircle,
  XCircle,
  FileText,
  AlertTriangle,
  Building,
  Vault,
  GitBranch,
  Cog,
  Sprout
} from 'lucide-react'

export function LockContent() {
  const { highlightedId, getAnimationClasses, getAnimationStyles } = useScrollAndHighlight({
    rotations: 2,
    rotationDuration: 3000,
    glowDuration: 2000
  })

  return (
    <div className="space-y-12">
      {/* Keyframe animations */}
      <style>{getAnimationStyles()}</style>

      {/* Development Status Banner */}
      <Callout type="info" title="Current Lock Status">
        This page explains which tokens are locked and which aren't. IMPORTANT: Only firm-owned tokens are locked. Users can freely trade $CYPUV on DEX - no user locks. The firm's dev wallet purchases are locked 4 years via KaspaCom smart contract.
      </Callout>

      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Lock className="w-10 h-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold">$CYPU Locked Tokens</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Trust through structure. No access. Long-term alignment. This page shows which specific wallets hold locked tokens and which wallets are movable.
        </p>
      </div>

      {/* Lock Summary */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Locked Supply: ~110M $CYPU</h2>

        <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground">
            Two main locked holdings back the entire ecosystem. These tokens <strong>will never move</strong> - they form the bedrock of long-term trust.
          </p>
        </div>
      </section>

      {/* Wallet Breakdown - The Core Two */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">The Two Core Locked Wallets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Locked Vault */}
          <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Vault className="w-8 h-8 text-purple-500" />
              <div>
                <h3 className="text-xl font-bold">54M - Locked Vault</h3>
                <p className="text-sm text-muted-foreground">Tangem Wallet</p>
              </div>
            </div>

            <Callout type="success" title="Permanently Inaccessible">
              <div className="space-y-2 text-sm">
                <p>Stored on Tangem hardware wallet</p>
                <p><strong>Dev has no password</strong> - Multi-custodian setup</p>
                <p>These tokens back the 1:1 $CYPUV peg and <strong>will never move</strong>.</p>
              </div>
            </Callout>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-500" />
                <span><strong>Type:</strong> Tangem Wallet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><strong>Access:</strong> Multi-custodian (no password)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><strong>Status:</strong> Immovable (Tangem doesn't support KRC-20)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><strong>Purpose:</strong> $CYPUV peg backing</span>
              </div>
            </div>

            <div className="pt-3 border-t border-border">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('kaspa:qyp3nmjyfkfk894kksm476wj484xcudt0jmm5dpp9hzuypn0vgp80zqdhk8q5vs')
                  alert('Vault address copied!')
                }}
                className="w-full px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors text-sm font-semibold"
              >
                Copy Vault Address
              </button>
            </div>
          </div>

          {/* Firm Wallet */}
          <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Building className="w-8 h-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold">54M - IT CyberSpace Firm Wallet</h3>
                <p className="text-sm text-muted-foreground">Tangem Wallet</p>
              </div>
            </div>

            <Callout type="info" title="12-Month Vesting (Planned)">
              <div className="space-y-2 text-sm">
                <p>Locked for operations, marketing, and ecosystem growth</p>
                <p>No early access • Transparent on-chain</p>
                <p>
                  <a href="/docs/tokenomics/det-token/vesting" className="text-accent hover:underline">
                    View Release Schedule →
                  </a>
                </p>
              </div>
            </Callout>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent" />
                <span><strong>Type:</strong> Tangem Wallet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><strong>Access:</strong> Direct password control</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><strong>Status:</strong> Immovable (Tangem limitation)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><strong>Purpose:</strong> Operational backbone & stability</span>
              </div>
            </div>

            <div className="pt-3 border-t border-border">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('kaspa:qype2qnvg6wy6a6ytpt0d6rt5jhcrfwhdzhfc8nexua5ax62sl0qqnsqywx4t26')
                  alert('Firm wallet address copied!')
                }}
                className="w-full px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors text-sm font-semibold"
              >
                Copy Firm Address
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* $CYPU Treasury Breakdown */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">{TOKENOMICS.CYPU.ticker} Treasury Breakdown</h2>

        <Callout type="warning" title="70M $CYPU Total - NOT All Movable">
          <div className="space-y-2 text-sm">
            <p><strong>50M $CYPU:</strong> L1 Public Sale - LOCKED as sale orders on KaspaCom L1 Marketplace (locks supply)</p>
            <p><strong>20M $CYPU:</strong> Dev Wallet (KasWare) - MOVABLE, BaFin-compliant Private Sale (only dump risk)</p>
            <p className="mt-2 font-semibold text-accent">Total: {TOKENOMICS.TREASURY.companyColdStorage.amount.toLocaleString()} $CYPU, but 50M locked via L1 sale mechanism</p>
          </div>
        </Callout>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* L1 Public Sale - LOCKED */}
          <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Lock className="w-8 h-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold">L1 Public Sale (LOCKED)</h3>
                <p className="text-sm text-muted-foreground">50,000,000 $CYPU</p>
              </div>
            </div>

            <Callout type="success" title="Locked Via Sale Orders">
              <p className="text-sm">
                All 50M tokens are listed as sale orders on KaspaCom L1 Marketplace. Sale orders lock the supply - tokens cannot be moved until purchased by users. This creates effective supply lock.
              </p>
            </Callout>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Cannot be dumped (locked in sale orders)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Publicly visible on L1 Marketplace</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Users purchase directly from L1</span>
              </div>
            </div>
          </div>

          {/* Dev Wallet - MOVABLE */}
          <div className="rounded-xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="text-xl font-bold">Dev Wallet (MOVABLE)</h3>
                <p className="text-sm text-muted-foreground">20,000,000 $CYPU</p>
              </div>
            </div>

            <Callout type="warning" title="Only Potential Dump Risk">
              <p className="text-sm">
                These 20M tokens are on KasWare and CAN be moved. This is the only real dump risk. However, they're earmarked for BaFin-compliant Private Sale (300K€ threshold for regulatory approval).
              </p>
            </Callout>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <span>NOT locked - can be moved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>{TOKENOMICS.TREASURY.multisigConfig} multisig control</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>BaFin-compliant Private Sale allocation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Wallets - Smaller Holdings */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Additional Wallets (Operational Holdings)</h2>
        <p className="text-lg text-muted-foreground">
          Smaller wallets used for daily operations, testing, and network bootstrapping. Mixed lock status.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Developer Operations Wallet */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Cog className="w-8 h-8 text-accent" />
              <div>
                <h3 className="text-lg font-bold">Developer Operations Wallet</h3>
                <p className="text-sm text-muted-foreground">901.986 $CYPU</p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Type:</strong> Tangem Wallet</p>
              <p><strong>Purpose:</strong> Hands-on innovation hub. Every mint from the kas.me bot flows here, alongside premint dev allocations.</p>
              <p><strong>Access:</strong> Multi-custodian</p>
              <p><strong>Status:</strong> Immovable (Tangem limitation)</p>
            </div>

            <div className="pt-3 border-t border-border">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('kaspa:qypj6g2yp5s94ds5cl9sejmcw9420qwzsrdpnud0khjawegnx3tn8pcfyjy2uwr')
                  alert('Dev Operations address copied!')
                }}
                className="w-full px-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors text-sm font-semibold"
              >
                Copy Address
              </button>
            </div>
          </div>

          {/* Dev Wallet / Deploy Wallet */}
          <div className="rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <GitBranch className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="text-lg font-bold">Dev Wallet / Deploy Wallet</h3>
                <p className="text-sm text-muted-foreground">20,000,000 $CYPU</p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Type:</strong> KasWare Wallet</p>
              <p><strong>Purpose:</strong> Core development reserves. The seed for bridging kas.me to regulated opportunities - angel investments, BaFin-compliant tools.</p>
              <p><strong>Access:</strong> Direct control</p>
              <p><strong>Status:</strong> <span className="text-red-500 font-semibold">Fully transferable (MOVABLE)</span></p>
            </div>

            <div className="pt-3 border-t border-border">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('kaspa:qrxnnfj0kh0v67cwkyr3w6wjg7hz5h39s2nfs5gvt5g79hrw4f94cxmlzc6l3')
                  alert('Dev wallet address copied!')
                }}
                className="w-full px-4 py-2 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30 transition-colors text-sm font-semibold"
              >
                Copy Address
              </button>
            </div>
          </div>

          {/* Initial Seed / CyberPumpNetwork Operational System */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Sprout className="w-8 h-8 text-accent" />
              <div>
                <h3 className="text-lg font-bold">Initial Seed / CyberPumpNetwork</h3>
                <p className="text-sm text-muted-foreground">3,094 $CYPU</p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Type:</strong> KasWare Wallet</p>
              <p><strong>Purpose:</strong> The spark of the network. Early operational liquidity for CyberPumpNetwork bootstrapping.</p>
              <p><strong>Access:</strong> Direct control</p>
              <p><strong>Status:</strong> <span className="text-green-500 font-semibold">Transferable (agile starts)</span></p>
            </div>

            <div className="pt-3 border-t border-border">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('kaspa:qq8evllddq4dsqekuclrwttpvr7r86qq90vnpjyhwmvmky7sywerqqhm22gwh')
                  alert('Initial Seed address copied!')
                }}
                className="w-full px-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors text-sm font-semibold"
              >
                Copy Address
              </button>
            </div>
          </div>
        </div>

        <Callout type="warning" title="Lock Reality Check">
          <p className="text-sm">
            <strong>Tangem Immovability:</strong> Isn't a choice - it's our current edge, turning vaults into fortresses. We're not hiding; we're hardening. The only movable wallets are the two KasWare ones (Dev Wallet 20M + Initial Seed 3K).
          </p>
        </Callout>
      </section>

      {/* $CYPUV Governance - Physically Locked */}
      <section
        id="firm-cypuv-lock"
        className={`space-y-6 rounded-xl p-6 -mx-6 transition-all duration-500 ${getAnimationClasses('firm-cypuv-lock')}`}
      >
        <h2 className="text-3xl font-bold">{TOKENOMICS.CYPUV.ticker} Governance (Physically Locked)</h2>

        <Callout type="warning" title="Firm $CYPUV Locked (NOT User Tokens)">
          <div className="space-y-2 text-sm">
            <p><strong>IMPORTANT CLARIFICATION:</strong> Only The IT CyberSpace's (firm) $CYPUV tokens are locked. User-purchased tokens are fully liquid.</p>
            <p><strong>Two types of locks for firm tokens:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>→ Existing firm tokens in Tangem: Physically locked (Tangem doesn't support KRC-20 movement)</li>
              <li>→ Dev wallet purchases: 4-year lock via KaspaCom smart contract (publicly visible)</li>
            </ul>
            <p className="mt-2"><strong>Users:</strong> Can buy/sell $CYPUV freely on L2 KaspaCom DEX - no locks, full liquidity.</p>
          </div>
        </Callout>

        <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Lock className="w-8 h-8 text-purple-500" />
            <div>
              <h3 className="text-xl font-bold">{TOKENOMICS.CYPUV.ticker} Governance Token</h3>
              <p className="text-sm text-muted-foreground">
                Firm holdings locked in Tangem (user tokens freely tradeable on DEX)
              </p>
            </div>
          </div>

          <Callout type="info" title="How The Firm Lock Works">
            <div className="space-y-2 text-sm">
              <p><strong>1. Storage Location:</strong> Firm's Tangem hardware wallets (ultra-secure)</p>
              <p><strong>2. Tangem Status:</strong> Classifies $CYPU/$CYPUV as "unsafe/unsupported" tokens</p>
              <p><strong>3. Practical Effect:</strong> Firm cannot create transactions to move these tokens from Tangem</p>
              <p><strong>4. Duration:</strong> Until Tangem adds full KRC-20 support</p>
              <p><strong>5. User Tokens:</strong> NOT affected - users trade freely on L2 DEX</p>
            </div>
          </Callout>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Callout type="success" title="Benefits">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Impossible to dump (even accidentally)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>No smart contract exploit risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>Ultimate commitment signal</span>
                </li>
              </ul>
            </Callout>

            <Callout type="warning" title="Drawbacks">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Can't use tokens for governance (yet)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Depends on Tangem's timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Unintentional = unpredictable unlock date</span>
                </li>
              </ul>
            </Callout>
          </div>
        </div>
      </section>

      {/* What is $CYPUV? */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What is {TOKENOMICS.CYPUV.ticker}?</h2>
        <p className="text-lg text-muted-foreground">
          If you're wondering why we have TWO tokens, here's the simplified explanation:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Callout type="note" title={`${TOKENOMICS.CYPU.ticker} (Utility Token)`}>
            <ul className="space-y-2 text-sm">
              <li>• Max Supply: {TOKENOMICS.CYPU.maxSupply.toLocaleString()}</li>
              <li>• Purpose: {TOKENOMICS.CYPU.purpose}</li>
              <li>• Tradeable: Yes (on DEX)</li>
              <li>• Governance: No</li>
            </ul>
          </Callout>

          <Callout type="note" title={`${TOKENOMICS.CYPUV.ticker} (Governance Token)`}>
            <ul className="space-y-2 text-sm">
              <li>• Max Supply: {TOKENOMICS.CYPUV.maxSupply.toLocaleString()}</li>
              <li>• Purpose: {TOKENOMICS.CYPUV.purpose}</li>
              <li>• Tradeable: YES - LIVE on L2 KaspaCom DEX (Bonding Curve)</li>
              <li>• User Liquidity: FULL (max 2300 KAS per order)</li>
              <li>• Firm Lock: Dev wallet purchases = 4 years via KaspaCom SC</li>
              <li>• Governance: Yes (when governance system launches)</li>
            </ul>
          </Callout>
        </div>

        <Callout type="tip" title="Why This Structure?">
          <p className="text-sm">
            $CYPU provides platform utility and liquidity for users. $CYPUV provides governance rights for long-term project direction. This separation prevents governance voting from being captured by short-term traders.
          </p>
        </Callout>

        <Callout type="info" title="Learn More">
          <p className="text-sm">
            For detailed explanation of the dual-token model and peg mechanism, see the{' '}
            <a href="/docs/tokenomics/det-token/peg" className="text-accent hover:underline">
              Peg Documentation
            </a>
            .
          </p>
        </Callout>
      </section>

      {/* Future Plans */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">What Happens When Tangem Support Arrives?</h2>

        <Callout type="warning" title="Timeline: Unknown">
          <p className="text-sm">
            Tangem support depends entirely on their development timeline. We have no control over when (or if) they'll add full KRC-20 support for our tokens.
          </p>
        </Callout>

        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">
            IF Tangem adds support, here's the planned approach:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <span className="text-accent font-bold">1</span>
              </div>
              <div>
                <p className="font-semibold">Deploy Smart Contract Vesting</p>
                <p className="text-sm text-muted-foreground">
                  Create on-chain vesting contracts with time-locked releases (see{' '}
                  <a href="/docs/tokenomics/det-token/vesting" className="text-accent hover:underline">
                    Vesting Documentation
                  </a>
                  )
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <span className="text-accent font-bold">2</span>
              </div>
              <div>
                <p className="font-semibold">Audit Contracts</p>
                <p className="text-sm text-muted-foreground">
                  Third-party security audit before deployment (prevent exploits)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <span className="text-accent font-bold">3</span>
              </div>
              <div>
                <p className="font-semibold">Transfer to Vesting Contracts</p>
                <p className="text-sm text-muted-foreground">
                  Move $CYPUV from Tangem to smart contract vesting system
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-card/50">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <span className="text-accent font-bold">4</span>
              </div>
              <div>
                <p className="font-semibold">Community Verification</p>
                <p className="text-sm text-muted-foreground">
                  Anyone can verify vesting schedule on-chain (full transparency)
                </p>
              </div>
            </div>
          </div>
        </div>

        <Callout type="danger" title="No Guarantees">
          <p className="text-sm">
            This is the PLAN, not a promise. Tangem support timeline is unknown. Smart contract development takes time. Audits cost money. No launch date can be set.
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
                <span>Transparent on-chain tracking</span>
              </li>
            </ul>
          </Callout>

          <Callout type="warning" title="What DOES NOT EXIST">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Smart contract vesting system</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Ability to move Tangem-locked tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>$CYPUV governance functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Timeline for Tangem support</span>
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
            icon={Lock}
            title="Vesting Schedule"
            description="Planned vesting mechanism for $CYPUV governance tokens"
            href="/docs/tokenomics/det-token/vesting"
          />
          <ResourceCard
            icon={FileText}
            title="Detailed Tokenomics"
            description="Complete dual-token economics model"
            href="/docs/tokenomics/det-tokenomics"
          />
          <ResourceCard
            icon={AlertTriangle}
            title="Peg Mechanism"
            description="How $CYPUV maintains 1:1 backing with $CYPU"
            href="/docs/tokenomics/det-token/peg"
          />
        </div>
      </section>

      {/* Status Note - Holdings Reflect Reality */}
      <section className="space-y-6">
        <div className="max-w-4xl mx-auto rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-accent">Status as of November 07, 2025</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Holdings reflect real-time ecosystem flows. Tangem immovability isn't a choice - it's our current edge, turning vaults into fortresses. We're not hiding; we're hardening. Verify any address on-chain.
          </p>
          <p className="text-lg font-semibold">
            This transparency? It's the code we live by.
          </p>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">The Bottom Line</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <div className="rounded-xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent p-8 text-center space-y-3">
            <p className="text-red-500 font-bold text-xl">No Exits. No Dumps.</p>
            <p className="text-lg font-semibold">
              These tokens fuel the build - not the sell.
            </p>
            <p className="text-muted-foreground">
              Your trust is our alignment.
            </p>
          </div>

          <Callout type="info" title="We think in decades, not days.">
            <div className="space-y-2">
              <p>Locked tokens = locked commitment.</p>
              <p className="text-sm text-muted-foreground">
                <strong>Lock Breakdown:</strong> Tangem (109.1M) + L1 Sale Orders (50M) = 159.1M locked | Dev Wallet (20M) = movable
              </p>
            </div>
          </Callout>

          <Callout type="tip" title="Transparency Over Marketing">
            <p className="text-sm">
              I could have hidden the Tangem limitation and let people assume we have fancy vesting contracts deployed. Instead, I'm documenting the truth: unintentional lock that's stronger than any smart contract. Honesty first.
            </p>
          </Callout>
        </div>
      </section>
    </div>
  )
}
