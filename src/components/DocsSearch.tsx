import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, FileText, X } from 'lucide-react'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils'
import { docsConfig, type DocPage } from '@/lib/docs'

interface DocsSearchProps {
  className?: string
}

export function DocsSearch({ className }: DocsSearchProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  // Simple fuzzy search
  const searchResults = useMemo(() => {
    if (!query.trim()) return []

    const lowerQuery = query.toLowerCase()

    return docsConfig
      .map(doc => {
        const titleMatch = doc.title.toLowerCase().includes(lowerQuery)
        const descMatch = doc.description?.toLowerCase().includes(lowerQuery)
        const categoryMatch = doc.category.toLowerCase().includes(lowerQuery)

        // Calculate relevance score
        let score = 0
        if (titleMatch) score += 10
        if (descMatch) score += 5
        if (categoryMatch) score += 3

        return { doc, score }
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8) // Limit to 8 results
      .map(item => item.doc)
  }, [query])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSelect = (doc: DocPage) => {
    const path = doc.slug === 'index' ? '/docs' : `/docs/${doc.slug}`
    navigate(path)
    setIsOpen(false)
    setQuery('')
  }

  return (
    <div className={cn("relative", className)}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search docs... (⌘K)"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-9 pr-9 bg-muted/50 border-border/50 focus:border-accent/50"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && query && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => {
              setIsOpen(false)
              setQuery('')
            }}
          />

          {/* Results */}
          <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-card border border-border rounded-lg shadow-lg">
            <ScrollArea className="max-h-[400px]">
              {searchResults.length > 0 ? (
                <div className="p-2">
                  {searchResults.map((doc) => (
                    <button
                      key={doc.slug}
                      onClick={() => handleSelect(doc)}
                      className="w-full text-left p-3 rounded-md hover:bg-accent/10 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <FileText className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm group-hover:text-accent transition-colors">
                              {doc.title}
                            </span>
                            <Badge
                              variant="outline"
                              className="text-xs bg-muted/50"
                            >
                              {doc.category}
                            </Badge>
                          </div>
                          {doc.description && (
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {doc.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No results found for "{query}"</p>
                </div>
              )}
            </ScrollArea>
          </div>
        </>
      )}
    </div>
  )
}
