import React, { useState } from 'react'

export default function Nav({ scroll, darken, home, nav, divide, about }) {
    

    setInterval( () => {
        const scroll = window.scrollY
        if(scroll >= 0 && scroll < about.current.offsetTop) {
            setHomeActive(true)
        } else setHomeActive(false)
        if(scroll >= about.current.offsetTop && scroll < home.current.scrollHeight + about.current.scrollHeight + nav.current.scrollHeight) {
            setAboutActive(true)
        } else setAboutActive(false)
        if(scroll >= home.current.scrollHeight + nav.current.scrollHeight + about.current.scrollHeight && scroll < divide.current.offsetTop) {
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
        className = {`nav ${darken ? 'dark' : ''}`} >

            <div role = 'button' tabIndex = '0' className = {`navitem ${homeActive}`} onClick = { () => scroll('home') } onKeyDown = { () => scroll('home') }
            >HOME</div>

            <div role = 'button' tabIndex = '0' className = {`navitem ${aboutActive}`} onClick = { () => scroll('about') } onKeyDown = { () => scroll('about') }
            >ABOUT</div>

            <div role = 'button' tabIndex = '0' className = {`navitem ${portActive}`} onClick = { () => scroll('projects') } onKeyDown = { () => scroll('projects') }
            >PROJECTS</div>

            <div role = 'button' tabIndex = '0' className = {`navitem ${contactActive}`} onClick = { () => scroll('contact') } onKeyDown = { () => scroll('contact') }
            >CONTACT</div>
            
        </div>
    )
}