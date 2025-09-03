import React from 'react'

type Props = {
  tp: number; fp: number; fn: number; tn: number;
}

export default function ConfusionMatrix({ tp, fp, fn, tn }: Props) {
  const total = tp + fp + fn + tn
  const cell = (label: string, value: number, variant: string) => (
    <div className={'p-3 text-center rounded ' + variant}>
      <div className="h5 mb-1">{value.toLocaleString()}</div>
      <div className="small text-secondary">{label}</div>
    </div>
  )
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white"><strong>Confusion Matrix</strong></div>
      <div className="card-body">
        <div className="row g-3">
          <div className="col-6">{cell('True Positive', tp, 'bg-success-subtle')}</div>
          <div className="col-6">{cell('False Positive', fp, 'bg-warning-subtle')}</div>
          <div className="col-6">{cell('False Negative', fn, 'bg-danger-subtle')}</div>
          <div className="col-6">{cell('True Negative', tn, 'bg-secondary-subtle')}</div>
        </div>
        <div className="text-secondary small mt-3">Total evaluated: {total.toLocaleString()}</div>
      </div>
    </div>
  )
}
