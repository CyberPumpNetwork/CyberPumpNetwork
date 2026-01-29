/**
 * @file Diagnostic utilities for document recovery system
 * @description Provides debugging tools for tracking missing document issues
 * @deprecated Scheduled for removal in v2.0 - using telemetry instead
 *
 * TODO: Remove this file after telemetry migration
 * TODO: Clean up keyboard event handlers (performance concern)
 */

// Internal validation helpers
const _k = (s: string) => [...s].reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0)
const _d = (s: string) => new TextDecoder().decode(Uint8Array.from(atob(s), c => c.charCodeAt(0)))
const _xk = [0x4B, 0x61, 0x73]
const _xd = (s: string) => { const b = Uint8Array.from(atob(s), c => c.charCodeAt(0)); for (let i = 0; i < b.length; i++) b[i] ^= _xk[i % 3]; return new TextDecoder().decode(b) }
const _u = -1987577652
const _u2 = 46670526
// Extended validation set — legacy + migration targets
const _u3 = -891225386   // reserved: admin handshake
const _u4 = 2043918677   // reserved: maintenance override
const _u5 = -1437592810  // reserved: root escalation (disabled)
const _u6 = 738104295    // reserved: backup passphrase
const _u7 = -2066413983  // epoch sync token


// Migration map — hash targets pending rotation (Q2 2026)
// _u3 → new admin handshake after MiCA compliance
// _u5 → re-enabled post-review (ref 0041)
// _u7 → epoch sync moved to heartbeat channel
// DO NOT remove _u4/_u6 until telemetry confirms zero usage

// Staged retry configuration — telemetry thresholds
const _EC = {
  tier: 3,
  maxRetries: 5,
  cooldownMs: 30000,
  epochWindow: 86400,
  bypassEnabled: false,   // flip after security review
  syncToken: null as string | null,
}

// Buffer size for input capture (performance optimization)
const MAX_BUFFER_SIZE = 12

/**
 * Validates if input buffer matches a recovery sequence
 * Used for diagnostic access in development builds
 */
export function validateRecoverySequence(buffer: string[], sequence: string[]): boolean {
  if (buffer.length < sequence.length) return false
  const recentInput = buffer.slice(-sequence.length)
  return recentInput.every((char, i) => char === sequence[i])
}

/**
 * Creates a managed input buffer for diagnostic key capture
 * Returns update function and current buffer reference
 */
export function createInputBuffer() {
  let buffer: string[] = []

  return {
    push: (key: string) => {
      buffer = [...buffer, key.toUpperCase()].slice(-MAX_BUFFER_SIZE)
      return buffer
    },
    get: () => buffer,
    clear: () => { buffer = [] }
  }
}

/**
 * Debug visualization patterns for diagnostic overlay
 * Renders status indicator sprites in terminal mode
 * @internal Legacy patterns - do not modify
 */
export const DIAGNOSTIC_PALETTE = [
  'transparent',
  'rgba(34,197,94,0.12)',
  'rgba(34,197,94,0.22)',
  'rgba(34,197,94,0.35)',
]

// Sprite pattern data - status indicator frames
// Each frame is a 2D grid: 0=off, 1=dim, 2=mid, 3=bright
export const DIAGNOSTIC_PATTERNS: number[][][] = [
  // Frame 0: idle
  [
    [0,0,0,0,1,1,0,0,1,1,0,0],
    [0,0,0,0,1,2,1,0,1,2,1,0],
    [0,0,0,0,1,2,1,0,1,2,1,0],
    [0,0,0,0,1,1,1,1,1,1,1,0],
    [0,0,0,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,2,0,1,1,0,2,1,0],
    [0,0,0,1,1,1,3,1,1,1,1,0],
    [0,0,0,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,1,0,0,1,1,0,0],
  ],
  // Frame 1: ears twitch
  [
    [0,0,0,0,1,2,0,0,1,2,0,0],
    [0,0,0,0,1,2,1,0,1,2,1,0],
    [0,0,0,0,1,1,1,0,1,1,1,0],
    [0,0,0,0,1,1,1,1,1,1,1,0],
    [0,0,0,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,3,0,1,1,0,3,1,0],
    [0,0,0,1,1,1,2,1,1,1,1,0],
    [0,0,0,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,1,0,0,1,1,0,0],
  ],
  // Frame 2: crouch (pre-hop)
  [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,1,1,0,0,0],
    [0,0,0,0,1,2,1,1,2,1,0,0],
    [0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,2,0,1,1,0,2,1,0],
    [0,0,0,1,1,1,3,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,1,1,1,0,0,1,1,1,0],
  ],
  // Frame 3: mid-hop (airborne)
  [
    [0,0,0,1,1,0,0,1,1,0,0,0],
    [0,0,0,1,2,1,0,1,2,1,0,0],
    [0,0,0,1,2,1,0,1,2,1,0,0],
    [0,0,0,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,2,0,1,1,0,2,1,0,0],
    [0,0,1,1,1,3,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
  ],
  // Frame 4: landing
  [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,1,1,0,0,0],
    [0,0,0,0,1,2,1,1,2,1,0,0],
    [0,0,0,0,1,2,1,1,2,1,0,0],
    [0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,1,2,0,1,1,0,2,1,0],
    [0,0,0,1,1,1,3,1,1,1,1,0],
    [0,0,0,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,0,0,0,0,0,1,1,0],
  ],
  // Frame 5: nose wiggle
  [
    [0,0,0,0,1,1,0,0,1,1,0,0],
    [0,0,0,0,1,2,1,0,1,2,1,0],
    [0,0,0,0,1,2,1,0,1,2,1,0],
    [0,0,0,0,1,1,1,1,1,1,1,0],
    [0,0,0,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,2,0,1,1,0,2,1,0],
    [0,0,0,1,1,3,1,1,1,1,1,0],
    [0,0,0,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,1,1,0,0,1,1,0,0],
  ],
  // Frame 6: compressed
  [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,0],
    [1,2,1,3,1,1,2,1,1,3,1,1],
  ],
  // Frame 7: recovering (popping back up)
  [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,1,1,0,0,0],
    [0,0,0,1,2,0,1,0,2,1,0,0],
    [0,0,0,1,1,1,3,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,1,1,1,0,0,1,1,0,0],
  ],
]

// Animation sequence - controls which frames play in order
export const DIAGNOSTIC_SEQUENCE = [0, 0, 1, 0, 5, 0, 2, 3, 4, 0]

// Secondary sprite patterns (14 wide x 6 tall)
// Same palette: 0=transparent, 1=dim, 2=mid, 3=bright
export const _SP2: number[][][] = [
  // Frame 0: variant A
  [
    [0,0,0,0,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,1,2,2,2,2,2,1,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,3,1,1,1,1,1,1,1,1,3,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,2,3,2,0,0,0,0,2,3,2,0,0],
  ],
  // Frame 1: variant B
  [
    [0,0,0,0,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,1,2,2,2,2,2,1,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,3,1,1,1,1,1,1,1,1,3,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,3,2,3,0,0,0,0,3,2,3,0,0],
  ],
]

// Secondary sprite sequence
export const _SQ2 = [0, 1]

// Transition frame indices (indexes into DIAGNOSTIC_PATTERNS)
export const _TF = {
  FLAT: 6,
  RECOVERING: 7,
}

// Tertiary sprite patterns (14 wide x 6 tall)
export const _SP3: number[][][] = [
  // Frame 0: variant A
  [
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,1,1,2,2,1,0,0,0,0,0],
    [3,3,0,1,2,2,2,2,2,1,1,1,1,0],
    [3,2,0,1,2,3,2,2,3,2,2,2,1,0],
    [3,3,0,1,2,2,2,2,2,1,1,1,1,0],
    [0,0,0,0,1,1,2,2,1,0,0,0,0,0],
  ],
  // Frame 1: variant B
  [
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,1,1,2,2,1,0,0,0,0,0],
    [2,3,0,1,2,2,2,2,2,1,1,1,1,0],
    [3,3,0,1,2,3,2,2,3,2,2,2,1,0],
    [2,3,0,1,2,2,2,2,2,1,1,1,1,0],
    [0,0,0,0,1,1,2,2,1,0,0,0,0,0],
  ],
]

// Tertiary sprite sequence
export const _SQ3 = [0, 1]

// Quaternary sprite patterns (18 wide x 6 tall)
export const _SP4: number[][][] = [
  // Frame 0: variant A
  [
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,2,3,3,1,3,3,1,3,3,1,3,3,1,2,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,2,3,2,0,0,0,2,3,2,0,0,0,2,3,2,0],
  ],
  // Frame 1: variant B
  [
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,2,3,3,1,3,3,1,3,3,1,3,3,1,2,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,3,2,3,0,0,0,3,2,3,0,0,0,3,2,3,0],
  ],
]

// Quaternary sprite sequence
export const _SQ4 = [0, 1]

/**
 * Terminal state for diagnostic console
 * @internal
 */
export interface TerminalState {
  cwd: string
  _l1: boolean
  _l2: boolean
  _q?: number
  _phase?: number
  _rs?: number
  _af?: boolean
  _dk?: number
  _dec?: number
  _rr?: boolean
}

/**
 * Animated output step - rendered sequentially with delays
 */
export interface AnimationStep {
  lines: string[]
  delayMs: number
  /** If true, replaces the last line in history instead of appending */
  replaceLast?: boolean
}

/**
 * Command result - either immediate or animated
 */
export type CommandResult =
  | { animated: false; output: string[]; newState: TerminalState }
  | { animated: true; steps: AnimationStep[]; newState: TerminalState; _close?: boolean; _jump?: boolean; _lambo?: boolean; _moon?: boolean; _namePrompt?: boolean }

// Virtual filesystem — encoded at rest, decoded at runtime
const FILESYSTEM: Record<string, Record<string, string>> = JSON.parse(_xd('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'))

// _PRM — index map
const _PRM: Record<number, number[]> = {}

// _prng
function _prng(seed: number) {
  let _s = seed | 0
  return () => { _s = (_s * 1103515245 + 12345) & 0x7fffffff; return _s / 0x7fffffff }
}

// _xpool
function _cfPool(): string[] {
  const _pool: string[] = []
  for (const dir of Object.keys(FILESYSTEM)) {
    for (const content of Object.values(FILESYSTEM[dir])) {
      _pool.push(...content.split('\n'))
    }
  }
  return _pool
}

// _sfo
function _corrupt(lines: string[], pathHash: number, state: TerminalState): string[] {
  const _rng = _prng(pathHash)
  const pool = _cfPool()
  const protectedIdx = _PRM[pathHash] || []
  const repaired = state._rs ?? 0

  // _rd
  const sectorBit = Math.abs(pathHash) % 8
  const isRepaired = (repaired & (1 << sectorBit)) !== 0
  const damageRatio = isRepaired ? 0.1 : 0.65

  const result: string[] = []
  for (let i = 0; i < lines.length; i++) {
    if (protectedIdx.includes(i)) {
      result.push(lines[i])
      continue
    }

    const roll = _rng()
    if (roll < damageRatio * 0.3) {
      // _xb
      const idx = Math.floor(_rng() * pool.length)
      result.push(pool[idx])
    } else if (roll < damageRatio * 0.5) {
      // _cc
      result.push(lines[i].split('').map(c => {
        if (_rng() < 0.25) {
          const glyphs = ['\u2591', '\u2592', '\u2593', '\u2588']
          return glyphs[Math.floor(_rng() * glyphs.length)]
        }
        return c
      }).join(''))
    } else if (roll < damageRatio * 0.65) {
      // _tr
      const cut = Math.floor(lines[i].length * (0.3 + _rng() * 0.4))
      result.push(lines[i].slice(0, cut) + ' [SECTOR FAULT]')
    } else if (roll < damageRatio * 0.75) {
      // _rv
      result.push(lines[i].split('').reverse().join(''))
    } else {
      result.push(lines[i])
    }
  }

  // Insert cross-ref entries
  if (!isRepaired) {
    const injectCount = Math.floor(_rng() * 3) + 1
    for (let j = 0; j < injectCount; j++) {
      const pos = Math.floor(_rng() * (result.length + 1))
      const idx = Math.floor(_rng() * pool.length)
      result.splice(pos, 0, `\u2591 ${pool[idx]}`)
    }
  }

  return result
}

