import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PageHeader } from '@/components/PageHeader'
import { DevBanner } from '@/components/DevBanner'
import { MarkdownRenderer } from '@/components/MarkdownRenderer'
import { DocsSidebar } from '@/components/DocsSidebar'
import { DocsSearch } from '@/components/DocsSearch'
import { TableOfContents } from '@/components/TableOfContents'
import { TokenomicsContent } from '@/components/docs/TokenomicsContent'
import { DetTokenomicsContent } from '@/components/docs/DetTokenomicsContent'
import { TokenSupplyContent } from '@/components/docs/TokenSupplyContent'
import { WalletsContent } from '@/components/docs/WalletsContent'
import { LiquidityPoolsContent } from '@/components/docs/LiquidityPoolsContent'
import { StakingContent } from '@/components/docs/StakingContent'
import { VestingContent } from '@/components/docs/VestingContent'
import { PegContent } from '@/components/docs/PegContent'
import { LockContent } from '@/components/docs/LockContent'
import { MintContent } from '@/components/docs/MintContent'
import { FeaturesContent } from '@/components/docs/FeaturesContent'
import { DetailedFeaturesContent } from '@/components/docs/DetailedFeaturesContent'
import { FreeFeaturesContent } from '@/components/docs/FreeFeaturesContent'
import { ExplorerContent } from '@/components/docs/ExplorerContent'
import { GuidesContent } from '@/components/docs/GuidesContent'
import { IntelligenceCenterContent } from '@/components/docs/IntelligenceCenterContent'
import { EcoLoopContent } from '@/components/docs/EcoLoopContent'
import { TheFirmContent } from '@/components/docs/TheFirmContent'
import { NetworkInfrastructureContent } from '@/components/docs/NetworkInfrastructureContent'
import { OnChainInnovationContent } from '@/components/docs/OnChainInnovationContent'
import { BasicsContent } from '@/components/docs/BasicsContent'
import { GettingStartedContent } from '@/components/docs/GettingStartedContent'
import { KasMeInfoContent } from '@/components/docs/KasMeInfoContent'
import { AuditsContent } from '@/components/docs/AuditsContent'
import { CommunityContent } from '@/components/docs/CommunityContent'
import { DevelopmentContent } from '@/components/docs/DevelopmentContent'
import { StoryContent } from '@/components/docs/StoryContent'
import { DocumentRecoveryHandler } from '@/components/docs/DocumentRecoveryHandler'
import { getDocBySlug, getCategories, getDocsByCategory } from '@/lib/docs'
import { useMarkdownContent } from '@/lib/useMarkdown'
import {
  BookOpen,
  Zap,
  Coins,
  FileText,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Code2,
  ExternalLink
} from 'lucide-react'

function GhostRabbit() {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>('visible')
  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fading'), 3000)
    const goneTimer = setTimeout(() => setPhase('gone'), 4000)
    return () => { clearTimeout(fadeTimer); clearTimeout(goneTimer) }
  }, [])
  if (phase === 'gone') return null
  return (
    <div
      className="pointer-events-none select-none flex justify-center"
      style={{ marginTop: '-50px', marginBottom: '0px', opacity: phase === 'fading' ? 0 : 1, transition: 'opacity 0.6s ease-out' }}
    >
      <span className="text-xs text-white opacity-[0.15] tracking-widest">1x.0x.xxx9</span>
    </div>
  )
}

