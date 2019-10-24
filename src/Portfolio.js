import React from 'react'

export default function Portfolio({ portRef, show, darken }) {    

    return(

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

                <div className = {`project ${darken ? 'dark' : ''}`} id = 'rugby'>
                    <h1>Play Rugby USA</h1>
                    <button
                    onClick = { e => {
                        e.stopPropagation()
                        show('rugby')
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
}