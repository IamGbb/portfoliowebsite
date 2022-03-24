import React from 'react'
import { social } from '../data'

const SocialMedia = () => {
  return (
    <div className="social-media-div">
        {social.map((link) => {
            return(
            <div> 
            <a href={link.url} key={link.id}
            className='icon-button'
            target="_blank"
            rel="noopener noreferrer"
             >
            {link.icon}
            </a>
            </div>
      
        )})}
        
    </div>
  )
}

export default SocialMedia