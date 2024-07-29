import React from 'react';
import '../../styles/card.css'
function Card({ item }) {
    return (
        <div className="hack-step-card">
            <div className="hack-step-card-no">
                {item.stepNo}
            </div>
            <div className="hack-step-card-heading">
                {item.stepHeading}
            </div>
            <div className="hack-step-card-content">
                {item.stepContent}
            </div>
        </div>
    );
}

export default Card;