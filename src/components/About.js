import React from 'react'
import { useLottie } from "lottie-react";
import animation from "../images/about-lottie.json";


const About = () => {
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
    <div className='about-container' id='about'>

        <div className='about-content'>
          <div className='about-image'>
            {View}
          </div>
          <div className='about-text'>
            <h2>About me</h2>
            <p>I'm Gilad, a team player, a sole learner.
              When i'm passionate about something, i learn it.
              I learned guitar, ukulele, piano, video editing, animation, and now - web development.
            </p>
            <p>⚡ Front-end technologies - React, Redux, ContextAPI, HTML, CSS, jQuery, Lottie</p>
            <p>⚡ Back-end technologies - NodeJs, Express, mongoDb</p>
          <button className="button" onClick={() => {window.location.href = 'https://drive.google.com/file/d/1HTvK4H1i5dgDWY496pXoV5IF5QmLPpwr/view?usp=sharing'}}>My CV</button>
          </div>
        </div>
    </div>
  )
}

export default About