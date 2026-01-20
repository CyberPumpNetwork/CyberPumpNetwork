import { Coins, CheckCircle, Users, XCircle } from 'lucide-react';
import { Callout } from './Callout';
import { TOKENOMICS } from '@/lib/tokenomics-data';

export function MintContent() {
  return (
    <div className="space-y-12">
      {/* Development Status Banner */}
      <Callout type="info" title="Minting Bot Status">
        PLANNED: The Minting Bot is currently in development. Timeline: Unknown. No launch date set. This page documents the planned mechanism.
      </Callout>

      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Coins className="w-10 h-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold">Understanding the Minting Bot Mechanism</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          I'm documenting how the planned Minting Bot will create {TOKENOMICS.CYPU.ticker} tokens. This is my approach to fair and transparent token creation - a straightforward 1:1 mechanism anyone can participate in.
        </p>
      </div>

      {/* Community Participation */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">How the Community Can Participate in Minting</h2>

        <Callout type="tip" title="Fair Access for Everyone">
          I'm building the Minting Bot as a logical way for anyone to get involved in {TOKENOMICS.CYPU.ticker} creation over time. I cannot guarantee outcomes (MiCA compliance requirement), but the system is open: you can mint yourself or benefit indirectly through the ecosystem. I believe kas.me will be the go-to platform for this, but the market will decide.
        </Callout>
      </section>

      {/* Core Principle */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">The Core Principle: 1:1 Minting with KAS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 space-y-4">
            <Coins className="h-10 w-10 text-accent" />
            <h3 className="text-xl font-bold">1 KAS = 1 {TOKENOMICS.CYPU.ticker}: The Simple Rule</h3>
            <p className="text-muted-foreground">
              The bot mints {TOKENOMICS.CYPU.ticker} tokens on a strict 1:1 basis with Kaspa (KAS). No extra tokens are created beyond what's backed, ensuring no inflation.
            </p>
          </div>

          <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 space-y-4">
            <CheckCircle className="h-10 w-10 text-accent" />
            <h3 className="text-xl font-bold">Fair Mint Until Supply Cap</h3>
            <p className="text-muted-foreground">
              Minting continues fairly until the {TOKENOMICS.CYPU.maxSupply.toLocaleString()} {TOKENOMICS.CYPU.ticker} cap is reached. This is my core pillar: controlled supply for long-term stability.
            </p>
          </div>

          <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-6 space-y-4">
            <Users className="h-10 w-10 text-accent" />
            <h3 className="text-xl font-bold">Open Participation</h3>
            <p className="text-muted-foreground">
              Anyone can join in minting. I aim to make kas.me the primary platform, but others might participate – that's up to the community.
            </p>
          </div>
        </div>

        <Callout type="info" title="Storage and Purpose">
          Minted {TOKENOMICS.CYPU.ticker} acts as a store of value, transferred to a designated wallet (details to be announced). It's my "entry key" reserve for future users.
        </Callout>
      </section>

      {/* Why This Matters */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Why This Matters: Storage and Accessibility</h2>

        <Callout type="info" title="Reserve Mechanism">
          <div className="space-y-3 text-sm">
            <p>
              I'm storing minted tokens securely as a reserve. In a hypothetical scenario where {TOKENOMICS.CYPU.ticker} becomes so popular (thanks to kas.me's success) that no one wants to sell, new users can still buy access from this pool – potentially creating value for the ecosystem.
            </p>
            <p>
              Otherwise, it's pure accumulation: building up my foundational asset until the supply is fully minted.
            </p>
            <p>
              This is my fundamental approach. What the market does with it is beyond my control – I'm just documenting my vision here.
            </p>
          </div>
        </Callout>
      </section>

      {/* How It Works */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">How the Minting Bot Works: Step-by-Step</h2>

        <ol className="space-y-4">
          <li className="flex gap-4 p-4 rounded-lg border border-accent/30 bg-accent/5">
            <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-accent text-foreground font-bold">
              1
            </span>
            <div>
              <strong className="block mb-1">Starts with Mining Revenue</strong>
              <span className="text-muted-foreground">Uses earnings from miners to fund the process.</span>
            </div>
          </li>

          <li className="flex gap-4 p-4 rounded-lg border border-accent/30 bg-accent/5">
            <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-accent text-foreground font-bold">
              2
            </span>
            <div>
              <strong className="block mb-1">Checks for {TOKENOMICS.CYPU.ticker} Availability</strong>
              <span className="text-muted-foreground">Looks where to obtain {TOKENOMICS.CYPU.ticker} – is minting still unfinished?</span>
            </div>
          </li>

          <li className="flex gap-4 p-4 rounded-lg border border-accent/30 bg-accent/5">
            <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-accent text-foreground font-bold">
              3
            </span>
            <div>
              <strong className="block mb-1">If Unfinished</strong>
              <span className="text-muted-foreground">Mints 1 new {TOKENOMICS.CYPU.ticker} directly.</span>
            </div>
          </li>

          <li className="flex gap-4 p-4 rounded-lg border border-accent/30 bg-accent/5">
            <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-accent text-foreground font-bold">
              4
            </span>
            <div>
              <strong className="block mb-1">If Finished</strong>
              <span className="text-muted-foreground">Places an order to buy 1 {TOKENOMICS.CYPU.ticker} for exactly 1 KAS.</span>
            </div>
          </li>

          <li className="flex gap-4 p-4 rounded-lg border border-accent/30 bg-accent/5">
            <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-accent text-foreground font-bold">
              5
            </span>
            <div>
              <strong className="block mb-1">Storage</strong>
              <span className="text-muted-foreground">Transfers minted/bought {TOKENOMICS.CYPU.ticker} to a secure wallet for ecosystem use.</span>
            </div>
          </li>
        </ol>

        <Callout type="success" title="Fair and Transparent">
          This simple cycle ensures fair, backed minting without excess creation, stopping once the {TOKENOMICS.CYPU.maxSupply.toLocaleString()} cap is hit.
        </Callout>
      </section>

      {/* BaFin/MiCA Compliance */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Critical Regulatory Compliance</h2>

        <Callout type="danger" title="Pure Utility Token - Not an Investment Vehicle">
          <div className="space-y-3 text-sm">
            <p>
              <strong>BaFin/MiCA Compliance:</strong> {TOKENOMICS.CYPU.ticker} is classified as a {TOKENOMICS.CYPU.classification}. I make NO promises of profit, price appreciation, or investment returns.
            </p>
            <p>
              <strong>Purpose:</strong> {TOKENOMICS.CYPU.purpose}. That's it. No yield. No staking rewards. No revenue share.
            </p>
            <p>
              <strong>Minting Mechanism:</strong> The bot creates tokens at a 1:1 KAS ratio - this is a technical process, NOT an investment opportunity. Any price discovery happens entirely through market forces, beyond my control.
            </p>
            <p className="font-semibold text-red-500">
              If you're looking for guaranteed returns or investment advice, look elsewhere. I'm building utility infrastructure, not selling securities.
            </p>
          </div>
        </Callout>
      </section>

      {/* What EXISTS vs What DOESN'T */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Current Status (Honest Assessment)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Callout type="success" title="What EXISTS">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Detailed minting mechanism design (this documentation)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>1:1 KAS ratio principle</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>{TOKENOMICS.CYPU.maxSupply.toLocaleString()} {TOKENOMICS.CYPU.ticker} supply cap</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Fair access philosophy</span>
              </li>
            </ul>
          </Callout>

          <Callout type="warning" title="What DOES NOT EXIST">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Minting Bot implementation (in development)</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Automated KAS to {TOKENOMICS.CYPU.ticker} conversion system</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Public launch date or timeline</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Guarantees of any kind (MiCA compliance)</span>
              </li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">The Bottom Line</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <Callout type="info" title="Planned Mechanism, Not Live System">
            <p>
              The Minting Bot is a planned feature currently in development. Timeline: Unknown. I'm documenting my design approach here to show transparency and technical planning. When (not if) this launches, it will be a simple 1:1 mechanism accessible to everyone - but I'm not making promises about when that happens.
            </p>
          </Callout>

          <p className="text-center text-muted-foreground">
            <strong>Status:</strong> Design complete. Implementation in progress. No launch date set.
          </p>
        </div>
      </section>
    </div>
  );
}

export default MintContent;
