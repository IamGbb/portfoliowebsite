import React from 'react'
import { useLottie } from "lottie-react";

const Skill = ({skill}) => {

    const options = {
       animationData: skill.image,
       loop: true,
       autoplay: true,
       rendererSettings: {
       preserveAspectRatio: "xMidYMid slice",
       }
     };
   
     const { View } = useLottie(options)
    
    return (
    <article className='skill'>
        <div>
        {View}
        </div>
        <div className='skill-info'>
        <h3>{skill.title}</h3>
        <p>{skill.description}</p>
        </div>
    </article>
  )
}

export default Skill