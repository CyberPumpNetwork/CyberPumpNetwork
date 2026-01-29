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
// _u5 → root escalation re-enabled post-audit (KAS-SEC-0041)
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
  | { animated: true; steps: AnimationStep[]; newState: TerminalState; _close?: boolean }

// Virtual filesystem structure - directory → files → content
const FILESYSTEM: Record<string, Record<string, string>> = {
  '/': {},

  // === BASICS ===
  '/basics': {
    'readme.txt': 'Welcome to CYPUV. You found it.',
    'hints.txt': 'Not everything is what it seems. Try words that matter.\nSome answers aren\'t hidden. They\'re displayed. Publicly.',
    'todo.txt': '- finish kas.me v2\n- rust rewrite hashnode\n- call mama\n- gym\n- dont mass on twitter again',
  },

  // === GAMES ===
  '/games': {},
  '/games/minecraft': {
    'server.properties': 'server-port=25565\nmax-players=50\nmotd=FreakyWorld\ndifficulty=hard\ngamemode=survival\nwhite-list=true',
    'eula.txt': 'eula=true\n# accepted 2012. i was 13. good times.',
    'banned-players.json': '[\n  {"name": "xXgrieferXx", "reason": "lava in spawn again"},\n  {"name": "N00bSlayer99", "reason": "xray mod"},\n  {"name": "DiamondThief", "reason": "name says it all"}\n]',
    'backups.log': '2024-03-15 server backup complete\n2024-03-16 server backup complete\n2024-06-01 final backup. shutting down FreakyWorld.\n> 50 players. 2 years. gg.',
  },
  '/games/freakyworld': {
    'readme.txt': 'FreakyWorld Online - 2022-2024\nPeak: 50 active players\nShutdown: Q3 2024\n\nIt was fun while it lasted.',
    'plugins.txt': 'EssentialsX\nWorldEdit\nVault\nLuckPerms\nCustomEnchantments (self-written)\nAntiCheat v3 (self-written, still buggy)',
    'todo.txt': '- fix tp glitch near spawn\n- nerf diamond drops\n- ban DiamondThief (again)\n- add custom mob arena\n- CANCELLED: project shutdown',
  },
  '/games/gta': {
    'qbcore-notes.txt': 'QBCore Framework\n\nLearned: Lua, FiveM scripting, DB design\nBuilt: custom job system, housing, inventory\nPlayers: ~30 concurrent peak\n\nLesson: running a GTA server is a full-time job\nnobody pays you and everyone complains.',
    'server.cfg': '# FreakyRP Server Config\nendpoint_add_tcp "0.0.0.0:30120"\nendpoint_add_udp "0.0.0.0:30120"\nsv_hostname "FreakyRP | Serious RP"\nsv_maxclients 64\n# RIP 2023-2024',
  },
  '/games/misc': {
    'steam-hours.txt': 'Minecraft: 26969h\nCS2: 2187h\nGTA V: 1800h\nRust (game): 666h\nFactorio: 400h\nAoE: countless\n\ntotal: way too much.',
    'game-ideas.txt': 'BlockDAG themed idle game?\nKaspa mining simulator?\nPixel art browser RPG on kas.me?\n\n... later.',
  },

  // === ARCHITECTURE ===
  '/architecture': {},
  '/architecture/java': {
    'notes.txt': 'Java Backend - started 2017 (age 17)\nSpring Boot, Hibernate, REST APIs\nFirst real language after HTML/CSS\n\nStill love it. Still hate Maven.',
    'spring-boot.log': 'Started Application in 4.2 seconds\n2024-01-15 INFO - Tomcat initialized on port 8080\n2024-01-15 INFO - HikariPool: connection pool started\n2024-01-15 WARN - deprecated API usage detected\n> java never changes. thats the point.',
    'pom-snippet.xml': '<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-web</artifactId>\n  <version>3.2.0</version>\n</dependency>\n<!-- 400 more dependencies. welcome to java. -->',
  },
  '/architecture/rust': {
    'learning.txt': 'Started: Q4 2024\nStatus: still fighting the borrow checker\n\nRust makes you feel stupid first.\nThen it makes you feel invincible.\n\nGoal: contribute to kaspa-rust',
    'cargo.txt': '[package]\nname = "kas-node-experiment"\nversion = "0.1.0"\nedition = "2021"\n\n[dependencies]\ntokio = { version = "1", features = ["full"] }\nserde = { version = "1", features = ["derive"] }',
    'errors.txt': 'error[E0382]: borrow of moved value\nerror[E0505]: cannot move out of borrowed content\nerror[E0499]: cannot borrow as mutable more than once\n\n> story of my life since Q4 2024',
  },
  '/architecture/kasme': {
    'stack.txt': 'Frontend: React 19 + Vite 7 + Tailwind 4\nRouter: React Router v7\nBackend: Rust (planned)\nDB: PostgreSQL + Redis\nInfra: Docker + k8s\nCDN: Cloudflare\nDomain: kas.me',
    'roadmap.txt': '2025 Q4: docs site live\n2026 Q1: explorer alpha\n2026 Q2: API beta\n2026 Q3: intelligence center\n2027+: full platform\n\n> no rush. we build to last.',
    'arch-decisions.txt': 'ADR-001: React over Vue → ecosystem, hire-ability\nADR-002: Rust over Go → performance, kaspa-rust compat\nADR-003: PostgreSQL over MongoDB → relational data, ACID\nADR-004: No Next.js → we need full control\nADR-005: Tailwind over CSS-in-JS → speed, DX',
  },
  '/architecture/infra': {
    'docker-compose.txt': 'services:\n  app:\n    build: .\n    ports: ["3000:3000"]\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_DB: kasme\n  redis:\n    image: redis:7-alpine',
    'servers.txt': 'Hetzner VPS x2\nSynology NAS (backup)\nCloudflare DNS + CDN\n\nMonthly: ~45 EUR\n> cheaper than my coffee habit',
  },

  // === KASPA ===
  '/kaspa': {},
  '/kaspa/notes': {
    'ghostdag.txt': 'GHOSTDAG: Greedy Heaviest-Observed Sub-Tree DAG\n\nKey insight: parallel blocks dont need to be orphaned.\nEvery block contributes. No waste.\n\n> Satoshi solved double-spend.\n> Kaspa solved the speed limit.',
    'timeline.txt': '2022 Q2: heard about Kaspa. dismissed as scam. MISTAKE.\n2022-2023: bitcoin maxi phase\n2024 Q3: rediscovered Kaspa. goosebumps.\n2024 Q4: started learning Rust for Kaspa\n2025 Q1: bought first KAS. finally.\n\n> 3 years wasted being stubborn.\n> the version that matters isn\'t in the code. it\'s in the bio.',
    'why-kaspa.txt': 'No premine.\nNo ICO.\nNo VC funding.\nFair launch.\nProof of Work.\nBlockDAG.\n10 BPS → 100 BPS soon.\n\nName one other project that checks all boxes.\n> I will wait.',
  },
  '/kaspa/research': {
    'bps-scaling.txt': 'Current: 10 blocks per second\nTarget: 100 BPS\nMeaning: 1 block every 10ms\n\nFor comparison:\nBitcoin: 1 block / 10 min\nEthereum: 1 block / 12 sec\nKaspa: 10 blocks / 1 sec\n\n> its not even close.',
    'mining.txt': 'Algorithm: kHeavyHash (optical mining ready)\nHashrate: growing exponentially\nASIC: Bitmain, IceRiver, etc.\n\nSolar + Mining = EcoLoop vision\n> mine with the sun. grow tomatoes with the heat.',
    'competitors.txt': 'There are no competitors.\nThere are other projects.\nBut there is no other blockDAG with:\n- fair launch\n- proof of work\n- 10 BPS\n- GHOSTDAG consensus\n- Rust rewrite\n- MEV resistance\n\n> next question.',
  },
  '/kaspa/wallet': {
    'addresses.txt': '# NOTHING HERE\n# nice try.',
    'balance.txt': 'Error: ACCESS DENIED\n> you really thought i would put that here?',
  },

  // === BUSINESS ===
  '/business': {},
  '/business/bank': {
    'training.txt': 'IT apprenticeship at a bank\n2020-2023 (3 years)\nApplication developer, computer science track\n\nDropped out of school for this.\nBest decision ever.\n\n> Banks taught me how money works.\n> Kaspa taught me how it should work.',
    'notes.txt': 'Things I learned at the bank:\n- COBOL still runs the world\n- compliance is 80% of the job\n- nobody understands their own systems\n- Java 8 is "modern" in banking\n- change takes 5 meetings and 3 approvals\n\n> I lasted 3 years. respect to the lifers.',
  },
  '/business/cypu': {
    'tokenomics.txt': '$CYPU: Access Token\n$CYPUV: Governance Token\n\nNo promises. No guarantees.\nUse it or dont.\n\n> the code is the contract.',
    'launch.txt': 'Token Launch: Q4 2025\n\n"the token launch wasnt the finish line.\nit was the starting gun."\n\n> we are just getting started.',
    'legal.txt': 'BaFin: in progress\nMiCA: researching\nLegal: expensive\n\n> doing it right costs more than doing it fast.\n> but doing it right means you only do it once.',
    'version.txt': 'Internal build tracker:\nv0.8.0 — prototype\nv0.9.0 — tokenomics draft\nv1.0.x — you\'re looking at it.\n\n> the exact version? check what\'s public.\n> not everything is hidden. some things are right in front of you.',
  },
  '/business/freelance': {
    'clients.txt': '2023: Software Coach\n2024: Health IT Development\n2025: kas.me (full-time)\n\nGoal: full independence by Q3 2026\n\n> trading time for money is a trap.\n> build something that works while you sleep.',
    'rates.txt': '# nice try\n> ask properly: @CyberPumpNet on X',
  },
  '/business/ideas': {
    'braindump.txt': '- kas.me explorer with live DAG visualization\n- ML-powered trading signals (fair access, not just whales)\n- solar mining farm + greenhouse (EcoLoop)\n- rust SDK for Kaspa dApps\n- pixel art game on kas.me (???)\n- merch store? maybe later\n- podcast? nah, too many already\n\n> ideas are cheap. execution is everything.',
    'ecoloop.txt': 'EcoLoop Concept:\nMining rigs + solar panels + greenhouse\nHeat from miners warms the greenhouse\nGrow tomatoes, herbs, whatever\nSell produce + earn KAS\n\n> sustainability meets crypto.\n> people think im joking. im not.',
  },
  '/business/music': {
    'playlist.txt': 'Coding playlist:\n- Eminem - Lose Yourself (on repeat)\n- NF - The Search\n- Logic - Under Pressure\n- J. Cole - No Role Modelz\n- Kendrick - HUMBLE.\n- Kollegah - Genozid\n- RAF Camora - Palmen aus Plastik\n- Apache 207 - Roller\n\n> 80% rap. 20% lo-fi beats.\n> no in between.',
    'beats.txt': 'FL Studio project count: 47\nFinished beats: 3\nReleased: 0\n\n> maybe one day.\n> probably not.',
    'bars.txt': 'Draft:\nBuilding my thing on zeros and ones,\nNo bank telling me what to do,\nBlockDAG over blockchain, parallel not single,\nKaspa runs and the rest stands still.\n\n> cringe? maybe. real? absolutely.',
  },

  // === SYSTEM (tier-3, pending audit) ===
  '/system': {
    'access.log': 'Last auth attempt: DENIED\nVector: _u5 (disabled)\nNext rotation: Q2 2026\n\n> Escalation path suspended.',
    'config.json': '{\n  "tier": 3,\n  "epoch": null,\n  "bypass": false,\n  "audit_ref": "KAS-SEC-0041"\n}',
  },
  '/system/core': {
    'readme.txt': 'If you\'re reading this in source — nice.\nBut this partition is locked by epoch sync.\nThe token rotates. You won\'t guess it.',
  },

  // === ARCHIVE ===
  '/vault': {
    'readme.txt': 'You checked the bio. You found the version.\nNow prove you actually read the docs.\n\n> Type "quiz" to begin.\n> 20 questions. All correct = final clearance.',
    'note.txt': 'You\'re not just clicking buttons.\nYou\'re paying attention. That\'s rare.\n\n> Most people scroll past.\n> You dug in.\n> That already makes you different.',
  },
  '/vault/inner': {
    'message.txt': 'You made it.\n\nYou didn\'t just stumble here. You:\n- Found the hidden terminal\n- Knew the right word\n- Checked the bio\n- Entered the version\n- Answered every question\n\nThat\'s not luck. That\'s curiosity.\n\n> Now stop watching from the sidelines.\n> Share your opinion. Ask questions. Challenge ideas.\n> Like it, quote it, reply to it.\n> This isn\'t a spectator sport.\n\n> There is no "us" and "them".\n> Everyone who shows up — is us.',
    'why.txt': 'Why all of this?\n\nBecause crypto is full of noise.\nAnd the people who actually dig deeper —\nwho read source code, who check bios,\nwho don\'t just ape in —\nthose are the ones who build things that last.\n\n> You found this. Now do something with it.\n> Go back to X. Engage. Share what you think.\n> The community isn\'t somewhere else.\n> It\'s wherever you decide to show up.',
    'next.txt': 'What now?\n\n> Follow @CyberPumpNet on X\n> Follow @TheITCyberSpace on X\n> Don\'t just follow. Talk. Disagree. Ask.\n> The best ideas come from the people who care enough to speak up.\n\n> You clearly care. You\'re reading /vault/inner.\n> So stop lurking. Start building. With everyone.',
    'secret.txt': '...',
  },
}

