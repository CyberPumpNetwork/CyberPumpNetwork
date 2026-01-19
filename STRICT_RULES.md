# STRICT RULES - READ THIS BEFORE TOUCHING ANY CODE

## 🚨 CRITICAL PROBLEMS IDENTIFIED 🚨

**Current State: UNACCEPTABLE**
- 139 hardcoded color classes creating a "rainbow festival"
- Repetitive content across pages (same text copy-pasted)
- Sections too long (walls of text)
- CYPUV governance token info exists but invisible to users
- Truth source unclear (where is actual tokenomics data?)

---

## 🎨 CORPORATE LOOK STANDARDS (ABSOLUTE)

### COLOR USAGE - ZERO TOLERANCE POLICY

**RULE 1: ONLY 3 COLORS ALLOWED IN COMPONENTS**

```tsx
// ✅ ALLOWED: Semantic system colors ONLY
text-accent        // Brand color (Türkis) - PRIMARY ACTION ONLY
text-muted-foreground  // Secondary text
text-foreground    // Main text

// ✅ ALLOWED: Status icons (ONLY in Callout components)
CheckCircle with text-green-500   // Success state only
XCircle with text-red-500          // Error state only
AlertTriangle with text-yellow-500 // Warning state only

// ❌ FORBIDDEN: ALL other hardcoded colors
text-blue-500, text-blue-600, text-cyan-400, text-cyan-600
text-green-500 (except status icons)
text-purple-500, text-purple-600
text-yellow-500 (except status icons)
text-pink-*, text-orange-*, text-indigo-*, text-teal-*
```

**RULE 2: Icon Colors - ONE RULE FOR ALL**

```tsx
// ✅ CORRECT: ALL icons use accent or muted
<Network className="w-6 h-6 text-accent" />      // Primary icons
<Shield className="w-5 h-5 text-muted-foreground" />  // Secondary icons

// ❌ FORBIDDEN: Rainbow icon festival
<Zap className="w-8 h-8 text-blue-500" />
<Shield className="w-8 h-8 text-green-500" />
<Coins className="w-5 h-5 text-purple-500" />
```

**RULE 3: Card Backgrounds - SINGLE PATTERN**

```tsx
// ✅ CORRECT: Neutral card pattern (NO COLORS)
<div className="rounded-lg border border-border bg-card p-6">
  <div className="flex items-center gap-3 mb-4">
    <Icon className="w-6 h-6 text-accent" />
    <h3 className="text-lg font-bold">{title}</h3>
  </div>
  <p className="text-sm text-muted-foreground">{description}</p>
</div>

// ❌ FORBIDDEN: Colored borders and backgrounds
border-accent/30 bg-gradient-to-br from-accent/10
border-blue-500/30 bg-gradient-to-br from-blue-500/5
border-purple-500/30 bg-gradient-to-br from-purple-500/5
```

### VISUAL CLEANUP CHECKLIST

Before ANY component goes live:
- [ ] Count hardcoded colors: MUST BE 0 (except status icons in Callouts)
- [ ] All icons use `text-accent` or `text-muted-foreground` ONLY
- [ ] All cards use neutral `border-border bg-card` pattern
- [ ] Page looks professional, NOT like a children's coloring book

---

## 📝 CONTENT LENGTH STANDARDS (STRICT)

### SECTION LENGTH LIMITS

**RULE: ONE SECTION = ONE IDEA = MAX 300 WORDS**

```tsx
// ✅ CORRECT: Concise, scannable section
<section className="space-y-4">
  <h2>Token Supply</h2>
  <p className="text-lg text-muted-foreground">
    $CYPU has a maximum supply of 1,000,000,000 tokens. No inflation.
    Supply is fixed by smart contract and cannot be changed.
  </p>
  <div className="grid md:grid-cols-3 gap-4">
    <StatCard label="Max Supply" value="1B CYPU" />
    <StatCard label="Circulating" value="TBD" />
    <StatCard label="Locked" value="TBD" />
  </div>
</section>

// ❌ FORBIDDEN: Wall of text
<section>
  <h2>Token Supply</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris... [500 more words of text]
  </p>
</section>
```

