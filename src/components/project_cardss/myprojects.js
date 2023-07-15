import React from 'react'
import "../project_cardss/myprojects.css";
import pro1 from '../asessts/gtp3.jpg'
import pro2 from '../asessts/mymoviebook.jpg'
import pro3 from '../asessts/zomatolanding.jpg'
import pro4 from '../asessts/dragon.jpg'
import pro5 from '../asessts/todolsit.jpg'


const myprojects = (props) => {

  const projectcards=[
    {
    id:1,
    name:'GPT3',
    Image:pro1,
    content:'This Website is desigend  by using Reactjs modern ui/ux design ',
    btn1: <a href='https://gpt3-uiux.netlify.app/'>view</a>,
    btn2:<a href='https://github.com/AravindKumar-1431/GPT-3Fully-Responsive-Modern-UI-UX-Website-in-React-JS'>Source</a>
  },
  {
    id:2,
    name:'Book Your Shows',
    Image:pro2,
    content:'this website is designed to Book your Movie Ticket Easily ',
    btn1: <a href='https://mymoviebookingapp.netlify.app/'>view</a>,
    btn2:<a href='https://github.com/AravindKumar-1431/Movie-Ticket-Booking-App'>Source</a>
  },
  {
    id:3,
    name:'Zomato landing page',
    Image:pro3,
    content:"this web app is designed by using pure HTML and CSS",
    btn1: <a href='https://myzomatolandingpage.netlify.app/'>view</a>,
    btn2:<a href='https://github.com/AravindKumar-1431/Zomato-landing-page'>Source</a>}
]
  return (

    
    <div  className="work-container">

    <div><h1 className='project-heading'>PROJECTS</h1> </div>

    <div className="project-container">

    
    {projectcards.map((project)=>(
    <div className="project-card1" key={project.id}>
    <img className='imga' src={project.Image} alt="image1"/>
    <h2>{project.name}</h2>
    <h5>{project.content}</h5>
    
    <div className='btn1'>{project.btn1}</div>
    <div className='btn1'>{project.btn2}</div>
    </div>
    ))}




    

    <div className="project-card4"><img className='imga' src={pro4} alt="image4"/>
    <h2>Dragon Game</h2>
    <h5>this web app is designed by using pure HTML,CSS and JavaScript</h5>
    <div className='btn1'><a href='https://dragongameusingjavascript.netlify.app/'>view</a> </div>
    <div className='btn1'><a href='https://github.com/AravindKumar-1431/Dragon-game'>Source</a></div>
    </div>

     <div className="project-card5"><img className='imga' src={pro5} alt="image5"/>
    <h2>TO-DO-LIST</h2>
    <h5>this web app is designed by using REACTJS</h5>
    <div className='btn1'><a href="https://mytodolsitapp.netlify.app/">view</a> </div>
    <div className='btn1'><a href='https://github.com/AravindKumar-1431/my-to-do-list'>Source</a></div>
    </div>




    </div>

    </div>
    
    
  )
}

export default myprojects