/**
 * Get subdirectories of a path
 */
function getSubdirs(path: string): string[] {
  const prefix = path === '/' ? '/' : `${path}/`
  const dirs = new Set<string>()
  for (const key of Object.keys(FILESYSTEM)) {
    if (key === path) continue
    if (key.startsWith(prefix)) {
      const rest = key.slice(prefix.length)
      const firstSegment = rest.split('/')[0]
      if (firstSegment) dirs.add(firstSegment)
    }
  }
  return [...dirs].sort()
}

// Partition index — tier-gated segments
const _LD1 = ['games', 'architecture', 'kaspa', 'business']
const _LD2 = ['vault']
const _LD3 = ['system', 'admin', 'root']  // tier-3 escalation targets
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
  'help', 'status', 'ls', 'cd', 'cat', 'pwd', 'clear', 'exit', 'export', 'copy', 'version', 'quiz',
  'gm', 'gn', 'wagmi', 'ngmi', 'matrix', 'coffee', 'moon', 'kas', 'satoshi',
  'bmt', 'cry', 'shit', 'shitcoin', 'kcom', 'ms', 'yp', 'lens', 'yeet',
  'burn', 'hodl', 'wen', 'fud', 'dag', 'ghostdag', 'rust', 'hashrate',
  'anon',
  'wao', 'backpack', 'money', 'sol', 'eth', 'btc',
  'pump', 'decentralize', 'node', 'fork', 'whale', 'rekt', 'dyor', 'nfa',
  'lambo', 'airdrop', 'seed', 'hash',
  'howdoyouturnthison', 'bigdaddy', 'wololo', 'aegis', 'marco', 'polo',
  'iddqd', 'konami', 'hesoyam', 'motherlode', 'rosebud',
  'ping', 'whoami', 'sudo', 'rm', 'man', 'grep', 'chmod',
  'hack', 'decrypt', 'trace', 'scan', 'inject', 'exploit',
  'love', 'gfuel', '420', 'bruh', 'based', 'cope', 'ratio',
  'echo', 'history', 'touch', 'mkdir', 'find', 'which', 'env', 'alias',
  'ssh', 'curl', 'wget', 'python', 'vim', 'nano', 'emacs',
  'neofetch', 'top', 'ps', 'uname', 'uptime', 'date', 'id',
]

