import React, { Component } from 'react'
import'./project.css';
import pimg from '../asessts/ai-generated-8020815_1280.webp';



class heroproject extends Component  {
    render(){
        return (

            <div className='hero'>
            
            <div className='mask1'>
            <img className="into-img"src={pimg} alt='heroimg'/></div>
        
            <div className="content" >
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
            </div>
            </div>
            
          )
        }
    }
  

export default heroproject
