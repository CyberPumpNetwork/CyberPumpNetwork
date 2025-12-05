import { useState, useEffect } from 'react'
import { getDocBySlug } from './docs'

// Import all markdown files from the docs directory using Vite's import.meta.glob
const markdownFiles = import.meta.glob('/src/docs/**/*.md', { 
  query: '?raw',
  import: 'default',
})

export function useMarkdownContent(slug: string) {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadContent() {
      setLoading(true)
      setError(null)

      try {
        // Get the doc config for this slug
        const doc = getDocBySlug(slug === '' ? 'index' : slug)
        
        if (!doc) {
          setError('Document not found')
          setLoading(false)
          return
        }

        // Construct the path to the markdown file
        const filePath = `/src/docs/${doc.file}`
        
        // Check if the file exists in our glob
        if (markdownFiles[filePath]) {
          const content = await markdownFiles[filePath]() as string
          setContent(content)
        } else {
          // Try alternative path format
          const altPath = `../..${filePath}`
          if (markdownFiles[altPath]) {
            const content = await markdownFiles[altPath]() as string
            setContent(content)
          } else {
            setError(`File not found: ${filePath}`)
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content')
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [slug])

  return { content, loading, error }
}

// Get list of all available markdown files (for debugging)
export function getAvailableFiles(): string[] {
  return Object.keys(markdownFiles)
}
