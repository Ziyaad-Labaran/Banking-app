import React from 'react';
import { Plus } from 'lucide-react';
import '../../styles/BalanceCard.css';

const BalanceCard = ({ greeting, balance }) => {
    return (
        <div className="balance-section">
            <h1 className="greeting">{greeting}</h1>
            <div className="balance-wrapper">
                <span className="balance-label">Total Balance</span>
                <h2 className="balance-value">{balance}</h2>
            </div>
            <button className="add-money-btn">
                <Plus size={20} />
                <span>Add Money</span>
            </button>
        </div>
    );
};

export default BalanceCard;
