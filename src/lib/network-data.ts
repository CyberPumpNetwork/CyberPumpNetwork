// SINGLE SOURCE OF TRUTH for all CyberPumpNetwork metrics
// ⚠️ NEVER hardcode performance numbers in components - ALWAYS import from this file

export const NETWORK_DATA = {
  PERFORMANCE: {
    latency: {
      regional: '<5ms',
      description: 'Regional latency between nodes in same geographic zone',
    },
    throughput: {
      ordersPerSecond: '40k+',
      description: 'Maximum orders per second capacity (theoretical)',
    },
    auditTrail: {
      eventProcessing: '0.051ms',
      description: 'Time to process and log each event cryptographically',
    },
  },
  ARCHITECTURE: {
    layers: [
      {
        name: 'Layer 1: Godfather Nodes',
        role: 'Broadcasters',
        technology: 'libp2p gossipsub',
        functions: [
          'P2P message broadcasting',
          'No central coordination',
          'Regional distribution',
        ],
      },
      {
        name: 'Layer 2: Worker Nodes',
        role: 'Validators & Processors',
        technology: 'Multi-source validation',
        functions: [
          'Multi-source validation',
          'Process analytics',
          'Serve API requests',
          'Regional databases',
        ],
      },
      {
        name: 'Layer 3: Platform',
        role: 'End Users',
        technology: 'React + REST API + WebSocket',
        functions: [
          'React web interface',
          'REST API access',
          'WebSocket streams',
          'Token-gated features',
        ],
      },
    ],
  },
  COMPLIANCE: {
    killSwitch: {
      type: 'Manual emergency shutdown',
      status: 'Designed (not yet deployed)',
    },
    preTradeControls: {
      status: 'Design phase',
      features: [
        'Validates trades BEFORE execution',
        'Position limits enforcement',
        'DORA concentration (max 40% per exchange)',
        'Margin requirement checks',
      ],
    },
    auditTrail: {
      status: 'Implemented',
      technology: 'HMAC-SHA256 cryptographic signatures',
      features: [
        'Tamper-proof event logging',
        'Hash chain verification',
        '0.051ms per event processing',
      ],
    },
  },
  SECURITY: {
    cryptography: 'HMAC-SHA256',
    validation: 'Multi-source (prevents single-node manipulation)',
    failover: 'No single point of failure',
  },
  STATUS: {
    code: 'Exists in repository',
    deployment: 'Not live',
    testing: 'Development phase',
  },
} as const

// Export type for TypeScript autocomplete
export type NetworkData = typeof NETWORK_DATA

// Hook for React components
export function useNetworkData() {
  return NETWORK_DATA
}

// Helper to format latency values
export function formatLatency(ms: string): string {
  return ms
}

// Helper to get layer by index
export function getNetworkLayer(index: 0 | 1 | 2) {
  return NETWORK_DATA.ARCHITECTURE.layers[index]
}
