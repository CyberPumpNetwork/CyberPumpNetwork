import { useState, useCallback } from 'react'
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  getSmoothStepPath,
  type EdgeProps,
} from '@xyflow/react'
import type { Node, Edge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

// ============================================================================
// PROFESSIONAL GRID-BASED FRAMEWORK FOR TIMELINE VISUALIZATION
// ============================================================================

// === GRID CONFIGURATION ===
const GRID = {
  YEAR_WIDTH: 750,        // Width per year column (maximum clarity)
  QUARTER_WIDTH: 187.5,   // Width per quarter (750/4)
  BRANCH_HEIGHT: 130,     // Vertical spacing between branches (increased)
  START_YEAR: 2006,       // Timeline starts at school (compact early life)
};

const BRANCHES = {
  main: { y: 0, color: 'rgb(20, 184, 166)', solid: true, label: 'Life', bgClass: 'bg-accent/10 border-accent' },
  career: { y: 130, color: 'rgb(236 72 153)', solid: true, label: 'Career', bgClass: 'bg-pink-500/10 border-pink-500' },
  learning: { y: 260, color: 'rgb(234 179 8)', solid: false, label: 'Learning', bgClass: 'bg-yellow-500/10 border-yellow-500' },
  crypto: { y: 390, color: 'rgb(34 197 94)', solid: false, label: 'Crypto', bgClass: 'bg-green-500/10 border-green-500' },
  dev: { y: 520, color: 'rgb(59 130 246)', solid: false, label: 'Dev', bgClass: 'bg-blue-500/10 border-blue-500' },
  building: { y: 650, color: 'rgb(168 85 247)', solid: false, label: 'Building', bgClass: 'bg-purple-500/10 border-purple-500' },
} as const;

type BranchType = keyof typeof BRANCHES;

// === DATA STRUCTURES ===
interface Milestone {
  id: string;
  year: number;
  quarter: 1 | 2 | 3 | 4; // Q1-Q4 for precise positioning within year
  branch: BranchType;
  label: string;
  type?: 'milestone' | 'future';
  offset?: number; // Optional horizontal offset in pixels for overlapping nodes
}

interface Connection {
  from: string;
  to: string;
  animated?: boolean;
  sourceHandle?: 'top' | 'right' | 'bottom' | 'left';
  targetHandle?: 'top' | 'right' | 'bottom' | 'left';
  offset?: number; // Visual offset in pixels for overlapping edges
}

// === DATA DEFINITION (Single Source of Truth) ===
const MILESTONES: Milestone[] = [
  // === LIFE TIMELINE (MAIN BRANCH - CONTINUOUS BACKBONE) ===
  { id: 'school', year: 2006, quarter: 1, branch: 'main', label: 'School Start' },
  { id: 'age13', year: 2012, quarter: 1, branch: 'main', label: 'Age 13' },
  { id: 'age17', year: 2017, quarter: 1, branch: 'main', label: 'Age 17' },
  { id: 'age19', year: 2019, quarter: 1, branch: 'main', label: 'Age 19' },
  { id: 'age20', year: 2020, quarter: 1, branch: 'main', label: 'Age 20' },
  { id: 'age21', year: 2021, quarter: 1, branch: 'main', label: 'Age 21' },
  { id: 'age22', year: 2022, quarter: 1, branch: 'main', label: 'Age 22' },
  { id: 'age23', year: 2023, quarter: 1, branch: 'main', label: 'Age 23' },
  { id: 'age24', year: 2024, quarter: 1, branch: 'main', label: 'Age 24' },
  { id: 'age25', year: 2025, quarter: 1, branch: 'main', label: 'Age 25' },
  { id: 'age26', year: 2026, quarter: 1, branch: 'main', label: 'Age 26 (Now)' },
  { id: 'future', year: 2027, quarter: 1, branch: 'main', label: 'Future', type: 'future' },

  // === CAREER BRANCH (SOLID PINK - PROFESSIONAL DEVELOPMENT) ===
  { id: 'dropped-school', year: 2020, quarter: 2, branch: 'career', label: 'School Dropout' },
  { id: 'bank-training', year: 2020, quarter: 4, branch: 'career', label: 'IT Training Start' },
  { id: 'training-year1', year: 2021, quarter: 2, branch: 'career', label: 'Year 1 Complete' },
  { id: 'training-year2', year: 2022, quarter: 2, branch: 'career', label: 'Year 2 Complete' },
  { id: 'training-complete', year: 2023, quarter: 2, branch: 'career', label: 'Training Complete' },
  { id: 'software-coach', year: 2023, quarter: 3, branch: 'career', label: 'Software Coach' },
  { id: 'health-it', year: 2024, quarter: 1, branch: 'career', label: 'Health IT Dev' },
  { id: 'business-plan', year: 2024, quarter: 3, branch: 'career', label: 'Business Plan' },
  { id: 'it-cyberspace', year: 2025, quarter: 1, branch: 'career', label: 'The IT CyberSpace' },
  { id: 'self-employ-prep', year: 2025, quarter: 2, branch: 'career', label: 'Prep Independence' },
  { id: 'community-x', year: 2026, quarter: 1, branch: 'career', label: 'Community Building on X' },
  { id: 'q3-goal', year: 2026, quarter: 3, branch: 'career', label: 'Full Independence', type: 'future' },
  { id: 'community-worker-program', year: 2028, quarter: 3, branch: 'career', label: 'Community Worker Program', type: 'future' },
  { id: 'it-cyberspace-services', year: 2029, quarter: 2, branch: 'career', label: 'IT CyberSpace Services', type: 'future' },

  // === CRYPTO BRANCH (DASHED GREEN - FINANCIAL EXPLORATION) ===
  { id: 'curiosity-money', year: 2019, quarter: 1, branch: 'crypto', label: 'Money Curiosity' },
  { id: 'crypto-discovered', year: 2019, quarter: 2, branch: 'crypto', label: 'Found Crypto' },
  { id: 'money-lost', year: 2020, quarter: 1, branch: 'crypto', label: 'Money Lost' },
  { id: 'kaspa-heard', year: 2022, quarter: 2, branch: 'crypto', label: 'Kaspa = Scam?' },
  { id: 'perp-trading', year: 2023, quarter: 3, branch: 'crypto', label: 'Tried Trading' },
  { id: 'money-burned', year: 2023, quarter: 4, branch: 'crypto', label: 'Burned Again' },
  { id: 'kaspa-rediscovered', year: 2024, quarter: 2, branch: 'crypto', label: 'Kaspa Revisited' },
  { id: 'first-kaspa-buy', year: 2025, quarter: 1, branch: 'crypto', label: 'First KAS Buy' },
  { id: 'tokenomics-design', year: 2025, quarter: 2, branch: 'crypto', label: 'Tokenomics Design' },
  { id: 'token-launch', year: 2025, quarter: 4, branch: 'crypto', label: '$CYPU Token Launch' },
  { id: 'bafin-mica', year: 2026, quarter: 3, branch: 'crypto', label: 'BaFin / MiCA Path', type: 'future' },
  { id: 'investor-outreach', year: 2027, quarter: 1, branch: 'crypto', label: 'Investor Outreach', type: 'future' },
  { id: 'compliance-framework', year: 2027, quarter: 3, branch: 'crypto', label: 'Compliance Framework', type: 'future' },
  { id: 'ecoloop-integration', year: 2028, quarter: 2, branch: 'crypto', label: 'EcoLoop Integration', type: 'future' },
  { id: 'defi-peg', year: 2028, quarter: 4, branch: 'crypto', label: 'DeFi Mechanisms (PEG)', type: 'future' },
  { id: 'crypto-audits', year: 2029, quarter: 2, branch: 'crypto', label: 'Security Audits', type: 'future' },
  { id: 'governance-cypuv', year: 2029, quarter: 4, branch: 'crypto', label: '$CYPUV Governance', type: 'future' },

  // === LEARNING BRANCH (DASHED YELLOW - INTELLECTUAL GROWTH) ===
  { id: 'start-mining', year: 2019, quarter: 3, branch: 'learning', label: 'Start Mining' },
  { id: 'mining-attempts', year: 2019, quarter: 4, branch: 'learning', label: 'Mining Failed' },
  { id: 'learn-crypto', year: 2021, quarter: 1, branch: 'learning', label: 'Study Crypto' },
  { id: 'learn-economics', year: 2021, quarter: 2, branch: 'learning', label: 'Study Economics' },
  { id: 'btc-maxi', year: 2022, quarter: 1, branch: 'learning', label: 'BTC Maximalist' },
  { id: 'learn-markets', year: 2022, quarter: 3, branch: 'learning', label: 'Study Markets' },
  { id: 'frustrated-pause', year: 2023, quarter: 2, branch: 'learning', label: 'Frustrated' },
  { id: 'goosebumps', year: 2024, quarter: 3, branch: 'learning', label: 'Goosebumps!' },
  { id: 'btc-goodbye', year: 2024, quarter: 4, branch: 'learning', label: 'Bye BTC Maxi' },
  { id: 'deep-understanding', year: 2025, quarter: 1, branch: 'learning', label: 'Deep Knowledge' },
  { id: 'hft-research', year: 2025, quarter: 2, branch: 'learning', label: 'HFT Research' },
  { id: 'system-architecture', year: 2025, quarter: 4, branch: 'learning', label: 'Architecture' },
  { id: 'regulatory-learning', year: 2027, quarter: 3, branch: 'learning', label: 'Regulatory Deep Dive', type: 'future' },
  { id: 'mining-solar-impact', year: 2030, quarter: 2, branch: 'learning', label: 'Mining & Solar Impact', type: 'future' },

  // === DEV BRANCH (DASHED BLUE - DEVELOPMENT WORK) ===
  { id: 'backend-learn', year: 2017, quarter: 2, branch: 'dev', label: 'Java Backend' },
  { id: 'fw-plugin-dev', year: 2022, quarter: 3, branch: 'dev', label: 'FW Plugin Dev' },
  { id: 'gta', year: 2023, quarter: 2, branch: 'dev', label: 'GTA Server' },
  { id: 'qbcore', year: 2023, quarter: 4, branch: 'dev', label: 'QBCore Framework' },
  { id: 'rust-learning', year: 2024, quarter: 4, branch: 'dev', label: 'Rust Learning' },
  { id: 'api-layer', year: 2027, quarter: 2, branch: 'dev', label: 'API Layer (Internal)', type: 'future' },
  { id: 'api-docs', year: 2027, quarter: 4, branch: 'dev', label: 'Developer API Docs', type: 'future' },
  { id: 'multi-wallet', year: 2028, quarter: 2, branch: 'dev', label: 'Multi-Wallet Tracking', type: 'future' },

  // === BUILDING BRANCH (DASHED PURPLE - TECHNICAL PROJECTS & PRODUCTS) ===
  { id: 'minecraft', year: 2012, quarter: 2, branch: 'building', label: 'Minecraft Servers' },
  { id: 'freakyworld', year: 2022, quarter: 1, branch: 'building', label: 'FreakyWorld' },
  { id: 'freakyworld-end', year: 2024, quarter: 3, branch: 'building', label: 'FW Shutdown (50 Players)' },
  { id: 'platform-idea', year: 2025, quarter: 1, branch: 'building', label: 'kas.me Concept' },
  { id: 'devtalk-1', year: 2025, quarter: 4, branch: 'building', label: 'DevTalk #1 (Nov)' },
  { id: 'devtalk-2', year: 2025, quarter: 4, branch: 'building', label: 'DevTalk #2 (Dez)' },
  { id: 'current-dev', year: 2026, quarter: 2, branch: 'building', label: 'Active Dev' },
  { id: 'worker-node-arch', year: 2026, quarter: 4, branch: 'building', label: 'Worker Node Architecture', type: 'future' },
  { id: 'platform-dev', year: 2027, quarter: 2, branch: 'building', label: 'kas.me Platform Dev', type: 'future' },
  { id: 'platform-beta', year: 2027, quarter: 4, branch: 'building', label: 'Platform Public Beta', type: 'future' },
  { id: 'intelligence-center', year: 2028, quarter: 2, branch: 'building', label: 'Intelligence Center (ML)', type: 'future' },
  { id: 'worker-node-network', year: 2028, quarter: 4, branch: 'building', label: 'Worker Node Network', type: 'future' },
  { id: 'building-kasme', year: 2029, quarter: 4, branch: 'building', label: 'kas.me Full Launch', type: 'future' },
];

const CONNECTIONS: Connection[] = [
  // === LIFE TIMELINE (HORIZONTAL TREE TRUNK - ALL AGES CONNECTED RIGHT→LEFT) ===
  { from: 'school', to: 'age13', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'age13', to: 'age17', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'age17', to: 'age19', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'age19', to: 'age20', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'age20', to: 'age21', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'age21', to: 'age22', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'age22', to: 'age23', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'age23', to: 'age24', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'age24', to: 'age25', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'age25', to: 'age26', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'age26', to: 'future', sourceHandle: 'right', targetHandle: 'left', animated: true },

  // === CAREER BRANCH (FROM MAIN TIMELINE DOWNWARD, THEN HORIZONTAL) ===
  { from: 'age20', to: 'dropped-school', sourceHandle: 'bottom', targetHandle: 'top' },  // Age 20 → Career starts
  { from: 'dropped-school', to: 'bank-training', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'bank-training', to: 'training-year1', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'training-year1', to: 'training-year2', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'training-year2', to: 'training-complete', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'training-complete', to: 'software-coach', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'software-coach', to: 'health-it', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'health-it', to: 'business-plan', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'business-plan', to: 'it-cyberspace', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'it-cyberspace', to: 'self-employ-prep', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'self-employ-prep', to: 'community-x', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'community-x', to: 'q3-goal', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'q3-goal', to: 'community-worker-program', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'community-worker-program', to: 'it-cyberspace-services', sourceHandle: 'right', targetHandle: 'left', animated: true },

  // === CRYPTO BRANCH (FROM MAIN TIMELINE DOWNWARD, THEN HORIZONTAL) ===
  { from: 'age19', to: 'curiosity-money', sourceHandle: 'bottom', targetHandle: 'top' }, // Age 19 → Crypto starts
  { from: 'curiosity-money', to: 'crypto-discovered', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'crypto-discovered', to: 'money-lost', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'money-lost', to: 'kaspa-heard', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'kaspa-heard', to: 'perp-trading', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'perp-trading', to: 'money-burned', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'money-burned', to: 'kaspa-rediscovered', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'kaspa-rediscovered', to: 'first-kaspa-buy', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'first-kaspa-buy', to: 'tokenomics-design', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'tokenomics-design', to: 'token-launch', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'token-launch', to: 'bafin-mica', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'bafin-mica', to: 'investor-outreach', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'investor-outreach', to: 'compliance-framework', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'compliance-framework', to: 'ecoloop-integration', sourceHandle: 'bottom', targetHandle: 'left', animated: true },
  { from: 'compliance-framework', to: 'crypto-audits', sourceHandle: 'right', targetHandle: 'top', animated: true },
  { from: 'ecoloop-integration', to: 'defi-peg', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'crypto-audits', to: 'governance-cypuv', sourceHandle: 'right', targetHandle: 'left', animated: true },

  // === LEARNING BRANCH (FROM CAREER DOWNWARD, THEN HORIZONTAL) ===
  { from: 'bank-training', to: 'learn-crypto', sourceHandle: 'bottom', targetHandle: 'top' }, // From Career → Learning starts
  { from: 'start-mining', to: 'mining-attempts', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'learn-crypto', to: 'learn-economics', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'learn-economics', to: 'btc-maxi', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'btc-maxi', to: 'learn-markets', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'learn-markets', to: 'frustrated-pause', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'frustrated-pause', to: 'goosebumps', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'goosebumps', to: 'btc-goodbye', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'btc-goodbye', to: 'deep-understanding', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'deep-understanding', to: 'hft-research', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'hft-research', to: 'system-architecture', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'system-architecture', to: 'regulatory-learning', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'regulatory-learning', to: 'mining-solar-impact', sourceHandle: 'right', targetHandle: 'left', animated: true },

  // === DEV BRANCH (FROM CAREER DOWNWARD, THEN HORIZONTAL) ===
  { from: 'age17', to: 'backend-learn', sourceHandle: 'bottom', targetHandle: 'top' }, // Main → Dev (Age 17)
  { from: 'minecraft', to: 'backend-learn', sourceHandle: 'top', targetHandle: 'bottom' }, // Building → Dev
  { from: 'backend-learn', to: 'fw-plugin-dev', sourceHandle: 'right', targetHandle: 'left' }, // Backend → FW Plugin
  { from: 'training-complete', to: 'gta', sourceHandle: 'bottom', targetHandle: 'top' }, // From Career → Dev starts
  { from: 'freakyworld', to: 'fw-plugin-dev', sourceHandle: 'top', targetHandle: 'bottom' }, // Building → Dev (UP!)
  { from: 'learn-economics', to: 'fw-plugin-dev', sourceHandle: 'bottom', targetHandle: 'top', offset: -20 }, // Learning → Dev
  { from: 'learn-markets', to: 'fw-plugin-dev', sourceHandle: 'bottom', targetHandle: 'top', offset: 20 }, // Learning → Dev
  { from: 'fw-plugin-dev', to: 'gta', sourceHandle: 'right', targetHandle: 'left' }, // FW Plugin Dev → GTA
  { from: 'gta', to: 'qbcore', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'qbcore', to: 'rust-learning', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'rust-learning', to: 'api-layer', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'api-layer', to: 'api-docs', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'api-docs', to: 'multi-wallet', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'software-coach', to: 'qbcore', sourceHandle: 'bottom', targetHandle: 'top' }, // Career → Dev connection

  // === BUILDING BRANCH (FROM MAIN TIMELINE DOWNWARD, THEN HORIZONTAL) ===
  { from: 'age13', to: 'minecraft', sourceHandle: 'bottom', targetHandle: 'top' }, // Age 13 → Building starts
  { from: 'minecraft', to: 'freakyworld', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'freakyworld', to: 'freakyworld-end', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'freakyworld-end', to: 'platform-idea', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'platform-idea', to: 'devtalk-1', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'devtalk-1', to: 'devtalk-2', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'devtalk-2', to: 'current-dev', sourceHandle: 'right', targetHandle: 'left' },
  { from: 'current-dev', to: 'worker-node-arch', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'worker-node-arch', to: 'platform-dev', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'platform-dev', to: 'platform-beta', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'platform-beta', to: 'intelligence-center', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'intelligence-center', to: 'worker-node-network', sourceHandle: 'right', targetHandle: 'left', animated: true },
  { from: 'worker-node-network', to: 'building-kasme', sourceHandle: 'right', targetHandle: 'left', animated: true },

  // === CROSS-BRANCH CONNECTIONS (LOGICAL RELATIONSHIPS) ===
  // Crypto → Learning: Discoveries trigger learning
  { from: 'crypto-discovered', to: 'start-mining', sourceHandle: 'top', targetHandle: 'bottom' },
  { from: 'mining-attempts', to: 'money-lost', sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'money-lost', to: 'learn-crypto', sourceHandle: 'top', targetHandle: 'bottom' },
  { from: 'money-burned', to: 'frustrated-pause', sourceHandle: 'top', targetHandle: 'bottom' },
  
  // Learning → Crypto: Knowledge influences decisions
  { from: 'btc-maxi', to: 'kaspa-heard', sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'frustrated-pause', to: 'kaspa-rediscovered', sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'kaspa-rediscovered', to: 'goosebumps', sourceHandle: 'top', targetHandle: 'bottom' },
  { from: 'goosebumps', to: 'first-kaspa-buy', sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'first-kaspa-buy', to: 'btc-goodbye', sourceHandle: 'top', targetHandle: 'bottom' },
  { from: 'deep-understanding', to: 'tokenomics-design', sourceHandle: 'bottom', targetHandle: 'top' },
  
  // Career → Crypto: Income enables trading
  { from: 'training-complete', to: 'perp-trading', sourceHandle: 'bottom', targetHandle: 'top' },
  
  // Crypto/Learning → Dev: Kaspa interest leads to Rust
  { from: 'kaspa-rediscovered', to: 'rust-learning', sourceHandle: 'bottom', targetHandle: 'top', offset: -15 },
  { from: 'hft-research', to: 'rust-learning', sourceHandle: 'bottom', targetHandle: 'top', offset: 15 },
  
  // Building → Career: FW shutdown leads to business focus
  { from: 'freakyworld-end', to: 'business-plan', sourceHandle: 'top', targetHandle: 'bottom' },
  
  // Multiple branches → Building kas.me platform: 4 pillars converge
  { from: 'deep-understanding', to: 'platform-idea', sourceHandle: 'bottom', targetHandle: 'top', offset: -30 },
  { from: 'rust-learning', to: 'platform-idea', sourceHandle: 'bottom', targetHandle: 'top', offset: -10 },
  { from: 'it-cyberspace', to: 'platform-idea', sourceHandle: 'bottom', targetHandle: 'top', offset: 10 },
  { from: 'tokenomics-design', to: 'platform-idea', sourceHandle: 'bottom', targetHandle: 'top', offset: 30 },
  { from: 'token-launch', to: 'devtalk-1', sourceHandle: 'bottom', targetHandle: 'top' },
  
  // Main → Building: Current state
  { from: 'age22', to: 'freakyworld', sourceHandle: 'bottom', targetHandle: 'top' },
  { from: 'age26', to: 'current-dev', sourceHandle: 'bottom', targetHandle: 'top', animated: true },
  
  // Career → Crypto: IT Services enables governance
  { from: 'it-cyberspace-services', to: 'governance-cypuv', sourceHandle: 'right', targetHandle: 'left', animated: true },
  
  // === ENDPHASE 2029 Q4: CONVERGENCE ===
  // Building kas.me Platform → Token Governance (Platform needs governance)
  { from: 'building-kasme', to: 'governance-cypuv', sourceHandle: 'top', targetHandle: 'bottom', animated: true },
  
  // Worker Node Network → Token Economy (Nodes need token incentives)
  { from: 'worker-node-network', to: 'ecoloop-integration', sourceHandle: 'top', targetHandle: 'bottom', animated: true },
  { from: 'worker-node-network', to: 'defi-peg', sourceHandle: 'top', targetHandle: 'bottom', animated: true, offset: 20 },
  
  // Learning → Crypto: Regulatory knowledge feeds compliance
  { from: 'regulatory-learning', to: 'compliance-framework', sourceHandle: 'bottom', targetHandle: 'top', animated: true },
  
  // === DEV → BUILDING: APIs ENABLE PLATFORM ===
  // API Layer powers Platform Development (same quarter 2027 Q2)
  { from: 'api-layer', to: 'platform-dev', sourceHandle: 'bottom', targetHandle: 'top', animated: true },
  
  // API Docs ready for Platform Beta (same quarter 2027 Q4)
  { from: 'api-docs', to: 'platform-beta', sourceHandle: 'bottom', targetHandle: 'top', animated: true },
  
  // Multi-Wallet tracking feeds Intelligence Center (same quarter 2028 Q2)
  { from: 'multi-wallet', to: 'intelligence-center', sourceHandle: 'bottom', targetHandle: 'top', animated: true },
  
  // === CAREER → BUILDING: COMMUNITY ENABLES WORKER NODES ===
  // Community Worker Program feeds into Worker Node Network
  { from: 'community-worker-program', to: 'worker-node-network', sourceHandle: 'bottom', targetHandle: 'top', animated: true },
  
  // === BUILDING → CRYPTO: PLATFORM NEEDS COMPLIANCE ===
  // Platform Beta requires compliance check before full launch
  { from: 'platform-beta', to: 'compliance-framework', sourceHandle: 'top', targetHandle: 'bottom', animated: true },
];

// === FRAMEWORK: POSITION CALCULATOR ===
function calculatePosition(milestone: Milestone) {
  const yearOffset = milestone.year - GRID.START_YEAR;
  const x = yearOffset * GRID.YEAR_WIDTH + (milestone.quarter - 1) * GRID.QUARTER_WIDTH;
  const y = BRANCHES[milestone.branch].y;
  return { x, y };
}

// === CUSTOM EDGE COMPONENT WITH OFFSET SUPPORT ===
function OffsetEdge({ 
  id, 
  sourceX, 
  sourceY, 
  targetX, 
  targetY, 
  sourcePosition, 
  targetPosition, 
  style = {}, 
  markerEnd, 
  data,
}: EdgeProps) {
  const offset = (data?.offset as number) || 0;
  
  // Apply vertical offset to both source and target points
  const offsetSourceY = sourceY + offset;
  const offsetTargetY = targetY + offset;
  
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY: offsetSourceY,
    sourcePosition,
    targetX,
    targetY: offsetTargetY,
    targetPosition,
  });

  return (
    <path
      id={id}
      style={style}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
    />
  );
}

