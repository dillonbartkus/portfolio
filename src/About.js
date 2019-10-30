import React from 'react'
import Skills from './Skills'

export default function About({ aboutRef, darken }) {

    return(

        <div
        ref = {aboutRef}
        className = {`about ${darken ? 'dark' : ''}`}
        >

            <h1 className = 'title'>ABOUT</h1>
            <div className = 'titleunderline'></div>

            <p>
                A Front-End web developer with a knowledge of the back-end. I build responsive web-apps for desktop
                and mobile using test-driven as well as behavior-driven processes. I am knowledgeable about Javascript design patterns,
                git pipelines, and unit / integration testing.

                Currently working at
                <span onClick = { () => window.open('https://log-ai.com') }
                >Log-Ai.</span>

            </p>

            <Skills />

        </div>

    )
}