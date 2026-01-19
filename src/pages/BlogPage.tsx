import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { PageHeader } from '@/components/PageHeader'
import { DevBanner } from '@/components/DevBanner'
import { Footer } from '@/components/Footer'
import { Mic, BookOpen, Coins, Shield, Zap, Code2, Users, ArrowRight, ExternalLink } from 'lucide-react'

// Blog posts linking to actual existing docs pages
const blogPosts = [
  // === FEATURED: Dev Talks (actual markdown content) ===
  {
    title: 'Dev Talk #1: Origin Story',
    excerpt:
      '72 days after token launch. From first contact with blockchain in 2019 to understanding Kaspa - a simple thought: give people the ability to understand and act.',
    date: 'Nov 2025',
    readTime: '8 min read',
    category: 'Dev Talks',
    featured: true,
    link: '/docs/community/devtalks/devtalk-1',
    icon: Mic,
  },
  {
    title: 'Dev Talk #2: Absurd Megalomania',
    excerpt:
      'A declaration of freedom. The paradox of a website without traditional ownership - just code, nodes, and a system designed to survive me.',
    date: 'Dec 2025',
    readTime: '12 min read',
    category: 'Dev Talks',
    featured: true,
    link: '/docs/community/devtalks/devtalk-2',
    icon: Mic,
  },
  // === FEATURED: Tokenomics Overview ===
  {
    title: '$CYPU Token & Ecosystem',
    excerpt:
      'Overview of the KRC-20 token powering kas.me. Fair launch, transparent distribution, and the economic model built for sustainability.',
    date: 'Q4 2025',
    readTime: '10 min read',
    category: 'Tokenomics',
    featured: true,
    link: '/docs/tokenomics',
    icon: Coins,
  },
  // === REGULAR POSTS ===
  {
    title: 'Detailed Tokenomics',
    excerpt:
      'In-depth $CYPU token details - supply mechanics, wallet addresses, liquidity pools, staking, vesting, and the PEG system.',
    date: 'Q4 2025',
    readTime: '15 min read',
    category: 'Tokenomics',
    featured: false,
    link: '/docs/tokenomics/det-tokenomics',
    icon: Coins,
  },
  {
    title: 'The EcoLoop',
    excerpt:
      'The IT CyberSpace ecosystem loop - how platform fees, token burns, and staking rewards create a self-reinforcing cycle of value.',
    date: 'Q4 2025',
    readTime: '7 min read',
    category: 'Tokenomics',
    featured: false,
    link: '/docs/tokenomics/ecoloop',
    icon: Zap,
  },
  {
    title: 'The Firm: Behind kas.me',
    excerpt:
      'From one-person operation to structured entity. Meet the German company building kas.me - no anonymous team, just transparent development.',
    date: 'Q4 2025',
    readTime: '5 min read',
    category: 'Team',
    featured: false,
    link: '/docs/tokenomics/titcs/firm',
    icon: Users,
  },
  {
    title: 'Platform Features',
    excerpt:
      'Explore all kas.me platform capabilities - from the Kaspa Explorer to the Intelligence Center. Tools for everyone.',
    date: 'Q4 2025',
    readTime: '6 min read',
    category: 'Platform',
    featured: false,
    link: '/docs/platform/infocenter/features',
    icon: BookOpen,
  },
  {
    title: 'Getting Started Guide',
    excerpt:
      'Your first steps into the kas.me ecosystem. How to connect, explore features, and understand what makes this platform different.',
    date: 'Q4 2025',
    readTime: '5 min read',
    category: 'Guides',
    featured: false,
    link: '/docs/getting-started/guides',
    icon: BookOpen,
  },
  {
    title: 'Kaspa Basics',
    excerpt:
      'Learn the fundamentals of Kaspa - the fastest proof-of-work blockchain using the GHOSTDAG protocol.',
    date: 'Q4 2025',
    readTime: '8 min read',
    category: 'Guides',
    featured: false,
    link: '/docs/getting-started/basics',
    icon: BookOpen,
  },
  {
    title: 'Community Hub',
    excerpt:
      'Join the kas.me community. Connect on X, explore GitHub, and become part of the journey.',
    date: 'Q4 2025',
    readTime: '3 min read',
    category: 'Community',
    featured: false,
    link: '/docs/community',
    icon: Users,
  },
  {
    title: 'Our Story: Interactive Timeline',
    excerpt:
      'An interactive journey through the founding story. From Minecraft servers in 2012 to kas.me in 2025.',
    date: 'Q1 2026',
    readTime: '3 min read',
    category: 'Community',
    featured: false,
    link: '/docs/community/hub/story',
    icon: Users,
  },
  {
    title: 'Audits & Regulatory Path',
    excerpt:
      'Transparency from Day 1. The roadmap to professional audits and regulatory compliance.',
    date: 'Q1 2026',
    readTime: '5 min read',
    category: 'Security',
    featured: false,
    link: '/docs/community/hub/audits',
    icon: Shield,
  },
  {
    title: 'Development & API',
    excerpt:
      'Developer resources and API documentation. Current status and what is being built.',
    date: 'Ongoing',
    readTime: '4 min read',
    category: 'Development',
    featured: false,
    link: '/docs/development',
    icon: Code2,
  },
]

const categories = ['All', 'Dev Talks', 'Tokenomics', 'Platform', 'Guides', 'Community', 'Security', 'Development', 'Team']

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory
      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        logoText="kas.me"
        navItems={[
          { label: 'Home', href: '/' },
          { label: 'Docs', href: '/docs' },
        ]}
      />
      <DevBanner />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
            Resources & Updates
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            kas.me{' '}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Knowledge Hub
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dev Talks, documentation highlights, and deep dives into the kas.me ecosystem.
            No marketing fluff - just real content.
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.slice(0, 5).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                className={activeCategory === category ? 'bg-accent hover:bg-accent/90 text-background' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts - only show if there are featured posts matching filter */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => {
                const Icon = post.icon
                return (
                  <Link key={index} to={post.link}>
                    <Card className="group overflow-hidden hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <Icon className="w-12 h-12 text-accent/60 group-hover:text-accent group-hover:scale-110 transition-all" />
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
                          <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {featuredPosts.length > 0 && regularPosts.length > 0 && (
          <Separator className="mb-16" />
        )}

        {/* All Posts - only show if there are regular posts matching filter */}
        {regularPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {activeCategory === 'All' ? 'All Resources' : `${activeCategory} Resources`}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {regularPosts.map((post, index) => {
                const Icon = post.icon
                return (
                  <Link key={index} to={post.link}>
                    <Card className="group hover:border-accent/40 transition-all duration-300 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                            <Icon className="w-5 h-5 text-accent" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant="secondary">{post.category}</Badge>
                            <span className="text-sm text-muted-foreground">{post.date}</span>
                            <span className="text-sm text-muted-foreground hidden sm:inline">• {post.readTime}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
            </div>
          </div>
        )}

        {/* No results message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">
              No articles found for "{activeCategory === 'All' ? searchQuery : activeCategory}"
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setActiveCategory('All')
                setSearchQuery('')
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Quick Links Section */}
        <Separator className="my-16" />

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" asChild className="border-accent/30 hover:bg-accent/10">
              <Link to="/docs">
                <BookOpen className="w-4 h-4 mr-2" />
                Full Documentation
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-accent/30 hover:bg-accent/10">
              <Link to="/docs/community">
                <Users className="w-4 h-4 mr-2" />
                Community Hub
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-accent/30 hover:bg-accent/10">
              <a href="https://x.com/TheITCyberSpace" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Follow on X
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
