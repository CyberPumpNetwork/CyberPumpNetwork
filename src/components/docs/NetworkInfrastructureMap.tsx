import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  getSmoothStepPath,
  type EdgeProps,
} from '@xyflow/react'
import type { Node, Edge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Server, Cpu, Zap, Network, Globe, Database, Users, Workflow, Sun, Leaf, Activity } from 'lucide-react'

// ============================================================================
// NETWORK INFRASTRUCTURE VISUALIZATION
// ============================================================================

// === GRID CONFIGURATION ===
const GRID = {
  COLUMN_WIDTH: 220,      // Horizontal spacing between nodes
  LAYER_HEIGHT: 160,      // Vertical spacing between layers
  START_X: 0,             // Starting X position
}

// === LAYER CONFIGURATION ===
const LAYERS = {
  users: { y: 0, color: 'rgb(168 85 247)', label: 'Users', bgClass: 'bg-purple-500/10 border-purple-500' },
  frontend: { y: 160, color: 'rgb(59 130 246)', label: 'Frontend & API', bgClass: 'bg-blue-500/10 border-blue-500' },
  workers: { y: 320, color: 'rgb(34 197 94)', label: 'Worker Mesh', bgClass: 'bg-green-500/10 border-green-500' },
  godfather: { y: 480, color: 'rgb(20, 184, 166)', label: 'Godfather Layer', bgClass: 'bg-accent/10 border-accent' },
  mining: { y: 640, color: 'rgb(234 179 8)', label: 'Mining & Energy', bgClass: 'bg-yellow-500/10 border-yellow-500' },
} as const

type LayerType = keyof typeof LAYERS

// === NODE DATA ===
interface InfraNode {
  id: string
  column: number
  layer: LayerType
  label: string
  sublabel?: string
  icon: 'server' | 'cpu' | 'zap' | 'network' | 'globe' | 'database' | 'users' | 'workflow' | 'sun' | 'leaf' | 'activity'
  status?: 'live' | 'testing' | 'testing-active' | 'planned'
}

interface InfraConnection {
  from: string
  to: string
  animated?: boolean
  label?: string
  type?: 'data' | 'energy' | 'revenue'
  sourceHandle?: 'top' | 'right' | 'bottom' | 'left'
  targetHandle?: 'top' | 'right' | 'bottom' | 'left'
}

// === INFRASTRUCTURE DATA ===
const INFRA_NODES: InfraNode[] = [
  // === LAYER 5: USERS (TOP) ===
  { id: 'user-explorer', column: 0, layer: 'users', label: 'Explorer Users', sublabel: 'Basic Queries', icon: 'users' },
  { id: 'user-intel', column: 2, layer: 'users', label: 'Intelligence Users', sublabel: 'ML Analytics', icon: 'users' },
  { id: 'user-dev', column: 4, layer: 'users', label: 'API Developers', sublabel: 'Direct Access', icon: 'users' },

  // === LAYER 4: FRONTEND & API ===
  { id: 'dashboard', column: 1, layer: 'frontend', label: 'React Dashboard', sublabel: 'kas.me / localhost', icon: 'globe', status: 'live' },
  { id: 'public-api', column: 3, layer: 'frontend', label: 'Public REST API', sublabel: 'Port 8080', icon: 'database', status: 'testing' },

  // === LAYER 3: WORKER MESH ===
  { id: 'worker-light', column: 0, layer: 'workers', label: 'Lightweight Workers', sublabel: 'VPS Mode', icon: 'network', status: 'testing' },
  { id: 'worker-full', column: 2, layer: 'workers', label: 'Full Node Workers', sublabel: 'Colocation Mode', icon: 'server', status: 'testing-active' },
  { id: 'worker-hybrid', column: 4, layer: 'workers', label: 'Hybrid Workers', sublabel: 'BFT Mode', icon: 'workflow', status: 'planned' },

  // === LAYER 2: GODFATHER BACKBONE ===
  { id: 'godfather-primary', column: 0, layer: 'godfather', label: 'Primary Godfather', sublabel: 'Kaspa Archive Node', icon: 'server', status: 'live' },
  { id: 'godfather-ml', column: 1.5, layer: 'godfather', label: 'ML Training Node', sublabel: 'GPU Accelerated', icon: 'activity', status: 'testing-active' },
  { id: 'godfather-backup', column: 3, layer: 'godfather', label: 'Backup Godfather', sublabel: 'Failover Node', icon: 'server', status: 'planned' },
  { id: 'price-aggregator', column: 4.5, layer: 'godfather', label: 'Price Aggregator', sublabel: 'CEX API Polling', icon: 'activity', status: 'live' },

  // === LAYER 1: MINING & ENERGY ===
  { id: 'mining-rigs', column: 0, layer: 'mining', label: 'ASIC Mining Rigs', sublabel: 'KAS Revenue', icon: 'cpu', status: 'live' },
  { id: 'solar-panels', column: 2, layer: 'mining', label: 'Solar Installation', sublabel: 'Energy Generation', icon: 'sun', status: 'live' },
  { id: 'greenhouse', column: 4, layer: 'mining', label: 'Greenhouse', sublabel: 'Heat Recovery', icon: 'leaf', status: 'testing-active' },
]

