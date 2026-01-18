# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ READ THIS FIRST: STRICT_RULES.md

**BEFORE touching ANY code, READ:** [STRICT_RULES.md](./STRICT_RULES.md)

**Critical Issues Fixed by STRICT_RULES.md:**
1. ❌ 139 hardcoded color classes → ✅ ONLY 3 colors allowed (accent, muted-foreground, foreground)
2. ❌ Repetitive content across pages → ✅ Zero tolerance for duplicate paragraphs
3. ❌ Sections too long (walls of text) → ✅ MAX 300 words per section
4. ❌ CYPUV governance invisible → ✅ Must be visible on Tokenomics page + navigation
5. ❌ Truth source unclear → ✅ Centralized data files (tokenomics-data.ts, etc.)

**Non-Negotiable Standards:**
- Corporate look, NOT rainbow festival
- Concise sections, NOT walls of text  
- Single source of truth for ALL data
- CYPUV governance must be visible
- NO content repetition across pages

---

## Project Overview

**CyberPumpNetwork** is a modern React-based documentation site for kas.me, a Kaspa ecosystem platform by The IT CyberSpace. This is a **documentation migration project** from an old Jekyll-based site to a modern React/Vite stack.

### Key Context
- **Migration in Progress**: Old Jekyll markdown files with inline HTML/CSS are being **completely rewritten** as clean markdown or custom TSX components
- **Two Codebases**: The old `CyberPump` Jekyll repo exists nearby but is **READ-ONLY** - use it only as reference for content, never copy code directly
- **Compliance Critical**: BaFin (German financial regulator) and EU MiCA compliance required - avoid profit promises, use careful language, add disclaimers for staking/investment features

## Build Commands

