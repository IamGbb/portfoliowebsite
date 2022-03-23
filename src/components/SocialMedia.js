import React from 'react'
import { social } from '../data'

const SocialMedia = () => {
  return (
    <div className="social-media-div">
        {social.map((link) => {
            return(
            <div key={link.id}> 
            <a href={link.url}
            className='icon-button socialIcon'
            target="_blank"
            rel="noopener noreferrer"
             >
            {link.icon}
            <span></span>
            </a>
            </div>
      
        )})}
        
    </div>
  )
}

export default SocialMedia