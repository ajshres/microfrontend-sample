import { Routes, Route, } from "react-router-dom";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";

export default function App2Routes() {
  return (
      <Routes>
        <Route path="overview" element={<Overview />} />
        <Route path="analytics" element={<Analytics />} />
      </Routes>
  );
}