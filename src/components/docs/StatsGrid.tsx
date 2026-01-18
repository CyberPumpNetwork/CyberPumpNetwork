import { type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Stat {
  label: string
  value: string
  icon?: LucideIcon
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
}

interface StatsGridProps {
  stats: Stat[]
  columns?: 2 | 3 | 4
  className?: string
}

export function StatsGrid({ stats, columns = 3, className }: StatsGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <div className={cn('grid gap-4 my-8', gridCols[columns], className)}>
      {stats.map((stat, index) => {
        const Icon = stat.icon

        return (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />

            <div className="relative">
              {Icon && (
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
              )}

              <div className="text-3xl font-bold mb-1 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                {stat.value}
              </div>

              <div className="text-sm text-muted-foreground mb-2">
                {stat.label}
              </div>

              {stat.trend && stat.trendValue && (
                <div className={cn(
                  'text-xs font-medium',
                  stat.trend === 'up' && 'text-green-500',
                  stat.trend === 'down' && 'text-red-500',
                  stat.trend === 'neutral' && 'text-muted-foreground'
                )}>
                  {stat.trend === 'up' && '↑ '}
                  {stat.trend === 'down' && '↓ '}
                  {stat.trendValue}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
