import React, { useState } from 'react'
import './Navbar.css'
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick=() => setClick(!click);

    const [color,setcolor]=useState(false);
    const changecolor=()=>{
      if(window.scrollY >= 100){
        setcolor(true);}
        else{
          setcolor(false);
        }
    }
    window.addEventListener("scroll",changecolor)
  return (
    <div className={color ? "header header-bg":"header"}>
    <Link to="/"> <h1> Portfolio</h1> </Link>

    <ul className={click ?"nav-menu active":"nav-menu"}>
    <li>
    <Link to ="/">Home</Link>
    </li>
    <li>
    <Link to ="/project">Projects</Link>
    </li>
    <li>
    <Link to ="/about">About</Link>
    </li>
    <li>
    <Link to ="/contact">Contact</Link> 
    </li>
    </ul>

    <div className='hambargar' onClick={handleClick}>

    {click?(< FaTimes size={20} style={{color:"white"}}/>)
    :(<FaBars size={20} style={{color:"white"}}/>)}
    
    

    </div>
      
    </div>
  )
}

export default Navbar
