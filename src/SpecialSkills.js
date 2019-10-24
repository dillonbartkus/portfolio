import React from 'react'

export default function SpecialSkills({ images, skills }){

    return(    

        images.map( (img, id) => {
            return(
                <div className = 'skill-listing' key = {id}>

                    <img src = {img} alt = '' />
                    <p>{skills[id]}</p>

                </div>
            )
        } )
    )
}