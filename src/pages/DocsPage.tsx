import { Link, useLocation, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageHeader } from '@/components/PageHeader'
import { MarkdownRenderer } from '@/components/MarkdownRenderer'
import { getDocsNavigation, getDocBySlug, getCategories, getDocsByCategory } from '@/lib/docs'
import { useMarkdownContent } from '@/lib/useMarkdown'

const docsNavigation = getDocsNavigation()

// Add external resources to navigation
const externalResources = [
  { 
    title: 'Whitepaper', 
    href: 'https://drive.google.com/file/d/1zMFJSHH6YH8BvDm03LdZDzP3K99bNjZK/view?usp=sharing', 
    external: true 
  },
]

function DocsSidebar({ className }: { className?: string }) {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <ScrollArea className={className}>
      <div className="py-6 pr-6">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
            <span className="text-sm font-bold text-background">KM</span>
          </div>
          <span className="font-bold">kas.me</span>
        </Link>

        <div className="space-y-6">
          {docsNavigation.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-sm mb-2 text-foreground">{section.title}</h4>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = currentPath === item.href || 
                    (item.href === '/docs' && currentPath === '/docs/')
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`block text-sm py-1.5 px-3 rounded-md transition-colors ${
                        isActive
                          ? 'bg-accent/10 text-accent font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
          
          {/* External Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-2 text-foreground">External Resources</h4>
            <div className="space-y-1">
              {externalResources.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm py-1.5 px-3 rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  {item.title}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}

function DocsHomePage() {
  const categories = getCategories()
  const docsByCategory = getDocsByCategory()

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div>
        <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
          Documentation
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Welcome to kas.me Docs</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Your Kaspa Ecosystem Hub by The IT CyberSpace 🇩🇪. Explore our comprehensive 
          documentation to learn about kas.me, $CYPU token, and the Kaspa ecosystem.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="group hover:border-accent/40 transition-colors">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <CardTitle className="text-lg">Launch kas.me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Access the platform to track your Kaspa portfolio.
              </p>
              <a href="https://kas.me" target="_blank" rel="noopener noreferrer" className="text-accent text-sm">
                Go to kas.me →
              </a>
            </CardContent>
          </Card>

          <Link to="/docs/tokenomics">
            <Card className="group hover:border-accent/40 transition-colors h-full">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">$CYPU Tokenomics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn about the KRC-20 token powering kas.me.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/docs/features">
            <Card className="group hover:border-accent/40 transition-colors h-full">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <CardTitle className="text-lg">Platform Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Explore all kas.me platform features.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Browse by Category */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Browse Documentation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category} className="hover:border-accent/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {docsByCategory[category]?.slice(0, 5).map((doc) => (
                    <li key={doc.slug}>
                      <Link
                        to={doc.slug === 'index' ? '/docs' : `/docs/${doc.slug}`}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {doc.title}
                      </Link>
                    </li>
                  ))}
                  {(docsByCategory[category]?.length || 0) > 5 && (
                    <li className="text-sm text-accent">
                      +{(docsByCategory[category]?.length || 0) - 5} more...
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Links */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Community & Links</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Follow on X
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest updates and community discussions.
              </p>
              <a 
                href="https://x.com/TheITCyberSpace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                @TheITCyberSpace
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Repository
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Explore our open-source code and contribute.
              </p>
              <a 
                href="https://github.com/H34R7L3s/CyberPump" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                H34R7L3s/CyberPump
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function MarkdownDocPage({ slug }: { slug: string }) {
  const { content, loading, error } = useMarkdownContent(slug)
  const doc = getDocBySlug(slug || 'index')

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    )
  }

  if (error || !content) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Document Not Found</h2>
        <p className="text-muted-foreground mb-6">
          {error || 'The requested documentation page could not be found.'}
        </p>
        <Link to="/docs">
          <Button variant="outline">← Back to Docs</Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/docs" className="hover:text-accent">Docs</Link>
        <span>/</span>
        {doc?.category && (
          <>
            <span>{doc.category}</span>
            <span>/</span>
          </>
        )}
        <span className="text-foreground">{doc?.title || slug}</span>
      </div>

      {/* Category Badge */}
      {doc?.category && (
        <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
          {doc.category}
        </Badge>
      )}

      {/* Markdown Content */}
      <MarkdownRenderer content={content} />

      {/* Navigation Footer */}
      <div className="mt-12 pt-6 border-t border-border">
        <div className="flex justify-between items-center">
          <Link to="/docs">
            <Button variant="ghost" className="text-muted-foreground hover:text-accent">
              ← Back to Docs
            </Button>
          </Link>
          <a 
            href={`https://github.com/H34R7L3s/CyberPump/edit/main/src/docs/${doc?.file || ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-accent"
          >
            Edit this page on GitHub →
          </a>
        </div>
      </div>
    </div>
  )
}

export function DocsPage() {
  const { '*': slug } = useParams()
  const isHomePage = !slug || slug === ''

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        showLogo={false}
        showSidebar={true}
        sidebarContent={<DocsSidebar className="h-full px-4" />}
        navItems={[
          { label: 'Back to Home', href: '/' },
          { label: 'Launch kas.me', href: 'https://kas.me', external: true },
        ]}
      />

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border/50">
          <DocsSidebar className="sticky top-16 h-[calc(100vh-4rem)] pl-6" />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-12">
            {isHomePage ? (
              <DocsHomePage />
            ) : (
              <MarkdownDocPage slug={slug || ''} />
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
