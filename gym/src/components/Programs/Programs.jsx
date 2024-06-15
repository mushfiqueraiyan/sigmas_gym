import React from 'react'
import './Program.css'
import dumble from '../../assets/dumbell.png'


function Programs() {
  return (
    <div className="programs" id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="program-data">
            <div>
                <img src={dumble} alt="" />
                <h2>Strangth Training</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, iusto enim accusamus quia corrupti !</p>
                <button className='btn'>Join Now</button>
            </div>
            <div>
                <img src={dumble} alt="" />
                <h2>Strangth Training</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, iusto enim accusamus quia corrupti !</p>
                <button className='btn'>Join Now</button>
            </div>
            <div>
                <img src={dumble} alt="" />
                <h2>Strangth Training</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, iusto enim accusamus quia corrupti !</p>
                <button className='btn'>Join Now</button>
            </div>
            <div>
                <img src={dumble} alt="" />
                <h2>Strangth Training</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, iusto enim accusamus quia corrupti !</p>
                <button className='btn'>Join Now</button>
            </div>
        </div>
    </div>
  )
}

export default Programs