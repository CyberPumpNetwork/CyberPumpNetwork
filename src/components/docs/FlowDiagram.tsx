import { ArrowRight, ArrowDown, Server, CheckCircle } from 'lucide-react'

interface FlowNode {
  id: string
  label: string
  sublabel?: string
  icon?: React.ComponentType<{ className?: string }>
  color: 'accent' | 'blue' | 'green' | 'purple' | 'red' | 'yellow'
  variant?: 'default' | 'large' | 'small'
}

interface FlowConnection {
  from: string
  to: string
  label?: string
  split?: boolean // For forked connections
}

interface FlowDiagramProps {
  nodes: FlowNode[]
  connections: FlowConnection[]
  direction?: 'horizontal' | 'vertical'
  title?: string
}

const colorMap = {
  accent: 'bg-accent/20 border-accent/30 text-accent',
  blue: 'bg-blue-500/20 border-blue-500/30 text-blue-500',
  green: 'bg-green-500/20 border-green-500/30 text-green-500',
  purple: 'bg-purple-500/20 border-purple-500/30 text-purple-500',
  red: 'bg-red-500/20 border-red-500/30 text-red-500',
  yellow: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-500',
}

const sizeMap = {
  small: 'px-3 py-2 text-xs',
  default: 'px-4 py-3 text-sm',
  large: 'px-6 py-4 text-base',
}

