import React from 'react'
import Navbar from '../components/navBar/Navbar'
import Heroproject from '../components/project_header/project'
import Footer from "../components/footer/footer"
import Myprojects from '../components/project_cardss/myprojects'
const Project = () => {
  return (
    <div>
    <Navbar/>
<Heroproject heading=" Projects.." text="My recent works are below"/>
<Myprojects/>
    <Footer/>
    </div>
  )
}

export default Project
