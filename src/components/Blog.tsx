import { Link } from 'react-router-dom'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const blogPosts = [
  {
    title: 'Introducing kas.me: Your Kaspa Ecosystem Hub',
    excerpt:
      'Discover how kas.me by The IT CyberSpace is building the ultimate analytics and tracking platform for the Kaspa blockchain ecosystem.',
    date: 'Jan 10, 2025',
    readTime: '5 min read',
    category: 'Announcements',
    slug: 'introducing-kasme',
  },
  {
    title: 'Understanding $CYPU Tokenomics',
    excerpt:
      'A comprehensive guide to the $CYPU token on the KRC-20 standard - minting mechanics, distribution, and the innovative 1:1 $KAS ratio.',
    date: 'Jan 8, 2025',
    readTime: '8 min read',
    category: 'Education',
    slug: 'cypu-tokenomics',
  },
  {
    title: 'EcoLoop: The Future of Token Creation',
    excerpt:
      'Learn about EcoLoop - our upcoming feature for streamlined token creation within the Kaspa ecosystem, making blockchain accessible to everyone.',
    date: 'Jan 5, 2025',
    readTime: '6 min read',
    category: 'Features',
    slug: 'ecoloop-token-creation',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 uppercase tracking-wider">
            Latest Updates
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            From Our{' '}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest news, insights, and developments from
            kas.me and The IT CyberSpace team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-accent/10">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-accent/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
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
                <Button variant="ghost" className="text-accent p-0 h-auto hover:bg-transparent hover:text-accent/80" asChild>
                  <Link to={`/blog/${post.slug}`}>
                    Read More
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild className="border-accent/30 text-accent hover:bg-accent/10">
            <Link to="/blog">
              View All Articles
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
