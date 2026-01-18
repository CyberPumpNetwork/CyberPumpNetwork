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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            From the{' '}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Lead Dev's Desk
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent updates, technical deep-dives, and honest progress reports.
            No marketing fluff - just real development insights.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourcePosts.map((post, index) => {
            const Icon = post.icon
            return (
              <Link key={index} to={post.link}>
                <Card className="group overflow-hidden hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden bg-accent/10">
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-accent/50 group-hover:text-accent group-hover:scale-110 transition-all" />
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {post.category}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
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
