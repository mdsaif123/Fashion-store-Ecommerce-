


import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';



const Hero = () => {
  return (
    <div className='container-fluid hero'>
      <div className="row">
        <div className="col-lg-10 hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon d-flex align-items-center gap-3">
              <p className="m-0">new</p>
              <img src={hand_icon} alt="" style={{width:"50px"}}/>
            </div>
            <p className='text-white d-flex'>collection for everyone</p>
          </div>
          <div className="hero-latest-btn d-flex justify-content-center align-items-center gap-3">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="col-lg-2 hero-right"> 
          {/* <img src={cartpng} alt="" className="img-fluid" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
