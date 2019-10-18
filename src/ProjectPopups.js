import React from 'react'
import './carousel.css'
import POne from './POne'

export default function({ project }) {

    return(

        <div className = 'popup'
        onClick = { e => e.stopPropagation()} >

            {
                project === 'log' &&
                <POne />
            }
            
        </div>

    )
}