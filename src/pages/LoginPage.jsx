import React from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import '../styles/LoginPage.css';

const LoginPage = () => {
    return (
        <div className="login-container">
            <LeftPanel />
            <RightPanel />
        </div>
    );
};

export default LoginPage;
