import React from "react";
import Header from "../Header/Header";
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion}  from "framer-motion";
import NumberCounter from "number-counter";


function Hero() {
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true : false;
    return(
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-hero">
                <Header />

                <div className="the-best-ad">
                    <motion.div 
                        initial={{left: mobile? "158px" : "200px"}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type:'tween'}}
                    >
                    </motion.div>
                    <span>The best fitness club in town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>your</span>
                    </div>
                    <div><span>Ideal body</span></div>

                    <div>
                        <span>In here, we will help you to shape and build your Ideal body and live up your life to the fullest.</span>
                    </div>
                </div>

                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={165} start={100} delay="5" preFix="+" /> 
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={974} start={800} delay="5" preFix="+" /> 
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={65} start={41} delay="5" preFix="+" />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>

            <div className="right-hero">
                <button className="btn">Join Now</button>

                <motion.div
                    initial={{right: '-1rem'}}
                    whileInView={{right: '4rem'}}
                    transition={transition}
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116bpm</span>
                </motion.div>

                {/* hero images */}
                <img src={hero_image} className="hero-image" alt="" />
                <motion.img 
                    initial={{right: '11rem'}}
                    whileInView={{right: '20rem'}}
                    transition={transition}
                    src={hero_image_back} className="hero-image-back" />

                {/* calories */}
                <motion.div 
                    initial={{right: '37rem'}}
                    whileInView={{right: '28rem'}}
                    transition={transition}
                    className="calories">
                    <img src={Calories} className="calories-img" alt="" />
                    <div className="calories-one">
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;