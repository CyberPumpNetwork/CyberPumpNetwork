import { Callout } from '@/components/docs/Callout'
import { Leaf, Network, Repeat, Zap, Sun, Activity, ArrowRight } from 'lucide-react'
import circleImage from '@/assets/circle.jpeg'

export function EcoLoopContent() {
  return (
    <div className="space-y-8">
      <style>{`
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .orbit-master {
          animation: rotate 15s linear infinite;
        }
      `}</style>
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">The EcoLoop</h1>
        <p className="text-muted-foreground">
          Two interconnected loops - one vision. Real-world innovation meets on-chain synergy.
        </p>
      </div>

      {/* The Dual Ecosystem */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-center">The Dual Ecosystem</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <Leaf className="w-8 h-8 text-accent" />
            <h3 className="text-xl font-bold">Real-World Loop</h3>
            <p className="text-muted-foreground">
              <strong>German Innovation Beyond the Blockchain</strong>
            </p>
            <p className="text-muted-foreground">
              Energy efficiency, heat recovery, sustainable infrastructure, circular economy in action.
            </p>
            <p className="text-muted-foreground">
              I don't just talk sustainability - I live it. From server cooling to energy reuse, every watt counts.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <Network className="w-8 h-8 text-accent" />
            <h3 className="text-xl font-bold">On-Chain Loop</h3>
            <p className="text-muted-foreground">
              <strong>Decentralized, User-Driven Synergy</strong>
            </p>
            <p className="text-muted-foreground">
              $CYPU, $CYPUV, bots, arbitrage, platform access, feedback loops.
            </p>
            <p className="text-muted-foreground">
              Every action triggers a reaction. A $CYPUV purchase? Instant arbitrage. A stake? Platform boost. Not unique - but alive.
            </p>
          </div>
        </div>
      </section>

      {/* The Power of Synergy */}
      <section className="space-y-4">
        <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4">
          <Repeat className="w-12 h-12 text-accent mx-auto" />
          <h2 className="text-2xl font-bold">The Power of Synergy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <strong>Real-world efficiency</strong> powers <strong>on-chain reliability</strong>.{' '}
            <strong>On-chain activity</strong> funds <strong>real-world innovation</strong>.
          </p>
          <p className="text-muted-foreground italic">
            We are not just Chyperpunks. We are <strong>builders</strong> - in code, in steel, in energy, in trust.
          </p>
        </div>
      </section>

      {/* The Infinite Loop Explained */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">The CyberPumpNetwork: One Infinite, Living Loop</h2>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <div className="flex justify-center my-6">
            <div className="relative inline-block">
              <img
                src={circleImage}
                alt="The EcoLoop - Infinite feedback loop diagram"
                className="max-w-full h-auto rounded-lg border-4 border-accent shadow-lg"
                style={{ maxWidth: '720px', maxHeight: '460px' }}
              />

              {/* Three orbiting arrows - single rotating container */}
              <div
                className="orbit-master absolute top-1/2 left-1/2"
                style={{
                  width: '320px',
                  height: '320px',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none'
                }}
              >
                {/* Arrow 1 - Inner orbit */}
                <ArrowRight
                  className="absolute top-1/2 left-1/2 text-accent"
                  style={{
                    transform: 'translate(-50%, -50%) translateY(-80px)',
                    fontSize: '1.8em',
                    filter: 'drop-shadow(0 0 6px currentColor)',
                    opacity: 0.9
                  }}
                  size={32}
                />

                {/* Arrow 2 - Middle orbit */}
                <ArrowRight
                  className="absolute top-1/2 left-1/2 text-accent"
                  style={{
                    transform: 'translate(-50%, -50%) translateY(-120px)',
                    fontSize: '1.8em',
                    filter: 'drop-shadow(0 0 6px currentColor)',
                    opacity: 0.8
                  }}
                  size={32}
                />

                {/* Arrow 3 - Outer orbit */}
                <ArrowRight
                  className="absolute top-1/2 left-1/2 text-accent"
                  style={{
                    transform: 'translate(-50%, -50%) translateY(-160px)',
                    fontSize: '1.8em',
                    filter: 'drop-shadow(0 0 6px currentColor)',
                    opacity: 0.7
                  }}
                  size={32}
                />
              </div>
            </div>
          </div>
          <p className="text-muted-foreground">
            Three arrows orbit the circle - each representing a feedback loop, each reinforcing the others. This is the EcoLoop in visual form: infinite, perpetual, alive.
          </p>
          <p className="text-muted-foreground">
            The circle never breaks. Real-world operations feed on-chain activity. On-chain activity funds real-world expansion. Both loops accelerate together.
          </p>
        </div>

        <Callout type="info" title="Two Entry Points, One Circle">
          You can enter through real-world (buy miners, generate $KAS) or on-chain (buy $CYPU, access platform). Both paths feed each other. You don't need to run the full loop - we close the circle.
        </Callout>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Sun className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Real-World Engine</h3>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Start with capital → buy a miner</strong></p>
              <p>Miner → $KAS revenue → sold for fiat → funds <strong>solar panels</strong></p>
              <p>Solar → powers miners → reduces costs</p>
              <p>Miner heat → warms homes, greenhouses → grows <strong>local tomatoes</strong> → sold → revenue</p>
              <p>Future: <strong>heat-to-electricity tech</strong> (10-year vision)</p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">On-Chain Intelligence</h3>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Or start with $CYPU → kas.me access</strong></p>
              <p>Platform → AI analytics, Kaspa insights, community tools</p>
              <p>Future: <strong>staking, yields, platform ownership</strong> (MiCA-ready, 5-10 years)</p>
              <p>Every action → arbitrage, bots, feedback loops → ecosystem grows</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4">
          <p className="text-lg font-semibold">
            You don't need to run the full loop.
          </p>
          <div className="text-muted-foreground">
            <p>Invest & Use</p>
            <p>Hold & Farm</p>
            <p>Mine & Grow</p>
          </div>
          <p className="font-bold text-accent">
            We close the circle. You just live in it.
          </p>
        </div>
      </section>

      {/* How It Works in Practice */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">How It Works in Practice</h2>

        <div className="grid gap-4">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Real-World Example: Mining Operation</h3>
            <p className="text-muted-foreground">
              I run Kaspa miners. They generate $KAS. I sell $KAS for fiat. That fiat buys solar panels. Solar panels power miners (lower electricity costs). Miners generate heat. Heat warms greenhouses. Greenhouses grow tomatoes. Tomatoes sell for revenue. Revenue buys more miners or solar panels.
            </p>
            <p className="text-muted-foreground">
              This is circular economy. No waste. Every output becomes an input somewhere else.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">On-Chain Example: Platform Funding</h3>
            <p className="text-muted-foreground">
              Users buy $CYPU to access kas.me analytics. That $CYPU demand creates liquidity. Liquidity enables arbitrage bots. Bots trade $CYPU/$CYPUV pairs. Trading volume generates fees. Fees fund platform development. Better platform attracts more users. More users buy $CYPU.
            </p>
            <p className="text-muted-foreground">
              This is feedback loop. User growth funds infrastructure. Infrastructure attracts user growth.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">The Connection: Real-World ↔ On-Chain</h3>
            <p className="text-muted-foreground">
              Mining profits ($KAS) partially fund platform infrastructure (Godfather nodes, Worker nodes, ML training). Platform analytics help miners optimize operations (hashrate analysis, network health). Both loops feed each other.
            </p>
            <p className="text-muted-foreground">
              Higher tier kas.me users subsidize free tier users. Free tier users attract ecosystem growth. Ecosystem growth increases $CYPU demand. Demand funds real-world expansion (more miners, more solar, more heat recovery).
            </p>
          </div>
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
              <li>Active mining operations (Kaspa ASICs running)</li>
              <li>Solar panel installations (powering miners)</li>
              <li>Heat recovery systems (greenhouse heating)</li>
              <li>kas.me platform infrastructure (running internally for development - Godfather nodes, Workers tested)</li>
              <li>$CYPU token (live on Kaspa, tradable on DEX)</li>
              <li>$CYPUV token (governance rights, on-chain voting)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <h3 className="text-lg font-bold">What Doesn't Exist Yet</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Heat-to-electricity conversion tech (10-year vision)</li>
              <li>$CYPU staking mechanisms (pending MiCA compliance, 5-10 years)</li>
              <li>Platform ownership distribution via $CYPUV (governance structure in design)</li>
              <li>Full tomato-to-revenue cycle (pilot phase)</li>
              <li>Arbitrage bots for $CYPU/$CYPUV (architecture designed, implementation pending)</li>
            </ul>
          </div>
        </div>

        <Callout type="warning" title="Timeline Reality Check">
          The EcoLoop is partially operational: Mining, solar, tokens live publicly. Platform infrastructure running internally for development, awaits BaFin approval for public deployment. Full circle closure requires regulatory clarity (MiCA for staking/yields), technology maturity (heat-to-electricity), and time (5-10 year horizon for complete vision).
        </Callout>
      </section>

      {/* Why This Matters */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Why This Matters</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <p className="text-muted-foreground">
            Most crypto projects are on-chain only. They promise "utility" but deliver speculation. No real-world connection. No circular economy. Just tokens trading against each other.
          </p>
          <p className="text-muted-foreground">
            We don't just talk sustainability - we <strong>live it</strong>. From server cooling to energy reuse, every watt counts. This is German engineering applied to crypto: efficiency, precision, circular thinking.
          </p>
          <p className="text-muted-foreground">
            We're building both sides. Real-world operations (mining, energy, agriculture) generate tangible value. On-chain infrastructure (platform, analytics, governance) distributes that value and creates feedback loops.
          </p>
          <p className="text-muted-foreground">
            Every action triggers a reaction. A $CYPUV purchase? Instant arbitrage potential. A stake? Platform access boost. Token trading? Liquidity for the ecosystem. Miner heat? Greenhouse warmth. Not unique individually - but alive as a system.
          </p>
          <p className="text-muted-foreground">
            The EcoLoop is not a whitepaper promise. Parts of it are already running. Other parts require regulatory clarity and technological advancement. We're building what we can build now, planning what we'll build later.
          </p>
          <p className="font-semibold">
            This is a long-term vision with incremental progress.
          </p>
        </div>
      </section>

      {/* Legal & Compliance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Legal & Compliance</h2>

        <Callout type="warning" title="BaFin/MiCA Compliance Notice">
          The EcoLoop involves real-world operations (mining, energy, agriculture) and on-chain mechanisms (tokens, platform access). Staking and yield mechanisms are NOT live - they require MiCA regulatory compliance (5-10 year timeline). This is NOT financial advice or investment opportunity.
        </Callout>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Risk Disclosure</h3>
          <p className="text-muted-foreground">
            Real-world operations carry operational risk (mining profitability depends on $KAS price, electricity costs, hardware failures). On-chain mechanisms carry market risk ($CYPU/$CYPUV prices are volatile). The EcoLoop is a long-term vision, not a short-term guarantee.
          </p>
          <p className="text-muted-foreground">
            I am building infrastructure, not selling returns. You participate in an ecosystem, not an investment product.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-4">
        <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">The Vision</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two interconnected loops - one vision. Real-world innovation meets on-chain synergy. Real-world efficiency powering on-chain reliability. On-chain activity funding real-world innovation.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Not a promise - a process. Not overnight - over years. Not speculation - building.
          </p>
          <p className="font-semibold">
            We're not selling you a dream. We're showing you what we're building.
          </p>
        </div>
      </section>
    </div>
  )
}
