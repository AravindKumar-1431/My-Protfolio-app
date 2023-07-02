import React from 'react'
import "../project_cardss/myprojects.css";
import pro1 from '../asessts/gtp3.jpg'
import pro2 from '../asessts/mymoviebook.jpg'
import pro3 from '../asessts/zomatolanding.jpg'


const myprojects = () => {
  return (
    <div  className="work-container">
    <h1 className='project-heading'>PROJECTS</h1> 
    <div className="project-container">

    <div className="project-card1"><img className='imga' src={pro1} alt="image1"/>
    <h2>GPT3</h2>
    <p>This Website is desigend  by using Reactjs modern ui/ux design </p>
    <div className='btn1'><a href='https://gpt3-uiux.netlify.app/'>view</a> </div>
    <div className='btn1'><a href='https://github.com/AravindKumar-1431/GPT-3Fully-Responsive-Modern-UI-UX-Website-in-React-JS'>Source</a></div>
    </div>

    <div className="project-card2"><img className='imga' src={pro2} alt="image2"/>
    <h2>Movie Ticket Booking</h2>
    <p>It is movie ticket booking web App using Reactjs. And it is a Full Stack project</p>
    <div className='btn1'><a href='https://mymoviebookingapp.netlify.app/'>view</a> </div>
    <div className='btn1'><a href='https://github.com/AravindKumar-1431/Movie-Ticket-Booking-App'>Source</a></div>
   </div>

    <div className="project-card3"><img className='imga' src={pro3} alt="image3"/>
    <h2>Zomato landing page</h2>
    <p>this web app is designed by using pure HTML and CSS</p>
    <div className='btn1'><a href='https://myzomatolandingpage.netlify.app/'>view</a> </div>
    <div className='btn1'><a href='https://github.com/AravindKumar-1431/Zomato-landing-page'>Source</a>
    </div>

    </div>
    
    </div>
    </div>
    
  )
}

export default myprojects
