import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Input from './Input';
import Button from './Button';
import LanguageSelector from './LanguageSelector';
import '../styles/RightPanel.css';

const RightPanel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = React.useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    // Check if we were redirected with a message
    const redirectMessage = location.state?.message;

    const onSubmit = (data) => {
        const success = login(data.email, data.password);
        if (success) {
            setLoginError('');
            const origin = location.state?.from?.pathname || '/dashboard';
            navigate(origin);
        } else {
            setLoginError('Invalid username or password');
        }
    };

    return (
        <div className="right-panel">
            <div className="auth-container">
                <div className="auth-header">
                    <div className="logo">
                        <span className="logo-text">First Third Bank</span>
                        <div className="logo-dot"></div>
                    </div>
                    <h2 className="auth-title">Sign In</h2>
                </div>

                {redirectMessage && (
                    <div style={{
                        padding: '12px',
                        backgroundColor: '#fffbeb',
                        border: '1px solid #fef3c7',
                        borderRadius: '8px',
                        color: '#92400e',
                        fontSize: '0.875rem',
                        marginBottom: '16px',
                        textAlign: 'center',
                        fontWeight: '500'
                    }}>
                        {redirectMessage}
                    </div>
                )}

                {loginError && (
                    <div className="login-error">
                        {loginError}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                    <Input
                        label="Email or Username"
                        placeholder="Enter Username or email"
                        {...register('email', { required: 'Email or Username is required' })}
                        error={errors.email?.message}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register('password', { required: 'Password is required' })}
                        error={errors.password?.message}
                    />

                    <div className="form-actions">
                        <Button type="submit" variant="primary">
                            Sign In
                        </Button>
                    </div>

                    <div className="form-footer">
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>
                </form>

                <div className="auth-footer-links">
                    <a href="#">Contact Us</a>
                    <span className="divider">•</span>
                    <LanguageSelector />
                </div>

                <div className="copyright">
                    © {new Date().getFullYear()} Payoneer Inc. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default RightPanel;