import React from 'react'
import {skills} from '../data'
import Skill from './Skill'


const MySkills = () => {

  return (
    <div className='skills-container' id='skills'>
        <div className="projects-text">
            <h2>What sets me apart</h2>
            <div className='skills-cards'>
            {skills.map((skill) => {
                return (
                    <Skill key={skill.id} skill={skill}/>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default MySkills