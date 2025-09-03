import React from 'react'
import ConfusionMatrix from '../components/ConfusionMatrix'
import CurveChart from '../components/CurveChart'
import { confusion, rocPoints, prPoints } from '../data/mock'

export default function Analytics() {
  const precision = confusion.tp / (confusion.tp + confusion.fp)
  const recall = confusion.tp / (confusion.tp + confusion.fn)
  const f1 = (2 * precision * recall) / (precision + recall)

  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex align-items-end justify-content-between">
        <div>
          <h2 className="h3 mb-1">Analytics</h2>
          <div className="text-secondary">Quality and performance of the fraud detection model</div>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm">Export CSV</button>
          <button className="btn btn-primary btn-sm">Retrain (mock)</button>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <ConfusionMatrix tp={confusion.tp} fp={confusion.fp} fn={confusion.fn} tn={confusion.tn} />
        </div>
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="row text-center">
                <div className="col-4">
                  <div className="h4 mb-0">{(precision*100).toFixed(1)}%</div>
                  <div className="small text-secondary">Precision</div>
                </div>
                <div className="col-4">
                  <div className="h4 mb-0">{(recall*100).toFixed(1)}%</div>
                  <div className="small text-secondary">Recall</div>
                </div>
                <div className="col-4">
                  <div className="h4 mb-0">{f1.toFixed(2)}</div>
                  <div className="small text-secondary">F1 Score</div>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress" role="progressbar" aria-valuenow={precision*100} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar bg-success" style={{width: (precision*100).toFixed(0)+'%'}}>Precision</div>
                </div>
                <div className="progress mt-2" role="progressbar" aria-valuenow={recall*100} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar bg-info" style={{width: (recall*100).toFixed(0)+'%'}}>Recall</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <CurveChart title="ROC Curve" description="TPR vs FPR across thresholds" points={rocPoints} xLabel="FPR" yLabel="TPR" />
        </div>
        <div className="col-12 col-lg-6">
          <CurveChart title="Precision-Recall" description="Precision vs Recall across thresholds" points={prPoints} xLabel="Recall" yLabel="Precision" />
        </div>
      </div>
    </div>
  )
}
