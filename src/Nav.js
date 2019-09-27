import React, { useState } from 'react'

export default function Nav({ scroll }) {

    const [homeClicked, setHomeClicked] = useState(true)
    const [aboutClicked, setAboutClicked] = useState(false)
    const [projectClicked, setProjectClicked] = useState(false)
    
    return(

        <div className = 'nav'>

            <span className = {`navitem ${homeClicked}`} onClick = { e => {
                setHomeClicked(true)
                setAboutClicked(false)
                setProjectClicked(false)
                scroll(e.target.innerHTML)
            }}
            >HOME</span>

            <span className = {`navitem ${aboutClicked}`} onClick = { e => {
                setAboutClicked(true)
                setHomeClicked(false)
                setProjectClicked(false)
                scroll(e.target.innerHTML)
            }}
            >ABOUT</span>

            <span className = {`navitem ${projectClicked}`} onClick = { e => {
                setProjectClicked(true)
                setHomeClicked(false)
                setAboutClicked(false)
                scroll(e.target.innerHTML)
            }}
            >PROJECTS</span>

            {/* <span onClick = { e => scroll(e.target.innerHTML) }>CONTACT</span> */}
            
        </div>
    )
}