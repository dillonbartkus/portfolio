import React from 'react'
import Flickity from 'react-flickity-component'
import one from './images/moms-screenshot1.png'
import two from './images/moms-screenshot2.png'
import three from './images/moms-screenshot3.png'
import four from './images/moms-screenshot4.png'
import five from './images/moms-screenshot5.png'

export default function () {

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
        <div className="carousel-cell"> <img src={one} alt='' /> </div>
        <div className="carousel-cell"><img src={two} alt='' /> </div>
        <div className="carousel-cell"><img src={three} alt='' /> </div>
        <div className="carousel-cell"><img src={four} alt='' /> </div>
        <div className="carousel-cell"><img src={five} alt='' /> </div>

      </Flickity>
    )
  }

  return (

    <div className='project-details'>

      {Carousel()}

      <h2
        onClick={() => window.open('https://savingmothers.org')}
        className='project-link'>Visit Site</h2>

      <p className='project-desc'>
        Saving Mothers is a non-profit that helps new mothers in developing countries. Myself and a volunteer team of designers
        and developers built them a website using WordPress.
      </p>

    </div>

  )
}