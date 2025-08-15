function Home() {
  return (
    <div className="p-6 border-4 border-green-400 rounded-lg m-4 bg-white shadow">
      <h3 className="text-xl font-semibold mb-2">Home</h3>
      <p className="text-gray-600">This is the main dashboard. Add cards, charts, or lists here.</p>
    </div>
  );
}

function About() {
  return (
    <div className="p-6 border-4 border-yellow-400 rounded-lg m-4 bg-white shadow">
      <h3 className="text-xl font-semibold mb-2">About</h3>
      <p className="text-gray-600">A simple example app showing a sidebar and route-based pages.</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="p-6 border-4 border-red-400 rounded-lg m-4 bg-white shadow">
      <h3 className="text-xl font-semibold mb-2">Settings</h3>
      <p className="text-gray-600">Put settings controls here.</p>
    </div>
  );
}

export { Home, About, Settings }