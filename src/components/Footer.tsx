import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

const footerLinks = {
  Platform: [
    { name: 'Features', href: '/', scrollTo: 'about' },
    { name: 'Tokenomics', href: '/', scrollTo: 'tokenomics' },
    { name: 'Roadmap', href: '/', scrollTo: 'roadmap' },
    { name: 'Development', href: '/docs/development' },
  ],
  Resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'EcoLoop', href: '/docs/tokenomics/ecoloop' },
    { name: 'Audits & Compliance', href: '/docs/community/hub/audits' },
    { name: 'Whitepaper', href: 'https://drive.google.com/file/d/15VvRoxo2g-s6Q1FiX-BYvyxYhJTAGjBs/view', external: true },
  ],
  Community: [
    { name: '@TheITCyberSpace', href: 'https://x.com/TheITCyberSpace', external: true },
  ],
  Token: [
    { name: 'Token Supply', href: '/docs/tokenomics/det-token/token-supply' },
    { name: 'Wallets & Locks', href: '/docs/tokenomics/det-token/lock' },
    { name: 'How to Mint', href: '/docs/tokenomics/publicmarket/mint' },
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
              <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center overflow-hidden ml-1">
                <img src="/logo.png" alt="kas.me" className="w-[112%] h-[112%] object-cover" />
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
            {/* CTA */}
            <div className="flex gap-2">
              <Button className="bg-accent hover:bg-accent/90 text-background" asChild>
                <a href="https://x.com/TheITCyberSpace" target="_blank" rel="noopener noreferrer">
                  Follow Updates on X
                </a>
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
                    ) : 'scrollTo' in link && link.scrollTo ? (
                      <Link
                        to={link.href}
                        onClick={(e) => {
                          if (window.location.pathname === '/') {
                            e.preventDefault();
                            const element = document.getElementById(link.scrollTo as string);
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        state={{ scrollTo: link.scrollTo }}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
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
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 kas.me by The IT CyberSpace. All rights reserved.
            </p>
            {/* Powered by Kaspa Badge */}
            <a
              href="https://kaspa.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
              style={{ boxShadow: '0 0 10px rgba(20, 184, 166, 0.1)' }}
            >
              <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs font-medium text-accent">Powered by Kaspa</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/TheITCyberSpace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              @TheITCyberSpace
            </a>
            <Link
              to="/docs"
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
