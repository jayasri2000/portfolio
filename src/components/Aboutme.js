import React from 'react'
import dp from './dp.png'

const Aboutme = () => {
    return (
        <section id="about">
        <div className="about-wraper">
          <div class="row">
  <div class="col-sm-3">
     <div class="picture" >
            <a>
            <p className="intro">
              <img class="card-img-top" src={dp} alt="Card image cap" style={{width:"16rem", height:"16rem"}}/>
              
              </p>
              </a>
 
</div>
  </div>
  <div class="col-sm-5">
    <div class="picture" >
            <a>
            <p className="intro">
            <h1> ABOUT ME</h1>
              
              <h3 style={{color:"#fb9902"}}>                 B.Tech : Information Technology</h3>
              <hr></hr>
              
              <p className="intro" style={{fontStyle:"courier New"}}>
                  I am a quick-learner with keen observing skills, confidence and willing to accept new challenges. Since the begining of my journey as a Front-end developer, I have been improving my skills ,each time that I have completed a project.
                  Otherwise, I am a sci-fi enthusiast,but my heart belongs to the mountains.
              </p>
              </p>
              </a>
 
</div>
  </div>
</div>


           
            
        </div>
        </section>
    )
}

export default Aboutme
