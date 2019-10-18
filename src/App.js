import React from 'react'
import Intro from './Intro'
import Main from './Main'

export default function App() {

  const homeRef = React.createRef()
  const navRef = React.createRef()
  const aboutRef = React.createRef()
  const portRef = React.createRef()
  const contactRef = React.createRef()
  const divideRef = React.createRef()

  const scrollToSection = e => {
    if (e === 'nav' || e === 'about') aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    e === 'home' && homeRef.current.scrollIntoView({ behavior: 'smooth' })
    e === 'projects' && portRef.current.scrollIntoView({ behavior: 'smooth' })
    e === 'contact' && contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }  
  
  return (

    <div className= "App">

      <Intro homeRef = {homeRef} scroll = {scrollToSection} />

      <Main scroll = {scrollToSection} aboutRef = {aboutRef} portRef = {portRef} divideRef = {divideRef}
      contactRef = {contactRef} navRef = {navRef} homeRef = {homeRef} />

    </div>

  )
}