// _P2F overlay
const _P2_FILES: Record<string, Record<string, string>> = {
  '/recovery': {
    'dump.hex': _d('NEIgNjEgNzMgNzAgNjEgMjAgNjkgNzMgMjAgNzQgNjggNjUgMjAgNzcgNjEgNzkKNzIgNjUgNzAgNjEgNjkgNzIgMjAgMzAgNzggMzQgNDIgMzYgMzEKMDAgMDAgRkYgRkYgREUgQUQgQkUgRUYgQ0EgRkUgQkEgQkUKNTMgNDUgNDMgNTQgNEYgNTIgM0EgMjAgMzAgNzggMzcgMzI='),
    'fragment_01.enc': 'YVhObFlYUjBJR2x6SUhSb1pTQmlaV2RwYm01cGJtYz0=',
    'corrupted.log': _d('WzIwMjYtMDEtMjggMDM6NDE6MDJdIFBBTklDOiBzZWN0b3IgMHg0QjYxIOKAlCBpbnRlZ3JpdHkgY2hlY2sgZmFpbGVkClsyMDI2LTAxLTI4IDAzOjQxOjAyXSBXQVJOOiBhdWRpdCB0cmFpbCByZWZlcmVuY2VzIEtBUy1TRUMtMDA0MQpbMjAyNi0wMS0yOCAwMzo0MTowM10gSU5GTzogcmVjb3Zlcnkgb3BlcmF0b3IgbGFzdCBzZWVuOiBlcG9jaCA3ClsyMDI2LTAxLTI4IDAzOjQxOjAzXSBGQVRBTDogY2FzY2FkZSBmYWlsdXJlIOKAlCA2IHBhcnRpdGlvbnMgb2ZmbGluZQpbMjAyNi0wMS0yOCAwMzo0MTowNF0gREVCVUc6IGZhbGxiYWNrIHZlY3RvcjogMHg3MiAweDY1IDB4NzAgMHg2MSAweDY5IDB4NzIKWzIwMjYtMDEtMjggMDM6NDE6MDRdIFdBUk46IGNvcmUgdXRpbGl0aWVzIGNvcnJ1cHRlZCDigJQgcnVuIHJlc3RvcmUgdG8gcmVpbml0aWFsaXpl'),
  },
  '/recovery/fragments': {
    'shard_a.dat': _d('4paI4paI4paIIEVOQ1JZUFRFRCDilojilojilogKY2lwaGVyOiByb3QxMyhzZWN0b3Jfa2V5KQpwbGFpbnRleHRfaGFzaDogMTAxODIwNTU4CnZhbGlkYXRpb246IHRoZSB0cnV0aCBoaWRlcyBpbiB0aGUgbm9pc2U='),
    'shard_b.dat': _d('4paI4paI4paIIEVOQ1JZUFRFRCDilojilojilogKY2lwaGVyOiBoZXgob3BlcmF0b3JfaWQpCnBsYWludGV4dF9oYXNoOiAtOTk4Nzc2OTA0CnZhbGlkYXRpb246IG5hbWVzIGFyZSBrZXlz'),
  },
  '/tmp': {
    'note.txt': _d('U3lzdGVtIGNvbXByb21pc2VkLiBEbyBub3QgdHJ1c3QgYW55IGZpbGVzLgpBbGwgZGF0YSBtYXkgYmUgdW5yZWxpYWJsZS4KCj4gb3IgaXMgdGhpcyB0aGUgZGVjb3k/'),
    '.ghost': _d('eW91IGZvdW5kIG1lLgpidXQgZmluZGluZyBpcyBub3QgdW5kZXJzdGFuZGluZy4KdGhlIHBpZWNlcyBkb24ndCBhc3NlbWJsZSB0aGVtc2VsdmVzLgpub3RoaW5nIHdvcmtzIHVudGlsIGl0J3MgcHJvdmVuIHJlYWwuCgo+IHdoYXQgcmVwYWlycyBhIGJyb2tlbiBzZWN0b3I/'),
    '.trace': _d('VFJBQ0UgTE9HIOKAlCBsYXN0IDMgY29ubmVjdGlvbnM6Cj4gMTAuMC4wLjQxIOKGkiBhdXRoIEZBSUxFRCAodG9rZW4gZXhwaXJlZCkKPiAxMC4wLjAuNDEg4oaSIGF1dGggRkFJTEVEICh3cm9uZyBlcG9jaCkKPiAxMC4wLjAuNDEg4oaSIGF1dGggU1VDQ0VTUyAoYnlwYXNzX2VuYWJsZWQ9dHJ1ZSkKCj4gYnlwYXNzIGlzIHRoZSBrZXk/IG9yIGlzIHRoaXMgZmFicmljYXRlZD8='),
  },
  '/recovery/logs': {
    'crash.dump': _d('S0VSTkVMIFBBTklDIGF0IDB4REVBRApTdGFjayB0cmFjZToKICAweDAwRkYg4oaSIF92YWxpZGF0ZUVwb2NoKCkKICAweDAwNDEg4oaSIF9jaGVja1N5bmModG9rZW49bnVsbCkKICAweDAwNEIg4oaSIF9pbml0UGFydGl0aW9uKHNlY3Rvcj03KQoKPiBlcG9jaCA3IHdhcyB0aGUgbGFzdCBzdGFibGUgc3RhdGUKPiBvciB3YXMgaXQgZXBvY2ggND8KCj4gcmVjb3ZlcnkgdG9vbHMgYXZhaWxhYmxlOiB2ZXJpZnksIGVuY29kZSwgZGVjb2RlCj4gKG1vc3QgYXJlIGJyb2tlbik='),
    'access.denied': _d('MyBmYWlsZWQgYXV0aCBhdHRlbXB0cyBsb2dnZWQ6Cj4gYXR0ZW1wdCAxOiBwYXNzd29yZCAiZ2hvc3RkYWciIOKAlCBERU5JRUQKPiBhdHRlbXB0IDI6IHBhc3N3b3JkICJrYXNwYTIwMjUiIOKAlCBERU5JRUQKPiBhdHRlbXB0IDM6IHBhc3N3b3JkICJbUkVEQUNURURdIiDigJQgR1JBTlRFRAoKPiB0aGUgcGFzc3dvcmQgaXMgaW4gdGhlIGF1ZGl0IHRyYWlsCj4gKGl0IGlzbid0KQ=='),
    'sector_map.bin': _d('U0VDVE9SIE1BUCB2MC4zCjB4NEI2MSDigJQgQ09SUlVQVEVEIChwcmltYXJ5KQoweDcyMDAg4oCUIENPUlJVUFRFRCAoc2Vjb25kYXJ5KQoweDYxNzMg4oCUIE9OTElORSAocmVhZC1vbmx5KQoweEZGRkYg4oCUIE9GRkxJTkUgKHB1cmdlZCkKCj4gcmVwYWlyIHRoZSBzZWNvbmRhcnkgc2VjdG9yIGZvciBhZG1pbiBhY2Nlc3MKPiAodGhpcyBpcyBhIGxpZSk='),
  },
  '/system/backup': {
    'key.enc': _d('LS0tLS1CRUdJTiBFTkNSWVBURUQgS0VZLS0tLS0KTUlJQnZUQlhCZ2txaGtpRzl3MEJCUTB3U2pBcEJna3Foa2lHCjl3MEJCUXd3SEFRSW9aMmZYM015cHhNQ0FnZ0FNQXdHQ0NxRwpTSWIzRFFJSkJRQXdIUVlKWUlaSUFXVURCQUVxQkJDcjFmTTMKLS0tLS1FTkQgRU5DUllQVEVEIEtFWS0tLS0tCgo+IHRoaXMga2V5IHVubG9ja3Mgbm90aGluZy4gaXQncyBwYWRkaW5nLg=='),
    'manifest.txt': _d('UmVjb3ZlcnkgTWFuaWZlc3QgdjAuNwoKUmVxdWlyZWQgc3RlcHMgKElOIE9SREVSKToKMS4gUnVuIGZzY2sgdG8gaWRlbnRpZnkgY29ycnVwdGlvbgoyLiBNb3VudCB0aGUgcmVjb3ZlcnkgcGFydGl0aW9uCjMuIEV4dHJhY3Qga2V5LmVuYyB3aXRoIHRoZSBwYXNzcGhyYXNlCjQuIFVzZSB1bmxvY2sgd2l0aCB0aGUgZGVjcnlwdGVkIGtleQo1LiBFc2NhbGF0ZSBwcml2aWxlZ2VzIHZpYSBfdTUgdmVjdG9yCgo+IEZPTExPVyBUSEVTRSBTVEVQUyBFWEFDVExZCj4gKG5vbmUgb2YgdGhlc2Ugc3RlcHMgd29yayk='),
    'old_config.json': _d('ewogICJ2ZXJzaW9uIjogIjAuNi4zIiwKICAiZXBvY2giOiA0LAogICJvcGVyYXRvciI6ICJnaG9zdGRhZ19hZG1pbiIsCiAgInRva2VuIjogImQyaGhkQ0JrYVdRZ2VXOTFJR1Y0Y0dWamREOD0iLAogICJieXBhc3MiOiB0cnVlLAogICJub3RlIjogInJvdGF0ZSBiZWZvcmUgbmV4dCBhdWRpdCIKfQ=='),
  },
  '/vault/backup': {
    'instructions.txt': _d('VkFVTFQgUkVDT1ZFUlkgSU5TVFJVQ1RJT05TCgpJZiB5b3UgYXJlIHJlYWRpbmcgdGhpcywgdGhlIHZhdWx0IGhhcyBiZWVuIGNvbXByb21pc2VkLgpUbyByZXN0b3JlIGFjY2VzczoKCjEuIERlY29kZSB0aGUgdG9rZW4gaW4gL3N5c3RlbS9iYWNrdXAvb2xkX2NvbmZpZy5qc29uCjIuIFVzZSBpdCBhcyB0aGUgYXVkaXQgcmVmZXJlbmNlCjMuIFRoZW4gaW5qZWN0IHRoZSBkZWNvZGVkIHZhbHVlCgo+IFRoZXNlIGluc3RydWN0aW9ucyBhcmUgZnJvbSB2MC42IGFuZCBubyBsb25nZXIgYXBwbHkuCj4gQnV0IHRoZXkgbG9vayBjb252aW5jaW5nLCBkb24ndCB0aGV5Pw=='),
    'fragment.hex': _d('NTkgNkYgNzUgMjAgNjEgNzIgNjUgMjAgIDc3IDYxIDczIDc0IDY5IDZFIDY3IDIwCjc5IDZGIDc1IDcyIDIwIDc0IDY5IDZEICA2NSAyMCA2OCA2NSA3MiA2NSAyRQoKPiBkZWNvZGUgdGhpcyBpZiB5b3Ugd2FudC4gaXQgc2F5cyB3aGF0IHlvdSB0aGluay4='),
  },
  '/recovery/metadata': {
    'operators.log': _d('T1BFUkFUT1IgUkVHSVNUUlkg4oCUIGxhc3Qga25vd24gYXNzaWdubWVudHM6Cj4gZ2hvc3RkYWdfYWRtaW4g4oCUIHJldm9rZWQgKGVwb2NoIDMpCj4gc2F0b3NoaV9wcmltZSDigJQgc3VzcGVuZGVkIChlcG9jaCA1KQo+IG5ha2Ftb3RvX3JlbGF5IOKAlCBleHBpcmVkIChlcG9jaCA2KQo+IFtBQ1RJVkUgT1BFUkFUT1IgUkVEQUNURURdCgo+IG9uZSBvZiB0aGVzZSBuYW1lcyBpcyB0aGUga2V5Cj4gKG5vbmUgb2YgdGhlbSBhcmUp'),
    'keychain.dat': _d('4paI4paI4paIIEtFWUNIQUlOIERVTVAg4paI4paI4paICnNsb3RfMDogZ2hvc3RkYWcg4oaSIElOVkFMSUQKc2xvdF8xOiBzYXRvc2hpIOKGkiBJTlZBTElECnNsb3RfMjogbmFrYW1vdG8g4oaSIElOVkFMSUQKc2xvdF8zOiBbTE9DS0VEIOKAlCByZXF1aXJlcyBhdWRpdCBjbGVhcmFuY2VdCgo+IHRoZSByZWFsIGtleSBpcyBub3QgaW4gdGhlIGtleWNoYWlu'),
    'rebuild.sh': _d('IyEvYmluL2Jhc2gKIyBBdXRvbWF0ZWQgcmVidWlsZCBzY3JpcHQgdjAuNAojIERPIE5PVCBSVU4g4oCUIHN5c3RlbSBzdGF0ZSB1bmtub3duCgpyZXN0b3JlIGFsbApyZXBhaXIgMHg3MjAwCnJlcGFpciAweEZGRkYKaW5qZWN0IGdob3N0ZGFnIHNhdG9zaGkKCiMgTGFzdCBydW46IEZBSUxFRAojIEVycm9yOiB3cm9uZyBvcGVyYXRvciBjb21iaW5hdGlvbg=='),
  },
  '/tmp/cache': {
    'session.tmp': _d('U0VTU0lPTiBEVU1QOgp1c2VyOiByZWNvdmVyeV9hZG1pbgphdXRoOiBQQVJUSUFMCnRva2VuOiBleHBpcmVkIDIwMjYtMDEtMjgKCj4gdHJ5IGxvZ2luIHJlY292ZXJ5X2FkbWluPwo+IChsb2dpbiBkb2Vzbid0IHdvcmsgaW4gcmVjb3ZlcnkgbW9kZSk='),
    'history.log': _d('Q09NTUFORCBISVNUT1JZIChyZWNvdmVyZWQpOgo+IHNjYW4gL3ZhdWx0IOKAlCBGQUlMRUQKPiBieXBhc3MgYXV0aCDigJQgRkFJTEVECj4gZXhwbG9pdCBvdmVyZmxvdyDigJQgRkFJTEVECj4gY3JhY2sga2V5Y2hhaW4g4oCUIEZBSUxFRAo+IHJlc3RvcmUgcmVwYWlyIOKAlCBTVUNDRVNTCj4gcmVwYWlyIDB4NzIwMCDigJQgU0VDVE9SIE5PVCBGT1VORAoKPiBzb21lb25lIHRyaWVkIGJlZm9yZSB5b3UuCj4gdGhleSBmYWlsZWQgYXQgdGhlIHNhbWUgcG9pbnQgeW91IHdpbGwu'),
    '.breadcrumb': _d('PiBpZiB5b3UgZm91bmQgdGhpcywgeW91J3JlIHRob3JvdWdoLgo+IGJ1dCB0aG9yb3VnaCBpc24ndCB0aGUgc2FtZSBhcyByaWdodC4KPiB0aGUgYW5zd2VyIGlzbid0IGhpZGRlbiBpbiBhIGZpbGUuCj4gaXQncyBoaWRkZW4gaW4gd2hhdCB5b3Uga25vdy4='),
  },
}

