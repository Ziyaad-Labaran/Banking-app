import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/TransactionsPage.css';

const MOCK_TRANSACTIONS = [
    { id: 1, vendor: 'Netflix', amount: -15.99, date: 'Today, 10:42 AM', type: 'debit', category: 'Entertainment' },
    { id: 2, vendor: 'Upwork', amount: 1250.00, date: 'Yesterday, 4:30 PM', type: 'credit', category: 'Income' },
    { id: 3, vendor: 'Amazon', amount: -45.20, date: 'Oct 24, 2024', type: 'debit', category: 'Shopping' },
    { id: 4, vendor: 'Starbucks', amount: -5.75, date: 'Oct 23, 2024', type: 'debit', category: 'Food & Drink' },
    { id: 5, vendor: 'Uber', amount: -24.50, date: 'Oct 22, 2024', type: 'debit', category: 'Transport' },
    { id: 6, vendor: 'Salary', amount: 3500.00, date: 'Oct 15, 2024', type: 'credit', category: 'Income' },
    { id: 7, vendor: 'Spotify', amount: -9.99, date: 'Oct 14, 2024', type: 'debit', category: 'Entertainment' },
    { id: 8, vendor: 'Target', amount: -82.15, date: 'Oct 12, 2024', type: 'debit', category: 'Shopping' },
];

const TransactionsPage = () => {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTransactions = MOCK_TRANSACTIONS.filter(tx => {
        const matchesSearch = tx.vendor.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'all' || tx.type === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="transactions-page">
            <div className="page-header">
                <h1>Transactions</h1>
            </div>

            <div className="search-bar">
                <Search size={20} className="search-icon" />
                <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="filter-tabs">
                <button
                    className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className={`filter-tab ${filter === 'credit' ? 'active' : ''}`}
                    onClick={() => setFilter('credit')}
                >
                    Income
                </button>
                <button
                    className={`filter-tab ${filter === 'debit' ? 'active' : ''}`}
                    onClick={() => setFilter('debit')}
                >
                    Expense
                </button>
            </div>

            <div className="transactions-list-full">
                {filteredTransactions.map((tx) => (
                    <div key={tx.id} className="transaction-item-full">
                        <div className={`transaction-icon-lg ${tx.type === 'credit' ? 'credit' : 'debit'}`}>
                            {tx.type === 'credit' ? <ArrowDownLeft size={24} /> : <ArrowUpRight size={24} />}
                        </div>
                        <div className="transaction-details">
                            <div className="tx-top-row">
                                <span className="tx-vendor-lg">{tx.vendor}</span>
                                <span className={`tx-amount-lg ${tx.type === 'credit' ? 'positive' : ''}`}>
                                    {tx.type === 'credit' ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
                                </span>
                            </div>
                            <div className="tx-bottom-row">
                                <span className="tx-category">{tx.category}</span>
                                <span className="tx-date-sm">{tx.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ height: 80 }}></div>
        </div>
    );
};

export default TransactionsPage;
