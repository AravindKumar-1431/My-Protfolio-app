import React from 'react'
import Navbar from '../components/Navbar'
import Heroproject from '../components/project'
import Footer from "../components/footer"
import Myprojects from '../components/myprojects'
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
