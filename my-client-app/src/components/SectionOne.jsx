import React from 'react';
import {Button} from './Button';
import './SectionOne.css';
import '../App.jsx';


function SectionOne() {
  

  return (
    <div className='hero'>
        <h1 className='main-heading'>Rebekah Photography</h1>
        <p>"Capturing moments, telling stories. I specialize in natural, timeless photography that brings your memories to life. Whether it’s portraits, events, or landscapes, I aim to create stunning images that you’ll cherish forever."</p>
        <div className='secone-btn'>
            <Button to='/' className='btns' buttonStyle='outline' buttonSize='large'>
                Welcome
            </Button>
            <Button className='btns' buttonStyle='solid' buttonSize='large'>
              Gallery
            </Button>
        </div>
    </div>
  )
}

export default SectionOne;
