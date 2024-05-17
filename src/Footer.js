import React from 'react'
import backtotop from './images/backtotop.png'

export default function Footer({ scroll, darken }) {

    return (

        <div className={`footer ${darken ? 'dark' : ''}`}>

            <div className='backtotop' role='button' tabIndex='0' onClick={() => scroll('home')} onKeyDown={() => scroll('home')} >
                <img src={backtotop} alt='' />
            </div>

            <div className='medias'>

                <div className='media' id='linkedin' role='button' tabIndex='0' aria-label='linkedin'
                    onClick={() => window.open('https://www.linkedin.com/in/dillonbartkus')}
                    onKeyDown={() => window.open('https://www.linkedin.com/in/dillonbartkus')}
                ></div>

                <div className='media' id='email' role='button' tabIndex='0' aria-label='email'
                    onClick={() => window.location.href = "mailto:dillonbartkus@gmail.com"}
                    onKeyDown={() => window.location.href = "mailto:dillonbartkus@gmail.com"}
                ></div>

                <div className='media' id='git' role='button' tabIndex='0' aria-label='github'
                    onClick={() => window.open('https://github.com/dillonbartkus')}
                    onKeyDown={() => window.open('https://github.com/dillonbartkus')}
                ></div>

                <div className='media' id='resume' role='button' tabIndex='0' aria-label='resume'
                    onClick={() => window.open('https://resume.creddle.io/resume/bte84i04yl')}
                    onKeyDown={() => window.open('https://resume.creddle.io/resume/bte84i04yl')}
                ></div>

            </div>

            <h4 className='copyright'>DILLON BARTKUS <span>© 2020</span></h4>

        </div>
    )
}