const INFRA_CONNECTIONS: InfraConnection[] = [
  // === USER → FRONTEND ===
  { from: 'user-explorer', to: 'dashboard', sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'user-intel', to: 'dashboard', sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'user-dev', to: 'public-api', sourceHandle: 'bottom', targetHandle: 'top' },

  // === FRONTEND → WORKERS ===
  { from: 'dashboard', to: 'worker-light', sourceHandle: 'bottom', targetHandle: 'top', type: 'data' },
  { from: 'dashboard', to: 'worker-full', sourceHandle: 'bottom', targetHandle: 'top', type: 'data' },
  { from: 'public-api', to: 'worker-full', sourceHandle: 'bottom', targetHandle: 'top', type: 'data' },
  { from: 'public-api', to: 'worker-hybrid', sourceHandle: 'bottom', targetHandle: 'top', type: 'data' },

  // === WORKERS ↔ GODFATHERS (P2P MESH) ===
  { from: 'godfather-primary', to: 'worker-light', sourceHandle: 'top', targetHandle: 'bottom', animated: true, type: 'data' },
  { from: 'godfather-primary', to: 'worker-full', sourceHandle: 'top', targetHandle: 'bottom', animated: true, type: 'data' },
  { from: 'godfather-ml', to: 'worker-full', sourceHandle: 'top', targetHandle: 'bottom', animated: true, type: 'data' },
  { from: 'godfather-ml', to: 'worker-hybrid', sourceHandle: 'top', targetHandle: 'bottom', animated: true, type: 'data' },
  { from: 'godfather-backup', to: 'worker-hybrid', sourceHandle: 'top', targetHandle: 'bottom', animated: true, type: 'data' },
  { from: 'price-aggregator', to: 'worker-light', sourceHandle: 'top', targetHandle: 'bottom', animated: true, type: 'data' },
  { from: 'price-aggregator', to: 'worker-full', sourceHandle: 'top', targetHandle: 'bottom', animated: true, type: 'data' },

  // === GODFATHER INTERNAL CONNECTIONS ===
  { from: 'godfather-primary', to: 'godfather-ml', sourceHandle: 'right', targetHandle: 'left', type: 'data' },
  { from: 'godfather-primary', to: 'godfather-backup', sourceHandle: 'right', targetHandle: 'left', type: 'data' },
  { from: 'godfather-ml', to: 'godfather-backup', sourceHandle: 'right', targetHandle: 'left', type: 'data' },

  // === MINING → GODFATHER (REVENUE FLOW) ===
  { from: 'mining-rigs', to: 'godfather-primary', sourceHandle: 'top', targetHandle: 'bottom', type: 'revenue' },

  // === ENERGY LOOP ===
  { from: 'solar-panels', to: 'mining-rigs', sourceHandle: 'left', targetHandle: 'right', type: 'energy', animated: true },
  { from: 'mining-rigs', to: 'greenhouse', sourceHandle: 'right', targetHandle: 'left', type: 'energy', animated: true },
  { from: 'greenhouse', to: 'solar-panels', sourceHandle: 'top', targetHandle: 'bottom', type: 'revenue' },
]

