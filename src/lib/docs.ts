// Docs configuration - maps paths to markdown files
// This is the central place to add new documentation pages

export interface DocPage {
  slug: string
  title: string
  description?: string
  category: string
  order?: number
  file: string // path relative to /src/docs folder
}

export const docsConfig: DocPage[] = [
  // Getting Started
  {
    slug: 'index',
    title: 'Welcome to kas.me',
    description: 'Your Kaspa Ecosystem Hub by The IT CyberSpace',
    category: 'Getting Started',
    order: 1,
    file: 'getting-started/index.md',
  },
  {
    slug: 'getting-started/basics',
    title: 'Kaspa Basics',
    description: 'Learn the fundamentals of Kaspa',
    category: 'Getting Started',
    order: 2,
    file: 'basics/basics.md',
  },
  {
    slug: 'getting-started/kasme-info',
    title: 'About kas.me',
    description: 'Information about the kas.me platform',
    category: 'Getting Started',
    order: 3,
    file: '', // Uses React component KasMeInfoContent instead of markdown
  },
  {
    slug: 'getting-started/guides',
    title: 'Getting Started Guide',
    description: 'How to get started with kas.me',
    category: 'Getting Started',
    order: 4,
    file: '', // Uses React component GettingStartedContent instead of markdown
  },

  // Tokenomics
  {
    slug: 'tokenomics',
    title: 'Token & Ecosystem',
    description: 'Overview of $CYPU tokenomics',
    category: 'Tokenomics',
    order: 1,
    file: 'tokenomics/tokenomics.md',
  },
  {
    slug: 'tokenomics/det-tokenomics',
    title: 'Detailed Tokenomics',
    description: 'In-depth $CYPU token details',
    category: 'Tokenomics',
    order: 2,
    file: 'tokenomics/det_tokenomics.md',
  },
  {
    slug: 'tokenomics/det-token/token-supply',
    title: 'Token Supply',
    description: 'Supply mechanics and distribution',
    category: 'Tokenomics',
    order: 3,
    file: 'tokenomics/det_token/tokensupply.md',
  },
  {
    slug: 'tokenomics/det-token/wallets',
    title: 'Wallet Overview',
    description: 'Official wallet addresses',
    category: 'Tokenomics',
    order: 4,
    file: 'tokenomics/det_token/wallets.md',
  },
  {
    slug: 'tokenomics/det-token/liquidity-pools',
    title: 'Liquidity Pools',
    description: 'DEX pools and liquidity',
    category: 'Tokenomics',
    order: 5,
    file: 'tokenomics/det_token/liquiditypools.md',
  },
  {
    slug: 'tokenomics/det-token/staking',
    title: 'Staking',
    description: 'Staking $CYPU tokens',
    category: 'Tokenomics',
    order: 6,
    file: 'tokenomics/det_token/staking.md',
  },
  {
    slug: 'tokenomics/det-token/vesting',
    title: 'Vesting',
    description: 'Token vesting schedules',
    category: 'Tokenomics',
    order: 7,
    file: 'tokenomics/det_token/vesting.md',
  },
  {
    slug: 'tokenomics/det-token/peg',
    title: 'PEG System',
    description: '$CYPU ↔ CYPUV peg mechanism',
    category: 'Tokenomics',
    order: 8,
    file: 'tokenomics/det_token/peg.md',
  },
  {
    slug: 'tokenomics/det-token/lock',
    title: 'Token Locks',
    description: 'Lock mechanisms and vaults',
    category: 'Tokenomics',
    order: 9,
    file: 'tokenomics/det_token/lock.md',
  },
  {
    slug: 'tokenomics/publicmarket/mint',
    title: 'Minting',
    description: 'How to mint $CYPU',
    category: 'Tokenomics',
    order: 10,
    file: 'tokenomics/publicmarket/mint.md',
  },

  // Platform
  {
    slug: 'platform/infocenter/features',
    title: 'Platform Features',
    description: 'Explore kas.me features',
    category: 'Platform',
    order: 1,
    file: '', // Uses React component FeaturesContent instead of markdown
  },
  {
    slug: 'platform/infocenter/features/det-features',
    title: 'Detailed Features',
    description: 'Tool comparison: TradingView, Glassnode, Bloomberg vs kas.me',
    category: 'Platform',
    order: 2,
    file: '', // Uses React component DetailedFeaturesContent instead of markdown
  },
  {
    slug: 'platform/infocenter/features/free-features',
    title: 'Free Features',
    description: 'Features available for free',
    category: 'Platform',
    order: 3,
    file: '', // Uses React component FreeFeaturesContent instead of markdown
  },
  {
    slug: 'platform/infocenter/explorer',
    title: 'Explorer',
    description: 'Kaspa blockchain explorer',
    category: 'Platform',
    order: 4,
    file: '', // Uses React component ExplorerContent instead of markdown
  },
  {
    slug: 'platform/infocenter/guides',
    title: 'Guides',
    description: 'Platform guides and tutorials',
    category: 'Platform',
    order: 5,
    file: '', // Uses React component GuidesContent instead of markdown
  },
  {
    slug: 'platform/infocenter/intelligence-center',
    title: 'Intelligence Center',
    description: 'Advanced analytics tools',
    category: 'Platform',
    order: 6,
    file: '', // Uses React component IntelligenceCenterContent instead of markdown
  },

  // EcoLoop
  {
    slug: 'tokenomics/ecoloop',
    title: 'EcoLoop',
    description: 'The IT CyberSpace ecosystem loop',
    category: 'EcoLoop',
    order: 1,
    file: '', // Uses React component EcoLoopContent instead of markdown
  },
  {
    slug: 'tokenomics/titcs/firm',
    title: 'The Firm',
    description: 'From one-person operation to structured entity - manifestation in progress',
    category: 'EcoLoop',
    order: 2,
    file: '', // Uses React component TheFirmContent instead of markdown
  },
  {
    slug: 'tokenomics/titcs/network',
    title: 'Network Infrastructure',
    description: 'Decentralized architecture with distributed compliance - Godfather/Worker mesh',
    category: 'EcoLoop',
    order: 3,
    file: '', // Uses React component NetworkInfrastructureContent instead of markdown
  },
  {
    slug: 'tokenomics/titcs/onchain',
    title: 'On-Chain Innovation',
    description: 'PEG Bot, Mint System, HFT dynamics - experimental DeFi with real-world backing',
    category: 'EcoLoop',
    order: 4,
    file: '', // Uses React component OnChainInnovationContent instead of markdown
  },
  {
    slug: 'tokenomics/titcs/partners',
    title: 'Partners',
    description: 'Partner ecosystem',
    category: 'EcoLoop',
    order: 5,
    file: 'tokenomics/titcs/partners.md',
  },

  // Hub & Community
  {
    slug: 'community',
    title: 'Community',
    description: 'Join the kas.me community',
    category: 'Community',
    order: 1,
    file: '', // Uses React component CommunityContent instead of markdown
  },
  {
    slug: 'community/hub/faq',
    title: 'FAQ',
    description: 'Frequently asked questions',
    category: 'Community',
    order: 2,
    file: 'community/hub/faq.md',
  },
  {
    slug: 'community/hub/story',
    title: 'Our Story',
    description: 'The story behind kas.me',
    category: 'Community',
    order: 3,
    file: '', // Uses React component StoryContent instead of markdown
  },
  {
    slug: 'community/hub/audits',
    title: 'Audits & Regulatory Path',
    description: 'Transparency from Day 1 - audit roadmap and regulatory compliance',
    category: 'Community',
    order: 4,
    file: '', // Uses React component AuditsContent instead of markdown
  },

  // Development
  {
    slug: 'development',
    title: 'Development & API',
    description: 'Developer resources and API documentation (in development)',
    category: 'Development',
    order: 1,
    file: '', // Uses React component DevelopmentContent instead of markdown
  },

  // Dev Talks - Behind the Scenes
  {
    slug: 'community/devtalks/devtalk-1',
    title: 'Dev Talk #1: First Ever Dev Talk',
    description: '72 Days After Token Launch - The origin story',
    category: 'Behind the Scenes',
    order: 1,
    file: 'community/devtalks/devtalk1.md',
  },
  {
    slug: 'community/devtalks/devtalk-2',
    title: 'Dev Talk #2: Absurd Megalomania',
    description: 'Personal reflections on building something different',
    category: 'Behind the Scenes',
    order: 2,
    file: 'community/devtalks/devtalk2.md',
  },
]

