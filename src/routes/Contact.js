import React from 'react'
import Navbar from '../components/navBar/Navbar'
import Heroproject from '../components/project_header/project'
import Footer from "../components/footer/footer"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroproject heading=" Contact Me." text="Reach out to me using the information below" />
      <Footer/>
      

    </div>
  )
}

export default Contact
