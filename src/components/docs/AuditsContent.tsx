import {
  Shield,
  CheckCircle,
  XCircle,
  Scale,
  Egg,
  AlertTriangle,
} from 'lucide-react'

export function AuditsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Shield className="w-10 h-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold">Audits & Regulatory Path</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Transparency from Day 1 • Building trust step-by-step • Your questions, our answers
        </p>
      </div>

      {/* Placeholder Warning Banner */}
      <div className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-orange-500/5 p-8 text-center space-y-4">
        <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto" />
        <p className="text-lg font-bold text-foreground">
          You clicked correctly, don't worry.
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          This section will host <strong>Smart Contract Audits</strong>, <strong>Website Security Audits</strong>, and <strong>Compliance Reports</strong> — all third-party verified.
          <br /><br />
          Currently a <strong>placeholder</strong> — filled with full transparency while we build toward full regulatory alignment.
          <br />
          The Technical Overview Section will follow later.
        </p>
      </div>

      {/* From the Lead Dev's Desk */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-accent">From the Lead Dev's Desk</h2>

        <div className="max-w-4xl mx-auto rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed italic text-center">
            "I've poured my heart into this project, bootstrapping it solo from the beginning.
            <br />We're in the early days, but transparency isn't optional;
            <br />It's core."
            <br /><br />
            If it feels personal - that's because it is.
          </p>
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Why Regulation Matters */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-accent">Why Regulation Matters More Than Ever</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The Crypto Landscape Today */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Scale className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">The Crypto Landscape Today</h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Volatility, scams, and speculation dominate - but real utility wins long-term. $CYPU is built for sustainability, not hype.
              </p>
              <p>
                Regulations like EU's MiCA (Markets in Crypto-Assets) are game-changers. They demand transparency, protect users, and build trust - exactly what we're aiming for.
              </p>
              <p>
                As a KRC-20 utility token on Kaspa, $CYPU focuses on premium platform access, not speculation. No yields, dividends, or profit-sharing - just value through utility.
              </p>
            </div>
          </div>

          {/* Our Commitment to Compliance */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-500" />
              <h3 className="text-xl font-bold">Our Commitment to Compliance</h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>
                From Day 1, we've prioritized MiCA alignment. The whitepaper outlines specs for full disclosure, no financial promises, and user protection.
              </p>
              <p>
                BaFin review is next - but as an emerging IT firm bootstrapping alone, we're not there yet. Small ICO keeps us under thresholds to avoid penalties.
              </p>
              <p>
                We're proactive: On the BaFin "watchlist" since launch? Probably. That's why every step is transparent, verifiable on-chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Bootstrapping: The Reality */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-accent">Bootstrapping: The Reality of Building Alone</h2>

        <div className="max-w-4xl mx-auto rounded-xl border border-border bg-card p-8 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            As Lead Dev, I've funded everything myself so far - no VCs, no big teams. This means:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>
              <strong>No BaFin yet:</strong> Costs are high. We're bootstrapped, so full registration comes with growth.
            </li>
            <li>
              <strong>Anonymity gap:</strong> Step-by-step reveal builds trust organically. Full doxxing with BaFin/MiCA compliance.
            </li>
            <li>
              <strong>Investor hunt:</strong> Actively seeking local funding via banks, private equity for BaFin prospectus & audit.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed pt-4 border-t border-border/30">
            This closes the "trust gap" - from anonymous dev to regulated entity. It's deliberate: Fair, controlled, community-first.
          </p>
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Audits: Our Top Priority */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-accent">Audits: Our Top Priority</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Everything Will Be Audited */}
          <div className="rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-transparent p-6 space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-bold">Everything Will Be Audited</h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>Smart contracts, finances, operations - all get third-party audits when ready.</p>
              <p>Audits will be conducted as the project scales and resources allow. BaFin/MiCA compliance is a priority.</p>
              <p>This page becomes your hub: Proofs, reports, updates posted here.</p>
            </div>
          </div>

          {/* Easter Eggs & The Bigger Picture */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Egg className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-bold">Easter Eggs & The Bigger Picture</h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p>Project in early development - you're witnessing it live. Hints & reveals build excitement.</p>
              <p>
                Why this way? Personal story in a <span className="text-accent font-semibold border-b border-accent">Dev Talk.</span>
              </p>
              <p>Goal: From basics to audited powerhouse - with you along the ride.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Audit & Compliance Roadmap */}
      <section className="space-y-8">
        <div className="text-center space-y-4 border-t-4 border-red-500/50 pt-8">
          <h2 className="text-4xl font-bold text-red-500">Audit & Compliance Roadmap</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. BaFin / MiCA Token Classification */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-black text-black">
                  1
                </div>
                <h3 className="text-lg font-bold text-yellow-500">BaFin / MiCA Token Classification</h3>
              </div>
              <div className="w-7 h-7 rounded-full bg-card/50 border-2 border-red-500 flex items-center justify-center">
                <XCircle className="w-4 h-4 text-red-500" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Official regulatory classification under MiCA. Full prospectus submission. Legal entity established.
            </p>
          </div>

          {/* 2. Website Code & Security Audit */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-black text-black">
                  2
                </div>
                <h3 className="text-lg font-bold text-green-500">Website Code & Security Audit</h3>
              </div>
              <div className="w-7 h-7 rounded-full bg-card/50 border-2 border-muted flex items-center justify-center">
                <XCircle className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Full front-end, back-end, and infrastructure audit. Penetration testing. SSL, DDoS, and access control verification.
            </p>
          </div>

          {/* 3. Igra Labs Node Deployment */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-black text-black">
                  3
                </div>
                <h3 className="text-lg font-bold text-cyan-500">Igra Labs Node Deployment</h3>
              </div>
              <div className="w-7 h-7 rounded-full bg-card/50 border-2 border-muted flex items-center justify-center">
                <XCircle className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Live hosting of dedicated Kaspa node. Full sync, API endpoints, monitoring dashboard.
            </p>
          </div>

          {/* 4. PEG Smart Contract Audit */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-black text-white">
                  4
                </div>
                <h3 className="text-lg font-bold text-purple-500">PEG Smart Contract Audit</h3>
              </div>
              <div className="w-7 h-7 rounded-full bg-card/50 border-2 border-muted flex items-center justify-center">
                <XCircle className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Full audit of 1:1 vault swap logic. Tangem integration. Multi-sig controls. Third-party verification.
            </p>
          </div>

          {/* 5. Node Architecture Audit */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center font-black text-white">
                  5
                </div>
                <h3 className="text-lg font-bold text-pink-500">Node Architecture Audit</h3>
              </div>
              <div className="w-7 h-7 rounded-full bg-card/50 border-2 border-muted flex items-center justify-center">
                <XCircle className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Performance, redundancy, failover, and scalability review. Stress testing under peak load.
            </p>
          </div>

          {/* 6. $CYPUV Staking Audit (5-Year Horizon) */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-black text-black">
                  6
                </div>
                <h3 className="text-lg font-bold text-teal-500">$CYPUV Staking Audit (5-Year Horizon)</h3>
              </div>
              <div className="w-7 h-7 rounded-full bg-card/50 border-2 border-muted flex items-center justify-center">
                <XCircle className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Long-term staking mechanics, reward distribution, slashing logic. Full economic model audit.
            </p>
          </div>

          {/* 7. Annual Compliance Re-Audit */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-4 md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-black text-black">
                  7
                </div>
                <h3 className="text-lg font-bold text-yellow-400">Annual Compliance Re-Audit</h3>
              </div>
              <div className="w-7 h-7 rounded-full bg-card/50 border-2 border-muted flex items-center justify-center">
                <XCircle className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Yearly third-party re-audit of all systems. MiCA compliance report. Public disclosure.
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="text-center pt-6 border-t border-border/30 space-y-2">
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-muted-foreground">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" />
              <span className="text-muted-foreground">In Progress / Pending</span>
            </div>
          </div>
          <p className="text-lg font-bold pt-2">
            Every step: <br />
            <strong>Public. Verifiable. On-chain</strong> where possible.
          </p>
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Final Personal Message */}
      <section className="space-y-6">
        <div className="max-w-4xl mx-auto rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 space-y-4">
          <p className="text-muted-foreground leading-relaxed text-center">
            I've been building this project alone - bootstrapped, no team, no VC.
            <br />
            Every line of code, every decision, every sleepless night - all me.
            <br />
            And I'm not stopping.
          </p>
          <p className="text-muted-foreground leading-relaxed text-center">
            Regulation isn't a checkbox. It's the foundation of everything I believe in.
            <br />
            MiCA, BaFin - we're not avoiding them. We're preparing for them.
          </p>
          <p className="text-muted-foreground leading-relaxed text-center">
            The ICO is small on purpose. Not because I lack ambition - but because I respect the rules.
            <br />
            Crossing thresholds means fines. I won't risk that. Not for me. Not for you.
          </p>
          <p className="text-muted-foreground leading-relaxed text-center">
            I'm actively searching for local investors - banks, private equity - to fund the first regulatory step.
            <br />
            Once BaFin is secured, the anonymity gap closes. Full transparency. Full compliance.
            <br />
            That's the real launch of kas.me and the CyberPumpNetwork.
          </p>
          <p className="text-muted-foreground leading-relaxed text-center">
            I've been transparent since Day 1. Every Dev Talk, every post, every Easter Egg - it's all part of the plan.
            <br />
            I'm pretty sure BaFin has us on their watchlist already. And that's okay.
            <br />
            Because when we go live - we go live clean.
          </p>
          <p className="text-muted-foreground leading-relaxed text-center">
            Audits? Everything will be audited. Smart contracts, finances, operations - third-party, public, verified.
            <br />
            This page will become your proof center.
          </p>
          <p className="text-accent font-bold leading-relaxed text-center text-lg pt-4 border-t border-border/30">
            You're not just early. You're here at the birth.
            <br />
            The beginning of something special. Even if it's only special to me.
            <br />
            And I'm not going anywhere.
            <br /><br />
            Build to last.
          </p>
        </div>
      </section>
    </div>
  )
}
