import React from 'react';
import Particles from 'react-particles-js';

const Contacts = () => {
    return (
         <section id="contacts">
         
         <Particles
    params={{
      particles:{
        number:{
          value:90,
          density:{
            enable:true,
            value_area:1800
          }
        },
        shape:{
          type:"circle",
          stroke:{
            width:"6px",
            color:"#fb9902",
          }
        }
      }
    }}>

    </Particles>
        <div className="skills-wraper">
            <div className="main-info">
            <h1>Contact Me</h1>
                
               <a className="btn-main-offer" href="mailto: jayasri.dey9@gmail.com" style={{width:"20rem" ,height:"3rem"}}> Email</a>
               <a className="btn-main-offer" href="https://www.linkedin.com/in/jayasri-dey-55625918b/" style={{width:"20rem" ,height:"3rem"}}>Linked In</a>
               
                <a className="btn-main-offer" href="https://github.com/jayasri2000" style={{width:"20rem" ,height:"3rem"}}> Github</a>
                 <a className="btn-main-offer" href="https://www.hackerrank.com/jayasri_dey9?hr_r=1" style={{width:"20rem" ,height:"3rem"}}> HackerRank</a>
            </div>
        </div>
            
        </section>
        
    )
}

export default Contacts
