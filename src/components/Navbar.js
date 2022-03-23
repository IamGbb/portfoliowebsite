import React, { useState, useRef, useEffect } from 'react'
import {Link} from "react-scroll"
import { FaBars, FaSun, FaMoon } from 'react-icons/fa'
import { links } from '../data'
import logo_dark from '../images/logo-01.svg'
import logo_light from '../images/logo-02.svg'

const getStorageTheme = () => {
  let theme = 'light-theme'
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme')
  }
  return theme;
}

const Navbar = () => {
   const [showLinks,setShowLinks] = useState(false);
   const linksContainerRef = useRef(null);
   const linksRef = useRef(null);
    const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const [theme, setTheme] = useState(getStorageTheme())

  useEffect(() =>{
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  },[theme])

  const changeTheme = () => {
    theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme');
  }

   useEffect(() =>{
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`;
    }
    else {
      linksContainerRef.current.style.height = '0px';
    }
  },[showLinks])
  return (
  <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={theme === 'light-theme' ? logo_light : logo_dark} className='logo' alt="logo" />
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars/>
        </button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
      <ul className="links" ref={linksRef}>
        {links.map((link)=>{
          const{id,url,text} = link;
          return (
          <li key={id}>
            <Link to={url} spy={true} smooth={true} offset={50} duration={700}>{text}</Link>  
          </li>
          );
        })}

        
      </ul>
      </div>
      <div className="theme">
        <button className='btn' onClick={() => changeTheme()}>{theme ==='dark-theme' ? <FaMoon/> : <FaSun/>}</button>
      </div>
      

      
    </div>
  </nav>
  )
}

export default Navbar
