# Content Migration Guide

## Warum dieser Guide?

Die alten Markdown-Dateien aus dem Jekyll-Repo sind vollgestopft mit:
- Inline HTML (`<div class="...">, <i class="fas...">`)
- Custom CSS-Klassen die nicht mehr existieren
- Font-Awesome Icons
- Veraltete Permalink-Struktur
- Old-school Formatierung

**Das passt NULL zum modernen React/Tailwind Stack!**

---

## Das neue System

### 1. Sauberes Markdown

```markdown
# Title

Clean, semantic markdown.

## Section

- Bullet points
- **Bold text**
- `code inline`
```

### 2. Custom React-Komponenten (für spezielle Elemente)

Wir haben jetzt moderne Komponenten erstellt:

#### ResourceCard
Für Feature-Übersichten, Links zu Ressourcen

```tsx
<ResourceCard
  icon={Coins}
  title="Detailed Tokenomics"
  description="Complete breakdown of $CYPU token..."
  href="/docs/tokenomics/det-tokenomics"
/>
```

#### Callout
Für Info-Boxen, Warnungen, Tips

```tsx
<Callout type="info" title="Important">
  This is a callout box with important information.
</Callout>
```

Typen: `info`, `warning`, `success`, `danger`, `tip`, `note`

#### StatsGrid
Für Zahlen, Statistiken

```tsx
<StatsGrid
  columns={3}
  stats={[
    { label: "Total Supply", value: "100M", icon: Coins },
    { label: "Circulating", value: "25M", icon: TrendingUp, trend: "up", trendValue: "+5%" },
    { label: "Holders", value: "1,234", icon: Users }
  ]}
/>
```

---

## Migration-Strategie

### Schritt 1: Content extrahieren

```markdown
ALT (Jekyll):
<div class="resource-card">
  <i class="fas fa-coins"></i>
  <h3><a href="/kasme/det_tokenomics">Token Supply</a></h3>
  <p>Detailed breakdown...</p>
</div>

NEU (Clean MD):
### 📊 Detailed Tokenomics

Complete breakdown of $CYPU token supply...

[Explore Detailed Tokenomics](/docs/tokenomics/det-tokenomics)
```

### Schritt 2: Struktur vereinfachen

- Keine HTML-divs mehr
- Keine CSS-Klassen
- Nur Markdown + evtl. Custom-Komponenten
- Konsistente Formatierung

### Schritt 3: Links aktualisieren

```markdown
ALT:
/kasme/det_tokenomics
/Token/wallet-overview

NEU:
/docs/tokenomics/det-tokenomics
/docs/tokenomics/det-token/wallets
```

---

## Content-Typen & Templates

### Übersichtsseite (wie tokenomics.md)

```markdown
# Title

Intro paragraph explaining what this is about.

---

## Overview

Key points:
- Point 1
- Point 2
- Point 3

---

## Core Resources

### Resource 1
Description...
[Link](/docs/...)

### Resource 2
Description...
[Link](/docs/...)

---

## Quick Links

- [Link 1](/docs/...)
- [Link 2](/docs/...)
```

### Detail-Seite (wie det_tokenomics.md)

```markdown
# Detailed Title

## Section 1

Content...

### Subsection

More content...

## Section 2

Tables, code blocks, etc.
```

### Guide-Seite

```markdown
# How to...

Step-by-step instructions.

## Step 1: Do this

Instructions...

## Step 2: Do that

Instructions...
```

---

## Design-Prinzipien

### ✅ DO:
- Clean, semantic Markdown
- Use H2 for major sections
- Use H3 for subsections
- Links als `[Text](/path)`
- Emoji-Icons (📊, 🔄, 💼) für visuelle Akzente
- Horizontale Linien (`---`) für Sections

### ❌ DON'T:
- Inline HTML
- Custom CSS-Klassen
- Font-Awesome Icons
- Komplexe div-Strukturen
- Alte Permalink-Struktur

---

## Beispiel: Vorher/Nachher

### VORHER (Jekyll - schlecht):

```html
---
layout: single
permalink: /Token/
---

<h2>Token & Ecosystem</h2>

<div class="info-grid">
  <div class="resource-card">
    <i class="fas fa-file-pdf"></i>
    <h3><a href="..." target="_blank">Whitepaper</a></h3>
    <p>The foundational document...</p>
    <p>🏦 📜 Work in Progress 📜 🏦</p>
  </div>
</div>
```

### NACHHER (React/MD - gut):

```markdown
# Token & Ecosystem

The **$CYPU** token is the heart of the kas.me ecosystem.

---

## Core Resources

### 📜 Whitepaper

The foundational document outlining kas.me's vision...

[View Whitepaper](https://drive.google.com/...) (Work in Progress 🏦)
```

---

## Custom TSX Components für komplexe Seiten

Für wichtige Seiten mit vielen visuellen Elementen (wie Tokenomics) erstellen wir **eigene TSX-Komponenten**:

### Beispiel: TokenomicsContent.tsx

```tsx
// src/components/docs/TokenomicsContent.tsx
export function TokenomicsContent() {
  return (
    <div className="space-y-12">
      {/* Hero mit Gradient */}
      <div className="relative">
        <h1>Token & Ecosystem</h1>
        {/* ... */}
      </div>

      {/* StatsGrid für Zahlen */}
      <StatsGrid
        stats={[
          { label: "Token Type", value: "KRC-20", icon: Coins }
        ]}
      />

      {/* ResourceCards für Links */}
      <ResourceCard
        icon={FileText}
        title="Whitepaper"
        description="..."
        href="/..."
      />

      {/* Callouts für wichtige Info */}
      <Callout type="tip" title="...">
        <p>...</p>
      </Callout>
    </div>
  )
}
```

### Integration in DocsPage

```tsx
// src/pages/DocsPage.tsx
function MarkdownDocPage({ slug }: { slug: string }) {
  const hasCustomComponent = slug === 'tokenomics'

  return (
    <article>
      {hasCustomComponent ? (
        <TokenomicsContent />
      ) : (
        <MarkdownRenderer content={content} />
      )}
    </article>
  )
}
```

### Wann Custom TSX vs. Markdown?

**Custom TSX Component**:
- Komplexe Layouts mit vielen visuellen Elementen
- Interaktive Features
- Dynamische Daten
- Beispiel: Tokenomics, Platform Features

**Sauberes Markdown**:
- Text-fokussierte Seiten
- Dev Talks, Story, Guides
- Einfache Strukturen
- Beispiel: FAQ, Getting Started

---

## Nächste Schritte

1. ✅ Tokenomics Hauptseite migriert (Custom TSX Component)
2. ⏳ Detailed Tokenomics Seiten
3. ⏳ Community/Hub Seiten (Story, FAQ, Audits)
4. ⏳ Platform/InfoCenter Docs
5. ⏳ Getting Started Guides

**Jede Seite einzeln neu schreiben - alter Content nur als Info-Quelle!**
