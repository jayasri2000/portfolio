import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Proj from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <div>
    <Particles
    params={{
      particles:{
        number:{
          value:32,
          density:{
            enable:true,
            value_area:900
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
      <Navbar></Navbar>
      <Header></Header>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Proj></Proj>
      <Contacts></Contacts>
      <div class="footer-copyright text-center py-3">© Portfolio:Jayasri Dey
    
  </div>
      

    </div>
    
    
  )
}

export default App;
