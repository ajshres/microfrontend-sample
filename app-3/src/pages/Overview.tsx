import React from 'react'
import KpiCard from '../components/KpiCard'
import AlertTable from '../components/AlertTable'
import MiniTrendChart from '../components/MiniTrendChart'
import { kpis, last30dFlagged, recentAlerts } from '../data/mock'

export default function Overview() {
  return (
    <div className="d-flex flex-column gap-4">
      <div>
        <h2 className="h3 mb-1">Overview</h2>
        <div className="text-secondary">Machine learning system for document review & payment fraud detection</div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-sm-6 col-xxl-3">
          <KpiCard title="Total Claims (YTD)" value={kpis.totalClaims.toLocaleString()} subtitle="Volume processed by ML" trend={{direction: 'up', value: 4.2}} variant="secondary" />
        </div>
        <div className="col-12 col-sm-6 col-xxl-3">
          <KpiCard title="Flagged Claims" value={kpis.flaggedClaims.toLocaleString()} subtitle="High-risk requiring review" trend={{direction: 'down', value: 1.1}} variant="warning" />
        </div>
        <div className="col-12 col-sm-6 col-xxl-3">
          <KpiCard title="Est. Fraud Exposure" value={'$' + kpis.estFraudUSD.toLocaleString()} subtitle="Sum of suspected overpayments" trend={{direction: 'up', value: 2.8}} variant="danger" />
        </div>
        <div className="col-12 col-sm-6 col-xxl-3">
          <KpiCard title="Precision / Recall" value={`${Math.round(kpis.precision*100)}% / ${Math.round(kpis.recall*100)}%`} subtitle="Model quality snapshot" variant="success" />
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-xl-5">
          <MiniTrendChart data={last30dFlagged} />
        </div>
        <div className="col-12 col-xl-7">
          <AlertTable alerts={recentAlerts} />
        </div>
      </div>
    </div>
  )
}
