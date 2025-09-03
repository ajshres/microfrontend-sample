import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useDashboard } from '../Providers/Dashboard';
import { AnalyticsLoader } from './Loaders';

const Analytics = () => {
    const { isLoading, salesData } = useDashboard();
    if (isLoading) {
        return <AnalyticsLoader />;
    }
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold mb-4">Revenue Analytics</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#3b82f6" />
                <Bar dataKey="profit" fill="#10b981" />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Analytics;