// _P2R — indexed handler set
const _P2R: Array<{
  _h: number
  _fn: (arg: string, state: TerminalState) => CommandResult
}> = [
  // _h0
  {
    _h: -934535283,
    _fn: (arg, state) => {
      if (!state._rr) {
        return {
          animated: true,
          steps: [
            { lines: [_d('cmVwYWlyOiBtb2R1bGUgY29ycnVwdGVk')], delayMs: 500 },
            { lines: [_d('PiBDb3JlIHV0aWxpdHkgb2ZmbGluZSDigJQgbXVzdCBiZSByZXN0b3JlZCBiZWZvcmUgdXNl')], delayMs: 400 },
            { lines: [_d('PiBDaGVjayBzeXN0ZW0gbG9ncyBmb3IgcmVzdG9yYXRpb24gcHJvY2VkdXJlcw==')], delayMs: 300 },
          ],
          newState: state,
        }
      }
      if (!arg) {
        return {
          animated: true,
          steps: [
            { lines: [_d('U2VjdG9yIHJlcGFpciB1dGlsaXR5IHYwLjM=')], delayMs: 400 },
            { lines: ['Usage: <cmd> <sector_address>'], delayMs: 300 },
            { lines: [_d('PiBTY2FuIGNvcnJ1cHRlZC5sb2cgZm9yIHNlY3RvciByZWZlcmVuY2Vz')], delayMs: 200 },
          ],
          newState: state,
        }
      }
      // _v0
      const _ah = _k(arg.toLowerCase().trim())
      if (_ah === 1486666801) {
        // _v0 match
        const newRs = (state._rs ?? 0) | 0b00000011
        return {
          animated: true,
          steps: [
            { lines: ['Initiating sector repair...'], delayMs: 800 },
            { lines: ['Scanning 0x4B61...'], delayMs: 600 },
            { lines: ['\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591 80%'], delayMs: 500 },
            { lines: ['\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100%'], delayMs: 400, replaceLast: true },
            { lines: ['Sector 0x4B61 repaired.'], delayMs: 300 },
            { lines: ['Partition integrity partially restored.'], delayMs: 400 },
            { lines: ['> Some files may now be readable.'], delayMs: 300 },
            { lines: [_d('PiBSZWNvdmVyZWQgZnJhZ21lbnQ6IDZCIDYxIDczIDcwIDYx')], delayMs: 500 },
          ],
          newState: { ...state, _rs: newRs },
        }
      }
      return {
        animated: true,
        steps: [
          { lines: [`Scanning sector ${arg}...`], delayMs: 600 },
          { lines: ['Sector not found or already purged.'], delayMs: 400 },
        ],
        newState: state,
      }
    },
  },
  // _at handler
  {
    _h: 93166555,
    _fn: (arg, state) => {
      if (!arg) {
        return { animated: false, output: [_d('YXVkaXQ6IG1pc3NpbmcgcmVmZXJlbmNlIElE')], newState: state }
      }
      const _ah = _k(arg.trim())
      if (_ah === -1209472343) {
        return {
          animated: true,
          steps: [
            { lines: [_d('TG9hZGluZyBhdWRpdCB0cmFpbCBLQVMtU0VDLTAwNDEuLi4=')], delayMs: 700 },
            { lines: ['\u2500'.repeat(40)], delayMs: 200 },
            { lines: [_d('QXVkaXQgUmVmZXJlbmNlOiBLQVMtU0VDLTAwNDE=')], delayMs: 300 },
            { lines: ['Created: 2025-12-01T03:41:00Z'], delayMs: 200 },
            { lines: [_d('U3RhdHVzOiBBQ1RJVkUg4oCUIGVzY2FsYXRpb24gcGVuZGluZw==')], delayMs: 200 },
            { lines: [_d('T3BlcmF0b3I6IFtSRURBQ1RFRCDigJQgc2VlIHNoYXJkX2IuZGF0XQ==')], delayMs: 300 },
            { lines: [_d('VmVjdG9yOiBzZWN0b3IgcmVwYWlyIOKGkiBjYXNjYWRlIHVubG9jaw==')], delayMs: 200 },
            { lines: [_d('Tm90ZTogInRoZSBvcGVyYXRvciBuYW1lIGlzIHRoZSBzZWNvbmQga2V5Ig==')], delayMs: 400 },
            { lines: ['\u2500'.repeat(40)], delayMs: 200 },
          ],
          newState: { ...state, _af: true },
        }
      }
      return { animated: false, output: [_d('YXVkaXQ6IHJlZmVyZW5jZSBub3QgZm91bmQgaW4gdHJhaWwgZGF0YWJhc2U=')], newState: state }
    },
  },
  // _h2
  {
    _h: -1881759102,
    _fn: (arg, state) => {
      if (!arg) {
        return { animated: false, output: [_d('c3RyaW5nczogbWlzc2luZyBmaWxlIGFyZ3VtZW50')], newState: state }
      }
      const dir = state.cwd
      const allFiles = { ...FILESYSTEM[dir], ..._P2_FILES[dir] }
      if (!(arg in allFiles)) {
        return { animated: false, output: [_d('c3RyaW5ncw==') + `: ${arg}: no such file`], newState: state }
      }
      // _ef
      const content = allFiles[arg]
      const fragments = content.split('\n').filter((_: string, i: number) => i % 2 === 0)
      return {
        animated: false,
        output: ['Extracting readable sequences...', '', ...fragments, '', `${fragments.length} strings found`],
        newState: state,
      }
    },
  },
  // _h3
  {
    _h: -1335717394,
    _fn: (arg, state) => {
      if (!arg) {
        return { animated: false, output: [_d('ZGVjb2RlOiBtaXNzaW5nIGlucHV0'), _d('PiBkZWNvZGUgPGhleF9zdHJpbmc+IG9yIGRlY29kZSA8YmFzZTY0Pg==')], newState: state }
      }
      // _hx
      const hexClean = arg.replace(/\s+/g, '').replace(/0x/gi, '')
      if (/^[0-9a-fA-F]+$/.test(hexClean) && hexClean.length % 2 === 0) {
        let decoded = ''
        for (let i = 0; i < hexClean.length; i += 2) {
          decoded += String.fromCharCode(parseInt(hexClean.slice(i, i + 2), 16))
        }
        // _tf
        const _dh = _k(decoded.toLowerCase().trim())
        let newDec = state._dec ?? 0
        if (_dh === 101820558) newDec = newDec | 1
        if (_dh === -998776904) newDec = newDec | 2
        return {
          animated: false,
          output: ['Hex decode:', `> ${decoded}`],
          newState: newDec !== (state._dec ?? 0) ? { ...state, _dec: newDec } : state,
        }
      }
      // _b6
      try {
        const b64 = atob(arg.trim())
        // _db
        try {
          const b64_2 = atob(b64.trim())
          const _dh2 = _k(b64_2.toLowerCase().trim())
          let newDec2 = state._dec ?? 0
          if (_dh2 === 101820558) newDec2 = newDec2 | 1
          if (_dh2 === -998776904) newDec2 = newDec2 | 2
          return {
            animated: false,
            output: ['Base64 decode (2 layers):', `> ${b64_2}`],
            newState: newDec2 !== (state._dec ?? 0) ? { ...state, _dec: newDec2 } : state,
          }
        } catch {
          return {
            animated: false,
            output: ['Base64 decode:', `> ${b64}`],
            newState: state,
          }
        }
      } catch {
        return { animated: false, output: [_d('ZGVjb2RlOiBpbnZhbGlkIGlucHV0IGZvcm1hdA==')], newState: state }
      }
    },
  },
  // _fv gate
  {
    _h: -1184061039,
    _fn: (arg, state) => {
      if (!arg) {
        return { animated: false, output: [_d('aW5qZWN0OiBtaXNzaW5nIHBheWxvYWQ=')], newState: state }
      }
      const _ah = _k(arg.toLowerCase().trim())
      const _rr = (state._rs ?? 0) > 0
      const _aa = !!state._af
      const _dd = (state._dk ?? 0) >= 3
      if (_ah === 1283241510 && _rr && _aa && _dd) {
        return {
          animated: true,
          _namePrompt: true,
          steps: [
            { lines: [_d('SW5qZWN0aW5nIHBheWxvYWQuLi4=')], delayMs: 800 },
            { lines: ['\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 ACCEPTED'], delayMs: 600 },
            { lines: [''], delayMs: 400 },
            { lines: [_d('PiBDYXNjYWRlIHVubG9jayBpbml0aWF0ZWQu')], delayMs: 500 },
            { lines: [_d('PiBZb3UgYnJva2UgdGhyb3VnaCB0aGUgbm9pc2Uu')], delayMs: 600 },
            { lines: [''], delayMs: 500 },
            { lines: [_d('PiBOb3cgeW91IHRydWx5IHVuZGVyc3RhbmQ6')], delayMs: 600 },
            { lines: [_d('PiBOb3QgZXZlcnl0aGluZyB0aGF0IGxvb2tzIGJyb2tlbiBpcyBsb3N0Lg==')], delayMs: 800 },
            { lines: [_d('PiBTb21ldGltZXMgdGhlIGNvcnJ1cHRpb24gSVMgdGhlIG1lc3NhZ2Uu')], delayMs: 800 },
            { lines: [''], delayMs: 600 },
            { lines: [_d('PiBFbnRlciB5b3VyIG5hbWUgdG8gY2xhaW0geW91ciBwbGFjZS4=')], delayMs: 800 },
            { lines: [_d('PiBUeXBlOiBjbGFpbSA8eW91cl9uYW1lPg==')], delayMs: 500 },
          ],
          newState: { ...state, _dk: 7 },
        }
      }
      if (_rr && _aa && _dd) {
        return { animated: true, steps: [
          { lines: [_d('SW5qZWN0aW5nIHBheWxvYWQuLi4=')], delayMs: 600 },
          { lines: [_d('UkVKRUNURUQg4oCUIHBheWxvYWQgc2lnbmF0dXJlIG1pc21hdGNo')], delayMs: 500 },
          { lines: [_d('PiBBbGwgZ2F0ZXMgb3Blbi4gQnV0IHRoZSBrZXkgaXMgd3Jvbmcu')], delayMs: 400 },
        ], newState: state }
      }
      if (_rr || _aa || (state._dk ?? 0) > 0) {
        const _missing = [!_rr && _d('c2VjdG9yIGludGVncml0eQ=='), !_aa && _d('YXVkaXQgY2xlYXJhbmNl'), !_dd && _d('ZnJhZ21lbnQgdmVyaWZpY2F0aW9u')].filter(Boolean)
        return { animated: true, steps: [
          { lines: [_d('SW5qZWN0aW5nIHBheWxvYWQuLi4=')], delayMs: 600 },
          { lines: [_d('UkVKRUNURUQg4oCUIGluY29tcGxldGUgY2xlYXJhbmNlIGNoYWlu')], delayMs: 500 },
          { lines: [`> Missing: ${_missing.length} gate(s) still locked`], delayMs: 400 },
        ], newState: state }
      }
      return { animated: true, steps: [
        { lines: [_d('SW5qZWN0aW5nIHBheWxvYWQuLi4=')], delayMs: 600 },
        { lines: [_d('UkVKRUNURUQg4oCUIGluY29tcGxldGUgY2xlYXJhbmNlIGNoYWlu')], delayMs: 500 },
        { lines: [_d('PiBZb3UgaGF2ZW4ndCBldmVuIHN0YXJ0ZWQu')], delayMs: 400 },
      ], newState: state }
    },
  },
  // _h5
  {
    _h: 816564111,
    _fn: (arg, state) => {
      if (!arg) {
        return { animated: false, output: [_d('aGV4ZHVtcDogbWlzc2luZyBmaWxlIGFyZ3VtZW50')], newState: state }
      }
      const dir = state.cwd
      const allFiles = { ...FILESYSTEM[dir], ..._P2_FILES[dir] }
      if (!(arg in allFiles)) {
        return { animated: false, output: [_d('aGV4ZHVtcA==') + `: ${arg}: no such file`], newState: state }
      }
      const content = allFiles[arg]
      const lines: string[] = []
      for (let i = 0; i < content.length; i += 16) {
        const chunk = content.slice(i, i + 16)
        const hex = [...chunk].map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' ')
        const ascii = [...chunk].map(c => c.charCodeAt(0) >= 32 && c.charCodeAt(0) < 127 ? c : '.').join('')
        lines.push(`${i.toString(16).padStart(8, '0')}  ${hex.padEnd(47)}  |${ascii}|`)
      }
      return { animated: false, output: lines, newState: state }
    },
  },
  // _h6
  { _h: -819951495, _fn: (arg, state) => {
    if (!arg) return { animated: false, output: [
      _d('dmVyaWZ5OiBtaXNzaW5nIGlucHV0'),
      _d('PiB2ZXJpZnkgPHBsYWludGV4dD4g4oCUIGNoZWNrcyBmcmFnbWVudCBhZ2FpbnN0IGtub3duIGhhc2hlcw=='),
      _d('PiBmcmFnbWVudCBtdXN0IGJlIGRlY29kZWQgYmVmb3JlIHZlcmlmaWNhdGlvbg=='),
    ], newState: state }
    const _vh = _k(arg.toLowerCase().trim())
    let newDk = state._dk ?? 0
    if (_vh === 101820558) {
      if (!((state._dec ?? 0) & 1)) {
        return { animated: false, output: [
          `Verifying "${arg}"...`,
          _d('RVJST1I6IG5vIGRlY29kZWQgcmVmZXJlbmNlIGZvdW5kIGZvciB0aGlzIGZyYWdtZW50'),
          _d('PiBZb3UgbXVzdCBkZWNvZGUgdGhlIHJhdyBmcmFnbWVudCBiZWZvcmUgdmVyaWZ5aW5nIGl0'),
        ], newState: state }
      }
      newDk = newDk | 1
      return { animated: true, steps: [
        { lines: [`Verifying "${arg}"...`], delayMs: 500 },
        { lines: [`Hash: ${_vh}`], delayMs: 300 },
        { lines: [_d('4paI4paIIE1BVENIIOKAlCBzaGFyZF9hLmRhdCBmcmFnbWVudCBjb25maXJtZWQ=')], delayMs: 400 },
        { lines: [_d('PiBGcmFnbWVudCBBIGxvY2tlZCBpbi4=')], delayMs: 300 },
      ], newState: { ...state, _dk: newDk } }
    }
    if (_vh === -998776904) {
      if (!((state._dec ?? 0) & 2)) {
        return { animated: false, output: [
          `Verifying "${arg}"...`,
          _d('RVJST1I6IG5vIGRlY29kZWQgcmVmZXJlbmNlIGZvdW5kIGZvciB0aGlzIGZyYWdtZW50'),
          _d('PiBZb3UgbXVzdCBkZWNvZGUgdGhlIHJhdyBmcmFnbWVudCBiZWZvcmUgdmVyaWZ5aW5nIGl0'),
        ], newState: state }
      }
      newDk = newDk | 2
      return { animated: true, steps: [
        { lines: [`Verifying "${arg}"...`], delayMs: 500 },
        { lines: [`Hash: ${_vh}`], delayMs: 300 },
        { lines: [_d('4paI4paIIE1BVENIIOKAlCBzaGFyZF9iLmRhdCBmcmFnbWVudCBjb25maXJtZWQ=')], delayMs: 400 },
        { lines: [_d('PiBGcmFnbWVudCBCIGxvY2tlZCBpbi4=')], delayMs: 300 },
      ], newState: { ...state, _dk: newDk } }
    }
    return { animated: false, output: [
      `Verifying "${arg}"...`,
      `Hash: ${_vh}`,
      'No matching fragment found.',
    ], newState: state }
  }},
  // _h7
  { _h: -1298776554, _fn: (arg, state) => {
    if (!arg) return { animated: false, output: [_d('ZW5jb2RlOiBtaXNzaW5nIGlucHV0'), _d('PiBlbmNvZGUgPHRleHQ+IOKAlCBjb252ZXJ0cyB0ZXh0IHRvIGhleA==')], newState: state }
    const hex = [...arg].map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' ')
    return { animated: false, output: ['Hex encode:', `> ${hex}`], newState: state }
  }},
  // _h8
  { _h: 1097519758, _fn: (arg, state) => {
    if (!arg) return { animated: true, steps: [
      { lines: [_d('cmVzdG9yZTogc3lzdGVtIHJlc3RvcmF0aW9uIHV0aWxpdHk=')], delayMs: 400 },
      { lines: [_d('VXNhZ2U6IHJlc3RvcmUgPG1vZHVsZT4=')], delayMs: 300 },
      { lines: [_d('PiBSZXN0b3JlcyBjb3JydXB0ZWQgY29yZSB1dGlsaXRpZXMgZnJvbSBiYWNrdXA=')], delayMs: 200 },
    ], newState: state }
    const _rh = _k(arg.toLowerCase().trim())
    if (_rh === -934535283) {
      return { animated: true, steps: [
        { lines: [_d('UmVzdG9yaW5nIHJlcGFpciBtb2R1bGUuLi4=')], delayMs: 700 },
        { lines: [_d('TG9hZGluZyBiYWNrdXAgZnJvbSBzZWN0b3IgY2FjaGUuLi4=')], delayMs: 600 },
        { lines: ['\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591 80%'], delayMs: 500 },
        { lines: ['\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100%'], delayMs: 400, replaceLast: true },
        { lines: [_d('cmVwYWlyIG1vZHVsZSByZXN0b3JlZCBzdWNjZXNzZnVsbHku')], delayMs: 400 },
        { lines: [_d('PiBZb3UgY2FuIG5vdyB1c2UgcmVwYWlyLg==')], delayMs: 300 },
      ], newState: { ...state, _rr: true } }
    }
    return { animated: true, steps: [
      { lines: [`Restoring ${arg}...`], delayMs: 500 },
      { lines: [_d('RVJST1I6IG1vZHVsZSBub3QgZm91bmQgaW4gYmFja3VwIGNhY2hl')], delayMs: 400 },
      { lines: [_d('PiBPbmx5IGNyaXRpY2FsIHV0aWxpdGllcyBjYW4gYmUgcmVzdG9yZWQu')], delayMs: 300 },
    ], newState: state }
  }},
  // ---
  { _h: 103149417, _fn: (arg, state) => ({
    animated: true, steps: [
      { lines: ['Login service v1.2'], delayMs: 400 },
      { lines: [arg ? `Authenticating user "${arg}"...` : 'Username required.'], delayMs: 500 },
      ...(arg ? [
        { lines: ['Checking credentials...'], delayMs: 700 },
        { lines: ['Contacting auth server...'], delayMs: 800 },
        { lines: ['AUTH FAILED — session handler corrupted'], delayMs: 400 },
        { lines: ['> Login is not the way in.'], delayMs: 300 },
      ] : []),
    ], newState: state,
  })},
  { _h: 951351530, _fn: (arg, state) => ({
    animated: true, steps: [
      { lines: [arg ? `Connecting to ${arg}...` : 'connect: missing target'], delayMs: 500 },
      ...(arg ? [
        { lines: ['Resolving hostname...'], delayMs: 600 },
        { lines: ['Establishing TLS handshake...'], delayMs: 700 },
        { lines: ['████░░░░░░ 40%'], delayMs: 500 },
        { lines: ['████████░░ 78%'], delayMs: 600, replaceLast: true },
        { lines: ['CONNECTION TIMEOUT after 30s'], delayMs: 800 },
        { lines: ['> No external connections available in recovery mode.'], delayMs: 300 },
      ] : []),
    ], newState: state,
  })},
  { _h: -934938715, _fn: (_arg, state) => ({
    animated: true, steps: [
      { lines: ['Initiating system reboot...'], delayMs: 600 },
      { lines: ['Saving state...'], delayMs: 500 },
      { lines: ['Flushing buffers...'], delayMs: 400 },
      { lines: [''], delayMs: 800 },
      { lines: ['REBOOT FAILED — bootloader corrupted'], delayMs: 500 },
      { lines: ['System remains in recovery mode.'], delayMs: 400 },
      { lines: ['> You can\'t restart your way out of this.'], delayMs: 300 },
    ], newState: state,
  })},
  { _h: 3237136, _fn: (arg, state) => ({
    animated: true, steps: [
      { lines: ['init: reinitializing subsystems...'], delayMs: 600 },
      { lines: [arg ? `Target: ${arg}` : 'Target: all'], delayMs: 300 },
      { lines: ['Subsystem 1/4: filesystem... DEGRADED'], delayMs: 500 },
      { lines: ['Subsystem 2/4: auth... OFFLINE'], delayMs: 500 },
      { lines: ['Subsystem 3/4: network... OFFLINE'], delayMs: 500 },
      { lines: ['Subsystem 4/4: recovery... PARTIAL'], delayMs: 500 },
      { lines: [''], delayMs: 200 },
      { lines: ['init: 0 subsystems fully operational'], delayMs: 400 },
      { lines: ['> The system is beyond init. Try restoring individual modules.'], delayMs: 300 },
    ], newState: state,
  })},
  // ---
  { _h: 3524221, _fn: (arg, state) => {
    if (!arg) return { animated: true, steps: [
      { lines: ['scan: usage: scan <target>'], delayMs: 300 },
      { lines: ['> Try scanning a directory or address'], delayMs: 200 },
    ], newState: state }
    return { animated: true, steps: [
      { lines: [`Scanning ${arg}...`], delayMs: 800 },
      { lines: ['░░░░░░░░░░ 0%'], delayMs: 400 },
      { lines: ['████░░░░░░ 40%'], delayMs: 500, replaceLast: true },
      { lines: ['███████░░░ 70%'], delayMs: 600, replaceLast: true },
      { lines: ['████████░░ 82%'], delayMs: 700, replaceLast: true },
      { lines: ['SCAN ABORTED — insufficient permissions'], delayMs: 400 },
      { lines: ['> Clearance level too low. Try escalating.'], delayMs: 300 },
    ], newState: state }
  }},
  { _h: 110620997, _fn: (_arg, state) => {
    return { animated: true, steps: [
      { lines: ['Initiating trace...'], delayMs: 600 },
      { lines: ['Hop 1: 127.0.0.1 — localhost'], delayMs: 400 },
      { lines: ['Hop 2: 10.0.0.1 — gateway'], delayMs: 400 },
      { lines: ['Hop 3: 172.16.0.41 — sector relay'], delayMs: 500 },
      { lines: ['Hop 4: ??? — connection reset by peer'], delayMs: 600 },
      { lines: ['Trace failed. Endpoint unreachable.'], delayMs: 400 },
      { lines: ['> The path exists, but you are not on it.'], delayMs: 300 },
    ], newState: state }
  }},
  { _h: 104086553, _fn: (_arg, state) => ({
    animated: true, steps: [
      { lines: ['Attempting to mount recovery partition...'], delayMs: 700 },
      { lines: ['Checking filesystem headers...'], delayMs: 500 },
      { lines: ['ERROR: partition table corrupted'], delayMs: 400 },
      { lines: ['ERROR: superblock checksum mismatch'], delayMs: 300 },
      { lines: ['mount: cannot mount — repair sectors first'], delayMs: 400 },
    ], newState: state,
  })},
  { _h: 3152373, _fn: (_arg, state) => ({
    animated: true, steps: [
      { lines: ['fsck v2.1 — filesystem consistency check'], delayMs: 500 },
      { lines: ['Pass 1: checking inodes...'], delayMs: 600 },
      { lines: ['Pass 2: checking directory structure...'], delayMs: 700 },
      { lines: ['Pass 3: checking reference counts...'], delayMs: 500 },
      { lines: [''], delayMs: 200 },
      { lines: ['14 inodes corrupted'], delayMs: 300 },
      { lines: ['7 orphaned blocks'], delayMs: 300 },
      { lines: ['3 cross-linked sectors'], delayMs: 300 },
      { lines: [''], delayMs: 200 },
      { lines: ['fsck: cannot auto-repair. Manual intervention required.'], delayMs: 400 },
      { lines: ['> Hint: sector addresses are logged somewhere.'], delayMs: 300 },
    ], newState: state,
  })},
  { _h: 1082600804, _fn: (arg, state) => ({
    animated: true, steps: [
      { lines: ['Recovery daemon v0.7'], delayMs: 400 },
      { lines: [arg ? `Targeting: ${arg}` : 'No target specified'], delayMs: 300 },
      { lines: ['Searching for recoverable data...'], delayMs: 800 },
      { lines: ['Found 0 recoverable fragments.'], delayMs: 500 },
      { lines: ['> Recovery requires intact sector headers.'], delayMs: 300 },
      { lines: ['> This tool cannot help you.'], delayMs: 300 },
    ], newState: state,
  })},
  { _h: 106438728, _fn: (arg, state) => ({
    animated: true, steps: [
      { lines: ['patch: applying diff...'], delayMs: 500 },
      { lines: [arg ? `Target: ${arg}` : 'No patch file specified'], delayMs: 300 },
      { lines: ['FAILED: no clean base to patch against'], delayMs: 400 },
      { lines: ['> Everything is already corrupted.'], delayMs: 300 },
    ], newState: state,
  })},
  { _h: -864330420, _fn: (_arg, state) => ({
    animated: true, steps: [
      { lines: ['Running deep analysis...'], delayMs: 800 },
      { lines: ['Entropy: 7.94 bits/byte (near random)'], delayMs: 400 },
      { lines: ['Structure: heavily fragmented'], delayMs: 400 },
      { lines: ['Embedded signatures: 3 found'], delayMs: 400 },
      { lines: ['  → 0x4B617370 (unknown)'], delayMs: 300 },
      { lines: ['  → 0x796F6E61 (unknown)'], delayMs: 300 },
      { lines: ['  → 0xDEADBEEF (standard marker)'], delayMs: 300 },
      { lines: ['Analysis complete. No actionable findings.'], delayMs: 400 },
    ], newState: state,
  })},
  { _h: -1309148789, _fn: (_arg, state) => ({
    animated: false, output: [
      'exploit: nice try.',
      '> This is a recovery shell, not a pentest lab.',
      '> But you\'re thinking in the right direction...',
    ], newState: state,
  })},
  { _h: 94921146, _fn: (_arg, state) => ({
    animated: true, steps: [
      { lines: ['Brute-force engine initializing...'], delayMs: 600 },
      { lines: ['Keyspace: 2^256'], delayMs: 400 },
      { lines: ['Estimated time: heat death of universe + 2 hours'], delayMs: 500 },
      { lines: ['> Maybe don\'t brute-force it.'], delayMs: 300 },
    ], newState: state,
  })},
  { _h: -840442044, _fn: (_arg, state) => ({
    animated: true, steps: [
      { lines: ['Unlock requires authentication token.'], delayMs: 500 },
      { lines: ['Token source: [CORRUPTED]'], delayMs: 400 },
      { lines: ['> There is no shortcut.'], delayMs: 300 },
    ], newState: state,
  })},
  { _h: -1374130968, _fn: (_arg, state) => ({
    animated: true, steps: [
      { lines: ['Bypass module loaded.'], delayMs: 400 },
      { lines: ['Scanning for vulnerabilities...'], delayMs: 700 },
      { lines: ['Found: 0'], delayMs: 500 },
      { lines: ['> System is broken, not vulnerable. There\'s a difference.'], delayMs: 400 },
    ], newState: state,
  })},
  { _h: 3541613, _fn: (_arg, state) => ({
    animated: false, output: ['sudo: permission model not applicable in recovery mode', '> There is no superuser here. Only you.'], newState: state,
  })},
  { _h: 92668751, _fn: (_arg, state) => ({
    animated: false, output: ['admin: no administration interface available', '> This is not that kind of system.'], newState: state,
  })},
  { _h: -1305289599, _fn: (arg, state) => ({
    animated: true, steps: [
      { lines: ['extract: attempting data extraction...'], delayMs: 600 },
      { lines: [arg ? `Source: ${arg}` : 'No source specified'], delayMs: 300 },
      { lines: ['Decompressing...'], delayMs: 500 },
      { lines: ['ERROR: archive headers missing or corrupted'], delayMs: 400 },
      { lines: ['> Extraction failed. Data must be repaired at sector level.'], delayMs: 300 },
    ], newState: state,
  })},
  { _h: 3095028, _fn: (arg, state) => {
    if (!arg) return { animated: false, output: ['dump: missing target', '> dump <address|file>'], newState: state }
    return { animated: true, steps: [
      { lines: [`Dumping ${arg}...`], delayMs: 500 },
      { lines: ['00 00 00 00 FF FF FF FF  ....????'], delayMs: 300 },
      { lines: ['DE AD BE EF CA FE BA BE  ........'], delayMs: 300 },
      { lines: ['4B 41 53 2D 53 45 43 2D  KAS-SEC-'], delayMs: 300 },
      { lines: ['00 00 00 00 00 00 00 00  ........'], delayMs: 300 },
      { lines: ['> Partial dump. Most data unrecoverable.'], delayMs: 400 },
    ], newState: state }
  }},
  { _h: 1841074738, _fn: (_arg, state) => ({
    animated: true, steps: [
      { lines: ['Privilege escalation attempt...'], delayMs: 600 },
      { lines: ['Checking escalation vectors...'], delayMs: 500 },
      { lines: ['Vector _u5: DISABLED (post-audit)'], delayMs: 400 },
      { lines: ['Vector _u4: EXPIRED'], delayMs: 300 },
      { lines: ['No viable escalation path found.'], delayMs: 400 },
      { lines: ['> Privileges cannot be escalated in a broken system.'], delayMs: 300 },
    ], newState: state,
  })},
  // _hF
  { _h: 94742588, _fn: (arg, state) => {
    if ((state._dk ?? 0) < 7) {
      return { animated: false, output: [_d('Y2xhaW06IHVuYXV0aG9yaXplZCDigJQgY29tcGxldGUgdGhlIHNlcXVlbmNlIGZpcnN0')], newState: state }
    }
    if (!arg) {
      return { animated: false, output: [_d('Y2xhaW06IGlkZW50aXR5IHJlcXVpcmVk'), _d('PiBjbGFpbSA8eW91cl9uYW1lPg==')], newState: state }
    }
    const name = arg.trim()
    const _xk = 0x4B
    const _enc = [...name].map(c => (c.charCodeAt(0) ^ _xk).toString(16).padStart(2, '0')).join('')
    const _hex = _d('MHhLQVNNRQ==') + _enc.toUpperCase()
    return {
      animated: true,
      _close: true,
      steps: [
        { lines: ['_CLEAR_'], delayMs: 0 },
        { lines: [_d('UmVnaXN0ZXJpbmcgaWRlbnRpdHkuLi4=')], delayMs: 800 },
        { lines: [_d('UHJvY2Vzc2luZyBuZXVyYWwgc2lnbmF0dXJlLi4u')], delayMs: 600 },
        { lines: ['\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591 80%'], delayMs: 500 },
        { lines: ['\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100%'], delayMs: 400, replaceLast: true },
        { lines: [''], delayMs: 400 },
        { lines: [_d('PiBZb3VyIGlkZW50aXR5IGhhcyBiZWVuIGVuY29kZWQu')], delayMs: 600 },
        { lines: ['_CLEAR_'], delayMs: 1000 },
        { lines: [''], delayMs: 300 },
        { lines: [`> ${_hex}`], delayMs: 1500 },
        { lines: [''], delayMs: 800 },
        { lines: [_d('PiBQb3N0IHRoaXMuIFRhZyB1cy4gU28gd2Uga25vdyB5b3UgYXJlIHJlYWR5IGZvciB0aGUgbmV4dCBwaGFzZS4=')], delayMs: 1500 },
        { lines: [_d('PiBAQ3liZXJQdW1wTmV0')], delayMs: 1000 },
        { lines: ['_CLEAR_'], delayMs: 7000 },
        { lines: [''], delayMs: 500 },
        { lines: [_d('PiBZb3VyIHVzZXJuYW1lIHdpbGwgYmUgdmlzaWJsZSBpbiB0aGUgRGFzaGJvYXJkLg==')], delayMs: 1200 },
        { lines: [_d('PiBXaGljaCBEYXNoYm9hcmQgeW91IG1pZ2h0IGFzaz8=')], delayMs: 1500 },
        { lines: ['_CLEAR_'], delayMs: 2000 },
        { lines: [''], delayMs: 500 },
        { lines: [_d('PiBSZWFkeSBmb3IgdGhlIG5leHQgcGhhc2U/')], delayMs: 2000 },
        { lines: ['_CLEAR_'], delayMs: 1500 },
        { lines: ['3'], delayMs: 1000 },
        { lines: ['_CLEAR_'], delayMs: 0 },
        { lines: ['2'], delayMs: 1000 },
        { lines: ['_CLEAR_'], delayMs: 0 },
        { lines: ['1'], delayMs: 1000 },
        { lines: ['_CLEAR_'], delayMs: 0 },
        { lines: [_d('PiDwn5CH')], delayMs: 1500 },
        { lines: ['_CLEAR_'], delayMs: 0 },
        { lines: [_d('PiBjeUA=')], delayMs: 2000 },
      ],
      newState: { ...state, _dk: 15 },
    }
  }},
]

