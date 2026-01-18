# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ READ THIS FIRST: STRICT_RULES.md

**BEFORE touching ANY code, READ:** [STRICT_RULES.md](./STRICT_RULES.md)
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

**Critical Standards (enforced by STRICT_RULES.md):**
1. ✅ ONLY 3 colors allowed: `text-accent`, `text-muted-foreground`, `text-foreground`
2. ✅ Zero tolerance for duplicate content across pages
3. ✅ MAX 300 words per section
4. ✅ CYPUV governance MUST be visible
5. ✅ Single source of truth for ALL data (`tokenomics-data.ts`, `network-data.ts`)

**Non-Negotiable:**
- Corporate look, NOT rainbow festival
- Concise sections, NOT walls of text
- NO content repetition

---

## Project Overview

**CyberPumpNetwork** - React-based documentation site for kas.me (Kaspa ecosystem platform).

### Tech Stack
- **React 19** + **Vite 7** + **TailwindCSS 4**
- **TypeScript 5.9** (strict mode)
- **React Router 7**
- **Markdown**: `react-markdown` with `remark-gfm` and `rehype-raw`

### Build Commands
```bash
npm run dev      # Dev server (port 5173)
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # Linting
```

---

## Content System

### Two Approaches

**1. Markdown Files** (`src/docs/*.md`)
- For: Simple text pages (guides, FAQs, Dev Talks)
- Process: `MarkdownRenderer` component
- Register: `src/lib/docs.ts`

**2. React Components** (`src/components/docs/*.tsx`)
- For: Interactive pages with Callouts, StatsGrid, Charts
- Process: Conditional rendering in `DocsPage.tsx`
- Register: `src/lib/docs.ts` with `file: ''`

### Adding Pages

**Markdown Page:**
1. Create `src/docs/category/page.md`
2. Add entry to `src/lib/docs.ts`:
```ts
{
  slug: 'category/page',
  title: 'Page Title',
  description: 'Short description',
  category: 'Category Name',
  order: 1,
  file: 'category/page.md',
}
```

**React Component Page:**
1. Create `src/components/docs/PageContent.tsx`
2. Import in `src/pages/DocsPage.tsx`
3. Add to `hasCustomComponent` check
4. Add render condition
5. Add entry to `src/lib/docs.ts` with `file: ''`

---

## Truth Sources (MANDATORY)

**NEVER hardcode data. ALWAYS import from:**

```ts
// Token data
import { TOKENOMICS } from '@/lib/tokenomics-data'
TOKENOMICS.CYPU.maxSupply       // 1,000,000,000
TOKENOMICS.CYPUV.maxSupply      // 54,550,000
TOKENOMICS.CYPUV.votingRights   // Array of governance rights

// Network data
import { NETWORK_DATA } from '@/lib/network-data'
NETWORK_DATA.PERFORMANCE.latency.regional        // '<5ms'
NETWORK_DATA.PERFORMANCE.throughput.ordersPerSecond  // '40k+'
```

---

## Voice & Tone (CRITICAL)

**Reference:** Dev-Talks in `src/docs/community/devtalks/`

**DO:**
- ✅ "I'm building..." (not "We revolutionize...")
- ✅ Explain the "why" behind decisions
- ✅ Admit limitations and challenges
- ✅ Use concrete examples, not hype

**DON'T:**
- ❌ "Revolutionary platform", "game-changing", "cutting-edge"
- ❌ Promises of returns or yields
- ❌ "Launching soon" without specific date
- ❌ Exclamation marks everywhere!!!

**Template:**
```markdown
// ✅ CORRECT
"While building CyberPumpNetwork, I needed P2P communication at scale.
After researching libp2p's gossipsub protocol, I realized it could solve
the broadcasting problem without central servers."

// ❌ WRONG
"CyberPumpNetwork leverages cutting-edge P2P technology to deliver
revolutionary decentralized communication!"
```

---

## Migration Guidelines

### From Jekyll to React

**OLD (Jekyll):**
- Inline HTML/CSS
- Font Awesome icons
- Custom CSS classes
- `style="color: var(--accent-turkis);"`

**NEW (React):**
- Clean markdown OR React components
- Lucide React icons
- TailwindCSS classes
- `className="text-accent"`

### Content Extraction Process

1. **Read** internal docs (01-06 MD files) for technical details
2. **Think** like the reader - what do they need to know?
3. **Write** external content WITHOUT mentioning internal file names

**❌ NEVER do this:**
```markdown
"Based on our 01_P2P_NETWORK_ARCHITECTURE.md document..."
```

**✅ ALWAYS do this:**
```markdown
"The network uses a three-layer architecture: Godfather nodes
handle broadcasting, Worker nodes validate and process..."
```

---

## Compliance (BaFin/MiCA)

**REQUIRED on financial pages:**

```tsx
<Callout type="warning" title="Risk Disclosure">
  Crypto investments carry significant risk. CYPU is a pure utility token
  with no guaranteed returns. This is not financial advice.
</Callout>
```

**Language:**
- ✅ "Planned (pending regulatory approval)"
- ✅ "Timeline TBD"
- ❌ "Will launch Q2 2026"
- ❌ "Guaranteed returns"
- ❌ "Investment opportunity"

---

## File Structure

```
src/
├── components/docs/      # Doc components (Callout, ResourceCard, StatsGrid)
├── pages/DocsPage.tsx    # Main docs router
├── docs/                 # Markdown content
├── lib/
│   ├── docs.ts          # Navigation config (SINGLE SOURCE OF TRUTH)
│   ├── tokenomics-data.ts   # Token data
│   └── network-data.ts      # Network metrics
```

---

## Reusable Components

```tsx
import { Callout } from '@/components/docs/Callout'
import { ResourceCard } from '@/components/docs/ResourceCard'
import { StatsGrid } from '@/components/docs/StatsGrid'

// Callout types: info, warning, success, danger, tip, note
<Callout type="info" title="Important">Content</Callout>

// Stats
<StatsGrid stats={[
  { label: 'Metric', value: '100', icon: IconComponent }
]} />

// Resource cards
<ResourceCard
  icon={Icon}
  title="Title"
  description="Description"
  href="/path"
/>
```

---

## Special Sections

### Dev Talks
- Location: `src/docs/community/devtalks/`
- **PRESERVE EXACT TONE** - Personal reflections from founder
- No marketing speak, honest insights

### Tokenomics
- Dual-token: $CYPU (utility) + $CYPUV (governance)
- CYPUV & CYPU MUST be visible on main tokenomics page
- Use `TOKENOMICS` import, never hardcode numbers

---

## Quick Reference

**Add new doc page:** Update `src/lib/docs.ts` first
**Hardcoded data?** Create truth source file in `src/lib/`
**Too many colors?** Check STRICT_RULES.md
**Marketing language?** Check "Style of Speech" above
**Migration help?** See MIGRATION_FIXES_NEEDED.md

**When in doubt:** Read STRICT_RULES.md
