import React from 'react';
import Typed from 'react-typed';
import girl from "./pro.png";
import ss from "./Screenshot (17).png";
import yc from "./h1.gif";
import rory from "./RORY.png";

const Projects = () => {
    return (
        <div>
        <section id="projects" className="projects">
        <div className="projects-wraper">
        <div className="Skill-info">
        <hr>

        </hr>
          
          <div class="container-fluid" >
              
              <h1>
              <Typed className="project-Typed-text" strings={["SOME OF MY RECENT PROJECTS... ",]}
                 typeSpeed={60}
                 backSpeed= {20}
                 loopCount={3}
                 >

                </Typed>
                <img src={girl} alt="" style={{width:"100px"}}></img>
              </h1>
              <hr></hr>
              
          </div>
          <div class="container-fluid justify-center" style={{alignItems:"center"}}>
          <div class="container">
      <div class="row" style={{color:"#fb9902"}}>
        <div class="col-sm-4">
          <div class="well bg ">
              <div class="card" style={{width:"400px"}}>
             <img
             src={ss}
             class="card-img-top"
             style={{width:"390px"}}
             alt="..."
            />
            <div class="card-body">
            <h5 class="card-title" style={{color:"black"}}>Netflix Clone</h5>
         <p class="card-text">
          We can see the trending movies, netflix originals,action, comedy and other respective genres of movies and web series that netflix provides.
         <h6 style={{color:"black"}}> Tech-Stack:React Js and Firebase.</h6>
        </p>
        <a href="https://github.com/jayasri2000/netflix-clone" class="btn btn-primary" style={{backgroundColor:"#fb9902", color:"black"}}>Visit in Github</a>
        </div>
        </div>
          </div>
        </div>
       <div class="col-sm-4">
          <div class="well bg ">
              <div class="card" style={{width:"400px"}}>
             <img
             src={yc}
             class="card-img-top"
             style={{width:"390px"}}
             alt="..."
            />
            <div class="card-body">
            <h5 class="card-title" style={{color:"black"}}>yourCode</h5>
         <p class="card-text">
          E-learning website to help beginners with the basics of web development.
         <h6 style={{color:"black"}}> Tech-Stack: HTML/CSS</h6>
        </p>
        <a href="https://github.com/jayasri2000/yourCode" class="btn btn-primary"style={{backgroundColor:"#fb9902", color:"black"}}>Visit in Github</a>
        </div>
        </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="well bg ">
              <div class="card" style={{width:"400px"}}>
             <img
             src={rory}
             class="card-img-top"
             style={{width:"390px"}}
             alt="..."
            />
            <div class="card-body">
            <h5 class="card-title" style={{color:"black"}}>Rory-Discord Bot</h5>
         <p class="card-text">
          Discord chat bot, that generates memes and sends messages based on the other messages by the other users.
         <h6 style={{color:"black"}}> Tech-Stack: Python</h6>
        </p>
        <a href="https://github.com/jayasri2000/rory-the-bot" class="btn btn-primary"style={{backgroundColor:"#fb9902", color:"black"}}>Visit in Github</a>
        </div>
        </div>
          </div>
        </div>
      </div>
    </div>
           
          
             
             
           </div>
            
            </div>
        </div>
        
             
                </section>
        </div>
    )
}

export default Projects
