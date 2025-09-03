import type { FraudAlert } from '../data/mock'

type Props = {
  alerts: FraudAlert[]
}

export default function AlertTable({ alerts }: Props) {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <strong>Recent Fraud Alerts</strong>
      </div>
      <div className="table-responsive">
        <table className="table align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th scope="col">Alert ID</th>
              <th scope="col">Claim ID</th>
              <th scope="col">Provider</th>
              <th scope="col">Score</th>
              <th scope="col">Amount</th>
              <th scope="col">Reason</th>
              <th scope="col">Created</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map(a => (
              <tr key={a.id}>
                <td className="text-nowrap">#{a.id}</td>
                <td>{a.claimId}</td>
                <td className="text-nowrap">{a.provider}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div className="progress w-100" role="progressbar" aria-label="fraud score" aria-valuenow={Math.round(a.score * 100)} aria-valuemin={0} aria-valuemax={100}>
                      <div className={'progress-bar ' + (a.score > 0.8 ? 'bg-danger' : a.score > 0.6 ? 'bg-warning' : 'bg-success')} style={{width: (a.score * 100).toFixed(0) + '%'}}></div>
                    </div>
                    <span className="small text-secondary">{(a.score*100).toFixed(0)}%</span>
                  </div>
                </td>
                <td>${a.amount.toLocaleString()}</td>
                <td className="text-wrap" style={{maxWidth: 260}}>{a.reason}</td>
                <td className="text-nowrap">{a.created}</td>
                <td>
                  <span className={'badge rounded-pill ' + (a.status === 'open' ? 'text-bg-danger' : a.status === 'investigating' ? 'text-bg-warning' : 'text-bg-success')}>
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
