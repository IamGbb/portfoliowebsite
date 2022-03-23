import React from 'react'
import { BiLinkExternal} from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa'




const Card = ({project}) => {
  return (
    <article className='card'>
        <div>
        <img src={project.image} alt={project.name} className='img'/>
        </div>
        <div className='project-info'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        </div>
        <span>{project.technologies}</span>
        <div className='link-icons'>
            <a href={project.linkGit}><FaGithub/></a>
            <a href={project.linkWeb}><BiLinkExternal/></a>
        </div>
    </article>
  )
}

export default Card