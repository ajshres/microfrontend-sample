import React from 'react'

type Props = {
  title: string
  value: string | number
  subtitle?: string
  trend?: { direction: 'up' | 'down', value: number }
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'secondary'
}

export default function KpiCard({ title, value, subtitle, trend, variant = 'primary' }: Props) {
  const badge = trend ? (
    <span className={'badge ms-2 ' + (trend.direction === 'up' ? 'text-bg-success' : 'text-bg-danger')}>
      {trend.direction === 'up' ? '▲' : '▼'} {trend.value}%
    </span>
  ) : null

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <div className="text-secondary small">{title}</div>
            <div className="display-6">{value}</div>
          </div>
          <span className={'badge rounded-pill text-bg-' + variant}>{variant}</span>
        </div>
        {subtitle && <div className="text-secondary mt-2">{subtitle}{badge}</div>}
      </div>
    </div>
  )
}
