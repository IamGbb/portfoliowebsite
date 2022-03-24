import React from 'react'
import SocialMedia from './SocialMedia'
import { useLottie } from "lottie-react";
import animation from "../images/animation.json";



const Hero = () => {
  const options = {
    animationData: animation,
    loop: true,
    autoplay: true,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    }
  };
  
  const { View } = useLottie(options);
  return (
<div className="hero-main" id="greeting">

          <div className="hero-text-div">
              <h1 className="hero-text">Hello</h1>
              <p className="hero-text-p">
                <span>I'm </span>
                <span id='name'>
                  Gilad Ben Bassat.
                </span><br/>
                <span>a full-stack developer</span>
              </p>
              <SocialMedia />
                <button className="button" onClick={() => {window.location.href = 'https://drive.google.com/file/d/1HTvK4H1i5dgDWY496pXoV5IF5QmLPpwr/view?usp=sharing'}}>
                  My CV
                </button>
          </div>

          <div className="hero-image-div">
            {View}
          </div>

      </div>
  )
}

export default Hero