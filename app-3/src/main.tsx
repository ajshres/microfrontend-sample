import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ border: "2px solid blue", padding: "1rem" }}>
      <h2>Engine 3 Pages</h2>
      <App />
    </div>
  </StrictMode>,
)
