import React from 'react';
import Particles from 'react-particles-js';
import logo1 from "./c++.png";
import logo2 from "./java.png";
import logo3 from "./sql.png";
import logo4 from "./html.png";
import logo5 from "./css.png";
import logo6 from "./js.png";
import logo7 from "./boot.png";
import logo8 from "./atom.png";
import logo9 from "./tail.png";

const Skills = () => {
    return (
       
         <section id="skills">
         
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
        <div className="Skill-info">
        <hr>

        </hr>
          
          <div class="container-fluid" >
              <hr></hr>
              <h3 style={{color:"#fb9902"}}>SKILLS</h3>
              <hr></hr>
              <hr></hr>
          </div>
          <div class="container-fluid">
           
            <div class="row justify-content-center" style={{paddingTop:"10px"}}>
                <div class="col-4">
                 <img src={logo1} alt="" style={{width:"100px", padding:"5px"}}/>
                </div>
                <div class="col-4">
               <img src={logo2} alt="" style={{width:"100px", padding:"5px"}}/>
                </div>
                <div class="col-4">
               <img src={logo3} alt="" style={{width:"100px", padding:"5px"}}/>
                </div>
               
            </div>
             
             <div class="row justify-content-center"  style={{paddingTop:"10px"}}>
                <div class="col-4">
                 <img src={logo4} alt="" style={{width:"100px", padding:"5px"}}/>
                </div>
                <div class="col-4">
               <img src={logo5} alt="" style={{width:"100px", padding:"5px"}}/>
                </div>
                <div class="col-4">
               <img src={logo6} alt="" style={{width:"100px", padding:"5px"}}/>
                </div>
               
            </div>
             <div class="row justify-content-center"  style={{paddingTop:"10px"}}>
                <div class="col-4">
                 <img src={logo7} alt="" style={{width:"100px", padding:"5px"}}/>
                </div>
                <div class="col-4">
               <img src={logo8} alt="" style={{width:"100px", padding:"5px"}}/>
                </div>
                <div class="col-4">
               <img src={logo9} alt="" style={{width:"100px", padding:"5px"}}/>
                </div>
               
            </div>
           </div>
            
            </div>
        </div>
            
        </section>


    )
}

export default Skills
