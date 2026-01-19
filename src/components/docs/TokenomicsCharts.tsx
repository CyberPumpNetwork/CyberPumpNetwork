import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

// Supply Distribution Pie Chart
interface SupplyDistributionProps {
  className?: string
}

export function SupplyDistributionChart({ className }: SupplyDistributionProps) {
  const data = [
    { name: 'ICO (Public Sale)', value: 70, color: 'hsl(var(--accent))' },
    { name: 'Locked (Tangem Vault)', value: 54, color: 'hsl(280 80% 60%)' },
    { name: 'Dev & Marketing (12mo)', value: 54, color: 'hsl(210 80% 60%)' },
    { name: 'Circulating / Future Mint', value: 822, color: 'hsl(120 60% 50%)' },
  ]

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${((percent ?? 0) * 100).toFixed(1)}%`}
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
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
            formatter={(value: number | undefined) => `${value ?? 0}M CYPU (${(((value ?? 0) / 1000) * 100).toFixed(1)}%)`}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            wrapperStyle={{ paddingTop: '20px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

// Treasury Allocation Bar Chart
export function TreasuryAllocationChart({ className }: { className?: string }) {
  const data = [
    {
      category: 'Operations',
      percentage: 35,
      color: 'hsl(var(--accent))',
      label: 'Dev, Servers, Legal',
    },
    {
      category: 'Marketing',
      percentage: 25,
      color: 'hsl(210 80% 60%)',
      label: 'Growth & Outreach',
    },
    {
      category: 'Reserves',
      percentage: 25,
      color: 'hsl(280 80% 60%)',
      label: 'Strategic Holdings',
    },
    {
      category: 'Ecosystem',
      percentage: 15,
      color: 'hsl(120 60% 50%)',
      label: 'Development',
    },
  ]

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis type="number" domain={[0, 40]} stroke="hsl(var(--muted-foreground))" />
          <YAxis
            type="category"
            dataKey="category"
            stroke="hsl(var(--muted-foreground))"
            width={100}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
            formatter={(value: number | undefined) => `${value ?? 0}%`}
          />
          <Bar dataKey="percentage" fill="hsl(var(--accent))" radius={[0, 8, 8, 0]} animationDuration={800}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

