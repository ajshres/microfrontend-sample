import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import { cleanRegistryByAppName, getRegistry, registerRemoteComponents, type RemoteRoute } from "../Federation/ModernFederationManager";

function Sidebar() {
  const navClass = ({ isActive }: NavLinkRenderProps) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-150 ` +
    (isActive ? "bg-gray-200 dark:bg-gray-700 font-semibold" : "hover:bg-gray-100 dark:hover:bg-gray-800");

  const clickEvent = () => {
    cleanRegistryByAppName("app-2")
  }

  const secondClickEvent = () => getRegistry()

  const reregister = () => {
    const apiResponse = [
  ['app-3', 'http://localhost:3001/module.js'],
  ['app-2', 'http://localhost:3002/module.js'],
]
    registerRemoteComponents(apiResponse.map((data) => ({
            appName: data[0],
            fileName: data[1],
          }) as RemoteRoute),{ force:true })
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-4">
      <div className="mb-6">
        <h1 className="text-xl font-bold">My App</h1>
        <p className="text-sm text-gray-500">Sidebar + Routes</p>
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={navClass} end>
          <span>🏠</span>
          <span>Home</span>
        </NavLink>

        <NavLink to="/about" className={navClass}>
          <span>ℹ️</span>
          <span>About</span>
        </NavLink>

        <NavLink to="/settings" className={navClass}>
          <span>⚙️</span>
          <span>Settings</span>
        </NavLink>

        <NavLink to="/app2/page1" className={navClass}>
          <span>App 2 page 1</span>
        </NavLink>

        <NavLink to="/app2/page2" className={navClass}>
          <span>App 2 page 2</span>
        </NavLink>

        <NavLink to="/app3/page1" className={navClass}>
          <span>App 3 page 1</span>
        </NavLink>

        <NavLink to="/app3/page2" className={navClass}>
          <span>App 3 page 2</span>
        </NavLink>

        <button className={"flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-150"} onClick={clickEvent}>Clear All</button>
        <button className={"flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-150"} onClick={secondClickEvent}>Clear</button>
        <button className={"flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-150"} onClick={reregister}>Reregister</button>
      </nav>

      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-500">
        <p>Logged in as</p>
        <p className="font-medium text-gray-700 dark:text-gray-200">Jane Doe</p>
      </div>
    </aside>
  );
}

export default Sidebar;