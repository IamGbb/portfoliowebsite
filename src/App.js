import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import MySkills from './components/MySkills'
import Courses from './components/Courses'





function App() {
  
  return (
    <>
    <Navbar/>
    <Hero />
    <Projects/>
    <About />
    <MySkills/>
    <Courses/>
    <Footer/>
    </>

  )
}

export default App
