import { useEffect, useRef, useState, useCallback } from 'react'

interface DAGBlock {
  id: string
  height: number
  heightGroupIndex: number
  color: string
  isInVirtualSelectedParentChain: boolean
}

interface DAGEdge {
  fromBlockId: string
  toBlockId: string
}

interface DAGData {
  blocks: DAGBlock[]
  edges: DAGEdge[]
}

// Render position for a block
interface BlockPosition {
  id: string
  x: number
  y: number
  color: string
  isMain: boolean
  opacity: number
}

export function LiveDAGBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dagData, setDagData] = useState<DAGData | null>(null)
  const animationRef = useRef<number>()
  const offsetRef = useRef(0)

  // Fetch DAG data
  const fetchDAG = useCallback(async () => {
    try {
      const response = await fetch('https://kgi.kaspad.net:3147/head?heightDifference=15')
      const data = await response.json()
      setDagData(data)
    } catch (error) {
      console.warn('DAG fetch failed, using fallback pattern')
    }
  }, [])

  // Initial fetch and polling
  useEffect(() => {
    fetchDAG()
    const interval = setInterval(fetchDAG, 5000) // Refresh every 5s for new blocks
    return () => clearInterval(interval)
  }, [fetchDAG])

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animation loop - smoother with smaller increments
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime

      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      // Very smooth scroll - 30 pixels per second, frame-rate independent
      offsetRef.current += deltaTime * 0.03

      if (dagData && dagData.blocks.length > 0) {
        renderDAG(ctx, dagData, rect.width, rect.height, offsetRef.current)
      } else {
        // Fallback: procedural DAG pattern
        renderFallbackDAG(ctx, rect.width, rect.height, offsetRef.current)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dagData])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  )
}

