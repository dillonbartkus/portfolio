import React, { useState } from 'react'

export default function Intro({ scroll, homeRef }) {

    const [showSite, setShowSite] = useState(false)

    return(

        <div
        ref = {homeRef}
        className = 'intro'>

            <div>

                <h2>Hello, I'm <span>Dillon Bartkus</span>.</h2>
                <h2>I'm a front-end web developer.</h2>

                <div
                onClick = { () => {
                    setShowSite(true)
                    scroll('nav')
                    setTimeout( () => setShowSite(false), 1000 )
                }}
                className = {`introbutton ${showSite}`} >View my work

                <div></div>

                </div>

            </div>

        </div>
    )
}