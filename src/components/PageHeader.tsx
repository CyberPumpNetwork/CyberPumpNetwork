import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export interface PageHeaderConfig {
  showLogo?: boolean
  logoText?: string
  logoHref?: string
  navItems?: Array<{ label: string; href: string; external?: boolean }>
  sidebarContent?: ReactNode
  showSidebar?: boolean
}

export function PageHeader({
  showLogo = true,
  logoText = 'CyberPump',
  logoHref = '/',
  navItems = [],
  sidebarContent,
  showSidebar = false,
}: PageHeaderConfig) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8 justify-between gap-4">
        {/* Left: Logo + Sidebar Toggle */}
        <div className="flex items-center gap-4">
          {showSidebar && sidebarContent && (
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                {sidebarContent}
              </SheetContent>
            </Sheet>
          )}

          {showLogo && (
            <Link to={logoHref} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                <span className="text-lg font-bold text-background">
                  {logoText.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent hidden sm:inline">
                {logoText}
              </span>
            </Link>
          )}
        </div>

        {/* Right: Nav Items */}
        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
          {navItems.map((item) => {
            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  <Button variant="ghost" size="sm">
                    {item.label}
                  </Button>
                </a>
              )
            }
            return (
              <Link key={item.label} to={item.href} className="text-sm">
                <Button variant="ghost" size="sm">
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}
