import React from 'react'
import './Reason.css'
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

function Reason() {
  return (
    <div className="reasons" id='reasons'>
        <div className="left">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <div className="right">
          <span>Some Reasons</span> 

          <div>
            <span className='stroke-text'>Why</span>
            <span> Choose us</span>
          </div>

          <div className='details'>

            <div>
                <img src={tick} alt="" />
                <span>RELIABLE PARTNERS</span>
            </div>

            <div>
                <img src={tick} alt="" />
                <span>RELIABLE PARTNERS</span>
            </div>

            <div>
                <img src={tick} alt="" />
                <span>RELIABLE PARTNERS</span>
            </div>

            <div>
                <img src={tick} alt="" />
                <span>RELIABLE PARTNERS</span>
            </div>

          </div>
          <span className='fontWeight'>OUR PARTNERS</span>
          <div className="partners">
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
            <img src={nb} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Reason