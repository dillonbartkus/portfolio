import React from 'react'
import js from './images/js.png'
import react from './images/react.png'
import redux from './images/redux.png'

export default function Skills() {

    const images = [js, react, redux]
    const skills = ['Javascript (ES6)', 'React', 'Redux']

    return(

        <div className = 'skills'>

            <div className = 'skill-section'>

                <h2>I specialize in...</h2>

                {images.map( (img, id) => <div className = 'skill-listing'> <img src = {img} alt = {id} /> <p> {skills[id]} </p> </div> )}

                {/* <div className = 'skill-listing'>

                    <img src = {js} alt = '' />
                    <p>Javascript (ES6)</p>

                </div>

                <div className = 'skill-listing'>

                    <img src = {react} alt = '' />
                    <p>React</p>

                </div> */}

            </div>

            <div className = 'skill-section'>

                <h2>I have experience with...</h2>

                <div className = 'skill-listing'>

                    <img src = {redux} alt = '' />
                    <p>Redux</p>

                </div>

            </div>

        </div>

    )
}