// === FRAMEWORK: EDGE STYLE GENERATOR ===
function getEdgeStyle(connection: Connection, milestones: Milestone[]) {
  const sourceNode = milestones.find(m => m.id === connection.from);
  const targetNode = milestones.find(m => m.id === connection.to);
  
  if (!sourceNode || !targetNode) return {
    stroke: '#888',
    strokeWidth: 2,
  };
  
  // Use target branch color for styling (except main branch connections)
  const branch = targetNode.branch === 'main' ? sourceNode.branch : targetNode.branch;
  const config = BRANCHES[branch];
  
  // Make main timeline thicker for better visibility
  const strokeWidth = branch === 'main' ? 3.5 : (config.solid ? 2.5 : 2);
  
  return {
    stroke: config.color,
    strokeWidth,
    strokeDasharray: config.solid ? undefined : '5,5',
  };
}

// === FRAMEWORK: NODE GENERATOR WITH COLLISION DETECTION ===
function generateNodes(milestones: Milestone[]): Node[] {
  const NODE_WIDTH = 180; // max-w-[180px]
  const NODE_SPACING = 25; // gap between overlapping nodes (increased)
  
  // Group milestones by position key (year + quarter + branch)
  const positionGroups = new Map<string, Milestone[]>();
  
  milestones.forEach(milestone => {
    const key = `${milestone.year}-${milestone.quarter}-${milestone.branch}`;
    if (!positionGroups.has(key)) {
      positionGroups.set(key, []);
    }
    positionGroups.get(key)!.push(milestone);
  });
  
  return milestones.map(milestone => {
    const key = `${milestone.year}-${milestone.quarter}-${milestone.branch}`;
    const group = positionGroups.get(key)!;
    const indexInGroup = group.indexOf(milestone);
    
    // Calculate base position
    const basePosition = calculatePosition(milestone);
    
    // Add horizontal offset for overlapping nodes
    if (group.length > 1 && indexInGroup > 0) {
      basePosition.x += indexInGroup * (NODE_WIDTH + NODE_SPACING);
    }
    
    return {
      id: milestone.id,
      type: milestone.type === 'future' ? 'future' : 'milestone',
      position: basePosition,
      data: {
        year: milestone.year.toString(),
        label: milestone.label,
        branch: milestone.branch,
      },
    };
  });
}

