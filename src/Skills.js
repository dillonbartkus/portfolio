import React from 'react'
import SpecialSkills from './SpecialSkills'
import LesserSkills from './LesserSkills'
import js from './images/js.png'
import react from './images/react.png'
import css from './images/css.png'
import redux from './images/redux.png'
import graphql from './images/graphql.png'
import babel from './images/babel.png'
import node from './images/node.png'
import aws from './images/aws.png'
import jest from './images/jest.png'
import webpack from './images/webpack.png'
import gitlab from './images/gitlab.png'
import sass from './images/sass.png'

export default function Skills() {    

    const specialImages = [js, react, redux, css, webpack, babel]
    const specialSkills = ['JS (ES6)', 'React', 'Redux', 'CSS 3', 'Webpack', 'Babel']
    const lesserImages = [graphql, aws, jest, react, node, gitlab]
    const lesserSkills = ['GraphQL', 'AWS', 'Jest', 'React Native', 'Node', 'GitLab CI']

    return(

        <div className = 'skills'>

            <div className = 'skill-section'>

                <h2>I specialize in...</h2>

                <SpecialSkills images = {specialImages} skills = {specialSkills} />

            </div>

            <div className = 'skill-section'>

                <h2>I have experience with...</h2>

                <LesserSkills images = {lesserImages} skills = {lesserSkills} />

            </div>

        </div>

    )
}