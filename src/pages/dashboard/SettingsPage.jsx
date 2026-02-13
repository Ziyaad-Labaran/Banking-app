import React, { useState, useEffect } from 'react';
import { Bell, Lock, User, Globe, Moon, ChevronRight, Headphones, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/SettingsPage.css';

const ToggleSwitch = ({ isOn, onToggle }) => (
    <div
        className={`toggle-switch ${isOn ? 'active' : ''}`}
        onClick={onToggle}
    >
        <div className="toggle-thumb" />
    </div>
);

const SettingItem = ({ icon: Icon, label, desc, action, type = 'toggle', isOn, onToggle, onClick }) => (
    <div className="setting-item" onClick={type === 'nav' ? onClick : undefined} style={{ cursor: type === 'nav' ? 'pointer' : 'default' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {Icon && (
                <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', color: '#64748b'
                }}>
                    <Icon size={20} />
                </div>
            )}
            <div className="setting-info">
                <span className="setting-label">{label}</span>
                {desc && <span className="setting-desc">{desc}</span>}
            </div>
        </div>

        {type === 'toggle' && <ToggleSwitch isOn={isOn} onToggle={onToggle} />}
        {type === 'nav' && <ChevronRight size={20} className="nav-arrow" />}
        {type === 'button' && <button className="setting-action-btn">{action}</button>}
    </div>
);

const SettingsPage = () => {
    const navigate = useNavigate();
    const [settings, setSettings] = useState({
        pushNotifications: true,
        emailNotifications: false,
        darkMode: localStorage.getItem('theme') === 'dark',
        biometricLogin: true,
    });

    useEffect(() => {
        if (settings.darkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [settings.darkMode]);

    const toggleSetting = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleEditProfile = () => {
        navigate('/dashboard/profile/edit');
    };

    return (
        <div className="settings-page">
            <div className="settings-header">
                <h1 className="settings-title">Settings</h1>
                <p className="settings-subtitle">Manage preferences and account security</p>
            </div>

            <div className="settings-group">
                <div className="group-header">General</div>
                <SettingItem
                    icon={User}
                    label="Edit Profile"
                    desc="Update personal information"
                    type="nav"
                    onClick={handleEditProfile}
                />
                <SettingItem
                    icon={Globe}
                    label="Language"
                    desc="English (US)"
                    type="nav"
                />
                <SettingItem
                    icon={Moon}
                    label="Dark Mode"
                    desc="Toggle dark theme"
                    type="toggle"
                    isOn={settings.darkMode}
                    onToggle={() => toggleSetting('darkMode')}
                />
            </div>

            <div className="settings-group">
                <div className="group-header">Notifications</div>
                <SettingItem
                    icon={Bell}
                    label="Push Notifications"
                    desc="Receive alerts on your device"
                    type="toggle"
                    isOn={settings.pushNotifications}
                    onToggle={() => toggleSetting('pushNotifications')}
                />
                <SettingItem
                    icon={Bell}
                    label="Email Alerts"
                    desc="Receive updates via email"
                    type="toggle"
                    isOn={settings.emailNotifications}
                    onToggle={() => toggleSetting('emailNotifications')}
                />
            </div>

            <div className="settings-group">
                <div className="group-header">Security</div>
                <SettingItem
                    icon={Lock}
                    label="Change Password"
                    desc="Last changed 3 months ago"
                    type="nav"
                />
                <SettingItem
                    icon={Lock}
                    label="Biometric Login"
                    desc="Use FaceID or TouchID"
                    type="toggle"
                    isOn={settings.biometricLogin}
                    onToggle={() => toggleSetting('biometricLogin')}
                />
            </div>

            <div className="settings-group">
                <div className="group-header">Support</div>
                <SettingItem
                    icon={Headphones}
                    label="Contact Support"
                    desc="Get help with your account"
                    type="nav"
                />
                <SettingItem
                    icon={HelpCircle}
                    label="FAQs"
                    desc="Common questions and answers"
                    type="nav"
                />
            </div>

            <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.75rem', marginTop: '16px' }}>
                App Version 2.4.0 (Build 20241024)
            </div>
        </div>
    );
};

export default SettingsPage;
