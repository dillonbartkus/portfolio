import React from 'react'

export default function Portfolio({ portRef }) {

    return(

        <div
        ref = {portRef}
        className = 'portfolio'
        >

            <h1 className = 'title'>PROJECTS</h1>
            <div className = 'titleunderline'></div>

            <div className = 'projects'>

                <div className = 'project' id = 'log'
                onClick = { () => window.open('https://log-ai.com') }
                ></div>

                <div className = 'project' id = 'rugby'
                onClick = { () => window.open('https://playrugbyusa.org/') }
                ></div>

                <div className = 'project' id = 'paws'
                onClick = { () => window.open('https://paws-on.herokuapp.com/') }
                ></div>

                <div className = 'project' id = 'moms'
                onClick = { () => window.open('https://savingmothers.org/') }
                ></div>

            </div>

        </div>
    )
}