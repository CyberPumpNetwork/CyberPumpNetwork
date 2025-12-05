import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'completed',
    items: [
      'Project Vision & Concept',
      'kas.me Platform Development',
      '$CYPU Token Launch (KRC-20)',
      'Community Building on X',
      'Website & Documentation',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Launch & Growth',
    status: 'active',
    items: [
      'Token Minting (1 $KAS = 1 $CYPU)',
      'Portfolio Tracking Features',
      'Real-Time Analytics Dashboard',
      'Multi-Wallet Support',
      'Community Governance Setup',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Expansion',
    status: 'upcoming',
    items: [
      'EcoLoop Token Creation System',
      'Advanced Charting Tools',
      'Cross-Chain Integration',
      'Enhanced Wallet Features',
      'Partnership Announcements',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Ecosystem',
    status: 'upcoming',
    items: [
      'Full DAO Governance',
      'DeFi Features Integration',
      'Mobile App Development',
      'Enterprise Solutions',
      'Global Kaspa Ecosystem Hub',
    ],
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 uppercase tracking-wider">
            Our Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            kas.me{' '}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
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
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-accent/20 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {roadmapPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                  <div
                    className={`w-12 h-12 rounded-full border-4 flex items-center justify-center z-10 ${
                      phase.status === 'completed'
                        ? 'bg-accent border-accent text-background'
                        : phase.status === 'active'
                        ? 'bg-accent/20 border-accent text-accent animate-pulse'
                        : 'bg-card border-border text-muted-foreground'
                    }`}
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
                    className={`transition-all duration-300 hover:-translate-y-1 ${
                      phase.status === 'active'
                        ? 'bg-accent/10 border-accent/40 shadow-lg shadow-accent/10'
                        : 'bg-card/50 border-border/50 hover:border-accent/30'
                    }`}
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
