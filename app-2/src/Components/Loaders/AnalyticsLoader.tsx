import { BarChart } from "lucide-react";

const AnalyticsLoader: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="h-6 bg-gray-200 rounded w-36 animate-pulse"></div>
        <div className="flex space-x-2">
          <div className="h-8 bg-gray-200 rounded w-20 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>
      </div>
      
      {/* Analytics Chart Skeleton with animated bars */}
      <div className="h-96 bg-gray-50 rounded-lg p-4">
        <div className="flex items-end justify-center h-full space-x-4">
          {[40, 60, 30, 80, 45, 70].map((height, i) => (
            <div key={i} className="flex flex-col items-center">
              <div 
                className="bg-gradient-to-t from-blue-200 to-blue-300 rounded-t animate-pulse w-12 transition-all duration-1000"
                style={{ 
                  height: `${height}%`,
                  animationDelay: `${i * 200}ms`
                }}
              ></div>
              <div className="h-3 bg-gray-200 rounded w-8 mt-2 animate-pulse"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <BarChart className="w-16 h-16 text-gray-300 mx-auto mb-2" />
          <p className="text-gray-400 font-medium">Analyzing revenue data...</p>
          <div className="flex justify-center mt-2">
            <div className="flex space-x-1">
              {[1, 2, 3].map(i => (
                <div 
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Analytics Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="h-5 bg-gray-200 rounded w-24 mb-4 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded w-16 mb-2 animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
        </div>
      ))}
    </div>
  </div>
);

export default AnalyticsLoader;