import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import AddMoneyModal from './AddMoneyModal';
import ThemeToggle from './ThemeToggle';
import '../../styles/BalanceCard.css';

const BalanceCard = ({ greeting, balance }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="balance-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h1 className="greeting" style={{ margin: 0 }}>{greeting}</h1>
                <ThemeToggle />
            </div>
            <div className="balance-wrapper">
                <span className="balance-label">Total Balance</span>
                <h2 className="balance-value">{balance}</h2>
            </div>
            <button className="add-money-btn" onClick={() => setIsModalOpen(true)}>
                <Plus size={20} />
                <span>Add Money</span>
            </button>

            <AddMoneyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={(amount) => console.log(`Adding ${amount}`)}
            />
        </div>
    );
};

export default BalanceCard;
