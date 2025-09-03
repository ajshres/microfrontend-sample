import { Activity, TrendingUp, } from "lucide-react";
import type React from "react";
import { NavLink } from "react-router-dom";


const Sidebar: React.FC= () => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
  ];

  return (
    <div>
    <aside className="bg-gray-900 text-white w-64 min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold">Engine 2</h2>
      </div>
      
      <nav className="mt-6">
        {tabs.map(tab => (
          <NavLink to={tab.id} 
          className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-800 transition-colors`}
        >
                <tab.icon className="w-5 h-5 mr-3" />
            {tab.label}</NavLink>
        ))}
      </nav>
    </aside>
    </div>
  );
};

export default Sidebar;