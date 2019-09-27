import React, { useState } from 'react'

export default function Intro({ scroll, homeRef }) {

    const [showSite, setShowSite] = useState(false)

    return(

        <div
        ref = {homeRef}
        className = 'intro'>

            <div>

                <h2>Hello, I'm <span>Dillon Bartkus</span>.</h2>
                <h2>I'm a full-stack web developer.</h2>

                <div
                onClick = { () => {
                    setShowSite(true)
                    scroll('nav')
                    setTimeout( () => setShowSite(false), 1000 )
                }}
                className = {`introbutton ${showSite}`} >View my work

                <div></div>

                {/* { !showSite &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.172" height="20.397" viewBox="0 0 20.172 20.397">
                    <g id="Group_1" data-name="Group 1" transform="translate(-745.5 -452.089)">
                        <path id="Path_1" data-name="Path 1" d="M0,0H17.761" transform="translate(746.5 462.288)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                        <line id="Line_2" data-name="Line 2" x2="7.612" y2="8.788" transform="translate(756.649 453.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                        <line id="Line_3" data-name="Line 3" y1="8.788" x2="7.612" transform="translate(756.649 462.288)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                    </g>
                </svg> }

                { showSite &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.397" height="20.172" viewBox="0 0 20.397 20.172">
                        <g id="Group_1" data-name="Group 1" transform="translate(472.487 -745.5) rotate(90)">
                            <path id="Path_1" data-name="Path 1" d="M0,0H17.761" transform="translate(746.5 462.288)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                            <line id="Line_2" data-name="Line 2" x2="7.612" y2="8.788" transform="translate(756.649 453.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                            <line id="Line_3" data-name="Line 3" y1="8.788" x2="7.612" transform="translate(756.649 462.288)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                        </g>
                    </svg> } */}

                </div>

            </div>

        </div>
    )
}