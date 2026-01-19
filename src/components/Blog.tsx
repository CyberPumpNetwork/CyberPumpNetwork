import { Link } from 'react-router-dom'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Mic, Coins } from 'lucide-react'

// Links to actual existing docs pages
const resourcePosts = [
  {
    title: 'Dev Talk #1: Origin Story',
    excerpt:
      '72 days after token launch. From first contact with blockchain in 2019 to Kaspa - give people the ability to understand and act.',
    category: 'Dev Talk',
    link: '/docs/community/devtalks/devtalk-1',
    icon: Mic,
  },
  {
    title: 'Dev Talk #2: Absurd Megalomania',
    excerpt:
      'A declaration of freedom. The paradox of a website without traditional ownership - just code, nodes, and a system designed to survive me.',
    category: 'Dev Talk',
    link: '/docs/community/devtalks/devtalk-2',
    icon: Mic,
  },
  {
    title: '$CYPU Token & Ecosystem',
    excerpt:
      'Overview of the KRC-20 token powering kas.me. Fair launch, transparent distribution, and the economic model.',
    category: 'Tokenomics',
    link: '/docs/tokenomics',
    icon: Coins,
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 uppercase tracking-wider">
            Dev Talks
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-6">
            From the{' '}
            <span
              className="bg-gradient-to-r from-accent via-[#2dd4bf] to-accent/70 bg-clip-text text-transparent"
              style={{ textShadow: '0 0 50px rgba(20, 184, 166, 0.2)' }}
            >
              Lead Dev's Desk
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent updates, technical deep-dives, and honest progress reports.
            No marketing fluff - just real development insights.
          </p>
        </div>

        {/* Blog Grid - Asymmetric layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcePosts.map((post, index) => {
            const Icon = post.icon
            const isFeature = index === 0
            return (
              <Link
                key={index}
                to={post.link}
                className={isFeature ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <Card
                  className={`group overflow-hidden transition-all duration-300 h-full ${
                    isFeature
                      ? 'border-accent/40 hover:border-accent/60 bg-gradient-to-br from-accent/5 to-transparent hover:scale-[1.01]'
                      : 'border-border/40 hover:border-accent/30 bg-card/30 hover:scale-[1.02]'
                  }`}
                  style={isFeature ? { boxShadow: '0 0 30px rgba(20, 184, 166, 0.1)' } : {}}
                >
                  {/* Image */}
                  <div className={`overflow-hidden bg-accent/10 ${isFeature ? 'aspect-[21/9]' : 'aspect-video'}`}>
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 flex items-center justify-center relative">
                      <Icon className={`text-accent/50 group-hover:text-accent group-hover:scale-110 transition-all duration-300 ${isFeature ? 'w-16 h-16' : 'w-12 h-12'}`} />
                      {/* Turquoise overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className={isFeature ? 'p-8' : 'p-6'}>
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-accent/10 text-accent border border-accent/20">
                        {post.category}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className={`font-semibold mb-3 group-hover:text-accent transition-colors duration-300 ${isFeature ? 'text-2xl' : 'text-xl'}`}>
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className={`text-muted-foreground leading-relaxed mb-4 ${isFeature ? 'text-base' : 'text-sm'}`}>
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="border-accent/30 text-accent hover:bg-accent/10">
            <Link to="/blog">
              Browse All Resources
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