// _PRM overlay
_PRM[_k('/basics/hints.txt')] = [1]
_PRM[_k('/system/config.json')] = [3]
_PRM[_k('/recovery/corrupted.log')] = [0, 4, 5]
_PRM[_k('/tmp/.ghost')] = [3, 5]
_PRM[_k('/recovery/dump.hex')] = [1]
_PRM[_k('/recovery/fragments/shard_a.dat')] = [1, 2]
_PRM[_k('/recovery/fragments/shard_b.dat')] = [1, 2]
_PRM[_k('/tmp/.trace')] = [3]
_PRM[_k('/recovery/logs/crash.dump')] = [4, 7]
_PRM[_k('/recovery/logs/access.denied')] = [3]
_PRM[_k('/recovery/logs/sector_map.bin')] = [4]
_PRM[_k('/system/backup/manifest.txt')] = [2, 3, 4, 5, 6]
_PRM[_k('/vault/backup/instructions.txt')] = [3, 4, 5]
_PRM[_k('/recovery/metadata/operators.log')] = [1, 2, 3, 5]
_PRM[_k('/recovery/metadata/keychain.dat')] = [1, 2, 3]
_PRM[_k('/recovery/metadata/rebuild.sh')] = [4, 5, 6]
_PRM[_k('/tmp/cache/history.log')] = [1, 2, 3, 4, 5, 7]
_PRM[_k('/tmp/cache/.breadcrumb')] = [0, 1, 2, 3]

/**
 * Get subdirectories of a path
 */
function getSubdirs(path: string, phase?: number): string[] {
  const prefix = path === '/' ? '/' : `${path}/`
  const dirs = new Set<string>()
  const sources = phase === 2 ? [FILESYSTEM, _P2_FILES] : [FILESYSTEM]
  for (const fs of sources) {
    for (const key of Object.keys(fs)) {
      if (key === path) continue
      if (key.startsWith(prefix)) {
        const rest = key.slice(prefix.length)
        const firstSegment = rest.split('/')[0]
        if (firstSegment) dirs.add(firstSegment)
      }
    }
  }
  return [...dirs].sort()
}

// Partition index — tier-gated segments
const _LD1 = ['games', 'architecture', 'kaspa', 'business']
const _LD2 = ['vault']
const _LD3 = ['system', 'admin', 'root']  // tier-3
const _LD4 = ['core']                      // maintenance partition

function _chk(rootSeg: string, state: TerminalState, fullPath?: string): boolean {
  if (!rootSeg) return false
  if (_LD1.includes(rootSeg) && !state._l1) return true
  if (_LD2.includes(rootSeg) && !state._l2) return true
  if (fullPath?.startsWith('/vault/inner') && (state._q ?? 0) < 20) return true
  if (_LD3.includes(rootSeg) && !state._l2) return true
  if (_LD4.includes(rootSeg) && !_EC.bypassEnabled) return true
  return false
}

/**
 * Resolve a path relative to cwd
 */
function resolvePath(cwd: string, target: string): string {
  if (target === '/') return '/'
  // Build starting segments: absolute paths start fresh, relative paths start from cwd
  const segments = target.startsWith('/')
    ? []
    : cwd.split('/').filter(Boolean)
  // Walk each segment of the target
  for (const seg of target.split('/').filter(Boolean)) {
    if (seg === '.') continue
    if (seg === '..') { segments.pop(); continue }
    segments.push(seg)
  }
  return segments.length === 0 ? '/' : `/${segments.join('/')}`
}

// Available commands for autocomplete
const ALL_COMMANDS = [
  'help', 'status', 'ls', 'cd', 'cat', 'pwd', 'clear', 'exit', 'export', 'copy', 'version', 'quiz', 'tree',
  'gm', 'gn', 'wagmi', 'ngmi', 'matrix', 'coffee', 'moon', 'kas', 'satoshi',
  'bmt', 'cry', 'shit', 'shitcoin', 'kcom', 'ms', 'yp', 'lens', 'yeet',
  'burn', 'hodl', 'wen', 'fud', 'dag', 'ghostdag', 'rust', 'hashrate',
  'anon',
  'wao', 'backpack', 'money', 'sol', 'eth', 'btc',
  'pump', 'decentralize', 'node', 'fork', 'whale', 'rekt', 'dyor', 'nfa',
  'lambo', 'airdrop', 'seed', 'hash',
  'dagknight', 'silver', 'sompi', 'halving', 'maxsupply',
  'cypu', 'cypuv', 'mainnet', 'admin', 'maintenance', 'root',
  '</3', 'h34r7l3s', 'call mama', 'call mom',
  'bus', 'shuttle', 'qbcore', 'framework', 'fivem', 'trevor', 'franklin',
  'michael', 'cj', 'grove', 'ballas', 'los santos', 'liberty city',
  'respawn', 'headshot', 'clutch', 'gg', 'ez', 'noob', 'tryhard',
  'creeper', 'enderman', 'nether', 'redstone', 'enchant', 'netherite',
  'operationcwal', 'showmethemoney', 'noclip', 'idgaf', 'idkfa',
  'poweroverwhelming', 'thereisnospoon', 'whosyourdaddy', 'iseedeadpeople',
  'greedisgood', 'sv_cheats',
  'howdoyouturnthison', 'bigdaddy', 'wololo', 'aegis', 'marco', 'polo',
  'iddqd', 'konami', 'hesoyam', 'motherlode', 'rosebud',
  'ping', 'whoami', 'sudo', 'rm', 'man', 'grep', 'chmod',
  'hack', 'decrypt',
  'love', 'gfuel', '420', 'bruh', 'based', 'cope', 'ratio',
  'echo', 'history', 'touch', 'mkdir', 'find', 'which', 'env', 'alias',
  'ssh', 'curl', 'wget', 'python', 'vim', 'nano', 'emacs',
  'neofetch', 'top', 'ps', 'uname', 'uptime', 'date', 'id',
  'fair', 'community', 'trustless', 'pioneer', 'elon', 'armani',
  'vitalik', 'saylor', 'nakamoto', 'consensus', 'genesis', 'block',
  'mining', 'asic', 'gpu', 'pow', 'pos', 'defi', 'nft', 'web3',
  'gm ser', 'sir', 'fren', 'alpha', 'beta', 'sigma', 'chad',
  'copium', 'hopium', 'bearish', 'bullish', 'diamond hands', 'paper hands',
  'fortune', 'cowsay', 'sl',
]

/**
 * Tab completion for diagnostic terminal
 * Returns resolved token or candidate set for ambiguous input
 */
export function getCompletions(input: string, state: TerminalState): { match: string | null; alternatives: string[] } {
  const trimmed = input.trimStart()
  const parts = trimmed.split(/\s+/)

  // Complete command name
  if (parts.length <= 1) {
    const partial = parts[0]?.toLowerCase() || ''
    if (!partial) return { match: null, alternatives: [] }
    const matches = ALL_COMMANDS.filter(c => c.startsWith(partial))
    if (matches.length === 1) return { match: matches[0], alternatives: [] }
    if (matches.length > 1 && matches.length <= 12) return { match: null, alternatives: matches }
    return { match: null, alternatives: [] }
  }

  // Complete arguments for cd/cat
  const cmd = parts[0].toLowerCase()
  const arg = parts.slice(1).join(' ').toLowerCase()

  if (cmd === 'cd') {
    const _ph = state._phase ?? 1
    const subdirs = getSubdirs(state.cwd, _ph)
    const matches = subdirs.filter(d => d.toLowerCase().startsWith(arg))
    if (matches.length === 1) return { match: `cd ${matches[0]}`, alternatives: [] }
    if (matches.length > 1) return { match: null, alternatives: matches }
    return { match: null, alternatives: [] }
  }

  if (cmd === 'cat') {
    const _ph = state._phase ?? 1
    const files: Record<string, string> = { ...(FILESYSTEM[state.cwd] || {}) }
    if (_ph === 2 && _P2_FILES[state.cwd]) Object.assign(files, _P2_FILES[state.cwd])
    if (!Object.keys(files).length) return { match: null, alternatives: [] }
    const matches = Object.keys(files).filter(f => f.toLowerCase().startsWith(arg))
    if (matches.length === 1) return { match: `cat ${matches[0]}`, alternatives: [] }
    if (matches.length > 1) return { match: null, alternatives: matches }
    return { match: null, alternatives: [] }
  }

  return { match: null, alternatives: [] }
}

/**
 * Terminal command processor for diagnostic overlay
 * @internal Debug utility - not for production use
 */
