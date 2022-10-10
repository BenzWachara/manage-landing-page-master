import React from "react";
import "../Style/Slider.css"
import { useState,useEffect,useRef } from "react";
import {motion} from "framer-motion";

import AnishaLi from "../Images/avatar-anisha.png"
import AliBravo from "../Images/avatar-ali.png"
import RichardWatts from "../Images/avatar-richard.png"
import ShanaiGough from "../Images/avatar-shanai.png"

function Slider(){

    const [ width,setWidth ] = useState(0);
    const carousel = useRef();

    const [profile, setProfile] = useState(0);

    const sizeScreen = window.innerWidth;

    useEffect(()=>{
        setWidth((carousel.current.scrollWidth -sizeScreen)/1.93);
    },[]);

    const peopleSaid = [
        {image:AnishaLi ,namepp:'Anisha Li',said:'“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'},
        {image:AliBravo ,namepp:'Ali Bravo',said:'"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel contusion and evervone is much more focused."'},
        {image:RichardWatts ,namepp:'Richard Watts',said:'“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'},
        {image:ShanaiGough ,namepp:'Shanai Gough',said:'“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'}
    ];

    return(
        <section className="slider-section">
            <div className="slide-mobile">
                <div className="item-carousel">
                <div className="slider">   
                            <img src={peopleSaid[profile].image}/>
                                <div className="box-profile">
                                <h3>{peopleSaid[profile].namepp}</h3>
                                <p>{peopleSaid[profile].said}</p>
                            </div>
                    </div>
                </div>

                <div className="wrap-bullet">
                <button className="bullet-profile" onClick={()=>setProfile(0)}></button>
                <button className="bullet-profile" onClick={()=>setProfile(1)}></button>
                <button className="bullet-profile" onClick={()=>setProfile(2)}></button>
                <button className="bullet-profile" onClick={()=>setProfile(3)}></button>
            </div>

            </div>
                

            <motion.div 
                ref={carousel} 
                className="carousel" 
                whileTap={{cursor:"grabbing"}}>
                <motion.div 
                    className="inner-carousel"
                    drag="x"
                    dragConstraints={{ right:width, left: -width}}
                >
                    
                        {peopleSaid.map(({image,namepp,said})=>(
                            <motion.div className="item-carousel">
                            <div className="slider">   
                            <img src={image}/>
                                <div className="box-profile">
                                <h3>{namepp}</h3>
                                <p>{said}</p>
                                </div>
                            </div>
                            </motion.div>
                        ))}
                    
                </motion.div>
            </motion.div>
            
        </section>
    );
}

export default Slider;