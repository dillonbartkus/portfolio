import React from 'react'
import Flickity from 'react-flickity-component'
import one from './images/log-screenshot1.png'
import two from './images/log-screenshot2.png'
import three from './images/log-screenshot3.png'
import four from './images/log-screenshot4.png'
import five from './images/log-screenshot5.png'
import six from './images/log-screenshot6.png'
import seven from './images/log-screenshot7.png'
import eight from './images/log-screenshot8.png'
import nine from './images/log-screenshot9.png'

export default function() {

    const options = {
      autoPlay: 3000,
      pauseAutoPlayOnHover: false,
      wrapAround: true,
      fullscreen: true
    }

    const Carousel = () => {

      return (
        <Flickity
          className={'carousel'}
          options={options}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <div className="carousel-cell"> <img src = {one} alt = '' /> </div>
          <div className="carousel-cell portrait"><img src = {two} alt = '' /> </div>
          <div className="carousel-cell portrait"><img src = {three} alt = '' /> </div>
          <div className="carousel-cell"><img src = {four} alt = '' /> </div>
          <div className="carousel-cell"><img src = {five} alt = '' /> </div>
          <div className="carousel-cell"><img src = {six} alt = '' /> </div>
          <div className="carousel-cell"><img src = {seven} alt = '' /> </div>
          <div className="carousel-cell"><img src = {eight} alt = '' /> </div>
          <div className="carousel-cell"><img src = {nine} alt = '' /> </div>

        </Flickity>
        )
    }

    return(

        <div className = 'project-details'>

            {Carousel()}
            
        </div>

    )
}