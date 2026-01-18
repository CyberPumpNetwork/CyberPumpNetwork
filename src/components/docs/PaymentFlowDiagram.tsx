import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
} from '@xyflow/react'
import type { Node, Edge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Users, Building2, Network } from 'lucide-react'

function CustomNode({ data }: { data: any }) {
  const Icon = data.icon

  return (
    <div
      className={`
        px-6 py-4 rounded-lg border-2 shadow-lg min-w-[180px]
        ${data.color === 'accent' ? 'bg-accent/10 border-accent/50' : ''}
        ${data.color === 'blue' ? 'bg-blue-500/10 border-blue-500/50' : ''}
        ${data.color === 'green' ? 'bg-green-500/10 border-green-500/50' : ''}
      `}
    >
      <Handle type="target" position={Position.Top} />
      <div className="flex items-center gap-3 mb-2">
        {Icon && <Icon className="w-5 h-5" />}
        <div className="font-bold text-sm">{data.label}</div>
      </div>
      {data.sublabel && (
        <div className="text-xs text-muted-foreground mt-1">{data.sublabel}</div>
      )}
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

const nodeTypes = {
  custom: CustomNode,
}

export function PaymentFlowDiagram() {
  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'custom',
      position: { x: 250, y: 0 },
      data: {
        label: 'User Payment',
        sublabel: '100 CYPU or $20 USD',
        icon: Users,
        color: 'accent',
      },
    },
    {
      id: '2',
      type: 'custom',
      position: { x: 50, y: 150 },
      data: {
        label: '50 CYPU (50%)',
        sublabel: 'Company Treasury',
        icon: Building2,
        color: 'blue',
      },
    },
    {
      id: '3',
      type: 'custom',
      position: { x: 450, y: 150 },
      data: {
        label: '50 CYPU (50%)',
        sublabel: 'Node Rewards',
        icon: Network,
        color: 'green',
      },
    },
  ]

  const initialEdges: Edge[] = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      animated: true,
      style: { stroke: 'hsl(210 80% 60%)', strokeWidth: 2 },
      label: '50%',
      labelStyle: { fill: 'hsl(var(--foreground))', fontWeight: 600 },
    },
    {
      id: 'e1-3',
      source: '1',
      target: '3',
      animated: true,
      style: { stroke: 'hsl(120 60% 50%)', strokeWidth: 2 },
      label: '50%',
      labelStyle: { fill: 'hsl(var(--foreground))', fontWeight: 600 },
    },
  ]

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  return (
    <div className="h-[300px] w-full rounded-lg border border-border overflow-hidden bg-card/50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
      >
        <Controls className="bg-card border border-border rounded-lg" />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} color="hsl(var(--border))" />
      </ReactFlow>
    </div>
  )
}

// Network Topology Flow
export function NetworkTopologyFlow() {
  const initialNodes: Node[] = [
    {
      id: 'layer1',
      type: 'custom',
      position: { x: 200, y: 0 },
      data: {
        label: 'LAYER 1: Godfather Nodes',
        sublabel: 'Broadcasters - libp2p P2P',
        color: 'accent',
      },
    },
    {
      id: 'layer2',
      type: 'custom',
      position: { x: 200, y: 120 },
      data: {
        label: 'LAYER 2: Worker Nodes',
        sublabel: 'Validators & Processors',
        color: 'blue',
      },
    },
    {
      id: 'layer3',
      type: 'custom',
      position: { x: 200, y: 240 },
      data: {
        label: 'LAYER 3: kas.me Platform',
        sublabel: 'End Users - React Dashboard',
        color: 'green',
      },
    },
  ]

  const initialEdges: Edge[] = [
    {
      id: 'e1-2',
      source: 'layer1',
      target: 'layer2',
      animated: true,
      style: { stroke: 'hsl(var(--accent))', strokeWidth: 2 },
      label: 'Gossipsub Data',
    },
    {
      id: 'e2-3',
      source: 'layer2',
      target: 'layer3',
      animated: true,
      style: { stroke: 'hsl(120 60% 50%)', strokeWidth: 2 },
      label: 'REST API',
    },
  ]

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  return (
    <div className="h-[400px] w-full rounded-lg border border-border overflow-hidden bg-card/50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
      >
        <Controls className="bg-card border border-border rounded-lg" />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} color="hsl(var(--border))" />
      </ReactFlow>
    </div>
  )
}
