import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Separator } from './ui/separator'

const footerLinks = {
  Platform: [
    { name: 'Features', href: '/#about' },
    { name: 'Tokenomics', href: '/#tokenomics' },
    { name: 'Roadmap', href: '/#roadmap' },
    { name: 'Launch kas.me', href: 'https://kas.me', external: true },
  ],
  Resources: [
    { name: 'Whitepaper', href: 'https://drive.google.com/file/d/1zMFJSHH6YH8BvDm03LdZDzP3K99bNjZK/view?usp=sharing', external: true },
    { name: 'Documentation', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/docs#faq' },
  ],
  Community: [
    { name: 'X (Twitter)', href: 'https://x.com/TheITCyberSpace', external: true },
    { name: 'GitHub', href: 'https://github.com/H34R7L3s/CyberPump', external: true },
  ],
  Token: [
    { name: '$CYPU Token', href: '/#tokenomics' },
    { name: 'Token Distribution', href: '/docs/tokenomics' },
    { name: 'Wallet Info', href: '/docs/wallets' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                <span className="text-xl font-bold text-background">KM</span>
              </div>
              <span className="text-xl font-bold">kas.me</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xs">
              Your Kaspa Ecosystem Hub by The IT CyberSpace. 
              Track, analyze, and explore the Kaspa blockchain ecosystem.
            </p>
            <p className="text-xs text-muted-foreground/70 mb-6">
              A project by The IT CyberSpace 🇩🇪
            </p>
            {/* Newsletter */}
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-accent hover:bg-accent/90 text-background">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1"
                      >
                        {link.name}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : link.href.startsWith('/') || link.href.startsWith('#') ? (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <Separator className="my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 kas.me by The IT CyberSpace. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/TheITCyberSpace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              X (Twitter)
            </a>
            <a
              href="https://github.com/H34R7L3s/CyberPump"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://kas.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              kas.me
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
