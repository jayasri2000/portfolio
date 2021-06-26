import React from 'react';
import Typed from 'react-typed';
import resume from './Resume.pdf';

const Header = () => {
    return (
        <section id="home">
        <div className="header-wraper">
            <div className="main-info">
            <h1>{'<'}hello world{'/>'}</h1>
                
                <Typed className="Typed-text" strings={["I am Jayasri Dey.","Front-end Developer.", "IT undergrad."]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop>

                </Typed>
                 
                <a href='#contacts' className="btn-main-offer"> hire me</a>
                <a href={resume} className="btn-main-offer" download="Jayasri_Dey_Resume">Download resume</a>
            </div>
        </div>
            
        </section>
    )
}

export default Header;