import React from 'react';
import SmartphoneMockup from './SmartphoneMockup';
import '../styles/LeftPanel.css';

const LeftPanel = () => {
    return (
        <div className="left-panel">
            <div className="left-panel-content">
                <h1 className="hero-title">
                    Manage your<br />
                    <span className="text-highlight">money</span>
                </h1>
                <p className="hero-subtitle">
                    Secure, fast, and global financial solutions for the modern world.
                </p>
                <div className="mockup-wrapper">
                    <SmartphoneMockup />
                </div>
            </div>
            <div className="left-panel-bg"></div>
        </div>
    );
};

export default LeftPanel;
