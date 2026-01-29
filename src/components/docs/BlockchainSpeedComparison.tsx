import { useState, useEffect, useRef } from 'react'
import { Zap, Activity, Info } from 'lucide-react'

interface ChainData {
  name: string
  color: string
  bps: number // blocks per second
  category: 'ultra-fast' | 'fast' | 'classic'
}

const chains: ChainData[] = [
  { name: 'Kaspa', color: '#49D9D2', bps: 100, category: 'ultra-fast' },
  { name: 'Solana', color: '#14F195', bps: 2.5, category: 'fast' }, // ~0.4s block time
  { name: 'BNB Chain', color: '#F3BA2F', bps: 0.33, category: 'fast' }, // ~3s block time
  { name: 'Avalanche', color: '#E84142', bps: 0.5, category: 'fast' }, // ~2s block time
  { name: 'Polygon', color: '#8247E5', bps: 0.5, category: 'fast' }, // ~2s block time
  { name: 'Ethereum', color: '#627EEA', bps: 0.083, category: 'classic' }, // ~12s block time
  { name: 'Bitcoin', color: '#F7931A', bps: 0.017, category: 'classic' }, // ~600s block time
]

const BLOCK_UNIT_SIZE = 100 // 100 blocks = 1 visual unit

type TimeFrame = '1m' | '5m' | '10m'

const TIME_FRAMES = {
  '1m': { label: '1 Minute', duration: 60000, seconds: 60 },
  '5m': { label: '5 Minutes', duration: 300000, seconds: 300 },
  '10m': { label: '10 Minutes', duration: 600000, seconds: 600 },
}

