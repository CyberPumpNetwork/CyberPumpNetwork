import { useState } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

// Import common languages
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python'
import rust from 'react-syntax-highlighter/dist/esm/languages/hljs/rust'
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json'
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash'
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql'
import markdown from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown'

// Register languages
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('python', python)
SyntaxHighlighter.registerLanguage('rust', rust)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('sql', sql)
SyntaxHighlighter.registerLanguage('markdown', markdown)

interface CodeBlockProps {
  code: string
  language?: string
  inline?: boolean
  className?: string
}

export function CodeBlock({ code, language = 'text', inline = false, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Inline code
  if (inline) {
    return (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-accent">
        {code}
      </code>
    )
  }

  // Block code with syntax highlighting
  return (
    <div className={cn("relative group mb-4", className)}>
      {/* Language badge and copy button */}
      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
        {language && language !== 'text' && (
          <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-mono">
            {language}
          </span>
        )}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all opacity-0 group-hover:opacity-100"
          title="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Code block */}
      <div className="rounded-lg overflow-hidden border border-border bg-muted/50">
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
          showLineNumbers={code.split('\n').length > 5}
          wrapLines
          lineNumberStyle={{
            minWidth: '2.5em',
            paddingRight: '1em',
            color: '#6b7280',
            userSelect: 'none',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
