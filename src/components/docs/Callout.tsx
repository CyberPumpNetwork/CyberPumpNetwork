import { AlertCircle, Info, CheckCircle, AlertTriangle, Lightbulb, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

type CalloutType = 'info' | 'warning' | 'success' | 'danger' | 'tip' | 'note'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
  className?: string
}

const calloutConfig = {
  info: {
    icon: Info,
    className: 'bg-blue-500/10 border-blue-500/30 text-blue-500',
    iconBg: 'bg-blue-500/20'
  },
  warning: {
    icon: AlertTriangle,
    className: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500',
    iconBg: 'bg-yellow-500/20'
  },
  success: {
    icon: CheckCircle,
    className: 'bg-green-500/10 border-green-500/30 text-green-500',
    iconBg: 'bg-green-500/20'
  },
  danger: {
    icon: AlertCircle,
    className: 'bg-red-500/10 border-red-500/30 text-red-500',
    iconBg: 'bg-red-500/20'
  },
  tip: {
    icon: Lightbulb,
    className: 'bg-accent/10 border-accent/30 text-accent',
    iconBg: 'bg-accent/20'
  },
  note: {
    icon: Zap,
    className: 'bg-purple-500/10 border-purple-500/30 text-purple-500',
    iconBg: 'bg-purple-500/20'
  }
}

export function Callout({ type = 'info', title, children, className }: CalloutProps) {
  const config = calloutConfig[type]
  const Icon = config.icon

  return (
    <div className={cn(
      "my-6 rounded-lg border p-4 backdrop-blur-sm",
      config.className,
      className
    )}>
      <div className="flex gap-3">
        <div className={cn(
          "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
          config.iconBg
        )}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <div className="font-semibold mb-2">{title}</div>
          )}
          <div className="text-sm text-foreground/90 leading-relaxed [&>p]:my-2 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
