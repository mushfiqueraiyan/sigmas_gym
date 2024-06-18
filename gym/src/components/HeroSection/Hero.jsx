import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'

function Hero() {
  return (
    <div className="hero">
        <div className="left-h">
          
            <Header/>
          <div className="the-best-ads">
            <div></div>
            <span>The best fitness club in the town</span>
          </div>

          {/*Hero Heading*/}

          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
              </div>
              <div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid saepe <br /> dolores molestiae, modi fugiat ipsa iure ullam ducimus consequuntur impedit.
                </span>
              </div>
          </div>

          {/*Experience figure*/}

          <div className="figures">
            <div>
              <span>+140</span><span>expert coaches</span>
              </div>
            <div>
              <span>+240</span><span>members joins</span>
              </div>
            <div>
              <span>+420</span><span>memebers run away</span>
              </div>
          </div>

          {/*hero button*/}

          <div className="hero-btn">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Wake up</buttons>
          </div>
      </div>
        
        <div className="right-h">

            <div className="heart-rate">
              <img src={heart} alt="" />
              <span>Heart Rate </span><span>116 bpm</span>
            </div>

            {/*hero images*/}

            <img src={hero_image} alt="" className='hero-image'/>
            <img src={hero_image_back} alt="" className='hero-image-back'/>
        </div>
    </div>
  )
}

export default Hero