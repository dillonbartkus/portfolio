import React from 'react'
import './carousel.css'
import Log from './Log'
import Paws from './Paws'
import Moms from './Moms'
import Rugby from './Rugby'

export default function({ project }) {

    return(

        <div className = 'popup'
        onClick = { e => e.stopPropagation()} >

            {
                project === 'log' &&
                <Log />
            }

            {
                project === 'paws' &&
                <Paws />
            }

            {
                project === 'moms' &&
                <Moms />
            }

            {
                project === 'rugby' &&
                <Rugby />
            }
            
        </div>

    )
}