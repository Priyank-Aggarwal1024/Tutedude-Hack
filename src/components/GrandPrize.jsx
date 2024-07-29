import React from 'react';
import '../styles/grandPrize.css'
import claimPrize from '../assets/claim-prize.png'
function GrandPrize(props) {
    return (
        <section className="grand-prize">
            <div className="claim-prize-ticket">
                <div className="cpt-left">
                    <img src={claimPrize} alt="Claim Prize" />
                </div>
                <div className="cpt-right">
                    <h2 className="cpt-heading">The Top 1 team will get a cash prize of  ₹6000/-</h2>
                    <div className="cpt-reserve button-animation-parent">
                        Reserve your spot now!
                        <div className="button-animation-div"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GrandPrize;