import React from 'react';
import '../styles/hackathonSchedule.css'
function HackathonSchedule(props) {
    return (
        <div className="hackathon-schedule">
            <div className="hacksch-left-design  hacksch-left-design-horizontal ">
                {Array(6).fill(1).map((item, idx) => <div key={idx}></div>)}
            </div>
            <div className="hacksch-left-design  hacksch-left-design-vertical ">
                {Array(6).fill(1).map((item, idx) => <div key={idx}></div>)}
            </div>
            <div className="hacksch-right-design  hacksch-right-design-horizontal ">
                {Array(6).fill(1).map((item, idx) => <div key={idx}></div>)}
            </div>
            <div className="hacksch-right-design  hacksch-right-design-vertical ">
                {Array(6).fill(1).map((item, idx) => <div key={idx}></div>)}
            </div>
            <div className="hacksch-circle-left"></div>
            <div className="hacksch-circle-right"></div>
            <h2 className="hackathon-schedule-heading">The Design Hackathon Schedule</h2>
            <div className="hackathon-schedule-cards">
                <div className="hackathon-schedule-card">
                    <div className="hack-sch-card-top hack-sch-parent">
                        <div className="hack-sch-card-arrow">Day 0</div>
                        <div className="hack-sch-arrow-stick"></div>
                        <div className="hack-sch-animation hack-sch-animation-1"></div>
                    </div>
                    <div className="hack-sch-card-bottom">
                        <div className="hscb-top">
                            <div className="hscb-date">28<sup>th</sup> JULY</div>
                            <div className="hscb-topic">Designing Starts</div>
                        </div>
                        <div className="hscb-horizontal"></div>
                        <div className="hscb-bottom">
                            <div className="hscb-time">6:50pm Reporting Time</div>
                            <div className="hscb-time">6:50pm Opening Ceremony</div>
                        </div>
                    </div>
                </div>
                <div className="hackathon-schedule-card">
                    <div className="hack-sch-card-top hack-sch-parent">
                        <div className="hack-sch-card-arrow">Day 1</div>
                        <div className="hack-sch-arrow-stick"></div>
                        <div className="hack-sch-animation hack-sch-animation-2"></div>

                    </div>
                    <div className="hack-sch-card-bottom">
                        <div className="hscb-top">
                            <div className="hscb-date">29<sup>th</sup> JULY</div>
                            <div className="hscb-topic">Planning and Execution</div>
                        </div>
                        <div className="hscb-horizontal"></div>
                        <div className="hscb-bottom">
                            <div className="hscb-time">11:30pm Task Updates</div>
                        </div>
                    </div>
                </div>
                <div className="hackathon-schedule-card">
                    <div className="hack-sch-card-top">
                        <div className="hack-sch-card-arrow">Day 2</div>
                    </div>
                    <div className="hack-sch-card-bottom">
                        <div className="hscb-top">
                            <div className="hscb-date">30<sup>th</sup> JULY</div>
                            <div className="hscb-topic">Final Entry</div>
                        </div>
                        <div className="hscb-horizontal"></div>
                        <div className="hscb-bottom">
                            <div className="hscb-time">10:30PM Submission</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HackathonSchedule;