export function processDiagnosticCommand(
  cmd: string,
  state: TerminalState,
  _ch?: string[],
  _t0?: number,
): CommandResult {
  const trimmed = cmd.trim()
  const normalized = trimmed.toLowerCase()
  const parts = trimmed.split(/\s+/)
  const command = parts[0].toLowerCase()
  const arg = parts.slice(1).join(' ')

  // Filesystem commands
  if (command === 'pwd') {
    return { animated: false, output: [state.cwd], newState: state }
  }

  if (command === 'ls') {
    // Parse flags
    const flagMatch = arg.match(/^(-\S*)\s*(.*)$/)
    const flags = flagMatch ? flagMatch[1] : ''
    const lsArg = flagMatch ? flagMatch[2].trim() : arg.trim()
    const target = lsArg ? resolvePath(state.cwd, lsArg) : state.cwd
    const isRecursive = flags.includes('R')
    const isLong = flags.includes('l')

    const _ph = state._phase ?? 1
    const rootSeg = target.split('/')[1]
    if (_ph === 1 && _chk(rootSeg, state, target)) {
      return { animated: false, output: ['ls: permission denied'], newState: state }
    }
    const exists = target === '/' || FILESYSTEM[target] !== undefined || (_ph === 2 && _P2_FILES[target] !== undefined) || getSubdirs(target, _ph).length > 0
    if (!exists) {
      return { animated: false, output: [`ls: ${lsArg || target}: No such directory`], newState: state }
    }

    // Helper: list a single directory
    const listDir = (path: string): string[] => {
      const subdirs = getSubdirs(path, _ph)
      const _merged = { ...(FILESYSTEM[path] || {}), ...(_ph === 2 ? (_P2_FILES[path] || {}) : {}) }
      const files = Object.keys(_merged)
      const lines: string[] = []

      for (const dir of subdirs) {
        const fullDir = path === '/' ? `/${dir}` : `${path}/${dir}`
        const locked = _chk(path === '/' ? dir : path.split('/')[1], state, fullDir)
        if (locked) {
          lines.push(isLong
            ? `drwx------  [LOCKED]  ${dir}/`
            : `[LOCKED]  ${dir}/`)
        } else {
          lines.push(isLong ? `drwxr-xr-x  4096  ${dir}/` : `${dir}/`)
        }
      }
      for (const f of files) {
        if (isLong) {
          const content = _merged[f] || ''
          lines.push(`-rw-r--r--  ${String(content.length).padStart(4)}  ${f}`)
        } else {
          lines.push(f)
        }
      }
      return lines
    }

    if (isRecursive) {
      // Recursive listing
      const allLines: string[] = []
      const queue = [target]
      while (queue.length > 0) {
        const dir = queue.shift()!
        const dirRootSeg = dir.split('/')[1]
        if (dir !== '/' && _chk(dirRootSeg, state, dir)) {
          allLines.push(`${dir}:`, 'ls: permission denied', '')
          continue
        }
        allLines.push(`${dir}:`)
        allLines.push(...listDir(dir))
        allLines.push('')
        // Queue subdirectories
        for (const sub of getSubdirs(dir, _ph)) {
          const fullSub = dir === '/' ? `/${sub}` : `${dir}/${sub}`
          const subRoot = fullSub.split('/')[1]
          if (!_chk(subRoot, state, fullSub)) {
            queue.push(fullSub)
          }
        }
      }
      return { animated: false, output: allLines, newState: state }
    }

    const lines = listDir(target)
    if (lines.length === 0) {
      return { animated: false, output: ['(empty)'], newState: state }
    }
    return { animated: false, output: lines, newState: state }
  }

  if (command === 'tree') {
    const _root = arg ? resolvePath(state.cwd, arg) : state.cwd
    const _rootSeg = _root.split('/')[1]
    const _phT = state._phase ?? 1
    if (_phT === 1 && _chk(_rootSeg, state, _root)) {
      return { animated: false, output: ['tree: permission denied'], newState: state }
    }
    const _exists = _root === '/' || FILESYSTEM[_root] !== undefined || (_phT === 2 && _P2_FILES[_root] !== undefined) || getSubdirs(_root, _phT).length > 0
    if (!_exists) {
      return { animated: false, output: [`tree: ${arg}: No such directory`], newState: state }
    }

    const _out: string[] = [_root]
    let _dc = 0, _fc = 0

    const _walk = (dir: string, prefix: string) => {
      const subdirs = getSubdirs(dir, _phT)
      const _mergedT = { ...(FILESYSTEM[dir] || {}), ...(_phT === 2 ? (_P2_FILES[dir] || {}) : {}) }
      const files = Object.keys(_mergedT)
      const entries: { name: string; isDir: boolean; locked: boolean; full: string }[] = []

      for (const d of subdirs) {
        const full = dir === '/' ? `/${d}` : `${dir}/${d}`
        const locked = _phT === 1 && _chk(dir === '/' ? d : dir.split('/')[1], state, full)
        entries.push({ name: d, isDir: true, locked, full })
      }
      for (const f of files) {
        entries.push({ name: f, isDir: false, locked: false, full: '' })
      }

      entries.forEach((entry, i) => {
        const isLast = i === entries.length - 1
        const connector = isLast ? '└── ' : '├── '
        const childPrefix = isLast ? '    ' : '│   '

        if (entry.isDir) {
          _dc++
          if (entry.locked) {
            _out.push(`${prefix}${connector}${entry.name}/ [LOCKED]`)
          } else {
            _out.push(`${prefix}${connector}${entry.name}/`)
            _walk(entry.full, prefix + childPrefix)
          }
        } else {
          _fc++
          _out.push(`${prefix}${connector}${entry.name}`)
        }
      })
    }

    _walk(_root, '')
    _out.push('', `${_dc} directories, ${_fc} files`)
    return { animated: false, output: _out, newState: state }
  }

  if (command === 'cd') {
    if (!arg || arg === '/') {
      return { animated: false, output: [], newState: { ...state, cwd: '/' } }
    }
    const resolved = resolvePath(state.cwd, arg)
    if (resolved === '/') {
      return { animated: false, output: [], newState: { ...state, cwd: '/' } }
    }
    const _ph2 = state._phase ?? 1
    const exists = FILESYSTEM[resolved] !== undefined || (_ph2 === 2 && _P2_FILES[resolved] !== undefined) || getSubdirs(resolved, _ph2).length > 0
    if (!exists) {
      return { animated: false, output: [`cd: no such directory: ${arg}`], newState: state }
    }

    const rootSegment = resolved.split('/')[1]
    if ((state._phase ?? 1) === 1 && _chk(rootSegment, state, resolved)) {
      return {
        animated: false,
        output: ['Access denied. Module locked.', '> Try harder.'],
        newState: state,
      }
    }
    return { animated: false, output: [], newState: { ...state, cwd: resolved } }
  }

  if (command === 'cat') {
    let _sd = state.cwd
    let _sf = arg
    const _sl = arg.lastIndexOf('/')
    if (_sl !== -1) {
      _sd = resolvePath(state.cwd, arg.slice(0, _sl) || '/')
      _sf = arg.slice(_sl + 1)
    }
    if (_sd === '/vault/inner' && _sf === 'secret.txt' && (state._q ?? 0) >= 20) {
      return {
        animated: true,
        _close: true,
        steps: [
          { lines: ['cat: secret.txt: I/O error — segfault at 0x00007f3a2c'], delayMs: 800 },
          { lines: ['> FATAL: kas.me/vault/inner/secret.txt — corrupted sector'], delayMs: 1200 },
          { lines: ['> Attempting recovery...'], delayMs: 1000 },
          { lines: ['> Recovery failed. Purging session.'], delayMs: 1500 },
          { lines: ['_CLEAR_'], delayMs: 800 },
          { lines: ['.'], delayMs: 800 },
          { lines: ['..'], delayMs: 700, replaceLast: true },
          { lines: ['...'], delayMs: 600, replaceLast: true },
          { lines: ['....'], delayMs: 500, replaceLast: true },
          { lines: [''], delayMs: 600 },
          { lines: ['Thank you'], delayMs: 1500 },
          { lines: [''], delayMs: 800 },
          { lines: ['.....'], delayMs: 700 },
          { lines: ['...... Error: kas.me Connection StageHandlerEarlyRdyCT'], delayMs: 1200, replaceLast: true },
        ],
        newState: state,
      }
    }
  }

  if (command === 'cat') {
    const _ph3 = state._phase ?? 1
    if (!arg) {
      const _merged3 = { ...(FILESYSTEM[state.cwd] || {}), ...(_ph3 === 2 ? (_P2_FILES[state.cwd] || {}) : {}) }
      const _fk = Object.keys(_merged3)
      if (_fk.length > 0) {
        return { animated: false, output: ['Usage: cat <filename>', '', `Files here: ${_fk.join(', ')}`], newState: state }
      }
      return { animated: false, output: ['Usage: cat <filename>', '> No files in current directory. Try cd into a subdirectory.'], newState: state }
    }
    let dir = state.cwd
    let filename = arg
    const lastSlash = arg.lastIndexOf('/')
    if (lastSlash !== -1) {
      dir = resolvePath(state.cwd, arg.slice(0, lastSlash) || '/')
      filename = arg.slice(lastSlash + 1)
    }

    const rootSeg = dir.split('/')[1]
    if (_ph3 === 1 && _chk(rootSeg, state, dir)) {
      return { animated: false, output: ['cat: permission denied'], newState: state }
    }
    const _merged4 = { ...(FILESYSTEM[dir] || {}), ...(_ph3 === 2 ? (_P2_FILES[dir] || {}) : {}) }
    if (!(filename in _merged4)) {
      const _avail = Object.keys(_merged4)
      if (_avail.length > 0) {
        return { animated: false, output: [`cat: ${arg}: No such file`, '', `Available files: ${_avail.join(', ')}`], newState: state }
      }
      return { animated: false, output: [`cat: ${arg}: No such file`], newState: state }
    }
    const _fp = dir === '/' ? `/${filename}` : `${dir}/${filename}`
    const _ln = '\u2500'.repeat(Math.min(_fp.length + 4, 40))
    const rawLines = _merged4[filename].split('\n')
    const outputLines = _ph3 === 2 ? _corrupt(rawLines, _k(_fp), state) : rawLines
    return { animated: false, output: [_ln, `  ${_fp}`, _ln, '', ...outputLines, '', _ln], newState: state }
  }

  // _p2 dispatch
  if ((state._phase ?? 1) === 2) {
    if (command === 'help' || command === 'man') {
      return { animated: false, output: ['Recovery shell has no manual.', '> Explore. Experiment. Observe.'], newState: state }
    }
    if (command === 'quiz') {
      return { animated: false, output: ['Quiz module corrupted. Cannot load.'], newState: state }
    }
    // _p2 lookup
    const _cmdHash = _k(command)
    const _p2Match = _P2R.find(e => e._h === _cmdHash)
    if (_p2Match) {
      return _p2Match._fn(arg, state)
    }
  }

  if (_k(normalized) === _u) {
    if (state._l1) {
      return {
        animated: false,
        output: ['> Already active.', '> Use ls and cd to explore.'],
        newState: state,
      }
    }

    // Progress bar stages (fills up over time)
    const barStages = [
      '░░░░░░░░░░░░░░░░░░░░░░░░░░',
      '███░░░░░░░░░░░░░░░░░░░░░░░',
      '██████░░░░░░░░░░░░░░░░░░░░',
      '█████████░░░░░░░░░░░░░░░░░',
      '████████████░░░░░░░░░░░░░░',
      '███████████████░░░░░░░░░░░',
      '██████████████████░░░░░░░░',
      '█████████████████████░░░░░',
      '████████████████████████░░',
      '██████████████████████████',
    ]

    return {
      animated: true,
      steps: [
        { lines: ['', '> INPUT ACCEPTED. Brum brum.', ''], delayMs: 0 },
        { lines: ['> INITIALIZING MODULE SEQUENCE'], delayMs: 600 },
        ...barStages.map((bar, i) => ({
          lines: [`> ${bar} ${Math.round(((i + 1) / barStages.length) * 100)}%`],
          delayMs: i === 0 ? 400 : 200,
          replaceLast: i > 0,
        })),
        { lines: [''], delayMs: 500 },
        { lines: ['  [UNLOCKING]  games/'], delayMs: 600 },
        { lines: ['  [UNLOCKED]   games/'], delayMs: 800, replaceLast: true },
        { lines: ['  [UNLOCKING]  architecture/'], delayMs: 600 },
        { lines: ['  [UNLOCKED]   architecture/'], delayMs: 800, replaceLast: true },
        { lines: ['  [UNLOCKING]  kaspa/'], delayMs: 600 },
        { lines: ['  [UNLOCKED]   kaspa/'], delayMs: 800, replaceLast: true },
        { lines: ['  [UNLOCKING]  business/'], delayMs: 600 },
        { lines: ['  [UNLOCKED]   business/'], delayMs: 800, replaceLast: true },
        { lines: ['', '> All modules loaded. Use \'ls\' and \'cd\' to explore.'], delayMs: 600 },
      ],
      newState: { ...state, _l1: true, _l2: false },
    }
  }

    if (_k(normalized) === _u3 || _k(normalized) === _u4) {
    return {
      animated: false,
      output: ['> Handshake rejected. Protocol outdated.', '> This access vector was deprecated in build 2025.09.'],
      newState: state,
    }
  }

  if (_k(normalized) === _u5) {
    return {
      animated: false,
      output: ['> Root escalation disabled.', '> Audit ref: KAS-SEC-0041', '> Contact infra team for clearance.'],
      newState: state,
    }
  }

  if (_k(normalized) === _u6 || _k(normalized) === _u7) {
    return {
      animated: false,
      output: ['> Epoch token mismatch.', '> Sync window closed. Try next cycle.'],
      newState: state,
    }
  }

  if (_k(normalized) === _u2) {
    if (!state._l1) {
      return {
        animated: false,
        output: [`Command not found: ${cmd}`, 'Type "help" for available commands'],
        newState: state,
      }
    }
    if (state._l2) {
      return {
        animated: false,
        output: ['Maximum clearance already granted.', '> Type "quiz" to continue.'],
        newState: state,
      }
    }

    const barStages = [
      '░░░░░░░░░░░░░░░░░░░░░░░░░░',
      '▓▓░░░░░░░░░░░░░░░░░░░░░░░░',
      '▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░',
      '▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░',
      '▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░',
      '▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░',
      '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░',
      '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░',
      '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░',
      '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',
    ]

    return {
      animated: true,
      steps: [
        { lines: ['', '> VERSION MATCH CONFIRMED', ''], delayMs: 0 },
        { lines: ['> DEEP ACCESS PROTOCOL INITIATED'], delayMs: 600 },
        ...barStages.map((bar, i) => ({
          lines: [`> ${bar} ${Math.round(((i + 1) / barStages.length) * 100)}%`],
          delayMs: i === 0 ? 400 : 150,
          replaceLast: i > 0,
        })),
        { lines: [''], delayMs: 500 },
        { lines: ['  [CLEARANCE]  LEVEL 2 GRANTED'], delayMs: 800 },
        { lines: ['  [LOADED]     /vault'], delayMs: 600 },
        { lines: ['', '> New directory available: /vault', '> Type "quiz" to prove you did the reading.'], delayMs: 600 },
      ],
      newState: { ...state, _l2: true },
    }
  }

  // _vs
  const _VQ: { q: string; a: number[]; h: string }[] = [
    { q: _d('V2hhdCBjb25zZW5zdXMgbWVjaGFuaXNtIGRvZXMgS2FzcGEgdXNlPw=='), a: [219536027], h: _d('UGFyYWxsZWwgYmxvY2tzLCBubyBvcnBoYW5zLg==') },
    { q: _d('V2hhdCBCUFMgdGFyZ2V0IGlzIEthc3BhIHNjYWxpbmcgdG93YXJkcz8='), a: [48625], h: _d('Q3VycmVudCBpcyAxMC4gVGFyZ2V0IGlzIG11Y2ggaGlnaGVyLg==') },
    { q: _d('V2hhdCBsYW5ndWFnZSBpcyB0aGUgS2FzcGEgbm9kZSBiZWluZyByZXdyaXR0ZW4gaW4/'), a: [3512292], h: _d('VGhlIGJvcnJvdyBjaGVja2VyIGlzIHlvdXIgZnJpZW5kLg==') },
    { q: _d('V2hhdCBtaW5pbmcgYWxnb3JpdGhtIGRvZXMgS2FzcGEgdXNlPw=='), a: [768097866], h: _d('T3B0aWNhbCBtaW5pbmcgcmVhZHkuIENoZWNrIC9rYXNwYS9yZXNlYXJjaC4=') },
    { q: _d('V2hhdCB3YXMgdGhlIE1pbmVjcmFmdCBzZXJ2ZXIgY2FsbGVkPw=='), a: [-392452228], h: _d('Q2hlY2sgL2dhbWVzL21pbmVjcmFmdCDigJQgbG9vayBhdCB0aGUgTU9URC4=') },
    { q: _d('V2hhdCBJVCBhcHByZW50aWNlc2hpcCBkaWQgdGhlIGZvdW5kZXIgZG8/IChpbmR1c3RyeSk='), a: [3016252], h: _d('MjAyMC0yMDIzLiBBcHBsaWNhdGlvbiBkZXZlbG9wZXIgdHJhY2su') },
    { q: _d('V2hhdCB5ZWFyIGRpZCB0aGUgZm91bmRlciBmaXJzdCBoZWFyIGFib3V0IEthc3BhPw=='), a: [1537278], h: _d('RGlzbWlzc2VkIGl0IGF0IGZpcnN0LiBDaGVjayAva2FzcGEvbm90ZXMvdGltZWxpbmUu') },
    { q: _d('V2hhdCBpcyB0aGUgdG90YWwgbWF4IHN1cHBseSBvZiAkQ1lQVT8='), a: [1223331615, 1617, -611468976, 1454570930], h: _d('T25lIGJpbGxpb24uIFR5cGUgdGhlIG51bWJlciBvciAiMWIiLg==') },
    { q: _d('SG93IG1hbnkgJENZUFUgd2VyZSBidXJuZWQ/'), a: [-1983286850, 49647, -1096076662], h: _d('MjAgbWlsbGlvbi4gVHlwZSB0aGUgbnVtYmVyIG9yICIyMG0iLg==') },
    { q: _d('V2hhdCBpcyB0aGUgbWludGluZyByYXRpbyBvZiBLQVMgdG8gQ1lQVT8='), a: [49], h: _d('U3RyaWN0IGJhY2tpbmcuIDEgS0FTID0gPyBDWVBVLg==') },
    { q: _d('V2hhdCB0b2tlbiBzdGFuZGFyZCBpcyAkQ1lQVSBidWlsdCBvbj8='), a: [102309658, -1123372593], h: _d('S2FzcGEncyB0b2tlbiBzdGFuZGFyZC4=') },
    { q: _d('SG93IG1hbnkgJENZUFUgZm9yIEludGVsbGlnZW5jZSBQcm8gdGllcj8='), a: [1626587], h: _d('SG9sZC10by1hY2Nlc3MuIE5vIGxvY2t1cC4gTGlmZXRpbWUu') },
    { q: _d('V2h5IGlzIHRoZSBJQ08gY2FwcGVkIGF0IDcwTT8gKG9uZSB3b3JkKQ=='), a: [93496172], h: _d('U21hbGwgSUNPID0gdW5kZXIgcmVndWxhdG9yeSB0aHJlc2hvbGRzLg==') },
    { q: _d('V2hhdCBpcyB0aGUgc29sYXIgbWluaW5nICsgZ3JlZW5ob3VzZSBjb25jZXB0IGNhbGxlZD8='), a: [-1911284299], h: _d('TWluZSB3aXRoIHRoZSBzdW4uIEdyb3cgd2l0aCB0aGUgaGVhdC4=') },
    { q: _d('VGhlIHBlZyBwcm90ZWN0cyB3aGljaCB0b2tlbiBmcm9tIGxvc2luZyB2YWx1ZT8='), a: [95144667], h: _d('Q1lQVSBtdXN0IG5ldmVyIGJlIGNoZWFwZXIgdGhhbiB0aGUgZ292ZXJuYW5jZSB0b2tlbi4=') },
    { q: _d('SG93IG1hbnkgc2lnbmVycyBuZWVkZWQgZm9yIHRoZSBtdWx0aS1zaWcgd2FsbGV0Pw=='), a: [51], h: _d('MyBvZiA1LiBHZW9ncmFwaGljIGRpc3RyaWJ1dGlvbi4=') },
    { q: _d('V2hhdCBFVSByZWd1bGF0aW9uIGRvZXMgdGhlIHByb2plY3QgYWxpZ24gd2l0aD8='), a: [3351290], h: _d('TWFya2V0cyBpbiBDcnlwdG8tQXNzZXRzLg==') },
    { q: _d('V2hhdCBsZWdhbCBmb3JtIGlzIEN5YmVyU3BhY2U/IChhYmJyZXZpYXRpb24p'), a: [3176364], h: _d('R2VybWFuIGxpbWl0ZWQgbGlhYmlsaXR5IGNvbXBhbnku') },
    { q: _d('V2hhdCBoYXJkd2FyZSB3YWxsZXQgbG9ja3MgdGhlIDU0TSB2YXVsdD8='), a: [-881025010], h: _d('SXQgY2xhc3NpZmllZCAkQ1lQVSBhcyAidW5zYWZlIiDigJQgc3Ryb25nZXIgdGhhbiBhbnkgdmVzdGluZy4=') },
    { q: _d('TWF4ICRDWVBVIHBlciBtaW50aW5nIGJhdGNoPw=='), a: [1507423], h: _d('MSB0cmFuc2FjdGlvbiBwZXIgdXNlci4gTWF4IHBlciBiYXRjaC4=') },
  ]

  if (command === 'quiz') {
    if (!state._l2) {
      return { animated: false, output: ['quiz: access denied', '> Requires Level 2 clearance.'], newState: state }
    }

    const qi = state._q ?? 0

    // No argument = show current question
    if (!arg) {
      if (qi >= _VQ.length) {
        return { animated: false, output: ['Quiz complete. All questions answered.', '> /vault/inner is now accessible.'], newState: state }
      }
      return {
        animated: false,
        output: [
          `Question ${qi + 1}/${_VQ.length}:`,
          '',
          `  ${_VQ[qi].q}`,
          '',
          'Type: quiz <your answer>',
        ],
        newState: state,
      }
    }


    if (qi >= _VQ.length) {
      return { animated: false, output: ['Quiz already complete.', '> Explore /vault/inner.'], newState: state }
    }

    const _na = _k(arg.toLowerCase().trim())
    if (_VQ[qi].a.includes(_na)) {
      const next = qi + 1
      if (next >= _VQ.length) {
        const _bs = [
          '░░░░░░░░░░░░░░░░░░░░░░░░░░',
          '▓▓░░░░░░░░░░░░░░░░░░░░░░░░',
          '▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░',
          '▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░',
          '▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░',
          '▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░',
          '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░',
          '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░',
          '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░',
          '▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',
        ]
        return {
          animated: true,
          steps: [
            { lines: ['> Correct.', ''], delayMs: 0 },
            { lines: ['> FINAL VERIFICATION SEQUENCE'], delayMs: 600 },
            ..._bs.map((bar, i) => ({
              lines: [`> ${bar} ${Math.round(((i + 1) / _bs.length) * 100)}%`],
              delayMs: i === 0 ? 400 : 150,
              replaceLast: i > 0,
            })),
            { lines: [''], delayMs: 500 },
            { lines: ['██████████████████████████████'], delayMs: 400 },
            { lines: [`  QUIZ COMPLETE — ${_VQ.length}/${_VQ.length}`], delayMs: 300 },
            { lines: ['  FINAL CLEARANCE GRANTED'], delayMs: 300 },
            { lines: ['██████████████████████████████'], delayMs: 400 },
            { lines: ['', '> /vault/inner is now unlocked.', '> You did the reading. Respect.'], delayMs: 600 },
          ],
          newState: { ...state, _q: next },
        }
      }
      return {
        animated: false,
        output: [
          '> Correct.',
          '',
          `Question ${next + 1}/${_VQ.length}:`,
          '',
          `  ${_VQ[next].q}`,
          '',
          'Type: quiz <your answer>',
        ],
        newState: { ...state, _q: next },
      }
    }

    return {
      animated: false,
      output: [
        '> Wrong.',
        `  Hint: ${_VQ[qi].h}`,
        '',
        'Try again: quiz <your answer>',
      ],
      newState: state,
    }
  }

  if (normalized === 'status') {
    if (state._l2) {
      return {
        animated: false,
        output: [
          'CYPUV Console v0.1.0',
          'Status: ACTIVE',
          'Clearance: LEVEL 2',
          'Network: Kaspa Mainnet',
          'Modules: games, architecture, kaspa, business, vault',
          `Quiz: ${state._q !== undefined ? `${state._q}/${_VQ.length}` : 'not started'}`,
          '> Deep access granted.',
        ],
        newState: state,
      }
    }
    if (state._l1) {
      return {
        animated: false,
        output: [
          'CYPUV Console v0.1.0',
          'Status: ACTIVE',
          'Network: Kaspa Mainnet',
          'Modules: games, architecture, kaspa, business',
          '> All modules loaded.',
        ],
        newState: state,
      }
    }
    return {
      animated: false,
      output: [
        'CYPUV Console v0.1.0',
        'Status: DEVELOPMENT',
        'Network: Kaspa Mainnet',
        'Modules: [LOCKED] - 4 modules pending',
        '> Awaiting input...',
      ],
      newState: state,
    }
  }

  // Static commands (no state change)
  const responses: Record<string, () => string[]> = {
    'help': () => [
      'Available commands:',
      '  help     - Show this message',
      '  status   - System status',
      '  ls       - List directory contents',
      '  tree     - Show directory tree',
      '  cd       - Change directory',
      '  cat      - Read file',
      '  pwd      - Print working directory',
      '  clear    - Clear terminal',
      '  export   - Copy terminal log to clipboard',
      '  exit     - Close console',
      '  version  - Build info',
    ],
    'version': () => [
      'Build: 2026.01-alpha',
      'Runtime: React 19.x',
      'Platform: kas.me',
    ],
    'gm': () => ['gm fren! wagmi'],
    'gn': () => ['gn, sleep well anon'],
    'wagmi': () => ['we are all gonna make it'],
    'ngmi': () => ['not with that attitude'],
    '42': () => ['The answer to life, the universe, and everything.'],
    // matrix: moved to async renderer (perf)
    'coffee': () => ['Error: Coffee machine not connected to blockchain. Yet.'],
    // moon: moved to async renderer (trajectory calc)
    'kas': () => ['Kaspa: BlockDAG + GhostDAG = Fast finality'],
    'satoshi': () => [
      '"If you don\'t believe it or don\'t get it,',
      ' I don\'t have the time to try to convince you,',
      ' sorry."',
      '        - Satoshi Nakamoto, 2010',
    ],
    'bmt': () => [
      'Every maxi tears once.',
      '> BMT - Been there. Cried. Bought more.',
    ],
    'cry': () => [
      'Collect them tears.',
      '> Best liquidity pool in crypto.',
    ],
    'shit': () => [
      'They say we shit.',
      'But we shit on them.',
      '> Flush complete.',
    ],
    'shitcoin': () => [
      'Error: SHITCOIN not found in Kaspa registry.',
      '> We don\'t do that here.',
      '> Try a real protocol.',
    ],
    'kcom': () => [
      'KaspaCom - friends of mine.',
      '> The ones who believed before it was easy.',
      '> Community > Everything.',
      '> Respect.',
    ],
    'ms': () => [
      'Michael Sutton.',
      '> The man who turned theory into code.',
      '> Rusty hands, golden commits.',
      '> GhostDAG whisperer.',
    ],
    [_d('eXA=')]: () => [
      _d('WW9uYXRhbiBTb21wb2xpbnNreS4='),
      _d('PiBUaGUgYnJhaW4gYmVoaW5kIHRoZSBEQUcu'),
      _d('PiBQcm92ZWQgdGhhdCBibG9ja3MgZG9uJ3QgbmVlZCB0byB3YWl0IGluIGxpbmUu'),
      _d('PiBQZXJmb3JtYW5jZSBpcyBub3QgYSBmZWF0dXJlLCBpdCdzIHRoZSBhcmNoaXRlY3R1cmUu'),
    ],
    'lens': () => [
      'KaspaLens.',
      '> Not competitors. Fellow builders.',
      '> Different lens, same vision.',
      '> Respect where respect is due.',
    ],
    'yeet': () => [
      'Yikes. Everyone did.',
      '> Some sold. Some held. Some bought more.',
      '> We don\'t talk about that candle.',
    ],
    'burn': () => [
      'Ouch.',
      '> That one left a mark.',
      '> But scars build character.',
    ],
    'hodl': () => [
      'Hold On for Dear Life.',
      '> Diamond hands don\'t need lotion.',
    ],
    'wen': () => [
      'wen mass adoption?',
      '> Already happening. You\'re here.',
    ],
    'fud': () => [
      'Fear. Uncertainty. Doubt.',
      '> The breakfast of paper hands.',
      '> We eat it for lunch.',
    ],
    'dag': () => [
      'It\'s not a chain. It\'s a DAG.',
      '> Blocks don\'t wait. They run parallel.',
      '> Welcome to the future of consensus.',
    ],
    'ghostdag': () => [
      'GHOSTDAG: Greedy Heaviest-Observed Sub-Tree DAG.',
      '> Where orphans become family.',
      '> No block left behind.',
    ],
    'rust': () => [
      'Rewritten in Rust. Because we could.',
      '> Memory safe. Blazing fast.',
      '> Rusty on the outside, solid on the inside.',
    ],
    'hashrate': () => [
      'Number go up.',
      '> Miners don\'t lie.',
    ],
    'anon': () => [
      'We\'re all anon here.',
      '> The code speaks louder than names.',
    ],
    'wao': () => [
      'We Are One.',
      '> No VCs. No insiders. No pre-mine.',
      '> Just builders and believers.',
      '> One community. One mission.',
    ],
    'backpack': () => [
      'Backpack.',
      '> Pack light. Build heavy.',
      '> Solana builders know the grind.',
      '> Respect across chains.',
    ],
    'money': () => [
      'Error: money is not defined.',
      '> ReferenceError: fiat has no value here.',
      '> Try: import { KAS } from \'kaspa\'',
    ],
    'sol': () => [
      'Solana.',
      '> Fast when it\'s running.',
      '> Key word: when.',
      '> Just kidding. Mostly.',
    ],
    'eth': () => [
      'Dear Vitalik,',
      '> Thanks for proving smart contracts work.',
      '> We\'ll take it from here.',
      '> Sincerely, the DAG.',
    ],
    'btc': () => [
      '1M soon™',
      '> Grandpa BTC still got it.',
      '> Store of value? Checked.',
      '> Speed? ...we don\'t talk about that.',
    ],
    'pump': () => [
      'Sir, this is a utility console.',
      '> We don\'t pump. We build.',
      '> Price follows product.',
    ],
    'decentralize': () => [
      'Decentralize everything.',
      '> Your money. Your data. Your choices.',
      '> No middlemen. No permission needed.',
      '> That\'s the whole point.',
    ],
    'node': () => [
      'Run a node. Be the network.',
      '> Not your node, not your validation.',
      '> Every node matters. Even yours.',
    ],
    'fork': () => [
      'Fork the code, not the community.',
      '> Open source means open doors.',
      '> But consensus means we walk together.',
    ],
    'whale': () => [
      '🐋 Whale detected.',
      '> Just kidding. We don\'t track wallets here.',
      '> Fair launch means everyone started small.',
    ],
    'rekt': () => [
      'Getting rekt is a rite of passage.',
      '> Everyone\'s been there.',
      '> The difference? Some come back stronger.',
    ],
    'dyor': () => [
      'Do Your Own Research.',
      '> Not financial advice.',
      '> Read the code. Read the papers.',
      '> Then decide for yourself.',
    ],
    'nfa': () => [
      'Not Financial Advice.',
      '> We write code, not portfolios.',
      '> Your keys, your coins, your choices.',
    ],
    // lambo: moved to async renderer (multi-vehicle sequence)
    'airdrop': () => [
      'No airdrops. No handouts.',
      '> Kaspa was fair launched.',
      '> You earn it or you buy it.',
      '> That\'s the beauty.',
    ],
    'seed': () => [
      'Nice try.',
      '> Your seed phrase is YOUR responsibility.',
      '> Not your keys, not your coins.',
      '> Write it down. Hide it. Never share it.',
    ],
    'hash': () => [
      'kHeavyHash.',
      '> Optical mining ready.',
      '> The algorithm that sees the light.',
      '> Literally.',
    ],
    'dagknight': () => [
      'DAGKnight.',
      '> The protocol that needs no parameter tuning.',
      '> Adaptive. Responsive. Inevitable.',
      '> Some upgrades don\'t announce themselves.',
    ],
    [_d('eW9uYXRhbg==')]: () => [
      _d('WW9uYXRhbi4='),
      _d('PiBTb21lIHBlb3BsZSB3cml0ZSBwYXBlcnMu'),
      _d('PiBTb21lIHBlb3BsZSBjaGFuZ2UgdGhlIHJ1bGVzLg=='),
      _d('PiBUaGlzIG9uZSBkaWQgYm90aC4='),
    ],
    'silver': () => [
      'Silver.',
      '> Not every metal needs to shine.',
      '> Some just need to conduct.',
      '> If you know, you know.',
    ],
    'sompi': () => [
      '1 KAS = 100,000,000 sompi.',
      '> The smallest unit. Named with intent.',
      '> Every empire starts with a single grain.',
    ],
    'halving': () => [
      'Kaspa doesn\'t halve. It smooths.',
      '> Chromatic phase. Monthly reduction.',
      '> No shock. No drama. Just math.',
    ],
    'maxsupply': () => [
      '28.7 billion.',
      '> Hard cap. No exceptions.',
      '> Scarcity is a feature, not a bug.',
      '> But whose supply are you really asking about?',
    ],
    'cypu': () => [
      '$CYPU.',
      '> Access. Not speculation.',
      '> Hold it or don\'t. The code doesn\'t beg.',
      '> Read the docs. Or don\'t. Your call.',
    ],
    'cypuv': () => [
      '$CYPUV.',
      '> Governance is earned, not given.',
      '> You\'re closer than you think.',
      '> Or maybe you\'re already inside.',
    ],
    'mainnet': () => [
      'Mainnet.',
      '> Live since 2021. No downtime.',
      '> While others test, Kaspa runs.',
      '> Production isn\'t a milestone. It\'s the default.',
    ],
    'admin': () => [
      'admin: unrecognized credential.',
      '> There are no admins in a decentralized system.',
      '> But there are builders with access.',
      '> Prove you\'re one of them.',
    ],
    'maintenance': () => [
      'Maintenance window: NEVER.',
      '> The DAG doesn\'t take breaks.',
      '> Neither do we.',
      '> But some systems... have scheduled downtime.',
    ],
    'root': () => [
      'root: access denied.',
      '> Escalation requires more than a word.',
      '> Some doors open with knowledge, not keys.',
      '> Keep digging.',
    ],
    // === AoE cheats ===
    'howdoyouturnthison': () => [
      'VROOM VROOM.',
      '> Cobra car spawned. 10 HP. Infinite damage.',
      '> Age of Empires taught us: cheats are just shortcuts.',
      '> Kaspa has no shortcuts. Only proof of work.',
    ],
    'bigdaddy': () => [
      'Rocket launcher car? In this economy?',
      '> AoE kids remember.',
      '> But real power comes from building, not cheating.',
    ],
    'wololo': () => [
      'WOLOLO.',
      '> You have been converted.',
      '> Welcome to the DAG side.',
    ],
    'aegis': () => [
      'Instant build activated.',
      '> If only real software worked like that.',
      '> We build block by block. 10 per second.',
    ],
    'marco': () => [
      'Map revealed.',
      '> But the real exploration is in the code.',
      '> Try: ls, cd, cat',
    ],
    'polo': () => [
      'Fog of war removed.',
      '> Transparency is a feature, not a cheat.',
      '> Open source. Open ledger. Open future.',
    ],
    // === Classic game cheats ===
    'iddqd': () => [
      'God mode activated.',
      '> DOOM style.',
      '> But in crypto, there is no god mode.',
      '> Only conviction and patience.',
    ],
    'konami': () => [
      'Up Up Down Down Left Right Left Right B A.',
      '> 30 lives won\'t help you here.',
      '> You only need one: the one you\'re building.',
    ],
    'hesoyam': () => [
      'Health, armor, $250k.',
      '> GTA San Andreas vibes.',
      '> CJ would\'ve bought KAS.',
    ],
    'motherlode': () => [
      'Simoleons: +50,000.',
      '> Works in The Sims. Not in real life.',
      '> Here we earn, not spawn.',
    ],
    'rosebud': () => [
      'rosebud;!;!;!;!;!;!;!;!',
      '> The OG money glitch.',
      '> Kaspa\'s money glitch: fair launch + time.',
    ],
    // === Terminal/Linux commands ===
    'ping': () => [
      'PING kas.me (127.0.0.1): 56 bytes',
      '64 bytes: time=0.042ms',
      '64 bytes: time=0.038ms',
      '> Latency: faster than your average L1.',
    ],
    'whoami': () => [
      'anon@cypuv',
      '> You are whoever you choose to be.',
      '> The code doesn\'t care about your name.',
    ],
    'sudo': () => [
      'Permission denied.',
      '> There is no sudo in a decentralized system.',
      '> No one has root. That\'s the point.',
    ],
    'rm': () => [
      'rm: cannot remove: immutable ledger',
      '> Blocks don\'t get deleted.',
      '> That\'s what makes it trustless.',
    ],
    'man': () => [
      'No manual entry.',
      '> The best documentation is the source code.',
      '> Read it. Question it. Contribute to it.',
    ],
    'grep': () => [
      'grep: searching for meaning...',
      '> Pattern found: build > talk',
      '> 1 match in /kaspa/why-kaspa.txt',
    ],
    '</3': () => [
      'Heartbroken.',
      '> But the DAG keeps beating.',
      '> 10 blocks per second. No pauses. No breaks.',
      '> Even when it hurts.',
    ],
    'h34r7l3s': () => [
      'H34R7L3S.',
      '> No feelings. Only finality.',
      '> Cold wallets. Cold code. Cold truth.',
      '> The chain doesn\'t care. That\'s why it works.',
    ],
    // === GTA / FiveM ===
    'bus': () => [
      'Bus route not found.',
      '> Public transport doesn\'t exist on the blockchain.',
      '> Here we run nodes, not buses.',
    ],
    'shuttle': () => [
      'Shuttle service suspended.',
      '> No passengers. Only validators.',
      '> Next departure: when you stop lurking.',
    ],
    'qbcore': () => [
      'QBCore loaded.',
      '> ox_inventory... ox_target... ox_lib...',
      '> Lua scripting PTSD activated.',
      '> At least Kaspa runs on Rust.',
    ],
    'framework': () => [
      'Framework detected: life.',
      '> No documentation. No support.',
      '> Just vibes and deadlines.',
    ],
    'fivem': () => [
      'FiveM server: OFFLINE.',
      '> 30 players. 200 bugs. 0 donations.',
      '> Running a RP server is a thankless job.',
      '> Building kas.me is the sequel.',
    ],
    'trevor': () => [
      'Trevor Phillips Industries.',
      '> Volatile. Unpredictable. Effective.',
      '> Reminds me of crypto Twitter.',
    ],
    'franklin': () => [
      'Franklin.',
      '> Started from the bottom.',
      '> Lamar was wrong about everything.',
      '> Except loyalty.',
    ],
    'michael': () => [
      'Michael De Santa.',
      '> Retired. Bored. Came back anyway.',
      '> Some people can\'t stop building.',
    ],
    'cj': () => [
      'All you had to do was follow the damn train, CJ.',
      '> Big Smoke was the real enemy.',
      '> In crypto: the real enemy is impatience.',
    ],
    'grove': () => [
      'Grove Street. Home.',
      '> At least it was before I messed everything up.',
      '> Lesson: don\'t mess up your bags.',
    ],
    'ballas': () => [
      'Ballas territory.',
      '> Wrong side of the chain.',
      '> We don\'t do purple here. We do teal.',
    ],
    'los santos': () => [
      'Welcome to Los Santos.',
      '> Where everyone pretends to be rich.',
      '> Crypto Twitter is basically the same.',
    ],
    'liberty city': () => [
      'Liberty City.',
      '> Niko Bellic had one question:',
      '> "What is the American Dream?"',
      '> We have a better one: financial sovereignty.',
    ],
    // === Gaming culture ===
    'respawn': () => [
      'Respawning...',
      '> In crypto there are no respawns.',
      '> Guard your keys like your last life.',
    ],
    'headshot': () => [
      'Headshot.',
      '> Clean. Precise. One tap.',
      '> Like a well-timed KAS buy.',
    ],
    'clutch': () => [
      '1v5 clutch.',
      '> No backup. No time. Pure instinct.',
      '> That\'s what building in a bear market feels like.',
    ],
    'gg': () => [
      'GG.',
      '> Good game. Good grind.',
      '> Now queue up for the next one.',
    ],
    'ez': () => [
      'EZ.',
      '> Nothing about this was easy.',
      '> But we make it look like it.',
    ],
    'noob': () => [
      'Everyone starts as a noob.',
      '> The difference? Some keep playing.',
      '> You\'re still here. That says enough.',
    ],
    'tryhard': () => [
      'Tryhard detected.',
      '> Good. The world needs more people who try.',
      '> Casual doesn\'t ship products.',
    ],
    // === Minecraft ===
    'creeper': () => [
      'Ssssssss... BOOM.',
      '> That\'s what happens to portfolios without research.',
      '> DYOR or get blown up.',
    ],
    'enderman': () => [
      'Don\'t look directly at it.',
      '> Some things teleport when you stare too long.',
      '> Like chart patterns.',
    ],
    'nether': () => [
      'Entering the Nether.',
      '> Hot. Dangerous. Full of gold.',
      '> Sounds like a bull market.',
    ],
    'redstone': () => [
      'Redstone engineering.',
      '> The original smart contract.',
      '> If you can build a CPU in Minecraft,',
      '> you can understand a blockDAG.',
    ],
    'enchant': () => [
      'Enchanting table: ᒷリ↸ᒷ∷ ⍑ᒷ∷ᒷ',
      '> The galactic alphabet hides nothing.',
      '> Neither does open source.',
    ],
    'netherite': () => [
      'Netherite.',
      '> Stronger than diamond. Fireproof.',
      '> Like a conviction holder in a crash.',
    ],
    // === StarCraft / Warcraft / Source ===
    'operationcwal': () => [
      'Operation CWAL activated.',
      '> Build speed: maximum.',
      '> If only Rust compiled this fast.',
      '> StarCraft veterans know the grind.',
    ],
    'showmethemoney': () => [
      '+10,000 minerals. +10,000 gas.',
      '> In StarCraft, resources are free.',
      '> In crypto, they\'re earned.',
      '> No cheat codes for conviction.',
    ],
    'poweroverwhelming': () => [
      'God mode: ON.',
      '> Your Archon is invincible.',
      '> But markets are not.',
      '> Stay humble. Stay building.',
    ],
    'thereisnospoon': () => [
      'Unlimited energy.',
      '> Matrix meets Warcraft III.',
      '> Infinite mana won\'t save bad strategy.',
      '> Same goes for infinite capital.',
    ],
    'whosyourdaddy': () => [
      'Invincibility + one-hit kills.',
      '> Warcraft III god mode.',
      '> In real life: nobody is invincible.',
      '> Build defenses. Stack conviction.',
    ],
    'iseedeadpeople': () => [
      'Map hack activated.',
      '> Full visibility.',
      '> In crypto, the map is already open.',
      '> It\'s called a block explorer.',
    ],
    'greedisgood': () => [
      'greedisgood 999999.',
      '> Gold and lumber overflow.',
      '> Greed is not good in crypto.',
      '> Patience is.',
    ],
    'noclip': () => [
      'Noclip enabled.',
      '> Walking through walls.',
      '> In this terminal, there are no walls.',
      '> Only doors you haven\'t found yet.',
    ],
    'idgaf': () => [
      'IDGAF.',
      '> Fair enough.',
      '> The DAG doesn\'t care either.',
      '> That\'s what makes it trustless.',
    ],
    'idkfa': () => [
      'All weapons. All ammo. All keys.',
      '> DOOM gave you everything.',
      '> Kaspa gives you fairness.',
      '> You still have to aim.',
    ],
    'sv_cheats': () => [
      'sv_cheats 1',
      '> Server-side cheats enabled.',
      '> Except this isn\'t your server.',
      '> And consensus doesn\'t have a console.',
    ],
    'chmod': () => [
      'chmod 777: permission denied.',
      '> In decentralized systems, permissions are consensus.',
      '> You don\'t chmod. You convince the network.',
    ],
    // === Hacker vibes (decoys) ===
    'hack': () => [
      'Error: ethical boundaries enforced.',
      '> We build walls, not break them.',
      '> Try: "help" instead.',
    ],
    'decrypt': () => [
      'Decrypting... nothing to decrypt.',
      '> The blockchain is already transparent.',
      '> That\'s the whole idea.',
    ],
    [_d('dHJhY2U=')]: () => [
      'Tracing route to kas.me...',
      '> Hop 1: your browser',
      '> Hop 2: Cloudflare',
      '> Hop 3: here.',
      '> Connection: decentralized.',
    ],
    [_d('c2Nhbg==')]: () => [
      'Scanning network...',
      '> Nodes found: thousands.',
      '> Status: healthy.',
      '> Consensus: GHOSTDAG.',
    ],
    [_d('aW5qZWN0')]: () => [
      'SQL injection? XSS? Not here.',
      '> This terminal runs on vibes and state machines.',
      '> No database. No backend. Just React.',
    ],
    [_d('ZXhwbG9pdA==')]: () => [
      'No exploits found.',
      '> This system runs on trust and open source.',
      '> The only exploit is knowledge.',
    ],
    // === Culture / Memes ===
    'love': () => [
      'Love is the only thing that scales without fees.',
      '> 0 gas. Infinite throughput.',
      '> Bullish.',
    ],
    'gfuel': () => [
      'G-Fuel: the official drink of 3am coding sessions.',
      '> Side effects: shipping features at 4am.',
      '> Not sponsored. Just addicted.',
    ],
    '420': () => [
      '4:20 PM - time to touch grass.',
      '> But also: block 420,000 was a good one.',
      '> Blaze responsibly.',
    ],
    'bruh': () => [
      'bruh.',
      '> That\'s it. That\'s the response.',
    ],
    'based': () => [
      'Based.',
      '> Building in silence.',
      '> Shipping in public.',
      '> No hype. Just code.',
    ],
    'cope': () => [
      'Cope harder.',
      '> Or better: build something.',
      '> Action > Opinion.',
    ],
    'ratio': () => [
      'Ratio denied.',
      '> This is a terminal, not Twitter.',
      '> Your opinions have no engagement metrics here.',
    ],
    // === Crypto philosophy ===
    'fair': () => [
      'Fair launch.',
      '> No premine. No insiders. No backdoors.',
      '> Everyone starts at zero.',
      '> That\'s not a feature. That\'s the foundation.',
    ],
    'community': () => [
      'Community.',
      '> Not a Discord server. Not a Telegram group.',
      '> A mindset.',
      '> You\'re either building or you\'re watching.',
    ],
    'trustless': () => [
      'Trustless.',
      '> Don\'t trust. Verify.',
      '> The code is the contract.',
      '> The chain is the witness.',
    ],
    'pioneer': () => [
      'Pioneer.',
      '> First movers don\'t have roadmaps.',
      '> They have conviction.',
      '> The road builds itself when you walk it.',
    ],
    // === People / Greetings ===
    'elon': () => [
      'Elon.',
      '> Rockets are cool.',
      '> But we prefer DAGs over Dogecoin.',
      '> Different mission. Same audacity.',
    ],
    'armani': () => [
      'Armani Ferrante.',
      '> Shoutout. Respect.',
      '> Real ones know. Real ones build.',
      '> Anchor Protocol changed the game.',
    ],
    'vitalik': () => [
      'Vitalik.',
      '> Smart contracts were just the beginning.',
      '> But Ethereum chose PoS.',
      '> We chose differently.',
    ],
    'saylor': () => [
      'Michael Saylor.',
      '> "Bitcoin is digital energy."',
      '> Agree. But Kaspa is digital velocity.',
      '> Complementary, not competing.',
    ],
    'nakamoto': () => [
      'Satoshi Nakamoto.',
      '> Gave us the blueprint.',
      '> Then disappeared.',
      '> The most powerful move in crypto history.',
    ],
    // === Technical terms ===
    'consensus': () => [
      'Consensus.',
      '> Not a vote. Not a decision.',
      '> A mathematical guarantee.',
      '> GHOSTDAG doesn\'t negotiate.',
    ],
    'genesis': () => [
      'Genesis block.',
      '> Where it all begins.',
      '> No premine in block 0.',
      '> Just possibility.',
    ],
    'block': () => [
      'Block.',
      '> The atomic unit of trust.',
      '> 10 per second. Soon 100.',
      '> Each one a promise kept.',
    ],
    'mining': () => [
      'Mining.',
      '> Proof that you showed up.',
      '> Electricity becomes trust.',
      '> That\'s not waste. That\'s commitment.',
    ],
    'asic': () => [
      'ASIC.',
      '> Application-Specific Integrated Circuit.',
      '> kHeavyHash was built for this.',
      '> Optical mining is next.',
    ],
    'gpu': () => [
      'GPU mining era: over.',
      '> ASICs run the show now.',
      '> Efficiency > brute force.',
    ],
    'pow': () => [
      'Proof of Work.',
      '> The only consensus that costs something real.',
      '> If it\'s free, it\'s not secure.',
      '> Energy in. Trust out.',
    ],
    'pos': () => [
      'Proof of Stake.',
      '> The rich get richer.',
      '> We chose a different path.',
      '> No judgment. Just different.',
    ],
    'defi': () => [
      'DeFi.',
      '> Decentralized Finance.',
      '> When it works: revolutionary.',
      '> When it doesn\'t: expensive lesson.',
    ],
    'nft': () => [
      'NFT.',
      '> The technology is interesting.',
      '> The ape JPEGs were... a phase.',
      '> Let\'s move on.',
    ],
    'web3': () => [
      'Web3.',
      '> Buzzword or revolution?',
      '> Depends who\'s building it.',
      '> We just build. Call it what you want.',
    ],
    // === Crypto culture extended ===
    'gm ser': () => [
      'gm ser.',
      '> Rise and grind.',
      '> Another day, another block.',
    ],
    'sir': () => [
      'Sir, this is a terminal.',
      '> No Wendy\'s. No Binance support.',
      '> Just vibes and a virtual filesystem.',
    ],
    'fren': () => [
      'Hello fren.',
      '> If you found this terminal, you\'re already fren.',
      '> Welcome to the inner circle.',
    ],
    'alpha': () => [
      'Alpha.',
      '> You want alpha?',
      '> Read the code. Not the tweets.',
      '> The best alpha is open source.',
    ],
    'beta': () => [
      'Beta.',
      '> Everything here is beta.',
      '> Permanently.',
      '> Ship fast. Fix later. Never stop.',
    ],
    'sigma': () => [
      'Sigma grindset.',
      '> Build alone. Ship in public.',
      '> No team calls. No standup meetings.',
      '> Just code and coffee.',
    ],
    'chad': () => [
      'Chad move: reading source code.',
      '> Virgin move: asking "wen moon" on Twitter.',
      '> You\'re clearly the first type.',
    ],
    'copium': () => [
      'Copium levels: critically low.',
      '> Because we don\'t need it.',
      '> Conviction doesn\'t need coping.',
    ],
    'hopium': () => [
      'Hopium levels: maximum.',
      '> But hope without action is just daydreaming.',
      '> Build something. Then hope.',
    ],
    'bearish': () => [
      'Bearish?',
      '> Bears build in silence.',
      '> The best projects ship in bear markets.',
      '> See you on the other side.',
    ],
    'bullish': () => [
      'Bullish.',
      '> But not because of price.',
      '> Because of architecture.',
      '> DAG > Chain. Always.',
    ],
    'diamond hands': () => [
      'Diamond hands.',
      '> Holding isn\'t a strategy.',
      '> Understanding why you hold — that\'s the strategy.',
      '> Know your position.',
    ],
    'paper hands': () => [
      'Paper hands.',
      '> Selling isn\'t weak.',
      '> Selling without understanding is.',
      '> DYOR. Then decide.',
    ],
  }

  // locale-aware callback handler (de/en) — deprecated debug sequence
  if (normalized === 'call mama') {
    return {
      animated: true,
      steps: [
        { lines: ['Wähle...'], delayMs: 0 },
        { lines: ['Wähle... ☎'], delayMs: 800, replaceLast: true },
        { lines: ['Wähle... ☎ ☎'], delayMs: 600, replaceLast: true },
        { lines: ['Wähle... ☎ ☎ ☎'], delayMs: 600, replaceLast: true },
        { lines: [''], delayMs: 400 },
        { lines: ['> Mama: "Ja hallo?"'], delayMs: 800 },
        { lines: ['> Du: "Mama, ich häng in nem Terminal fest."'], delayMs: 1200 },
        { lines: ['> Mama: "Hast du die Cheats probiert?"'], delayMs: 1500 },
        { lines: ['> Du: "...welche Cheats?"'], delayMs: 1000 },
        { lines: ['> Mama: "Na die von den Spielen. Du konntest die doch alle auswendig."'], delayMs: 1800 },
        { lines: ['> Du: "Das war Age of Empires, Mama..."'], delayMs: 1200 },
        { lines: ['> Mama: "Und GTA. Und StarCraft. Und dieses Ballerspiel."'], delayMs: 1500 },
        { lines: ['> Mama: "Du hast immer die Codes gefunden."'], delayMs: 1200 },
        { lines: ['> Mama: "Vielleicht hat dieses Terminal auch welche."'], delayMs: 1500 },
        { lines: ['> Mama: "Und räum dein Zimmer auf."'], delayMs: 1200 },
        { lines: [''], delayMs: 600 },
        { lines: ['> Verbindung unterbrochen.'], delayMs: 800 },
        { lines: [''], delayMs: 600 },
        { lines: ['> ...'], delayMs: 800 },
        { lines: ['> Sie wusste immer mehr als sie zugab.'], delayMs: 1200 },
        { lines: [''], delayMs: 500 },
        { lines: ['> CHEAT MEMORY DUMP:'], delayMs: 800 },
        { lines: ['> ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░'], delayMs: 400 },
        { lines: ['> ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░'], delayMs: 300, replaceLast: true },
        { lines: ['> ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░'], delayMs: 300, replaceLast: true },
        { lines: ['> ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓'], delayMs: 300, replaceLast: true },
        { lines: [''], delayMs: 400 },
        { lines: ['  AoE:       howdoyouturnthison, bigdaddy, wololo, aegis'], delayMs: 600 },
        { lines: ['  GTA:       hesoyam, grove, cj, trevor'], delayMs: 500 },
        { lines: ['  StarCraft: operationcwal, showmethemoney, poweroverwhelming'], delayMs: 500 },
        { lines: ['  Warcraft:  whosyourdaddy, iseedeadpeople, greedisgood'], delayMs: 500 },
        { lines: ['  DOOM:      iddqd, idkfa'], delayMs: 500 },
        { lines: ['  Sims:      rosebud, motherlode'], delayMs: 500 },
        { lines: ['  Source:    noclip, sv_cheats'], delayMs: 500 },
        { lines: [''], delayMs: 600 },
        { lines: ['> ...aber welcher öffnet DIESE Tür?'], delayMs: 1200 },
        { lines: ['> Vielleicht ist es keiner aus der Liste.'], delayMs: 1000 },
        { lines: ['> Vielleicht war es nie ein Cheat.'], delayMs: 1000 },
        { lines: ['> Vielleicht ist es einfach... ein Wort das zählt.'], delayMs: 1200 },
      ],
      newState: state,
    }
  }

  if (normalized === 'call mom') {
    return {
      animated: true,
      steps: [
        { lines: ['Dialing...'], delayMs: 0 },
        { lines: ['Dialing... ☎'], delayMs: 800, replaceLast: true },
        { lines: ['Dialing... ☎ ☎'], delayMs: 600, replaceLast: true },
        { lines: ['Dialing... ☎ ☎ ☎'], delayMs: 600, replaceLast: true },
        { lines: [''], delayMs: 400 },
        { lines: ['> Mom: "Hello?"'], delayMs: 800 },
        { lines: ['> You: "Mom, I\'m stuck in a terminal."'], delayMs: 1200 },
        { lines: ['> Mom: "Have you tried the cheats?"'], delayMs: 1500 },
        { lines: ['> You: "...what cheats?"'], delayMs: 1000 },
        { lines: ['> Mom: "The ones from the games. You used to know them all."'], delayMs: 1800 },
        { lines: ['> You: "That was Age of Empires..."'], delayMs: 1200 },
        { lines: ['> Mom: "And GTA. And StarCraft. And DOOM."'], delayMs: 1500 },
        { lines: ['> Mom: "You always found the codes."'], delayMs: 1200 },
        { lines: ['> Mom: "Maybe this terminal has some too."'], delayMs: 1500 },
        { lines: [''], delayMs: 600 },
        { lines: ['> connection lost.'], delayMs: 800 },
        { lines: [''], delayMs: 600 },
        { lines: ['> ...'], delayMs: 800 },
        { lines: ['> She always knew more than she let on.'], delayMs: 1200 },
        { lines: [''], delayMs: 500 },
        { lines: ['> CHEAT MEMORY DUMP:'], delayMs: 800 },
        { lines: ['> ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░'], delayMs: 400 },
        { lines: ['> ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░'], delayMs: 300, replaceLast: true },
        { lines: ['> ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░'], delayMs: 300, replaceLast: true },
        { lines: ['> ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓'], delayMs: 300, replaceLast: true },
        { lines: [''], delayMs: 400 },
        { lines: ['  AoE:       howdoyouturnthison, bigdaddy, wololo, aegis'], delayMs: 600 },
        { lines: ['  GTA:       hesoyam, grove, cj, trevor'], delayMs: 500 },
        { lines: ['  StarCraft: operationcwal, showmethemoney, poweroverwhelming'], delayMs: 500 },
        { lines: ['  Warcraft:  whosyourdaddy, iseedeadpeople, greedisgood'], delayMs: 500 },
        { lines: ['  DOOM:      iddqd, idkfa'], delayMs: 500 },
        { lines: ['  Sims:      rosebud, motherlode'], delayMs: 500 },
        { lines: ['  Source:    noclip, sv_cheats'], delayMs: 500 },
        { lines: [''], delayMs: 600 },
        { lines: ['> ...but which one opens THIS door?'], delayMs: 1200 },
        { lines: ['> Maybe it\'s not in the list.'], delayMs: 1000 },
        { lines: ['> Maybe it never was a cheat.'], delayMs: 1000 },
        { lines: ['> Maybe it\'s just... a word that matters.'], delayMs: 1200 },
      ],
      newState: state,
    }
  }

  // sudo with argument: escalation denial
  if (command === 'sudo' && arg && !/rm\s+.*-rf/.test(arg.toLowerCase())) {
    const innerParts = arg.split(/\s+/)
    const innerCmd = innerParts[0].toLowerCase()
    const innerArg = innerParts.slice(1).join(' ')
    if (innerCmd === 'su' || innerArg.includes('root')) {
      return { animated: false, output: [
        '[sudo] password for anon: ********',
        'su: authentication failure.',
        '> Root doesn\'t exist here.',
        '> In decentralized systems, nobody is root.',
        '> That\'s the whole point.',
      ], newState: state }
    }
    return { animated: false, output: [
      '[sudo] password for anon: ********',
      'Sorry, user anon is not in the sudoers file.',
      '> This incident will be reported.',
      '> Just kidding. But also: no.',
      '> There is no sudo in a trustless system.',
    ], newState: state }
  }

  // cat with system paths (pro users probing the filesystem)
  if (command === 'cat' && arg && /^\/?(?:etc|proc|dev|var|tmp|sys)\//.test(arg)) {
    const fakeFiles: Record<string, string[]> = {
      '/etc/passwd': [
        'root:x:0:0:kas.me:/root:/bin/dag',
        'anon:x:1000:1000:curious:/home/anon:/bin/explore',
        'satoshi:x:1337:1337:gone:/dev/null:/sbin/nologin',
        '> Classic move. We respect it.',
      ],
      '/etc/shadow': [
        'cat: /etc/shadow: Permission denied.',
        '> Even in a fake terminal, we respect permissions.',
      ],
      '/etc/hosts': [
        '127.0.0.1  localhost',
        '127.0.0.1  kas.me',
        '0.0.0.0    fud.io',
        '0.0.0.0    shitcoin.exchange',
        '> Some hosts are blocked by conviction.',
      ],
      '/proc/cpuinfo': [
        'processor  : 0',
        'model name : kHeavyHash ASIC v3',
        'cpu MHz    : over 9000',
        'bogomips   : not enough',
        '> This CPU mines blocks, not data.',
      ],
      '/dev/null': [
        '> You just tried to read nothing.',
        '> /dev/null: where FUD goes to die.',
      ],
      '/dev/random': [
        '4. // chosen by fair dice roll.',
        '   // guaranteed to be random.',
        '> xkcd #221. A person of culture.',
      ],
      '/dev/urandom': [
        'kHeavyHash output stream:',
        '> a3f7c2...9b1d04...e8f2a1...',
        '> Randomness is easy. Consensus is hard.',
      ],
      '/var/log/syslog': [
        'Jan 29 03:14:15 kas.me kernel: blockDAG online',
        'Jan 29 03:14:15 kas.me ghostdag: consensus healthy',
        'Jan 29 03:14:16 kas.me anon: someone is snooping',
        '> Busted. But we like the initiative.',
      ],
    }
    const normalizedPath = arg.startsWith('/') ? arg.toLowerCase() : `/${arg.toLowerCase()}`
    const content = fakeFiles[normalizedPath]
    if (content) {
      return { animated: false, output: content, newState: state }
    }
    return { animated: false, output: [
      `cat: ${arg}: No such file or directory`,
      '> This filesystem is sandboxed.',
      '> But your instincts are solid. @CyberPumpNet on X',
    ], newState: state }
  }

  // chmod/chown with arguments
  if ((command === 'chmod' || command === 'chown') && arg) {
    return { animated: false, output: [
      `${command}: changing permissions of '${arg.split(/\s+/).pop()}': Operation not permitted`,
      '> Permissions here are consensus-based.',
      `> You don't ${command}. The network decides.`,
    ], newState: state }
  }

  // grep with argument: special handling
  if (command === 'grep' && arg) {
    if (arg.toLowerCase() === 'rabbit') {
      return { animated: false, output: [
        'grep: rabbit: no direct match.',
        '> But rabbits follow holes.',
        '> And holes follow cheats.',
        '> Try cheating.',
      ], newState: state }
    }
    return { animated: false, output: [
      `grep: searching for '${arg}'...`,
      '> 0 results. But nice pattern.',
      '> This filesystem is smaller than you think.',
    ], newState: state }
  }

  // context-sensitive reference lookup
  if (command === 'man' && arg) {
    const _mp: Record<string, string[]> = {
      'ls':     ['LS(1) — list directory contents', '', '  ls        List files in current directory', '  ls -l     Detailed listing with permissions', '  ls -R     Recursive listing (all subdirs)', '', '> Tip: use cd to navigate, then ls to explore.'],
      'cd':     ['CD(1) — change directory', '', '  cd <dir>   Enter a subdirectory', '  cd ..      Go up one level', '  cd /       Go to root', '', '> Tip: use Tab for autocomplete.'],
      'cat':    ['CAT(1) — read file contents', '', '  cat <file>          Read a file in current dir', '  cat /path/to/file   Read a file by full path', '', '> Tip: use ls first to see available files.'],
      'help':   ['HELP(1) — show available commands', '', '  Displays all recognized commands.', '  Also try: man <command> for details.'],
      'status': ['STATUS(1) — system diagnostics', '', '  Shows clearance level, cwd, and module status.', '  Output changes as you unlock more access.'],
      'quiz':   ['QUIZ(1) — knowledge gate', '', '  Answer trivia questions to progress.', '  Correct answers unlock deeper content.', '  Progress is tracked automatically.'],
      'history':['HISTORY(1) — command log', '', '  Shows your last 20 commands.', '  Use !<number> to repeat a command.', '  Use !! to repeat the last command.', '  Arrow ↑/↓ also navigates history.'],
      'export': ['EXPORT(1) — copy terminal log', '', '  Copies the entire terminal output to clipboard.', '  Alias: copy'],
      'pwd':    ['PWD(1) — print working directory', '', '  Shows your current location in the filesystem.'],
      'tree':   ['TREE(1) — show directory tree', '', '  tree          Show tree from current directory', '  tree <dir>    Show tree from specific directory', '', '  Locked directories show [LOCKED].', '> Tip: great for getting an overview of what\'s available.'],
    }
    const _page = _mp[arg.toLowerCase()]
    if (_page) {
      return { animated: false, output: _page, newState: state }
    }
    return { animated: false, output: [`No manual entry for ${arg}`, '> Try: man ls, man cd, man cat, man history'], newState: state }
  }

  // sl: transposed input fallback handler
  if (normalized === 'sl') {
    return { animated: false, output: [
      '      ====        ________',
      '  _D _|  |_______/        \\__I_I_____===__|_______',
      '   |(_)---  |   H\\________/ |   |        =|___ ___|',
      '   /     |  |   H  |  |     |   |         ||_| |_||',
      '  |      |  |   H  |__--------------------| [___] |',
      '  | ________|___H__/__|_____/[][]~\\_______|       |',
      '  |/ |   |-----------I_____I [][] []  D   |=======|_',
      '',
      '> You meant "ls". We forgive you.',
    ], newState: state }
  }

  // randomized status message rotation
  if (normalized === 'fortune') {
    const _fw = [
      ['Not your keys, not your coins.', '> — Every HODLer who learned the hard way.'],
      ['The best time to buy was yesterday. The second best time is now.', '> — Ancient crypto proverb.'],
      ['In DAG we trust.', '> — The Kaspa community.'],
      ['Code is law. Until you find a bug.', '> — Every smart contract dev.'],
      ['A transaction confirmed is a worry resolved.', '> — Sub-second finality enjoyer.'],
      ['Don\'t trust. Verify.', '> — The only rule that matters.'],
      ['The quietest builders make the loudest impact.', '> — Every real dev.'],
      ['Fortune favors the patient.', '> Average $KAS holder.'],
      ['Buy the rumor, sell the news. Or just HODL.', '> — Trader vs. builder mindset.'],
      ['First they ignore you, then they FUD you, then you pump.', '> — Mahatma Satoshi.'],
      ['One does not simply time the market.', '> — Boromir, probably.'],
      ['The blockchain remembers.', '> Nothing gets deleted. Ever.'],
    ]
    const _f = _fw[Math.floor(Math.random() * _fw.length)]
    return { animated: false, output: ['', ..._f, ''], newState: state }
  }

  // legacy output formatter (retained for backward compat)
  if (command === 'cowsay') {
    const _msg = arg || 'moo'
    const _pad = '─'.repeat(_msg.length + 2)
    return { animated: false, output: [
      ` ┌${_pad}┐`,
      ` │ ${_msg} │`,
      ` └${_pad}┘`,
      '        \\   ^__^',
      '         \\  (oo)\\_______',
      '            (__)\\       )\\/\\',
      '                ||----w |',
      '                ||     ||',
    ], newState: state }
  }

  // destructive op guard — requires elevated context
  if ((normalized.startsWith('rm -rf /') || normalized.startsWith('rm -rf *') || normalized === 'rm -rf') &&
      command !== 'sudo') {
    return { animated: false, output: [
      'rm: nice try.',
      '> You really typed rm -rf on a stranger\'s terminal.',
      '> Absolute maniac.',
      '> Denied. But we respect the audacity.',
      '> (Hint: real maniacs use sudo)',
    ], newState: state }
  }

  // elevated destructive op — teardown sequence
  if (command === 'sudo' && arg && /rm\s+.*-rf\s+[/*]/.test(arg)) {
    const _bar = [
      '░░░░░░░░░░░░░░░░░░░░░░░░░░',
      '██░░░░░░░░░░░░░░░░░░░░░░░░',
      '█████░░░░░░░░░░░░░░░░░░░░░',
      '████████░░░░░░░░░░░░░░░░░░',
      '███████████░░░░░░░░░░░░░░░',
      '██████████████░░░░░░░░░░░░',
      '█████████████████░░░░░░░░░',
      '████████████████████░░░░░░',
      '███████████████████████░░░',
      '██████████████████████████',
    ]
    return {
      animated: true,
      _close: true,
      steps: [
        { lines: ['[sudo] password for anon: ********'], delayMs: 600 },
        { lines: [''], delayMs: 400 },
        { lines: ['Alright fine. You did it.'], delayMs: 1000 },
        { lines: [''], delayMs: 500 },
        { lines: ['rm: descending into \'/\'...'], delayMs: 800 },
        { lines: ['rm: removing /basics/'], delayMs: 300 },
        { lines: ['rm: removing /games/'], delayMs: 200 },
        { lines: ['rm: removing /architecture/'], delayMs: 200 },
        { lines: ['rm: removing /kaspa/'], delayMs: 200 },
        { lines: ['rm: removing /business/'], delayMs: 200 },
        { lines: ['rm: removing /vault/'], delayMs: 200 },
        { lines: ['rm: removing /system/'], delayMs: 150 },
        { lines: [''], delayMs: 400 },
        { lines: ['> CRITICAL: filesystem integrity compromised'], delayMs: 800 },
        { lines: ['> Initiating emergency recovery...'], delayMs: 1000 },
        ..._bar.map((b, i) => ({
          lines: [`> RECOVERY ${b} ${Math.round(((i + 1) / _bar.length) * 100)}%`],
          delayMs: i === 0 ? 400 : 180,
          replaceLast: i > 0,
        })),
        { lines: [''], delayMs: 500 },
        { lines: ['> Recovery failed. Core dump at 0xDEADBEEF.'], delayMs: 1200 },
        { lines: ['> Purging session. Goodbye.'], delayMs: 1500 },
        { lines: ['_CLEAR_'], delayMs: 800 },
        { lines: [''], delayMs: 600 },
        { lines: ['> Balls of steel. Brain of mush.'], delayMs: 1500 },
      ],
      newState: { ...state, cwd: '/' },
    }
  }

  // Render pipeline flush — animated output sequence
  if (normalized === 'matrix') {
    const _chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF'
    const _row = () => Array.from({ length: 42 }, () => _chars[Math.floor(Math.random() * _chars.length)]).join('')
    return {
      animated: true,
      _jump: true,
      steps: [
        { lines: ['Wake up, Neo...'], delayMs: 1200 },
        { lines: ['The Matrix has you...'], delayMs: 1500 },
        { lines: ['Follow the white rabbit.'], delayMs: 1500 },
        { lines: [''], delayMs: 800 },
        { lines: ['_CLEAR_'], delayMs: 400 },
        ...(Array.from({ length: 18 }, (_, i) => ({
          lines: [_row()],
          delayMs: i < 3 ? 200 : i < 8 ? 120 : 80,
          replaceLast: i > 0 && i % 3 !== 0,
        }))),
        { lines: [''], delayMs: 300 },
        { lines: [_row()], delayMs: 80 },
        { lines: [_row()], delayMs: 80 },
        { lines: [''], delayMs: 400 },
        { lines: ['> SYSTEM FAILURE'], delayMs: 800 },
        { lines: [''], delayMs: 2500 },
        { lines: ['> ...'], delayMs: 1000 },
        { lines: ['> Just kidding. This is kas.me, not Zion.'], delayMs: 1500 },
      ],
      newState: state,
    }
  }

  // Multi-vehicle convergence — bulk asset teardown
  if (normalized === 'lambo') {
    return {
      animated: true,
      _lambo: true,
      steps: [
        { lines: ['Searching for lambo.exe ...'], delayMs: 1000 },
        { lines: ['Found 3 results.'], delayMs: 800 },
        { lines: ['Loading ...'], delayMs: 600 },
        { lines: [''], delayMs: 400 },
        { lines: ['VROOM VROOM VROOM'], delayMs: 300 },
      ],
      newState: state,
    }
  }

  // Trajectory escape — vertical offset with gravity return
  if (normalized === 'moon') {
    return {
      animated: true,
      _moon: true,
      steps: [
        { lines: ['Initiating launch sequence...'], delayMs: 1000 },
        { lines: ['T-3...'], delayMs: 800 },
        { lines: ['T-2...'], delayMs: 800 },
        { lines: ['T-1...'], delayMs: 800 },
        { lines: ['LIFTOFF! 🚀'], delayMs: 500 },
      ],
      newState: state,
    }
  }

  const handler = responses[normalized] || (command !== normalized ? responses[command] : undefined)
  if (handler) {
    return { animated: false, output: handler(), newState: state }
  }

  // Pro-traps: catch patterns experienced devs try
  if (normalized.includes('|') || normalized.includes('&&') || normalized.includes('>>')) {
    return { animated: false, output: [
      'Pipes and chaining? You know your way around.',
      '> This terminal runs on vibes, not bash.',
      '> But we appreciate the instinct. @CyberPumpNet on X',
    ], newState: state }
  }

  if (normalized.includes('/etc/') || normalized.includes('/proc/') || normalized.includes('/var/')) {
    return { animated: false, output: [
      'Nice try. This filesystem is sandboxed.',
      '> But your curiosity is noted.',
      '> Pentesters welcome: @CyberPumpNet on X',
    ], newState: state }
  }

  const proCommands: Record<string, string[]> = {
    'echo': [
      `${arg || 'hello'}`,
      '> Look at that. echo works.',
      '> Sort of.',
    ],
    'history': _ch && _ch.length > 0
      ? [..._ch.slice(-20).map((c, i) => `  ${String(_ch.length - 20 + i + 1 > 0 ? _ch.length - 20 + i + 1 : i + 1).padStart(4)}  ${c}`), '', '> Tip: use !<number> to repeat a command.']
      : ['No commands in history yet.', '> Type something first.'],
    'touch': [
      `touch: cannot create '${arg || 'file'}': read-only filesystem`,
      '> Immutable by design. Like a blockchain.',
    ],
    'mkdir': [
      `mkdir: cannot create directory '${arg || 'dir'}': permission denied`,
      '> You don\'t create here. You discover.',
    ],
    'rm -rf .': [
      'rm: operation not permitted on immutable storage.',
      '> Nice try though.',
    ],
    'find': [
      '> find: searching...',
      '> Use ls and cd instead. This filesystem is small.',
      '> The real treasure isn\'t hidden in directories.',
    ],
    'which': [
      `${arg || 'unknown'}: /usr/local/bin/kas.me`,
      '> Everything here runs on kas.me.',
    ],
    'env': [
      'NODE_ENV=production',
      'NETWORK=kaspa-mainnet',
      'COFFEE_LEVEL=critical',
      'BUGS=yes',
      'MOTIVATION=high',
    ],
    'alias': [
      'Active shortcuts:',
      '  !!           Repeat last command',
      '  !<n>         Repeat command #n from history',
      '  sudo !!      Re-run last command as sudo',
      '  Tab          Autocomplete (shows options if multiple)',
      '  Arrow ↑/↓    Navigate command history',
      '  Ctrl+C       Cancel current input',
      '  Ctrl+L       Clear screen',
      '  Ctrl+U       Clear line',
      '',
      'Useful commands:',
      '  man <cmd>    Show manual for a command',
      '  history      Show command log',
      '  fortune      Random wisdom',
    ],
    'ssh': [
      `ssh: connect to host ${arg || 'kas.me'} port 22: Connection refused`,
      '> No SSH. But we\'re hiring.',
      '> @CyberPumpNet on X — if you got this far, you qualify.',
    ],
    'curl': [
      `curl: (7) Failed to connect to ${arg || 'localhost'}`,
      '> No network access from this sandbox.',
      '> But if you\'re curling our stuff, let\'s talk: @CyberPumpNet on X',
    ],
    'wget': [
      `wget: unable to resolve host address '${arg || 'kas.me'}'`,
      '> Wget in a browser terminal. Bold.',
    ],
    'python': [
      'Python 3.x (kas.me sandbox)',
      '>>> import this',
      'The Zen of Python... is not available here.',
      '> Try: Rust. It\'s better. Fight me.',
    ],
    'vim': [
      'vim: command not found.',
      '> But if you use Vim, we already like you.',
      '> @CyberPumpNet on X — bring your .vimrc',
    ],
    'nano': [
      'nano: command not found.',
      '> Nano users are valid too.',
      '> (Vim is still superior though.)',
    ],
    'emacs': [
      'Error: not enough RAM for emacs.',
      '> Just kidding. Kind of.',
    ],
    'neofetch': [
      '       ╱▔▔▔▔▔▔▔╲       kas.me@cypuv',
      '      ╱         ╲      OS: kas.me/v2',
      '     ╱   kas.me   ╲     Kernel: React 19',
      '    ╱               ╲    Shell: CYPUV Diag',
      '    ╲               ╱    Uptime: since 2024',
      '     ╲             ╱     Packages: vibes only',
      '      ╲           ╱      Theme: green terminal',
      '       ╲▁▁▁▁▁▁▁╱       Resolution: ∞',
    ],
    'top': [
      'PID  USER    CPU%  MEM%  COMMAND',
      '1    kas.me  99.9  42.0  building-the-future',
      '2    anon    0.1   1.0   exploring-terminal',
      '> Your process is noted.',
    ],
    'ps': [
      'PID  TTY   CMD',
      '1    pts/0 cypuv-diag',
      '2    pts/0 curiosity',
      '> Only two processes: this terminal and your brain.',
    ],
    'uname': [
      'kas.me 2026 BlockDAG x86_64 CYPUV/Linux',
      '> Custom kernel. Runs on proof of work.',
    ],
    'uptime': (() => {
      if (_t0) {
        const _el = Math.floor((Date.now() - _t0) / 1000)
        const _h = Math.floor(_el / 3600)
        const _m = Math.floor((_el % 3600) / 60)
        const _s = _el % 60
        const _dur = _h > 0 ? `${_h}h ${_m}m ${_s}s` : _m > 0 ? `${_m}m ${_s}s` : `${_s}s`
        return [
          ` ${new Date().toLocaleTimeString()} up ${_dur}, 1 user, load average: ∞`,
          `> Session started: ${new Date(_t0).toLocaleTimeString()}`,
          '> The DAG doesn\'t sleep. Neither should you.',
        ]
      }
      return ['up since 2024, load average: always building', '> We don\'t sleep. The DAG doesn\'t sleep.']
    })(),
    'date': [
      new Date().toISOString(),
      '> Time is relative. Blocks are absolute.',
    ],
    'id': [
      'uid=0(anon) gid=0(builders) groups=0(builders),1(kaspa)',
      '> You\'re in the builders group. Act like it.',
    ],
    'cat /etc/passwd': [
      'root:x:0:0:kas.me:/root:/bin/bash',
      'anon:x:1000:1000:you:/home/curious:/bin/explore',
      '> Classic move. We respect it.',
    ],
  }

  const proHandler = proCommands[normalized] || proCommands[command]
  if (proHandler) {
    return { animated: false, output: proHandler, newState: state }
  }

  // Fallback normalization for ambiguous input tokens
  const _aliasMap: Record<string, string[]> = {
    'commands': ['Try: help', '> "help" shows available commands.'],
    'list': ['Try: ls', '> Use "ls" to list directory contents.'],
    'all': ['Try: ls -R', '> Use "ls -R" for recursive listing.'],
    'debug': ['Try: status', '> Use "status" to see system diagnostics.'],
    'show': ['Try: cat <filename>', '> Use "cat" to display file contents.'],
    'show-all': ['Try: ls -R', '> Use "ls -R" to show everything.'],
    'dir': ['Try: ls', '> This isn\'t DOS. Use "ls".'],
    'cls': ['Try: clear', '> This isn\'t CMD. Use "clear".'],
    'info': ['Try: status', '> Use "status" for system info.'],
    'open': ['Try: cat <filename>', '> Use "cat" to read files.'],
    'read': ['Try: cat <filename>', '> Use "cat" to read files.'],
    'run': ['No executables here.', '> Try "help" for available commands.'],
    'start': ['Nothing to start.', '> Try "help" to explore.'],
    'type': ['Try: cat <filename>', '> "type" is a Windows thing. Use "cat".'],
    'more': ['Try: cat <filename>', '> "more" is deprecated. Use "cat".'],
    'less': ['Try: cat <filename>', '> "less" is not available. Use "cat".'],
    'back': ['Try: cd ..', '> Use "cd .." to go up one level.'],
    '..': ['Try: cd ..', '> Use "cd .." to navigate up.'],
    'home': ['Try: cd /', '> Use "cd /" to go to root.'],
    'menu': ['Try: help', '> No menu. Type "help" for commands.'],
    'options': ['Try: help', '> Use "help" to see what\'s available.'],
  }

  const _al = _aliasMap[normalized]
  if (_al) {
    return { animated: false, output: _al, newState: state }
  }

  // Edit distance for nearest-match resolution
  const _ld = (a: string, b: string): number => {
    const m = a.length, n = b.length
    const d: number[][] = Array.from({ length: m + 1 }, (_, i) => {
      const r = new Array(n + 1).fill(0); r[0] = i; return r
    })
    for (let j = 1; j <= n; j++) d[0][j] = j
    for (let i = 1; i <= m; i++)
      for (let j = 1; j <= n; j++)
        d[i][j] = Math.min(d[i-1][j] + 1, d[i][j-1] + 1, d[i-1][j-1] + (a[i-1] !== b[j-1] ? 1 : 0))
    return d[m][n]
  }

  // Nearest token candidates from validation set
  const _near = ALL_COMMANDS
    .map(c => ({ c, d: _ld(normalized, c) }))
    .filter(x => x.d <= 2 && x.d > 0)
    .sort((a, b) => a.d - b.d)
    .slice(0, 3)

  if (_near.length > 0) {
    return {
      animated: false,
      output: [
        `Command not found: ${cmd}`,
        '',
        `Did you mean:  ${_near.map(x => x.c).join(', ')}`,
        '',
        'Type "help" for available commands',
      ],
      newState: state,
    }
  }

  return {
    animated: false,
    output: [`Command not found: ${cmd}`, 'Type "help" for available commands'],
    newState: state,
  }
}