```bash
# Development server (port 5173)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

## Architecture Overview

### Content System

The documentation uses **two approaches** based on complexity:

**1. Markdown Files** (`src/docs/*.md`)
- Simple, text-focused pages (guides, FAQs, Dev Talks)
- Processed by `MarkdownRenderer` component
- Registered in `src/lib/docs.ts`

**2. Custom TSX Components** (`src/components/docs/*.tsx`)
- Complex pages with interactive elements, custom layouts
- Examples: `TokenomicsContent.tsx`, `BasicsContent.tsx`
- Integrated via conditional rendering in `DocsPage.tsx`

### Routing Pattern

```
DocsPage.tsx
  ├─ Custom Component Check (slug === 'tokenomics' || slug === 'getting-started/basics')
  │   ├─ <TokenomicsContent /> (custom TSX)
  │   └─ <BasicsContent /> (custom TSX)
  └─ <MarkdownRenderer /> (markdown files)
```

### Adding New Documentation

**CRITICAL: Think Like a READER, Not a Developer!**

Before creating ANY new page, answer these questions:
1. **Who needs this information?** (Beginner, Trader, Developer, Institutional user?)
2. **When do they need it?** (First visit, after understanding basics, during deep-dive?)
3. **What did they read BEFORE this?** (What context do they already have?)
4. **Where do they go AFTER this?** (What's the logical next step?)

**Navigation Architecture Rules:**

1. **ALWAYS update `src/lib/docs.ts` first** - This is the single source of truth for navigation
2. **Check category structure** - Does a parent category exist? Do we need a new one?
3. **Verify reading order** - Use the `order` property to control sequence within categories
4. **No orphaned pages** - Every page must be reachable from the sidebar
5. **No broken links** - Every link must point to an existing, registered page

**Adding Pages (Step-by-Step):**

1. **Simple Page**: Create `.md` file in `src/docs/` → Register in `src/lib/docs.ts`
2. **Complex Page**: Create `.tsx` component in `src/components/docs/` → Add conditional in `DocsPage.tsx` → Update slug check → Register in `src/lib/docs.ts`

### Reusable Doc Components

Located in `src/components/docs/`:
- `ResourceCard` - Feature cards with icons, links
- `Callout` - Info boxes (types: info, warning, success, danger, tip, note)
- `StatsGrid` - Statistics display with icons and optional trends
- `BlockchainSpeedComparison` - Animated blockchain comparison (60s cycle with time selection)

## Information Architecture & User Journey

**CORE PRINCIPLE: No Labyrinth - Clear Paths Only**

Users should NEVER feel lost. Every page must have:
1. **Clear entry point** - How did they get here?
2. **Context awareness** - What do they need to know already?
3. **Next steps** - Where should they go next?

### Reading Order (User Journeys)

**Journey 1: Complete Beginner**
```
1. Landing Page → "What is kas.me?"
2. Getting Started: Basics → "What is Kaspa? What is $CYPU?"
3. Tokenomics Overview → "How does the token work?"
4. Platform Features → "What can I do with kas.me?"
5. Community Resources → "Where can I get help?"
```

**Journey 2: Crypto Trader**
```
1. Landing Page → "Show me the money"
2. Tokenomics Overview → "Token metrics, supply, ICO"
3. Public Market: Mint → "How do I get tokens?"
4. Public Market: DEX Pools → "Where can I trade?"
5. Intelligence Center Features → "What analytics do I get?"
```

**Journey 3: Technical / Institutional User**
```
1. Landing Page → "Show me technical depth"
2. Detailed Tokenomics → "Full economic model"
3. Network Architecture → "How does CPN work?"
4. Compliance & Safety → "Regulatory framework"
5. Developer Docs → "API access, integration"
```

**Journey 4: Node Operator**
```
1. Landing Page → "How do I earn?"
2. Network Economics → "Reward structure"
3. CPN Architecture → "How to run a node?"
4. Node Setup Guide → "Step-by-step installation"
5. Developer Resources → "Technical docs"
```

### Navigation Structure Rules

**Category Hierarchy (STRICT):**
```
kas.me-docs/
├── Getting Started (Beginners)
│   ├── Welcome to kas.me (order: 1)
│   ├── Kaspa Basics (order: 2)
│   ├── About kas.me (order: 3)
│   └── FAQ (order: 4)
│
├── Tokenomics (Token Economics)
│   ├── Overview (order: 1) - High-level, accessible
│   ├── Detailed Tokenomics (order: 2) - Deep technical dive
│   └── Detailed Tokenomics Sub-pages (order: 3+)
│       ├── Token Supply
│       ├── Liquidity Pools
│       ├── PEG System
│       ├── Staking
│       ├── Vesting
│       ├── Locks
│       └── Wallets
│
├── Public Market (Traders)
│   ├── Minting Process (order: 1)
│   ├── DEX Pools (order: 2)
│   └── Trading Guides (order: 3)
│
├── Platform Features (Users)
│   ├── Intelligence Center (order: 1)
│   ├── Free Explorer (order: 2)
│   ├── iCrypto Pump (order: 3)
│   └── Feature Comparisons (order: 4)
│
├── Network (Technical)
│   ├── CyberPumpNetwork Overview (order: 1)
│   ├── Node Economics (order: 2)
│   ├── Architecture (order: 3)
│   └── Compliance (order: 4)
│
├── Community (Social)
│   ├── Dev Talks (order: 1)
│   ├── Partners (order: 2)
│   └── Story (order: 3)
│
└── Development (Developers)
    ├── API Documentation (order: 1)
    ├── SDK & Tools (order: 2)
    └── Audits (order: 3)
```

**Category Order (STRICTLY ENFORCED):**
```typescript
categoryOrder = [
  'Getting Started',      // 1. Beginners first
  'Tokenomics',          // 2. Then economics
  'Public Market',       // 3. Then trading
  'Platform Features',   // 4. Then platform usage
  'Network',            // 5. Then technical depth
  'Community',          // 6. Then social
  'Development',        // 7. Finally developers
]
```

### Navigation Update Checklist

**Before Adding/Changing ANY Page:**

- [ ] **User Journey Analysis**
  - [ ] Which user persona needs this? (Beginner, Trader, Technical, Developer)
  - [ ] What's their knowledge level BEFORE this page?
  - [ ] What question does this page answer?
  - [ ] Where do they go AFTER reading this?

- [ ] **Category Structure**
  - [ ] Does the right category exist in `src/lib/docs.ts`?
  - [ ] Is the category in the correct position in `categoryOrder`?
  - [ ] Do we need a NEW category? (Only if no existing one fits)

- [ ] **Page Registration in `src/lib/docs.ts`**
  - [ ] Added to `docsConfig` array
  - [ ] Correct `title`, `description`, `category`, `slug`
  - [ ] `order` property set (determines position in sidebar)
  - [ ] No duplicate slugs

- [ ] **Internal Links**
  - [ ] All links use `/docs/category/page` format
  - [ ] No broken links (all targets exist in `docsConfig`)
  - [ ] No circular loops (Page A → Page B → Page A)
  - [ ] Links make sense for the reading order

- [ ] **Breadcrumbs & Context**
  - [ ] Page shows where user is in the hierarchy
  - [ ] User can navigate UP (to category) and ACROSS (to related pages)
  - [ ] "Next Steps" or "Related Pages" provided at bottom

### Anti-Patterns (NEVER DO THIS)

**❌ Creating Orphaned Pages:**
```typescript
// BAD: File exists but not in docs.ts
src/docs/secret-page.md  // ← User can NEVER find this!
```

**❌ Broken Link Chains:**
```typescript
// BAD: Page A links to non-existent Page B
<a href="/docs/missing-page">Read More</a>  // ← 404 error!
```

**❌ Circular Navigation:**
```typescript
// BAD: Endless loop
Page A: "Before reading this, see Page B"
Page B: "Before reading this, see Page A"  // ← User stuck!
```

**❌ Random Order:**
```typescript
// BAD: No logical sequence
1. Advanced API Usage
2. What is kas.me?  // ← Beginner content AFTER advanced???
3. Token Supply Details
```

**❌ Missing Categories:**
```typescript
// BAD: Page has no home
{
  title: 'Advanced Trading Strategies',
  category: 'Trading',  // ← Category doesn't exist in categoryOrder!
}
```

**❌ Duplicate Slugs:**
```typescript
// BAD: Two pages with same slug
{ slug: 'getting-started/basics', ... }
{ slug: 'getting-started/basics', ... }  // ← Which one loads???
```

### Content Cross-Referencing Rules

**When to Link to Other Pages:**

1. **Prerequisites** - Link to foundational knowledge
   ```tsx
   <Callout type="info">
     New to Kaspa? Read <a href="/docs/getting-started/basics">Kaspa Basics</a> first.
   </Callout>
   ```

2. **Deep Dives** - Link to detailed explanations
   ```tsx
   <p>
     For technical details, see <a href="/docs/tokenomics/det-token/supply">Token Supply</a>.
   </p>
   ```

3. **Related Topics** - Link to parallel content
   ```tsx
   <div className="grid gap-4">
     <a href="/docs/platform/intelligence">Intelligence Center</a>
     <a href="/docs/platform/explorer">Free Explorer</a>
   </div>
   ```

**When NOT to Link:**

1. ❌ Don't link to pages that require MORE knowledge than current page
2. ❌ Don't create link loops (A → B → C → A)
3. ❌ Don't link to external sites without `external={true}` indicator
4. ❌ Don't link to non-existent pages ("Coming Soon" = no link)

---

## Content Migration Guidelines

**CRITICAL**: When migrating content from old Jekyll repo:

### Step 1: Deep Analysis Required
**NEVER** just migrate a single file. Always analyze the complete content tree:

1. **Read the ROOT file FIRST** - Start with the main `.md` file (e.g., `det_tokenomics.md`)
2. **Map ALL linked sub-pages** - Follow every internal link (`/kasme/...` paths) to find related files
3. **Check for sub-directories** - Look for folders like `det_token/`, `publicmarket/`, `titcs/` etc.
4. **Understand the full scope** - Migration means migrating the ENTIRE content section, not just one page
5. **Avoid endless link loops** - If you only migrate the root without its children, you create broken navigation

### Step 2: Migration Strategy Decision

**CRITICAL: Choose Hub Structure First!**

Before writing ANY code, decide the content organization:

#### **Strategy A: All-in-One Hub Page**
*Like `TokenomicsContent.tsx` - Everything on ONE scrollable page*

**When to use:**
- Content is interconnected and flows naturally together
- User benefits from seeing complete picture at once
- Total content < 2000 lines (stays manageable)

**Implementation:**
1. Create ONE comprehensive `YourContent.tsx` with ALL sections
2. Use internal anchor links for navigation (`<div id="section">`)
3. **REMOVE** all sub-page entries from `src/lib/docs.ts` (they don't exist anymore!)
4. Links from other pages point to `#anchors`: `/docs/tokenomics#staking`

**Example:** `TokenomicsContent.tsx` has Dual-Token, Key Features, Documentation Resources all in one

---

#### **Strategy B: Hub Overview + Separate Detail Pages**
*Like `det_tokenomics` - Overview page + individual detail pages*

**When to use:**
- Each sub-topic has EXTENSIVE content (>300 lines each)
- Sub-topics are independently useful (users link directly to them)
- Content is better consumed in focused chunks

**Implementation:**
1. Create overview `YourHubContent.tsx` with summaries + ResourceCards
2. For EACH sub-page, create either:
   - `SubTopicContent.tsx` (if complex, interactive) OR
   - `sub-topic.md` (if simple, text-heavy)
3. **KEEP** all sub-page entries in `src/lib/docs.ts`
4. Add TSX components to `DocsPage.tsx` routing
5. Ensure ALL links use full paths: `/docs/tokenomics/det-token/staking`

**Example:** Platform Features hub → Individual feature detail pages

---

#### **Strategy C: Simple Markdown Pages**
*For straightforward text content*

**When to use:**
- No interactive elements needed
- Primarily text with basic formatting
- Examples: FAQ, Dev Talks, simple guides

**Implementation:**
- Create clean `.md` file in `src/docs/`
- Register in `src/lib/docs.ts`
- Done!

---

### Step 3: Content Extraction Rules

1. **Never copy HTML/CSS** - Old files have inline `<div>`, Font-Awesome icons, custom CSS classes
2. **Extract content only** - Use old files as information source, rewrite completely
3. **Replace Font Awesome with Lucide** - `<i class="fas fa-coins">` → `<Coins className="w-6 h-6 text-accent" />`
4. **Replace inline styles with Tailwind** - `style="color: var(--accent-turkis);"` → `className="text-accent"`
5. **Convert accordions to React state** - Jekyll accordions → `useState` with expand/collapse logic
6. **Preserve "Easter Eggs"** - Dev Talks in `src/docs/community/devtalks/` are founder's personal insights - keep exact tone/content

### Step 4: Complete Migration Checklist

Before considering a migration "done":
- [ ] Root page migrated with modern design
- [ ] ALL sub-pages identified and migrated
- [ ] Internal links updated to new routes (`/docs/...`)
- [ ] External links preserved (Kaspa explorer, DEX pools, etc.)
- [ ] Images/charts handled (either migrated or replaced with components)
- [ ] Navigation breadcrumbs correct
- [ ] Build succeeds with zero TypeScript errors
- [ ] Manual testing in browser confirms all links work

### Example Migration Flow

**Bad (Incomplete):**
```
User: "integrate det_tokenomics"
Claude: Creates DetTokenomicsContent.tsx with accordion
Result: Links to /det_token/supply, /det_token/peg etc. are BROKEN (not migrated)
```

**Good (Complete):**
```
User: "integrate det_tokenomics"
Claude:
1. Reads det_tokenomics.md + ALL files in det_token/, publicmarket/, titcs/
2. Creates DetTokenomicsContent.tsx with full sub-section content OR
3. Migrates each sub-page individually and ensures links work
4. Tests all navigation paths
Result: Complete, working documentation section
```

See `CONTENT_MIGRATION_GUIDE.md` for detailed examples.

## Special Sections

### Dev Talks (Behind the Scenes)
- Personal philosophical content from founder
- No marketing speak, honest reflections
- Located in `src/docs/community/devtalks/`
- Rendered with special `DevTalkCard` component
- **Must preserve exact tone and message**

### Tokenomics
- Dual-token system:
  - **$CYPU** (1B max supply) - Main utility token
  - **$CYPUV** (54,550,000 max supply) - Vault token, 1:1 backed by cold storage (NOT a vesting token!)
- Main page uses custom `TokenomicsContent.tsx`
- Detail pages registered in `docsConfig` array
- **Compliance language required** - add disclaimers, avoid "may/possible" overload

### Platform Technology (HFT & On-Chain Analysis)
- **CyberPumpNetwork (CPN)** - The backbone infrastructure for kas.me
- **HFT Infrastructure** - High-frequency trading with P2P network (libp2p, Gossipsub)
- **Global Topology** - Godfather Nodes (broadcasters) + Worker Nodes (processors)
- **Performance** - <5ms regional latency, 40k+ orders/sec capacity, 0.051ms audit trail per event
- **Compliance** - Kill Switch, Pre-Trade Controls, DORA/BaFin/SEC compliance
- **Technical Docs** - Reference files in `../kas.me-dos/` directory (01-06 MD files):
  - `01_P2P_NETWORK_ARCHITECTURE.md` - libp2p, Gossipsub, multi-source validation
  - `02_AUDIT_TRAIL_CRYPTOGRAPHY.md` - HMAC-SHA256, tamper-proof logging, hash chains
  - `03_TREASURY_MANAGEMENT.md` - Multi-sig, buyback vs burn, DAO governance
  - `05_GLOBAL_NETWORK_TOPOLOGY.md` - Godfather/Worker architecture, regional distribution
  - `06_COMPLIANCE_SYSTEM.md` - Kill Switch, Pre-Trade Controls, regulatory mapping

---

## Truth & Accuracy Standards (CRITICAL)

**CORE PRINCIPLE: The 01-06 MD files are the SINGLE SOURCE OF TRUTH**

Everything we document must be:
1. **Verifiable** in the 01-06 MD files OR the old Jekyll repo
2. **Current** (not outdated plans from 6 months ago)
3. **Accurate** (no embellishments, no speculation)
4. **Honest** about status (planned vs implemented vs theoretical)

### The Danger of False Expectations

**Problem**: Vague or optimistic language creates false expectations
```tsx
// ❌ DANGEROUS: Sounds like it exists NOW
"kas.me offers staking rewards for $CYPU holders"
→ User expects: I can stake TODAY and earn money!
→ Reality: Staking is PLANNED, not live, regulatory approval needed

// ✅ CORRECT: Clear about status
"Staking system (planned for 2026, pending BaFin approval) may allow token holders to participate in governance"
→ User understands: This is FUTURE, CONDITIONAL, not guaranteed
```

**Why this matters**:
- False expectations → Angry users → Legal problems → BaFin investigation
- Compliance requires HONEST communication (MiCA regulations)
- We can't promise features we haven't built yet

### Single Source of Truth: 01-06 MD Files

**Location**: `../kas.me-dos/` directory

**These files contain the PLANNED THEORY, not promises:**

| File | What it contains | Status |
|------|------------------|--------|
| `01_P2P_NETWORK_ARCHITECTURE.md` | CPN network design (libp2p, Gossipsub) | **THEORETICAL** - Architecture plan |
| `02_AUDIT_TRAIL_CRYPTOGRAPHY.md` | HMAC-SHA256 logging system | **THEORETICAL** - Design spec |
| `03_TREASURY_MANAGEMENT.md` | Multi-sig wallets, buyback strategy | **THEORETICAL** - Governance plan |
| `05_GLOBAL_NETWORK_TOPOLOGY.md` | Godfather/Worker node architecture | **THEORETICAL** - Network plan |
| `06_COMPLIANCE_SYSTEM.md` | Kill Switch, Pre-Trade Controls | **THEORETICAL** - Compliance design |

**CRITICAL RULES:**

1. **NEVER invent details not in these files**
   - If 01-06 MD don't mention it → DON'T add it
   - If old Jekyll repo doesn't mention it → DON'T add it
   - Example: Don't add "AI-powered analytics" unless docs mention it

2. **ALWAYS mark theoretical/planned content**
   ```tsx
   // ❌ WRONG: Sounds like it exists
   <p>The CyberPumpNetwork validates blockchain data</p>

   // ✅ CORRECT: Clear about status
   <p>The CyberPumpNetwork (in development) is designed to validate blockchain data</p>
   ```

3. **NEVER promise timelines unless they exist in docs**
   ```tsx
   // ❌ WRONG: Promise we can't keep
   <p>Staking launches Q2 2026</p>

   // ✅ CORRECT: Honest uncertainty
   <p>Staking is planned (timeline TBD, regulatory approval required)</p>
   ```

4. **ALWAYS verify numbers/metrics against docs**
   ```tsx
   // ❌ WRONG: Made-up impressive number
   <p>1 million transactions per second</p>

   // ✅ CORRECT: Use documented numbers
   <p>40k+ orders/sec capacity (per 01_P2P_NETWORK_ARCHITECTURE.md)</p>
   ```

### Language Standards for Honesty

**Status Indicators (USE THESE):**

| Reality | How to Communicate |
|---------|-------------------|
| **Live/Implemented** | "kas.me provides...", "The platform includes...", "Users can..." |
| **In Development** | "Currently building...", "In development...", "Being implemented..." |
| **Planned (Near-term)** | "Planned for 2026...", "Scheduled for implementation...", "Roadmap includes..." |
| **Planned (Long-term)** | "Long-term vision includes...", "Future plans consider...", "Potential features..." |
| **Theoretical/Research** | "Theoretical design...", "Proposed system...", "Under research..." |
| **Conditional** | "Pending regulatory approval...", "Subject to BaFin compliance...", "If regulations permit..." |

**Forbidden Phrases (NEVER USE THESE):**

| Forbidden | Why it's dangerous | Use instead |
|-----------|-------------------|-------------|
| "Will provide" | Sounds like promise | "Plans to provide (subject to...)" |
| "Guaranteed returns" | MiCA violation | "No guaranteed returns" |
| "Launching soon" | Vague promise | "Planned for [specific quarter/year]" OR "Timeline TBD" |
| "Staking rewards" (without context) | False expectation | "Staking (planned, regulatory approval needed)" |
| "Passive income" | MiCA violation | "Pure utility token - no yields" |
| "Investment opportunity" | Legal danger | "Utility token for platform access" |

### Migration Truth-Check Workflow

**BEFORE migrating ANY content from old Jekyll repo:**

1. **Read the 01-06 MD files relevant to that topic**
2. **Check if content is still accurate** (plans change!)
3. **Verify numbers/metrics haven't changed**
4. **Add status indicators** (planned, theoretical, in development)
5. **Remove outdated information** (old timelines, deprecated features)

**Example Workflow:**
```
User: "Migrate the staking page from Jekyll"

Claude workflow:
1. Read 03_TREASURY_MANAGEMENT.md - Check current staking plans
2. Read old Jekyll staking.md - Extract content
3. Compare: Is Jekyll content still accurate?
4. Find conflicts: Jekyll says "Q1 2025 launch" but it's now 2026
5. Update: "Staking (planned, timeline TBD, pending BaFin approval)"
6. Add disclaimer: "This is NOT investment advice, no guaranteed returns"
```

### Compliance-Safe Communication

**BaFin/MiCA Requirements:**

1. **Pure Utility Token Disclaimer** (REQUIRED on all tokenomics pages)
   ```tsx
   <Callout type="danger" title="Pure Utility Token - No Investment Returns">
     $CYPU is a pure utility token. It does NOT generate yields, dividends,
     or promised returns. Value derives solely from platform utility.
   </Callout>
   ```

2. **Risk Disclosure** (REQUIRED on all financial pages)
   ```tsx
   <Callout type="warning" title="Risk Notice">
     Crypto investments carry significant risk. Token value may fluctuate.
     This is not financial advice. Consult professionals before investing.
   </Callout>
   ```

3. **Status Clarity** (REQUIRED for planned features)
   ```tsx
   // For EVERY planned feature:
   <p>
     Feature XYZ (planned for 2026, subject to regulatory approval,
     implementation not guaranteed)
   </p>
   ```

### Anti-Patterns (NEVER DO THIS)

**❌ Inventing Features:**
```tsx
// WRONG: Not in any docs
<p>kas.me offers AI-powered portfolio optimization</p>

// CORRECT: Only document what exists
<p>kas.me provides on-chain analytics tools</p>
```

**❌ Vague Timelines:**
```tsx
// WRONG: "Soon" means nothing
<p>Staking coming soon!</p>

// CORRECT: Specific OR honest uncertainty
<p>Staking planned (timeline TBD, regulatory approval required)</p>
```

**❌ Promises:**
```tsx
// WRONG: Sounds like guarantee
<p>Token holders will receive staking rewards</p>

// CORRECT: Conditional language
<p>IF staking launches AND regulatory approval is granted,
   token holders MAY be able to participate (no guaranteed returns)</p>
```

**❌ Embellishment:**
```tsx
// WRONG: Made-up impressive claim
<p>The world's fastest blockchain analytics platform</p>

// CORRECT: Factual, verifiable
<p>Regional latency <5ms (per 01_P2P_NETWORK_ARCHITECTURE.md)</p>
```

**❌ Outdated Info:**
```tsx
// WRONG: Old Jekyll content from 2023
<p>ICO launching Q4 2023</p>

// CORRECT: Updated to current reality
<p>ICO phase in progress (up to 70M CYPU allocation)</p>
```

### Quality Checklist: Truth & Accuracy

**Before publishing ANY page, verify:**

- [ ] **Source Check**
  - [ ] All facts verified in 01-06 MD files OR old Jekyll repo
  - [ ] No invented features/details
  - [ ] Numbers/metrics match source documents

- [ ] **Status Clarity**
  - [ ] Every planned feature marked as "(planned)" or "(in development)"
  - [ ] Timelines are specific OR marked as "TBD"
  - [ ] Conditional features marked with "subject to..." or "if approved..."

- [ ] **Compliance Language**
  - [ ] Pure utility token disclaimer present
  - [ ] Risk disclosure present
  - [ ] No promises of returns/yields
  - [ ] No "investment opportunity" language

- [ ] **Honesty Test**
  - [ ] Would a lawyer approve this language?
  - [ ] Could BaFin misinterpret this as a promise?
  - [ ] Does this create false expectations?
  - [ ] Is the user's understanding aligned with reality?

**Golden Rule**: "When in doubt, under-promise and over-deliver"

---

## Bootstrapped Project Reality (CRITICAL)

**CORE TRUTH: This is a BOOTSTRAPPED PROJECT - Everything is being BUILT, NOTHING is LIVE**

### Current Reality (as of 2026-01-17)

**What EXISTS:**
- ✅ Code (in development)
- ✅ Documentation (this React site)
- ✅ Vision/Plans (01-06 MD files)

**What DOES NOT EXIST (yet):**
- ❌ Live platform
- ❌ Working CyberPumpNetwork
- ❌ Staking system
- ❌ Node rewards distribution
- ❌ BaFin approval
- ❌ Tangem integration (code ready, waiting for hardware)
- ❌ Any revenue
- ❌ Any users

**What EXISTS via External Infrastructure:**
- ✅ DEX pools (using KaspaCom infrastructure - we're a USER of their platform)

**CRITICAL DISTINCTION:**
```tsx
// ❌ WRONG: Sounds like it exists NOW
"kas.me provides advanced analytics"
→ User expects: I can use it TODAY!
→ Reality: It's being BUILT

// ✅ CORRECT: Honest about status
"kas.me (in development) is designed to provide advanced analytics"
→ User understands: This is FUTURE, being built NOW
```

### Language Rules for Bootstrapped Projects

**Status Prefix (MANDATORY for ALL features):**

| Feature Status | Required Prefix | Example |
|---------------|----------------|---------|
| **Being coded NOW** | "(in development)" | "The platform (in development) will allow..." |
| **Design/spec only** | "(planned)" | "Staking (planned) may enable..." |
| **Needs approval** | "(pending regulatory approval)" | "Node rewards (pending approval) could..." |
| **Future vision** | "(long-term roadmap)" | "Mobile app (long-term roadmap) is envisioned..." |

**NEVER say:**
- "kas.me provides..." (sounds live)
- "Users can..." (sounds live)
- "The platform offers..." (sounds live)

**ALWAYS say:**
- "kas.me (in development) is designed to..."
- "Once live, users will be able to..."
- "The platform (being built) aims to..."

### Timeline Communication (FORBIDDEN)

**❌ NEVER give specific dates/years:**
```tsx
// WRONG: Creates expectation
"Launching Q2 2026"
"BaFin approval by 2027"
"Staking available in 2026"

// CORRECT: Honest uncertainty
"Timeline: TBD (regulatory approval required)"
"Launch date: Not yet determined"
"Status: In development, no launch date set"
```

**Why this matters:**
- BaFin approval can take YEARS, not months
- Regulatory landscape changes constantly
- Bootstrapped = we control dev speed, NOT approval speed
- Specific dates = broken promises = angry users = legal problems

**Only exception**: Historical facts
```tsx
// ✅ OK: Past event
"ICO started in [month/year]"
"Project announced in [month/year]"

// ❌ NOT OK: Future promise
"Will launch in [month/year]"
```

### The "Being Built" Disclaimer

**REQUIRED on EVERY page that describes features:**

```tsx
<Callout type="info" title="Development Status">
  kas.me is currently in active development. All features described here
  are being built but are NOT yet live. This is a bootstrapped project -
  we have code and vision, but no live platform yet. Timeline for launch
  depends on development completion and regulatory approval.
</Callout>
```

**Placement**: Top of page, BEFORE describing features

### Bootstrapped vs. Funded Project Language

**Funded Project (NOT us):**
- "Launching Q2 2026" (they have investors, timelines, pressure)
- "Coming soon" (marketing hype)
- "Revolutionary platform" (selling to investors)

**Bootstrapped Project (US):**
- "Timeline TBD" (we control our pace)
- "In development" (honest status)
- "Building a platform that..." (focus on building, not hype)

**Our advantage**: No investor pressure = no false promises needed

### Quality Checklist: Bootstrapped Honesty

**Before publishing ANY page:**

- [ ] **Reality Check**
  - [ ] Every feature marked with status: "(in development)", "(planned)", etc.
  - [ ] NO "provides", "offers", "allows" without context
  - [ ] Clear distinction: What EXISTS vs What's BEING BUILT

- [ ] **Timeline Safety**
  - [ ] NO specific years for future events (2026, 2027, etc.)
  - [ ] NO "launching soon", "coming Q2", etc.
  - [ ] Only "TBD", "pending approval", "development in progress"

- [ ] **Disclaimer Presence**
  - [ ] "Development Status" callout at top of page
  - [ ] Clear statement: "NOT yet live"
  - [ ] Honest about bootstrapped nature

- [ ] **User Understanding Test**
  - [ ] Would a user know this is NOT live yet?
  - [ ] Are we clear this is being BUILT, not LAUNCHED?
  - [ ] Would BaFin approve this language?

---

## Style of Speech (CRITICAL - AUTHENTIC VOICE)

**THE PROBLEM**: Current docs sound like "hype/moon/revolutionary" marketing. This is COMPLETELY WRONG.

**THE REALITY**: This is a **perpetual student's learning journey**, not a hype machine. The tone must reflect:
- Intellectual curiosity, not marketing bullshit
- Scientific rigor, not promises
- Honest learning process, not "we built the best thing ever"
- Mathematical/engineering mindset, not investor pitch

### Reference: Dev-Talks Voice (THE CORRECT TONE)

**Characteristics of Dev-Talks (USE THIS EVERYWHERE):**
- Conversational but technical
- Honest about learning process ("I discovered...", "I'm building...", "I learned...")
- No hype words ("revolutionary", "groundbreaking", "game-changing")
- Focus on WHAT and WHY, not "how amazing it is"
- Admits complexity and challenges
- Explains thought process, not just results
- Uses concrete examples, not abstract promises

### Forbidden Marketing Language

**NEVER use these hype phrases:**
| Forbidden Phrase | Why Wrong | Use Instead |
|-----------------|-----------|-------------|
| "Revolutionary platform" | Sounds like marketing BS | "A system that..." |
| "Game-changing technology" | Empty hype | "This approach solves..." |
| "Cutting-edge innovation" | Meaningless buzzword | "Built with libp2p because..." |
| "Next-generation solution" | Generic marketing | "Designed to handle..." |
| "Unparalleled features" | Arrogant nonsense | "The system provides..." |
| "Empowering users" | Corporate speak | "Users can..." |
| "Seamless integration" | Tech buzzword | "Integrates via..." |
| "Transform the industry" | Delusional | "Addresses the problem of..." |
| "Unlock potential" | Vague marketing | "Enables..." |
| "Leverage synergies" | Corporate garbage | Just say what it does |

### Required Voice Patterns

**Pattern 1: The Learning Journey**
```markdown
// ✅ CORRECT: Honest about process
"While building CyberPumpNetwork, I needed a way to handle P2P communication
at scale. After researching libp2p's gossipsub protocol, I realized it could
solve the broadcasting problem without central servers."

// ❌ WRONG: Sounds like marketing
"CyberPumpNetwork leverages cutting-edge P2P technology to deliver
revolutionary decentralized communication!"
```

**Pattern 2: Technical Explanation**
```markdown
// ✅ CORRECT: Clear, technical, honest
"The treasury uses a 2-of-3 multisig configuration. This means two out of
three key holders must approve any transaction. It's not perfect - there are
trade-offs between security and operational speed - but it's the best balance
I found for a bootstrapped project."

// ❌ WRONG: Hype without substance
"Our state-of-the-art multi-signature treasury system provides unparalleled
security and peace of mind for investors!"
```

**Pattern 3: Problem → Solution**
```markdown
// ✅ CORRECT: Shows thought process
"Problem: How do you distribute node rewards fairly when nodes have different
uptime and performance?

I'm testing a contribution-weighted system where nodes earn based on actual
work done. Still figuring out edge cases around timing attacks."

// ❌ WRONG: Oversimplified marketing
"Our innovative reward system ensures fair distribution to all network
participants!"
```

**Pattern 4: Honest Limitations**
```markdown
// ✅ CORRECT: Transparent about reality
"The current design can theoretically handle 10,000 concurrent users. In
practice, I haven't tested beyond 100 simulated nodes yet. Real-world
performance will depend on network topology and bandwidth."

// ❌ WRONG: Unrealistic promises
"Infinitely scalable architecture designed to handle millions of users!"
```

### Tone Guidelines

**DO:**
- ✅ Explain the "why" behind decisions
- ✅ Show the engineering thought process
- ✅ Admit when something is experimental or unproven
- ✅ Use concrete examples and numbers
- ✅ Reference specific technologies/protocols by name
- ✅ Acknowledge trade-offs and limitations
- ✅ Sound like you're explaining to a curious peer, not selling to an investor

**DON'T:**
- ❌ Oversell capabilities
- ❌ Use superlatives ("best", "fastest", "most secure")
- ❌ Make promises about future performance
- ❌ Hide complexity behind buzzwords
- ❌ Sound like a sales pitch
- ❌ Use exclamation marks excessively!!!
- ❌ Claim to be "revolutionary" or "groundbreaking"

### Target Reader Voice

**Remember: You're writing for TWO audiences simultaneously:**

1. **Technical readers** (developers, engineers, node operators)
   - They want: Technical depth, architecture details, honest limitations
   - They hate: Marketing fluff, oversimplification, unrealistic claims
   - Voice: Peer-to-peer technical discussion

2. **Non-technical readers** (potential users, curious people)
   - They want: Clear explanations, real-world analogies, honest status
   - They hate: Jargon without explanation, talking down to them, hype
   - Voice: Patient teacher explaining complex topics

**The Balance:**
```markdown
// ✅ CORRECT: Accessible yet technical
"CyberPumpNetwork uses a layered architecture similar to how the internet
works. Layer 1 (Godfather nodes) handles broadcasting via libp2p's gossipsub
protocol - think of it like a mesh of interconnected servers that relay
messages peer-to-peer without a central authority. Layer 2 (Worker nodes)
validates and processes these messages."

// ❌ TOO TECHNICAL: Loses non-technical readers
"CyberPumpNetwork implements a stratified libp2p gossipsub mesh topology
with DHT-based peer discovery and pub/sub message propagation across
heterogeneous node classes."

// ❌ TOO SIMPLE: Insults technical readers
"CyberPumpNetwork is like a super-fast magic network that makes everything
decentralized and secure! It just works!"
```

### Writing Checklist

Before finalizing ANY documentation content:
- [ ] Does this sound like Dev-Talks (conversational, technical, honest)?
- [ ] Did I explain the "why" behind technical choices?
- [ ] Am I being honest about what exists vs what's planned?
- [ ] Could a non-technical reader understand the core concept?
- [ ] Could a technical reader verify the details?
- [ ] Did I remove ALL hype/marketing language?
- [ ] Would I explain it this way to a friend asking "what are you building?"
- [ ] Does it sound like a perpetual student learning, not a CEO selling?

### Example Transformations

**BEFORE (Marketing Voice):**
> "kas.me revolutionizes the crypto ecosystem with its groundbreaking
> CyberPumpNetwork, delivering unparalleled security and performance through
> cutting-edge P2P technology. Join the future of decentralized finance!"

**AFTER (Authentic Voice):**
> "kas.me is a platform I'm building on top of Kaspa to solve a specific
> problem: how do you create a fair, transparent marketplace for digital
> services without relying on centralized infrastructure?
>
> The core is CyberPumpNetwork (CPN) - a multi-layered P2P network using
> libp2p's gossipsub protocol for message broadcasting and validation. It's
> similar to how IPFS handles distributed data, but optimized for real-time
> service transactions rather than file storage.
>
> Still in development. The code exists, the theory is solid, but it's not
> live yet. I'm documenting the architecture here as I build it."

**Key Differences:**
1. "I'm building" vs "We revolutionize"
2. Specific problem statement vs vague promises
3. Technical specifics vs buzzwords
4. Honest status vs fake urgency
5. Learning journey vs marketing pitch

### Language Hierarchy (Most Important Rule)

**Priority Order:**
1. **Accuracy** - Is it factually correct?
2. **Honesty** - Does it reflect reality (bootstrapped, in development)?
3. **Clarity** - Can both technical and non-technical readers understand?
4. **Voice** - Does it sound like Dev-Talks (student/scientist, not marketer)?
5. **Professionalism** - Does it build trust without sounding corporate?

**Remember**: You're documenting a **learning journey and engineering process**, not selling a product. The reader should feel like they're watching a skilled developer solve interesting problems, not being pitched an investment.

---

## Content Creation Process (CRITICAL - READ THIS FIRST)

**STOP! Before writing ANY public documentation, follow this 3-step process:**

### Step 1: Read Internal Docs (Private Knowledge)
- Review internal architecture docs, planning files, theory documents
- Understand the technical details, design decisions, implementation status
- Note internal file names, paths, development notes

### Step 2: Think Like the Reader (Perspective Shift)
Ask yourself:
- **Who is reading this?** (Developer? User? Investor?)
- **What do they need to know?** (How it works? Why it exists? How to use it?)
- **What should they NOT know?** (Internal file paths, private implementation details, security vulnerabilities)
- **How do I create the "AHA!" moment?** (Make them understand WITHOUT revealing internals)

### Step 3: Write for External Audience (Transform Knowledge)
- **Explain concepts** WITHOUT mentioning internal document names
- **Show architecture** WITHOUT revealing file structures
- **Demonstrate understanding** WITHOUT copy-pasting internal notes
- **Create engagement** by mixing Components + Content (NOT pure markdown!)

### CRITICAL SECURITY RULES

**❌ NEVER in public docs:**
```markdown
// ❌ WRONG: Reveals internal structure
"Based on our 01_P2P_NETWORK_ARCHITECTURE.md document..."
"See internal planning file TREASURY_DESIGN.md for details..."
"The implementation is in src/core/crypto/hmac.ts:142..."

// ❌ WRONG: Exposes development status
"TODO: Fix the bug in line 234 of worker-node.ts"
"URGENT: This is broken, need to refactor before launch"
"Hardcoded password in config.json - remember to change!"
```

**✅ CORRECT in public docs:**
```markdown
// ✅ CORRECT: Explains concept without internal references
"The network uses a three-layer architecture: Godfather nodes handle
broadcasting, Worker nodes validate and process, and the Platform layer
serves end users."

// ✅ CORRECT: Shows thought process without revealing internals
"I chose libp2p because it solves peer discovery, NAT traversal, and
message routing - problems I would otherwise have to build from scratch."

// ✅ CORRECT: Demonstrates understanding through explanation
"The audit trail uses HMAC-SHA256 cryptographic signatures to create a
tamper-proof hash chain, similar to how blockchains verify transaction
integrity."
```

### Content Type: Components + Markdown Mix

**❌ WRONG: Pure Markdown (Boring, Static, No Engagement)**
```markdown
# About kas.me

kas.me is a platform...

## Features
- Feature 1
- Feature 2
- Feature 3
```

**✅ CORRECT: React Components + Markdown (Interactive, Visual, Engaging)**
```tsx
<Callout type="info" title="Development Status">
  In active development - not yet live.
</Callout>

<StatsGrid stats={[
  { label: 'Latency', value: '<5ms', icon: Zap },
  { label: 'Throughput', value: '40k+', icon: TrendingUp }
]} />

<div className="grid grid-cols-3 gap-4">
  <ResourceCard icon={Network} title="Architecture" href="/docs/network" />
  <ResourceCard icon={Shield} title="Security" href="/docs/security" />
  <ResourceCard icon={Code} title="API" href="/docs/api" />
</div>
```

**The Rule: Mix is MANDATORY**
- Use `<Callout>` for important info/warnings/tips
- Use `<StatsGrid>` for metrics/performance data
- Use `<ResourceCard>` for navigation/related links
- Use Charts (Recharts, React Flow) for visualizations
- Use Lucide icons for visual hierarchy

**Pure markdown is ONLY acceptable for:**
- Simple explanatory paragraphs
- Code examples
- Technical specifications
- When Components would add no value

### Example: Wrong vs Right

**❌ WRONG (Copy-Paste from Internal Docs):**
```markdown
Based on 01_P2P_NETWORK_ARCHITECTURE.md, the system uses libp2p gossipsub
as documented in section 2.3. The implementation can be found in
src/network/godfather/broadcaster.ts. Current performance targets from
PERFORMANCE_TARGETS.xlsx show <5ms latency.
```

**✅ CORRECT (Externalized Knowledge):**
```tsx
<section>
  <h2>Network Architecture</h2>
  <p>
    The platform uses a three-layer P2P network built on libp2p's gossipsub
    protocol. This design ensures decentralized communication without single
    points of failure.
  </p>

  <StatsGrid stats={[
    { label: 'Regional Latency', value: '<5ms', icon: Zap },
    { label: 'Orders/Second', value: '40k+', icon: TrendingUp }
  ]} />

  <Callout type="tip" title="Why libp2p?">
    I chose libp2p because it's battle-tested (same protocol IPFS uses) and
    handles peer discovery, NAT traversal, and message routing out of the box.
    Building this from scratch would take months.
  </Callout>
</section>
```

**Key Differences:**
1. No internal file names mentioned
2. Explains "why" instead of "where it's coded"
3. Uses Components for visual engagement
4. Focuses on reader understanding, not development details

---

## Emoji & Graphics Professional Guidelines

**CRITICAL RULE: Consistency is King - Use Everywhere or Nowhere**

### Professional Standards (USE LUCIDE ICONS)

**✅ CORRECT: Lucide React Icons (MANDATORY)**
```tsx
// ALWAYS use Lucide icons, never emojis for institutional content
import { Sparkles, Building2, Coins, Network, CheckCircle, XCircle } from 'lucide-react'

<div className="flex items-center gap-2">
  <Sparkles className="w-5 h-5 text-accent" />
  <h3>Getting Started</h3>
</div>

// Status indicators
<CheckCircle className="w-4 h-4 text-green-500" /> // Instead of ✅
<XCircle className="w-4 h-4 text-red-500" />       // Instead of ❌
```

**❌ FORBIDDEN: Emojis in Professional Content**
```tsx
// ❌ WRONG: Looks unprofessional
<h3>🔥 Getting Started</h3>
<h3>💰 Tokenomics</h3>
<h3>🏦 Treasury</h3>

// ❌ WRONG: Inconsistent with Lucide icons
✅ This feature exists
❌ This feature doesn't exist
```

### Mandatory Icon Usage Rules

**1. Status Indicators:**
```tsx
// ✅ CORRECT: Use CheckCircle/XCircle from Lucide
<CheckCircle className="w-4 h-4 text-green-500" />
<XCircle className="w-4 h-4 text-red-500" />

// ❌ WRONG: Inconsistent emoji usage
✅ This works
❌ This doesn't
```

**2. Section Headers:**
```tsx
// ✅ CORRECT: Lucide icons with semantic colors
<div className="flex items-center gap-3">
  <Building2 className="w-6 h-6 text-blue-500" />
  <h2>Company Treasury</h2>
</div>

// ❌ WRONG: Random emojis
<h2>🏦 Company Treasury</h2>
```

**3. Feature Badges:**
```tsx
// ✅ CORRECT: Consistent Badge component
<Badge variant="accent">Getting Started</Badge>
<Badge variant="blue">Advanced</Badge>

// ❌ WRONG: Mix of styles
<span>🎯 Getting Started</span>
<Badge>Advanced</Badge>
```

### Graphics Standards

**Charts & Diagrams (MANDATORY):**
- **Data Visualization**: ALWAYS use Recharts (PieChart, BarChart, LineChart, AreaChart)
- **Flow Diagrams**: ALWAYS use React Flow (with custom nodes, edges, controls, background)
- **Icons**: ALWAYS use Lucide React (never FontAwesome, never custom SVGs)
- **Illustrations**: NONE (unless professionally designed and approved)

**Forbidden:**
- ❌ ASCII art diagrams
- ❌ Screenshot images of diagrams
- ❌ DIV-based fake charts
- ❌ Emoji-based visualizations
- ❌ Mixed icon libraries (no FontAwesome + Lucide)
- ❌ Random decorative graphics

### Implementation Checklist

Before adding ANY emoji or icon:
- [ ] Is this pattern used EVERYWHERE for similar content?
- [ ] If using emoji, does EVERY similar section also use emoji?
- [ ] If using Lucide icons, are ALL icons from Lucide (not mixed)?
- [ ] Does the icon have semantic meaning or just decoration?
- [ ] Would an institutional investor trust a page with this graphic?

**Default Rule**: When in doubt, use Lucide React icons with semantic colors. Never use emojis for institutional content.

---

## React Component Implementation (Technical Guide)

**When to Use React Components Instead of Markdown:**
- Page requires interactive elements (Callouts, StatsGrid, ResourceCards)
- Complex layouts with Grid structures
- Dynamic data visualization (charts, diagrams)
- Token-gated content or conditional rendering
- ANY page where pure markdown would be boring/static

### Step-by-Step Implementation Process

**1. Create React Component** (e.g., `KasMeInfoContent.tsx`)
```tsx
// src/components/docs/KasMeInfoContent.tsx
import { Callout } from './Callout'
import { StatsGrid } from './StatsGrid'
import { ResourceCard } from './ResourceCard'
import { Network, Shield, CheckCircle, XCircle } from 'lucide-react'

export function KasMeInfoContent() {
  return (
    <div className="space-y-12">
      <Callout type="info" title="Development Status">
        In active development - not yet live.
      </Callout>

      {/* Your content with Components + Markdown mix */}
    </div>
  )
}
```

**2. Register Route in DocsPage.tsx**
```tsx
// src/pages/DocsPage.tsx
import { KasMeInfoContent } from '@/components/docs/KasMeInfoContent'

