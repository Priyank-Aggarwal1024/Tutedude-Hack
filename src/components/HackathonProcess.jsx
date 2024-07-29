import React from 'react';
import '../styles/hackathonProcess.css'
import Card from './reusable/Card';
function HackathonProcess(props) {
    const steps = [
        {
            stepNo: "01",
            stepHeading: "Form a team of 3- 5 Members",
            stepContent: "Gather a squad of 3-5 members. Don’t worry if you don’t have a team; you can join one during the event."
        },
        {
            stepNo: "02",
            stepHeading: "Register Now",
            stepContent: "Click 'Apply Now' above for exclusive participant details and access to the dedicated hackathon platform."
        },
        {
            stepNo: "03",
            stepHeading: "Design and Submit",
            stepContent: "Dive deep into the design process, unleash your creativity, and submit your innovative work before the deadline."
        },
        {
            stepNo: "04",
            stepHeading: "Evaluation",
            stepContent: "Your submissions will undergo careful evaluation to determine the finalists who will move forward in the competition."
        },
        {
            stepNo: "05",
            stepHeading: "Results Announcement",
            stepContent: "Top 10 winners will be announced, with the top team receiving the cash prize, celebrating creativity and achievement."
        },
    ]
    return (
        <section className="hackathon">
            <div className="hack-left-outer">
                <div className="hackathon-left">
                    <div className="hack-left-button">
                        Hackathon Process
                    </div>
                    <h2 className="hack-heading">You’re 5 steps away from participating in the Hackathon....</h2>
                </div>
            </div>

            <div className="hackathon-right">
                {
                    steps.map((item, idx) => <div className={`hack-step-card-outer ${idx % 2 == 0 ? "card-even" : "card-odd"}`}><Card item={item} /></div>)
                }
            </div>

        </section>
    );
}

export default HackathonProcess;