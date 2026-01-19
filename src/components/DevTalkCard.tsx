import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { MessageSquare, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DevTalkCardProps {
  number: number
  title: string
  subtitle: string
  date: string
  excerpt: string
  slug: string
  featured?: boolean
}

export function DevTalkCard({
  number,
  title,
  subtitle,
  date,
  excerpt,
  slug,
  featured = false
}: DevTalkCardProps) {
  return (
    <Link to={`/docs/${slug}`}>
      <Card
        className={cn(
          "group hover:border-accent/60 transition-all duration-300",
          featured && "border-accent/40 bg-accent/5"
        )}
      >
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <Badge
              className={cn(
                "bg-accent/10 text-accent hover:bg-accent/20",
                featured && "bg-accent/20"
              )}
            >
              <MessageSquare className="w-3 h-3 mr-1" />
              Dev Talk #{number}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
          </div>
          <CardTitle className="text-xl group-hover:text-accent transition-colors">
            {title}
          </CardTitle>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">
              {subtitle}
            </p>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {excerpt}
          </p>
          <div className="mt-4 flex items-center text-sm text-accent font-medium group-hover:translate-x-1 transition-transform">
            Read more →
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

interface DevTalkTimelineProps {
  devTalks: Array<{
    number: number
    title: string
    subtitle: string
    date: string
    excerpt: string
    slug: string
  }>
}

export function DevTalkTimeline({ devTalks }: DevTalkTimelineProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
          <MessageSquare className="w-3 h-3 mr-1" />
          Behind the Scenes
        </Badge>
        <h2 className="text-3xl font-bold mb-3">Dev Talks</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Personal insights, journey reflections, and the story behind kas.me – unfiltered thoughts from the founder.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border" />

        {/* Timeline items */}
        <div className="space-y-12">
          {devTalks.map((talk, index) => (
            <div
              key={talk.number}
              className={cn(
                "relative",
                index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
              )}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />

              {/* Card */}
              <div className={cn(
                "ml-8 md:ml-0",
                index === 0 && "mt-0"
              )}>
                <DevTalkCard
                  {...talk}
                  featured={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
