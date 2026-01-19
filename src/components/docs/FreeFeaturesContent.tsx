import { Callout } from '@/components/docs/Callout'
import { Eye, Lock, Unlock, Wallet, ChartLine, Users } from 'lucide-react'

export function FreeFeaturesContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Free Features</h1>
        <p className="text-muted-foreground">
          Understanding the pilot phase launch strategy and what's available for free.
        </p>
      </div>

      {/* Pilot Phase Announcement */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Unlock className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">The Pilot Phase: Transparency First</h2>
        </div>

        <Callout type="info" title="Launch Day Strategy">
          On launch day, I'm showing the full kas.me system publicly. You can explore reference wallets (CyberSpace's own wallets) without logging in. This demonstrates the platform's analytical capabilities transparently before implementing privacy controls.
        </Callout>

        <p className="text-muted-foreground">
          This is the honest approach. I'm building an analytical wallet platform for the $KAS ecosystem. Before asking users to lock their wallets for privacy, I want to prove the system works by showing it in action with public reference wallets.
        </p>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <h3 className="text-xl font-bold">How It Works (Pilot Phase)</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Enter any wallet address on kas.me</li>
            <li>System checks for $CYPU ownership in that wallet</li>
            <li>If wallet holds $CYPU, you get read-only dashboard access</li>
            <li>View reference wallets (CyberSpace's public wallets) to see full capabilities</li>
            <li>Privacy controls planned as premium feature</li>
          </ol>
        </div>
      </section>

      {/* What's Free Forever */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Eye className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">What's Free Forever</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <Wallet className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold">Public Reference Wallets</h3>
            <p className="text-muted-foreground">
              View CyberSpace's wallets as reference examples. See Total Capital, PnL, transaction history. This demonstrates what the platform can do.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <ChartLine className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold">Basic Analytics</h3>
            <p className="text-muted-foreground">
              Own 1 $CYPU for lifetime access to Total Capital and PnL tracking for your own wallet. No subscription required.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <Users className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold">Community Dashboard</h3>
            <p className="text-muted-foreground">
              Network statistics, ecosystem metrics, public token analytics. Available to everyone without login.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <Lock className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold">Educational Access</h3>
            <p className="text-muted-foreground">
              Learn how the platform works by exploring reference wallets. See advanced features in action before committing to premium tiers.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Evolution */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Lock className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">Privacy Evolution: Future Changes</h2>
        </div>

        <Callout type="warning" title="Privacy Controls Planned">
          Wallet locking and privacy features are planned for implementation. This is premium functionality requiring higher $CYPU holdings.
        </Callout>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <h3 className="text-xl font-bold">Privacy Features (Premium Tiers)</h3>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-1">Wallet Locking</h4>
              <p className="text-muted-foreground">
                Lock your wallet to make analytics private. Requires Analytics tier (100 $CYPU minimum). Only you see your data.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Anonymous Mode</h4>
              <p className="text-muted-foreground">
                Hide your wallet address from public leaderboards. Intelligence tier (2,500 $CYPU minimum).
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Multi-Wallet Privacy</h4>
              <p className="text-muted-foreground">
                Manage multiple wallets with individual privacy settings. Elite tier (10,000 $CYPU minimum).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Free vs Premium */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Free Tier vs Premium Tiers</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4">Feature</th>
                <th className="text-left p-4">Free (0 $CYPU)</th>
                <th className="text-left p-4">Basic (1 $CYPU)</th>
                <th className="text-left p-4">Premium (100+ $CYPU)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4">View Reference Wallets</td>
                <td className="p-4 text-accent">Yes</td>
                <td className="p-4 text-accent">Yes</td>
                <td className="p-4 text-accent">Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Own Wallet Analytics</td>
                <td className="p-4 text-muted-foreground">No</td>
                <td className="p-4 text-accent">Total Capital, PnL</td>
                <td className="p-4 text-accent">Full Analytics Suite</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Wallet Privacy Lock</td>
                <td className="p-4 text-muted-foreground">No</td>
                <td className="p-4 text-muted-foreground">No</td>
                <td className="p-4 text-accent">Yes (Analytics+)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Intelligence Center</td>
                <td className="p-4 text-muted-foreground">No</td>
                <td className="p-4 text-muted-foreground">No</td>
                <td className="p-4 text-accent">Yes (2,500+ $CYPU)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Multi-Wallet Management</td>
                <td className="p-4 text-muted-foreground">No</td>
                <td className="p-4 text-muted-foreground">No</td>
                <td className="p-4 text-accent">Yes (Elite tier)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* What EXISTS vs What DOESN'T */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What EXISTS vs What DOESN'T</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h3 className="text-lg font-bold">What Exists Today</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Public wallet lookup system</li>
              <li>$CYPU ownership verification</li>
              <li>Reference wallet analytics (CyberSpace wallets)</li>
              <li>Basic tier access (Total Capital, PnL)</li>
              <li>Community dashboard with network stats</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <h3 className="text-lg font-bold">What Doesn't Exist Yet</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Wallet privacy locking (planned)</li>
              <li>Anonymous mode for leaderboards</li>
              <li>Multi-wallet privacy controls</li>
              <li>Intelligence Center (whale tracking, predictive models)</li>
              <li>Elite tier features (custom alerts, API access)</li>
            </ul>
          </div>
        </div>

        <Callout type="info" title="Honest Timeline">
          I'm documenting the vision before building it. Privacy controls are planned for implementation. Timeline: Unknown. Quality over speed.
        </Callout>
      </section>

      {/* BaFin/MiCA Compliance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Legal & Compliance</h2>

        <Callout type="warning" title="BaFin/MiCA Compliance Notice">
          kas.me is an analytical tool, not financial advice. All data is informational. This platform does NOT offer investment advice, portfolio management, or regulated financial services under BaFin or MiCA frameworks.
        </Callout>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Privacy & Data Protection</h3>
          <p className="text-muted-foreground">
            All blockchain data displayed is publicly available on the Kaspa network. The platform reads from public ledgers. Wallet locking (premium feature) controls visibility within kas.me only, not on-chain data.
          </p>
          <p className="text-muted-foreground">
            GDPR/DSGVO compliance: No personal data collected during pilot phase. Premium users will control their own wallet privacy settings.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-4">
        <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Try It Free on Launch Day</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No signup required. Explore reference wallets. See the full platform in action. Decide if you want to own 1 $CYPU for lifetime basic access or go premium for advanced features and privacy controls.
          </p>
          <p className="font-semibold">
            Transparency first. Privacy second. Quality always.
          </p>
        </div>
      </section>
    </div>
  )
}
