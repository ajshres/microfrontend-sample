import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './Route.tsx'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './Components/Sidebar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
         <div className="flex-1 flex flex-col">
            <AppRoutes />
          </div>
      </div>
    </BrowserRouter>
  </StrictMode>,
)
