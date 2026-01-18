import { Callout } from '@/components/docs/Callout'
import { Building2, Users, Target, TrendingUp, Shield, Zap, Sprout } from 'lucide-react'

export function TheFirmContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">The Firm</h1>
        <p className="text-muted-foreground">
          From one-person operation to structured entity. This is not a pitch deck - this is a manifestation in progress.
        </p>
      </div>

      {/* Current Reality */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Current Reality: One Person, One Vision</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <p className="text-muted-foreground">
            Right now, this is a one-person operation. I'm selling my car to finance the company formation. I've leaked this on X - no reason to hide it. This is how bootstrapped reality looks.
          </p>
          <p className="text-muted-foreground">
            Will there be employees? I hope so. Will there be co-founders? Possibly. Will there be community involvement via multisig and governance? That's the plan. But today, it's just me, building infrastructure, writing code, mining Kaspa, and manifesting what I'm creating.
          </p>
          <p className="text-muted-foreground">
            The firm doesn't exist yet - but the operations do. The mining runs. The platform develops. The vision crystallizes. Formation is pending, not the work.
          </p>
        </div>

        <Callout type="info" title="Why 'The Firm' Already?">
          I operate as if the firm already exists because manifestation requires belief before reality. The legal structure follows the operational structure, not the other way around. This is how builders think.
        </Callout>
      </section>

      {/* The Business Model */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">The Business Model: Dual Revenue Streams</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Classic IT Services</h3>
            </div>
            <p className="text-muted-foreground">
              System administration, infrastructure consulting, network management, security audits. Traditional IT services that generate stable revenue.
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>Server administration and optimization</li>
              <li>Network infrastructure design</li>
              <li>Cybersecurity consulting</li>
              <li>Technical support and troubleshooting</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Web3 Infrastructure</h3>
            </div>
            <p className="text-muted-foreground">
              Kaspa mining operations, kas.me platform development, on-chain analytics, decentralized infrastructure. Future-focused innovation.
            </p>
            <ul className="space-y-1 text-muted-foreground">
              <li>$KAS mining revenue streams</li>
              <li>kas.me platform services (tiered access)</li>
              <li>Worker node hosting infrastructure</li>
              <li>Heat recovery and energy optimization</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Why Both?</h3>
          <p className="text-muted-foreground">
            Classic IT services fund Web3 experimentation. Web3 innovation attracts classic IT clients curious about blockchain infrastructure. Each side reinforces the other. This is the real-world loop in action.
          </p>
        </div>
      </section>

      {/* The Team (Future) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">The Team: From Solo to Structure</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold">Current: One Founder</h3>
          </div>
          <p className="text-muted-foreground">
            Computer science background, system administration expertise, blockchain experience since early Kaspa days. Self-taught in ML/AI, Rust, TypeScript, infrastructure design. No formal team - just deep technical execution.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <h3 className="text-xl font-bold">Future: Structured Organization (5-Year Horizon)</h3>
          <p className="text-muted-foreground">
            This is how I think about scaling - not fantasy roles, but realistic positions as revenue justifies them. Classic IT meets Web3 infrastructure, two business units under one roof.
          </p>

          {/* C-Level */}
          <div className="space-y-3">
            <h4 className="font-semibold text-accent">Executive Layer</h4>

            <div className="pl-4 border-l-2 border-border space-y-2">
              <div>
                <p className="font-semibold">CEO / Managing Director (me, initially)</p>
                <p className="text-muted-foreground text-sm">
                  Strategic direction, investor relations, regulatory compliance (BaFin/MiCA), major client acquisition, ecosystem vision. Legal liability as GmbH Geschäftsführer.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Year 1-3: Solo. Year 4+: Co-CEO or retained CEO role if company scales beyond solo capacity.
                </p>
              </div>

              <div>
                <p className="font-semibold">CTO / Technical Director (me initially, future hire Year 3-5)</p>
                <p className="text-muted-foreground text-sm">
                  Infrastructure architecture (Godfather/Worker nodes), platform development roadmap, security oversight, technology stack decisions, team technical leadership.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Year 1-2: I am CTO. Year 3-5: Hire senior engineer to take CTO role, I focus on CEO/vision.
                </p>
              </div>

              <div>
                <p className="font-semibold">CFO / Financial Controller (Year 5+, optional)</p>
                <p className="text-muted-foreground text-sm">
                  Financial planning, accounting, tax compliance, budget oversight, investment decisions. Only needed if company reaches €1M+ annual revenue.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Year 1-4: I handle finances + tax advisor. Year 5+: Dedicated CFO if scaling justifies it.
                </p>
              </div>
            </div>
          </div>

          {/* Classic IT Division */}
          <div className="space-y-3">
            <h4 className="font-semibold text-accent">Classic IT Services Division</h4>

            <div className="pl-4 border-l-2 border-border space-y-2">
              <div>
                <p className="font-semibold">IT Operations Manager (Year 2-3 hire)</p>
                <p className="text-muted-foreground text-sm">
                  Client project management, SLA monitoring, service delivery coordination, vendor relationships, escalation handling. Reports to CEO.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  First hire when client base reaches 5+ retainer contracts. Frees CEO from day-to-day ops.
                </p>
              </div>

              <div>
                <p className="font-semibold">System Administrators (Year 3-4 hires, 1-2 positions)</p>
                <p className="text-muted-foreground text-sm">
                  Server administration, network management, client infrastructure maintenance, on-site support, documentation. Reports to IT Ops Manager.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Hired when client workload exceeds solo capacity. Junior sysadmins trained into senior roles.
                </p>
              </div>

              <div>
                <p className="font-semibold">Support / Hotline Specialist (Year 4-5 hire)</p>
                <p className="text-muted-foreground text-sm">
                  First-line support, ticketing system management, client communication, troubleshooting, knowledge base maintenance. Reports to IT Ops Manager.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Needed when client base grows to 10+ companies. Filters issues before escalating to sysadmins.
                </p>
              </div>

              <div>
                <p className="font-semibold">Security Consultant (Year 5+, optional/contractor)</p>
                <p className="text-muted-foreground text-sm">
                  Penetration testing, security audits, compliance reviews, incident response. Could be contractor or part-time employee.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Only if client demand justifies dedicated security services. Otherwise outsourced.
                </p>
              </div>
            </div>
          </div>

          {/* Web3 / Platform Division */}
          <div className="space-y-3">
            <h4 className="font-semibold text-accent">Web3 Platform Division (kas.me)</h4>

            <div className="pl-4 border-l-2 border-border space-y-2">
              <div>
                <p className="font-semibold">Lead Platform Engineer (Year 2-3 hire)</p>
                <p className="text-muted-foreground text-sm">
                  Frontend/backend development, API design, database optimization, Worker node software maintenance, code reviews. Reports to CTO.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Critical hire for platform scaling. Frees founder from coding to focus on architecture/vision.
                </p>
              </div>

              <div>
                <p className="font-semibold">Data Scientist / ML Engineer (Year 3-4 hire)</p>
                <p className="text-muted-foreground text-sm">
                  Intelligence Center model training, whale tracking algorithms, predictive analytics, feature engineering, Godfather node ML optimization. Reports to CTO.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Only hired if platform adoption justifies Intelligence tier investment. Otherwise, I handle ML.
                </p>
              </div>

              <div>
                <p className="font-semibold">DevOps / Infrastructure Engineer (Year 4-5 hire)</p>
                <p className="text-muted-foreground text-sm">
                  Godfather node operations, Worker cluster coordination, Kaspa node management, monitoring systems, CI/CD pipelines, failover automation. Reports to CTO.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Needed when infrastructure scales to 100+ Worker nodes distributed globally.
                </p>
              </div>

              <div>
                <p className="font-semibold">Community Manager / Worker Node Coordinator (Year 3-4 hire or DAO role)</p>
                <p className="text-muted-foreground text-sm">
                  Worker node onboarding, community support, documentation, Discord/Telegram moderation, governance facilitation, feedback loops. Reports to CEO or operates as DAO-funded role.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Hybrid role: Could be employee or community-elected position funded via platform treasury.
                </p>
              </div>

              <div>
                <p className="font-semibold">Technical Writer / Documentation Specialist (Year 4-5 hire, part-time)</p>
                <p className="text-muted-foreground text-sm">
                  API documentation, user guides, Worker node setup tutorials, platform feature explanations, changelog maintenance. Reports to Lead Engineer.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Only if platform complexity requires dedicated documentation. Otherwise community contributors.
                </p>
              </div>
            </div>
          </div>

          {/* Shared Services */}
          <div className="space-y-3">
            <h4 className="font-semibold text-accent">Shared Services (Both Divisions)</h4>

            <div className="pl-4 border-l-2 border-border space-y-2">
              <div>
                <p className="font-semibold">Sales / Business Development (Year 3-4 hire)</p>
                <p className="text-muted-foreground text-sm">
                  IT client acquisition, platform partnership outreach, enterprise Godfather node sales, RFP responses, contract negotiations. Reports to CEO.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Needed when founder time is better spent on tech/vision than cold outreach.
                </p>
              </div>

              <div>
                <p className="font-semibold">Marketing / Content Specialist (Year 4-5 hire, part-time/contractor)</p>
                <p className="text-muted-foreground text-sm">
                  X/Twitter content, case studies, blog posts, platform announcements, video tutorials, conference presence. Reports to CEO.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Could be contractor or part-time. Founder handles technical content, specialist handles outreach.
                </p>
              </div>

              <div>
                <p className="font-semibold">Office Manager / Administrative Assistant (Year 5+, optional)</p>
                <p className="text-muted-foreground text-sm">
                  Scheduling, invoicing, vendor coordination, office logistics, basic HR tasks. Reports to CEO.
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Only if team grows to 10+ people. Before that, founder + freelance bookkeeper handles admin.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Hiring Philosophy: Revenue Justifies Roles</h3>
          <p className="text-muted-foreground">
            No hire happens before the business can afford it. Each role unlocks when revenue supports salary + 30% buffer. No premature scaling, no VC-funded bloat. Organic growth only.
          </p>
          <div className="space-y-2 text-muted-foreground text-sm">
            <p><strong>Year 1:</strong> Solo founder, sweat equity, contractor support when needed.</p>
            <p><strong>Year 2-3:</strong> First hires (IT Ops Manager, Lead Platform Engineer) when client base + platform adoption justify it.</p>
            <p><strong>Year 4-5:</strong> Team expansion (sysadmins, support, DevOps, community manager) as both divisions scale.</p>
            <p><strong>Year 5+:</strong> Mature organization (10-15 people) if revenue trajectory supports it. Otherwise, stay lean.</p>
          </div>
        </div>

        <Callout type="warning" title="Reality Check">
          These roles are aspirational. Hiring requires revenue. Revenue requires client acquisition and platform adoption. I'm building the foundation first - roles emerge when the business justifies them, not before.
        </Callout>
      </section>

      {/* Market & Target Groups */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Market & Target Groups</h2>

        <div className="grid gap-4">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">Classic IT Clients</h3>
            </div>
            <p className="text-muted-foreground">
              Small to medium businesses needing system administration, network infrastructure, security consulting. Especially companies exploring blockchain integration or decentralized infrastructure.
            </p>
            <p className="text-muted-foreground">
              Differentiation: I don't just manage servers - I understand decentralized architecture, P2P networking, cryptographic security at a protocol level. Most IT consultants don't.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">kas.me Platform Users</h3>
            </div>
            <p className="text-muted-foreground">
              Kaspa holders (Basic tier), traders (Analytics tier), whales and institutions (Intelligence/Elite tiers). Users who want on-chain insights beyond what traditional explorers offer.
            </p>
            <p className="text-muted-foreground">
              Differentiation: Decentralized infrastructure (Worker nodes), ML-powered analytics (70+ methods), transparent methodology, stake-based access (no subscriptions).
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Sprout className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">Worker Node Operators (Future)</h3>
            </div>
            <p className="text-muted-foreground">
              Technical users who want to contribute to kas.me infrastructure, run their own analytics API locally, and participate in decentralized data validation.
            </p>
            <p className="text-muted-foreground">
              Differentiation: No other Kaspa explorer offers self-hostable infrastructure. This is P2P analytics hosting - revolutionary, not incremental.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Legal Structure: GmbH Formation (Pending)</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold">Planned Structure: GmbH (German Limited Liability Company)</h3>
          </div>
          <p className="text-muted-foreground">
            Why GmbH? Clear liability separation, credibility for B2B IT services, potential for future investment rounds, compliance with BaFin/MiCA regulatory frameworks.
          </p>
          <div className="space-y-2 text-muted-foreground">
            <p><strong>Initial Shareholder:</strong> Single founder (me), 100% equity until co-founders or investors join.</p>
            <p><strong>Share Capital:</strong> Minimum €25,000 required for GmbH formation (financing via car sale + initial mining revenue).</p>
            <p><strong>Governance:</strong> Traditional corporate structure initially, with planned transition to multisig treasury management and community governance for platform-related decisions.</p>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Community Integration via Multisig & Governance</h3>
          <p className="text-muted-foreground">
            Long-term vision: Platform treasury managed via multisig (founder + elected community members). Major platform decisions (feature prioritization, Worker node incentives, fee structures) subject to $CYPUV governance voting.
          </p>
          <p className="text-muted-foreground">
            The GmbH owns the IT services business (classic revenue). The community governs the platform (on-chain operations). Dual structure: centralized where regulation requires, decentralized where innovation thrives.
          </p>
        </div>

        <Callout type="info" title="Formation Timeline">
          GmbH formation pending capital accumulation (car sale + mining revenue). Operations continue regardless - legal structure formalizes what already exists.
        </Callout>
      </section>

      {/* Financial Planning */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Financial Planning: Bootstrap to Sustainability</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">Revenue Streams</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>$KAS Mining:</strong> Current primary revenue (ASICs running, solar panels reducing costs)</li>
              <li><strong>IT Consulting:</strong> Target 2-3 retainer clients</li>
              <li><strong>kas.me Platform:</strong> Tiered access fees (future, post-public launch)</li>
              <li><strong>Heat Recovery Sales:</strong> Greenhouse produce revenue (pilot phase)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-bold">Cost Breakdown</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>GmbH Formation:</strong> €25k share capital + €2k legal/notary fees</li>
              <li><strong>Infrastructure:</strong> €500-1000/month (servers, electricity, colocation)</li>
              <li><strong>Salaries:</strong> None initially (founder sweat equity), future hires pending revenue</li>
              <li><strong>Marketing:</strong> €200-500/month (X ads, community building, content)</li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Profitability Strategy</h3>
          <p className="text-muted-foreground">
            Year 1: Break-even via mining + 1-2 IT clients. Year 2: Sustainability via 3-5 IT clients + platform soft launch. Year 3: Growth via Worker node distribution + Intelligence Center premium tiers.
          </p>
          <p className="text-muted-foreground">
            No VC funding planned. No token presale. Organic growth funded by real-world revenue and mining operations. Slow, sustainable, aligned with long-term vision.
          </p>
        </div>

        <Callout type="warning" title="No Financial Promises">
          These projections are planning assumptions, not guarantees. Mining profitability depends on $KAS price. IT client acquisition is uncertain. Platform adoption is speculative. This is a bootstrap plan, not an investment pitch.
        </Callout>
      </section>

      {/* Risks & Mitigation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Risks & Mitigation</h2>

        <div className="grid gap-4">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Risk: Single Founder Dependency</h3>
            <p className="text-muted-foreground">
              <strong>Threat:</strong> If I get hit by a bus, the entire operation stops. No team, no succession plan.
            </p>
            <p className="text-muted-foreground">
              <strong>Mitigation:</strong> Open-source critical platform code. Document infrastructure architecture publicly. Community can fork and continue Worker node operations independently.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Risk: $KAS Price Collapse</h3>
            <p className="text-muted-foreground">
              <strong>Threat:</strong> Mining revenue depends on $KAS price. Extended bear market could make operations unprofitable.
            </p>
            <p className="text-muted-foreground">
              <strong>Mitigation:</strong> Solar panels reduce electricity costs (approaching break-even at $0.01-0.02 KAS). Dual revenue model (IT services provide downside protection). Heat recovery creates alternative value streams.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Risk: Regulatory Uncertainty (BaFin/MiCA)</h3>
            <p className="text-muted-foreground">
              <strong>Threat:</strong> MiCA regulations could classify platform access as financial service, requiring expensive licensing.
            </p>
            <p className="text-muted-foreground">
              <strong>Mitigation:</strong> Platform provides analytics tools, NOT financial advice or investment services. Stake-based access (not subscriptions). Legal counsel consulted before public launch. Conservative compliance approach.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Risk: Platform Adoption Failure</h3>
            <p className="text-muted-foreground">
              <strong>Threat:</strong> Users don't see value in kas.me over free explorers. Worker node distribution fails.
            </p>
            <p className="text-muted-foreground">
              <strong>Mitigation:</strong> Free tier proves platform value before asking for $CYPU holdings. Worker node software released regardless of adoption (open-source, self-hostable). Worst case: I run my own analytics infrastructure, others benefit as side effect.
            </p>
          </div>
        </div>
      </section>

      {/* The Vision: 1 Year, 5 Years, 10 Years */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">The Vision: Milestones, Not Moonshots</h2>

        <div className="grid gap-4">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Year 1: Formation & Foundation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>GmbH legally formed</li>
              <li>2-3 IT consulting retainer clients acquired</li>
              <li>kas.me platform soft launch (invite-only beta)</li>
              <li>Worker node software released (open-source)</li>
              <li>Mining operations stable, solar panels operational</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Year 5: Structured Operations</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>5-10 IT clients (stable B2B revenue)</li>
              <li>kas.me platform public (500-1000 active users)</li>
              <li>50-100 Worker nodes distributed globally</li>
              <li>1-3 employees hired (operations manager, community coordinator)</li>
              <li>Multisig treasury active, $CYPUV governance live</li>
              <li>Heat recovery scaled (greenhouse expansion, local energy sales)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Year 10: Mature Ecosystem</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>IT consulting arm established (5-10 employees, regional presence)</li>
              <li>kas.me platform dominant Kaspa analytics provider (5000+ users)</li>
              <li>Decentralized Worker network (500+ nodes, enterprise Godfather operators)</li>
              <li>Heat-to-electricity tech pilot operational (if tech matures)</li>
              <li>Platform governance fully community-driven ($CYPUV DAO)</li>
              <li>EcoLoop closed: Real-world profitability funds on-chain innovation, on-chain growth attracts real-world clients</li>
            </ul>
          </div>
        </div>

        <Callout type="info" title="Reality-Based Optimism">
          These milestones assume steady execution, no catastrophic failures, and gradual market adoption. Not guaranteed - just mapped. I'm building for the long term, measuring progress incrementally.
        </Callout>
      </section>

      {/* Legal & Compliance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Legal & Compliance</h2>

        <Callout type="warning" title="BaFin/MiCA Compliance Notice">
          This document is NOT a prospectus, investment offer, or financial advice. The firm is not yet legally formed. No securities are being offered. This is operational planning and vision documentation, not fundraising material.
        </Callout>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Compliance Strategy</h3>
          <p className="text-muted-foreground">
            All operations designed with BaFin/MiCA compliance in mind. IT services operate under standard consulting frameworks. Platform provides analytics tools (informational), not financial services (regulated). Token mechanisms (staking, yields) deferred until regulatory clarity achieved.
          </p>
          <p className="text-muted-foreground">
            Conservative approach: When in doubt, don't launch. Better to delay features than trigger regulatory scrutiny. German engineering applies to compliance too - precision over speed.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-4">
        <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">This Is Manifestation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The firm doesn't exist yet. But the work does. The vision does. The infrastructure does. Formation is a legal formality - the building already started.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm selling my car to make this real. I'm mining Kaspa to fund the next phase. I'm writing code to build what I believe should exist. That's how one-person startups work.
          </p>
          <p className="font-semibold">
            Not a pitch. Not a promise. Just a builder, building.
          </p>
        </div>
      </section>
    </div>
  )
}