// Add to hasCustomComponent check
const hasCustomComponent =
  slug === 'getting-started/kasme-info' ||
  // ... other custom components

// Add to render logic
{slug === 'getting-started/kasme-info' ? (
  <KasMeInfoContent />
) : (
  <div className="prose">
    <MarkdownRenderer content={content} />
  </div>
)}
```

**3. Update docs.ts Configuration**
```tsx
// src/lib/docs.ts
{
  slug: 'getting-started/kasme-info',
  title: 'About kas.me',
  description: 'Information about the kas.me platform',
  category: 'Getting Started',
  order: 3,
  file: '', // IMPORTANT: Empty string = uses React component
},
```

**4. Handle in useMarkdown.ts** (Already implemented)
```tsx
// src/lib/useMarkdown.ts - this check is CRITICAL
if (!doc.file || doc.file === '') {
  setContent('')
  setLoading(false)
  return // Don't try to load markdown file
}
```

### CRITICAL Implementation Rules

**❌ NEVER do this:**
```tsx
// DON'T leave markdown file when using React component
file: 'getting-started/kasme-info.md' // Will cause "File not found" error
```

**✅ ALWAYS do this:**
```tsx
// Set file to empty string when using React component
file: '', // Uses React component KasMeInfoContent instead of markdown

// Add slug to hasCustomComponent check in DocsPage.tsx
const hasCustomComponent = slug === 'getting-started/kasme-info' || ...

