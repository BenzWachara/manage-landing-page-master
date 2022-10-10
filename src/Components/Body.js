import React from "react";
import Slider from "./Slider";

import illustration from '../Images/illustration-intro.svg';
import backGround from '../Images/bg-tablet-pattern.svg';

function Body(){

    return(
        <section className="body-container2">
            <div className="body-container">
            <div className="banner" >
                <div className="wrap-bg">
                    <img className="illus-bg" src={backGround}/>
                </div>
                <div className="information">
                    <h1 className="banner-h1">Bring everyone together to build better products.</h1>
                    <p className="banner-p">Manage makes it simple for software teams<br/>to plan day-to-day 
                    tasks while keeping the<br/>larger team goals in view.</p>
                    <button className="btn-getstart">Get Started</button>
                </div>
                <div className="graph" >
                    <img src={illustration}/>
                </div>
            </div>

            <div className="manage-section">
            <img className="manage-bg" src={backGround}/>
                <div className="manage-left">
                <h2>What's different about<br/>Manage?</h2>
                <p className="info-p">Manage provides all the functionality your<br/>team needs, without 
                the complexity. Our<br/>software is tailor-made for modern digital<br/>
                product teams</p>
                </div>
                
                <div className="manage-right">
                    <div className="info-manage">
                        <div className="number-info">
                            <h3 className="number">01</h3>
                        </div>
                        <div className="h3-title">
                            <h3>Track company-wide progress</h3>
                        </div>
                        <div className="info">
                            
                            <p className="info-ppp">See how your day-to-day tasks fit into the wider vision. Go from 
                            tracking progress at the milestone level all the way done to the 
                            smallest of details. Never lose sight of the bigger picture again.</p>
                        </div>
                    </div>

                    <div className="info-manage">
                        <div className="number-info">
                            <h3 className="number">02</h3>
                        </div>
                        <div className="h3-title">
                            <h3>Advanced built-in reports</h3>
                        </div>
                        <div className="info">
                            <p className="info-ppp">Set internal delivery estimates and track progress toward company 
                            goals. Our customisable dashboard helps you build out the reports 
                            you need to keep key stakeholders informed.</p>
                        </div>
                    </div>

                    <div className="info-manage">
                        <div className="number-info">
                            <h3 className="number">03</h3>
                        </div>
                        <div className="h3-title">
                            <h3>Everything you need in one place</h3>
                        </div>
                        <div className="info">
                            <p className="info-ppp">Stop jumping from one service to another to communicate, store files, 
                            track tasks and share documents. Manage offers an all-in-one team 
                            productivity solution.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="they-said">
                <h2>What they've said</h2>
                <Slider/>
                <button className="btn-getstart space">Get Started</button>
            </div>
            
        </section>
    );
}

export default Body;