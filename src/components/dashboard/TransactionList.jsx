import React from 'react';
import { CreditCard, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import '../../styles/Transactions.css';

const transactions = [
    { id: 1, vendor: 'Netflix', amount: -15.99, date: 'Today', type: 'debit' },
    { id: 2, vendor: 'Upwork', amount: 1250.00, date: 'Yesterday', type: 'credit' },
    { id: 3, vendor: 'Amazon', amount: -45.20, date: 'Oct 24', type: 'debit' },
    { id: 4, vendor: 'Starbucks', amount: -5.75, date: 'Oct 23', type: 'debit' },
];

const TransactionList = () => {
    return (
        <div className="transaction-section">
            <div className="section-header">
                <h3>Transaction History</h3>
                <a href="/dashboard/transactions" className="see-all">See all</a>
            </div>
            <div className="transaction-list">
                {transactions.map((tx) => (
                    <div key={tx.id} className="transaction-item">
                        <div className={`transaction-icon ${tx.type === 'credit' ? 'credit' : 'debit'}`}>
                            {tx.type === 'credit' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                        </div>
                        <div className="transaction-info">
                            <span className="tx-vendor">{tx.vendor}</span>
                            <span className="tx-date">{tx.date}</span>
                        </div>
                        <span className={`tx-amount ${tx.type === 'credit' ? 'positive' : ''}`}>
                            {tx.type === 'credit' ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionList;
