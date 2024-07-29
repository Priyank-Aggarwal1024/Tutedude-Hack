import React from 'react';
import '../styles/about.css'
import meme from '../assets/meme.gif'
import aboutDesign from '../assets/about-design.png'
function About(props) {
    return (
        <section className="about">
            <div className="about-left">
                <div className="about-left-top">
                    <h2 className="about-heading">
                        About the Hackathon
                    </h2>
                    <img src={meme} alt="Meme" />
                </div>
                <div className="about-image about-sscreen">
                    <img src={aboutDesign} alt="UX Writting" />
                </div>
                <div className="about-left-bottom">
                    <p className="">Improve Your Design Skills: Join Tutedude's <b>48-Hour Design Hackathon!</b></p>
                    <p className="">This online event is open to everyone: students, professionals, graphic designers, developers, architects, and product designers.</p>
                    <p className="">Connect with people from around the world, share ideas, and learn from different viewpoints.</p>
                </div>
            </div>
            <div className="about-right">
                <div className="about-image about-lscreen">
                    <img src={aboutDesign} alt="UX Writting" />
                </div>
            </div>
        </section>
    );
}
export default About;