**SECTION TEMPLATES (COPY THESE EXACTLY):**

**Template 1: Feature Explanation (MAX 200 words)**
```tsx
<section className="space-y-4">
  <h2 className="text-2xl font-bold">Feature Name</h2>
  <p className="text-lg text-muted-foreground">
    One sentence: What is it?
  </p>
  <p>
    Two sentences: Why does it exist? What problem does it solve?
  </p>
  <Callout type="tip">
    One sentence: Key insight or takeaway.
  </Callout>
</section>
```

**Template 2: Technical Detail (MAX 300 words)**
```tsx
<section className="space-y-4">
  <h2 className="text-2xl font-bold">How It Works</h2>
  <div className="space-y-3">
    <div className="flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
      <div>
        <h3 className="font-semibold">Step 1</h3>
        <p className="text-sm text-muted-foreground">Brief explanation.</p>
      </div>
    </div>
    {/* Repeat for 2-3 steps MAX */}
  </div>
</section>
```

---

## 🔄 CONTENT REPETITION - ZERO TOLERANCE

### RULE: EACH PARAGRAPH APPEARS EXACTLY ONCE

**FORBIDDEN PATTERNS:**

```tsx
// ❌ WRONG: Same development disclaimer on EVERY page
// Page 1: Getting Started
<Callout type="warning" title="Platform Status: In Development">
  kas.me is currently being built. Nothing described on this page is live...
</Callout>

// Page 2: Tokenomics
<Callout type="warning" title="Platform Status: In Development">
  kas.me is currently being built. Nothing described on this page is live...
</Callout>

// Page 3: Features
<Callout type="info" title="Development Status">
  kas.me is currently in active development. All features described here...
</Callout>
```

**CORRECT PATTERN:**

```tsx
// ✅ SOLUTION 1: Show disclaimer ONLY on homepage/main docs page
// All other pages: NO disclaimer

// ✅ SOLUTION 2: Create DevelopmentStatusBanner component used ONCE at layout level
// src/components/docs/DevelopmentStatusBanner.tsx
export function DevelopmentStatusBanner() {
  const location = useLocation()
  const shouldShow = location.pathname === '/docs' // Only on main docs page

  if (!shouldShow) return null

  return (
    <Callout type="info" title="Development Status" className="mb-8">
      kas.me is in active development. Features described are not yet live.
    </Callout>
  )
}
```

### CONTENT REUSE AUDIT

**Before writing ANY content, ask:**
1. Have I said this EXACT thing on another page?
2. If yes, can I DELETE one instance or LINK to the other?
3. Can I say it in FEWER words this time?

**ALLOWED Repetition:**
- Navigation links (sidebar, breadcrumbs)
- Component structure (cards, callouts)
- Risk disclaimers (REQUIRED by law on financial pages)

**FORBIDDEN Repetition:**
- "What is kas.me?" (say it ONCE on homepage, NEVER again)
- "Why Kaspa?" (say it ONCE on basics page, LINK from others)
- Development status banners (say it ONCE, not on every page)
- Feature lists (say it ONCE with full detail, SUMMARIZE elsewhere)

---

## 📊 TRUTH SOURCE - ABSOLUTE CLARITY

### TOKENOMICS DATA: SINGLE SOURCE OF TRUTH

**FILE: `src/lib/tokenomics-data.ts` (CREATE THIS)**

```typescript
// src/lib/tokenomics-data.ts
// SINGLE SOURCE OF TRUTH for all token data

export const TOKENOMICS = {
  CYPU: {
    name: '$CYPU',
    fullName: 'CyberPump Utility Token',
    type: 'Utility Token (KRC-20)',
    maxSupply: 1_000_000_000,
    purpose: 'Pay for platform services',
    classification: 'Non-security (utility)',
  },
  CYPUV: {
    name: '$CYPUV',
    fullName: 'CyberPump Voting Token',
    type: 'Governance Token (KRC-20)',
    maxSupply: 54_550_000,
    purpose: 'Vote on platform decisions',
    classification: 'Non-security (governance)',
    votingRights: [
      'Treasury spending decisions (>$50k)',
      'Feature prioritization',
      'Protocol parameter changes',
      'Community grant approvals',
      'Strategic partnership votes',
    ],
  },
  ICO: {
    totalAllocation: 70_000_000, // CYPU
    status: 'In progress',
  },
  TREASURY: {
    companyColdStorage: '70M CYPU locked',
    multisigConfig: '2-of-3',
  },
} as const

// Export hook for components
export function useTokenomicsData() {
  return TOKENOMICS
}
```

