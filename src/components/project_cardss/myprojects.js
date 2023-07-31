import React from "react";
import "../project_cardss/myprojects.css";
import pro1 from "../asessts/gtp3.jpg";
import pro2 from "../asessts/mymoviebook.jpg";
import pro3 from "../asessts/zomatolanding.jpg";
import pro4 from "../asessts/dragon.jpg";
import pro5 from "../asessts/todolsit.jpg";
import pro6 from "../asessts/weather.jpg";

const myprojects = (props) => {
  const projectcards = [
    {
      id: 1,
      name: "GPT3",
      Image: pro1,
      content:
        "This Website is desigend  by using Reactjs modern ui/ux design ",
      btn1: <a href="https://gpt3-uiux.netlify.app/">view</a>,
      btn2: (
        <a href="https://github.com/AravindKumar-1431/GPT-3Fully-Responsive-Modern-UI-UX-Website-in-React-JS">
          Source
        </a>
      ),
    },
    {
      id: 2,
      name: "Book Your Shows",
      Image: pro2,
      content: "this website is designed to Book your Movie Ticket Easily ",
      btn1: <a href="https://mymoviebookingapp.netlify.app/">view</a>,
      btn2: (
        <a href="https://github.com/AravindKumar-1431/Movie-Ticket-Booking-App">
          Source
        </a>
      ),
    },
    {
      id: 3,
      name: "Zomato landing page",
      Image: pro3,
      content: "this web app is designed by using pure HTML and CSS",
      btn1: <a href="https://myzomatolandingpage.netlify.app/">view</a>,
      btn2: (
        <a href="https://github.com/AravindKumar-1431/Zomato-landing-page">
          Source
        </a>
      ),
    },
    {
      id: 4,
      name: "dragon game",
      Image: pro4,
      content: "this web app is designed by using pure javascript,HTML and CSS",
      btn1: <a href="https://mytodolsitapp.netlify.app/">view</a>,
      btn2: (
        <a href="https://github.com/AravindKumar-1431/my-to-do-list">Source</a>
      ),
    },
    {
      id: 5,
      name: "To-DO-List",
      Image: pro5,
      content: "this web app is designed by Reactjs",
      btn1: <a href="https://dragongameusingjavascript.netlify.app/">view</a>,
      btn2: (
        <a href="https://github.com/AravindKumar-1431/Dragon-game">Source</a>
      ),
    },
    {
      id: 6,
      name: "Weather-app",
      Image: pro6,
      content: "this web app is designed by Reactjs",
      btn1: <a href="https://myweatherpredict.netlify.app/">view</a>,
      btn2: (
        <a href="https://github.com/AravindKumar-1431/PredictWeatherapp-React">
          Source
        </a>
      ),
    },
  ];
  return (
    <div className="work-container">
      <div>
        <h1 className="project-heading">PROJECTS</h1>{" "}
      </div>

      <div className="project-container">
        {projectcards.map((project) => (
          <div className="project-card1" key={project.id}>
            <img className="imga" src={project.Image} alt="image1" />
            <h2>{project.name}</h2>
            <h5>{project.content}</h5>

            <div className="btn1">{project.btn1}</div>
            <div className="btn1">{project.btn2}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default myprojects;
