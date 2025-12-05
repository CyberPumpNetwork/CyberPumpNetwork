import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const docsNavigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Quick Start', href: '/docs/quick-start' },
      { title: 'Wallet Setup', href: '/docs/wallet-setup' },
    ],
  },
  {
    title: 'Tokenomics',
    items: [
      { title: '$CYPU Overview', href: '/docs/token-overview' },
      { title: 'Token Distribution', href: '/docs/distribution' },
      { title: 'Minting & Supply', href: '/docs/minting' },
      { title: 'Wallet Addresses', href: '/docs/wallets' },
    ],
  },
  {
    title: 'Platform',
    items: [
      { title: 'Features', href: '/docs/features' },
      { title: 'EcoLoop', href: '/docs/ecoloop' },
      { title: 'Community Governance', href: '/docs/governance' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'Whitepaper', href: 'https://drive.google.com/file/d/1zMFJSHH6YH8BvDm03LdZDzP3K99bNjZK/view?usp=sharing', external: true },
      { title: 'FAQ', href: '/docs/faq' },
      { title: 'Developer Talks', href: '/docs/devtalks' },
    ],
  },
]

function DocsSidebar({ className }: { className?: string }) {
  const location = useLocation()

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
              <h4 className="font-semibold text-sm mb-2">{section.title}</h4>
              <div className="space-y-1">
                {section.items.map((item) => (
                  'external' in item && item.external ? (
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
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`block text-sm py-1.5 px-3 rounded-md transition-colors ${
                        location.pathname === item.href
                          ? 'bg-accent/10 text-accent font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.title}
                    </Link>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}

function DocsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div>
        <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
          Documentation
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Welcome to kas.me</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Your Kaspa Ecosystem Hub by The IT CyberSpace 🇩🇪. Everything you need to know about 
          kas.me, the $CYPU token, and building on the Kaspa blockchain.
        </p>
      </div>

      <Separator />

      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="group hover:border-accent/40 transition-colors cursor-pointer">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <CardTitle className="text-lg">Launch kas.me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access the platform to track your Kaspa portfolio and explore analytics.
              </p>
              <a href="https://kas.me" target="_blank" rel="noopener noreferrer" className="text-accent text-sm mt-2 inline-block">
                Go to kas.me →
              </a>
            </CardContent>
          </Card>

          <Card className="group hover:border-accent/40 transition-colors cursor-pointer">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle className="text-lg">$CYPU Token</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn about the KRC-20 token powering the kas.me ecosystem.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:border-accent/40 transition-colors cursor-pointer">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <CardTitle className="text-lg">Whitepaper</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Read our comprehensive technical whitepaper.
              </p>
              <a href="https://drive.google.com/file/d/1zMFJSHH6YH8BvDm03LdZDzP3K99bNjZK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent text-sm mt-2 inline-block">
                Download PDF →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* What is kas.me */}
      <div>
        <h2 className="text-2xl font-bold mb-6">What is kas.me?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">kas.me</strong> is the Kaspa Ecosystem Hub developed by 
              The IT CyberSpace, a German IT startup founded in 2023. Our platform provides comprehensive 
              analytics, portfolio tracking, and community tools for the Kaspa blockchain ecosystem.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At its core, kas.me aims to make the Kaspa ecosystem accessible to everyone - from seasoned 
              crypto enthusiasts to newcomers. We offer real-time analytics, multi-wallet support, and 
              upcoming features like EcoLoop for streamlined token creation.
            </p>
            <div className="grid sm:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 rounded-lg bg-accent/5">
                <div className="text-2xl font-bold text-accent">1B</div>
                <div className="text-sm text-muted-foreground">$CYPU Supply</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-accent/5">
                <div className="text-2xl font-bold text-accent">KRC-20</div>
                <div className="text-sm text-muted-foreground">Token Standard</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-accent/5">
                <div className="text-2xl font-bold text-accent">1:1</div>
                <div className="text-sm text-muted-foreground">KAS Mint Ratio</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-accent/5">
                <div className="text-2xl font-bold text-accent">🇩🇪</div>
                <div className="text-sm text-muted-foreground">Made in Germany</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Token Information */}
      <div>
        <h2 className="text-2xl font-bold mb-6">$CYPU Token Information</h2>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="wallets">Wallets</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Token Details</h3>
                    <div className="space-y-3">
                      {[
                        { label: 'Token Name', value: 'CyperPump' },
                        { label: 'Symbol', value: '$CYPU' },
                        { label: 'Total Supply', value: '1,000,000,000' },
                        { label: 'Network', value: 'Kaspa (KRC-20)' },
                        { label: 'Minting Ratio', value: '1 $KAS = 1 $CYPU' },
                        { label: 'Max per Transaction', value: '1,000 $CYPU' },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                          <span className="text-muted-foreground">{item.label}</span>
                          <span className="font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Key Features</h3>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-muted/50">
                        <div className="font-medium mb-1">Fair Launch</div>
                        <p className="text-sm text-muted-foreground">No pre-mine, equal opportunity for all participants</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50">
                        <div className="font-medium mb-1">Community Governance</div>
                        <p className="text-sm text-muted-foreground">Token holders participate in platform decisions</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50">
                        <div className="font-medium mb-1">Sustainable Model</div>
                        <p className="text-sm text-muted-foreground">Designed for long-term ecosystem growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="distribution" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    { name: 'Unminted Supply', percentage: 80, description: 'Available for community minting at 1:1 $KAS ratio' },
                    { name: 'Locked in Vault', percentage: 11, description: 'Secured for long-term project sustainability and future development' },
                    { name: 'Circulating Supply', percentage: 10, description: 'Currently in circulation within the ecosystem' },
                    { name: 'Burned Tokens', percentage: 2, description: 'Permanently removed from circulation' },
                  ].map((item) => (
                    <div key={item.name} className="p-4 rounded-lg border border-border/50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{item.name}</span>
                        <Badge variant="secondary">{item.percentage}%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <div className="mt-3 h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="wallets" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-border/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Main Team Wallet</span>
                      <Badge className="bg-accent/10 text-accent">114M $CYPU</Badge>
                    </div>
                    <code className="text-xs text-muted-foreground break-all block mb-2">
                      kaspa:qzhtfcr...eq8m
                    </code>
                    <p className="text-sm text-muted-foreground">Primary wallet for team operations and development</p>
                  </div>
                  <div className="p-4 rounded-lg border border-border/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Burn Wallet</span>
                      <Badge className="bg-red-500/10 text-red-500">20M Burned</Badge>
                    </div>
                    <code className="text-xs text-muted-foreground break-all block mb-2">
                      kaspa:qqqqqq...qqqqq
                    </code>
                    <p className="text-sm text-muted-foreground">Tokens permanently removed from circulation</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Full wallet details and transaction history available in the{' '}
                    <a href="https://kas.me" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      kas.me platform
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I mint $CYPU tokens?</AccordionTrigger>
            <AccordionContent>
              You can mint $CYPU tokens at a 1:1 ratio with $KAS. Simply send $KAS to the 
              minting contract, and you'll receive an equivalent amount of $CYPU (up to 1,000 
              per transaction). Visit kas.me to access the minting interface.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What wallets are supported?</AccordionTrigger>
            <AccordionContent>
              kas.me supports major Kaspa-compatible wallets including Kasware, KaspaWallet, 
              and other KRC-20 compatible wallets. We recommend Kasware for the best experience 
              with the platform's features.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is the token distribution?</AccordionTrigger>
            <AccordionContent>
              The total supply is 1 billion $CYPU. Currently: ~80% remains unminted and available 
              for community minting, ~11% is locked in the team vault for project sustainability, 
              ~10% is in circulation, and ~2% has been burned. This ensures fair access for all 
              participants.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What is EcoLoop?</AccordionTrigger>
            <AccordionContent>
              EcoLoop is our upcoming feature for streamlined token creation within the Kaspa 
              ecosystem. It will allow users to easily create and launch KRC-20 tokens with 
              built-in analytics and community tools. Stay tuned for updates!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Who is behind kas.me?</AccordionTrigger>
            <AccordionContent>
              kas.me is developed by The IT CyberSpace, a German IT startup founded in 2023. 
              We're passionate about making the Kaspa ecosystem accessible and user-friendly. 
              Follow us on X @TheITCyberSpace for the latest updates.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Community & Links Section */}
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
                Get the latest updates, announcements, and community discussions.
              </p>
              <a 
                href="https://x.com/TheITCyberSpace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                @TheITCyberSpace
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
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
                Explore our open-source code and contribute to the project.
              </p>
              <a 
                href="https://github.com/H34R7L3s/CyberPump" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                H34R7L3s/CyberPump
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="flex h-14 items-center px-4 lg:px-6">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <DocsSidebar className="h-full px-4" />
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-4 ml-auto">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-background" asChild>
              <a href="https://kas.me" target="_blank" rel="noopener noreferrer">
                Launch kas.me
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-border/50">
          <DocsSidebar className="sticky top-14 h-[calc(100vh-3.5rem)] pl-6" />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <DocsContent />
          </div>
        </main>
      </div>
    </div>
  )
}