// Add render condition in DocsPage.tsx
{slug === 'getting-started/kasme-info' ? <KasMeInfoContent /> : ...}
```

### Troubleshooting Common Errors

**Error: "Document Not Found - File not found: /src/docs/"**
- **Cause**: `docs.ts` has `file: ''` but `useMarkdown.ts` tries to load it anyway
- **Fix**: Check `useMarkdown.ts` has early return for empty `doc.file` (lines 30-35)

**Error: "Document Not Found" but component exists**
- **Cause**: Missing slug in `hasCustomComponent` check
- **Fix**: Add your slug to the `hasCustomComponent` list in `DocsPage.tsx`

**Error: Component renders but shows markdown loading spinner**
- **Cause**: Slug not in render conditions
- **Fix**: Add `{slug === 'your-slug' ? <YourComponent /> : ...}` to DocsPage.tsx

### Migration Checklist (Markdown → React Component)

When converting existing markdown to React component:

- [ ] Create new React component in `src/components/docs/`
- [ ] Import component in `src/pages/DocsPage.tsx`
- [ ] Add slug to `hasCustomComponent` check
- [ ] Add render condition for slug
- [ ] Update `docs.ts`: set `file: ''` with comment
- [ ] Delete old markdown file (if any)
- [ ] Test: Navigate to page, check no errors
- [ ] Test: Hard refresh browser (Ctrl+Shift+R)
- [ ] Verify: No internal document names mentioned
- [ ] Verify: Components + Markdown mix used (not pure markdown)

---

## Page Layout Standards (100% IDENTICAL STRUCTURE)

**CRITICAL RULE: Every Page Has IDENTICAL Structure - Only Content Differs**

### Mandatory Page Structure (In Order)

**EVERY documentation page MUST follow this EXACT structure:**

```tsx
// 1. DEVELOPMENT STATUS CALLOUT (if feature/platform page)
<Callout type="info" title="Development Status">
  kas.me is currently in active development. All features described here
  are being built but are NOT yet live. This is a bootstrapped project.
