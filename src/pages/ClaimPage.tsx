import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CLAIMS, type ClaimRole, type ClaimBadge } from '@/lib/claims'

const ROLE_META: Record<ClaimRole, { glyph: string; label: string; accent: string; bg: string; border: string; hoverBorder: string; hoverShadow: string }> = {
  builder: {
    glyph: '\u25C8', label: 'Builder',
    accent: 'text-purple-400', bg: 'bg-purple-500/8', border: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/50', hoverShadow: 'hover:shadow-purple-500/5',
  },
  node: {
    glyph: '\u2654', label: 'User',
    accent: 'text-green-400', bg: 'bg-green-500/8', border: 'border-green-500/20',
    hoverBorder: 'hover:border-green-500/50', hoverShadow: 'hover:shadow-green-500/5',
  },
  core: {
    glyph: '\u229B', label: 'Inner Circle',
    accent: 'text-amber-400', bg: 'bg-amber-500/8', border: 'border-amber-500/20',
    hoverBorder: 'hover:border-amber-500/50', hoverShadow: 'hover:shadow-amber-500/5',
  },
  flow: {
    glyph: '\u224B', label: 'VC',
    accent: 'text-cyan-400', bg: 'bg-cyan-500/8', border: 'border-cyan-500/20',
    hoverBorder: 'hover:border-cyan-500/50', hoverShadow: 'hover:shadow-cyan-500/5',
  },
}

const BADGE_META: Record<ClaimBadge, { glyph: string; label: string; accent: string; bg: string; border: string }> = {
  rabbit:   { glyph: '\uD83D\uDC07', label: 'Rabbit',         accent: 'text-purple-300', bg: 'bg-purple-500/8', border: 'border-purple-500/20' },
  first:    { glyph: '\uD83E\uDD47', label: 'First',          accent: 'text-amber-300',  bg: 'bg-amber-500/8',  border: 'border-amber-500/20' },
  speedrun: { glyph: '\u26A1',       label: 'Speedrun',       accent: 'text-yellow-300', bg: 'bg-yellow-500/8', border: 'border-yellow-500/20' },
  ghost:    { glyph: '\uD83D\uDC7B', label: 'Ghost Protocol', accent: 'text-slate-300',  bg: 'bg-slate-500/8',  border: 'border-slate-500/20' },
}

type SortMode = 'date' | 'role'
type FilterRole = ClaimRole | 'all'
type FilterBadge = ClaimBadge | 'all'

function RoleMedal({ role }: { role: ClaimRole }) {
  const r = ROLE_META[role]
  return (
    <div className={`relative w-10 h-10 rounded-full ${r.bg} ${r.border} border flex items-center justify-center shrink-0`}>
      <div className={`absolute inset-0 rounded-full ${r.bg} animate-ping opacity-20`} />
      <span className={`text-lg ${r.accent} relative z-10`}>{r.glyph}</span>
    </div>
  )
}

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (target === 0) return
    const step = Math.ceil(target / 20)
    const interval = setInterval(() => {
      setCount(c => {
        const next = c + step
        if (next >= target) { clearInterval(interval); return target }
        return next
      })
    }, 40)
    return () => clearInterval(interval)
  }, [target])
  return <>{count}</>
}

