import React, { useState } from 'react'
import Nav from './Nav'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import ProjectPopups from './ProjectPopups'

export default function Main({ scroll, aboutRef, portRef, divideRef, contactRef, navRef, homeRef }) {

    const [showProject, setShowProject] = useState('')

    return (

        <div
            className='main'
            onClick={() => showProject && setShowProject('')}
        >

            <Nav darken={showProject} home={homeRef} nav={navRef} divide={divideRef} about={aboutRef} port={portRef} scroll={scroll} />

            {
                showProject &&

                <ProjectPopups project={showProject} setProject={setShowProject} />

            }

            <About darken={showProject} aboutRef={aboutRef} />

            <Portfolio darken={showProject} portRef={portRef} show={setShowProject} />

            <Contact darken={showProject} divideRef={divideRef} contactRef={contactRef} />

            <Footer darken={showProject} scroll={scroll} />

        </div>

    )
}