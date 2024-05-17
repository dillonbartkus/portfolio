import React from 'react'
import Skill from './Skill'

export default function LesserSkills({ images, skills }) {

    return images.map((img, id) => <div className='skill-listing' key={id}> <Skill img={img} skill={skills[id]} /> </div>)

}