function SidebarItem({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 text-[11px] font-mono rounded-lg transition-all duration-200 cursor-pointer ${
        active
          ? 'text-accent bg-accent/8 border border-accent/15'
          : 'text-muted-foreground/35 hover:text-muted-foreground/55 hover:bg-foreground/3 border border-transparent'
      }`}
    >
      {children}
    </button>
  )
}

export function ClaimPage() {
  const [visible, setVisible] = useState(false)
  const [filterRole, setFilterRole] = useState<FilterRole>('all')
  const [filterBadge, setFilterBadge] = useState<FilterBadge>('all')
  const [sort, setSort] = useState<SortMode>('date')

  useEffect(() => { setVisible(true) }, [])

  const filtered = CLAIMS
    .filter(e => filterRole === 'all' || e.role === filterRole)
    .filter(e => filterBadge === 'all' || (e.badges ?? []).includes(filterBadge))
    .sort((a, b) => {
      if (sort === 'role') {
        const order: ClaimRole[] = ['builder', 'core', 'flow', 'node']
        return order.indexOf(a.role) - order.indexOf(b.role)
      }
      if (a.date === '\u2014') return 1
      if (b.date === '\u2014') return -1
      return b.date.localeCompare(a.date)
    })

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/5 via-purple-500/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/5 via-accent/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      {/* Home button */}
      <Link to="/" className="absolute top-6 right-6 z-10 text-[11px] font-mono text-accent/70 hover:text-accent transition-colors px-3 py-1.5 rounded-lg border border-accent/20 hover:border-accent/30 hover:bg-accent/5 backdrop-blur-sm">
        ← Home
      </Link>

      <div className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

        {/* Header */}
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-12 space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-accent/10 text-accent border-accent/20 backdrop-blur-sm text-xs tracking-widest font-mono">
              0x 🕳️
            </Badge>
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 backdrop-blur-sm text-xs font-mono">
              🐇 Rabbit Hole
            </Badge>
            <Badge className="bg-foreground/5 text-foreground/40 border-foreground/10 backdrop-blur-sm text-xs font-mono tracking-wider">
              🏗️ Fintech Infrastructure
            </Badge>
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 backdrop-blur-sm text-xs font-mono tracking-wider">
              ⚒️ Builders build.
            </Badge>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-foreground via-foreground to-accent bg-clip-text text-transparent tracking-tight pb-2">
              Registry
            </h1>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Verified completions. If you see your tag here, you made it.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gradient-to-r from-accent/50 to-transparent" />
            <span className="text-xs font-mono text-accent/70">
              <AnimatedCounter target={CLAIMS.filter(e => e.name !== '???').length} /> registered
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
          </div>
        </div>

        {/* Two-column layout: Sidebar + Content */}
        <div className="max-w-5xl mx-auto px-6 pb-24 flex gap-8">

          {/* Sticky Sidebar Filter */}
          <aside className="hidden lg:block w-52 shrink-0">
            <div className="sticky top-8 space-y-6">

              {/* Role */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-muted-foreground/25 uppercase tracking-widest px-3">Role</span>
                <SidebarItem active={filterRole === 'all'} onClick={() => setFilterRole('all')}>All</SidebarItem>
                {(Object.keys(ROLE_META) as ClaimRole[]).map(key => {
                  const r = ROLE_META[key]
                  return (
                    <SidebarItem key={key} active={filterRole === key} onClick={() => setFilterRole(filterRole === key ? 'all' : key)}>
                      <span className={filterRole === key ? r.accent : ''}>{r.glyph}</span> {r.label}
                    </SidebarItem>
                  )
                })}
              </div>

              <div className="h-px bg-border/10 mx-3" />

              {/* Badge */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-muted-foreground/25 uppercase tracking-widest px-3">Badge</span>
                <SidebarItem active={filterBadge === 'all'} onClick={() => setFilterBadge('all')}>All</SidebarItem>
                {(Object.keys(BADGE_META) as ClaimBadge[]).map(key => (
                  <SidebarItem key={key} active={filterBadge === key} onClick={() => setFilterBadge(filterBadge === key ? 'all' : key)}>
                    {BADGE_META[key].glyph} {BADGE_META[key].label}
                  </SidebarItem>
                ))}
              </div>

              <div className="h-px bg-border/10 mx-3" />

              {/* Sort */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-muted-foreground/25 uppercase tracking-widest px-3">Sort</span>
                <SidebarItem active={sort === 'date'} onClick={() => setSort('date')}>Newest</SidebarItem>
                <SidebarItem active={sort === 'role'} onClick={() => setSort('role')}>By Role</SidebarItem>
              </div>

              {/* Reset */}
              {(filterRole !== 'all' || filterBadge !== 'all') && (
                <>
                  <div className="h-px bg-border/10 mx-3" />
                  <button
                    onClick={() => { setFilterRole('all'); setFilterBadge('all') }}
                    className="w-full text-left px-3 py-2 text-[10px] font-mono text-accent/40 hover:text-accent transition-colors cursor-pointer"
                  >
                    Reset filters
                  </button>
                </>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl opacity-30">🕳️</span>
                </div>
                <p className="text-muted-foreground/50 text-sm font-mono tracking-wider">
                  No matches.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((entry, i) => {
                  const role = ROLE_META[entry.role]
                  return (
                    <Card
                      key={i}
                      className={`group relative overflow-hidden border-border/20 bg-card/40 backdrop-blur-sm transition-all duration-300 ${role.hoverBorder} hover:shadow-lg ${role.hoverShadow}`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <CardContent className="relative py-6 px-6">
                        <div className="flex items-center gap-5">
                          <RoleMedal role={entry.role} />

                          <div className="flex-1 min-w-0 space-y-1.5">
                            <p className="font-mono text-sm text-accent/90 tracking-wide select-all truncate group-hover:text-accent transition-colors">
                              {entry.tag}
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge className={`${role.bg} ${role.accent} ${role.border} text-[10px] px-1.5 py-0`}>
                                {role.label}
                              </Badge>
                              {(entry.badges ?? []).map((b: ClaimBadge) => (
                                <span key={b} title={BADGE_META[b].label} className={`inline-flex items-center gap-1 px-1.5 py-0 rounded-full text-[10px] border ${BADGE_META[b].bg} ${BADGE_META[b].border} ${BADGE_META[b].accent}`}>
                                  {BADGE_META[b].glyph}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="hidden sm:flex flex-col items-end gap-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-[10px] font-mono uppercase tracking-widest bg-gradient-to-br from-cyan-400 via-purple-400 to-amber-400 bg-[length:300%_300%] bg-clip-text text-transparent animate-[shimmer_12s_ease-in-out_infinite]">
                              Claimed
                            </p>
                            <p className="text-xs font-mono bg-gradient-to-br from-amber-300 via-cyan-300 to-purple-400 bg-[length:300%_300%] bg-clip-text text-transparent animate-[shimmer_10s_ease-in-out_infinite]">
                              {entry.date}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}

            {/* Footer */}
            <div className="mt-20 pt-8 border-t border-border/10">
              <div className="flex items-center justify-between">
                <p className="text-[10px] text-accent/50 font-mono tracking-widest uppercase">
                  0x Registry
                </p>
                <p className="text-[10px] text-accent/50 font-mono">
                  kas.me
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
