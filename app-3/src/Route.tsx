import { Routes, Route, Link } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

export default function App2Routes() {
  return (
    <div style={{ border: "2px solid blue", padding: "1rem" }}>
      <h2>App3 Pages</h2>
      <nav>
        <Link to="/app3/page1">Page 1</Link> |{" "}
        <Link to="/app3/page2">Page 2</Link>
      </nav>
      <Routes>
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}