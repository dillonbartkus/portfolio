import React from 'react'
import Intro from './Intro'
import Nav from './Nav'
import About from './About'
import Portfolio from './Portfolio'
// import Contact from './Contact'
import Footer from './Footer'

export default function App() {

  const homeRef = React.createRef()
  const aboutRef = React.createRef()
  const portRef = React.createRef()
  const contactRef = React.createRef()

  const scrollToSection = e => {
    if (e === 'nav' || e === 'ABOUT') aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    e === 'HOME' && homeRef.current.scrollIntoView({ behavior: 'smooth' })
    e === 'PROJECTS' && portRef.current.scrollIntoView({ behavior: 'smooth' })
    e === 'CONTACT' && contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }  

  return (

    <div className= "App">

      <Intro homeRef = {homeRef} scroll = {scrollToSection} />

      <Nav scroll = {scrollToSection}  />

      <About aboutRef = {aboutRef} />

      <Portfolio portRef = {portRef} />

      {/* <Contact contactRef = {contactRef} /> */}

      <Footer scroll = {scrollToSection} />

    </div>

  )
}