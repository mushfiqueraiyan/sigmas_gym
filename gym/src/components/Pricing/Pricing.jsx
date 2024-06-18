import React from 'react'
import './Pricing.css'
import health from '../../assets/heartHealth.svg'
import flame from '../../assets/flame.svg'
import dumble from '../../assets/dumbell.png'
import tick from '../../assets/tick.png'

function Pricing() {
  return (
    <div className='Pricing'>
        <div className='price'>
            <img src={health} alt="" />
            <span>BASICS PLAN</span>
            <h2> $25</h2>
            <div className="price-list">
                <img src={tick} alt="" />
                <span>2 hours of excercise</span>
            </div>
            <div className="price-list">
                <img src={tick} alt="" />
                <span>2 hours of excercise</span>
            </div>
            <div className="price-list">
                <img src={tick} alt="" />
                <span>2 hours of excercise</span>
            </div>
            <button className='btn'>JOIN NOW</button>
        </div>

        <div className='price color'>
            <img src={flame} alt="" />
            <span>MEGA PLAN</span>
            <h2> $25</h2>
            <div className="price-list">
                <img src={tick} alt="" />
                <span>2 hours of excercise</span>
            </div>
            <div className="price-list">
                <img src={tick} alt="" />
                <span>2 hours of excercise</span>
            </div>
            <div className="price-list">
                <img src={tick} alt="" />
                <span>2 hours of excercise</span>
            </div>
            <button className='btn'>JOIN NOW</button>
        </div>
        <div className='price'>
            <img src={dumble} alt="" />
            <span>PRO PLAN</span>
            <h2> $250</h2>
            <div className="price-list">
                <img src={tick} alt="" />
                <span>2 hours of excercise</span>
            </div>
            <div className="price-list">
                <img src={tick} alt="" />
                <span>2 hours of excercise</span>
            </div>
            <div className="price-list">
                <img src={tick} alt="" />
                <span>2 hours of excercise</span>
            </div>
            <button className='btn'>JOIN NOW</button>
        </div>
        
    </div>
  )
}

export default Pricing