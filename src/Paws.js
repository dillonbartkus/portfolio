import React from 'react'
import Flickity from 'react-flickity-component'
import one from './images/paws-screenshot1.png'
import two from './images/paws-screenshot2.png'
import three from './images/paws-screenshot3.png'
import four from './images/paws-screenshot4.png'
import five from './images/paws-screenshot5.png'

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
          <div className="carousel-cell"><img src = {two} alt = '' /> </div>
          <div className="carousel-cell"><img src = {three} alt = '' /> </div>
          <div className="carousel-cell"><img src = {four} alt = '' /> </div>
          <div className="carousel-cell"><img src = {five} alt = '' /> </div>

        </Flickity>
        )
    }

    return(

        <div className = 'project-details'>

            {Carousel()}

            <h2
            onClick = { () => window.open('https://paws-on.org') }
            className = 'project-link'>Visit Site</h2>

            <p className = 'project-desc'>
                Paws-On is a social media site made to help people rescue homeless or injured animals, or help people find their lost pet.
                React front end with Node / Express back-end and PSQL database all hosted on Heroku.
            </p>
            
        </div>

    )
}