'use client';

import { Sprout, ChartLine, Brain, Crown, ChevronDown } from 'lucide-react';
import { Callout } from './Callout';
import { TOKENOMICS } from '@/lib/tokenomics-data';
import { useState } from 'react';

interface Feature {
  title: string;
  requirement: string;
  description: string;
  upgradeLink?: string;
}

interface FeatureCategory {
  id: string;
  icon: typeof Sprout;
  title: string;
  description: string;
  features: Feature[];
  color: 'basic' | 'analytics' | 'intelligence' | 'elite';
}

const featureCategories: FeatureCategory[] = [
  {
    id: 'basic',
    icon: Sprout,
    title: 'Basic',
    description: 'Entry-level access for new users – hold at least 1 $CYPU for lifetime essentials.',
    color: 'basic',
    features: [
      {
        title: 'Basic Access',
        requirement: 'Own 1 $CYPU',
        description: 'Access to Total Capital, PnL (Profit/Loss). Lifetime as long as you hold at least 1 token.',
      },
      {
        title: 'Basic Analytics',
        requirement: 'Own 5 $CYPU',
        description: 'Evolution over time, behavior, and holding patterns. Lifetime access via holding.',
      },
      {
        title: 'Wallet Locking',
        requirement: 'Pay 10 $CYPU per lock',
        description: 'Restrict visibility to "user-owned" wallets. One-time payment for 1 month per lock.',
      },
      {
        title: 'Multi Wallet +1',
        requirement: 'Own 15 $CYPU',
        description: 'Add one wallet to dashboard. Lifetime via holding (cumulative).',
      },
    ],
  },
  {
    id: 'analytics',
    icon: ChartLine,
    title: 'Analytics',
    description: 'Deeper insights for growing users – hold 100+ $CYPU for performance tools.',
    color: 'analytics',
    features: [
      {
        title: 'Multi Wallet +',
        requirement: 'Own 30-100 $CYPU',
        description: 'Add additional wallets (cumulative). Lifetime via holding.',
      },
      {
        title: 'Analytics Plus (DCA)',
        requirement: 'Own 1,000 $CYPU',
        description: 'General Buy and Sell Areas, DCA (Dollar-Cost Averaging), market performance. Lifetime via holding.',
      },
      {
        title: 'Analytics Plus Plus',
        requirement: 'Pay 1,000 $CYPU',
        description: 'DCA and more, including possible leverage (consider risks). One-time for 1 month.',
      },
      {
        title: 'Analytics Trader',
        requirement: 'Pay 2,500 $CYPU',
        description: 'Liquidation prices, leveraged positions. One-time for 1 month.',
      },
    ],
  },
  {
    id: 'intelligence',
    icon: Brain,
    title: 'Intelligence',
    description: 'Pro tools for strategic users – hold 2,500+ $CYPU for center access.',
    color: 'intelligence',
    features: [
      {
        title: 'Intelligence Pro',
        requirement: 'Own 2,500 $CYPU',
        description: 'Access to Intelligence Center. Lifetime via holding.',
      },
      {
        title: 'Intelligence Pro Plus',
        requirement: 'Own 5,000 $CYPU',
        description: 'Access to Intelligence Center, Pro Version. Lifetime via holding.',
      },
      {
        title: 'AI Analytics',
        requirement: 'Pay 10,000 $CYPU',
        description: 'AI-system (Candle Analysis and more). One-time for 1 month.',
      },
      {
        title: 'AI Prognoses',
        requirement: 'Pay 15,000 $CYPU',
        description: 'AI-powered Forecasts (details reserved). One-time for 1 month.',
      },
    ],
  },
  {
    id: 'elite',
    icon: Crown,
    title: 'Elite',
    description: 'Reserved for future expansions – hold 20,000+ $CYPU for elite access.',
    color: 'elite',
    features: [
      {
        title: 'Planned Features',
        requirement: 'Own 20,000+ $CYPU',
        description: 'Elite features for high holders are secret.',
      },
    ],
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg border border-border bg-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <h3 className="font-semibold">{feature.title}</h3>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 space-y-2 text-sm">
          <p className="text-accent font-medium">{feature.requirement}</p>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      )}
    </div>
  );
}

