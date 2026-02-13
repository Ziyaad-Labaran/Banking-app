import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import '../../styles/FifthThirdCard.css';

const FifthThirdCard = () => {
    const [showNumber, setShowNumber] = useState(false);

    const cardNumber = "5412 7501 2345 0987";
    const maskedNumber = "**** **** **** 0987";

    return (
        <div className="fifth-third-card">
            {/* Background Curves */}
            <div className="card-curves">
                <div className="curve-path curve-1"></div>
                <div className="curve-path curve-2"></div>
                <div className="curve-path curve-3"></div>
                <div className="curve-path curve-4"></div>
            </div>

            {/* Header: Logo & Card Type */}
            <div className="card-header">
                <div className="bank-logo">
                    <div style={{
                        border: '2px solid #fff',
                        borderRadius: '4px',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#0054a6',
                        position: 'relative',
                        marginBottom: '4px'
                    }}>
                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px', fontFamily: 'serif' }}>5/3</span>
                        <div style={{
                            position: 'absolute',
                            top: -2, left: -2, right: -2, bottom: -2,
                            border: '2px solid #2dbf5b',
                            borderRadius: '4px'
                        }}></div>
                    </div>
                    <span style={{ fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', fontFamily: 'serif' }}>Fifth Third Bank</span>
                </div>
                <div className="card-type-text" style={{ fontFamily: 'sans-serif', fontSize: '20px', fontWeight: '400' }}>PLATINUM</div>
            </div>

            {/* Chip */}
            <div className="card-chip">
                <div className="chip-line" style={{ width: '100%', height: '1px', top: '33%', position: 'absolute', background: 'rgba(0,0,0,0.1)' }}></div>
                <div className="chip-line" style={{ width: '100%', height: '1px', top: '66%', position: 'absolute', background: 'rgba(0,0,0,0.1)' }}></div>
                <div className="chip-line" style={{ width: '1px', height: '100%', left: '33%', position: 'absolute', background: 'rgba(0,0,0,0.1)' }}></div>
                <div className="chip-line" style={{ width: '1px', height: '100%', left: '66%', position: 'absolute', background: 'rgba(0,0,0,0.1)' }}></div>
                <div className="chip-center" style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '12px', height: '10px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '2px'
                }}></div>
            </div>

            {/* Card Number */}
            <div className="card-number-c" style={{ fontSize: '22px', letterSpacing: '2px', fontFamily: 'monospace', textShadow: '0px 1px 2px rgba(0,0,0,0.8)', marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                <span>{showNumber ? cardNumber : maskedNumber}</span>
                <button
                    onClick={() => setShowNumber(!showNumber)}
                    className="toggle-btn"
                    title={showNumber ? "Hide number" : "Show number"}
                    style={{ marginLeft: 'auto', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', opacity: 0.8 }}
                >
                    {showNumber ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>

            {/* Footer details */}
            <div className="card-details" style={{ display: 'flex', alignItems: 'flex-end', width: '100%', position: 'relative', marginTop: 'auto' }}>

                {/* Name - Bottom Left */}
                <div style={{ fontSize: '14px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '1px 1px 1px rgba(0,0,0,0.8)', zIndex: 2 }}>
                    Nooreen Coolidge
                </div>

                {/* Valid Thru - Center/Right offset */}
                <div style={{ position: 'absolute', left: '60%', transform: 'translateX(-50%)', bottom: '2px', display: 'flex', alignItems: 'center', zIndex: 2 }}>
                    <div style={{ fontSize: '5px', textTransform: 'uppercase', marginRight: '4px', lineHeight: '1', textAlign: 'right', fontFamily: 'sans-serif', opacity: 0.9 }}>
                        VALID<br />THRU
                    </div>
                    <span style={{ fontSize: '14px', fontFamily: 'monospace', textShadow: '1px 1px 1px rgba(0,0,0,0.8)' }}>12/35</span>
                </div>

                {/* Mastercard Logo - Bottom Right */}
                <div className="mastercard-logo" style={{ position: 'relative', width: '40px', height: '25px', marginLeft: 'auto', zIndex: 2 }}>
                    <div style={{ width: '25px', height: '25px', background: '#eb001b', borderRadius: '50%', position: 'absolute', left: '0' }}></div>
                    <div style={{ width: '25px', height: '25px', background: '#f79e1b', borderRadius: '50%', position: 'absolute', right: '0', opacity: '0.85' }}></div>
                    <div style={{ position: 'absolute', bottom: '-10px', right: '0', fontSize: '8px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>mastercard</div>
                </div>
            </div>
        </div>
    );
};

export default FifthThirdCard;
