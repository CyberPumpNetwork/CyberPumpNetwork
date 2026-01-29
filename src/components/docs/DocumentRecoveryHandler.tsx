/**
 * DocumentRecoveryHandler.tsx
 *
 * Handles document recovery attempts for deprecated or moved pages.
 * Includes diagnostic logging for debugging missing document issues.
 *
 * @deprecated TODO: Remove diagnostic overlay before production release
 */

import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { FileText, ArrowRight } from 'lucide-react'
import {
  processDiagnosticCommand,
  getCompletions,
  DIAGNOSTIC_PATTERNS,
  DIAGNOSTIC_PALETTE,
  DIAGNOSTIC_SEQUENCE,
  _SP2,
  _SQ2,
  _SP3,
  _SQ3,
  _SP4,
  _SQ4,
  _TF,
  type TerminalState,
  type CommandResult,
} from '@/lib/diagnostics'

interface RecoveryState {
  clickCount: number
  lastClick: number | null
  _dm: boolean
  _au: boolean
}

// Internal validation
const _h = (s: string) => [...s].reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0)

// Retry policy for failed document recovery attempts
const RETRY_POLICY = {
  maxRetries: 5,
  retryWindowMs: 2000,
  _v: -1298670751,
}

export function DocumentRecoveryHandler() {
  const [state, setState] = useState<RecoveryState>({
    clickCount: 0,
    lastClick: null,
    _dm: false,
    _au: false,
  })


  // Handle icon click - recovery diagnostics
  const handleIconClick = useCallback(() => {
    const now = Date.now()
    const timeSinceLastClick = state.lastClick ? now - state.lastClick : Infinity

    setState(prev => {
      // Reset if too much time passed
      if (timeSinceLastClick > RETRY_POLICY.retryWindowMs) {
        return { ...prev, clickCount: 1, lastClick: now }
      }

      const newCount = prev.clickCount + 1

      if (newCount >= RETRY_POLICY.maxRetries) {
        return { ...prev, clickCount: 0, lastClick: null, _dm: true }
      }

      return { ...prev, clickCount: newCount, lastClick: now }
    })
  }, [state.lastClick])

  const closeDiagnostic = useCallback(() => {
    setState(prev => ({
      ...prev,
      _dm: false,
      _au: false,
      clickCount: 0,
    }))
  }, [])

  const _ha = useCallback(() => {
    setState(prev => ({ ...prev, _au: true }))
  }, [])

  // ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && state._dm) {
        closeDiagnostic()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [state._dm, closeDiagnostic])

  return (
    <div className="relative min-h-[60vh]">
      {/* 404 UI */}
      <div className="relative text-center py-20">
        {/* Icon container */}
        <div
          onClick={handleIconClick}
          className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
          style={{ cursor: 'default' }}
        >
          <FileText className="w-8 h-8 text-accent" />
        </div>

        {/* Retry progress indicator */}
        {state.clickCount >= 2 && state.clickCount < RETRY_POLICY.maxRetries && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 flex gap-0.5 opacity-30">
            {Array.from({ length: RETRY_POLICY.maxRetries }).map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i < state.clickCount ? 'bg-accent' : 'bg-muted-foreground/10'
                }`}
              />
            ))}
          </div>
        )}

        <h2 className="text-2xl font-bold mb-4">Document Not Found</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Document not found
        </p>
        <Link to="/docs">
          <Button variant="outline" className="group">
            ← Back to Docs
            <ArrowRight className="w-4 h-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Diagnostic Overlay */}
      {state._dm && (
        <DiagnosticOverlay
          _au={state._au}
          onClose={closeDiagnostic}
          _oa={_ha}
        />
      )}
    </div>
  )
}

// Diagnostic terminal overlay component
function DiagnosticOverlay({
  _au,
  onClose,
  _oa,
}: {
  _au: boolean
  onClose: () => void
  _oa: () => void
}) {
  const [history, setHistory] = useState<string[]>([])
  const [outputStart, setOutputStart] = useState(0) // index where latest output begins
  const [input, setInput] = useState('')
  const [_ai, setAuthInput] = useState('')
  const [_ae, setAuthError] = useState(false)
  const [termState, setTermState] = useState<TerminalState>({ cwd: '/', _l1: false, _l2: false })
  const [animating, setAnimating] = useState(false)
  const [copyFeedback, setCopyFeedback] = useState<'idle' | 'ok' | 'fail'>('idle')
  const [_tp, _stp] = useState<'idle' | 'p1' | 'p2' | 'p3' | 'p4' | 'r1' | 'r2' | 'r3' | 'r4' | 'b1' | 'b2' | 'b3' | 'b4' | 'f1' | 'f2'>('idle')
  const [_ox, _sox] = useState(-50)
  const [_ofr, _sofr] = useState(0)
  const [_rx, _srx] = useState(700)
  const [_rfr, _srfr] = useState(0)
  const [_bx, _sbx] = useState(-70)
  const [_bfr, _sbfr] = useState(0)
  const _axRef = useRef(0)
  const _fStartRef = useRef({ _a: 0, _b: 0, _c: 0 })
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const _aiRef = useRef<HTMLInputElement>(null)

  // Command history for arrow-up/down navigation
  const cmdHistoryRef = useRef<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  // Diagnostic visualization state
  const [spriteState, setSpriteState] = useState({ x: -40, step: 0 })

  // Ambient sprite animation
  useEffect(() => {
    if (!_au || _tp !== 'idle') return

    const interval = setInterval(() => {
      setSpriteState(prev => ({
        x: prev.x > 620 ? -40 : prev.x + 3,
        step: (prev.step + 1) % DIAGNOSTIC_SEQUENCE.length,
      }))
    }, 500)

    return () => clearInterval(interval)
  }, [_au, _tp])

  // State handler
  useEffect(() => {
    if (_tp === 'idle') return

    const _AX = _axRef.current

    if (_tp === 'p1') {
      const interval = setInterval(() => {
        _sox(prev => {
          const next = prev + 5
          const _edge = next + _SW
          if (_edge >= _AX) {
            _stp('p2')
            return next
          }
          return next
        })
        _sofr(prev => (prev + 1) % _SQ2.length)
      }, 40)
      return () => clearInterval(interval)
    }

    if (_tp === 'p2') {
      const timer = setTimeout(() => {
        _stp('p3')
      }, 300)
      return () => clearTimeout(timer)
    }

    if (_tp === 'p3') {
      const interval = setInterval(() => {
        _sox(prev => {
          const next = prev + 6
          if (next > 650) {
            _stp('p4')
            return next
          }
          return next
        })
        _sofr(prev => (prev + 1) % _SQ2.length)
      }, 40)
      return () => clearInterval(interval)
    }

    if (_tp === 'p4') {
      const frames = [_TF.FLAT, _TF.RECOVERING, 3, 4, 0]
      let i = 0
      const interval = setInterval(() => {
        if (i >= frames.length) {
          clearInterval(interval)
          _stp('idle')
          return
        }
        setSpriteState(prev => ({ ...prev, step: i }))
        i++
      }, 350)
      setSpriteState(prev => ({ ...prev, step: 0 }))
      return () => clearInterval(interval)
    }

    const _RW = 14 * 3

    if (_tp === 'r1') {
      const interval = setInterval(() => {
        _srx(prev => {
          const next = prev - 6
          const _edge = next
          if (_edge <= _AX + 12 * 3) {
            _stp('r2')
            return next
          }
          return next
        })
        _srfr(prev => (prev + 1) % _SQ3.length)
      }, 40)
      return () => clearInterval(interval)
    }

    if (_tp === 'r2') {
      const timer = setTimeout(() => {
        _stp('r3')
      }, 300)
      return () => clearTimeout(timer)
    }

    if (_tp === 'r3') {
      const interval = setInterval(() => {
        _srx(prev => {
          const next = prev - 7
          if (next + _RW < -10) {
            _stp('r4')
            return next
          }
          return next
        })
        _srfr(prev => (prev + 1) % _SQ3.length)
      }, 40)
      return () => clearInterval(interval)
    }

    if (_tp === 'r4') {
      const frames = [_TF.FLAT, _TF.RECOVERING, 3, 4, 0]
      let i = 0
      const interval = setInterval(() => {
        if (i >= frames.length) {
          clearInterval(interval)
          _stp('idle')
          return
        }
        setSpriteState(prev => ({ ...prev, step: i }))
        i++
      }, 350)
      setSpriteState(prev => ({ ...prev, step: 0 }))
      return () => clearInterval(interval)
    }

    const _BW = 18 * 3

    if (_tp === 'b1') {
      const interval = setInterval(() => {
        _sbx(prev => {
          const next = prev + 4
          const _edge = next + _BW
          if (_edge >= _AX) {
            _stp('b2')
            return next
          }
          return next
        })
        _sbfr(prev => (prev + 1) % _SQ4.length)
      }, 40)
      return () => clearInterval(interval)
    }

    if (_tp === 'b2') {
      const timer = setTimeout(() => {
        _stp('b3')
      }, 400)
      return () => clearTimeout(timer)
    }

    if (_tp === 'b3') {
      const interval = setInterval(() => {
        _sbx(prev => {
          const next = prev + 5
          if (next > 650) {
            _stp('b4')
            return next
          }
          return next
        })
        _sbfr(prev => (prev + 1) % _SQ4.length)
      }, 40)
      return () => clearInterval(interval)
    }

    if (_tp === 'b4') {
      const frames = [_TF.FLAT, _TF.RECOVERING, 3, 4, 0]
      let i = 0
      const interval = setInterval(() => {
        if (i >= frames.length) {
          clearInterval(interval)
          _stp('idle')
          return
        }
        setSpriteState(prev => ({ ...prev, step: i }))
        i++
      }, 350)
      setSpriteState(prev => ({ ...prev, step: 0 }))
      return () => clearInterval(interval)
    }

    if (_tp === 'f1') {
      const _AX = _axRef.current
      const _SW2 = 14 * 3
      const _BW2 = 18 * 3
      const carTarget = _AX - _SW2
      const busTarget = carTarget - _BW2 - 2
      const rocketTarget = _AX + 12 * 3
      const { _a: carS, _b: busS, _c: rocketS } = _fStartRef.current
      const carDist = carTarget - carS
      const busDist = busTarget - busS
      const rocketDist = rocketS - rocketTarget
      const totalTicks = Math.max(Math.ceil(carDist / 6), Math.ceil(rocketDist / 7), 20)
      const carSpeed = carDist / totalTicks
      const busSpeed = busDist / totalTicks
      const rocketSpeed = rocketDist / totalTicks
      let tick = 0
      const interval = setInterval(() => {
        tick++
        if (tick >= totalTicks) {
          _sox(carTarget)
          _sbx(busTarget)
          _srx(rocketTarget)
          clearInterval(interval)
          _stp('f2')
          return
        }
        _sox(Math.round(carS + carSpeed * tick))
        _sbx(Math.round(busS + busSpeed * tick))
        _srx(Math.round(rocketS - rocketSpeed * tick))
        _sofr(prev => (prev + 1) % _SQ2.length)
        _sbfr(prev => (prev + 1) % _SQ4.length)
        _srfr(prev => (prev + 1) % _SQ3.length)
      }, 40)
      return () => clearInterval(interval)
    }

    if (_tp === 'f2') {
      setSpriteState(prev => ({ ...prev, step: 0 }))
      const timer = setTimeout(() => {
        onClose()
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [_tp])

  // Initialize terminal
  useEffect(() => {
    if (_au) {
      setHistory([
        '> CYPUV Diagnostic Console v0.1.0',
        '> Authorization successful',
        '> Type "help" for available commands',
        '',
      ])
      setOutputStart(0)
    }
  }, [_au])

  // Auto-scroll and focus
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
    if (_au && inputRef.current) {
      inputRef.current.focus()
    }
    if (!_au && _aiRef.current) {
      _aiRef.current.focus()
    }
  }, [history, _au])

  const _has = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (_h(_ai.toLowerCase()) === RETRY_POLICY._v) {
        _oa()
        setAuthError(false)
      } else {
        setAuthError(true)
        setAuthInput('')
        setTimeout(() => setAuthError(false), 1000)
      }
    }
  }

  const _SW = 14 * 3

  const spriteXRef = useRef(spriteState.x)
  spriteXRef.current = spriteState.x

  const _rn1 = useCallback(() => {
    const currentX = spriteXRef.current
    _axRef.current = currentX
    const _m = 250
    const startX = Math.min(-_SW - 10, currentX - _m)
    _sox(startX)
    _sofr(0)
    _stp('p1')
  }, [])

  const _rn2 = useCallback(() => {
    const currentX = spriteXRef.current
    _axRef.current = currentX
    const startX = Math.max(650, currentX + 250)
    _srx(startX)
    _srfr(0)
    _stp('r1')
  }, [])

  const _rn3 = useCallback(() => {
    const currentX = spriteXRef.current
    _axRef.current = currentX
    const _m = 300
    const startX = Math.min(-70, currentX - _m)
    _sbx(startX)
    _sbfr(0)
    _stp('b1')
  }, [])

  const _rn4 = useCallback(() => {
    const currentX = spriteXRef.current
    _axRef.current = currentX
    const carStart = Math.min(-60, currentX - 300)
    const busStart = Math.min(-130, currentX - 370)
    const rocketStart = Math.max(650, currentX + 300)
    _fStartRef.current = { _a: carStart, _b: busStart, _c: rocketStart }
    _sox(carStart)
    _sofr(0)
    _sbx(busStart)
    _sbfr(0)
    _srx(rocketStart)
    _srfr(0)
    _stp('f1')
  }, [])

  const runAnimation = useCallback(async (result: CommandResult & { animated: true }, prompt: string) => {
    setAnimating(true)
    setTermState(result.newState)

    const isClose = '_close' in result && result._close

    if (!isClose) {
      if ((result.newState._q ?? 0) >= 20 && (termState._q ?? 0) < 20) {
        _rn3()
      } else if (result.newState._l2 && !termState._l2) {
        _rn2()
      } else {
        _rn1()
      }
    }

    for (const step of result.steps) {
      if (step.delayMs > 0) {
        await new Promise(r => setTimeout(r, step.delayMs))
      }
      if (step.lines.length === 1 && step.lines[0] === '_CLEAR_') {
        setHistory([])
        setOutputStart(0)
        continue
      }
      if (step.replaceLast) {
        setHistory(prev => [...prev.slice(0, -1), ...step.lines])
      } else {
        setHistory(prev => [...prev, ...step.lines])
      }
    }

    if (isClose) {
      await new Promise(r => setTimeout(r, 5000))
      setHistory([])
      setOutputStart(0)
      _rn4()
      return
    }

    setHistory(prev => [...prev, ''])
    setAnimating(false)
    setTimeout(() => inputRef.current?.focus(), 50)
  }, [])

  const handleCommand = (e: React.KeyboardEvent) => {
    if (animating) return

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const cmds = cmdHistoryRef.current
      if (cmds.length === 0) return
      const newIdx = historyIndex < cmds.length - 1 ? historyIndex + 1 : historyIndex
      setHistoryIndex(newIdx)
      setInput(cmds[cmds.length - 1 - newIdx])
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex <= 0) {
        setHistoryIndex(-1)
        setInput('')
        return
      }
      const newIdx = historyIndex - 1
      setHistoryIndex(newIdx)
      setInput(cmdHistoryRef.current[cmdHistoryRef.current.length - 1 - newIdx])
      return
    }

    if (e.key === 'Tab') {
      e.preventDefault()
      const completed = getCompletions(input, termState)
      if (completed) setInput(completed)
      return
    }

    if (e.key === 'Enter') {
      const prompt = `${termState.cwd} $`

      if (!input.trim()) {
        setHistory(prev => { setOutputStart(prev.length); return [...prev, prompt] })
        setInput('')
        return
      }

      const cmd = input.trim()
      cmdHistoryRef.current = [...cmdHistoryRef.current, cmd].slice(-50)
      setHistoryIndex(-1)

      if (cmd.toLowerCase() === 'exit') {
        onClose()
        return
      }

      if (cmd.toLowerCase() === 'clear') {
        setHistory([])
        setOutputStart(0)
        setInput('')
        return
      }

      if (cmd.toLowerCase() === 'export' || cmd.toLowerCase() === 'copy') {
        const fullLog = history.join('\n')
        setHistory(prev => {
          setOutputStart(prev.length)
          return [...prev, `${prompt} ${cmd}`]
        })
        navigator.clipboard.writeText(fullLog).then(() => {
          setHistory(prev => [...prev, '> Terminal log copied to clipboard.', ''])
        }).catch(() => {
          setHistory(prev => [...prev, '> Error: clipboard access denied.', ''])
        })
        setInput('')
        return
      }

      const result = processDiagnosticCommand(cmd, termState)
      setInput('')

      if (result.animated) {
        setHistory(prev => {
          setOutputStart(prev.length)
          return [...prev, `${prompt} ${cmd}`]
        })
        runAnimation(result, prompt)
      } else {
        setTermState(result.newState)
        setHistory(prev => {
          setOutputStart(prev.length)
          return [...prev, `${prompt} ${cmd}`, ...result.output, '']
        })
      }
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          if (_au) {
            inputRef.current?.focus()
          } else {
            _aiRef.current?.focus()
          }
        }
      }}
    >
      <div className="w-full max-w-2xl bg-black border border-green-500/50 rounded-lg shadow-2xl shadow-green-500/20 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border-b border-green-500/30">
          <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400" onClick={onClose} />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-green-500 text-sm font-mono">cypuv-diag@kas.me</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(history.join('\n')).then(() => {
                setCopyFeedback('ok')
                setTimeout(() => setCopyFeedback('idle'), 1200)
              }).catch(() => {
                setCopyFeedback('fail')
                setTimeout(() => setCopyFeedback('idle'), 1200)
              })
            }}
            className={`ml-auto font-mono text-sm transition-colors ${
              copyFeedback === 'ok' ? 'text-green-400' :
              copyFeedback === 'fail' ? 'text-red-400' :
              'text-green-500/50 hover:text-green-500'
            }`}
            title="Copy terminal log"
          >
            {copyFeedback === 'ok' ? '[COPIED]' : copyFeedback === 'fail' ? '[ERROR]' : '[COPY]'}
          </button>
          <button
            onClick={onClose}
            className="text-green-500/50 hover:text-green-500 font-mono text-sm ml-2"
          >
            [ESC]
          </button>
        </div>

        {/* Terminal Body — 3 zones stacked vertically */}
        <div className="h-96 flex flex-col font-mono text-sm text-green-500 relative">
          {!_au ? (
            // Verification pending
            <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-4">
              <div className="relative">
                <div className="w-16 h-16 border-2 border-green-500/30 rounded-full animate-spin border-t-green-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-green-500/20 rounded-full animate-ping" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-green-500 animate-pulse">SECURE CONNECTION ESTABLISHED</p>
                <p className="text-green-500/50 text-xs">ENTER AUTHORIZATION CODE</p>
              </div>

              <div className={`flex items-center gap-2 border ${_ae ? 'border-red-500' : 'border-green-500/50'} rounded px-3 py-2 transition-colors`}>
                <span className="text-green-500/50">&gt;</span>
                <input
                  ref={_aiRef}
                  type="text"
                  value={_ai}
                  onChange={(e) => setAuthInput(e.target.value.toUpperCase())}
                  onKeyDown={_has}
                  placeholder="______"
                  maxLength={10}
                  className="bg-transparent outline-none text-green-500 caret-green-500 w-24 text-center tracking-widest uppercase"
                  spellCheck={false}
                  autoComplete="off"
                  autoFocus
                />
              </div>

              {_ae && (
                <p className="text-red-500 text-xs animate-pulse">ACCESS DENIED</p>
              )}
            </div>
          ) : (
            <>
              {/* Terminal output — single scrollable area, old lines dimmed */}
              <div
                ref={terminalRef}
                className="flex-1 min-h-0 overflow-y-auto px-4 pt-4 flex flex-col justify-end"
                style={{ scrollbarWidth: 'none' }}
              >
                <div className="mt-auto">
                  {history.map((line, i) => (
                    <div
                      key={i}
                      className={`leading-relaxed whitespace-pre-wrap ${i < outputStart ? 'opacity-40' : ''}`}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>

              {/* Zone 3: Input + Sprite — pinned at bottom */}
              <div className="relative px-4 pb-4 pt-1">
                {/* Sprite layer */}
                {(() => {
                  let _fi: number
                  if (_tp === 'f2') {
                    _fi = _TF.FLAT
                  } else if (_tp === 'p2' || _tp === 'p3' || _tp === 'r2' || _tp === 'r3' || _tp === 'b2' || _tp === 'b3') {
                    _fi = _TF.FLAT
                  } else if (_tp === 'p4' || _tp === 'r4' || _tp === 'b4') {
                    const recoverFrames = [_TF.FLAT, _TF.RECOVERING, 3, 4, 0]
                    _fi = recoverFrames[Math.max(0, Math.min(spriteState.step, recoverFrames.length - 1))]
                  } else if (_tp === 'p1' || _tp === 'r1' || _tp === 'b1' || _tp === 'f1') {
                    _fi = 0
                  } else {
                    const idx = ((spriteState.step % DIAGNOSTIC_SEQUENCE.length) + DIAGNOSTIC_SEQUENCE.length) % DIAGNOSTIC_SEQUENCE.length
                    _fi = DIAGNOSTIC_SEQUENCE[idx]
                  }
                  if (_fi < 0 || _fi >= DIAGNOSTIC_PATTERNS.length) _fi = 0

                  return (
                    <>
                      <div
                        className="absolute bottom-8 pointer-events-none z-0"
                        style={{ left: `${spriteState.x}px` }}
                      >
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 3px)', gap: 0 }}>
                          {DIAGNOSTIC_PATTERNS[_fi].flat().map((pixel, i) => (
                            <div key={i} style={{ width: 3, height: 3, backgroundColor: DIAGNOSTIC_PALETTE[pixel] }} />
                          ))}
                        </div>
                      </div>
                      {(_tp === 'p1' || _tp === 'p2' || _tp === 'p3' || _tp === 'p4' || _tp === 'f1' || _tp === 'f2') && (
                        <div
                          className="absolute bottom-8 pointer-events-none z-10"
                          style={{ left: `${_ox}px` }}
                        >
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(14, 3px)', gap: 0 }}>
                            {_SP2[_SQ2[_ofr % _SQ2.length]].flat().map((pixel, i) => (
                              <div key={i} style={{ width: 3, height: 3, backgroundColor: DIAGNOSTIC_PALETTE[pixel] }} />
                            ))}
                          </div>
                        </div>
                      )}
                      {(_tp === 'r1' || _tp === 'r2' || _tp === 'r3' || _tp === 'r4' || _tp === 'f1' || _tp === 'f2') && (
                        <div
                          className="absolute bottom-8 pointer-events-none z-10"
                          style={{ left: `${_rx}px` }}
                        >
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(14, 3px)', gap: 0 }}>
                            {_SP3[_SQ3[_rfr % _SQ3.length]].flat().map((pixel, i) => (
                              <div key={i} style={{ width: 3, height: 3, backgroundColor: DIAGNOSTIC_PALETTE[pixel] }} />
                            ))}
                          </div>
                        </div>
                      )}
                      {(_tp === 'b1' || _tp === 'b2' || _tp === 'b3' || _tp === 'b4' || _tp === 'f1' || _tp === 'f2') && (
                        <div
                          className="absolute bottom-8 pointer-events-none z-10"
                          style={{ left: `${_bx}px` }}
                        >
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(18, 3px)', gap: 0 }}>
                            {_SP4[_SQ4[_bfr % _SQ4.length]].flat().map((pixel, i) => (
                              <div key={i} style={{ width: 3, height: 3, backgroundColor: DIAGNOSTIC_PALETTE[pixel] }} />
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )
                })()}

                {/* Input line */}
                {!animating && (
                  <div className="flex items-center gap-2 relative z-20">
                    <span className="text-green-500">{termState.cwd} $</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleCommand}
                      className="flex-1 bg-transparent outline-none text-green-500 caret-green-500"
                      spellCheck={false}
                      autoComplete="off"
                    />
                    <span className="animate-pulse">_</span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
