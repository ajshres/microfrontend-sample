import React from 'react';
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

import StatCard from "./StatCard";
import { useDashboard } from '../Providers/Dashboard';
import { OverviewLoader } from './Loaders';

const Overview: React.FC = () => {
    const { recentActivity, isLoading, salesData, trafficData } = useDashboard();

    if (isLoading) {
        return <OverviewLoader />
    }

    return (
        <div className="container-fluid py-4">
            {/* Stat Cards */}
            <div className="row g-4 mb-4">
                <div className="col-12 col-md-6 col-lg-3">
                    <StatCard
                        title="Total Revenue"
                        value="$45,231"
                        change={12.5}
                        icon={DollarSign}
                        color="bg-success"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <StatCard
                        title="Active Users"
                        value="2,431"
                        change={8.2}
                        icon={Users}
                        color="bg-primary"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <StatCard
                        title="Orders"
                        value="1,234"
                        change={-2.4}
                        icon={ShoppingCart}
                        color="bg-purple"
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <StatCard
                        title="Growth Rate"
                        value="15.3%"
                        change={5.7}
                        icon={TrendingUp}
                        color="bg-warning"
                    />
                </div>
            </div>

            {/* Charts */}
            <div className="row g-4 mb-4">
                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Sales Overview</h5>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={salesData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="sales" stroke="#0d6efd" strokeWidth={2} />
                                    <Line type="monotone" dataKey="profit" stroke="#198754" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Traffic Sources</h5>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={trafficData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {trafficData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="d-flex justify-content-center mt-3 gap-4">
                                {trafficData.map((item, index) => (
                                    <div key={index} className="d-flex align-items-center">
                                        <div
                                            className="rounded-circle me-2"
                                            style={{ width: "12px", height: "12px", backgroundColor: item.color }}
                                        ></div>
                                        <span className="text-muted small">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title mb-4">Recent Activity</h5>
                    <div className="list-group">
                        {recentActivity.map(activity => (
                            <div key={activity.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className={`rounded-circle me-3`} style={{
                                        width: "10px",
                                        height: "10px",
                                        backgroundColor:
                                            activity.type === 'user' ? '#0d6efd' :
                                            activity.type === 'order' ? '#198754' :
                                            activity.type === 'payment' ? '#ffc107' : '#6c757d'
                                    }}></div>
                                    <span className="fw-normal">{activity.action}</span>
                                </div>
                                <span className="text-muted small">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Overview;