import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ResourceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  external?: boolean
  badge?: string
  className?: string
}

export function ResourceCard({
  icon: Icon,
  title,
  description,
  href,
  external = false,
  badge,
  className
}: ResourceCardProps) {
  const CardWrapper = external ? 'a' : Link
  const wrapperProps = external
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { to: href }

  return (
    <CardWrapper {...wrapperProps as any}>
      <Card className={cn(
        "group relative overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 h-full bg-card/50 backdrop-blur-sm",
        className
      )}>
        {/* Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardHeader className="relative">
          <div className="flex items-start justify-between gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-accent" />
            </div>
            {external && (
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            )}
          </div>
          <CardTitle className="text-lg group-hover:text-accent transition-colors pt-2">
            {title}
          </CardTitle>
          {badge && (
            <span className="inline-block px-2 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20 w-fit">
              {badge}
            </span>
          )}
        </CardHeader>

        <CardContent className="relative">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </CardWrapper>
  )
}
