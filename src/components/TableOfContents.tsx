import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { List } from 'lucide-react'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
  className?: string
}

export function TableOfContents({ content, className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  // Extract headings from markdown content
  useEffect(() => {
    const headingRegex = /^#{1,3}\s+(.+)$/gm
    const matches = Array.from(content.matchAll(headingRegex))

    const extractedHeadings: TocItem[] = matches.map((match, index) => {
      const level = match[0].split('#').length - 1
      const text = match[1].trim()
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      return { id: `${id}-${index}`, text, level }
    })

    setHeadings(extractedHeadings)
  }, [content])

  // Track active heading on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    const headingElements = document.querySelectorAll('h1, h2, h3')
    headingElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 100 // Account for fixed header
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  return (
    <nav className={cn("space-y-2", className)}>
      <div className="flex items-center gap-2 text-sm font-semibold mb-3 text-foreground">
        <List className="w-4 h-4" />
        <span>On This Page</span>
      </div>
      <ul className="space-y-2 text-sm border-l-2 border-border">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 1) * 0.75}rem` }}
          >
            <button
              onClick={() => handleClick(heading.id)}
              className={cn(
                "text-left w-full py-1 px-3 rounded-r transition-colors hover:text-accent border-l-2 -ml-[2px]",
                activeId === heading.id
                  ? "text-accent font-medium border-accent"
                  : "text-muted-foreground border-transparent hover:border-accent/40"
              )}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
