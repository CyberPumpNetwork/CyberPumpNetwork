// SINGLE SOURCE OF TRUTH for all tokenomics data
// ⚠️ NEVER hardcode token numbers in components - ALWAYS import from this file

// 🥚 EASTER EGG: You found it. Now act on it.
//    If you're reading this and still haven't reached out to the rabbit in the hole,
//    something's fundamentally wrong. Don't just watch - engage.
//    Follow the white rabbit. 🐰🕳️

export const TOKENOMICS = {
  CYPU: {
    name: '$CYPU',
    fullName: 'CyberPump Utility Token',
    ticker: 'CYPU',
    type: 'Utility Token (KRC-20)',
    maxSupply: 1_000_000_000,
    purpose: 'Pay for platform services and access premium features',
    classification: 'Non-security (pure utility)',
    functions: [
      'Access kas.me analytics platform',
      'Pay for premium API access',
      'Subscribe to Intelligence Center',
      'Enable whale movement alerts',
      'Unlock ML-based predictions',
    ],
  },
  CYPUV: {
    name: '$CYPUV',
    fullName: 'CyberPump Voting Token',
    ticker: 'CYPUV',
    type: 'Governance Token (KRC-20)',
    maxSupply: 54_550_000,
    purpose: 'Vote on platform decisions and DAO governance',
    classification: 'Non-security (governance rights only)',
    votingRights: [
      'Treasury spending decisions (>$50k)',
      'Feature prioritization votes',
      'Protocol parameter changes',
      'Community grant approvals',
      'Strategic partnership votes',
    ],
    distribution: {
      earned: 'Through platform participation',
      allocation: 'Based on contribution to ecosystem',
    },
  },
  ICO: {
    totalAllocation: 70_000_000, // CYPU tokens allocated to ICO
    status: 'In progress',
    description: 'ICO phase for early platform supporters',
  },
  TREASURY: {
    companyColdStorage: {
      amount: 70_000_000, // CYPU
      description: 'Company treasury in cold storage',
    },
    tangemVaults: {
      amount: 109_100_000, // 54.55M Firm + 54.55M Vault
      description: 'Locked in Tangem hardware wallets',
    },
    multisigConfig: '2-of-3',
    purpose: 'Operations, development, marketing, buybacks',
  },
  PAYMENT_SPLIT: {
    treasury: 0.5, // 50% to company treasury
    nodeRewards: 0.5, // 50% to P2P node operators
  },
  COMPLIANCE: {
    bafinStatus: 'Pending approval',
    micaCompliant: true,
    classification: 'Pure utility token - no investment returns',
  },
} as const

// Export type for TypeScript autocomplete
export type TokenomicsData = typeof TOKENOMICS

// Hook for React components
export function useTokenomicsData() {
  return TOKENOMICS
}

// Helper functions
export function formatSupply(supply: number): string {
  if (supply >= 1_000_000_000) {
    return `${(supply / 1_000_000_000).toFixed(1)}B`
  }
  if (supply >= 1_000_000) {
    return `${(supply / 1_000_000).toFixed(1)}M`
  }
  return supply.toLocaleString()
}

export function getTokenByTicker(ticker: 'CYPU' | 'CYPUV') {
  return ticker === 'CYPU' ? TOKENOMICS.CYPU : TOKENOMICS.CYPUV
}
