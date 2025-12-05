import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

const tokenDistribution = [
  { name: 'Unminted (Future)', percentage: 80, color: 'bg-accent' },
  { name: 'ICO / Public Sale', percentage: 7, color: 'bg-accent/80' },
  { name: 'Vault Locked', percentage: 5.5, color: 'bg-accent/60' },
  { name: 'Firm Wallet', percentage: 5.5, color: 'bg-accent/40' },
  { name: 'Burned', percentage: 2, color: 'bg-accent/20' },
]

const tokenDetails = [
  { label: 'Token Name', value: 'CyberPump' },
  { label: 'Symbol', value: '$CYPU' },
  { label: 'Total Supply', value: '1,000,000,000' },
  { label: 'Token Standard', value: 'KRC-20' },
  { label: 'Network', value: 'Kaspa (BlockDAG)' },
  { label: 'Minting Ratio', value: '1 $KAS = 1 $CYPU' },
]

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 uppercase tracking-wider">
            Token Economics
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Transparent{' '}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built on a foundation of fairness and sustainability. Every token has
            a purpose, every allocation is strategic.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Distribution Chart */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Circular Chart Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border-8 border-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-conic from-accent via-accent/60 to-accent/20 rounded-full" 
                       style={{ background: `conic-gradient(#40E0D0 0% 40%, #40E0D0cc 40% 65%, #40E0D099 65% 80%, #40E0D066 80% 90%, #40E0D033 90% 100%)` }} />
                  <div className="absolute inset-4 bg-background rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent">1B</div>
                      <div className="text-sm text-muted-foreground">Total Supply</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 space-y-3">
              {tokenDistribution.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-card/50 border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${item.color}`} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="text-accent font-bold">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Token Details */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Token Details</h3>
                <div className="space-y-4">
                  {tokenDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex justify-between items-center py-3 border-b border-border/50 last:border-0"
                    >
                      <span className="text-muted-foreground">{detail.label}</span>
                      <span className="font-semibold">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tax Structure */}
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Transaction Tax</h3>
              <p className="text-muted-foreground mb-6">
                A small 3% tax on transactions funds the ecosystem:
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-background/50">
                  <div className="text-2xl font-bold text-accent">1%</div>
                  <div className="text-sm text-muted-foreground">Burn</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50">
                  <div className="text-2xl font-bold text-accent">1%</div>
                  <div className="text-sm text-muted-foreground">Holders</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-background/50">
                  <div className="text-2xl font-bold text-accent">1%</div>
                  <div className="text-sm text-muted-foreground">Treasury</div>
                </div>
              </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
