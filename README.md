# CyberPumpNetwork Documentation

> **Modern, interactive documentation for kas.me – Your Kaspa Ecosystem Hub by The IT CyberSpace 🇩🇪**

## 🚀 Features

### User Experience
- 🔍 **Real-time Search** - Fuzzy search across all documentation (⌘K)
- 📚 **Table of Contents** - Auto-generated, scroll-synced navigation
- 🎨 **Syntax Highlighting** - Beautiful code blocks with copy buttons
- 📱 **Responsive Design** - Perfect on desktop, tablet, and mobile
- 🗂️ **Collapsible Sidebar** - Organized, easy-to-navigate structure
- 🎯 **Breadcrumbs** - Always know where you are

### Special Sections
- 💭 **Behind the Scenes** - Personal Dev Talks from the founder
- 🎭 **Easter Eggs** - Hidden insights, philosophy, and vision
- 📊 **Tokenomics** - Complete $CYPU token documentation
- 🛠️ **Platform Guides** - How-to guides and feature explanations

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety
- **Vite 7** - Lightning-fast build tool
- **TailwindCSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **react-markdown** - Markdown rendering
- **react-syntax-highlighter** - Code syntax highlighting
- **React Router 7** - Client-side routing

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── CodeBlock.tsx           # Syntax highlighting + copy button
│   ├── DocsSidebar.tsx         # Collapsible navigation sidebar
│   ├── DocsSearch.tsx          # Search functionality (⌘K)
│   ├── DevTalkCard.tsx         # Special Dev Talk components
│   ├── TableOfContents.tsx     # Auto-generated TOC
│   ├── MarkdownRenderer.tsx    # Enhanced markdown rendering
│   └── ui/                     # Radix UI components
│
├── pages/
│   ├── LandingPage.tsx         # Home page
│   ├── DocsPage.tsx            # Documentation (3-column layout)
│   └── BlogPage.tsx            # Blog/updates
│
├── docs/                       # Markdown documentation
│   ├── getting-started/
│   ├── tokenomics/
│   ├── platform/
│   ├── community/
│   │   └── devtalks/           # Behind the Scenes content
│   ├── basics/
│   └── development/
│
└── lib/
    ├── docs.ts                 # Documentation configuration
    └── useMarkdown.ts          # Markdown loading hook
```

## 📝 Adding New Documentation

### 1. Create Markdown File

```markdown
# Your Page Title

Content goes here...
```

### 2. Register in `src/lib/docs.ts`

```typescript
{
  slug: 'category/page-name',
  title: 'Page Title',
  description: 'Short description',
  category: 'Category Name',
  order: 1,
  file: 'category/page-name.md',
}
```

### 3. Add Category (if new)

Update `getCategories()` in `src/lib/docs.ts`:

```typescript
const categoryOrder = [
  'Getting Started',
  'Your New Category',
  // ...
]
```

## 🎨 Styling Guide

### Colors
- Primary: `#40E0D0` (Türkis)
- Secondary: `#00BFFF` (Deep Sky Blue)
- Accent: Used for highlights, hovers
- Background: Dark theme optimized

### Components
- Use Radix UI components from `src/components/ui/`
- Follow TailwindCSS utility-first approach
- Maintain consistent spacing (4px grid)

## 🔍 Search

Press `⌘K` (Mac) or `Ctrl+K` (Windows/Linux) to open search.

Search looks through:
- Page titles (highest priority)
- Descriptions
- Categories

## 💡 Dev Talks

Dev Talks are special content located in `src/docs/community/devtalks/`.

They represent personal insights and philosophy behind kas.me:
- **No marketing speak** - Honest reflections
- **Philosophy over hype** - Ideas matter more than price
- **Journey documentation** - The process, not just results

## 🚢 Deployment

```bash
# Build production bundle
npm run build

# Deploy to your hosting platform
# - Vercel: Auto-deploy via GitHub integration
# - Netlify: Drag & drop dist/ folder
# - GitHub Pages: Deploy dist/ to gh-pages branch
```

### Environment Variables (Optional)

```env
# Add if needed
VITE_API_URL=https://api.kas.me
```

## 📊 Performance

- Bundle size: ~250KB gzipped (main bundle)
- Lighthouse score: 95+ (Performance)
- Mobile-optimized
- Code-split by route

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes
3. Test: `npm run build` and `npm run preview`
4. Commit: `git commit -m "Add: your feature"`
5. Push and create PR

### Content Guidelines
- Keep markdown clean and semantic
- Use H2-H3 for sections (H1 auto-generated)
- Add code blocks with language tags
- Keep line length reasonable (~80-100 chars)

## 🐛 Known Issues

- None currently! 🎉

## 📄 License

Private - The IT CyberSpace

---

## 🔗 Links

- **Website:** [kas.me](https://kas.me)
- **X/Twitter:** [@TheITCyberSpace](https://x.com/TheITCyberSpace)
- **GitHub:** [CyberPumpNetwork](https://github.com/CyberPumpNetwork)

---

**Built with ❤️ by The IT CyberSpace** 🇩🇪
