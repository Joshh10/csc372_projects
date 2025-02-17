import React from 'react'
import ImageItem from './ImageItem';
import './SectionTwo.css';
import Night from '../../images/night.png'
import Beach from '../../images/beach.jpg'
import Nature from '../../images/nature.jpg'
import Dog from '../../images/dog.jpg'
import Light from '../../images/lights.jpg'


function SectionTwo() {
    return (
      <div className='images'>
        <h1 className='section-heading'>A Look At What I Do</h1>
        <div className='images-container'>
          <div className='images-section'>
            <ul className='images-items'>
              <ImageItem
                src={Night}
                text=''
                label='Beach'
                path='/'
              />
              <ImageItem
                src={Light}
                text=''
                label='Lights'
                path='/'
              />
              
            </ul>
            <ul className='images-items'>
              <ImageItem
                src={Dog}
                text=''
                label='Dogs'
                path='/'
              />
              <ImageItem
                src={Nature}
                text=''
                label='Nature'
                path='/'
              />
              <ImageItem
                src={Beach}
                text=''
                label='Beach'
                path='/'
              />
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  
export default SectionTwo;
