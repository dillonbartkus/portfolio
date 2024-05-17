import React from 'react'
import './carousel.css'
import Log from './Log'
import Paws from './Paws'
import Moms from './Moms'
import Flowers from './Flowers'

export default function ({ project, setProject }) {

    return (

        <div className='popup'
            onClick={e => e.stopPropagation()} >

            <div className='close-popup'
                onClick={() => setProject('')}
            >X</div>

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
                project === 'flowers' &&
                <Flowers />
            }

        </div>

    )
}