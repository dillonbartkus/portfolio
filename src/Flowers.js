import React from 'react'
import Flickity from 'react-flickity-component'
import one from './images/flowers-screenshot1.png'
import two from './images/flowers-screenshot2.png'
import four from './images/flowers-screenshot4.png'
import five from './images/flowers-screenshot5.png'
import six from './images/flowers-screenshot6.png'
import seven from './images/flowers-screenshot7.png'

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
          <div className="carousel-cell"> <img src = {one} alt = '' /> <p>I integrated a Twilio chatbot to answer customer service questions.</p> </div>
          <div className="carousel-cell"><img src = {two} alt = '' /> <p>I added a SmartGift Basket widget, which allows customers to send an exchangeable gift.</p> </div>
          <div className="carousel-cell"><img src = {four} alt = '' /> <p>I set up the subscription service, which allows customers to have recurring gifts delivered to them every so often.</p> </div>
          <div className="carousel-cell"><img src = {five} alt = '' /> <p>I added the Auth0 pop up authorization to log people in.</p> </div>
          <div className="carousel-cell"><img src = {six} alt = '' /> <p>I built out static pages, such as the plant store.</p> </div>
          <div className="carousel-cell"><img src = {seven} alt = '' /> </div>

        </Flickity>
        )
    }

    return(

        <div className = 'project-details'>

            {Carousel()}

            <h2
            onClick = { () => window.open('https://www.1800flowers.com') }
            className = 'project-link'>Visit Site</h2>

            <p className = 'project-desc'>
                1800Flowers is an ecommerce company dealing mainly in flowers, but also owns other food based brands,
                such as Harry and David. I worked on their multi-brand portal, a single react app which encompasses all of their
                brands at once. My work there included building out UI, adding GA tags, adding new features, and working on a self-service portal.
            </p>
            
        </div>

    )
}