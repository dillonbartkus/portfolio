import React from 'react'
import Skills from './Skills'

export default function About({ aboutRef, darken }) {

    return (

        <div
            ref={aboutRef}
            className={`about ${darken ? 'dark' : ''}`}
        >

            <h1 className='title'>ABOUT</h1>
            <div className='titleunderline'></div>

            <p>
                A Full Stack developer, who enjoys building responsive web-apps, prototyping and iterating on new proofs of concept, and finding smart technical solutions to problems. Knowledgeable about Javascript desig npatterns, git pipelines, CI/CD, and unit / integration testing. Experience working with cross functional team members such as project managers, UX designers and data scientists.
                <br />
                Currently working at
                <span onClick={() => window.open('https://www.novata.com')}
                >Novata.com</span>

            </p>

            <Skills />

        </div>

    )
}