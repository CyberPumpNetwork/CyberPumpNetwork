'use client';

import { Callout } from './Callout';
import { Copy, Lock, Unlock } from 'lucide-react';
import { useScrollAndHighlight } from '@/hooks/useScrollAndHighlight';

// Wallet transparency component with animation support
interface WalletCard {
  id: string;
  icon: string;
  title: string;
  type: string;
  holdings: string;
  purpose: string;
  address: string;
  lockStatus: 'locked' | 'movable';
  lockType?: string;
}

const walletData: WalletCard[] = [
  {
    id: 'dev-deploy',
    icon: '🔀',
    title: 'Dev Wallet / Deploy Wallet',
    type: 'KasWare Wallet',
    holdings: '20,000,000 $CYPU',
    purpose:
      'Core development reserves. This is the seed for bridging kas.me to regulated opportunities - angel investments, BaFin-compliant tools, and ecosystem expansions. Fully transferable, under direct control. ONLY movable wallet - this is the only potential dump risk, but earmarked for BaFin-compliant Private Sale (300K€ threshold).',
    address: 'kaspa:qrxnnfj0kh0v67cwkyr3w6wjg7hz5h39s2nfs5gvt5g79hrw4f94cxmlzc6l3',
    lockStatus: 'movable',
  },
  {
    id: 'vault',
    icon: '🔐',
    title: 'CYPUV Vault',
    type: 'Tangem Wallet',
    holdings: '54,550,002 $CYPU',
    purpose:
      'The unbreakable foundation. Backs the $CYPUV governance token 1:1. Locked for the long-term health of kas.me - currently immovable due to Tangem not supporting KRC-20 movement for our tokens. Multi-custodian access.',
    address: 'kaspa:qyp3nmjyfkfk894kksm476wj484xcudt0jmm5dpp9hzuypn0vgp80zqdhk8q5vs',
    lockStatus: 'locked',
    lockType: 'Tangem Hardware Lock',
  },
  {
    id: 'firm',
    icon: '🏢',
    title: 'Firm Wallet',
    type: 'Tangem Wallet',
    holdings: '54,550,001 $CYPU',
    purpose:
      'Stabilizing the firm\'s core during formation. Reserved for operational backbone and ecosystem stability. Immovable at present due to Tangem KRC-20 limitations; direct password control for seamless oversight when Tangem support arrives.',
    address: 'kaspa:qype2qnvg6wy6a6ytpt0d6rt5jhcrfwhdzhfc8nexua5ax62sl0qqnsqywx4t26',
    lockStatus: 'locked',
    lockType: 'Tangem Hardware Lock',
  },
  {
    id: 'dev-ops',
    icon: '⚙️',
    title: 'Developer Operations Wallet',
    type: 'Tangem Wallet',
    holdings: '901.986 $CYPU',
    purpose:
      'Hands-on innovation hub. Every mint from the kas.me bot flows here, alongside premint dev allocations. Used for testing the minting system, rolling out website features, bot refinements, and rapid prototyping. Immovable for now; multi-custodian to keep momentum secure.',
    address: 'kaspa:qypj6g2yp5s94ds5cl9sejmcw9420qwzsrdpnud0khjawegnx3tn8pcfyjy2uwr',
    lockStatus: 'locked',
    lockType: 'Tangem Hardware Lock',
  },
  {
    id: 'seed',
    icon: '🌱',
    title: 'Initial Seed / CyberPumpNetwork Operational System',
    type: 'KasWare Wallet',
    holdings: '3,094 $CYPU',
    purpose:
      'The spark of the network. Early operational liquidity for CyberPumpNetwork bootstrapping - small-scale testing, initial transfers, and system health checks. Transferable and under direct control for agile starts.',
    address: 'kaspa:qq8evllddq4dsqekuclrwttpvr7r86qq90vnpjyhwmvmky7sywerqqhm22gwh',
    lockStatus: 'movable',
  },
];

function copyToClipboard(address: string) {
  navigator.clipboard.writeText(address);
  alert('Address copied!');
}

