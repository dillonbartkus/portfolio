import React from 'react'
import Intro from './Intro'
import Nav from './Nav'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'

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

      <Nav home = {homeRef} nav = {navRef} divide = {divideRef} about = {aboutRef} port = {portRef} scroll = {scrollToSection}  />

      <About aboutRef = {aboutRef} />

      <Portfolio portRef = {portRef} />

      <Contact divideRef = {divideRef} contactRef = {contactRef} />

      <Footer scroll = {scrollToSection} />

    </div>

  )
}