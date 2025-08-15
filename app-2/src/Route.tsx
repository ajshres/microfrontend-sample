import { Routes, Route, Link } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

export default function App2Routes() {
  return (
    <div style={{ border: "2px solid blue", padding: "1rem" }}>
      <h2>App2 Pages</h2>
      <nav>
        <Link to="/app2/page1">Page 1</Link> |{" "}
        <Link to="/app2/page2">Page 2</Link> |{" "}
        <Link to="/app2/page3">Page 3</Link>
      </nav>
      <Routes>
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}