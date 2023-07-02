import React from 'react'
import './Heroimg.css';
import pimg from '../asessts/hand-man-using-laptop-computer-dark_141345-69.avif';
import { Link } from 'react-router-dom';


const Heroimg = () => {
  return (
    <div className="hero"> 
    <div className="mask">
    <img className="into-img"src={pimg} alt='heroimg'/>
    </div>
      <div className='content'>
      <p> Hi, this is Aravind</p>
      <h1>React Developer</h1>
      
      <div>
      <Link to="/project" className="btn">Projects</Link>
      </div>
      <div className='bt1'>
      <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
      </div>
     
    </div>

    
  )
}

export default Heroimg
