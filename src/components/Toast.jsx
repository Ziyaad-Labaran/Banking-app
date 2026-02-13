import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import './Toast.css';

const Toast = ({ message, isVisible, onClose, duration = 3000 }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose, duration]);

    if (!isVisible) return null;

    return (
        <div className="toast-overlay">
            <div className="toast-container">
                <CheckCircle size={20} className="toast-icon" />
                <span className="toast-message">{message}</span>
            </div>
        </div>
    );
};

export default Toast;
