import React from 'react';
import { CreditCard, Plus } from 'lucide-react';
import FifthThirdCard from './FifthThirdCard';
import '../../styles/CardCarousel.css';

const cards = [
    { id: 2, type: 'Mastercard', last4: '8888', expiry: '09/25', color: 'bg-blue' },
];

const CardCarousel = () => {
    return (
        <div className="card-section">
            <h3 className="section-title">My Cards</h3>
            <div className="card-carousel">
                <FifthThirdCard />
                {cards.map((card) => (
                    <div key={card.id} className={`bank-card ${card.color}`}>
                        <div className="card-top">
                            <span className="card-type">{card.type}</span>
                            <CreditCard size={24} color="white" opacity={0.8} />
                        </div>
                        <div className="card-number">
                            **** **** **** {card.last4}
                        </div>
                        <div className="card-expiry">
                            <span>Expires</span>
                            <strong>{card.expiry}</strong>
                        </div>
                    </div>
                ))}
                <div className="add-card-btn">
                    <Plus size={24} />
                    <span>Add New</span>
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;