// === FRAMEWORK: EDGE GENERATOR ===
function generateEdges(connections: Connection[], milestones: Milestone[]): Edge[] {
  return connections.map(connection => ({
    id: `e-${connection.from}-${connection.to}`,
    source: connection.from,
    target: connection.to,    sourceHandle: connection.sourceHandle,
    targetHandle: connection.targetHandle,    type: connection.offset ? 'offsetEdge' : 'smoothstep',
    animated: connection.animated || false,
    style: getEdgeStyle(connection, milestones),
    data: connection.offset ? { offset: connection.offset } : undefined,
  }));
}

// === CUSTOM NODE COMPONENTS ===
function MilestoneNode({ data }: { data: any }) {
  const branchConfig = BRANCHES[data.branch as BranchType];
  
  return (
    <div className={`rounded-lg border-2 ${branchConfig.bgClass} backdrop-blur-sm px-3 py-2 shadow-md min-w-[120px] max-w-[180px]`}>
      {/* Dual handles: each position can be both source and target */}
      <Handle type="target" position={Position.Top} id="top" className="w-2 h-2" />
      <Handle type="source" position={Position.Top} id="top" className="w-2 h-2" style={{ opacity: 0 }} />
      
      <Handle type="target" position={Position.Left} id="left" className="w-2 h-2" />
      <Handle type="source" position={Position.Left} id="left" className="w-2 h-2" style={{ opacity: 0 }} />
      
      <div className="text-xs font-medium text-muted-foreground mb-1">{data.year}</div>
      <div className="text-sm font-semibold">{data.label}</div>
      
      <Handle type="target" position={Position.Right} id="right" className="w-2 h-2" />
      <Handle type="source" position={Position.Right} id="right" className="w-2 h-2" style={{ opacity: 0 }} />
      
      <Handle type="target" position={Position.Bottom} id="bottom" className="w-2 h-2" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="w-2 h-2" style={{ opacity: 0 }} />
    </div>
  );
}

