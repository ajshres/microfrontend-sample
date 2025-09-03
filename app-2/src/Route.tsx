import { Routes, Route } from "react-router-dom";
import Overview from "./Components/Overview";
import Analytics from "./Components/Analytics";
import { DashboardProvider } from "./Providers/Dashboard";
import './index.css'

export default function AppRoutes() {
  return (
      <DashboardProvider>
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="analytics" element={<Analytics />} />
        </Routes>
      </DashboardProvider>
  );
}