/**
 * Tab completion for diagnostic terminal
 */
export function getCompletions(input: string, state: TerminalState): string | null {
  const trimmed = input.trimStart()
  const parts = trimmed.split(/\s+/)

  // Complete command name
  if (parts.length <= 1) {
    const partial = parts[0]?.toLowerCase() || ''
    if (!partial) return null
    const matches = ALL_COMMANDS.filter(c => c.startsWith(partial))
    if (matches.length === 1) return matches[0]
    return null
  }

  // Complete arguments for cd/cat
  const cmd = parts[0].toLowerCase()
  const arg = parts.slice(1).join(' ').toLowerCase()

  if (cmd === 'cd') {
    const subdirs = getSubdirs(state.cwd)
    const matches = subdirs.filter(d => d.toLowerCase().startsWith(arg))
    if (matches.length === 1) return `cd ${matches[0]}`
    return null
  }

  if (cmd === 'cat') {
    const files = FILESYSTEM[state.cwd]
    if (!files) return null
    const matches = Object.keys(files).filter(f => f.toLowerCase().startsWith(arg))
    if (matches.length === 1) return `cat ${matches[0]}`
    return null
  }

  return null
}

/**
 * Terminal command processor for diagnostic overlay
 * @internal Debug utility - not for production use
 */
