import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Info, User, Settings } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useUser } from '../../context/UserContext';
import '../../styles/LiquidBottomNav.css';

const LiquidBottomNav = ({ links }) => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useLanguage();
    const { user } = useUser();

    // Default links if none provided, using exact labels and fallback icons from user request
    const navLinks = links || [
        { icon: <Home />, label: t('home'), path: '/dashboard' },
        { icon: <Info />, label: t('about'), path: '/dashboard/transactions' }, // Mapping to existing routes
        {
            icon: user.avatar ? (
                <img src={user.avatar} style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }} alt="P" />
            ) : <User />,
            label: t('profile'),
            path: '/dashboard/profile'
        },
        { icon: <Settings />, label: t('settings'), path: '/dashboard/settings' },
    ];

    useEffect(() => {
        const index = navLinks.findIndex(link => link.path === location.pathname);
        if (index !== -1) {
            setActiveIndex(index);
        }
    }, [location.pathname, navLinks]);

    // Calculate indicator position
    // Each item is 70px. With 4 items in a 360px container (20px padding each side),
    // the gaps are dynamic. We use the index to calculate the left offset.
    const getIndicatorStyle = () => {
        const itemWidth = 70;
        const containerPadding = 20;
        const totalWidth = 360;
        const navWidth = totalWidth - (containerPadding * 2);
        const gap = (navWidth - (itemWidth * navLinks.length)) / (navLinks.length - 1);

        const moveX = activeIndex * (itemWidth + gap);

        return {
            transform: `translateX(${moveX}px)`
        };
    };

    return (
        <div className="liquid-nav-wrapper">
            <div className="navigation">
                <ul className="listWrap">
                    {navLinks.map((link, index) => (
                        <li
                            key={index}
                            className={`list ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <NavLink to={link.path}>
                                <span className="icon">
                                    {link.icon}
                                </span>
                                <span className="text">{link.label}</span>
                            </NavLink>
                        </li>
                    ))}
                    <div className="indicator" style={getIndicatorStyle()}></div>
                </ul>
            </div>
        </div>
    );
};

export default LiquidBottomNav;