export function WalletsContent() {
  const { highlightedId, getAnimationClasses, getAnimationStyles } = useScrollAndHighlight({
    rotations: 2,
    rotationDuration: 3000,
    glowDuration: 2000
  });

  return (
    <div className="space-y-12">
      {/* Keyframe animations */}
      <style>{getAnimationStyles()}</style>

      {/* Lock Status Banner */}
      <Callout type="info" title="159.1M $CYPU Locked - Only 20M Movable">
        LOCKED: 109.1M Tangem (Firm 54.55M + Vault 54.55M) + 50M L1 sale orders = 159.1M locked. MOVABLE: 20M Dev Wallet (KasWare) - only dump risk, earmarked for BaFin Private Sale. This page shows all firm wallets and their lock status.
      </Callout>

      {/* Hero Section */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Wallet Transparency</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Full visibility into The IT CyberSpace's holdings. No shadows. No secrets. Just the structure that keeps us aligned. I'm documenting every wallet address, its purpose, and its lock status.
        </p>
      </div>

      {/* Built for the Long Game */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Our Wallets: Purpose, Holdings, and Controls</h2>

        <Callout type="success" title="Built for the Long Game">
          <div className="space-y-3 text-sm">
            <p>
              These aren't just addresses - they're the backbone of kas.me and the CyberPumpNetwork. Every wallet here serves a role: fueling development, securing the ecosystem, or bridging to real-world compliance. I've structured them with ironclad intent, from locked vaults that can't budge to operational hubs that power daily progress.
            </p>
            <p>
              Tangem wallets remain immovable for now - Tangem doesn't support KRC-20 movement for our tokens yet, stronger than any lock I could code. KasWare ones? Fluid, ready for the work ahead. Access is tiered: solo control where trust is absolute, multi-custodian everywhere else. This is how I honor those who mint, hold, and build with us.
            </p>
          </div>
        </Callout>
      </section>

      {/* Wallet Cards Grid */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">All Firm Wallets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {walletData.map((wallet) => (
            <div
              key={wallet.id}
              id={wallet.id === 'dev-deploy' ? 'dev-wallet' : undefined}
              className={`rounded-xl border p-6 space-y-4 transition-all duration-500 ${
                wallet.lockStatus === 'locked'
                  ? 'border-accent/30 bg-gradient-to-br from-accent/10 to-transparent'
                  : 'border-red-500/30 bg-gradient-to-br from-red-500/10 to-transparent'
              } ${
                wallet.id === 'dev-deploy' ? getAnimationClasses('dev-wallet') : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-4xl">{wallet.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{wallet.title}</h3>
                  {wallet.lockStatus === 'locked' ? (
                    <div className="flex items-center gap-1 text-sm text-accent">
                      <Lock className="w-3 h-3" />
                      <span>LOCKED</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-sm text-red-500">
                      <Unlock className="w-3 h-3" />
                      <span>MOVABLE</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Type
                  </p>
                  <p className="font-medium">{wallet.type}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Holdings
                  </p>
                  <p className="font-medium text-lg">{wallet.holdings}</p>
                </div>

                {wallet.lockType && (
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Lock Type
                    </p>
                    <p className="text-sm text-accent">{wallet.lockType}</p>
                  </div>
                )}

                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Purpose
                  </p>
                  <p className="text-sm leading-relaxed">{wallet.purpose}</p>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(wallet.address)}
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4" />
                Copy Address
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* L1 Public Sale Note */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Additional Lock: L1 Public Sale</h2>

        <Callout type="success" title="50M $CYPU Locked in L1 Sale Orders">
          <p className="text-sm">
            Beyond the wallets shown above, 50,000,000 $CYPU are locked as sale orders on KaspaCom L1 Marketplace. These tokens cannot be moved until purchased by users - creating an effective supply lock. This brings the total firm-locked amount to 159,100,003 $CYPU.
          </p>
        </Callout>
      </section>

      {/* Status Note */}
      <section className="space-y-6">
        <Callout type="info" title="Status as of November 07, 2025">
          <div className="space-y-3 text-sm">
            <p>
              Holdings reflect real-time ecosystem flows. Tangem immovability isn't a choice - it's our current edge, turning vaults into fortresses. I'm not hiding; I'm hardening. Verify any address on-chain.
            </p>
            <p className="font-semibold text-accent">
              This transparency? It's the code I live by.
            </p>
          </div>
        </Callout>
      </section>

      {/* Final Callout: No Exits. No Dumps. */}
      <section className="space-y-6">
        <div className="max-w-2xl mx-auto">
          <Callout type="danger">
            <div className="text-center space-y-3">
              <p className="text-lg font-bold">
                No Exits. No Dumps.
              </p>
              <p className="text-base font-semibold">
                These tokens fuel the build - not the sell.
              </p>
              <p className="text-base">
                Your trust is my alignment.
              </p>
            </div>
          </Callout>
        </div>
      </section>

      {/* Lock Summary */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">The Bottom Line</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <Callout type="info" title="Total Lock Breakdown">
            <div className="space-y-2 text-sm">
              <p><strong>Tangem Locked:</strong> 109,100,003 $CYPU (Firm 54.55M + Vault 54.55M + Dev Ops 0.902M + Seed 0.003M)</p>
              <p><strong>L1 Sale Orders:</strong> 50,000,000 $CYPU (locked until users purchase)</p>
              <p><strong>Total Locked:</strong> 159,100,003 $CYPU</p>
              <p className="text-red-500"><strong>Movable:</strong> 20,000,000 $CYPU (Dev Wallet - only dump risk)</p>
            </div>
          </Callout>

          <p className="text-center text-muted-foreground">
            <strong>Verify on-chain:</strong> All addresses are publicly visible. Transparency first.
          </p>
        </div>
      </section>
    </div>
  );
}
