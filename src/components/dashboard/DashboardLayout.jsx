import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';
import '../../styles/DashboardLayout.css';

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
            <main className="dashboard-content">
                <Outlet />
            </main>
            <BottomNav />
        </div>
    );
};

export default DashboardLayout;
