import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import LanguageSelector from './LanguageSelector';
import '../styles/RightPanel.css';

const RightPanel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = React.useState('');
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // Validate credentials
        if (data.email === 'Salim123' && data.password === '505090') {
            setLoginError('');
            // Simulate successful login
            // alert('Login Successful! Welcome Noreen.');
            console.log('Login successful:', data);
            navigate('/dashboard');
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