// === POSITION CALCULATOR ===
function calculatePosition(node: InfraNode) {
  const x = GRID.START_X + node.column * GRID.COLUMN_WIDTH
  const y = LAYERS[node.layer].y
  return { x, y }
}

// === ICON COMPONENT ===
function NodeIcon({ icon, className }: { icon: InfraNode['icon']; className?: string }) {
  const iconProps = { className: className || 'w-5 h-5' }
  switch (icon) {
    case 'server': return <Server {...iconProps} />
    case 'cpu': return <Cpu {...iconProps} />
    case 'zap': return <Zap {...iconProps} />
    case 'network': return <Network {...iconProps} />
    case 'globe': return <Globe {...iconProps} />
    case 'database': return <Database {...iconProps} />
    case 'users': return <Users {...iconProps} />
    case 'workflow': return <Workflow {...iconProps} />
    case 'sun': return <Sun {...iconProps} />
    case 'leaf': return <Leaf {...iconProps} />
    case 'activity': return <Activity {...iconProps} />
    default: return <Server {...iconProps} />
  }
}

// === CUSTOM NODE COMPONENT ===
function InfrastructureNode({ data }: { data: { label: string; sublabel?: string; icon: InfraNode['icon']; layer: LayerType; status?: string } }) {
  const layerConfig = LAYERS[data.layer]

  return (
    <div className={`rounded-lg border-2 ${layerConfig.bgClass} backdrop-blur-sm px-3 py-2 shadow-md min-w-[140px] max-w-[180px]`}>
      <Handle type="target" position={Position.Top} id="top" className="w-2 h-2" />
      <Handle type="source" position={Position.Top} id="top" className="w-2 h-2" style={{ opacity: 0 }} />

      <Handle type="target" position={Position.Left} id="left" className="w-2 h-2" />
      <Handle type="source" position={Position.Left} id="left" className="w-2 h-2" style={{ opacity: 0 }} />

      <div className="flex items-center gap-2 mb-1">
        <NodeIcon icon={data.icon} className="w-4 h-4 text-muted-foreground" />
        {data.status && (
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              data.status === 'live'
                ? 'bg-green-500'
                : data.status === 'testing'
                  ? 'bg-yellow-500'
                  : data.status === 'testing-active'
                    ? '' // Animation handles the color
                    : 'bg-gray-500'
            }`}
            title={data.status === 'testing-active' ? 'Testing (Active Development)' : data.status}
            style={data.status === 'testing-active' ? {
              animation: 'testingActive 1.5s ease-in-out infinite',
              backgroundColor: 'rgb(234 179 8)', // Yellow base
            } : undefined}
          />
        )}
      </div>
      <div className="text-sm font-semibold leading-tight">{data.label}</div>
      {data.sublabel && (
        <div className="text-xs text-muted-foreground mt-0.5">{data.sublabel}</div>
      )}

      <Handle type="target" position={Position.Right} id="right" className="w-2 h-2" />
      <Handle type="source" position={Position.Right} id="right" className="w-2 h-2" style={{ opacity: 0 }} />

      <Handle type="target" position={Position.Bottom} id="bottom" className="w-2 h-2" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="w-2 h-2" style={{ opacity: 0 }} />
    </div>
  )
}

// === CUSTOM EDGE COMPONENT ===
function InfraEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })

  const connectionType = data?.type as string || 'data'
  const typeStyles: Record<string, React.CSSProperties> = {
    data: { stroke: 'rgb(59 130 246)', strokeWidth: 2 },
    energy: { stroke: 'rgb(234 179 8)', strokeWidth: 2.5, strokeDasharray: '8,4' },
    revenue: { stroke: 'rgb(34 197 94)', strokeWidth: 2, strokeDasharray: '5,5' },
  }

  return (
    <path
      id={id}
      style={{ ...typeStyles[connectionType], ...style }}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
    />
  )
}

// === NODE GENERATOR ===
function generateNodes(nodes: InfraNode[]): Node[] {
  return nodes.map(node => ({
    id: node.id,
    type: 'infrastructure',
    position: calculatePosition(node),
    data: {
      label: node.label,
      sublabel: node.sublabel,
      icon: node.icon,
      layer: node.layer,
      status: node.status,
    },
  }))
}

// === EDGE GENERATOR ===
function generateEdges(connections: InfraConnection[]): Edge[] {
  return connections.map(connection => ({
    id: `e-${connection.from}-${connection.to}`,
    source: connection.from,
    target: connection.to,
    sourceHandle: connection.sourceHandle,
    targetHandle: connection.targetHandle,
    type: 'infraEdge',
    animated: connection.animated || false,
    data: { type: connection.type || 'data' },
  }))
}

const nodeTypes = {
  infrastructure: InfrastructureNode,
}

const edgeTypes = {
  infraEdge: InfraEdge,
}

// === MAIN COMPONENT ===
export function NetworkInfrastructureMap() {
  const initialNodes = generateNodes(INFRA_NODES)
  const initialEdges = generateEdges(INFRA_CONNECTIONS)

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  return (
    <div className="w-full h-[700px] bg-background rounded-lg border relative">
      {/* CSS Animation for testing-active status: Yellow base with green flash */}
      <style>{`
        @keyframes testingActive {
          0%, 70%, 100% {
            background-color: rgb(234 179 8);
            box-shadow: none;
          }
          35% {
            background-color: rgb(34 197 94);
            box-shadow: 0 0 6px 2px rgba(34, 197, 94, 0.6);
          }
        }
      `}</style>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        minZoom={0.3}
        maxZoom={1.5}
        defaultViewport={{ x: 150, y: 50, zoom: 0.85 }}
        defaultEdgeOptions={{
          type: 'infraEdge',
          style: { strokeWidth: 2 },
        }}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
        <Controls />
      </ReactFlow>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg border p-4 shadow-lg">
        <div className="text-sm font-semibold mb-3">Legend</div>

        {/* Layers */}
        <div className="space-y-1.5 text-xs mb-3">
          <div className="font-medium text-muted-foreground mb-1">Layers</div>
          {Object.entries(LAYERS).reverse().map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded border"
                style={{ backgroundColor: config.color + '20', borderColor: config.color }}
              />
              <span>{config.label}</span>
            </div>
          ))}
        </div>

        {/* Connection Types */}
        <div className="space-y-1.5 text-xs mb-3">
          <div className="font-medium text-muted-foreground mb-1">Connections</div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5 bg-blue-500" />
            <span>Data Flow</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5 bg-yellow-500" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgb(234 179 8), rgb(234 179 8) 8px, transparent 8px, transparent 12px)' }} />
            <span>Energy Flow</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5 bg-green-500" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgb(34 197 94), rgb(34 197 94) 5px, transparent 5px, transparent 10px)' }} />
            <span>Revenue Flow</span>
          </div>
        </div>

        {/* Status */}
        <div className="space-y-1.5 text-xs">
          <div className="font-medium text-muted-foreground mb-1">Status</div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span>Live</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <span>Testing</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ animation: 'testingActive 1.5s ease-in-out infinite', backgroundColor: 'rgb(234 179 8)' }}
            />
            <span>Testing (Active)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />
            <span>Planned</span>
          </div>
        </div>
      </div>

      {/* Drag Hint */}
      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg border px-3 py-2 text-xs text-muted-foreground">
        Drag nodes to explore • Scroll to zoom
      </div>
    </div>
  )
}
