import React, { useState } from 'react'

export default function Nav({ scroll, nav, divide, about, port }) {

    setInterval( () => {
        const scroll = window.scrollY        
        if(scroll >= 0 && scroll < about.current.offsetTop) {
            setHomeActive(true)
        } else setHomeActive(false)
        if(scroll >= about.current.offsetTop && scroll < port.current.offsetTop) {
            setAboutActive(true)
        } else setAboutActive(false)
        if(scroll >= port.current.offsetTop && scroll < divide.current.offsetTop) {
            setPortActive(true)
        } else setPortActive(false)
        if(scroll >= divide.current.offsetTop) {
            setContactActive(true)
        } else setContactActive(false)
    }, 100)

    const [homeActive, setHomeActive] = useState(false)
    const [aboutActive, setAboutActive] = useState(false)
    const [portActive, setPortActive] = useState(false)
    const [contactActive, setContactActive] = useState(false)
    
    return(

        <div
        ref = {nav}
        className = 'nav'>

            <span className = {`navitem ${homeActive}`} onClick = { () => scroll('home') }
            >HOME</span>

            <span className = {`navitem ${aboutActive}`} onClick = { () => scroll('about') }
            >ABOUT</span>

            <span className = {`navitem ${portActive}`} onClick = { () => scroll('projects') }
            >PROJECTS</span>

            <span className = {`navitem ${contactActive}`} onClick = { () => scroll('contact') }
            >CONTACT</span>
            
        </div>
    )
}