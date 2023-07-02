import React from 'react'
import Navbar from '../components/navBar/Navbar'
import Heroimage from '../components/homepage/Heroimg';
import Footer from "../components/footer/footer"

const Home = () => {
  return (
    <div>
    <Navbar/>
      <Heroimage/>
      <Footer/>
      
    </div>
  )
}

export default Home
