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
        <>
            <Navbar />
            <Hero />
            <About />
            <ClaimPrizes />
            <HackathonProcess />
            <HackathonSchedule />
            <GrandPrize />
            {/* <ClaimPrizes /> */}
        </>

    );
}

export default Home;