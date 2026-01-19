import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { cn } from '@/lib/utils'
import { CodeBlock } from './CodeBlock'
import { Callout } from './docs/Callout'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  // Clean up Jekyll/GitHub Pages specific syntax
  let cleanContent = content
    // Remove Jekyll front matter
    .replace(/^---[\s\S]*?---\n*/m, '')
    // Remove Jekyll relative_url filter
    .replace(/\{\{\s*['"]([^'"]+)['"]\s*\|\s*relative_url\s*\}\}/g, '$1')
    // Remove Jekyll include tags
    .replace(/\{%\s*include\s+[^%]+%\}/g, '')
    // Remove link tags (CSS references)
    .replace(/<link[^>]*>/gi, '')
    // Clean up style attributes in HTML (keep them but simplify)
    .replace(/style="[^"]*var\([^)]+\)[^"]*"/g, '')

  // Remove leading indentation from HTML blocks to prevent them being treated as code blocks
  // Markdown treats 4+ spaces of indentation as code blocks
  cleanContent = cleanContent
    .split('\n')
    .map(line => {
      // If line starts with spaces followed by an HTML tag, remove the leading spaces
      if (/^\s+</.test(line)) {
        return line.trimStart()
      }
      return line
    })
    .join('\n')

  return (
    <div className={cn('prose prose-invert max-w-none', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          // Custom heading styles
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mb-6 text-foreground border-b border-border/50 pb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold mt-6 mb-2 text-foreground">
              {children}
            </h4>
          ),
          // Paragraph styling
          p: ({ children }) => (
            <p className="text-muted-foreground leading-relaxed mb-4">
              {children}
            </p>
          ),
          // Link styling
          a: ({ href, children }) => {
            const isExternal = href?.startsWith('http')
            return (
              <a
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="text-accent hover:text-accent/80 underline underline-offset-2 transition-colors"
              >
                {children}
                {isExternal && (
                  <svg
                    className="inline-block w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                )}
              </a>
            )
          },
          // List styling
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-muted-foreground">{children}</li>
          ),
          // Code styling with syntax highlighting
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '')
            const language = match ? match[1] : 'text'
            const code = String(children).replace(/\n$/, '')

            // Inline code
            if (!match) {
              return (
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-accent" {...props}>
                  {children}
                </code>
              )
            }

            // Block code with syntax highlighting
            return <CodeBlock code={code} language={language} />
          },
          pre: ({ children }) => {
            // Let CodeBlock handle the pre styling
            return <>{children}</>
          },
          // Blockquote styling
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent pl-4 py-2 my-4 bg-accent/5 rounded-r-lg">
              {children}
            </blockquote>
          ),
          // Table styling
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-border rounded-lg">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-border bg-muted/50 px-4 py-2 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-4 py-2 text-muted-foreground">
              {children}
            </td>
          ),
          // Horizontal rule
          hr: () => <hr className="my-8 border-border" />,
          // Line break
          br: () => <br className="block" />,
          // Footer styling
          footer: ({ className, children, ...props }) => (
            <footer className={cn("mt-8 pt-6 border-t border-border/50", className)} {...props}>
              {children}
            </footer>
          ),
          // Image styling
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt || ''}
              className="rounded-lg max-w-full h-auto my-4"
            />
          ),
          // Handle divs with custom classes (from Jekyll HTML and custom components)
          div: ({ className, children, node, ...props }: any) => {
            // Handle Callout component
            if (className?.includes('callout')) {
              const type = className.match(/callout-(\w+)/)?.[1] || 'info'
              const titleMatch = node?.properties?.['data-title']
              return (
                <Callout type={type as any} title={titleMatch}>
                  {children}
                </Callout>
              )
            }

            // Handle StatsGrid component
            if (className?.includes('stats-grid')) {
              // Stats will be passed via data attributes
              // For now, return a styled grid container
              return (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                  {children}
                </div>
              )
            }

            // Handle hero sections
            if (className?.includes('hero-section')) {
              return (
                <div className="flex items-center gap-4 p-6 mb-8 bg-card/50 border border-border rounded-lg">
                  {children}
                </div>
              )
            }

            // Handle resource grids
            if (className?.includes('resource-grid') || className?.includes('info-grid')) {
              return (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                  {children}
                </div>
              )
            }

            // Handle resource cards
            if (className?.includes('resource-card')) {
              return (
                <div className="p-4 bg-card/50 border border-border rounded-lg hover:border-accent/40 transition-colors">
                  {children}
                </div>
              )
            }

            // Handle accordion cards
            if (className?.includes('accordion-card') || className?.includes('category-card')) {
              return (
                <div className="p-4 bg-card/50 border border-border rounded-lg mb-4">
                  {children}
                </div>
              )
            }

            return <div className={className} {...props}>{children}</div>
          },
          // Definition list styling (for DevTalks timeline)
          dl: ({ children }) => (
            <dl className="space-y-6 my-6">
              {children}
            </dl>
          ),
          dt: ({ children }) => (
            <dt className="text-lg font-semibold text-foreground border-l-2 border-accent pl-4">
              {children}
            </dt>
          ),
          dd: ({ children }) => (
            <dd className="text-muted-foreground leading-relaxed mt-2 pl-4 ml-0">
              {children}
            </dd>
          ),
          // Article styling (for DevTalks)
          article: ({ className, children, ...props }) => (
            <article className={cn("space-y-8", className)} {...props}>
              {children}
            </article>
          ),
          // Header styling
          header: ({ className, children, ...props }) => (
            <header className={cn("mb-8 pb-6 border-b border-border/50", className)} {...props}>
              {children}
            </header>
          ),
          // Section styling
          section: ({ className, children, ...props }) => (
            <section className={cn("mb-8", className)} {...props}>
              {children}
            </section>
          ),
        }}
      >
        {cleanContent}
      </ReactMarkdown>
    </div>
  )
}
