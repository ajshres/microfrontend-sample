import React from 'react'

type Point = { x: number; y: number }

type Props = {
  title: string
  description?: string
  points: Point[]
  height?: number
  xLabel?: string
  yLabel?: string
}

export default function CurveChart({ title, description, points, height = 220, xLabel, yLabel }: Props) {
  const padding = 28
  const width = 560
  const maxX = Math.max(...points.map(p => p.x), 1)
  const maxY = Math.max(...points.map(p => p.y), 1)

  const toPath = (pts: Point[]) => {
    if (pts.length === 0) return ''
    const toX = (x: number) => padding + (x / maxX) * (width - padding*2)
    const toY = (y: number) => padding + (1 - (y / maxY)) * (height - padding*2)
    return 'M ' + pts.map((p,i) => `${toX(p.x)} ${toY(p.y)}`).join(' L ')
  }

  return (
    <div className="card shadow-sm h-100">
      <div className="card-header bg-white">
        <strong>{title}</strong>
        {description && <div className="small text-secondary">{description}</div>}
      </div>
      <div className="card-body">
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
          <rect x="0" y="0" width={width} height={height} fill="transparent" />
          <path d={toPath(points)} fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="currentColor" strokeWidth="1" />
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="currentColor" strokeWidth="1" />
          {xLabel && <text x={(width)/2} y={height - 4} textAnchor="middle" className="small">{xLabel}</text>}
          {yLabel && <text x="10" y={height/2} transform={`rotate(-90 10 ${height/2})`} textAnchor="middle" className="small">{yLabel}</text>}
        </svg>
      </div>
    </div>
  )
}
