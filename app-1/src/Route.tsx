import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import { About, Home, Settings } from "./Components/Pages";
import { LoadComponent, LoadComponentV2 } from "./Federation/RemoteManager";
import { useEffect, useState } from "react";
import { registerRemoteComponents, registerSharedResources, type RemoteRoute } from "./Federation/ModernFederationManager";

const apiResponse = [
  ['app-2', 'http://localhost:3001/module.js'],
  ['app-3', 'http://localhost:3002/module.js'],
]
export default function MainRoute() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Promise.all([
      registerSharedResources(),
      registerRemoteComponents(apiResponse.map((data) => ({
        appName: data[0],
        fileName: data[1],
      }) as RemoteRoute)),
    ]).then(()=> setIsLoading(false));
  }, []);
  if (isLoading) {
    return <div>Loading</div>
  }
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Routes>
            <Route
              path="/"
              element={
                <main className="flex-1 overflow-auto">
                  <Header title="Dashboard" />
                  <Home />
                </main>
              }
            />

            <Route
              path="/about"
              element={
                <main className="flex-1 overflow-auto">
                  <Header title="About" />
                  <About />
                </main>
              }
            />
            <Route
              path="/app2/*"
              element={
                <LoadComponentV2 key={`app-2-Route`} appName="app-2" fileName="Route"/>
              }
            />

            <Route
              path="/app3/*"
              element={
                <LoadComponent key={`app-3-Route`} appName="app-3" fileName="Route" />
              }
            />

            <Route
              path="/settings"
              element={
                <main className="flex-1 overflow-auto">
                  <Header title="Settings" />
                  <Settings />
                </main>
              }
            />

            {/* fallback route */}
            <Route
              path="*"
              element={
                <main className="flex-1 overflow-auto">
                  <Header title="Not found" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">404 — Page not found</h3>
                    <Link to="/" className="text-blue-600 hover:underline">Go back home</Link>
                  </div>
                </main>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}