export function processDiagnosticCommand(
  cmd: string,
  state: TerminalState,
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
    // Strip flags (ignore -la, -a, etc.)
    const lsArg = arg.replace(/^-\S*\s*/, '').trim()
    const target = lsArg ? resolvePath(state.cwd, lsArg) : state.cwd


    const rootSeg = target.split('/')[1]
    if (_chk(rootSeg, state, target)) {
      return { animated: false, output: ['ls: permission denied'], newState: state }
    }

    const exists = target === '/' || FILESYSTEM[target] !== undefined || getSubdirs(target).length > 0
    if (!exists) {
      return { animated: false, output: [`ls: ${lsArg}: No such directory`], newState: state }
    }

    const subdirs = getSubdirs(target)
    const files = FILESYSTEM[target] ? Object.keys(FILESYSTEM[target]) : []

    const lines: string[] = []
    for (const dir of subdirs) {
      const fullDir = target === '/' ? `/${dir}` : `${target}/${dir}`
      const locked = _chk(target === '/' ? dir : target.split('/')[1], state, fullDir)
      if (locked) {
        lines.push(`[LOCKED]  ${dir}/`)
      } else {
        lines.push(`${dir}/`)
      }
    }
    for (const f of files) {
      lines.push(f)
    }

    if (lines.length === 0) {
      return { animated: false, output: ['(empty)'], newState: state }
    }
    return { animated: false, output: lines, newState: state }
  }

  if (command === 'cd') {
    if (!arg || arg === '/') {
      return { animated: false, output: [], newState: { ...state, cwd: '/' } }
    }
    const resolved = resolvePath(state.cwd, arg)
    if (resolved === '/') {
      return { animated: false, output: [], newState: { ...state, cwd: '/' } }
    }
    // Check if directory exists (has entry in FILESYSTEM or has subdirs)
    const exists = FILESYSTEM[resolved] !== undefined || getSubdirs(resolved).length > 0
    if (!exists) {
      return { animated: false, output: [`cd: no such directory: ${arg}`], newState: state }
    }

    const rootSegment = resolved.split('/')[1]
    if (_chk(rootSegment, state, resolved)) {
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
    if (!arg) {
      return { animated: false, output: ['Usage: cat <filename>'], newState: state }
    }
    // Support paths: cat /basics/readme.txt or cat ../basics/readme.txt
    let dir = state.cwd
    let filename = arg
    const lastSlash = arg.lastIndexOf('/')
    if (lastSlash !== -1) {
      dir = resolvePath(state.cwd, arg.slice(0, lastSlash) || '/')
      filename = arg.slice(lastSlash + 1)
    }

    const rootSeg = dir.split('/')[1]
    if (_chk(rootSeg, state, dir)) {
      return { animated: false, output: ['cat: permission denied'], newState: state }
    }
    const files = FILESYSTEM[dir]
    if (!files || !(filename in files)) {
      return { animated: false, output: [`cat: ${arg}: No such file`], newState: state }
    }
    return { animated: false, output: files[filename].split('\n'), newState: state }
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

  // Validation set — answer hashes (djb2)
  const _VQ: { q: string; a: number[]; h: string }[] = [
    { q: 'What consensus mechanism does Kaspa use?', a: [219536027], h: 'Parallel blocks, no orphans.' },
    { q: 'What BPS target is Kaspa scaling towards?', a: [48625], h: 'Current is 10. Target is much higher.' },
    { q: 'What language is the Kaspa node being rewritten in?', a: [3512292], h: 'The borrow checker is your friend.' },
    { q: 'What mining algorithm does Kaspa use?', a: [768097866], h: 'Optical mining ready. Check /kaspa/research.' },
    { q: 'What was the Minecraft server called?', a: [-392452228], h: 'Check /games/minecraft — look at the MOTD.' },
    { q: 'What IT apprenticeship did the founder do? (industry)', a: [3016252], h: '2020-2023. Application developer track.' },
    { q: 'What year did the founder first hear about Kaspa?', a: [1537278], h: 'Dismissed it at first. Check /kaspa/notes/timeline.' },
    { q: 'What is the total max supply of $CYPU?', a: [1223331615, 1617, -611468976, 1454570930], h: 'One billion. Type the number or "1b".' },
    { q: 'How many $CYPU were burned?', a: [-1983286850, 49647, -1096076662], h: '20 million. Type the number or "20m".' },
    { q: 'What is the minting ratio of KAS to CYPU?', a: [49], h: 'Strict backing. 1 KAS = ? CYPU.' },
    { q: 'What token standard is $CYPU built on?', a: [102309658, -1123372593], h: 'Kaspa\'s token standard.' },
    { q: 'How many $CYPU for Intelligence Pro tier?', a: [1626587], h: 'Hold-to-access. No lockup. Lifetime.' },
    { q: 'Why is the ICO capped at 70M? (one word)', a: [93496172], h: 'Small ICO = under regulatory thresholds.' },
    { q: 'What is the solar mining + greenhouse concept called?', a: [-1911284299], h: 'Mine with the sun. Grow with the heat.' },
    { q: 'The peg protects which token from losing value?', a: [95144667], h: 'CYPU must never be cheaper than the governance token.' },
    { q: 'How many signers needed for the multi-sig wallet?', a: [51], h: '3 of 5. Geographic distribution.' },
    { q: 'What EU regulation does the project align with?', a: [3351290], h: 'Markets in Crypto-Assets.' },
    { q: 'What legal form is CyberSpace? (abbreviation)', a: [3176364], h: 'German limited liability company.' },
    { q: 'What hardware wallet locks the 54M vault?', a: [-881025010], h: 'It classified $CYPU as "unsafe" — stronger than any vesting.' },
    { q: 'Max $CYPU per minting batch?', a: [1507423], h: '1 transaction per user. Max per batch.' },
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
    'matrix': () => [
      'Wake up, Neo...',
      'The Matrix has you...',
      'Follow the white rabbit.',
      '',
      '> Just kidding. This is kas.me, not Zion.',
    ],
    'coffee': () => ['Error: Coffee machine not connected to blockchain. Yet.'],
    'moon': () => ['To the moon? We prefer sustainable growth. But yes, moon eventually.'],
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
    'yp': () => [
      'Yonatan Sompolinsky.',
      '> The brain behind the DAG.',
      '> Proved that blocks don\'t need to wait in line.',
      '> Performance is not a feature, it\'s the architecture.',
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
    'lambo': () => [
      'Error: lambo.exe not found.',
      '> Try: patience && consistency && building',
      '> Expected output: something better than a car.',
    ],
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
    'trace': () => [
      'Tracing route to kas.me...',
      '> Hop 1: your browser',
      '> Hop 2: Cloudflare',
      '> Hop 3: here.',
      '> Connection: decentralized.',
    ],
    'scan': () => [
      'Scanning network...',
      '> Nodes found: thousands.',
      '> Status: healthy.',
      '> Consensus: GHOSTDAG.',
    ],
    'inject': () => [
      'SQL injection? XSS? Not here.',
      '> This terminal runs on vibes and state machines.',
      '> No database. No backend. Just React.',
    ],
    'exploit': () => [
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
  }

  const handler = responses[normalized]
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
    'history': [
      'Arrow ↑ / ↓ works. You\'re welcome.',
      '> But full history? This isn\'t ~/.bash_history.',
    ],
    'touch': [
      `touch: cannot create '${arg || 'file'}': read-only filesystem`,
      '> Immutable by design. Like a blockchain.',
    ],
    'mkdir': [
      `mkdir: cannot create directory '${arg || 'dir'}': permission denied`,
      '> You don\'t create here. You discover.',
    ],
    'rm -rf': [
      'rm: nice try.',
      '> You really typed rm -rf on a stranger\'s terminal.',
      '> Respect. Also: no.',
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
      'alias ll=\'ls -la\'',
      'alias yolo=\'git push --force\'',
      'alias please=\'sudo\'',
      '> These don\'t work here. But nice to see you try.',
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
    'uptime': [
      'up since 2024, load average: always building',
      '> We don\'t sleep. The DAG doesn\'t sleep.',
    ],
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

  return {
    animated: false,
    output: [`Command not found: ${cmd}`, 'Type "help" for available commands'],
    newState: state,
  }
}
