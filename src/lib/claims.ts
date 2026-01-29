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
  { tag: '0xKASME????????????????????', name: '???', date: '\u2014', role: 'node' },
  { tag: '0xKASME????????????????????', name: '???', date: '\u2014', role: 'core' },
  { tag: '0xKASME????????????????????', name: '???', date: '\u2014', role: 'flow' },
]
