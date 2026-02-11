import React from 'react';
import { ArrowUpRight, Wallet, Activity, CreditCard, PieChart } from 'lucide-react';
import '../styles/SmartphoneMockup.css';

const SmartphoneMockup = () => {
    return (
        <div className="phone-container">
            <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                    <div className="app-header">
                        <div className="app-time">9:41</div>
                        <div className="app-status">
                            <span>5G</span>
                            <div className="battery-icon"></div>
                        </div>
                    </div>

                    <div className="app-content">
                        <div className="app-nav">
                            <div className="nav-avatar"></div>
                            <div className="nav-greeting">
                                <span>Welcome back</span>
                                <strong>Alex Morgan</strong>
                            </div>
                            <div className="nav-bell"></div>
                        </div>

                        <div className="balance-card">
                            <span className="balance-label">Total Balance</span>
                            <h2 className="balance-amount">$24,500.00</h2>
                            <div className="balance-growth">
                                <ArrowUpRight size={14} />
                                <span>+2.4% today</span>
                            </div>
                        </div>

                        <div className="action-buttons">
                            <div className="action-btn">
                                <div className="action-icon bg-orange-100">
                                    <ArrowUpRight size={20} color="#FF4800" />
                                </div>
                                <span>Send</span>
                            </div>
                            <div className="action-btn">
                                <div className="action-icon bg-blue-100">
                                    <Wallet size={20} color="#0066FF" />
                                </div>
                                <span>Request</span>
                            </div>
                            <div className="action-btn">
                                <div className="action-icon bg-purple-100">
                                    <Activity size={20} color="#8B5CF6" />
                                </div>
                                <span>Activity</span>
                            </div>
                        </div>

                        <div className="recent-activity">
                            <div className="section-header">
                                <h3>Recent Activity</h3>
                                <span>See all</span>
                            </div>

                            <div className="activity-item">
                                <div className="activity-icon bg-green-100">
                                    <CreditCard size={18} color="#10B981" />
                                </div>
                                <div className="activity-details">
                                    <span className="activity-name">Netflix Subscription</span>
                                    <span className="activity-date">Today, 10:00 AM</span>
                                </div>
                                <span className="activity-amount negative">-$15.99</span>
                            </div>

                            <div className="activity-item">
                                <div className="activity-icon bg-blue-100">
                                    <PieChart size={18} color="#3B82F6" />
                                </div>
                                <div className="activity-details">
                                    <span className="activity-name">Freelance Project</span>
                                    <span className="activity-date">Yesterday, 4:30 PM</span>
                                </div>
                                <span className="activity-amount positive">+$1,250.00</span>
                            </div>

                            <div className="chart-preview">
                                {/* Decorative bars */}
                                <div className="chart-bar" style={{ height: '40%' }}></div>
                                <div className="chart-bar" style={{ height: '60%' }}></div>
                                <div className="chart-bar" style={{ height: '35%' }}></div>
                                <div className="chart-bar" style={{ height: '80%' }}></div>
                                <div className="chart-bar" style={{ height: '55%' }}></div>
                                <div className="chart-bar active" style={{ height: '90%' }}></div>
                                <div className="chart-bar" style={{ height: '70%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="app-bottom-nav">
                        <div className="nav-item active"></div>
                        <div className="nav-item"></div>
                        <div className="nav-item"></div>
                    </div>
                </div>
            </div>

            {/* Background glow effects */}
            <div className="glow-effect glow-1"></div>
            <div className="glow-effect glow-2"></div>
        </div>
    );
};

export default SmartphoneMockup;
