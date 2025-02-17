import React from 'react'
import AboutItem from './AboutItem';
import './About.css';
import AboutImg from '../../images/about.jpg'


function About() {
    return (
      <div className='about-images'>
        <h1 className='about-heading'>About Me</h1>
        <div className='about-container'>
          <div className='about-section'>
            <ul className='about-items'>
              <AboutItem src={AboutImg}/>
              <div className='about-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  
export default About;
