import React, { useEffect, useState } from 'react'
import AboutItem from './AboutItem';
import './About.css';
import AboutImg from '../../images/about.webp'



function About() {

  const [text, setText] = useState("Hi, I’m Rebekah Lawson, a 24-year-old photographer based in Rhode Island. I’ve been capturing moments through my lens for over 5 years, turning my passion into a way to tell stories and preserve memories. Whether it’s landscapes, portraits, or special events, I strive to create images that feel natural and timeless. Let’s capture something amazing together!");
  const [isButtonClicked, setIsButtonClicked] = useState(false);  

  const handleClick = () => {
    const xhr = new XMLHttpRequest();  
    xhr.open('GET', '/data/data.html', true);  
    
    xhr.onload = () => {
      if(xhr.status === 200){
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(xhr.responseText, 'text/html'); 
        const newText = doc.querySelector("p")?.innerText;

        $('#about-text p').fadeOut(500, function(){
          setText(newText);
          $(this).text(newText).fadeIn(800);
        });
        
        
      }
    };

    xhr.send();  
    setIsButtonClicked(true); 
  };
  
    return (
      <div className='about-images'>
        <h1 className='about-heading'>About Me</h1>
        <div className='about-container'>
          <div className='about-section'>
            <ul className='about-items'>
              <AboutItem src={AboutImg}/>
              <div className='about-text' id='about-text'>
                <p>{text}</p>
                {!isButtonClicked && (
                <div className='about-btn'>
                  <button className='solid btn' onClick={handleClick}>Click for more...</button>
                </div>
              )}
                
                
              </div>
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  
export default About;
