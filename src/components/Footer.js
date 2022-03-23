import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className="footer-container" id="footer">
        <h2>Talk to me</h2>
        <p>Gilad Ben Bassat  |  0528521136  |  <span style={{ textDecoration: "underline" , cursor: "pointer" }} onClick={() => {window.location.href = 'mailto:giladmta@gmail.com'}}>giladmta@gmail.com</span></p>
        <SocialMedia />
    </footer>
  )
}

export default Footer