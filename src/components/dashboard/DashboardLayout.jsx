import { Outlet } from 'react-router-dom';
import LiquidBottomNav from './LiquidBottomNav';
import { Home, Info, User, Settings } from 'lucide-react';
import '../../styles/DashboardLayout.css';

const DashboardLayout = () => {
    const navLinks = [
        { icon: <Home />, label: 'Home', path: '/dashboard' },
        { icon: <Info />, label: 'About', path: '/dashboard/transactions' },
        { icon: <User />, label: 'Profile', path: '/dashboard/profile' },
        { icon: <Settings />, label: 'Settings', path: '/dashboard/settings' },
    ];

    return (
        <div className="dashboard-layout">
            <main className="dashboard-content">
                <Outlet />
            </main>
            <LiquidBottomNav links={navLinks} />
        </div>
    );
};

export default DashboardLayout;
