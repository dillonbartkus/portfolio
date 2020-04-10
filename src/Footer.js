import React from 'react'
import backtotop from './images/backtotop.png'

export default function Footer({ scroll, darken }) {

    return(

        <div className = {`footer ${darken ? 'dark' : ''}`}>

            <div className = 'backtotop'>
            <img src = {backtotop} alt = ''
            onClick = { () => scroll('home') }
            />
            </div>

            <div className = 'medias'>

                <div className = 'media' id = 'linkedin'
                onClick = { () => window.open('https://www.linkedin.com/in/dillonbartkus') }
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

            <h4 className = 'copyright'>DILLON BARTKUS <span>© 2020</span></h4>

        </div>
    )
}