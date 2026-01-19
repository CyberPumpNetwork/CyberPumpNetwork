'use client';

import { Callout } from './Callout';
import { TOKENOMICS } from '@/lib/tokenomics-data';
import { Sprout, ChartLine, Brain, Crown, TrendingUp, BarChart3, LineChart, Zap, Database, Shield } from 'lucide-react';

interface ComparisonTool {
  name: string;
  strengths: string[];
  limitations: string[];
}

interface DetailedFeature {
  id: string;
  icon: typeof Sprout;
  tier: string;
  title: string;
  requirement: string;
  description: string;
  technicalDetails: string;
  comparison: {
    existingTools: ComparisonTool[];
    kasMeApproach: string;
    advantage: string;
  };
  implementation: {
    exists: boolean;
    status: string;
  };
}

const detailedFeatures: DetailedFeature[] = [
  {
    id: 'basic-access',
    icon: Sprout,
    tier: 'Basic',
    title: 'Total Capital & PnL Tracking',
    requirement: 'Own 1 $CYPU',
    description: 'Real-time portfolio tracking across all Kaspa wallets with profit/loss calculation.',
    technicalDetails: 'Aggregates wallet balances, transaction history, and token holdings across multiple addresses. Calculates unrealized and realized gains based on acquisition cost and current market prices.',
    comparison: {
      existingTools: [
        {
          name: 'CoinGecko Portfolio',
          strengths: ['Multi-chain support', 'Price alerts'],
          limitations: ['Manual entry required', 'No Kaspa KRC-20 support', 'Limited analytics']
        },
        {
          name: 'Koinly',
          strengths: ['Tax reporting', 'Exchange integration'],
          limitations: ['No Kaspa support', 'Paid service', 'No real-time tracking']
        }
      ],
      kasMeApproach: 'Direct Kaspa blockchain integration with automatic wallet discovery. Zero manual entry - I pull all data directly from on-chain sources.',
      advantage: 'First tool built specifically for Kaspa ecosystem. Native KRC-20 token support with real-time updates.'
    },
    implementation: {
      exists: false,
      status: 'Blockchain data layer operational (Kaspa nodes synced). UI components in development, wallet discovery logic implemented.'
    }
  },
  {
    id: 'analytics-plus',
    icon: ChartLine,
    tier: 'Analytics',
    title: 'DCA & Market Performance',
    requirement: 'Own 1,000 $CYPU',
    description: 'Dollar-Cost Averaging calculator, buy/sell zone analysis, and market performance metrics.',
    technicalDetails: 'Historical price data analysis with custom DCA simulation. Identifies optimal buy/sell zones using statistical models (Bollinger Bands, RSI, volume analysis). Tracks portfolio performance against benchmarks.',
    comparison: {
      existingTools: [
        {
          name: 'TradingView',
          strengths: ['Advanced charting', 'Indicators library', 'Social features'],
          limitations: ['Generic - not Kaspa-specific', 'No portfolio integration', 'Subscription required']
        },
        {
          name: 'Coinglass',
          strengths: ['Liquidation data', 'Funding rates', 'Open interest'],
          limitations: ['No Kaspa support', 'Focuses on derivatives', 'No DCA tools']
        }
      ],
      kasMeApproach: 'Kaspa-native DCA calculator that factors in block time, network fees, and KRC-20 token dynamics. Buy/sell zones calibrated specifically for Kaspa volatility patterns.',
      advantage: 'Only tool offering Kaspa-specific DCA strategies. Integrates directly with portfolio - no external data needed.'
    },
    implementation: {
      exists: false,
      status: 'Statistical engine designed. Awaiting historical data pipeline completion.'
    }
  },
  {
    id: 'intelligence-center',
    icon: Brain,
    tier: 'Intelligence',
    title: 'Intelligence Center (Pro)',
    requirement: 'Own 2,500 $CYPU',
    description: 'Advanced analytics hub with whale tracking, network health monitoring, and predictive models.',
    technicalDetails: 'Real-time whale wallet monitoring (>1M KAS holdings), mempool analysis, hashrate tracking, and DAG metrics. Machine learning models for price prediction based on on-chain activity patterns.',
    comparison: {
      existingTools: [
        {
          name: 'Glassnode',
          strengths: ['On-chain metrics', 'Institutional grade', 'Research reports'],
          limitations: ['Bitcoin/Ethereum focus', 'No Kaspa support', 'Expensive ($800/mo)']
        },
        {
          name: 'Nansen',
          strengths: ['Wallet labeling', 'Smart money tracking', 'Token profiler'],
          limitations: ['EVM chains only', 'No UTXO support', 'Premium pricing']
        },
        {
          name: 'Santiment',
          strengths: ['Social sentiment', 'Development activity', 'Network growth'],
          limitations: ['Limited Kaspa coverage', 'Generic metrics', 'Subscription model']
        }
      ],
      kasMeApproach: 'Built from scratch for Kaspa\'s UTXO model and blockDAG architecture. I track unique Kaspa metrics: DAG tips, block confirmation patterns, KRC-20 mint activities. Whale tracking uses native Kaspa address clustering.',
      advantage: 'Bloomberg Terminal quality for Kaspa. No competitor offers Kaspa-specific intelligence at this depth.'
    },
    implementation: {
      exists: false,
      status: 'Architecture designed. Requires full Kaspa node cluster and ML infrastructure.'
    }
  },
  {
    id: 'ai-analytics',
    icon: Brain,
    tier: 'Intelligence',
    title: 'AI-Powered Analytics',
    requirement: 'Pay 10,000 $CYPU',
    description: 'Machine learning models for candle pattern recognition, trend prediction, and anomaly detection.',
    technicalDetails: 'Convolutional neural networks trained on Kaspa price history. Pattern recognition for classic formations (head-shoulders, triangles, flags). Anomaly detection for unusual network activity or price movements.',
    comparison: {
      existingTools: [
        {
          name: 'TrendSpider',
          strengths: ['Automated pattern recognition', 'Backtesting', 'Multi-timeframe analysis'],
          limitations: ['Generic crypto support', 'No Kaspa data', 'Expensive']
        },
        {
          name: 'Cryptohopper AI',
          strengths: ['Trading bot integration', 'Strategy marketplace'],
          limitations: ['No Kaspa exchange support', 'Black box models', 'Subscription lock-in']
        }
      ],
      kasMeApproach: 'AI models trained exclusively on Kaspa data (price, volume, on-chain metrics). I combine technical analysis with blockchain-specific signals (hashrate changes, large transfers, smart contract activity).',
      advantage: 'First AI system tuned for Kaspa market dynamics. Transparent model explanations - no black boxes.'
    },
    implementation: {
      exists: false,
      status: 'Detection algorithms operational (DBSCAN clustering live on ML node). Frontend dashboard in development, alert system pending.'
    }
  },
  {
    id: 'elite-features',
    icon: Crown,
    tier: 'Elite',
    title: 'Elite Features (Reserved)',
    requirement: 'Own 20,000+ $CYPU',
    description: 'Ultimate toolkit for institutional-grade analysis - framework defined, phased deployment.',
    technicalDetails: 'Architecture designed: Custom API access (REST + GraphQL), institutional reporting templates, advanced risk management algorithms, priority Worker routing. Deployment phased: Core features Year 2-3, full institutional suite Year 3-5.',
    comparison: {
      existingTools: [
        {
          name: 'Bloomberg Terminal',
          strengths: ['Industry standard', 'Real-time data', 'News integration', 'Professional tools'],
          limitations: ['$24,000/year', 'Traditional finance focus', 'No crypto-native features']
        }
      ],
      kasMeApproach: 'Building the Bloomberg Terminal for Kaspa - but at a fraction of the cost. Elite tier unlocks institutional-grade tools accessible via {TOKENOMICS.CYPU.ticker} holdings, not annual subscriptions.',
      advantage: 'Democratizing professional-grade crypto analytics. No $24k/year required.'
    },
    implementation: {
      exists: false,
      status: 'Specification in progress. Features secret until closer to launch.'
    }
  },
];

