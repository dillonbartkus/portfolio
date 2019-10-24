import React, { useState } from 'react'

export default function Skill({ img, skill }) {

    const [text, setText] = useState(false)
    
    const showText = () => {        
        setText(true)
        setTimeout( () => setText(false), 1000 )
    }
    
    return(

        <>

            <img src = {img} alt = ''
            onClick = { () => showText() }
            />

            <div className = {`mobile-skill ${text}`}>{skill}</div>

            <p>{skill}</p>

        </>
    )
}