</Callout>

// 2. HERO SECTION (title + description)
<div className="space-y-4">
  <div className="flex items-center gap-3">
    {/* Icon from Lucide */}
    <Icon className="w-8 h-8 text-accent" />
    <h1 className="text-4xl font-bold">Page Title</h1>
  </div>
  <p className="text-xl text-muted-foreground">
    Clear, concise description of what this page covers.
  </p>
</div>

// 3. CORE STATS (if applicable)
<StatsGrid
  stats={[
    { label: 'Stat 1', value: '1000', icon: Icon1, color: 'accent' },
    { label: 'Stat 2', value: '50%', icon: Icon2, color: 'blue' },
  ]}
/>

// 4. MAIN CONTENT SECTIONS
<section className="space-y-6">
  <h2>Section Title</h2>
  <p>Section content...</p>
</section>

// 5. RELATED PAGES/RESOURCES
<div className="grid md:grid-cols-2 gap-4">
  <ResourceCard
    title="Related Page 1"
    description="..."
    href="/docs/..."
    icon={Icon}
  />
</div>

// 6. RISK DISCLAIMER (if financial/token content)
<Callout type="warning" title="Risk Disclosure">
  Cryptocurrency carries significant risk. CYPU is a pure utility token
  with no guaranteed returns. Regulatory approval pending.
