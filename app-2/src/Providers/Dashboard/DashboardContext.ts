import { createContext } from "react";
import type { SalesData, TrafficData, ActivityItem } from "../../Components/data";

type DashboardContextType = {
    salesData: SalesData[];
    trafficData: TrafficData[];
    recentActivity: ActivityItem[];
    isLoading: boolean;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export default DashboardContext;