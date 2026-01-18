import { Callout } from '@/components/docs/Callout'
import { Brain, TrendingUp, Network, Zap, Target, Activity } from 'lucide-react'

export function IntelligenceCenterContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Intelligence Center</h1>
        <p className="text-muted-foreground">
          Advanced analytics hub powered by machine learning. Whale tracking, predictive models, and probabilistic market insights.
        </p>
      </div>

      {/* What It Is */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Brain className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">What Intelligence Center Does</h2>
        </div>

        <p className="text-muted-foreground">
          This is where raw blockchain data becomes probabilistic advantage. I'm not predicting prices - I'm reducing uncertainty, identifying market regimes, and positioning probabilistically ahead of time.
        </p>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <h3 className="text-xl font-bold">Core Capabilities</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>Whale wallet tracking (holdings &gt;1M KAS, accumulation patterns, distribution signals)</li>
            <li>ML-powered market regime detection (accumulation, distribution, equilibrium, panic, FOMO)</li>
            <li>Anomaly detection on transaction graphs (unusual wallet behavior, cluster movements)</li>
            <li>Volatility forecasting (GARCH models, confidence bands, risk metrics)</li>
            <li>Network health monitoring (hashrate trends, DAG metrics, mempool analysis)</li>
          </ul>
        </div>
      </section>

      {/* Mathematical Foundation */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Target className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">Mathematical Foundation</h2>
        </div>

        <p className="text-muted-foreground">
          Intelligence Center uses 70+ mathematical methods to extract signal from noise. This is my structured mental toolbox - not theory for theory's sake, but practical tools for reducing uncertainty.
        </p>

        <div className="grid gap-4">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Statistical Methods</h3>
            <p className="text-muted-foreground">
              <strong>Bayesian Statistics:</strong> Prior knowledge + new evidence → updated belief. P(Price ↑ | Whale Accumulation) evolves continuously.
            </p>
            <p className="text-muted-foreground">
              <strong>Law of Large Numbers:</strong> 1,000+ whales accumulating = statistically meaningful signal. Noise fades, trends remain.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Machine Learning</h3>
            <p className="text-muted-foreground">
              <strong>LSTM Networks:</strong> Long-term sequence learning for time series patterns. Bidirectional architecture with attention mechanism.
            </p>
            <p className="text-muted-foreground">
              <strong>XGBoost Ensembles:</strong> 100+ engineered features, Bayesian hyperparameter tuning. Feature importance reveals what actually matters.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Stochastic Processes</h3>
            <p className="text-muted-foreground">
              <strong>Hidden Markov Models:</strong> Market state transitions (Accumulation → Distribution → Equilibrium). Predict the regime, not the price.
            </p>
            <p className="text-muted-foreground">
              <strong>Monte Carlo Simulations:</strong> 10,000+ future paths. 90%, 95%, 99% confidence bands. Understand distributions, not single outcomes.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <h3 className="text-lg font-bold">Graph Neural Networks</h3>
            <p className="text-muted-foreground">
              <strong>Transaction Graph Intelligence:</strong> GraphSAGE and GAT models analyze wallet clusters, exchange flows, whale relationships.
            </p>
            <p className="text-muted-foreground">
              <strong>Anomaly Detection:</strong> Isolation Forest + Autoencoders flag abnormal whale behavior before it becomes obvious.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold">Intelligence Features</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <Network className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold">Whale Tracking</h3>
            <p className="text-muted-foreground">
              Real-time monitoring of wallets holding &gt;1M KAS. Accumulation patterns, distribution signals, cluster movements. DBSCAN clustering identifies coordinated behavior.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <Activity className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold">Regime Detection</h3>
            <p className="text-muted-foreground">
              Hidden Markov Models classify current market state: Accumulation, Distribution, Equilibrium, Panic, FOMO. State transitions signal regime changes before price confirms.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <Zap className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold">Volatility Forecasting</h3>
            <p className="text-muted-foreground">
              GARCH models predict volatility, not price. Risk prediction &gt; price prediction. Outputs: expected volatility bands, confidence intervals, regime-specific risk metrics.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <Brain className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold">Network Health</h3>
            <p className="text-muted-foreground">
              Hashrate trends, mempool patterns, DAG metrics. Kalman Filters extract true signals from noisy data. Early warning for network stress or unusual activity.
            </p>
          </div>
        </div>
      </section>

      {/* vs Traditional Indicators */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Intelligence Center vs Traditional Indicators</h2>

        <div className="rounded-lg border border-border bg-card p-6 space-y-4">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold mb-1">Traditional Chart Indicators (TradingView, Coinglass)</h3>
              <p className="text-muted-foreground">
                RSI, MACD, Bollinger Bands, Moving Averages. Based on price action alone. Lagging indicators that confirm what already happened.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Intelligence Center Approach</h3>
              <p className="text-muted-foreground">
                On-chain data + ML models + stochastic processes. Leading indicators based on wallet behavior, network metrics, probabilistic forecasting. Signal emerges before price moves.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Premium Communities (Dubious Signals)</h3>
              <p className="text-muted-foreground">
                Pay $50-500/month for "whale alerts", "smart money" calls. Often delayed, unverified, or based on incomplete data. No mathematical foundation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Intelligence Center Difference</h3>
              <p className="text-muted-foreground">
                Real-time on-chain analysis, 70+ mathematical methods, transparent methodology. Not "calls" - probabilistic insights with confidence intervals. You see the model, the data, the uncertainty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access Requirements */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Access Requirements</h2>

        <Callout type="info" title="Intelligence Tier">
          Intelligence Center requires holding 2,500 $CYPU minimum. This is not a paywall - it's stake-based access. Your holdings align your incentives with platform quality.
        </Callout>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Why 2,500 $CYPU Minimum?</h3>
          <p className="text-muted-foreground">
            Running ML models on blockchain data is computationally expensive. Godfather nodes process whale wallet tracking, LSTM inference, Monte Carlo simulations, GNN graph analysis. This is not cheap infrastructure.
          </p>
          <p className="text-muted-foreground">
            Higher tiers subsidize free/basic tiers. Intelligence users fund the infrastructure that makes free explorer access possible. This is the EcoLoop in action.
          </p>
        </div>
      </section>

      {/* What EXISTS vs What DOESN'T */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">What EXISTS vs What DOESN'T</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h3 className="text-lg font-bold">What Exists Today</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>✅ Godfather node ML training mode (GPU server training models on development infrastructure)</li>
              <li>✅ Mathematical methods library (70+ algorithms implemented and tested)</li>
              <li>✅ Whale wallet identification logic (DBSCAN clustering tested on blockchain data)</li>
              <li>✅ LSTM architecture (time series models trained on historical data)</li>
              <li>✅ Bayesian networks implemented (causal inference tested internally)</li>
              <li>✅ Monte Carlo simulation framework (10,000+ path generation functional)</li>
              <li>✅ XGBoost models (100+ features, hyperparameter optimization complete)</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <h3 className="text-lg font-bold">What Doesn't Exist Yet</h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>🔧 Public Intelligence Center UI (React components in active development, API integration pending)</li>
              <li>🔧 Real-time regime detection dashboard (backend operational, frontend visualization in progress)</li>
              <li>🔧 Whale alert system (detection logic live, notification UI + delivery system pending)</li>
              <li>🔧 Confidence interval visualizations (data generation ready, chart library integration active)</li>
              <li>⏸️ Custom model parameter tuning (backend framework ready, UI deferred to Elite tier release)</li>
            </ul>
          </div>
        </div>

        <Callout type="info" title="ML Infrastructure Operational - Pre-Approval Phase">
          <strong>Development infrastructure running:</strong> ML models training internally, 70+ algorithms tested, whale detection logic functional. <strong>Not public-facing:</strong> Code works on development servers. Public deployment requires BaFin approval. The ML engine is built and tested - regulatory clearance gates public access.
        </Callout>
      </section>

      {/* Legal & Compliance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Legal & Compliance</h2>

        <Callout type="warning" title="BaFin/MiCA Compliance Notice">
          Intelligence Center provides analytical tools, NOT financial advice. All outputs are probabilistic insights based on mathematical models. This is NOT investment advice, portfolio management, or regulated financial services under BaFin or MiCA frameworks.
        </Callout>

        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="text-lg font-bold">Risk Disclosure</h3>
          <p className="text-muted-foreground">
            ML models reduce uncertainty but cannot eliminate it. Whale behavior can change instantly. Market regimes can shift unpredictably. Confidence intervals show probability distributions, not certainties.
          </p>
          <p className="text-muted-foreground">
            I am not predicting prices. I am providing probabilistic insights based on on-chain data and mathematical analysis. You make your own decisions. You own your own risk.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="space-y-4">
        <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">The Toolbox Advantage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            70+ mathematical methods. Real-time on-chain analysis. Transparent methodology. No dubious signals, no delayed alerts, no black box predictions. Just probabilistic advantage based on verifiable data.
          </p>
          <p className="font-semibold">
            Reduce uncertainty. Position probabilistically. Own your risk.
          </p>
        </div>
      </section>
    </div>
  )
}