</Callout>
```

### Section Spacing Rules

**Vertical Spacing (STRICT):**
```tsx
// ✅ CORRECT: Consistent spacing hierarchy
<div className="space-y-12">         {/* Page sections */}
  <section className="space-y-6">    {/* Section content */}
    <div className="space-y-4">      {/* Subsections */}
      <div className="space-y-2">    {/* Grouped elements */}
```

**Horizontal Spacing:**
```tsx
// ✅ CORRECT: Use 4px grid (gap-2/4/6/8/12)
<div className="flex gap-3">        {/* Icon + text */}
<div className="flex gap-6">        {/* Card columns */}
<div className="grid gap-4">        {/* Grid items */}
```

### Typography Hierarchy (MANDATORY)

```tsx
// ✅ CORRECT: Exact hierarchy for ALL pages
<h1 className="text-4xl font-bold">           {/* Page title */}
<h2 className="text-2xl font-bold">           {/* Section title */}
<h3 className="text-xl font-semibold">        {/* Subsection */}
<h4 className="text-lg font-semibold">        {/* Minor heading */}
<p className="text-base">                     {/* Body text */}
<p className="text-sm text-muted-foreground"> {/* Helper text */}
```

### Card Pattern (EXACT STRUCTURE)

**EVERY card must follow this EXACT pattern:**
```tsx
<div className="p-6 rounded-lg border border-[COLOR]/30 bg-gradient-to-br from-[COLOR]/5 to-transparent">
  <div className="flex items-center gap-3 mb-4">
    <Icon className="w-6 h-6 text-[COLOR]" />
    <h3 className="text-xl font-bold">Card Title</h3>
  </div>
  <p className="text-muted-foreground">Card content...</p>