export function DetailedFeaturesContent() {
  return (
    <div className="space-y-12">
      {/* Development Status Banner */}
      <Callout type="info" title="Vision: The Ultimate Kaspa Analytics Platform">
        I'm building the Bloomberg Terminal for Kaspa - combining the best features from TradingView, Glassnode, Nansen, and Bloomberg into one unified platform. This page compares existing tools with my planned implementation.
      </Callout>

      {/* Hero Section */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Detailed Features: Tool Comparison</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Every tool you know - TradingView for charting, Glassnode for on-chain metrics, Bloomberg for professional analytics - I'm uniting them all into one Kaspa-native platform. Here's how each feature compares to existing solutions.
        </p>
      </div>

      {/* The Vision */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">The Vision: All Tools United</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              What Exists Today
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• TradingView: Best charting, but generic</li>
              <li>• Glassnode: Great on-chain data, no Kaspa</li>
              <li>• Bloomberg Terminal: Professional grade, $24k/year</li>
              <li>• Nansen: Smart money tracking, EVM only</li>
              <li>• Coinglass: Derivatives focus, no Kaspa</li>
              <li>• Each tool costs $50-800/month separately</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              What kas.me Will Be
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✓ All features in ONE platform</li>
              <li>✓ Built specifically for Kaspa ecosystem</li>
              <li>✓ Native KRC-20 token support</li>
              <li>✓ Real-time blockchain integration</li>
              <li>✓ Access via {TOKENOMICS.CYPU.ticker} holdings (not subscriptions)</li>
              <li>✓ Lifetime access - hold tokens, keep features</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Comparisons */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Feature-by-Feature Breakdown</h2>

        {detailedFeatures.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div key={feature.id} className="rounded-lg border border-border bg-card p-8 space-y-6">
              {/* Feature Header */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg border border-border bg-card flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">{feature.tier} Tier</span>
                    <span className="text-sm text-accent">{feature.requirement}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>

              {/* Technical Details */}
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Database className="w-4 h-4 text-accent" />
                  Technical Details
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.technicalDetails}
                </p>
              </div>

              {/* Comparison with Existing Tools */}
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-accent" />
                  Comparison with Existing Tools
                </h4>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {feature.comparison.existingTools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="rounded-lg border border-border bg-card p-4 space-y-3">
                      <h5 className="font-semibold">{tool.name}</h5>
                      <div className="space-y-2 text-sm">
                        <div>
                          <p className="text-muted-foreground mb-1">Strengths:</p>
                          <ul className="space-y-1">
                            {tool.strengths.map((strength, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span>✓</span>
                                <span className="text-muted-foreground">{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-muted-foreground mb-1">Limitations:</p>
                          <ul className="space-y-1">
                            {tool.limitations.map((limitation, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span>✗</span>
                                <span className="text-muted-foreground">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* kas.me Approach */}
                <div className="rounded-lg border border-border bg-card p-4 space-y-3">
                  <h5 className="font-semibold flex items-center gap-2">
                    <LineChart className="w-4 h-4 text-accent" />
                    kas.me Approach
                  </h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.comparison.kasMeApproach}
                  </p>
                  <div className="rounded bg-accent/10 border border-accent/30 p-3">
                    <p className="text-sm font-medium">
                      <span className="text-accent">Advantage:</span> {feature.comparison.advantage}
                    </p>
                  </div>
                </div>
              </div>

              {/* Implementation Status */}
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold mb-1">Implementation Status</h5>
                    <p className="text-sm text-muted-foreground">
                      {feature.implementation.exists ? (
                        <span className="text-accent">LIVE: {feature.implementation.status}</span>
                      ) : (
                        <span>PLANNED: {feature.implementation.status}</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* BaFin/MiCA Compliance */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Critical Regulatory Compliance</h2>

        <Callout type="danger" title="Utility Platform - Not Investment Advice">
          <div className="space-y-3 text-sm">
            <p>
              <strong>BaFin/MiCA Compliance:</strong> kas.me is an analytics platform. Tools and features provide data visualization and technical analysis - NOT investment advice or trading signals.
            </p>
            <p>
              <strong>Purpose:</strong> {TOKENOMICS.CYPU.ticker} grants access to platform features. Holding tokens does NOT guarantee profits, returns, or successful trades.
            </p>
            <p>
              <strong>No Guarantees:</strong> I make NO promises about feature accuracy, data completeness, or timeline. Analytics tools are provided "as is" for informational purposes.
            </p>
            <p className="font-semibold">
              Using kas.me does not constitute financial advice. All trading decisions are your own responsibility. Past performance does not indicate future results.
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
                <span>Feature specifications (this documentation)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>Tool comparison research</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>Technical architecture design</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✓</span>
                <span>Access tier structure ({TOKENOMICS.CYPU.ticker} holdings)</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-bold mb-4">What DOES NOT EXIST</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span>Live platform (in development)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span>Working features</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span>Kaspa node infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span>ML models (training phase)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✗</span>
                <span>Public launch date</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">The Bottom Line</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <Callout type="info" title="Vision vs. Reality">
            <p>
              I'm documenting my vision for the ultimate Kaspa analytics platform - combining TradingView's charting, Glassnode's on-chain data, Bloomberg's professional tools, and Nansen's whale tracking into one unified system. Timeline: Unknown. Nothing described here is live yet. This is the blueprint, not the product.
            </p>
          </Callout>

          <p className="text-center text-muted-foreground">
            <strong>Status:</strong> Architecture designed. Implementation in progress. No launch date set.
          </p>

          <Callout type="tip" title="Why Document Before Building?">
            <p className="text-sm">
              Transparency. I could wait until everything's finished and surprise the market. Instead, I'm documenting the vision upfront - showing exactly what existing tools lack and how kas.me will fill those gaps. This is the plan. Hold me accountable.
            </p>
          </Callout>
        </div>
      </section>
    </div>
  );
}

export default DetailedFeaturesContent;
