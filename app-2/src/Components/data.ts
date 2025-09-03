export interface SalesData {
  month: string;
  sales: number;
  profit: number;
}

export interface TrafficData {
  name: string;
  value: number;
  color: string;
}

export interface ActivityItem {
  id: number;
  action: string;
  time: string;
  type: 'user' | 'order' | 'payment' | 'system';
}

// Mock data with proper typing
export const salesData: SalesData[] = [
  { month: 'Jan', sales: 4000, profit: 2400 },
  { month: 'Feb', sales: 3000, profit: 1398 },
  { month: 'Mar', sales: 2000, profit: 9800 },
  { month: 'Apr', sales: 2780, profit: 3908 },
  { month: 'May', sales: 1890, profit: 4800 },
  { month: 'Jun', sales: 2390, profit: 3800 }
];

export const trafficData: TrafficData[] = [
  { name: 'Desktop', value: 60, color: '#3b82f6' },
  { name: 'Mobile', value: 35, color: '#10b981' },
  { name: 'Tablet', value: 5, color: '#f59e0b' }
];

export const recentActivity: ActivityItem[] = [
  { id: 1, action: 'New user registered', time: '2 minutes ago', type: 'user' },
  { id: 2, action: 'Order #1234 completed', time: '5 minutes ago', type: 'order' },
  { id: 3, action: 'Payment received $2,500', time: '10 minutes ago', type: 'payment' },
  { id: 4, action: 'System backup completed', time: '1 hour ago', type: 'system' }
];