**USAGE IN COMPONENTS:**

```tsx
// ✅ CORRECT: Import from single source
import { TOKENOMICS } from '@/lib/tokenomics-data'

<div className="space-y-4">
  <h2>{TOKENOMICS.CYPUV.fullName}</h2>
  <p>Max Supply: {TOKENOMICS.CYPUV.maxSupply.toLocaleString()} tokens</p>
  <p>Purpose: {TOKENOMICS.CYPUV.purpose}</p>

  <h3>Voting Rights</h3>
  <ul>
    {TOKENOMICS.CYPUV.votingRights.map(right => (
      <li key={right}>
        <CheckCircle className="w-4 h-4 text-green-500" />
        {right}
      </li>
    ))}
  </ul>
</div>

// ❌ WRONG: Hardcoded numbers scattered everywhere
<p>Max Supply: 54,550,000 tokens</p> // Page 1
<p>Total CYPUV: 54.55M</p>           // Page 2
<p>Supply: ~55M</p>                  // Page 3 (INCONSISTENT!)
```

### TRUTH SOURCE FILE STRUCTURE

Create these files to centralize ALL data:

```
src/lib/
├── tokenomics-data.ts    # Token numbers, allocations, governance
├── network-data.ts       # CPN performance metrics, latency, throughput
├── treasury-data.ts      # Wallet addresses, multisig config, balances
├── roadmap-data.ts       # Development milestones, status
└── compliance-data.ts    # BaFin status, regulatory timeline
```

**RULE: NEVER hardcode data in components. ALWAYS import from truth source.**

---

## 🎯 CYPUV VISIBILITY - IMMEDIATE FIX REQUIRED

### PROBLEM: CYPUV governance exists but users can't see it

**SOLUTION 1: Add CYPUV Section to Main Tokenomics Page**

```tsx
// src/components/docs/TokenomicsContent.tsx
// ADD THIS SECTION (currently missing):

<section className="space-y-6">
  <h2 className="text-2xl font-bold flex items-center gap-3">
    <Vote className="w-8 h-8 text-accent" />
    Governance System
  </h2>

  <p className="text-lg text-muted-foreground">
    Platform decisions are made by CYPUV token holders through on-chain voting.
  </p>

  <div className="grid md:grid-cols-2 gap-6">
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <Coins className="w-6 h-6 text-accent" />
        <h3 className="text-lg font-bold">$CYPUV Token</h3>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Max Supply:</span>
          <span className="font-semibold">54,550,000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Type:</span>
          <span className="font-semibold">Governance Token</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Purpose:</span>
          <span className="font-semibold">DAO Voting Rights</span>
        </div>
      </div>
    </div>

    <div className="rounded-lg border border-border bg-card p-6">
      <h4 className="font-bold mb-3">Voting Rights</h4>
      <ul className="space-y-2 text-sm">
        {TOKENOMICS.CYPUV.votingRights.map(right => (
          <li key={right} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
            <span>{right}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  <Link to="/docs/tokenomics/governance">
    <button className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all">
      Learn more about governance
      <ArrowRight className="w-4 h-4" />
    </button>
  </Link>
</section>
```

**SOLUTION 2: Create Dedicated Governance Page**

```tsx
// src/components/docs/GovernanceContent.tsx
export function GovernanceContent() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Vote className="w-10 h-10 text-accent" />
          <h1 className="text-4xl font-bold">Governance</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Platform governance is handled by CYPUV token holders through
          decentralized voting on treasury spending, feature priorities,
          and protocol changes.
        </p>
      </div>

      {/* CYPUV Token Details */}
      {/* Voting Process */}
      {/* Proposal System */}
      {/* Historical Votes */}
    </div>
  )
}
```

