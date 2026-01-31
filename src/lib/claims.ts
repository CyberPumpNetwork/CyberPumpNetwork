export type ClaimRole = 'builder' | 'node' | 'core' | 'flow'
export type ClaimBadge = 'rabbit' | 'first' | 'speedrun' | 'ghost'

export interface ClaimEntry {
  tag: string
  name: string
  date: string
  role: ClaimRole
  badges?: ClaimBadge[]
}

/**
 * Registry entries — add new claims here.
 * Placeholder entries (name: '???') are shown as open slots.
 */
export const CLAIMS: ClaimEntry[] = [
  { tag: '0xKASME03787F197C077838', name: 'H34R7L3s', date: '2026-01-30', role: 'builder', badges: ['rabbit', 'first', 'ghost'] },
  { tag: '0xKASME0D252C2F2D', name: '???', date: '2026-01-31', role: 'builder', badges: ['rabbit', 'first', 'ghost'] },
  { tag: '0xKASME????????????????????', name: '???', date: '\u2014', role: 'node' },
  { tag: '0xKASME023F3131002A320F24', name: '???', date: '2026-01-30', role: 'core', badges: ['rabbit', 'first', 'ghost'] },
  { tag: '0xKASME1F0F240C', name: '???', date: '2026-01-30', role: 'core', badges: ['rabbit', 'first', 'ghost'] },
  { tag: '0xKASME0C392E2E250C39242C060F', name: '???', date: '2026-01-30', role: 'core', badges: ['rabbit', 'first'] },
  { tag: '0xKASME0D2E27207F25097A202E39', name: '???', date: '2026-01-30', role: 'flow', badges: ['rabbit', 'first'] },
  { tag: '0xKASME0D2433092E2C22252A', name: '???', date: '2026-01-30', role: 'flow', badges: ['rabbit', 'first'] },
]