function DocsHomePage() {
  const categories = getCategories()
  const docsByCategory = getDocsByCategory()

  const quickStartCards = [
    {
      icon: Zap,
      title: 'Launch kas.me',
      description: 'Access the platform to track your Kaspa portfolio and explore features.',
      href: 'https://kas.me',
      external: true,
      gradient: 'from-accent/20 to-accent/5'
    },
    {
      icon: Coins,
      title: '$CYPU Tokenomics',
      description: 'Learn about the KRC-20 token powering kas.me ecosystem.',
      href: '/docs/tokenomics',
      external: false,
      gradient: 'from-blue-500/20 to-blue-500/5'
    },
    {
      icon: FileText,
      title: 'Platform Features',
      description: 'Explore all kas.me platform features and capabilities.',
      href: '/docs/platform/infocenter/features',
      external: false,
      gradient: 'from-purple-500/20 to-purple-500/5'
    },
  ]

  const categoryIcons: Record<string, any> = {
    'Getting Started': BookOpen,
    'Tokenomics': Coins,
    'Platform': Zap,
    'EcoLoop': Sparkles,
    'Community': MessageSquare,
    'Behind the Scenes': MessageSquare,
    'Development': Code2,
  }

  return (
    <div className="space-y-16">
      {/* Hero Section with Gradient */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10 rounded-3xl blur-3xl -z-10" />
        <div className="relative space-y-6 py-8">
          <Badge className="bg-gradient-to-r from-accent/20 to-blue-500/20 text-accent border-accent/30 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 mr-1" />
            Documentation
          </Badge>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-foreground via-foreground to-accent bg-clip-text text-transparent">
              kas.me Docs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Your comprehensive guide to the Kaspa Ecosystem Hub.
              <span className="text-foreground font-medium"> Explore tokenomics, platform features, and the philosophy</span> behind kas.me by The IT CyberSpace 🇩🇪
            </p>
          </div>

          {/* Search Bar with Glass Effect */}
          <div className="max-w-2xl pt-4">
            <DocsSearch />
          </div>
        </div>
      </div>

      {/* Quick Start Cards */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          <h2 className="text-3xl font-bold">Quick Start</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quickStartCards.map((card, index) => {
            const Icon = card.icon
            const CardWrapper = card.external ? 'a' : Link
            const wrapperProps = card.external
              ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' }
              : { to: card.href }

            return (
              <CardWrapper key={index} {...wrapperProps as any}>
                <Card className="group relative overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 h-full bg-card/50 backdrop-blur-sm">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <CardHeader className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {card.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </CardWrapper>
            )
          })}
        </div>
      </div>

      {/* Browse by Category */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          <h2 className="text-3xl font-bold">Browse Documentation</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = categoryIcons[category] || FileText
            const docs = docsByCategory[category] || []

            return (
              <Card
                key={category}
                className="group border-border/50 hover:border-accent/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-accent/5"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {category}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {docs.slice(0, 5).map((doc) => (
                      <li key={doc.slug}>
                        <Link
                          to={doc.slug === 'index' ? '/docs' : `/docs/${doc.slug}`}
                          className="group/link flex items-start gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 mt-0.5 opacity-0 -ml-6 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                          <span className="group-hover/link:translate-x-1 transition-transform">
                            {doc.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                    {docs.length > 5 && (
                      <li className="text-sm text-accent font-medium pt-2">
                        +{docs.length - 5} more articles...
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Community & Resources */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
          <h2 className="text-3xl font-bold">Community & Resources</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <Card className="group border-border/50 hover:border-accent/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-accent/5">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="group-hover:text-accent transition-colors">Follow on X</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Get the latest updates, announcements, and join community discussions.
              </p>
              <a
                href="https://x.com/TheITCyberSpace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium"
              >
                @TheITCyberSpace
                <ExternalLink className="w-4 h-4" />
              </a>
            </CardContent>
          </Card>

          <Card className="group border-border/50 hover:border-accent/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-accent/5">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code2 className="w-5 h-5 text-accent" />
                </div>
                <span className="group-hover:text-accent transition-colors">GitHub</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Explore our open-source code, contribute, and track development progress.
              </p>
              <a
                href="https://github.com/CyberPumpNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium"
              >
                CyberPumpNetwork
                <ExternalLink className="w-4 h-4" />
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

  // Check if this page has a custom component
  const hasCustomComponent =
    slug === 'tokenomics' ||
    slug === 'tokenomics/det-tokenomics' ||
    slug === 'tokenomics/det-token/token-supply' ||
    slug === 'tokenomics/det-token/wallets' ||
    slug === 'tokenomics/det-token/liquidity-pools' ||
    slug === 'tokenomics/det-token/staking' ||
    slug === 'tokenomics/det-token/vesting' ||
    slug === 'tokenomics/det-token/peg' ||
    slug === 'tokenomics/det-token/lock' ||
    slug === 'tokenomics/publicmarket/mint' ||
    slug === 'platform/infocenter/features' ||
    slug === 'platform/infocenter/features/det-features' ||
    slug === 'platform/infocenter/features/free-features' ||
    slug === 'platform/infocenter/explorer' ||
    slug === 'platform/infocenter/guides' ||
    slug === 'platform/infocenter/intelligence-center' ||
    slug === 'tokenomics/ecoloop' ||
    slug === 'tokenomics/titcs/firm' ||
    slug === 'tokenomics/titcs/network' ||
    slug === 'tokenomics/titcs/onchain' ||
    slug === 'getting-started/basics' ||
    slug === 'getting-started/guides' ||
    slug === 'getting-started/kasme-info' ||
    slug === 'community' ||
    slug === 'community/hub/story' ||
    slug === 'community/hub/audits' ||
    slug === 'development' ||
    slug === 'tokenomics/det-token/cypuv'

  if (loading && !hasCustomComponent) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="relative">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
          <div className="absolute inset-0 rounded-full border-2 border-accent/20"></div>
        </div>
      </div>
    )
  }

  if (!hasCustomComponent && (error || !content)) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8 text-accent" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Document Not Found</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          {error || 'The requested documentation page could not be found.'}
        </p>
        <Link to="/docs">
          <Button variant="outline" className="group">
            ← Back to Docs
            <ArrowRight className="w-4 h-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex gap-12">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Ghost rabbit — briefly visible before header covers it on page load */}
        {slug === 'tokenomics/det-token/cypuv' && (
          <GhostRabbit />
        )}
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          {slug === 'tokenomics/det-token/cypuv' ? (
            <span className="text-foreground font-medium">🐇</span>
          ) : (
            <>
              <Link to="/docs" className="hover:text-accent transition-colors font-medium">Docs</Link>
              <span>/</span>
              {doc?.category && (
                <>
                  <span className="text-foreground/60">{doc.category}</span>
                  <span>/</span>
                </>
              )}
              <span className="text-foreground font-medium">{doc?.title || slug}</span>
            </>
          )}
        </nav>

        {/* Category Badge */}
        {slug === 'tokenomics/det-token/cypuv' ? (
          <Badge className="mb-6 bg-gradient-to-r from-accent/20 to-blue-500/20 text-accent border-accent/30 backdrop-blur-sm">
            🐇
          </Badge>
        ) : doc?.category ? (
          <Badge className="mb-6 bg-gradient-to-r from-accent/20 to-blue-500/20 text-accent border-accent/30 backdrop-blur-sm">
            {doc.category}
          </Badge>
        ) : null}

        {/* Article Container - Custom Component or Markdown */}
        <article className="max-w-none">
          {slug === 'tokenomics' ? (
            <TokenomicsContent />
          ) : slug === 'tokenomics/det-tokenomics' ? (
            <DetTokenomicsContent />
          ) : slug === 'tokenomics/det-token/token-supply' ? (
            <TokenSupplyContent />
          ) : slug === 'tokenomics/det-token/wallets' ? (
            <WalletsContent />
          ) : slug === 'tokenomics/det-token/liquidity-pools' ? (
            <LiquidityPoolsContent />
          ) : slug === 'tokenomics/det-token/staking' ? (
            <StakingContent />
          ) : slug === 'tokenomics/det-token/vesting' ? (
            <VestingContent />
          ) : slug === 'tokenomics/det-token/peg' ? (
            <PegContent />
          ) : slug === 'tokenomics/det-token/lock' ? (
            <LockContent />
          ) : slug === 'tokenomics/det-token/cypuv' ? (
            <DocumentRecoveryHandler />
          ) : slug === 'tokenomics/publicmarket/mint' ? (
            <MintContent />
          ) : slug === 'platform/infocenter/features' ? (
            <FeaturesContent />
          ) : slug === 'platform/infocenter/features/det-features' ? (
            <DetailedFeaturesContent />
          ) : slug === 'platform/infocenter/features/free-features' ? (
            <FreeFeaturesContent />
          ) : slug === 'platform/infocenter/explorer' ? (
            <ExplorerContent />
          ) : slug === 'platform/infocenter/guides' ? (
            <GuidesContent />
          ) : slug === 'platform/infocenter/intelligence-center' ? (
            <IntelligenceCenterContent />
          ) : slug === 'tokenomics/ecoloop' ? (
            <EcoLoopContent />
          ) : slug === 'tokenomics/titcs/firm' ? (
            <TheFirmContent />
          ) : slug === 'tokenomics/titcs/network' ? (
            <NetworkInfrastructureContent />
          ) : slug === 'tokenomics/titcs/onchain' ? (
            <OnChainInnovationContent />
          ) : slug === 'getting-started/basics' ? (
            <BasicsContent />
          ) : slug === 'getting-started/guides' ? (
            <GettingStartedContent />
          ) : slug === 'getting-started/kasme-info' ? (
            <KasMeInfoContent />
          ) : slug === 'community' ? (
            <CommunityContent />
          ) : slug === 'community/hub/story' ? (
            <StoryContent />
          ) : slug === 'community/hub/audits' ? (
            <AuditsContent />
          ) : slug === 'development' ? (
            <DevelopmentContent />
          ) : (
            <div className="prose prose-lg dark:prose-invert">
              <MarkdownRenderer content={content} />
            </div>
          )}
        </article>

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Link to="/docs">
              <Button variant="ghost" className="group text-muted-foreground hover:text-accent -ml-4">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
                Back to Docs
              </Button>
            </Link>
            {!hasCustomComponent && (
              <a
                href={`https://github.com/CyberPumpNetwork/edit/main/src/docs/${doc?.file || ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group"
              >
                Edit this page on GitHub
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Table of Contents */}
      {!hasCustomComponent && (
        <aside className="hidden xl:block w-64 shrink-0">
          <div className="sticky top-24">
            <TableOfContents content={content} />
          </div>
        </aside>
      )}
    </div>
  )
}

export function DocsPage() {
  const { '*': slug } = useParams()
  const isHomePage = !slug || slug === ''
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Gelber Banner - immer ganz oben */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <DevBanner />
      </div>
      
      {/* Header - fährt komplett nach rechts raus beim Scrollen */}
      <div className={`fixed top-12 left-0 right-0 z-40 transition-transform duration-500 ease-in-out ${isScrolled ? 'translate-x-full' : 'translate-x-0'}`}>
        <PageHeader
          showLogo={false}
          showSidebar={true}
          sidebarContent={<DocsSidebar className="h-full px-4" />}
          navItems={[
            { label: 'Back to Home', href: '/' },
          ]}
        />
      </div>
      
      {/* Back to Home Button - erscheint rechts beim Scrollen ohne Balken */}
      <div className={`fixed top-14 right-4 z-50 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Button 
          variant="ghost" 
          asChild 
          className="bg-background/80 backdrop-blur-sm border border-accent/30 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:border-accent/50 transition-all"
          style={{
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.15), 0 0 40px rgba(168, 85, 247, 0.1)'
          }}
        >
          <Link to="/">Back to Home</Link>
        </Button>
      </div>

      <div className="flex" style={{ marginTop: '64px' }}>
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 border-r border-border/50">
          <DocsSidebar className="sticky top-28 h-[calc(100vh-7rem)] pl-8 pr-4" />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          <div className={
            isHomePage
              ? "max-w-6xl mx-auto px-8 py-16"
              : slug === 'community/hub/story'
                ? "max-w-full px-6 py-12"
                : "max-w-5xl mx-auto px-8 py-12"
          }>
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
