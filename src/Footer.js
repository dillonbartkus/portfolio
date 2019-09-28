import React from 'react'
import backtotop from './images/backtotop.png'

export default function Footer({ scroll }) {

    return(

        <div className = 'footer'>

            <div className = 'backtotop'
            onClick = { () => scroll('home') }
            >
            <img src = {backtotop} alt = '' />
            </div>

            <div className = 'medias'>

                <div className = 'media' id = 'linkedin'
                onClick = { () => window.open('https://www.linkedin.com/in/dillon-bartkus-7594b396/') }
                ></div>

                <div className = 'media' id = 'email'
                onClick = { () => window.location.href = "mailto:dillonbartkus@gmail.com" }
                ></div>

                <div className = 'media' id = 'git'
                onClick = { () => window.open('https://github.com/dillonbartkus') }
                ></div>

                <div className = 'media' id = 'resume'
                onClick = { () => window.open('https://resume.creddle.io/resume/bte84i04yl') }
                ></div>

            </div>

            <h4 className = 'copyright'>DILLON BARTKUS <span>© 2019</span></h4>

        </div>
    )
}