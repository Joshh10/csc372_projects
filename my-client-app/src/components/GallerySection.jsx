import React from 'react'
import GalleryItem from './GalleryItem';
import './GallerySection.css';
import Night from '../../images/night.png'
import Beach from '../../images/beach.jpg'
import Nature from '../../images/nature.jpg'
import Dog from '../../images/dog.jpg'
import Light from '../../images/lights.jpg'


function GallerySection() {
    return (
      <div className='gallery'>
        <h1 class='gallery-header'>Gallery</h1>
        <div className='gallery-container'>
          <div className='gallery-section'>
            <ul className='gallery-items'>
              <GalleryItem
                src={Night}
                text='Amazing sunset at the beach'
                label='Nature'
                path='/'
              />
              <GalleryItem
                src={Light}
                text='Amazing sunset at the beach'
                label='Nature'
                path='/'
              />
              
            </ul>
            <ul className='gallery-items'>
              <GalleryItem
                src={Dog}
                text='Amazing sunset at the beach'
                label='Nature'
                path='/'
              />
              <GalleryItem
                src={Nature}
                text='Amazing sunset at the beach'
                label='Nature'
                path='/'
              />
              <GalleryItem
                src={Beach}
                text='Amazing sunset at the beach'
                label='Nature'
                path='/'
              />
              
            </ul>
            
            <ul className='gallery-items'>
              <GalleryItem
                src={Dog}
                text='Amazing sunset at the beach'
                label='Nature'
                path='/'
              />
              <GalleryItem
                src={Nature}
                text='Amazing sunset at the beach'
                label='Nature'
                path='/'
              />
              <GalleryItem
                src={Beach}
                text='Amazing sunset at the beach'
                label='Nature'
                path='/'
              />
              
            </ul>
            <ul className='gallery-items'>
              <GalleryItem
                src={Night}
                text='Amazing sunset at the beach'
                label='Nature'
                path='/'
              />
              <GalleryItem
                src={Light}
                text='Amazing sunset at the beach'
                label='Nature'
                path='/'
              />
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  
export default GallerySection;
