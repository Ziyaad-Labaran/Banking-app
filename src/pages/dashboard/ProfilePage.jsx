import React from 'react';
import { User, Bell, Shield, HelpCircle, ChevronRight, LogOut, CreditCard, Settings } from 'lucide-react';
import '../../styles/ProfilePage.css';

const ProfilePage = () => {
    const handleLogout = () => {
        // Implement logout logic here
        console.log('Logging out...');
        alert('Logging out...');
        window.location.href = '/login';
    };

    const menuSections = [
        {
            title: 'Account',
            items: [
                { icon: User, label: 'Personal Information', desc: 'Name, Email, Phone' },
                { icon: CreditCard, label: 'Payment Methods', desc: 'Visa, Mastercard, Bank' },
            ]
        },
        {
            title: 'Settings',
            items: [
                { icon: Bell, label: 'Notifications', desc: 'Push, Email, SMS' },
                { icon: Shield, label: 'Security', desc: 'Fa, Password' },
                { icon: Settings, label: 'Preferences', desc: 'Theme, Language' },
            ]
        },
        {
            title: 'Support',
            items: [
                { icon: HelpCircle, label: 'Help Center', desc: 'FAQ, Contact Support' },
            ]
        }
    ];

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-avatar">
                    <span>NC</span>
                </div>
                <h2 className="profile-name">Noreen Coolidge</h2>
                <div className="profile-email">Noreen Coolidge@gmail.com</div>
                <div className="profile-badge">Verified Member</div>
            </div>

            {menuSections.map((section, index) => (
                <div key={index} className="profile-section">
                    <div className="section-title">{section.title}</div>
                    {section.items.map((item, idx) => (
                        <button key={idx} className="menu-item">
                            <div className="menu-item-left">
                                <div className="menu-icon">
                                    <item.icon size={20} />
                                </div>
                                <div className="menu-text">
                                    <span className="menu-label">{item.label}</span>
                                    <span className="menu-desc">{item.desc}</span>
                                </div>
                            </div>
                            <ChevronRight size={20} className="menu-arrow" />
                        </button>
                    ))}
                </div>
            ))}

            <button onClick={handleLogout} className="logout-btn">
                <div className="menu-item-left" style={{ justifyContent: 'center', width: '100%' }}>
                    <LogOut size={20} />
                    <span>Sign Out</span>
                </div>
            </button>
        </div>
    );
};

export default ProfilePage;