**SOLUTION 3: Add to Navigation**

```tsx
// src/lib/docs.ts
{
  slug: 'tokenomics/governance',
  title: 'Governance (CYPUV)',
  description: 'DAO voting and platform governance',
  category: 'Tokenomics',
  order: 11, // After other tokenomics pages
  file: '', // Uses GovernanceContent component
},
```

---

## 📋 IMPLEMENTATION CHECKLIST

### Phase 1: Color Cleanup (IMMEDIATE)
- [ ] Find ALL instances of `text-blue-500`, `text-green-500`, `text-purple-500` etc
- [ ] Replace with `text-accent` or `text-muted-foreground`
- [ ] Remove ALL colored borders (`border-accent/30`, `border-blue-500/30`)
- [ ] Replace with neutral `border-border`
- [ ] Remove ALL colored backgrounds (`bg-gradient-to-br from-accent/10`)
- [ ] Replace with neutral `bg-card`
- [ ] Count final hardcoded colors: MUST BE 0

### Phase 2: Content Deduplication (IMMEDIATE)
- [ ] List ALL pages
- [ ] Identify repeated paragraphs/sections
- [ ] Delete duplicates OR create shared component used ONCE
- [ ] Ensure "What is kas.me?" appears ONLY on homepage
- [ ] Move development status banner to layout level OR homepage only

### Phase 3: Truth Source Creation (URGENT)
- [ ] Create `src/lib/tokenomics-data.ts`
- [ ] Create `src/lib/network-data.ts`
- [ ] Create `src/lib/treasury-data.ts`
- [ ] Replace ALL hardcoded numbers with imports from these files
- [ ] Test: Change one number in truth source, verify ALL pages update

### Phase 4: CYPUV Visibility (URGENT)
- [ ] Add Governance section to main Tokenomics page
- [ ] Create dedicated Governance page component
- [ ] Add to navigation in `docs.ts`
- [ ] Test: User can find CYPUV info without searching

### Phase 5: Content Length Reduction (HIGH PRIORITY)
- [ ] Audit each section: Count words
- [ ] Sections >300 words: Break into subsections OR delete fluff
- [ ] Aim for scannable, concise content
- [ ] Use components (Callouts, Cards) to break up walls of text

---

## 🚫 ZERO TOLERANCE VIOLATIONS

**If ANY of these exist in your code, it will be REJECTED:**

1. **Color Chaos**: More than 3 unique text colors (accent, muted-foreground, foreground)
2. **Repetition**: Same paragraph appears on 2+ pages
3. **Wall of Text**: Section longer than 400 words without visual breaks
4. **Hardcoded Data**: Token numbers, performance metrics written directly in JSX
5. **Missing CYPUV**: Governance token not visible on Tokenomics page or navigation

---

## ✅ APPROVAL CRITERIA

**Before ANY component is considered "done":**

```bash
# Run this test:
grep -r "text-blue-500\|text-green-500\|text-purple-500\|text-cyan-" src/components/docs/
# Output MUST be: 0 matches (except in Callout status icons)

grep -r "What is kas.me?" src/components/docs/
# Output MUST be: 1 match maximum

grep -r "Development Status" src/components/docs/
# Output MUST be: 1 match (in layout or homepage only)

grep -r "54,550,000\|54550000" src/
# Output MUST be: 1 match (in tokenomics-data.ts ONLY)
```

**Visual Test:**
- Open 5 random doc pages
- Do they look like ONE cohesive product? (YES = pass)
- Do they look like a rainbow festival? (NO = fail)
- Can you find CYPUV governance info in <30 seconds? (YES = pass)

---

## 💡 REMEMBER

**Professional ≠ Colorful**

A Bloomberg Terminal doesn't use 10 different colors. Neither should we.

**Concise ≠ Boring**

Short, scannable sections with visual components are MORE engaging than walls of text.

**Consistent ≠ Repetitive**

Same structure/design is good. Same content copy-pasted is lazy.

**Centralized Data ≠ Hardcoding**

One source of truth = easy updates. Scattered hardcoded numbers = nightmare.
