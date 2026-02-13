import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, BarChart2, Clock, Bell } from 'lucide-react';
import '../../styles/AnimatedBottomNav.css';

const AnimatedBottomNav = () => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { icon: Home, label: 'Home', path: '/dashboard' },
        { icon: BarChart2, label: 'Stats', path: '/dashboard/transactions' },
        { icon: Clock, label: 'History', path: '/dashboard/transfer' },
        { icon: Bell, label: 'Alerts', path: '/dashboard/settings' },
    ];

    useEffect(() => {
        const index = menuItems.findIndex(item => item.path === location.pathname);
        if (index !== -1) {
            setActiveIndex(index);
        }
    }, [location.pathname]);

    return (
        <nav className="animated-nav-container">
            <div className="nav-background">
                {/* 
                  The SVG acts as a cutout mask. 
                  We translate it horizontally to follow the active index.
                */}
                <div
                    className="nav-dip-wrapper"
                    style={{
                        transform: `translateX(calc(${activeIndex * 25}% + 12.5% - 50px))`
                    }}
                >
                    <svg width="100" height="40" viewBox="0 0 100 40" className="nav-dip-svg">
                        <path
                            d="M0 0 C20 0 25 25 50 25 C75 25 80 0 100 0 V40 H0 Z"
                            fill="#121212"
                        />
                    </svg>
                    <div className="nav-active-circle"></div>
                </div>

                {/* Left and Right filler to create the solid bar around the dip */}
                <div className="nav-fill-left" style={{ width: `calc(${activeIndex * 25}% + 12.5% - 50px)` }}></div>
                <div className="nav-fill-right" style={{ left: `calc(${activeIndex * 25}% + 12.5% + 50px)` }}></div>
            </div>

            <div className="nav-items-wrapper">
                {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeIndex === index;
                    return (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={`animated-nav-item ${isActive ? 'active' : ''}`}
                        >
                            <div className="nav-icon-box">
                                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                            </div>
                            <span className="nav-label">{item.label}</span>
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
};

export default AnimatedBottomNav;
