import React from 'react'

export default function Skill({ img, skill }) {

    return (

        <>

            <img src={img} alt='' />

            <div>{skill}</div>

        </>
    )
}