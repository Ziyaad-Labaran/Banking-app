import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import cardBg from '../../assets/fifth_third_bg.svg';
import '../../styles/FifthThirdCard.css';

const FifthThirdCard = () => {
    const [showNumber, setShowNumber] = useState(false);

    const fullNumber = "5412 7501 2345 0987";
    const maskedNumber = "**** **** **** 0987";

    return (
        <div
            className="fifth-third-card"
            style={{
                backgroundImage: `url(${cardBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
            }}
        >
            {/* Toggle Button */}
            <button
                onClick={() => setShowNumber(!showNumber)}
                className="toggle-btn-overlay"
                title={showNumber ? "Hide number" : "Show number"}
                aria-label={showNumber ? "Hide credit card number" : "Show credit card number"}
            >
                {showNumber ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>

            {/* Card Number Overlay */}
            <div className={`card-number-overlay`}>
                <span key={showNumber ? 'shown' : 'hidden'} className="number-text fade-in">
                    {showNumber ? fullNumber : maskedNumber}
                </span>
            </div>
        </div>
    );
};

export default FifthThirdCard;
