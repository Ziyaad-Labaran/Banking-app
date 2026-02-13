import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
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
    const { t } = useLanguage();

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
                        <img src="/Fifth-Third-Emblem.png" alt="Fifth Third Bank" className="logo-img" />
                    </div>
                    <h2 className="auth-title">{t('signIn')}</h2>
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
                        label={t('username')}
                        placeholder={t('usernamePlaceholder')}
                        {...register('email', { required: true })}
                        error={errors.email && t('usernameRequired')}
                    />

                    <Input
                        label={t('password')}
                        type="password"
                        placeholder={t('passwordPlaceholder')}
                        {...register('password', { required: true })}
                        error={errors.password && t('passwordRequired')}
                    />

                    <div className="form-actions">
                        <Button type="submit" variant="primary">
                            {t('signIn')}
                        </Button>
                    </div>

                    <div className="form-footer">
                        <a href="#" className="forgot-password">{t('forgotPassword')}</a>
                    </div>
                </form>

                <div className="auth-footer-links">
                    <a href="#">{t('contactUs')}</a>
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