function CategorySection({ category }: { category: FeatureCategory }) {
  const [isOpen, setIsOpen] = useState(true);
  const Icon = category.icon;

  return (
    <div className="rounded-lg border border-border bg-card p-6 space-y-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">{category.title}</h2>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="space-y-4">
          <p className="text-muted-foreground">{category.description}</p>
          <div className="space-y-3">
            {category.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function FeaturesContent() {
  return (
    <div className="space-y-12">
      {/* Development Status Banner */}
      <Callout type="info" title="Platform Features Status">
        Feature architecture implemented: Blockchain data layer operational (Kaspa nodes synced), ML training infrastructure running internally, Worker mesh tested. Access control system built. Public deployment awaits BaFin approval. This page documents the feature tiers based on {TOKENOMICS.CYPU.ticker} holdings.
      </Callout>

      {/* Hero Section */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Platform Features</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Unlock the full potential of kas.me – discover features I'm building for the Kaspa ecosystem. From basic access to advanced analytics, my {TOKENOMICS.CYPU.ticker} token-based tiers give you lifetime value based on your holdings.
        </p>
      </div>

      {/* Essential Features */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Essential Features</h2>

        <div className="space-y-6">
          {featureCategories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">How Feature Tiers Work</h2>

        <Callout type="tip" title="Lifetime Access via Holding">
          <div className="space-y-3 text-sm">
            <p>
              <strong>Hold-Based Features:</strong> Features marked "Own X {TOKENOMICS.CYPU.ticker}" require you to hold that amount in your wallet. As long as you maintain the balance, you keep lifetime access.
            </p>
            <p>
              <strong>Pay-Per-Use Features:</strong> Features marked "Pay X {TOKENOMICS.CYPU.ticker}" require a one-time payment for 1 month of access. You spend the tokens to unlock the feature temporarily.
            </p>
            <p>
              <strong>Cumulative Benefits:</strong> Some features (like Multi Wallet) stack - holding 30 {TOKENOMICS.CYPU.ticker} gives you the benefits from 1, 5, 15, AND 30 tiers.
            </p>
          </div>
        </Callout>
      </section>

      {/* BaFin/MiCA Compliance */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Critical Regulatory Compliance</h2>

        <Callout type="danger" title="Utility Access - Not Investment Returns">
          <div className="space-y-3 text-sm">
            <p>
              <strong>BaFin/MiCA Compliance:</strong> {TOKENOMICS.CYPU.ticker} is a {TOKENOMICS.CYPU.classification}. Holding tokens grants platform access, NOT profit participation or investment returns.
            </p>
            <p>
              <strong>Purpose:</strong> {TOKENOMICS.CYPU.purpose}. Features are utility services you unlock by holding or spending tokens.
            </p>
            <p>
              <strong>No Guarantees:</strong> Token price is market-determined. Feature deployment is staged based on infrastructure readiness and regulatory clarity. Core systems operational, advanced features in phased rollout.
            </p>
            <p className="font-semibold">
              Holding {TOKENOMICS.CYPU.ticker} does not constitute an investment contract. You're paying for utility services, not buying securities.
            </p>
          </div>
        </Callout>
      </section>

      {/* What EXISTS vs What DOESN'T */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Current Status (Honest Assessment)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-bold mb-4">What EXISTS</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>Feature tier design (this documentation)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>{TOKENOMICS.CYPU.ticker} token-based access system concept</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>Lifetime hold-based access model</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>Transparent tier requirements</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-bold mb-4">What DOES NOT EXIST</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span>Platform implementation (in development)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span>Live feature access system</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span>Intelligence Center (planned)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span>AI Analytics (planned)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span>Public launch date or timeline</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">The Bottom Line</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <Callout type="info" title="Feature Architecture - Pre-Approval Phase">
            <p>
              The feature tiers documented here represent the platform architecture I've built. Infrastructure operational internally: Kaspa nodes, ML training, Worker mesh tested. DeFi components (tokens, PEG pool) live on-chain. Platform access system awaits BaFin approval for public deployment. This is not vaporware - it's pre-approval development with functional code.
            </p>
          </Callout>

          <p className="text-center text-muted-foreground">
            <strong>Status:</strong> Feature architecture implemented. DeFi components live publicly. Platform software built and tested internally, awaits BaFin approval for public access.
          </p>

          <Callout type="tip" title="Why Document Unbuilt Features?">
            <p className="text-sm">
              Transparency. I could hide the roadmap until everything's built, but I'm choosing to document the utility model upfront. This shows exactly what {TOKENOMICS.CYPU.ticker} is designed to unlock - pure platform access, not investment returns. Honesty over hype.
            </p>
          </Callout>
        </div>
      </section>
    </div>
  );
}

export default FeaturesContent;
