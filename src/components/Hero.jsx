import React from 'react';
import '../styles/hero.css'
import heroImg from '../assets/hero-img.png'
import Calendar from '../assets/Calendar.svg'
import Global from '../assets/Global.svg'
import people from '../assets/people.svg'
function Hero(props) {
    return (
        <section className="hero-section">
            <div className="hero-left">
                <div className="her-lef-join">
                    ANYONE CAN JOIN
                </div>
                <div className="hero-heading">
                    <div className="hero-heading-top">
                        Design 🖌️ Compete 🏁 and Win 🏆 at Tutedude's
                    </div>
                    <div className="hero-heading-bottom">
                        UI/UX Hackathon!
                    </div>
                </div>
                <div className="her-lef-middle">
                    <div className="hlm-div">
                        <div className="hlm-div-icon">
                            <img src={Global} alt="Global Icon" />
                        </div>
                        <div className="hlm-div-title">Mode:</div>
                        <div className="hlm-div-cont">Online</div>
                    </div>
                    <div className="hlm-div">
                        <div className="hlm-div-icon">
                            <img src={Calendar} alt="Calendar Icon" />
                        </div>
                        <div className="hlm-div-title">Date: </div>
                        <div className="hlm-div-cont">28th July to 29th July</div>
                    </div>
                    <div className="hlm-div">
                        <div className="hlm-div-icon">
                            <img src={people} alt="People Icon" />
                        </div>
                        <div className="hlm-div-title">Participants:</div>
                        <div className="hlm-div-cont">3 - 5 Members</div>
                    </div>
                </div>
                <div className="her-lef-bottom button-animation-parent">
                    Register Now for Free!
                    <div className="button-animation-div"></div>
                </div>
            </div>
            <div className="hero-right">
                <img src={heroImg} alt="Hero Image" />
            </div>
        </section>
    );
}

export default Hero;