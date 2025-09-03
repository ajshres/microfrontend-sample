import type { DailyMetric } from '../data/mock'

type Props = {
  data: DailyMetric[]
  height?: number
}

export default function MiniTrendChart({ data, height = 120 }: Props) {
  if (data.length === 0) return null
  const padding = 8
  const width = 480
  const maxY = Math.max(...data.map(d => d.value)) * 1.1
  const minY = 0

  const points = data.map((d, i) => {
    const x = padding + (i * (width - padding*2)) / (data.length - 1)
    const y = padding + (1 - (d.value - minY) / (maxY - minY)) * (height - padding*2)
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <strong>Flagged Claims (30d)</strong>
          <span className="small text-secondary">{data[0].date} → {data[data.length-1].date}</span>
        </div>
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} role="img" aria-label="trend">
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            points={points}
          />
        </svg>
      </div>
    </div>
  )
}
