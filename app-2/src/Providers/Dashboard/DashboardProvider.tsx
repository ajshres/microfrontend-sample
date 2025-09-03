import { useEffect, useState } from "react";
import { recentActivity, salesData, trafficData, type ActivityItem, type SalesData, type TrafficData } from "../../Components/data";
import DashboardContext from "./DashboardContext";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EmptyList: any[] = [];
export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [sales, setSales] = useState<SalesData[] | null>(null);
  const [traffic, setTraffic] = useState<TrafficData[] | null>(null);
  const [activity, setActivity] = useState<ActivityItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSales(salesData);
      setTraffic(trafficData);
      setActivity(recentActivity);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardContext.Provider value={{ salesData: sales || EmptyList, trafficData: traffic || EmptyList, recentActivity: activity || EmptyList, isLoading: loading }}>
      {children}
    </DashboardContext.Provider>
  );
}