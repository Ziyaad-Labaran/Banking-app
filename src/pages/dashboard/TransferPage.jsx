import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, CreditCard, User, DollarSign, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import '../../styles/TransferPage.css';

const TransferPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isProcessing, setIsProcessing] = useState(false);
    const [step, setStep] = useState(1);

    const onSubmit = (data) => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setStep(2); // Show success state
        }, 1500);
    };

    if (step === 2) {
        return (
            <div className="transfer-success">
                <div className="success-icon">
                    <Send size={48} color="white" />
                </div>
                <h2>Transfer Successful!</h2>
                <p>Your money is on its way.</p>
                <Button onClick={() => navigate('/dashboard')} className="mt-8">
                    Back to Dashboard
                </Button>
            </div>
        );
    }

    return (
        <div className="transfer-page">
            <div className="page-header">
                <h1>Transfer Money</h1>
            </div>

            <div className="transfer-card">
                <form onSubmit={handleSubmit(onSubmit)} className="transfer-form">
                    <div className="amount-input-wrapper">
                        <label>Amount</label>
                        <div className="currency-input">
                            <span className="currency-symbol">$</span>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="amount-field"
                                {...register('amount', { required: 'Amount is required', min: 1 })}
                            />
                        </div>
                        {errors.amount && <span className="error-text">Please enter a valid amount</span>}
                    </div>

                    <div className="recipient-section">
                        <h3>Recipient</h3>
                        <Input
                            label="Name or Email"
                            placeholder="e.g. John Doe"
                            icon={User}
                            {...register('recipient', { required: 'Recipient is required' })}
                            error={errors.recipient?.message}
                        />
                        <Input
                            label="Account Number / IBAN"
                            placeholder="XXXX-cur-XXXX"
                            icon={CreditCard}
                            {...register('account', { required: 'Account details required' })}
                            error={errors.account?.message}
                        />
                    </div>

                    <div className="note-section">
                        <Input
                            label="Note (Optional)"
                            placeholder="What's this for?"
                        />
                    </div>

                    <div className="transfer-actions">
                        <Button type="submit" variant="primary" disabled={isProcessing}>
                            {isProcessing ? 'Processing...' : 'Send Money'}
                            {!isProcessing && <ArrowRight size={20} />}
                        </Button>
                    </div>
                </form>
            </div>
            <div style={{ height: 80 }}></div>
        </div>
    );
};

export default TransferPage;
