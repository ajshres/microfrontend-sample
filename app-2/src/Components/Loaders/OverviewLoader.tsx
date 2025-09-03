import { Activity, TrendingUp } from "lucide-react";

const OverviewLoader: React.FC = () => (
  <div className="space-y-6 animate-pulse">
    {/* Stats Cards Skeleton */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-20 mb-3"></div>
              <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>

    {/* Charts Skeleton */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
        <div className="h-72 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-gray-300 mx-auto mb-2" />
            <p className="text-gray-400">Loading sales data...</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="h-6 bg-gray-200 rounded w-28 mb-4"></div>
        <div className="h-72 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Activity className="w-12 h-12 text-gray-300 mx-auto mb-2" />
            <p className="text-gray-400">Loading traffic data...</p>
          </div>
        </div>
      </div>
    </div>

    {/* Activity Skeleton */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
      <div className="space-y-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-200 rounded-full mr-3"></div>
              <div className="h-4 bg-gray-200 rounded w-48"></div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-16"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OverviewLoader;