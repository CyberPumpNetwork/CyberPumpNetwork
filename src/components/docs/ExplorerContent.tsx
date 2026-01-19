import { Callout } from '@/components/docs/Callout'
import { Search, Wallet, ArrowLeftRight, Network, Clock, Hash } from 'lucide-react'

export function ExplorerContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Explorer</h1>
        <p className="text-muted-foreground">
          Kaspa blockchain explorer integrated into kas.me. Search addresses, transactions, and network metrics.
        </p>
      </div>

      {/* What It Is */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Search className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">What the Explorer Does</h2>
        </div>

        <p className="text-muted-foreground">
          I'm building a blockchain explorer directly into kas.me. Instead of leaving the platform to check transactions or wallet addresses on external explorers, you search everything in one place.
        </p>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <h3 className="text-xl font-bold">Core Explorer Functions</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Search wallet addresses (view balance, transaction history, UTXO set)</li>
            <li>Lookup transactions (inputs, outputs, confirmations, DAG position)</li>
            <li>Network statistics (hashrate, block production, mempool size)</li>
            <li>Token tracking (KRC-20 balances, transfers, holder distribution)</li>
            <li>Real-time updates (new blocks, pending transactions)</li>
          </ul>
        </div>
      </section>

      {/* Explorer Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Explorer Features</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <Wallet className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold">Address Lookup</h3>
            <p className="text-muted-foreground">
              Search any Kaspa address. View balance, transaction history, UTXO details. For $CYPU holders, this integrates with your analytics dashboard.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <ArrowLeftRight className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold">Transaction Details</h3>
            <p className="text-muted-foreground">
              Enter transaction ID to see inputs, outputs, confirmations, and position in the blockDAG. Track transaction propagation through the network.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <Network className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold">Network Metrics</h3>
            <p className="text-muted-foreground">
              Real-time network statistics: hashrate, blocks per second, DAG tips, mempool size. Public data available to everyone.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <Hash className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold">Token Tracking</h3>
            <p className="text-muted-foreground">
              KRC-20 token balances, transfer history, holder distribution. See which addresses hold which tokens and track token movements.
            </p>
          </div>
        </div>
      </section>

      {/* Participation Levels */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Clock className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">Choose Your Participation Level</h2>
        </div>

        <Callout type="info" title="Decentralized by Design">
          You decide how much you contribute to kas.me infrastructure. From web-only users to enterprise Godfather node operators, every level helps the network.
        </Callout>

        <div className="grid gap-4">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Level 1: Web UI Only</h3>
            <p className="text-muted-foreground">
              Use kas.me through the browser. I host the Worker nodes (Port 8080 REST API), you consume the analytics. Zero technical setup, same features.
            </p>
            <p className="text-muted-foreground">
              Frontend runs at kas.me (hosted React dashboard). You connect via HTTPS. Perfect for users who want analytics without infrastructure.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Level 2: Lightweight Worker Node Operator</h3>
            <p className="text-muted-foreground">
              Run a Worker node in lightweight mode (Port 9934 P2P, Port 8080 REST API). Receives validated blockchain data via libp2p from Godfather nodes, validates HMAC signatures, serves it locally.
            </p>
            <p className="text-muted-foreground">
              Your Worker becomes part of kas.me infrastructure. Access your local REST API at localhost:8080, run the React dashboard at localhost:3000. Minimal resources (VPS sufficient), full privacy.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Level 3: Full Worker Node (Independent Validator)</h3>
            <p className="text-muted-foreground">
              <strong>Run your OWN Kaspa full node + Worker software.</strong> Maximum independence - you ARE a blockchain validator. Read chain state directly, extract analytics from your node, serve via Worker API.
            </p>
            <p className="text-muted-foreground">
              Your Kaspa node syncs the blockchain independently. Your Worker extracts data from YOUR node (not Godfather dependency). Perfect for colocation: complete trust-minimization, can operate if all Godfathers fail.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Level 4: Enterprise Godfather Node (Institutions)</h3>
            <p className="text-muted-foreground">
              <strong>Godfathers ARE full Kaspa nodes with ML processing.</strong> Institutions with colocation host Godfather nodes (Port 9933 P2P) that validate blockchain + train ML models + broadcast to Worker clusters globally via libp2p Gossipsub.
            </p>
            <p className="text-muted-foreground">
              Highest contribution level: Kaspa blockchain validator + ML infrastructure + Worker coordination. Requires significant resources (GPU, storage, bandwidth) but provides maximum network contribution.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison: kas.me vs Other Explorers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">kas.me Explorer vs Traditional Explorers</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4">Feature</th>
                <th className="text-left p-4">Traditional Explorer</th>
                <th className="text-left p-4">kas.me Explorer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4">Address Lookup</td>
                <td className="p-4 text-accent">Yes</td>
                <td className="p-4 text-accent">Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Transaction Details</td>
                <td className="p-4 text-accent">Yes</td>
                <td className="p-4 text-accent">Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Network Stats</td>
                <td className="p-4 text-accent">Yes</td>
                <td className="p-4 text-accent">Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Analytics Dashboard</td>
                <td className="p-4 text-muted-foreground">No</td>
                <td className="p-4 text-accent">Yes ($CYPU holders)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Portfolio Tracking</td>
                <td className="p-4 text-muted-foreground">No</td>
                <td className="p-4 text-accent">Yes (Basic tier+)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Whale Tracking</td>
                <td className="p-4 text-muted-foreground">No</td>
                <td className="p-4 text-accent">Yes (Intelligence tier)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Predictive Models</td>
                <td className="p-4 text-muted-foreground">No</td>
                <td className="p-4 text-accent">Yes (Intelligence tier)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground">
          Traditional explorers show raw blockchain data. kas.me explorer shows blockchain data AND lets you analyze it. It's not just lookup, it's insight.
        </p>
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
              <li>Self-hosted Kaspa node infrastructure (multiple nodes live)</li>
              <li>Godfather node running in learning mode (ML training)</li>
              <li>Custom indexing for blockchain data extraction</li>
              <li>Modified Kaspa node code integrated into kas.me backend</li>
              <li>Distributed worker system architecture designed</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <h3 className="text-lg font-bold">What Doesn't Exist Yet</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>Public release of kas.me client software</li>
              <li>Worker node onboarding system for public participants</li>
              <li>Real-time DAG visualization in web UI</li>
              <li>Intelligence Center full deployment (in development)</li>
              <li>Mobile app (planned after web UI and client stabilize)</li>
            </ul>
          </div>
        </div>

        <Callout type="info" title="Self-Hosted Infrastructure">
          I already host multiple Kaspa nodes. The explorer doesn't rely on external APIs - it connects to my own infrastructure. This gives full control over data indexing, query performance, and feature development.
        </Callout>
      </section>

      {/* Data Sources */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Decentralized Infrastructure: The Real Innovation</h2>

        <p className="text-muted-foreground">
          No other explorer in the world has this architecture. Traditional explorers: one server, one API, one point of failure. kas.me: hundreds of potential Worker nodes, each serving its own REST API. Decentralized by design.
        </p>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <h3 className="text-xl font-bold">Three-Layer Architecture</h3>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-1">Layer 1: Godfather Nodes (Broadcasters)</h4>
              <p className="text-muted-foreground">
                I host multiple Godfather nodes (Port 9933) that connect to Kaspa nodes, extract blockchain data, sign it with HMAC-SHA256, and broadcast it globally via libp2p Gossipsub. One Godfather node runs in ML learning mode for predictive analytics.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Layer 2: Worker Nodes (Receivers/Validators)</h4>
              <p className="text-muted-foreground">
                Workers (Port 9934 P2P) subscribe to Godfather broadcasts via libp2p, validate data from multiple sources, store validated data in PostgreSQL, and serve it via REST API (Port 8080). Every Worker is an independent API endpoint.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Layer 3: Frontend (React Dashboard)</h4>
              <p className="text-muted-foreground">
                React dashboard (Port 3000) consumes Worker REST API. Web UI users connect to my hosted Workers. Worker operators run localhost:3000 and consume their own localhost:8080 API. Same frontend, different data source.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Why This Is Revolutionary</h3>
          <p className="text-muted-foreground">
            <strong>Traditional explorer:</strong> One company, one cluster, one API. If it goes down, everyone loses access. Zero redundancy.
          </p>
          <p className="text-muted-foreground">
            <strong>kas.me:</strong> Every Worker node operator becomes an independent API provider. If my Godfather nodes fail, Workers still have cached data. If some Workers go offline, others serve the load. If all my infrastructure fails, Worker operators can still serve their local analytics.
          </p>
          <p className="text-muted-foreground">
            Hundreds of potential REST API endpoints (Port 8080) instead of one centralized server. This is true decentralization - not just P2P networking, but P2P infrastructure hosting.
          </p>
        </div>

        <Callout type="warning" title="Current Status">
          Godfather nodes operational internally (multiple self-hosted Kaspa full nodes, one in ML learning mode). Worker distribution system architecture complete. Worker software built and tested internally, public deployment awaits BaFin approval.
        </Callout>
      </section>

      {/* Legal & Compliance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Legal & Compliance</h2>

        <Callout type="warning" title="BaFin/MiCA Compliance Notice">
          The explorer displays publicly available blockchain data. This is informational, not financial advice. kas.me does NOT offer investment advice, portfolio management, or regulated financial services under BaFin or MiCA frameworks.
        </Callout>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Privacy & Public Data</h3>
          <p className="text-muted-foreground">
            All blockchain data is public by design. The explorer reads from the Kaspa blockchain, which is a public ledger. Address lookups, transaction details, and network metrics are publicly accessible information.
          </p>
          <p className="text-muted-foreground">
            GDPR/DSGVO: No personal data is collected. Blockchain addresses are pseudonymous, not personally identifiable information.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-4">
        <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Start Exploring</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The explorer is free for everyone. Search addresses, lookup transactions, view network stats. No login required. Hold $CYPU to unlock analytics features.
          </p>
          <p className="font-semibold">
            Explore the blockchain. Analyze your portfolio. Track the network.
          </p>
        </div>
      </section>
    </div>
  )
}
