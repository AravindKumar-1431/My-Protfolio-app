import React from 'react'
import pimg from '../asessts/finalfantasy16ambitiontrailer-ign-blogroll-1666275029916.jpg';

import'./Heroimg';
const myresume = () => {
  return (
    <div className="hero"> 
    <div className="mask1">
    <img className="into-img"src={pimg} alt='heroimg'/>
    </div>
      <div className='content'>
      
      <h1>About me ?</h1>
      <p> Hi," I'm Aravind " Go through my Resume</p>
      
      
     
      <div className="bt1">
      <a className='btn ' href='https://ibb.co/VNGwHr5'> My Resume</a>
      </div>
      </div>
     
    </div>

  
  )
}

export default myresume