export function FlowDiagram({ nodes, connections, direction = 'horizontal', title }: FlowDiagramProps) {
  const isHorizontal = direction === 'horizontal'
  const Arrow = isHorizontal ? ArrowRight : ArrowDown

  return (
    <div className="space-y-4">
      {title && (
        <h4 className="font-semibold text-muted-foreground text-sm">{title}</h4>
      )}
      <div className={`flex ${isHorizontal ? 'flex-row items-center' : 'flex-col items-center'} gap-3 flex-wrap justify-center`}>
        {nodes.map((node, idx) => {
          const Icon = node.icon
          const connection = connections.find((c) => c.from === node.id)

          return (
            <div key={node.id} className="flex items-center gap-3">
              <div
                className={`
                  rounded-lg border-2 ${colorMap[node.color]}
                  ${sizeMap[node.variant || 'default']}
                  flex items-center gap-3 font-semibold
                  transition-all hover:scale-105 hover:shadow-lg
                `}
              >
                {Icon && <Icon className="w-5 h-5" />}
                <div>
                  <div>{node.label}</div>
                  {node.sublabel && (
                    <div className="text-xs text-muted-foreground font-normal mt-0.5">
                      {node.sublabel}
                    </div>
                  )}
                </div>
              </div>

              {connection && idx < nodes.length - 1 && (
                <div className="flex flex-col items-center gap-1">
                  <Arrow className="w-5 h-5 text-muted-foreground" />
                  {connection.label && (
                    <span className="text-xs text-muted-foreground font-medium">
                      {connection.label}
                    </span>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Specialized component for split flows (1 input -> 2 outputs)
interface SplitFlowProps {
  input: FlowNode
  outputs: FlowNode[]
  title?: string
}

export function SplitFlow({ input, outputs, title }: SplitFlowProps) {
  const InputIcon = input.icon

  return (
    <div className="space-y-6">
      {title && (
        <h4 className="font-semibold text-muted-foreground text-sm text-center">{title}</h4>
      )}

      {/* Input Node */}
      <div className="flex justify-center">
        <div
          className={`
            rounded-lg border-2 ${colorMap[input.color]}
            px-6 py-4 text-base
            flex items-center gap-3 font-semibold
            transition-all hover:scale-105 hover:shadow-lg
          `}
        >
          {InputIcon && <InputIcon className="w-6 h-6" />}
          <div>
            <div>{input.label}</div>
            {input.sublabel && (
              <div className="text-xs text-muted-foreground font-normal mt-0.5">
                {input.sublabel}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Arrow Down */}
      <div className="flex justify-center">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>

      {/* Split Arrows */}
      <div className="flex justify-center gap-8">
        {outputs.map((output, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3">
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
            <div
              className={`
                rounded-lg border-2 ${colorMap[output.color]}
                px-4 py-3 text-sm
                flex flex-col items-center gap-2 font-semibold
                transition-all hover:scale-105 hover:shadow-lg
                min-w-[180px]
              `}
            >
              {output.icon && <output.icon className="w-5 h-5" />}
              <div className="text-center">
                <div>{output.label}</div>
                {output.sublabel && (
                  <div className="text-xs text-muted-foreground font-normal mt-1">
                    {output.sublabel}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Specialized component for comparison (OLD vs NEW)
interface ComparisonFlowProps {
  oldFlow: {
    title: string
    nodes: FlowNode[]
    problem: string
  }
  newFlow: {
    title: string
    nodes: FlowNode[]
    benefit: string
  }
}

export function ComparisonFlow({ oldFlow, newFlow }: ComparisonFlowProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* OLD Flow */}
      <div className="relative overflow-hidden rounded-lg border border-red-500/30 bg-gradient-to-br from-red-500/5 to-transparent p-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-full" />
        <div className="relative space-y-4">
          <h3 className="text-xl font-bold text-red-500">{oldFlow.title}</h3>

          <div className="space-y-3">
            {oldFlow.nodes.map((node, idx) => {
              const Icon = node.icon
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded ${colorMap[node.color]} flex items-center justify-center`}>
                    {Icon && <Icon className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{node.label}</p>
                    {node.sublabel && (
                      <p className="text-xs text-muted-foreground">{node.sublabel}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="pt-3 border-t border-red-500/20">
            <p className="text-sm text-red-500 font-semibold">❌ Problem: {oldFlow.problem}</p>
          </div>
        </div>
      </div>

      {/* NEW Flow */}
      <div className="relative overflow-hidden rounded-lg border border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent p-6">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full" />
        <div className="relative space-y-4">
          <h3 className="text-xl font-bold text-green-500">{newFlow.title}</h3>

          <div className="space-y-3">
            {newFlow.nodes.map((node, idx) => {
              const Icon = node.icon
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded ${colorMap[node.color]} flex items-center justify-center`}>
                    {Icon && <Icon className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{node.label}</p>
                    {node.sublabel && (
                      <p className="text-xs text-muted-foreground">{node.sublabel}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="pt-3 border-t border-green-500/20">
            <p className="text-sm text-green-500 font-semibold">✓ Benefit: {newFlow.benefit}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Specialized component for layered architecture (like CPN network)
interface LayerProps {
  title: string
  subtitle?: string
  features: string[]
  color: 'accent' | 'blue' | 'green' | 'purple' | 'red' | 'yellow'
}

interface LayeredArchitectureProps {
  layers: LayerProps[]
  title?: string
}

export function LayeredArchitecture({ layers, title }: LayeredArchitectureProps) {
  return (
    <div className="space-y-6">
      {title && (
        <h4 className="font-semibold text-muted-foreground text-sm text-center">{title}</h4>
      )}

      {layers.map((layer, idx) => (
        <div key={idx} className="space-y-3">
          {/* Layer Card */}
          <div className={`relative overflow-hidden rounded-lg border-2 ${colorMap[layer.color].replace('bg-', 'border-').replace('/20', '/30')} bg-gradient-to-br ${colorMap[layer.color].replace('border-', 'from-').replace('/30', '/10')} to-transparent p-6`}>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${colorMap[layer.color]} flex items-center justify-center`}>
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">{layer.title}</h4>
                  {layer.subtitle && (
                    <p className="text-sm text-muted-foreground">{layer.subtitle}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-2 pt-2">
                {layer.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow Down (except for last layer) */}
          {idx < layers.length - 1 && (
            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
