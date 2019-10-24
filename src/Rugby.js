import React from 'react'
import Flickity from 'react-flickity-component'
import one from './images/rugby-screenshot1.png'
import two from './images/rugby-screenshot2.png'
import three from './images/rugby-screenshot3.png'
import four from './images/rugby-screenshot4.png'
import five from './images/rugby-screenshot5.png'

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
            onClick = { () => window.open('https://playrugbyusa.org') }
            className = 'project-link'>Visit Site</h2>

            <p className = 'project-desc'>
                Play Rugby USA is a non-profit that helps inner city kids learn good values through rugby. Myself and a volunteer team of designers
                and developers built them a website using WordPress.
            </p>
            
        </div>

    )
}