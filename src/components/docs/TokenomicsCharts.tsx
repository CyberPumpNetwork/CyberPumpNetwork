import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

// Supply Distribution Pie Chart
interface SupplyDistributionProps {
  className?: string
}

export function SupplyDistributionChart({ className }: SupplyDistributionProps) {
  const data = [
    { name: 'Locked (Tangem Vaults)', value: 110, color: 'rgb(192, 132, 252)' },
    { name: 'Treasury (Sale + Dev)', value: 70, color: 'rgb(20, 184, 166)' },
    { name: 'Burned (Removed)', value: 20, color: 'rgb(239, 68, 68)' },
    { name: 'Unminted (Future Supply)', value: 800, color: 'rgb(74, 222, 128)' },
  ]

  const total = 1000 // Max Supply
  const preminted = 200 // Preminted at launch
  const burned = 20
  const circulating = preminted - burned // 180M

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${((value / total) * 100).toFixed(1)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            animationBegin={0}
            animationDuration={800}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '2px solid hsl(var(--border))',
              borderRadius: '12px',
              padding: '12px',
            }}
            formatter={(value: number | undefined) => `${(value ?? 0)}M CYPU (${(((value ?? 0) / total) * 100).toFixed(1)}%)`}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            wrapperStyle={{ paddingTop: '20px' }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-3 text-sm space-y-1">
        <div className="font-semibold text-accent">
          Circulating Supply: {circulating}M CYPU ({((circulating / total) * 100).toFixed(1)}% of max)
        </div>
        <div className="text-muted-foreground">
          Preminted: 200M (110M Locked + 70M Treasury + 20M Burned) • Unminted: 800M (80%)
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          Treasury: 50M L1 Sale Orders (locked) + 20M Dev Wallet (movable)
        </div>
      </div>
    </div>
  )
}

// Treasury Allocation Bar Chart
export function TreasuryAllocationChart({ className }: { className?: string }) {
  const data = [
    {
      category: 'Operations',
      percentage: 35,
      color: 'rgb(20, 184, 166)',
      label: 'Dev, Servers, Legal',
    },
    {
      category: 'Marketing',
      percentage: 25,
      color: 'rgb(96, 165, 250)',
      label: 'Growth & Outreach',
    },
    {
      category: 'Reserves',
      percentage: 25,
      color: 'rgb(192, 132, 252)',
      label: 'Strategic Holdings',
    },
    {
      category: 'Ecosystem',
      percentage: 15,
      color: 'rgb(74, 222, 128)',
      label: 'Development',
    },
  ]

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} layout="vertical" margin={{ left: 20, right: 40, top: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            type="number" 
            domain={[0, 40]} 
            stroke="rgb(20, 184, 166)" 
            style={{ fontSize: '14px', fontWeight: 500, fill: 'rgb(20, 184, 166)' }}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis
            type="category"
            dataKey="category"
            stroke="rgb(20, 184, 166)"
            width={100}
            style={{ fontSize: '14px', fontWeight: 600, fill: 'rgb(20, 184, 166)' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '2px solid hsl(var(--border))',
              borderRadius: '12px',
              padding: '12px',
            }}
            labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
            formatter={(value: number | undefined) => [`${value ?? 0}%`, 'Allocation']}
          />
          <Bar dataKey="percentage" radius={[0, 8, 8, 0]} animationDuration={800}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
            <span className="font-medium">{item.category}:</span>
            <span className="text-muted-foreground">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

