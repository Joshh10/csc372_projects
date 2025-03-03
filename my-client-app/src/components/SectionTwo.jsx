import React, {useState} from 'react'
import ImageItem from './ImageItem';
import './SectionTwo.css';
import Night from '../../images/night.png'
import Beach from '../../images/beach.jpg'
import Nature from '../../images/nature.jpg'
import Dog from '../../images/dog.jpg'
import Light from '../../images/lights.jpg'


function SectionTwo() {

  const [galleryImages, setGalleryImages] = useState({
    night: Night,
    light: Light,
    animals: Dog,
    nature: Nature,
    beach: Beach
  });

  const handleImageClick = (imageKey) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/data/data.xml', true); 

    xhr.onload = () => {
      if(xhr.status === 200){
      
        const parser = new DOMParser();
        const xml = parser.parseFromString(xhr.responseText, 'application/xml');

        const imageNode = xml.querySelector(`image[id="${imageKey}"]`);
        if(imageNode){
          const newSrc = imageNode.querySelector('src')?.textContent || "";

          setGalleryImages(prevImages => ({
            ...prevImages,
            [imageKey]: newSrc
          }));
        }
        
      }
    };

    xhr.send();
  };

    return (
      <div className='images'>
        <h1 className='section-heading'>A Look At What I Do</h1>
        <div className='images-container'>
          <div className='images-section'>
            <ul className='images-items'>
              <ImageItem
                src={galleryImages.night}
                text='Chasing the last light of day.'
                label='Sunsets'
                onImageClick={() => handleImageClick('night')}
              />
              <ImageItem
                src={galleryImages.light}
                text='A dance of light through the night.'
                label='Night Lights'
                onImageClick={() => handleImageClick('light')}
                
              />
              
            </ul>
            <ul className='images-items'>
              <ImageItem
                src={galleryImages.animals}
                text='Unconditional joy in every step.'
                label='Animals'
                onImageClick={() => handleImageClick('animals')}
              />
              <ImageItem
                src={galleryImages.nature}
                text='Nature’s colorful embrace.'
                label='Nature'
                onImageClick={() => handleImageClick('nature')}
              />
              <ImageItem
                src={galleryImages.beach}
                text='Golden hours and endless horizons.'
                label='Beaches'
                onImageClick={() => handleImageClick('beach')}
              />
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  
export default SectionTwo;
