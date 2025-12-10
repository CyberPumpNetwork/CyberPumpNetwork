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
    file: 'getting-started/kasme-info.md',
  },
  {
    slug: 'getting-started/guides',
    title: 'Getting Started Guide',
    description: 'How to get started with kas.me',
    category: 'Getting Started',
    order: 4,
    file: 'platform/infocenter/guides/getting-started.md',
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
    file: 'platform/infocenter/features.md',
  },
  {
    slug: 'platform/infocenter/features/det-features',
    title: 'Detailed Features',
    description: 'In-depth feature breakdown',
    category: 'Platform',
    order: 2,
    file: 'platform/infocenter/features/det_features.md',
  },
  {
    slug: 'platform/infocenter/features/free-features',
    title: 'Free Features',
    description: 'Features available for free',
    category: 'Platform',
    order: 3,
    file: 'platform/infocenter/features/free_features.md',
  },
  {
    slug: 'platform/infocenter/explorer',
    title: 'Explorer',
    description: 'Kaspa blockchain explorer',
    category: 'Platform',
    order: 4,
    file: 'platform/infocenter/explorer.md',
  },
  {
    slug: 'platform/infocenter/guides',
    title: 'Guides',
    description: 'Platform guides and tutorials',
    category: 'Platform',
    order: 5,
    file: 'platform/infocenter/guides.md',
  },
  {
    slug: 'platform/infocenter/intelligence-center',
    title: 'Intelligence Center',
    description: 'Advanced analytics tools',
    category: 'Platform',
    order: 6,
    file: 'platform/infocenter/IntelligenceCenter.md',
  },

  // EcoLoop
  {
    slug: 'tokenomics/ecoloop',
    title: 'EcoLoop',
    description: 'The IT CyberSpace ecosystem loop',
    category: 'EcoLoop',
    order: 1,
    file: 'tokenomics/ecoloop_itcs.md',
  },
  {
    slug: 'tokenomics/titcs/firm',
    title: 'The IT CyberSpace',
    description: 'About the company',
    category: 'EcoLoop',
    order: 2,
    file: 'tokenomics/titcs/firm.md',
  },
  {
    slug: 'tokenomics/titcs/network',
    title: 'Network',
    description: 'CyberPump Network details',
    category: 'EcoLoop',
    order: 3,
    file: 'tokenomics/titcs/network.md',
  },
  {
    slug: 'tokenomics/titcs/onchain',
    title: 'On-Chain',
    description: 'On-chain mechanics',
    category: 'EcoLoop',
    order: 4,
    file: 'tokenomics/titcs/onchain.md',
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
    file: 'community/community.md',
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
    file: 'community/hub/story.md',
  },
  {
    slug: 'community/hub/audits',
    title: 'Audits',
    description: 'Security audits and transparency',
    category: 'Community',
    order: 4,
    file: 'community/hub/audits.md',
  },

  // Development
  {
    slug: 'development',
    title: 'Development',
    description: 'Developer resources and API',
    category: 'Development',
    order: 1,
    file: 'development/dev.md',
  },
  {
    slug: 'development/devtalks/devtalk-1',
    title: 'DevTalk #1',
    description: 'First developer talk',
    category: 'Development',
    order: 2,
    file: 'development/devtalks/devtalk1.md',
  },
  {
    slug: 'development/devtalks/devtalk-2',
    title: 'DevTalk #2',
    description: 'Second developer talk',
    category: 'Development',
    order: 3,
    file: 'development/devtalks/devtalk2.md',
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
