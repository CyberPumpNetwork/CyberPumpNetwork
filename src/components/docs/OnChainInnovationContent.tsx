import { Callout } from '@/components/docs/Callout'
import { Bot, Coins, TrendingUp, Zap, Target } from 'lucide-react'

export function OnChainInnovationContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">On-Chain Innovation</h1>
        <p className="text-muted-foreground">
          Automated systems, fair minting, market dynamics. This is not a token launch - this is infrastructure for a self-sustaining on-chain economy. <strong>Every node reads the blockchain directly</strong> - no intermediaries, no centralized APIs, pure chain validation.
        </p>
      </div>

      {/* Direct Chain Access Callout */}
      <Callout type="info" title="The Core Innovation: Direct Blockchain Access">
        <div className="space-y-2">
          <p>Every Worker (lightweight or full) and Godfather node validates data from blockchain state. No trust, only verification. This is how decentralized infrastructure should work: direct on-chain reads, cryptographic validation, zero intermediaries.</p>
          <p><strong>Godfathers:</strong> Full Kaspa nodes that read every block, validate every transaction, extract analytics directly from UTXO set.</p>
          <p><strong>Full Workers:</strong> Can run own Kaspa nodes, becoming independent chain validators while serving kas.me APIs.</p>
          <p><strong>Lightweight Workers:</strong> Receive HMAC-signed data from Godfathers, validate signatures, serve trusted data.</p>
          <p className="text-sm italic">This is the foundation that enables everything else: ML models, whale tracking, predictive analytics - all built on verified on-chain data, not centralized databases.</p>
        </div>
      </Callout>

      {/* The Hard Truth */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">The Hard Truth: Why This Is Dangerous (And Necessary)</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <p className="text-muted-foreground">
            I cannot build this "small." The logic demands scale. A PEG bot for stability. A mint system for accessibility. Arbitrage dynamics for efficiency. Combined, they form an HFT-adjacent DeFi engine that could theoretically stabilize the ecosystem - or collapse spectacularly if designed wrong.
          </p>
          <p className="text-muted-foreground">
            Every failed DeFi project haunts this design: Terra/Luna (algorithmic peg spiral), Olympus DAO (unsustainable bonding), Basis Cash (bank run mechanics). I've studied every failure. I know the red flags. I'm building anyway - because the alternative is stagnation.
          </p>
          <p className="text-muted-foreground">
            This is not confidence. This is calculated risk in a competitive environment full of copy cats and failed ambitions. If the logic demands it exists, it must exist - regardless of how ambitious it looks.
          </p>
        </div>

        <Callout type="warning" title="Not Financial Advice">
          These mechanisms involve DeFi risks: impermanent loss, smart contract bugs, market manipulation, regulatory uncertainty. This is experimental infrastructure, not guaranteed returns. Participate at your own risk.
        </Callout>
      </section>

      {/* The Three Pillars */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">The Three On-Chain Pillars</h2>

        <div className="grid gap-4">
          {/* PEG Bot */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">1. Community PEG Bot (Stability Mechanism)</h3>
            </div>

            <p className="text-muted-foreground">
              <strong>Goal:</strong> Maintain price stability between $CYPU (platform token) and $CYPUV (governance token) through automated liquidity provision.
            </p>

            <div className="space-y-3 text-muted-foreground text-sm">
              <div>
                <p className="font-semibold mb-1">How It Works</p>
                <p>Automated bot monitors $CYPU/$CYPUV price ratio. When ratio deviates from target (e.g., 1:1 or configured peg), bot provides liquidity to rebalance. Liquidity providers (LPs) earn fees on Total Value Locked (TVL). Bot scales liquidity as the project evolves toward a smart contract peg.</p>
              </div>

              <div>
                <p className="font-semibold mb-1">NOT Like Terra/Luna (Critical Difference)</p>
                <p>Terra/Luna used algorithmic minting to maintain peg (mint UST → burn LUNA, creating death spiral). PEG Bot uses <strong>liquidity provision</strong>, NOT minting. No infinite supply expansion, no spiral mechanics. If peg breaks, bot pauses - doesn't accelerate collapse.</p>
              </div>

              <div>
                <p className="font-semibold mb-1">Risks</p>
                <p>Impermanent loss for LPs if price diverges permanently. Smart contract bugs (bot automation risk). Market manipulation (whale dumps overwhelming liquidity). Regulatory classification (could be deemed financial service under MiCA).</p>
              </div>

              <div>
                <p className="font-semibold mb-1">Current Status</p>
                <p className="italic"><strong>PEG Pool live on DEXs (KaspaCom, ZealousSwap) - manual liquidity provision operational.</strong> Automated PEG Bot code complete but NOT deployed - awaiting MiCA regulatory clarity for automated DeFi mechanisms. Bot can be activated once regulatory approval obtained. Pool works manually now, automation pending approval.</p>
              </div>
            </div>
          </div>

          {/* Mint System */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Coins className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">2. Controlled Mint System (Fair Access Mechanism)</h3>
            </div>

            <p className="text-muted-foreground">
              <strong>Goal:</strong> Enable 1:1 token creation (user mints $CYPU by burning equivalent value) to lower entry barriers without flooding supply.
            </p>

            <div className="space-y-3 text-muted-foreground text-sm">
              <div>
                <p className="font-semibold mb-1">How It Works</p>
                <p>800M $CYPU remain to be minted (out of 1B total supply). Users can mint $CYPU by providing collateral (e.g., $KAS, stablecoins, or other approved assets). Minting is 1:1 value-backed, phased over years to prevent supply shocks. Early adopters get access to platform tiers without buying on secondary markets.</p>
              </div>

              <div>
                <p className="font-semibold mb-1">NOT Like Olympus DAO (Critical Difference)</p>
                <p>Olympus used bonding (mint OHM below market price, paid via LP tokens) to incentivize liquidity, creating unsustainable APY promises. Our mint system is <strong>value-backed, NOT discounted</strong>. No promise of returns, just platform access. Collateral locked, not sold for Treasury profits.</p>
              </div>

              <div>
                <p className="font-semibold mb-1">Risks</p>
                <p>Supply inflation if minting uncapped (800M is hard cap, phased rollout). Collateral volatility ($KAS price drops → minted tokens overcollateralized). Regulatory classification (minting could be deemed token issuance under securities law).</p>
              </div>

              <div>
                <p className="font-semibold mb-1">Current Status</p>
                <p className="italic"><strong>Minting logic implemented, collateral management system ready.</strong> NOT deployed - requires smart contract audit + regulatory classification clarity. Initial 200M $CYPU circulating via ICO. Remaining 800M mintable once MiCA framework provides legal certainty for token issuance mechanisms.</p>
              </div>
            </div>
          </div>

          {/* Market Dynamics */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">3. Market Dynamics & Arbitrage (Efficiency Mechanism)</h3>
            </div>

            <p className="text-muted-foreground">
              <strong>Goal:</strong> Embrace arbitrage bots as network stabilizers, not enemies. They balance prices across exchanges, generate LP fees, ensure market efficiency.
            </p>

            <div className="space-y-3 text-muted-foreground text-sm">
              <div>
                <p className="font-semibold mb-1">How It Works</p>
                <p>When $CYPU price diverges between DEXs (e.g., Chainge vs. future DEXs), arbitrage bots buy low/sell high to profit. This arbitrage corrects price discrepancies, generates trading fees for LPs, and ensures single global price (efficient market hypothesis). Users with technical skills can run bots, earn from inefficiencies.</p>
              </div>

              <div>
                <p className="font-semibold mb-1">NOT Like High-Risk DeFi (Critical Difference)</p>
                <p>Most DeFi projects fight arbitrage (view bots as extractive). We <strong>design for arbitrage</strong> - it's a feature, not a bug. HFT in traditional finance stabilizes liquidity. Same principle here. No infinite loops, no MEV exploitation beyond normal market dynamics.</p>
              </div>

              <div>
                <p className="font-semibold mb-1">Risks</p>
                <p>Front-running (bots exploit transaction ordering). Sandwich attacks (bots profit from user trades). Low liquidity enabling price manipulation. Regulatory scrutiny (HFT-adjacent tools attract SEC/BaFin attention).</p>
              </div>

              <div>
                <p className="font-semibold mb-1">Current Status</p>
                <p className="italic">Arbitrage already happening organically (Chainge DEX live). No official bots deployed by project - community runs own bots. Future: Open-source reference bot for educational purposes (not financial advice).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The HFT Connection */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">The HFT Tool Reality: Why This Connects to kas.me Analytics</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold">The Controversial Truth</h3>
          </div>

          <p className="text-muted-foreground">
            kas.me platform provides on-chain analytics (whale tracking, Intelligence Center predictions, regime detection). Theoretically, this data could feed HFT strategies: detect whale accumulation → anticipate pump → arbitrage before market reacts.
          </p>

          <p className="text-muted-foreground">
            This is the elephant in the room. <strong>I'm building analytics tools that could be weaponized for HFT.</strong> Most projects hide this. I'm stating it openly because honesty matters more than optics.
          </p>

          <div className="space-y-3 text-muted-foreground text-sm">
            <div>
              <p className="font-semibold mb-1">The Difference: No Centralized Edge</p>
              <p>Traditional HFT: Firms get privileged data access (dark pools, order flow, co-located servers). I don't have privileged access - <strong>kas.me data comes from public blockchain that anyone can read</strong>. Anyone can run a Worker node (lightweight or full), access same data, build same bots. Anyone with colocation can run a full Kaspa node + Worker software, becoming an independent validator with zero trust dependency.</p>
              <p className="mt-2"><strong>Decentralized HFT infrastructure, not centralized advantage.</strong> The innovation: democratizing infrastructure so sophisticated analytics don't require privileged access. Every node reads the chain directly.</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Why Connect Analytics to DeFi?</p>
              <p>If analytics predict market movements, why not use predictions to stabilize ecosystem (PEG Bot adjusts liquidity based on regime detection)? This is like Terra/Luna concept (algorithmic stability via data), but without death spiral mechanics. Predictions inform liquidity provision, NOT infinite minting.</p>
            </div>

            <div>
              <p className="font-semibold mb-1">The Risk: Regulatory Scrutiny</p>
              <p>Combining analytics + DeFi mechanisms = potential classification as financial service (MiCA) or securities offering (SEC). This is why PEG Bot + Mint System deferred until regulatory clarity. I'm not launching risky mechanisms into legal uncertainty.</p>
            </div>

            <div>
              <p className="font-semibold mb-1">The Vision: Stability Without Ponzi</p>
              <p>Could analytics-driven liquidity provision stabilize $CYPU price? Yes. Could it prevent cascading sell-offs (detect panic regime → inject liquidity)? Possibly. Could it fail catastrophically if models wrong? Absolutely. This is experimental, not proven.</p>
            </div>
          </div>
        </div>

        <Callout type="warning" title="Why Terra/Luna Failed (And How This Differs)">
          Terra/Luna failed because algorithmic peg relied on infinite LUNA minting → UST demand dropped → LUNA hyperinflation → death spiral. Our PEG Bot uses <strong>finite liquidity pools</strong>, NOT infinite minting. If liquidity exhausted, bot pauses - doesn't accelerate collapse. Still risky, but fundamentally different mechanism.
        </Callout>
      </section>

      {/* Innovation vs. Copy Cats */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Innovation in a Competitive Environment</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <p className="text-muted-foreground">
            DeFi is full of copy cats. Fork Uniswap, change logo, promise APY, dump tokens, repeat. No innovation, just speculation. Failed projects everywhere: Iron Finance, Wonderland, SafeMoon, thousands more.
          </p>

          <p className="text-muted-foreground">
            I refuse to build small. If logic demands PEG Bot for stability, I design PEG Bot. If minting enables fair access, I design minting. If arbitrage strengthens network, I embrace arbitrage. Ambition is not arrogance - it's necessity in a space where mediocrity dies fast.
          </p>

          <div className="space-y-3 text-muted-foreground text-sm">
            <div>
              <p className="font-semibold mb-1">What Makes This Different</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Real-world revenue (mining, IT services) funds development, NOT token sales</li>
                <li>Analytics platform has utility BEYOND token speculation (on-chain intelligence)</li>
                <li>Mechanisms deferred until regulatory clarity, NOT rushed to market</li>
                <li>Transparent risk disclosure, NOT promises of guaranteed returns</li>
                <li>10-year vision, NOT 90-day pump-and-dump</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-1">What Could Still Fail</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Smart contract bugs (code risk)</li>
                <li>Regulatory ban (legal risk)</li>
                <li>Market manipulation overwhelming liquidity (economic risk)</li>
                <li>Platform adoption failure → token utility collapse (adoption risk)</li>
                <li>ML models predicting wrong → stability mechanisms backfire (model risk)</li>
              </ul>
            </div>
          </div>
        </div>

        <Callout type="info" title="Pain Point: Can't Build Small">
          My pain point: I cannot build incrementally. The system logic demands full architecture - PEG + Mint + Arbitrage + Analytics. Half-measures create worse risks (unstable peg without arbitrage, minting without liquidity). So I build fully or not at all. This looks ambitious. It is ambitious. That's the only way it works.
        </Callout>
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
              <li>$CYPU token live on Kaspa (200M circulating supply)</li>
              <li>$CYPUV governance token live (voting rights design complete)</li>
              <li>Chainge DEX trading (organic arbitrage already happening)</li>
              <li>Analytics platform architecture (whale tracking, ML models)</li>
              <li>Smart contract logic designed (PEG Bot, Mint System)</li>
              <li>Risk models documented (failure mode analysis)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <h3 className="text-lg font-bold">What Doesn't Exist Yet</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>PEG Bot deployment (pending MiCA compliance, 5-10 years)</li>
              <li>Mint System activation (regulatory approval required)</li>
              <li>Official arbitrage bots (community runs own, no project bots)</li>
              <li>Analytics-to-DeFi integration (stability mechanisms deferred)</li>
              <li>Smart contract audits (will happen before any deployment)</li>
              <li>Yield/staking mechanisms (MiCA compliance mandatory)</li>
            </ul>
          </div>
        </div>

        <Callout type="warning" title="Current Status">
          On-chain mechanisms are 90% designed, 10% deployed. Token exists, trading exists, analytics exist. DeFi automation (PEG, Mint, HFT integration) deferred until legal framework clear. Not rushing into regulatory uncertainty.
        </Callout>
      </section>

      {/* Real-World Impact Connection */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">On-Chain Innovation + Real-World Impact</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold">The EcoLoop Connection</h3>
          </div>

          <p className="text-muted-foreground">
            On-chain innovation alone is speculation. Real-world impact alone is traditional business. <strong>Combined, they create circular economy.</strong>
          </p>

          <div className="space-y-2 text-muted-foreground text-sm">
            <p><strong>Real-World → On-Chain:</strong> Mining revenue funds platform development → Platform attracts users → Users drive $CYPU demand → Demand funds Worker node incentives → Workers strengthen decentralization</p>

            <p><strong>On-Chain → Real-World:</strong> $CYPU liquidity generates LP fees → Fees fund mining expansion (solar panels, heat recovery) → Efficiency reduces costs → Lower costs increase profitability → Profitability funds platform</p>

            <p><strong>The Loop Closes:</strong> Real-world operations don't depend on token price (mining profitable regardless). On-chain mechanisms don't depend on infinite growth (finite liquidity pools, value-backed minting). Each side supports the other WITHOUT creating Ponzi dynamics.</p>
          </div>
        </div>

        <Callout type="info" title="Not Speculation - Building">
          Most DeFi projects promise on-chain innovation with zero real-world value. I'm building real-world operations (mining, IT services, analytics platform) FIRST, then adding on-chain mechanisms to enhance (not replace) real revenue. If on-chain fails, real-world survives. If real-world fails, on-chain still has platform utility. Dual foundations.
        </Callout>
      </section>

      {/* Legal & Compliance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Legal & Compliance</h2>

        <Callout type="warning" title="BaFin/MiCA Compliance Notice">
          PEG Bot, Mint System, and yield mechanisms are NOT live. Deployment requires MiCA regulatory compliance (5-10 year timeline). This is NOT financial advice, investment opportunity, or promise of returns. Experimental DeFi infrastructure with significant risk.
        </Callout>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Risk Disclosure</h3>
          <p className="text-muted-foreground">
            DeFi mechanisms carry extreme risk: smart contract bugs, impermanent loss, market manipulation, regulatory bans, economic collapse. Study Terra/Luna, Iron Finance, Basis Cash failures before participating. This is experimental infrastructure, not proven technology.
          </p>
          <p className="text-muted-foreground">
            I am building infrastructure for long-term ecosystem stability. You participate in an experiment, not an investment product. Own your risk. Do your research. Never invest more than you can lose.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-4">
        <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Innovation Requires Ambition</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I cannot build small. The logic demands full architecture. PEG Bot for stability. Mint System for access. Arbitrage for efficiency. Analytics for intelligence. Real-world operations for foundation.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This looks ambitious because it is. In a competitive environment full of copy cats and failed projects, mediocrity dies fast. So I build what logic demands - regardless of how big it looks.
          </p>
          <p className="font-semibold">
            Not speculation. Not promises. Just building what must exist.
          </p>
        </div>
      </section>
    </div>
  )
}
