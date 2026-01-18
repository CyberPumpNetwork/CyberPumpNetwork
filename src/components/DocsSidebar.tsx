import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ScrollArea } from './ui/scroll-area'
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getDocsNavigation } from '@/lib/docs'

const docsNavigation = getDocsNavigation()

const externalResources = [
  {
    title: 'Whitepaper',
    href: 'https://drive.google.com/file/d/1zMFJSHH6YH8BvDm03LdZDzP3K99bNjZK/view?usp=sharing',
    external: true
  },
]

interface DocsSidebarProps {
  className?: string
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const location = useLocation()
  const currentPath = location.pathname
  
  // Initialize with all sections collapsed
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {}
    docsNavigation.forEach(section => {
      initialState[section.title] = true // Start collapsed
    })
    initialState['External Resources'] = true
    return initialState
  })

  // Check if section has active item
  const isSectionActive = (section: typeof docsNavigation[0]) => {
    return section.items.some(item =>
      currentPath === item.href ||
      (item.href === '/docs' && currentPath === '/docs/')
    )
  }

  // Auto-expand section with active item on route change
  useEffect(() => {
    const activeSection = docsNavigation.find(section => isSectionActive(section))
    if (activeSection) {
      setCollapsedSections(prev => ({
        ...prev,
        [activeSection.title]: false // Expand active section
      }))
    }
  }, [currentPath])

  const toggleSection = (title: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <ScrollArea className="flex-1 overflow-auto">
        <div className="py-6 pr-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-sm font-bold text-background">KM</span>
            </div>
            <span className="font-bold group-hover:text-accent transition-colors">kas.me</span>
          </Link>

        {/* Navigation Sections */}
        <div className="space-y-4">
          {docsNavigation.map((section) => {
            const isCollapsed = collapsedSections[section.title]
            const isActive = isSectionActive(section)

            return (
              <div key={section.title}>
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.title)}
                  className={cn(
                    "w-full flex items-center justify-between font-semibold text-sm mb-2 py-1 px-2 rounded-md transition-colors",
                    isActive ? "text-accent" : "text-foreground hover:text-accent hover:bg-accent/5"
                  )}
                >
                  <span>{section.title}</span>
                  {isCollapsed ? (
                    <ChevronRight className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {/* Section Items */}
                {!isCollapsed && (
                  <div className="space-y-0.5 pl-2">
                    {section.items.map((item) => {
                      const isItemActive = currentPath === item.href ||
                        (item.href === '/docs' && currentPath === '/docs/')

                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={cn(
                            "block text-sm py-1.5 px-3 rounded-md transition-all",
                            isItemActive
                              ? 'bg-accent/10 text-accent font-medium border-l-2 border-accent'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted hover:translate-x-0.5'
                          )}
                        >
                          {item.title}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}

          {/* External Resources */}
          <div>
            <button
              onClick={() => toggleSection('External Resources')}
              className="w-full flex items-center justify-between font-semibold text-sm mb-2 py-1 px-2 rounded-md transition-colors text-foreground hover:text-accent hover:bg-accent/5"
            >
              <span>External Resources</span>
              {collapsedSections['External Resources'] ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {!collapsedSections['External Resources'] && (
              <div className="space-y-0.5 pl-2">
                {externalResources.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm py-1.5 px-3 rounded-md transition-all text-muted-foreground hover:text-foreground hover:bg-muted hover:translate-x-0.5"
                  >
                    {item.title}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      </ScrollArea>
    </div>
  )
}
