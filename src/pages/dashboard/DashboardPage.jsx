import React from 'react';
import BalanceCard from '../../components/dashboard/BalanceCard';
import CardCarousel from '../../components/dashboard/CardCarousel';
import TransactionList from '../../components/dashboard/TransactionList';

const DashboardPage = () => {
    return (
        <div className="dashboard-container">
            <BalanceCard greeting="Good morning, Noreen" balance="$700,527.00" />
            <div className="quick-actions">
                {/* Actions could go here or be part of the balance card as requested */}
            </div>
            <CardCarousel />
            <TransactionList />
            <div style={{ height: 80 }}></div> {/* Spacer for bottom nav mobile */}
        </div>
    );
};

export default DashboardPage;
