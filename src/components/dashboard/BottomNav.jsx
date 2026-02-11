import React from 'react';
import { Home, Repeat, Send, Settings, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import '../../styles/BottomNav.css';

const BottomNav = () => {
    return (
        <nav className="bottom-nav">
            <NavLink
                to="/dashboard"
                end
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
                <div className="nav-icon-container">
                    <Home size={24} />
                </div>
                <span>Home</span>
            </NavLink>

            <NavLink
                to="/dashboard/transactions"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
                <div className="nav-icon-container">
                    <Repeat size={24} />
                </div>
                <span>Transactions</span>
            </NavLink>

            <NavLink
                to="/dashboard/transfer"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
                <div className="nav-icon-container main-action">
                    <Send size={24} color="white" />
                </div>
                <span className="main-action-label">Transfer</span>
            </NavLink>

            <NavLink
                to="/dashboard/settings"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
                <div className="nav-icon-container">
                    <Settings size={24} />
                </div>
                <span>Settings</span>
            </NavLink>

            <NavLink
                to="/dashboard/profile"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
                <div className="nav-icon-container">
                    <User size={24} />
                </div>
                <span>Profile</span>
            </NavLink>
        </nav>
    );
};

export default BottomNav;