export function BlockchainSpeedComparison() {
  const [progress, setProgress] = useState(0) // 0-100 representing time progress
  const [chainBlocks, setChainBlocks] = useState<{ [key: string]: number }>({})
  const [kasmeSamples, setKasmeSamples] = useState<number[]>([])
  const [isRunning, setIsRunning] = useState(false) // Start paused
  const [showResults, setShowResults] = useState(false)
  const [displayCountdown, setDisplayCountdown] = useState(20)
  const [showIntro, setShowIntro] = useState(true) // Show explanation on first load
  const [selectedTime, setSelectedTime] = useState<TimeFrame>('1m')
  const startTimeRef = useRef<number>(Date.now())
  const animationFrameRef = useRef<number | undefined>(undefined)

  const cycleDuration = TIME_FRAMES[selectedTime].duration
  const cycleSeconds = TIME_FRAMES[selectedTime].seconds

  // Generate fewer, more visible kas.me sample points
  // Use a fixed small count (8-15 samples total) for maximum clarity
  const generateSamples = () => {
    // Fixed range: 8-15 samples total, regardless of time frame
    const totalSamples = Math.floor(Math.random() * (15 - 8 + 1)) + 8

    const samples: number[] = []
    for (let i = 0; i < totalSamples; i++) {
      samples.push(Math.random() * 100) // Random position in 0-100% range
    }
    return samples.sort((a, b) => a - b)
  }

  // Reset cycle
  const resetCycle = () => {
    setProgress(0)
    setChainBlocks({})
    setKasmeSamples(generateSamples())
    setShowResults(false)
    setDisplayCountdown(20)
    startTimeRef.current = Date.now()
  }

  useEffect(() => {
    resetCycle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Handle time frame change
  const handleTimeChange = (newTime: TimeFrame) => {
    setSelectedTime(newTime)
    setIsRunning(false)
    setTimeout(() => {
      resetCycle()
    }, 100)
  }

  // Start animation after closing intro
  const handleStartAnimation = () => {
    setShowIntro(false)
    setIsRunning(true)
  }

  // Main animation loop
  useEffect(() => {
    if (!isRunning) return

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current
      const cycleProgress = Math.min((elapsed / cycleDuration) * 100, 100)

      setProgress(cycleProgress)

      // Calculate blocks for each chain based on elapsed time in seconds
      const elapsedSeconds = elapsed / 1000
      const newChainBlocks: { [key: string]: number } = {}

      chains.forEach(chain => {
        newChainBlocks[chain.name] = Math.floor(chain.bps * elapsedSeconds)
      })

      setChainBlocks(newChainBlocks)

      // Check if cycle completed
      if (elapsed >= cycleDuration) {
        setShowResults(true)
        setIsRunning(false)
        return // Stop animation loop
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isRunning, showResults, cycleDuration])

  // Results display countdown
  useEffect(() => {
    if (!showResults) return

    const interval = setInterval(() => {
      setDisplayCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          setTimeout(resetCycle, 1000)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [showResults])

  // Calculate block units (groups of 100 blocks)
  const getBlockUnits = (blocks: number) => Math.floor(blocks / BLOCK_UNIT_SIZE)
  const getRemainder = (blocks: number) => blocks % BLOCK_UNIT_SIZE

  const kaspaBlocks = chainBlocks['Kaspa'] || 0
  const kaspaUnits = getBlockUnits(kaspaBlocks)
  const currentSamplesShown = kasmeSamples.filter(s => s <= progress).length

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />

        {/* Intro Overlay */}
        {showIntro && (
          <div className="absolute inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-6">
            <div className="max-w-2xl space-y-6">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Blockchain Speed Comparison
                  </h3>

                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      This animation demonstrates <strong className="text-accent">Kaspa's speed advantage</strong> for
                      high-frequency trading analytics.
                    </p>

                    <div className="grid gap-2 pl-4 border-l-2 border-accent/30">
                      <p>
                        <span className="text-accent font-semibold">Turquoise Bar</span> = Kaspa's block production progress
                      </p>
                      <p>
                        <span className="text-red-500 font-semibold">Red Needles</span> = kas.me analytics samples (simulated)
                      </p>
                      <p>
                        <span className="text-foreground font-semibold">Other Chains</span> = Blocks produced in same timeframe
                      </p>
                    </div>

                    <p>
                      Watch how Kaspa produces <strong>thousands of blocks</strong> while slower chains
                      produce just a handful. Each red needle represents a potential analytics transaction.
                    </p>
                  </div>

                  <button
                    onClick={handleStartAnimation}
                    className="w-full px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Start Animation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="relative space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Block Production Comparison
              </h3>
              <p className="text-sm text-muted-foreground">
                Comparing block production across leading blockchains
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {/* Time Frame Selection */}
              <div className="flex items-center gap-1 px-1 py-1 rounded-lg bg-card/50 border border-border/30">
                {(Object.keys(TIME_FRAMES) as TimeFrame[]).map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeChange(time)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      selectedTime === time
                        ? 'bg-accent text-background'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {TIME_FRAMES[time].label}
                  </button>
                ))}
              </div>

              {showResults ? (
                <div className="px-3 py-1.5 rounded text-xs font-medium border border-green-500/30 bg-green-500/10 text-green-500">
                  Results • Restarting in {displayCountdown}s
                </div>
              ) : (
                <div className="px-3 py-1.5 rounded text-xs font-medium border border-accent/30 bg-accent/10 text-accent">
                  {Math.floor((progress / 100) * cycleSeconds)}s / {cycleSeconds}s
                </div>
              )}

              <button
                onClick={() => setIsRunning(!isRunning)}
                disabled={showIntro}
                className="px-3 py-1.5 rounded text-xs font-medium border border-accent/30 bg-accent/10 hover:bg-accent/20 transition-colors disabled:opacity-50"
              >
                {isRunning ? 'Pause' : showResults ? 'Restart' : 'Play'}
              </button>
            </div>
          </div>

          {/* Kaspa Main Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: chains[0].color }} />
                <span className="font-bold text-lg">{chains[0].name}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-accent/20 text-accent font-semibold">
                  100 BPS
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">kas.me samples</div>
                  <div className="text-lg font-bold text-red-500 flex items-center gap-1">
                    <Activity className="w-4 h-4" />
                    {currentSamplesShown}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">total blocks</div>
                  <div className="text-2xl font-bold text-accent">
                    {kaspaBlocks.toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">block units</div>
                  <div className="text-2xl font-bold text-accent">
                    {kaspaUnits}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Progress Bar */}
            <div className="relative h-16 bg-card/30 rounded-lg overflow-hidden border border-border/30">
              {/* Progress fill */}
              <div
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${progress}%`,
                  backgroundColor: `${chains[0].color}30`,
                }}
              />

              {/* Block segmentation lines (every 10%) */}
              {Array.from({ length: 9 }).map((_, i) => {
                const position = ((i + 1) * 10)
                return (
                  <div
                    key={`segment-${i}`}
                    className="absolute top-0 bottom-0 w-px bg-border/20"
                    style={{ left: `${position}%` }}
                  />
                )
              })}

              {/* kas.me sample needles - thicker and more visible */}
              {kasmeSamples.map((sample, i) => (
                <div
                  key={i}
                  className={`absolute inset-y-0 transition-opacity duration-300 ${
                    progress >= sample ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ left: `${sample}%` }}
                >
                  {/* Needle with icon */}
                  <div className="absolute inset-y-0 w-1 bg-red-500 shadow-lg shadow-red-500/50">
                    <Activity
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white"
                      style={{ filter: 'drop-shadow(0 0 4px rgba(239, 68, 68, 0.8))' }}
                    />
                  </div>
                </div>
              ))}

              {/* Current position indicator */}
              {!showResults && isRunning && (
                <div
                  className="absolute top-0 bottom-0 w-1 bg-accent shadow-lg shadow-accent/50 z-10"
                  style={{ left: `${progress}%` }}
                />
              )}
            </div>
          </div>

          <div className="h-px bg-border/30" />

          {/* Other Chains Grid */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-muted-foreground">
              Other Chains (60-second comparison)
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {chains.slice(1).map(chain => {
                const blocks = chainBlocks[chain.name] || 0
                const units = getBlockUnits(blocks)
                const remainder = getRemainder(blocks)

                return (
                  <div key={chain.name} className="space-y-2 p-3 rounded-lg bg-card/30 border border-border/30">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chain.color }} />
                        <span className="font-semibold">{chain.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-muted-foreground">
                          {chain.bps >= 1 ? chain.bps.toFixed(1) : chain.bps.toFixed(3)} BPS
                        </span>
                        <span className="font-bold text-foreground">
                          {blocks} blocks
                        </span>
                        <span className="font-bold text-accent">
                          {units} units
                        </span>
                      </div>
                    </div>

                    {/* Visual block units */}
                    <div className="flex items-center gap-1 h-6">
                      {Array.from({ length: units }).map((_, i) => (
                        <div
                          key={i}
                          className="h-full flex-1 rounded-sm"
                          style={{ backgroundColor: chain.color, opacity: 0.7 }}
                        />
                      ))}
                      {remainder > 0 && (
                        <div
                          className="h-full rounded-sm"
                          style={{
                            width: `${(remainder / BLOCK_UNIT_SIZE) * 100}%`,
                            minWidth: '4px',
                            backgroundColor: chain.color,
                            opacity: 0.4
                          }}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Legend & Explanation */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Legend */}
            <div className="p-4 rounded-lg bg-card/30 border border-border/30">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-accent" />
                Visual Guide
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-3 rounded" style={{ backgroundColor: `${chains[0].color}30` }} />
                  <span className="text-muted-foreground">Kaspa block progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-3 rounded bg-red-500/80 relative">
                    <Activity className="absolute inset-0 m-auto w-2 h-2 text-white" />
                  </div>
                  <span className="text-muted-foreground">kas.me analytics sample</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-3 rounded bg-accent" />
                  <span className="text-muted-foreground">Current position</span>
                </div>
              </div>
            </div>

            {/* Impact Explanation */}
            <div className="p-4 rounded-lg bg-gradient-to-r from-accent/10 to-blue-500/10 border border-accent/20">
              <h4 className="text-sm font-semibold text-foreground mb-2">Why This Matters</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                In <strong className="text-accent">{TIME_FRAMES[selectedTime].label.toLowerCase()}</strong>,
                Kaspa produces <strong className="text-accent">~{(100 * cycleSeconds).toLocaleString()} blocks</strong> while
                Ethereum produces only <strong>~{Math.floor(0.083 * cycleSeconds)} blocks</strong>.
                This massive throughput enables <strong className="text-red-500">real-time HFT analytics</strong> impossible on slower chains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