</div>
```

**Color Assignment (CONSISTENT):**
| Content Type | Color | Example |
|-------------|-------|---------|
| Brand/Platform | `accent` | kas.me features, CyberPump |
| Financial/Treasury | `blue-500` | Treasury, ICO, payments |
| Success/Rewards | `green-500` | Node rewards, completed items |
| Premium/Locked | `purple-500` | Locked tokens, premium features |
| Warning/Risk | `yellow-500` | Cautions, important notices |
| Error/Danger | `red-500` | Risks, critical warnings |

### Page Type Templates

**Template 1: Feature Page (e.g., Staking, Treasury)**
1. Development Status Callout
2. Hero Section (icon + title + description)
3. Core Stats (StatsGrid)
4. How It Works (section with steps)
5. Benefits (cards or list)
6. Technical Details (Callout or section)
7. Related Resources (ResourceCard grid)
8. Risk Disclaimer

**Template 2: Concept Page (e.g., Tokenomics, Network)**
1. Development Status Callout
2. Hero Section
3. Overview Stats
4. Key Concepts (sections with charts/diagrams)
5. Architecture/Flow Diagrams (Recharts/React Flow)
6. Related Pages
7. Risk Disclaimer (if applicable)

**Template 3: Getting Started Page**
1. Hero Section
2. Prerequisites (Callout)
3. Step-by-Step Guide (numbered sections)
4. Next Steps (ResourceCard grid)
5. Help Resources

### Consistency Checklist (MANDATORY)

Before considering a page "done":
- [ ] **Structure**: Does it follow EXACT template for its type?
- [ ] **Spacing**: Uses space-y-12/6/4/2 hierarchy correctly?
- [ ] **Typography**: Follows h1→h2→h3→h4 hierarchy exactly?
- [ ] **Cards**: All cards use EXACT pattern with semantic colors?
- [ ] **Icons**: ALL icons from Lucide React (no emojis, no mixed)?
- [ ] **Colors**: Only uses approved colors with semantic meaning?
- [ ] **Callouts**: Development Status + Risk Disclaimer where needed?
- [ ] **Layout**: Would this page look "identical" to others if content removed?

**The Goal**: A user visiting 5 different pages should feel like they're reading ONE cohesive product, not 5 different websites.

---

## Design System & Visual Standards

**CRITICAL**: This is an **INSTITUTIONAL** project, NOT a playground. Every visual element must look professional, consistent, and trustworthy.

### Design Philosophy

**Core Principles:**
1. **Consistency Over Creativity** - Same patterns everywhere, zero exceptions
2. **Professional Over Playful** - We serve financial/crypto institutions, not hobbyists
3. **Libraries Over Custom Code** - Use established, professional libraries fully or not at all

**Visual Goals:**
- Users should trust us with their money
- Designs should look like Bloomberg Terminal, not a hobby blog
- Every page should feel part of ONE cohesive product

---

### Color System (STRICT)

**Brand Colors (USE EXACTLY AS DEFINED):**
```css
Primary (Accent):   hsl(174 100% 56%)  /* #40E0D0 Türkis */
Secondary:          hsl(195 100% 50%)  /* #00BFFF Deep Sky Blue */
```

**Semantic Colors (USE TAILWIND DEFAULTS):**
```css
Success:  hsl(120 60% 50%)   /* Green - use green-500 */
Warning:  hsl(45 100% 51%)   /* Yellow - use yellow-500 */
Error:    hsl(0 84% 60%)     /* Red - use red-500 */
Info:     hsl(210 80% 60%)   /* Blue - use blue-500 */
Purple:   hsl(280 80% 60%)   /* Purple - use purple-500 */
```

**Theme Colors (FROM SHADCN/UI CONFIG):**
```css
Background:         hsl(var(--background))
Foreground:         hsl(var(--foreground))
Card:               hsl(var(--card))
Muted:              hsl(var(--muted))
Border:             hsl(var(--border))
```

**COLOR RULES:**
1. **NEVER use random colors** - Only colors from above list
2. **NEVER mix color systems** - Don't use `#FF5733` next to `hsl(120 60% 50%)`
3. **Use semantic meaning consistently**:
   - Accent = Brand/Primary actions
   - Green = Success/Positive/Growth
   - Blue = Info/Data/Technical
   - Red = Error/Danger/Warning
   - Purple = Premium/Advanced features
4. **Component-specific colors must match their purpose**:
   - Payment flow → Accent (brand)
   - Treasury → Blue (financial data)
   - Node rewards → Green (earnings)
   - Locks/Security → Purple (premium safety)

---

### Library Usage Policy (MANDATORY)

**RULE: Use professional libraries FULLY or NOT AT ALL**

#### ✅ APPROVED Libraries (USE THESE)

**Charts & Diagrams:**
- **Recharts** (`recharts`) - For ALL data visualizations (Pie, Bar, Line, Area charts)
- **React Flow** (`@xyflow/react`) - For ALL flow diagrams, network topology, process flows

**UI Components:**
- **Radix UI** - Accessible primitives (already in project)
- **TailwindCSS 4** - Styling system (already in project)
- **Lucide React** (`lucide-react`) - Icons ONLY

**Animation:**
- **Framer Motion** (`framer-motion`) - If animation is truly needed (ask first)

#### ❌ FORBIDDEN Practices

**NEVER do these:**
1. **Custom diagram components** - Use React Flow, not DIVs with arrows
2. **Custom chart components** - Use Recharts, not manual SVG/Canvas
3. **ASCII art in production** - Use proper libraries
4. **Mixing libraries** - Don't use Recharts AND custom charts on same page
5. **Half-implemented libraries** - If you use React Flow, use it PROPERLY (nodes, edges, controls, background)

#### 📋 Library Implementation Checklist

**Before using a library, answer YES to ALL:**
- [ ] Is this library the BEST tool for this job?
- [ ] Will I use it CONSISTENTLY across the entire project?
- [ ] Will I implement ALL its professional features (not just basic usage)?
- [ ] Does it match our institutional design goals?

**React Flow Implementation Standard:**
```tsx
// ✅ CORRECT: Professional implementation
<ReactFlow
  nodes={nodes}
  edges={edges}
  nodeTypes={customNodeTypes}
  fitView
  proOptions={{ hideAttribution: true }}
>
  <Controls className="bg-card border border-border rounded-lg" />
  <Background variant={BackgroundVariant.Dots} gap={12} size={1} color="hsl(var(--border))" />
</ReactFlow>

// ❌ WRONG: Missing Controls, Background, custom styling
<ReactFlow nodes={nodes} edges={edges} />
```

**Recharts Implementation Standard:**
```tsx
// ✅ CORRECT: Professional chart with tooltips, legends, responsive container
<ResponsiveContainer width="100%" height={400}>
  <PieChart>
    <Pie data={data} {...config}>
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', ... }} />
    <Legend />
  </PieChart>
</ResponsiveContainer>

// ❌ WRONG: Missing ResponsiveContainer, Tooltip, Legend
<PieChart><Pie data={data} /></PieChart>
```

---

### Visual Consistency Standards

**Component Color Assignment (STRICT MAPPING):**

| Component Type | Primary Color | Use Case |
|---------------|---------------|----------|
| Brand/Hero sections | `accent` (Türkis) | Main features, CTAs, highlights |
| Financial data | `blue-500` | Treasury, payments, analytics |
| Success/Growth | `green-500` | Node rewards, positive outcomes |
| Security/Premium | `purple-500` | Locks, vaults, advanced features |
| Warnings/Risks | `yellow-500` | Disclaimers, cautions |
| Errors/Danger | `red-500` | Kill switch, failures, critical warnings |

**Component Structure Standards:**

**Card Pattern (USE THIS EXACT STRUCTURE):**
```tsx
<div className="relative overflow-hidden rounded-lg border border-{color}/30 bg-gradient-to-br from-{color}/5 to-transparent p-6">
  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-{color}/20 to-transparent rounded-bl-full" />
  <div className="relative">
    <div className="w-12 h-12 rounded-lg bg-{color}/20 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-{color}" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
</div>
```

**Stats Display Pattern:**
```tsx
<StatsGrid
  columns={4}
  stats={[
    { label: 'Metric Name', value: '1,000', icon: IconComponent },
    // ... more stats
  ]}
/>
```

