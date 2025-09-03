export type FraudAlert = {
  id: string
  claimId: string
  provider: string
  score: number
  amount: number
  reason: string
  created: string
  status: 'open' | 'investigating' | 'closed'
}

export type DailyMetric = {
  date: string
  value: number
}

export const kpis = {
  totalClaims: 284_120,
  flaggedClaims: 5_842,
  estFraudUSD: 12_480_000,
  precision: 0.89,
  recall: 0.76
}

export const last30dFlagged: DailyMetric[] = Array.from({length: 30}).map((_, idx) => {
  const day = new Date()
  day.setDate(day.getDate() - (29 - idx))
  const value = Math.round(150 + Math.sin(idx / 5) * 40 + Math.random() * 20)
  return { date: day.toISOString().slice(5,10), value }
})

export const recentAlerts: FraudAlert[] = [
  { id: 'A-91234', claimId: 'C-771234', provider: 'Northside Clinic', score: 0.92, amount: 18450, reason: 'Unbundling of procedures; anomaly vs peer group', created: '2025-09-01 14:12', status: 'open' },
  { id: 'A-91212', claimId: 'C-771045', provider: 'Lakeside Imaging', score: 0.81, amount: 8900, reason: 'Upcoding CPT codes for imaging', created: '2025-09-01 09:37', status: 'investigating' },
  { id: 'A-91177', claimId: 'C-770998', provider: 'Green Valley Hospital', score: 0.67, amount: 1220, reason: 'Duplicate billing pattern detected', created: '2025-08-31 18:23', status: 'closed' },
  { id: 'A-91145', claimId: 'C-770876', provider: 'Urban Cardiology', score: 0.74, amount: 6150, reason: 'Modifier misuse; excessive frequency', created: '2025-08-31 11:05', status: 'investigating' },
  { id: 'A-91112', claimId: 'C-770745', provider: 'Wellness Family Care', score: 0.62, amount: 460, reason: 'Billing after discharge; temporal mismatch', created: '2025-08-31 08:42', status: 'closed' }
]

export const confusion = {
  tp: 4210, fp: 520, fn: 1330, tn: 71240
}

export const rocPoints = [
  { x: 0, y: 0 },
  { x: 0.05, y: 0.40 },
  { x: 0.10, y: 0.62 },
  { x: 0.15, y: 0.74 },
  { x: 0.20, y: 0.82 },
  { x: 0.25, y: 0.87 },
  { x: 0.32, y: 0.91 },
  { x: 1, y: 1 }
]

export const prPoints = [
  { x: 0.1, y: 0.95 },
  { x: 0.2, y: 0.92 },
  { x: 0.3, y: 0.90 },
  { x: 0.4, y: 0.88 },
  { x: 0.5, y: 0.86 },
  { x: 0.6, y: 0.84 },
  { x: 0.7, y: 0.80 },
  { x: 0.8, y: 0.75 },
  { x: 0.9, y: 0.68 }
]
