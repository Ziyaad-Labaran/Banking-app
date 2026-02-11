import React from 'react';

const PlaceholderPage = ({ title }) => {
    return (
        <div style={{ padding: '24px', textAlign: 'center', color: '#64748b' }}>
            <h2>{title}</h2>
            <p>This feature is coming soon.</p>
        </div>
    );
};

export default PlaceholderPage;