function FutureNode({ data }: { data: any }) {
  const branchConfig = BRANCHES[data.branch as BranchType];
  
  return (
    <div className={`rounded-lg border-2 border-dashed ${branchConfig.bgClass} backdrop-blur-sm px-3 py-2 shadow-md min-w-[120px] max-w-[180px] opacity-70`}>
      {/* Dual handles: each position can be both source and target */}
      <Handle type="target" position={Position.Top} id="top" className="w-2 h-2" />
      <Handle type="source" position={Position.Top} id="top" className="w-2 h-2" style={{ opacity: 0 }} />
      
      <Handle type="target" position={Position.Left} id="left" className="w-2 h-2" />
      <Handle type="source" position={Position.Left} id="left" className="w-2 h-2" style={{ opacity: 0 }} />
      
      <div className="text-xs font-medium text-muted-foreground mb-1">{data.year}</div>
      <div className="text-sm font-semibold italic">{data.label}</div>
      
      <Handle type="target" position={Position.Right} id="right" className="w-2 h-2" />
      <Handle type="source" position={Position.Right} id="right" className="w-2 h-2" style={{ opacity: 0 }} />
      
      <Handle type="target" position={Position.Bottom} id="bottom" className="w-2 h-2" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="w-2 h-2" style={{ opacity: 0 }} />
    </div>
  );
}

const nodeTypes = {
  milestone: MilestoneNode,
  future: FutureNode,
};

// === MAIN COMPONENT ===
export function StoryRoadmap() {
  // Generate nodes and edges from data
  const initialNodes = generateNodes(MILESTONES);
  const initialEdges = generateEdges(CONNECTIONS, MILESTONES);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const edgeTypes = {
    offsetEdge: OffsetEdge,
  };

  return (
    <div className="w-full h-[600px] bg-background rounded-lg border relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        minZoom={0.1}
        maxZoom={1.5}
        defaultViewport={{ x: -4200, y: 250, zoom: 1.0 }}
        defaultEdgeOptions={{
          type: 'smoothstep',
          style: { strokeWidth: 2 },
        }}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
        <Controls />
      </ReactFlow>
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg border p-4 shadow-lg">
        <div className="text-sm font-semibold mb-2">Branch Legend</div>
        <div className="space-y-1 text-xs">
          {Object.entries(BRANCHES).map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-8 h-0.5"
                style={{
                  backgroundColor: config.color,
                  borderStyle: config.solid ? 'solid' : 'dashed',
                }}
              />
              <span>{config.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
