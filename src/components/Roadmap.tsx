import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'completed',
    items: [
      'Project Vision & Architecture Design',
      '$CYPU Token Launch (KRC-20)',
      'Documentation & Transparency',
      'Community Building on X',
      'Worker Node Architecture (internal)',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Platform & Regulatory',
    status: 'active',
    items: [
      'kas.me Platform Development',
      'API Layer (built & tested internally)',
      'BaFin / MiCA Regulatory Path',
      'Investor Outreach for Compliance',
      'Worker Node Network Setup',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Public Launch',
    status: 'upcoming',
    items: [
      'Platform Public Beta',
      'Developer API Documentation',
      'Intelligence Center (ML Analytics)',
      'Multi-Wallet Tracking Features',
      'Community Worker Node Program',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Ecosystem Expansion',
    status: 'upcoming',
    items: [
      'EcoLoop Full Integration',
      'Advanced DeFi Mechanisms (PEG)',
      '$CYPUV Governance Features',
      'The IT CyberSpace IT Services',
      'Real-World Impact (Mining/Solar)',
    ],
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      {/* Background - different from other sections */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 uppercase tracking-wider">
            Our Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-6">
            kas.me{' '}
            <span
              className="bg-gradient-to-r from-accent via-[#2dd4bf] to-accent/70 bg-clip-text text-transparent"
              style={{ textShadow: '0 0 50px rgba(20, 184, 166, 0.2)' }}
            >
              Roadmap
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building the future of Kaspa analytics. Join us as we develop
            the ultimate ecosystem hub for the Kaspa community.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Connection Line - turquoise with glow */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20 hidden lg:block"
            style={{ boxShadow: '0 0 15px rgba(20, 184, 166, 0.4), 0 0 30px rgba(20, 184, 166, 0.2)' }}
          />

          <div className="space-y-12 lg:space-y-0">
            {roadmapPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node - with glow effect */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full border-4 flex items-center justify-center z-10 transition-all duration-300 ${
                      phase.status === 'completed'
                        ? 'bg-accent border-accent text-background'
                        : phase.status === 'active'
                        ? 'bg-accent/20 border-accent text-accent'
                        : 'bg-card border-border text-muted-foreground hover:border-accent/30'
                    }`}
                    style={
                      phase.status === 'completed'
                        ? { boxShadow: '0 0 20px rgba(20, 184, 166, 0.5)' }
                        : phase.status === 'active'
                        ? { boxShadow: '0 0 25px rgba(20, 184, 166, 0.6), 0 0 50px rgba(20, 184, 166, 0.3)' }
                        : {}
                    }
                  >
                    {phase.status === 'completed' ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-1 ${
                    index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:col-start-2'
                  }`}
                >
                  <Card
                    className={`transition-all duration-300 hover:scale-[1.02] ${
                      phase.status === 'active'
                        ? 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent/40'
                        : phase.status === 'completed'
                        ? 'bg-card/50 border-accent/30 hover:border-accent/50'
                        : 'bg-card/30 border-border/40 hover:border-accent/20'
                    }`}
                    style={
                      phase.status === 'active'
                        ? { boxShadow: '0 0 30px rgba(20, 184, 166, 0.2)' }
                        : {}
                    }
                  >
                    <CardContent className="p-8">
                    {/* Phase Badge */}
                    <Badge
                      className={`mb-4 ${
                        phase.status === 'completed'
                          ? 'bg-accent/20 text-accent'
                          : phase.status === 'active'
                          ? 'bg-accent text-background'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {phase.status === 'completed' && (
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                      {phase.status === 'active' && (
                        <span className="w-2 h-2 bg-background rounded-full animate-pulse mr-1" />
                      )}
                      {phase.phase}
                    </Badge>

                    <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>

                    <ul className={`space-y-3 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      {phase.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={`flex items-center gap-3 text-muted-foreground ${
                            index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              phase.status === 'completed'
                                ? 'bg-accent'
                                : 'bg-muted-foreground/50'
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty column for alternating layout */}
                {index % 2 === 0 && <div className="hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
