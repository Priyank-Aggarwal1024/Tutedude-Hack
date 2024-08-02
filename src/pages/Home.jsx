import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import ClaimPrizes from '../components/ClaimPrizes';
import HackathonProcess from '../components/HackathonProcess';
import HackathonSchedule from '../components/HackathonSchedule';
import GrandPrize from '../components/GrandPrize';

function Home(props) {
    return (
        <div className="home">
            <Navbar />
            <Hero />
            <About />
            <ClaimPrizes />
            <HackathonProcess />
            <HackathonSchedule />
            <GrandPrize />
            <div className="register-floater">
                <div className="her-lef-bottom button-animation-parent">
                    Register Now for Free!
                    <div className="button-animation-div"></div>
                </div>
            </div>
            {/* <ClaimPrizes /> */}
        </div>

    );
}

export default Home;