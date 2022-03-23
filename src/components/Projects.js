import React from 'react'
import { projects } from '../data.js'
import Card from './Card'

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
        <div className="projects-text">
            <h2>My Projects</h2>
            <div className='projects-cards'>
            {projects.map((project) => {
                return (
                    <Card key={project.id} project={project}/>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Projects