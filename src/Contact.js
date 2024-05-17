import React from 'react'

export default function Contact({ contactRef, divideRef, darken }) {

    return (

        <>

            <div
                ref={divideRef}
                className={`divider ${darken ? 'dark' : ''}`}>
                <div className='first-half'></div>
                <div className='second-half'></div>
            </div>

            <div
                ref={contactRef}
                className={`contact ${darken ? 'dark' : ''}`}
            >

                <h1 className='title'>CONTACT</h1>
                <div className='titleunderline'></div>

                <form action="https://formspree.io/dillonbartkus@gmail.com" method="POST">
                    <input placeholder="Your Name" type="text" name="name" required />
                    <input placeholder="Your Email" type="email" name="email" required />
                    <textarea placeholder="Your Message" type="text" name="message" required />
                    <input type="submit" value="Submit" />
                </form>

            </div>

        </>

    )
}