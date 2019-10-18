import React from 'react'
import Flickity from 'react-flickity-component'
import log from './images/log.png'

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
          <div className="carousel-cell projectone"> <img src = {log} alt = '' /> </div>
          <div className="carousel-cell projectone"><img src = {log} alt = '' /> </div>
          <div className="carousel-cell projectone"><img src = {log} alt = '' /> </div>

        </Flickity>
        )
    }

    return(

        <div className = 'project-details'>

            {Carousel()}
            
        </div>

    )
}