function renderDAG(
  ctx: CanvasRenderingContext2D,
  data: DAGData,
  width: number,
  height: number,
  offset: number
) {
  const { blocks, edges } = data

  // Find height range
  const heights = blocks.map(b => b.height)
  const minHeight = Math.min(...heights)
  const maxHeight = Math.max(...heights)
  const heightRange = maxHeight - minHeight || 1

  // Calculate positions - spread across canvas with offset for animation
  const blockPositions = new Map<string, BlockPosition>()
  const nodeSpacingY = 40

  // Animation: blocks flow continuously from RIGHT to LEFT
  // No wrapping - just continuous flow, blocks fade in/out at edges
  const spreadWidth = width * 1.2 // Spread blocks across this width

  blocks.forEach(block => {
    const normalizedHeight = (block.height - minHeight) / heightRange
    // Base X: distribute blocks across the spread width based on their height
    // Higher height (newer) = more to the right initially
    const baseX = normalizedHeight * spreadWidth

    // Continuous scroll: subtract offset, no modulo for smooth flow
    // Add width to start blocks off-screen right, then they flow left
    const x = baseX - offset + width * 0.9

    // Y based on heightGroupIndex, centered vertically with some spread
    const groupCount = blocks.filter(b => b.height === block.height).length
    const centerY = height / 2
    const y = centerY + (block.heightGroupIndex - groupCount / 2) * nodeSpacingY

    // Smooth fade at edges - wider fade zones for smoother appearance
    const fadeLeft = Math.max(0, Math.min(1, (x + 100) / 200))
    const fadeRight = Math.max(0, Math.min(1, (width - x + 100) / 200))
    const opacity = Math.min(fadeLeft, fadeRight)

    blockPositions.set(block.id, {
      id: block.id,
      x,
      y,
      color: block.color,
      isMain: block.isInVirtualSelectedParentChain,
      opacity
    })
  })

  // Draw edges first (behind nodes) - subtle gray lines
  ctx.lineCap = 'round'
  edges.forEach(edge => {
    const from = blockPositions.get(edge.fromBlockId)
    const to = blockPositions.get(edge.toBlockId)
    if (!from || !to) return
    if (from.opacity < 0.05 && to.opacity < 0.05) return

    const edgeOpacity = Math.min(from.opacity, to.opacity) * 0.15
    const isMainEdge = from.isMain && to.isMain

    ctx.beginPath()
    ctx.moveTo(from.x, from.y)

    // Curved line for DAG feel
    const midX = (from.x + to.x) / 2
    ctx.quadraticCurveTo(midX, from.y, to.x, to.y)

    // Main chain edges slightly more visible with turquoise tint
    if (isMainEdge) {
      ctx.strokeStyle = `rgba(20, 184, 166, ${edgeOpacity * 1.5})`
    } else {
      ctx.strokeStyle = `rgba(148, 163, 184, ${edgeOpacity})`
    }
    ctx.lineWidth = isMainEdge ? 1 : 0.5
    ctx.stroke()
  })

  // Draw nodes - turquoise for main chain, subtle gray for others
  blockPositions.forEach(pos => {
    if (pos.opacity < 0.05) return

    const radius = pos.isMain ? 2.5 : 1.5
    const nodeOpacity = pos.opacity * (pos.isMain ? 0.5 : 0.2)

    ctx.beginPath()
    ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2)

    if (pos.isMain) {
      // Main chain: Kaspa turquoise
      ctx.fillStyle = `rgba(20, 184, 166, ${nodeOpacity})`
    } else {
      // Side blocks: very subtle gray (not blue!)
      ctx.fillStyle = `rgba(148, 163, 184, ${nodeOpacity * 0.5})`
    }

    ctx.fill()

    // Very subtle glow for main chain nodes only
    if (pos.isMain && pos.opacity > 0.4) {
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, radius + 2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(20, 184, 166, ${nodeOpacity * 0.1})`
      ctx.fill()
    }
  })
}

// Fallback when API is unavailable - procedural DAG pattern
function renderFallbackDAG(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  offset: number
) {
  const colSpacing = 55
  const cols = Math.ceil((width * 1.5) / colSpacing) + 4
  const centerY = height / 2

  // Generate pseudo-random but stable positions
  const nodes: { x: number; y: number; isMain: boolean; col: number }[] = []

  for (let col = 0; col < cols; col++) {
    // Deterministic "random" based on column
    const seed = Math.sin(col * 12.9898) * 43758.5453
    const rowCount = 1 + Math.floor(Math.abs(seed - Math.floor(seed)) * 3)

    for (let row = 0; row < rowCount; row++) {
      // Continuous flow from right to left
      const baseX = col * colSpacing
      const x = baseX - offset + width * 0.8

      // Small deterministic variation
      const variation = Math.sin(col * 0.7 + row * 2.1) * 8
      const y = centerY + (row - rowCount / 2) * 38 + Math.cos(col * 0.5) * 15 + variation
      const isMain = row === Math.floor(rowCount / 2)
      nodes.push({ x, y, isMain, col })
    }
  }

  // Sort by x position for proper connection drawing
  nodes.sort((a, b) => a.x - b.x)

  // Draw connections - subtle gray with turquoise for main chain
  ctx.lineCap = 'round'
  for (let i = 1; i < nodes.length; i++) {
    const from = nodes[i]
    const targetIdx = Math.max(0, i - 1 - Math.floor((i * 0.3) % 3))
    const to = nodes[targetIdx]

    const fadeLeft = Math.max(0, Math.min(1, (from.x + 50) / 150))
    const fadeRight = Math.max(0, Math.min(1, (width - from.x + 50) / 150))
    const opacity = Math.min(fadeLeft, fadeRight) * 0.12
    const isMainEdge = from.isMain && to.isMain

    if (opacity < 0.02) continue

    ctx.beginPath()
    ctx.moveTo(from.x, from.y)
    const midX = (from.x + to.x) / 2
    ctx.quadraticCurveTo(midX, from.y, to.x, to.y)

    if (isMainEdge) {
      ctx.strokeStyle = `rgba(20, 184, 166, ${opacity * 1.5})`
      ctx.lineWidth = 1
    } else {
      ctx.strokeStyle = `rgba(148, 163, 184, ${opacity})`
      ctx.lineWidth = 0.5
    }
    ctx.stroke()
  }

  // Draw nodes - turquoise main chain, gray others
  nodes.forEach(node => {
    const fadeLeft = Math.max(0, Math.min(1, (node.x + 50) / 150))
    const fadeRight = Math.max(0, Math.min(1, (width - node.x + 50) / 150))
    const opacity = Math.min(fadeLeft, fadeRight)

    if (opacity < 0.05) return

    const radius = node.isMain ? 2.5 : 1.5
    const nodeOpacity = opacity * (node.isMain ? 0.4 : 0.15)

    ctx.beginPath()
    ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)

    if (node.isMain) {
      ctx.fillStyle = `rgba(20, 184, 166, ${nodeOpacity})`
    } else {
      ctx.fillStyle = `rgba(148, 163, 184, ${nodeOpacity})`
    }
    ctx.fill()
  })
}