// Get all unique categories in order
export function getCategories(): string[] {
  const categoryOrder = [
    'Getting Started',
    'Tokenomics',
    'Platform',
    'EcoLoop',
    'Community',
    'Behind the Scenes',
    'Development',
  ]
  return categoryOrder
}

// Get docs by category
export function getDocsByCategory(): Record<string, DocPage[]> {
  const grouped: Record<string, DocPage[]> = {}
  
  for (const doc of docsConfig) {
    if (!grouped[doc.category]) {
      grouped[doc.category] = []
    }
    grouped[doc.category].push(doc)
  }
  
  // Sort each category by order
  for (const category of Object.keys(grouped)) {
    grouped[category].sort((a, b) => (a.order || 99) - (b.order || 99))
  }
  
  return grouped
}

// Get a single doc by slug
export function getDocBySlug(slug: string): DocPage | undefined {
  return docsConfig.find(doc => doc.slug === slug)
}

// Navigation structure for sidebar
export function getDocsNavigation() {
  const categories = getCategories()
  const docsByCategory = getDocsByCategory()
  
  return categories.map(category => ({
    title: category,
    items: (docsByCategory[category] || []).map(doc => ({
      title: doc.title,
      href: doc.slug === 'index' ? '/docs' : `/docs/${doc.slug}`,
      description: doc.description,
    })),
  }))
}
