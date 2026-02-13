import React, { useState, useEffect } from 'react';
import { X, Check, Loader2, CreditCard } from 'lucide-react';
import '../../styles/Modal.css';

const AddMoneyModal = ({ isOpen, onClose, onConfirm }) => {
    const [amount, setAmount] = useState('');
    const [selectedId, setSelectedId] = useState(null);
    const [status, setStatus] = useState('idle'); // idle, processing, success

    const presets = [10, 50, 100, 200, 500, 1000];

    useEffect(() => {
        if (!isOpen) {
            setAmount('');
            setSelectedId(null);
            setStatus('idle');
        }
    }, [isOpen]);

    const handleSelectPreset = (val) => {
        setAmount(val.toString());
        setSelectedId(val);
    };

    const handleAmountChange = (e) => {
        const val = e.target.value.replace(/[^0-9]/g, '');
        setAmount(val);
        setSelectedId(null);
    };

    const handleConfirm = () => {
        if (!amount || parseInt(amount) <= 0) return;

        setStatus('processing');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            if (onConfirm) onConfirm(amount);

            // Close after success view
            setTimeout(() => {
                onClose();
            }, 2000);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={20} />
                </button>

                {status === 'success' ? (
                    <div className="success-anim-container">
                        <div className="check-circle">
                            <Check size={48} strokeWidth={3} />
                        </div>
                        <h2 className="modal-title">Success!</h2>
                        <p className="modal-subtitle">${amount} added to your balance</p>
                    </div>
                ) : (
                    <>
                        <div className="modal-header">
                            <h2 className="modal-title">Add Money</h2>
                            <p className="modal-subtitle">Select or enter the amount to top up</p>
                        </div>

                        <div className="amount-grid">
                            {presets.map((val) => (
                                <button
                                    key={val}
                                    className={`amount-option ${selectedId === val ? 'active' : ''}`}
                                    onClick={() => handleSelectPreset(val)}
                                >
                                    ${val}
                                </button>
                            ))}
                        </div>

                        <div className="custom-amount-wrapper">
                            <span className="currency-symbol">$</span>
                            <input
                                type="text"
                                className="custom-amount-input"
                                placeholder="Other amount"
                                value={amount}
                                onChange={handleAmountChange}
                            />
                        </div>

                        <span className="payment-method-label">Payment Method</span>
                        <div className="source-card">
                            <div className="card-mini-icon" style={{ background: '#002855' }}></div>
                            <div style={{ flex: 1 }}>
                                <p style={{ fontSize: '0.875rem', fontWeight: '600', margin: 0 }}>Fifth Third Platinum</p>
                                <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>Ending in 0987</p>
                            </div>
                            <CreditCard size={18} color="#64748b" />
                        </div>

                        <button
                            className="confirm-button"
                            onClick={handleConfirm}
                            disabled={!amount || status === 'processing'}
                        >
                            {status === 'processing' ? (
                                <>
                                    <div className="processing-spinner"></div>
                                    Processing...
                                </>
                            ) : (
                                `Add $${amount || '0'}`
                            )}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default AddMoneyModal;
