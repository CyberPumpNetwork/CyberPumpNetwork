import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { PageHeader } from '@/components/PageHeader'
import { DevBanner } from '@/components/DevBanner'
import { Footer } from '@/components/Footer'

const blogPosts = [
  {
    title: 'Introducing CyperPump: The Future of DeFi',
    excerpt:
      'Learn about our vision for revolutionizing decentralized finance and how CyperPump is building the next generation of blockchain technology.',
    date: 'Nov 28, 2025',
    readTime: '5 min read',
    category: 'Announcements',
    featured: true,
  },
  {
    title: 'Understanding Our Tokenomics',
    excerpt:
      'A deep dive into the economic model behind CyperPump, including token distribution, burn mechanisms, and staking rewards.',
    date: 'Nov 25, 2025',
    readTime: '8 min read',
    category: 'Education',
    featured: true,
  },
  {
    title: 'Partnership with Leading DeFi Protocols',
    excerpt:
      'Exciting news about our strategic partnerships that will expand the CyperPump ecosystem and bring new opportunities to our community.',
    date: 'Nov 22, 2025',
    readTime: '4 min read',
    category: 'Partnerships',
    featured: true,
  },
  {
    title: 'Security First: Our Audit Results',
    excerpt:
      'A comprehensive overview of our security measures and the results from our smart contract audits by CertiK and Hacken.',
    date: 'Nov 18, 2025',
    readTime: '6 min read',
    category: 'Security',
    featured: false,
  },
  {
    title: 'Staking Guide: Maximize Your Rewards',
    excerpt:
      'Step-by-step guide on how to stake your $CPP tokens and earn passive income through our innovative staking program.',
    date: 'Nov 15, 2025',
    readTime: '7 min read',
    category: 'Guides',
    featured: false,
  },
  {
    title: 'Community Governance: Your Voice Matters',
    excerpt:
      'Learn how you can participate in shaping the future of CyperPump through our decentralized governance system.',
    date: 'Nov 12, 2025',
    readTime: '5 min read',
    category: 'Governance',
    featured: false,
  },
  {
    title: 'Cross-Chain Bridging: Research Phase',
    excerpt:
      'A look at our cross-chain bridge design that aims to connect CyperPump across multiple blockchain networks.',
    date: 'Nov 8, 2025',
    readTime: '4 min read',
    category: 'Development',
    featured: false,
  },
  {
    title: 'Meet the Team Behind CyperPump',
    excerpt:
      'Get to know the passionate developers, strategists, and community managers building the CyperPump ecosystem.',
    date: 'Nov 5, 2025',
    readTime: '6 min read',
    category: 'Team',
    featured: false,
  },
]

const categories = ['All', 'Announcements', 'Education', 'Partnerships', 'Security', 'Guides', 'Governance', 'Development', 'Team']

export function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        logoText="CyberPump"
        navItems={[
          { label: 'Docs', href: '/docs' },
        ]}
      />
      <DevBanner />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
            Blog
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Latest{' '}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Updates
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest news, insights, and developments from
            the CyperPump team.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Input
              placeholder="Search articles..."
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.slice(0, 5).map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className={category === 'All' ? 'bg-accent hover:bg-accent/90 text-background' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
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
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="mb-16" />

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {regularPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:border-accent/40 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <span className="text-sm text-muted-foreground">• {post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
