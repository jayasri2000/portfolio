import React from 'react';
import logo from './logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{color:"aliceblue"}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">projects</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#contacts">contact me</a>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
    )
}

export default Navbar;
