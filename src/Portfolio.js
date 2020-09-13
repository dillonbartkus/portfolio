import React, { useState } from 'react'

export default function Portfolio({ portRef, show, darken }) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    setInterval( () => {
        setScreenWidth(window.innerWidth)
    }, 1000)

    if (screenWidth >= 600) return (

        <div
        ref = {portRef}
        className = {`portfolio ${darken ? 'dark' : ''}`}
        >

            <h1 className = 'title'>PROJECTS</h1>
            <div className = 'titleunderline'></div>

            <div className = 'projects'>

                <div className = {`project ${darken ? 'dark' : ''}`} id = 'log'>
                    <h1>Log.Ai</h1>
                    <button
                    onClick = { e => {
                        e.stopPropagation()
                        show('log')
                    }}
                    >LEARN MORE</button>
                </div>

                <div className = {`project ${darken ? 'dark' : ''}`} id = 'flowers'>
                    <h1>1800Flowers</h1>
                    <button
                    onClick = { e => {
                        e.stopPropagation()
                        show('flowers')
                    }}
                    >LEARN MORE</button>
                </div>

                <div className = {`project ${darken ? 'dark' : ''}`} id = 'paws'>
                    <h1>Paws-On</h1>
                    <button
                    onClick = { e => {
                        e.stopPropagation()
                        show('paws')
                    }}
                    >LEARN MORE</button>
                </div>

                <div className = {`project ${darken ? 'dark' : ''}`} id = 'moms'>
                    <h1>Saving Mothers</h1>
                    <button
                    onClick = { e => {
                        e.stopPropagation()
                        show('moms')
                    }}
                    >LEARN MORE</button>
                </div>

            </div>

        </div>
    )

    else return (

        <div
        ref = {portRef}
        className = {`portfolio ${darken ? 'dark' : ''}`}
        >

            <h1 className = 'title'>PROJECTS</h1>
            <div className = 'titleunderline'></div>

            <div className = 'projects'>

                <div className = {`project ${darken ? 'dark' : ''}`} id = 'log'
                    onClick = { e => {
                        e.stopPropagation()
                        show('log')
                    }} >
                </div>

                <div className = {`project ${darken ? 'dark' : ''}`} id = 'flowers'
                    onClick = { e => {
                        e.stopPropagation()
                        show('flowers')
                    }} >
                </div>

                <div className = {`project ${darken ? 'dark' : ''}`} id = 'paws'
                    onClick = { e => {
                        e.stopPropagation()
                        show('paws')
                    }} >
                </div>

                <div className = {`project ${darken ? 'dark' : ''}`} id = 'moms'
                    onClick = { e => {
                        e.stopPropagation()
                        show('moms')
                    }} >
                </div>

            </div>

        </div>
    )
}