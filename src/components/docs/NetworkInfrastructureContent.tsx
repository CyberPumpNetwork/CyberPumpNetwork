import { Callout } from '@/components/docs/Callout'
import { NetworkInfrastructureMap } from './NetworkInfrastructureMap'
import { Server, Network, Cpu, Database, Zap, Globe, Shield, Settings } from 'lucide-react'

export function NetworkInfrastructureContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Network Infrastructure</h1>
        <p className="text-muted-foreground">
          The technical foundation of kas.me - from mining rigs to distributed Worker nodes. Decentralized architecture with configurable regional compliance.
        </p>
      </div>

      {/* Interactive Infrastructure Map */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Infrastructure Overview</h2>
        <p className="text-muted-foreground">
          Drag nodes to explore the architecture. Animated lines show active data flows between Godfather nodes and Worker clusters.
        </p>
        <NetworkInfrastructureMap />
      </section>

      {/* The Real Architecture */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">The Real Architecture: Godfather + Worker Mesh</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <p className="text-muted-foreground">
            This is not a centralized "Node 1, Node 2, API Server" setup. This is a decentralized mesh network where Godfather nodes broadcast data to Worker clusters, and each Worker operator decides what features to enable based on their jurisdiction, resources, and risk tolerance.
          </p>
          <p className="text-muted-foreground">
            It's the cleverest load balancing system you can build: geographic distribution, regional compliance, operator autonomy, and automatic failover - all without central control.
          </p>
        </div>

        <Callout type="info" title="Why This Matters">
          If a region bans certain analytics features, Worker operators in that region can disable them. If one Worker goes offline, users connect to another. If Godfather nodes fail, Workers serve cached data. This is true decentralization.
        </Callout>
      </section>

      {/* Layer 1: Mining & Energy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Layer 1: Mining & Energy Infrastructure</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">ASIC Mining Rigs</h3>
            </div>
            <p className="text-muted-foreground">
              High-performance Kaspa ASICs generating $KAS revenue. Revenue funds platform development, infrastructure scaling, and company operations.
            </p>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>Multiple rigs operational (exact count redacted for security)</li>
              <li>Heat recovery system repurposes waste heat for greenhouses</li>
              <li>Solar panels reduce electricity costs (approaching break-even)</li>
              <li>24/7 monitoring, remote management, automated failover</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">Energy Optimization</h3>
            </div>
            <p className="text-muted-foreground">
              Circular energy flow: Solar panels power miners → Miner heat warms greenhouses → Greenhouse produce generates revenue → Revenue funds solar expansion.
            </p>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>Solar panel installation operational (German engineering)</li>
              <li>Heat-to-greenhouse integration (tomato cultivation pilot)</li>
              <li>Future: Heat-to-electricity conversion tech (long-term research)</li>
              <li>Grid-tied system with battery backup (regulatory compliant)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Layer 2: Kaspa Nodes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Layer 2: Kaspa Full Nodes (Godfather Backbone)</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Server className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold">Self-Hosted Kaspa Archive Nodes</h3>
          </div>
          <p className="text-muted-foreground">
            <strong>Godfathers ARE Kaspa full nodes.</strong> Not "connected to" nodes - they ARE the nodes. Each Godfather runs a complete Kaspa blockchain validation node with custom indexing, ML training capabilities, and data broadcasting infrastructure. This is the innovation: direct on-chain access without intermediaries.
          </p>
          <p className="text-muted-foreground">
            I don't rely on external Kaspa nodes or APIs. Every Godfather syncs the entire blockchain, validates every transaction, and extracts analytics data directly from chain state. Complete control over data extraction, query performance, and feature development.
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-1">Node 1: Primary Godfather Node</h4>
              <p className="text-muted-foreground text-sm">
                Full Kaspa archive node with UTXO indexing, transaction graph analysis, address clustering. Connects to Worker clusters via libp2p (Port 9933). Signs data with HMAC-SHA256 before broadcasting.
              </p>
              <p className="text-muted-foreground text-sm italic">
                Status: Live, 24/7 operation, colocation hosting for uptime reliability.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Node 2: ML Training Node (Godfather Variant)</h4>
              <p className="text-muted-foreground text-sm">
                Dedicated Godfather node running in ML learning mode. Trains LSTM models, whale tracking algorithms, regime detection, volatility forecasting. Feeds Intelligence Center analytics.
              </p>
              <p className="text-muted-foreground text-sm italic">
                Status: Live, GPU-accelerated server, continuous training on historical blockchain data.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Node 3: Backup/Failover Node (Staged Deployment)</h4>
              <p className="text-muted-foreground text-sm">
                Redundant Godfather node for geographic failover. Lower power consumption, activates if primary node fails. Ensures data continuity for Worker clusters.
              </p>
              <p className="text-muted-foreground text-sm italic">
                Status: Architecture designed, hardware ready, deployment when Worker distribution justifies redundancy investment (Year 2-3 target).
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Price Aggregator Node (Specialized Service)</h4>
              <p className="text-muted-foreground text-sm">
                Dedicated service (not full Kaspa node) that polls CEX APIs (Binance, KuCoin, etc.) for $KAS price data. Aggregates, normalizes, broadcasts to Worker clusters. Part of Godfather layer but doesn't validate blockchain.
              </p>
              <p className="text-muted-foreground text-sm italic">
                Status: Live, lightweight VPS, 1-minute polling interval.
              </p>
            </div>
          </div>
        </div>

        <Callout type="warning" title="Why Self-Host?">
          Relying on public Kaspa RPC nodes means your platform goes down when they do. Relying on third-party APIs means you can't implement custom indexing (whale tracking, graph analysis). Self-hosting = full control.
        </Callout>
      </section>

      {/* Layer 3: Worker Mesh Network */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Layer 3: Worker Mesh Network (The Revolutionary Part)</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Network className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold">Decentralized Worker Nodes (Port 9934 P2P, Port 8080 REST)</h3>
          </div>
          <p className="text-muted-foreground">
            This is where kas.me becomes revolutionary. Workers are NOT my servers - they're community-operated nodes (or my initial nodes until community distribution). <strong>Each Worker CAN be a full Kaspa node itself</strong> - reading blockchain directly - or run lightweight mode receiving validated data from Godfathers.
          </p>
          <p className="text-muted-foreground">
            <strong>Worker Architecture is Flexible:</strong> Someone hosting on colocation can run a full Kaspa node + Worker software, getting maximum independence. Someone on a VPS can run lightweight mode, trusting Godfather validation. The operator chooses based on resources, trust model, and performance needs.
          </p>
          <p className="text-muted-foreground">
            The clever part: <strong>Each Worker operator configures which features to enable AND which architecture to run.</strong> Regional compliance, resource limits, risk tolerance, infrastructure access - all operator-controlled.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Cpu className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">Worker Architecture Options (Critical Innovation)</h3>
            </div>
            <p className="text-muted-foreground">
              <strong>This is the innovation that gets overlooked:</strong> Workers aren't just "API servers receiving data" - they can BE full Kaspa blockchain nodes themselves. The architecture is modular: choose your power level based on infrastructure, trust model, and independence needs.
            </p>

            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="pl-4 border-l-2 border-accent/50 space-y-1">
                <p className="font-semibold">Mode 1: Lightweight Worker (Minimal Resources)</p>
                <p><strong>Infrastructure:</strong> VPS, 2 CPU, 4GB RAM, 50GB storage</p>
                <p><strong>Architecture:</strong> No Kaspa node. Receives validated data from Godfather nodes via libp2p (Port 9934). Trusts Godfather HMAC signatures.</p>
                <p><strong>Benefits:</strong> Low cost ($10-20/month), fast setup, minimal maintenance</p>
                <p><strong>Trade-offs:</strong> Depends on Godfather uptime, trusts external validation, less independence</p>
                <p className="italic">→ Perfect for: Hobby operators, testing, regions with bandwidth limits</p>
              </div>

              <div className="pl-4 border-l-2 border-accent space-y-1">
                <p className="font-semibold">Mode 2: Full Worker Node (Maximum Independence)</p>
                <p><strong>Infrastructure:</strong> Dedicated server/colocation, 8+ CPU, 32GB+ RAM, 1TB+ NVMe storage</p>
                <p><strong>Architecture:</strong> Full Kaspa blockchain node + Worker software. Reads chain DIRECTLY. Validates every transaction. Extracts data from own node.</p>
                <p><strong>Benefits:</strong> Complete independence, no Godfather dependency, can verify all data, becomes chain validator</p>
                <p><strong>Trade-offs:</strong> Higher cost ($100-300/month), requires blockchain sync (2-7 days initial), more maintenance</p>
                <p className="italic">→ Perfect for: Professional operators, colocation users, high-trust environments, becoming Godfather candidate</p>
              </div>

              <div className="pl-4 border-l-2 border-purple-500/50 space-y-1">
                <p className="font-semibold">Mode 3: Hybrid Worker (Best Reliability)</p>
                <p><strong>Infrastructure:</strong> Dedicated server, 8+ CPU, 32GB+ RAM, 1TB+ storage</p>
                <p><strong>Architecture:</strong> Full Kaspa node + libp2p connection to Godfathers. Validates own blockchain data + cross-checks with Godfather broadcasts.</p>
                <p><strong>Benefits:</strong> Byzantine fault tolerance, validates Godfather accuracy, can operate if Godfathers offline, maximum reliability</p>
                <p><strong>Trade-offs:</strong> Highest resource usage, most complex setup</p>
                <p className="italic">→ Perfect for: Enterprise deployments, critical infrastructure, becoming backup Godfather</p>
              </div>
            </div>
          </div>

          <Callout type="tip" title="What Stops Someone From Running Full Node Worker on Colocation?">
            NOTHING. That's the entire point. If you have colocation access, run Mode 2 or 3. You become a full blockchain validator + kas.me infrastructure provider simultaneously. This is how decentralization scales: anyone with resources can achieve maximum independence.
          </Callout>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Settings className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">Worker Feature Configuration (Per-Operator)</h3>
            </div>
            <p className="text-muted-foreground">
              Worker software includes a config file where operators enable/disable features based on their jurisdiction and resources. This is the cleverest load balancing system: compliance is distributed, not centralized.
            </p>

            <div className="space-y-2 text-muted-foreground text-sm">
              <div>
                <p className="font-semibold">Feature: Basic Explorer (Addresses, Transactions, Blocks)</p>
                <p>Default: Enabled globally. No compliance risk, minimal resources. Every Worker should enable this.</p>
              </div>

              <div>
                <p className="font-semibold">Feature: Token Tracking (KRC-20 balances, holder distribution)</p>
                <p>Default: Enabled. Low compliance risk, moderate resources. Most Workers enable this.</p>
              </div>

              <div>
                <p className="font-semibold">Feature: Whale Wallet Tracking (Holdings &gt;1M KAS, accumulation patterns)</p>
                <p>Configurable: Some regions may consider this "financial surveillance." Operators in strict jurisdictions can disable. High resource usage (graph analysis).</p>
              </div>

              <div>
                <p className="font-semibold">Feature: Intelligence Center (ML models, predictive analytics)</p>
                <p>Configurable: Requires GPU resources, significant storage. Only Workers with adequate hardware enable this. Some regions may have data retention laws affecting ML training.</p>
              </div>

              <div>
                <p className="font-semibold">Feature: Wallet Privacy Lock (Anonymous wallet locking)</p>
                <p>Configurable: GDPR compliance risk in EU if mishandled. Operators in EU may disable or implement stricter verification. Non-EU Workers can enable freely.</p>
              </div>

              <div>
                <p className="font-semibold">Feature: Price Data Aggregation</p>
                <p>Default: Enabled. Low risk, minimal resources. Connects to Price Aggregator Node broadcasts.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">Geographic Load Balancing (Automatic)</h3>
            </div>
            <p className="text-muted-foreground">
              Frontend React dashboard queries Workers based on user location, enabled features, and latency. If User A needs Intelligence Center analytics, dashboard queries Workers with that feature enabled. If User B just needs explorer data, any Worker works.
            </p>
            <p className="text-muted-foreground">
              This is <strong>automatic load balancing via feature flags</strong>. No central coordinator. No single point of failure. If a Worker goes offline, frontend retries another Worker.
            </p>

            <div className="space-y-2 text-muted-foreground text-sm">
              <p><strong>Example 1: EU User Queries Whale Tracking</strong></p>
              <p>Frontend: Queries EU Workers with whale tracking enabled → If none available, queries non-EU Workers → User sees data from nearest available Worker.</p>

              <p><strong>Example 2: US User Needs Basic Explorer</strong></p>
              <p>Frontend: Queries any US Worker (all have basic explorer) → Lowest latency Worker serves request → Fast response.</p>

              <p><strong>Example 3: Worker Operator in China Disables Intelligence Center</strong></p>
              <p>Chinese users querying Intelligence tier → Frontend detects no local Workers with feature → Routes to Singapore/Japan Workers → Slight latency increase but feature still works.</p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">Data Validation (HMAC-SHA256 Signatures)</h3>
            </div>
            <p className="text-muted-foreground">
              Godfather nodes sign all broadcast data with HMAC-SHA256. Workers validate signatures before storing data. This prevents malicious Workers from injecting fake blockchain data.
            </p>
            <p className="text-muted-foreground">
              If a Worker serves tampered data, frontend can cross-check with other Workers. Majority consensus wins. Byzantine fault tolerance via redundancy.
            </p>
          </div>
        </div>

        <Callout type="info" title="Why This Is Revolutionary">
          Traditional explorers: One company, one API, one jurisdiction. If that jurisdiction bans a feature, entire platform shuts it down. kas.me: Hundreds of Workers, each with operator-controlled features. Ban whale tracking in EU? EU Workers disable it, non-EU Workers keep serving. This is compliance-distributed infrastructure.
        </Callout>
      </section>

      {/* Layer 4: Frontend & API */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Layer 4: Frontend & Public API</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Database className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">React Dashboard (Port 3000)</h3>
            </div>
            <p className="text-muted-foreground">
              Frontend application that connects to Worker REST APIs (Port 8080). Two deployment modes:
            </p>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li><strong>Hosted Mode (kas.me):</strong> I host frontend, users connect via HTTPS, frontend queries my hosted Workers or community Workers (feature-based routing).</li>
              <li><strong>Self-Hosted Mode (localhost:3000):</strong> Worker operators run dashboard locally, queries their own localhost:8080 API. Full privacy, zero trust.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Server className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">Public API (Developer Access)</h3>
            </div>
            <p className="text-muted-foreground">
              Third-party developers can query Worker REST APIs directly (Port 8080). No central API gateway - developers choose which Worker to query based on features needed, latency, trust.
            </p>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>OpenAPI/Swagger documentation for Worker endpoints</li>
              <li>Rate limiting per Worker (operator-configured)</li>
              <li>API keys optional (operator decides if required)</li>
              <li>Example: query Worker A for whale data, Worker B for price data</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Flow Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Complete Data Flow (Mining → Frontend)</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <h3 className="text-xl font-bold">The Full Loop</h3>

          <div className="space-y-3 text-muted-foreground">
            <div className="pl-4 border-l-2 border-accent space-y-2">
              <p><strong>1. Mining Layer:</strong> ASICs mine $KAS → Revenue funds infrastructure → Heat powers greenhouses</p>

              <p><strong>2. Kaspa Nodes (Godfather):</strong> Self-hosted Kaspa nodes sync blockchain → Custom indexing extracts analytics data → HMAC-SHA256 signs data</p>

              <p><strong>3. Godfather Broadcast:</strong> Godfather nodes (Port 9933) broadcast signed data via libp2p Gossipsub → Worker clusters subscribe globally</p>

              <p><strong>4. Worker Validation:</strong> Workers (Port 9934 P2P) receive data → Validate HMAC signatures → Store in PostgreSQL → Enable features per operator config</p>

              <p><strong>5. Worker REST API:</strong> Workers serve data via REST API (Port 8080) → Geographic distribution → Feature-based routing</p>

              <p><strong>6. Frontend Query:</strong> React dashboard (kas.me or localhost:3000) → Queries Workers based on user location + features needed → Displays analytics</p>

              <p><strong>7. User Interaction:</strong> Users see blockchain data, whale tracking, Intelligence Center predictions → Platform access gated by $CYPU holdings (stake-based tiers)</p>

              <p><strong>8. Revenue Loop:</strong> Platform adoption → $CYPU demand → Treasury funds Worker incentives → More Workers join → Better decentralization</p>
            </div>
          </div>
        </div>

        <Callout type="info" title="Closed Loop">
          Mining funds infrastructure → Infrastructure powers platform → Platform attracts users → Users drive $CYPU demand → Demand funds Workers → Workers strengthen platform → Stronger platform attracts more users. The EcoLoop in action.
        </Callout>
      </section>

      {/* Wallet Data Management */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Wallet Privacy & Data Management</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <h3 className="text-xl font-bold">Anonymous Wallet Locking (Optional Feature)</h3>
          <p className="text-muted-foreground">
            Users can "lock" their wallets for privacy. Locked wallet addresses are stored in Worker databases (public on-chain addresses only, NO personal data). Anyone can view unlocked wallets. Locked wallets require proof of ownership to view.
          </p>

          <div className="space-y-3 text-muted-foreground text-sm">
            <div>
              <p className="font-semibold mb-1">What's Stored</p>
              <p>Wallet address (public on-chain data), lock status (boolean), lock timestamp. NO IP addresses, NO emails, NO names, NO KYC data.</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Proof of Ownership</p>
              <p>User signs a message with their private key → Worker verifies signature → If valid, shows wallet data. Zero-knowledge proof, no data transmitted except signature.</p>
            </div>

            <div>
              <p className="font-semibold mb-1">GDPR Compliance</p>
              <p>Public blockchain addresses are NOT personal data under GDPR (per ECJ rulings). Lock status is user-requested metadata. No right-to-be-forgotten issues (data is public on-chain anyway).</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Operator Control</p>
              <p>Worker operators in strict jurisdictions can disable wallet locking feature entirely. EU Workers might implement stricter verification. US/Asia Workers run default implementation.</p>
            </div>
          </div>
        </div>

        <Callout type="warning" title="Privacy Philosophy">
          We store ONLY public on-chain data. No emails, no passwords, no KYC. Wallet locking is privacy enhancement (hide from public), not data collection. Compliance-paranoid operators can disable feature.
        </Callout>
      </section>

      {/* Current Status */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What EXISTS vs What DOESN'T</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h3 className="text-lg font-bold">What Exists Today</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>✅ ASIC mining rigs operational (multiple units running for development funding)</li>
              <li>✅ Solar panel installation active (energy optimization operational)</li>
              <li>✅ Self-hosted Kaspa archive nodes (running internally for data extraction)</li>
              <li>✅ Godfather node ML training (models training on development infrastructure)</li>
              <li>✅ Price Aggregator operational (data collection active for testing)</li>
              <li>🔧 Worker node software (codebase complete, internal testing, pre-approval phase)</li>
              <li>🔧 libp2p P2P mesh (architecture built, testing on private infrastructure)</li>
              <li>✅ HMAC-SHA256 signing (validation logic implemented and tested)</li>
              <li>✅ React dashboard (frontend functional, localhost development environment)</li>
              <li>🔧 PostgreSQL schemas (designed, implemented, tested internally)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <h3 className="text-lg font-bold">What Doesn't Exist Yet</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>🔧 Public Worker node release (software complete, documentation + onboarding UI pending)</li>
              <li>❌ Community Worker distribution (0 external operators, recruiting strategy in development)</li>
              <li>🔧 Geographic load balancing UI (routing logic ready, frontend integration active development)</li>
              <li>🔧 Public API documentation (OpenAPI specs drafted, developer portal UI pending)</li>
              <li>🔧 Wallet locking feature (cryptographic architecture designed, implementation in progress)</li>
              <li>⏸️ Backup Godfather node (hardware ready, deployment staged for Year 2-3)</li>
              <li>⏸️ Enterprise Godfather offerings (technical capability exists, business model finalization pending)</li>
            </ul>
          </div>
        </div>

        <Callout type="info" title="Development Infrastructure + Regulatory Approval Gate">
          <strong>Built and operational internally:</strong> Mining rigs funding development, Kaspa nodes extracting data, ML training running, frontend tested. <strong>Not public-ready:</strong> Everything runs for development/testing. Public deployment requires BaFin approval first. The code works - regulatory clearance is the gate, not technical capability.
        </Callout>
      </section>

      {/* Why This Architecture */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Why This Architecture Is Ambitious (And Necessary)</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <p className="text-muted-foreground">
            Most crypto projects build centralized infrastructure: one company, one cluster, one API. Easy to build, easy to maintain, easy to shut down (by regulators, by hackers, by bankruptcy).
          </p>
          <p className="text-muted-foreground">
            I'm building decentralized infrastructure where <strong>compliance is distributed</strong>. If regulators ban whale tracking in EU, EU Workers disable it. Non-EU Workers keep serving. Platform survives. Users in permissive jurisdictions get full features. Users in strict jurisdictions get compliant subset.
          </p>
          <p className="text-muted-foreground">
            This is hard to build. libp2p networking, HMAC signing, per-Worker feature flags, geographic routing, Byzantine fault tolerance - all complex. But it's the only architecture that survives long-term regulatory fragmentation.
          </p>
          <p className="text-muted-foreground">
            When MiCA hits full force, when US SEC cracks down on "crypto surveillance tools," when China bans blockchain analytics - kas.me survives because Workers adapt locally, not globally.
          </p>
        </div>

        <Callout type="info" title="This Is The Real Innovation">
          Godfather/Worker architecture with operator-controlled feature flags is the cleverest load balancing system for regulatory uncertainty. Not just technical load balancing - compliance load balancing.
        </Callout>
      </section>

      {/* Legal & Compliance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Legal & Compliance</h2>

        <Callout type="warning" title="BaFin/MiCA Compliance Notice">
          Infrastructure provides technical tools for blockchain data analysis. NOT financial advice, NOT investment services, NOT regulated portfolio management. Worker operators responsible for local compliance. Feature flags enable regional adaptation.
        </Callout>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Compliance Strategy</h3>
          <p className="text-muted-foreground">
            Distributed compliance: Each Worker operator ensures local regulatory adherence. I provide software, operators configure features per jurisdiction. No central enforcement, no single point of regulatory failure.
          </p>
          <p className="text-muted-foreground">
            GDPR: Only public blockchain data processed. Wallet locking is optional feature, operator-controlled. No personal data collected (no emails, no KYC). Privacy by design.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-4">
        <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Built for Survival</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Centralized infrastructure is easy. Decentralized infrastructure with distributed compliance is hard. I'm building the hard thing because it's the only thing that survives regulatory fragmentation.
          </p>
          <p className="font-semibold">
            Not just decentralized data. Decentralized compliance.
          </p>
        </div>
      </section>
    </div>
  )
}