**Callout Pattern:**
```tsx
<Callout type="info|warning|success|danger|tip" title="Clear Title">
  <p>Single, concise message. No walls of text.</p>
</Callout>
```

---

### Typography & Spacing

**Heading Hierarchy (STRICT):**
```tsx
// Page Title (only ONE per page)
<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground via-accent to-purple-500 bg-clip-text text-transparent">

// Section Title (multiple allowed)
<h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
  <div className="w-1.5 h-10 bg-gradient-to-b from-accent to-accent/30 rounded-full" />
  Section Title
</h2>

// Subsection Title
<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
  <Icon className="w-5 h-5 text-accent" />
  Subsection Title
</h3>

// Card Title
<h4 className="text-lg font-bold mb-2">Card Title</h4>
```

**Spacing Rules:**
- Sections: `space-y-12` (48px between major sections)
- Cards in grid: `gap-6` (24px)
- Content blocks: `space-y-6` (24px)
- Paragraphs: `space-y-4` (16px)
- List items: `space-y-2` (8px)

---

### Chart & Diagram Standards

**When to Use What:**

| Content Type | Library | Component | Color Scheme |
|--------------|---------|-----------|--------------|
| Supply distribution | Recharts | PieChart | Semantic colors per category |
| Treasury allocation | Recharts | BarChart (horizontal) | Blue gradient |
| Payment splits | React Flow | Custom nodes + edges | Accent → Blue/Green split |
| Network topology | React Flow | Layered nodes | Accent → Blue → Green (layers) |
| Time series data | Recharts | LineChart or AreaChart | Accent gradient |
| Comparisons (old vs new) | Custom component | ComparisonFlow | Red (old) vs Green (new) |

**Recharts Color Mapping (CONSISTENT ACROSS ALL CHARTS):**
```tsx
const CHART_COLORS = {
  accent: 'hsl(var(--accent))',      // Primary/Brand
  blue: 'hsl(210 80% 60%)',          // Financial/Data
  green: 'hsl(120 60% 50%)',         // Positive/Growth
  purple: 'hsl(280 80% 60%)',        // Premium/Security
  red: 'hsl(0 84% 60%)',             // Negative/Warning
  yellow: 'hsl(45 100% 51%)',        // Caution
}
```

**React Flow Node Colors (CONSISTENT USAGE):**
- Accent: User actions, entry points
- Blue: Company/Business processes
- Green: Network/Rewards/Outputs
- Purple: Premium/Advanced features

---

### Anti-Patterns (NEVER DO THIS)

**Visual Chaos:**
```tsx
// ❌ WRONG: Random colors everywhere
<div className="bg-red-300">
<div className="bg-blue-700">
<div className="bg-pink-500">

// ✅ CORRECT: Semantic color usage
<div className="bg-accent/10 border-accent/30">
<div className="bg-blue-500/10 border-blue-500/30">
<div className="bg-green-500/10 border-green-500/30">
```

**Inconsistent Structure:**
```tsx
// ❌ WRONG: Different card structures on same page
<div className="p-6 rounded-lg bg-card">
<div className="p-4 rounded-md bg-muted">
<div className="p-8 rounded-xl bg-accent/5">

// ✅ CORRECT: Consistent structure
<div className="p-6 rounded-lg border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
<div className="p-6 rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent">
<div className="p-6 rounded-lg border border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent">
```

**Amateur Charts:**
```tsx
// ❌ WRONG: DIV-based fake charts
<div className="flex gap-2">
  <div className="w-20 h-20 bg-accent" />
  <div className="w-20 h-40 bg-blue-500" />
</div>

// ✅ CORRECT: Professional Recharts
<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" fill="hsl(var(--accent))" />
  </BarChart>
</ResponsiveContainer>
```

---

### Migration & Implementation Rules

**Before Creating ANY New Component:**

1. **Check existing components first** - Reuse `ResourceCard`, `Callout`, `StatsGrid` before creating new ones
2. **Choose the right library** - Charts = Recharts, Flows = React Flow, NO custom implementations
3. **Use semantic colors** - Match color to content meaning (financial = blue, rewards = green, etc.)
4. **Follow structure patterns** - Use exact card/heading/spacing patterns from above
5. **Test consistency** - Does this match the rest of the site? Same colors, same spacing, same structure?

**Quality Checklist Before Committing:**
- [ ] Colors are from approved list (no random hex codes)
- [ ] Component structure matches existing patterns exactly
- [ ] Libraries are used professionally (all features, not half-implemented)
- [ ] Spacing follows 4px grid (gap-2/4/6/8/12)
- [ ] Typography hierarchy is correct (h1 → h2 → h3 → h4)
- [ ] Charts use Recharts with ResponsiveContainer + Tooltip + Legend
- [ ] Flows use React Flow with Controls + Background + custom nodes
- [ ] No visual chaos - page looks cohesive and institutional

---

### Component Patterns

**Existing Reusable Components (USE THESE FIRST):**
- `ResourceCard` - Feature cards with icons, links
- `Callout` - Info boxes (types: info, warning, success, danger, tip, note)
- `StatsGrid` - Statistics display with icons and optional trends
- `ComparisonFlow` - OLD vs NEW side-by-side comparisons
- `SupplyDistributionChart` - Recharts Pie Chart for token distribution
- `TreasuryAllocationChart` - Recharts Bar Chart for financial allocation
- `PaymentFlowDiagram` - React Flow for payment splits
- `NetworkTopologyFlow` - React Flow for network architecture

**When to Create New Component:**
- Only if NO existing component fits
- Only if it will be reused 3+ times
- Must follow exact patterns from above
- Must use approved libraries

## File Structure Context

```
src/
├── components/
│   ├── docs/               # Doc-specific components (ResourceCard, Callout, etc.)
│   ├── ui/                 # Radix UI primitives
│   ├── MarkdownRenderer    # Handles .md rendering
│   ├── DocsSidebar         # Collapsible navigation
│   ├── DocsSearch          # Search (⌘K)
│   └── TableOfContents     # Auto-generated TOC
├── pages/
│   ├── DocsPage.tsx        # Main docs router (3-column layout)
│   ├── LandingPage.tsx     # Home page
│   └── BlogPage.tsx        # Updates/blog
├── docs/                   # Markdown content
│   ├── getting-started/
│   ├── tokenomics/
│   ├── platform/
│   ├── community/devtalks/ # Special "Easter Egg" content
│   └── development/
└── lib/
    ├── docs.ts             # Central docs config (add new pages here)
    └── useMarkdown.ts      # Markdown loading hook
```

## Common Workflows

### Adding a Custom Component Page

1. Create component: `src/components/docs/YourContent.tsx`
2. Import in `DocsPage.tsx`
3. Add slug check:
   ```tsx
   const hasCustomComponent = slug === 'tokenomics' || slug === 'your-slug'
   ```
4. Add conditional:
   ```tsx
   {slug === 'your-slug' ? <YourContent /> : <MarkdownRenderer />}
   ```
5. Register in `src/lib/docs.ts` for sidebar navigation

### Migrating from Old Jekyll Repo

1. Read old `.md` file in `../CyberPump/docs/` for **content reference only**
2. Extract text/information, ignore all HTML/CSS
3. Create new `.md` or `.tsx` following modern patterns
4. Update internal links to new structure (`/docs/category/page`)
5. Test with `npm run build` - zero TypeScript errors required

### Working with Animations

The `BlockchainSpeedComparison` component demonstrates best practices:
- Fixed sample counts (8-15) for clarity, not density
- User controls (time selection, play/pause)
- Intro overlay explaining what user sees
- Segmentation lines for visual orientation
- requestAnimationFrame for smooth 60fps animation

## Tech Stack Specifics

- **React 19**: Uses concurrent features, React Compiler enabled
- **Vite 7**: Fast HMR, uses `@vitejs/plugin-react`
- **TailwindCSS 4**: New version with `@tailwindcss/vite` plugin
- **TypeScript 5.9**: Strict mode enabled
- **React Router 7**: Client-side routing with latest patterns
- **gray-matter**: Frontmatter parsing for markdown
- **react-markdown**: Markdown rendering with `remark-gfm` and `rehype-raw`

## BaFin/MiCA Compliance Notes

When editing tokenomics, staking, or investment-related content:
- Avoid promises of profit or guaranteed returns
- Add disclaimers for speculative features
- Use phrases like "planned", "theoretical", "subject to change"
- **BUT**: Don't overload with "may/possible" - use ONE concise disclaimer per section
- Staking must clearly state risks / will release after BaFin approval

## Known Patterns

### Search (⌘K)
- Implemented in `DocsSearch.tsx`
- Fuzzy matches on titles, descriptions, categories
- CMD+K (Mac) or CTRL+K (Windows) to open

### Table of Contents
- Auto-generated from H2/H3 headers in markdown
- Scroll-synced highlighting
- Right column in 3-column docs layout

### Sidebar Navigation
- Collapsible categories from `src/lib/docs.ts`
- Order controlled by `order` property in `docsConfig`
- Category order in `categoryOrder` array
