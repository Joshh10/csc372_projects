import React, {useState, useEffect} from 'react'
import ImageItem from './ImageItem';
import './SectionTwo.css';
import Night from '../../images/night.webp'
import Beach from '../../images/beach.webp'
import Nature from '../../images/nature.webp'
import Dog from '../../images/dog.webp'
import Light from '../../images/lights.webp'


function SectionTwo() {

  const [galleryImages, setGalleryImages] = useState({
    night: Night,
    light: Light,
    animals: Dog,
    nature: Nature,
    beach: Beach
  });

  const [imageData, setImageData] = useState({});

  useEffect(() => {
    fetch('https://joshualawson.rhody.dev/data.php')
      .then((res) => res.json())
      .then((data) => {
        setImageData(data);
      });
  }, []);
  
  

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
                alt={imageData.night?.alt}
                text={imageData.night?.text}
                label={imageData.night?.label}
                onImageClick={() => handleImageClick('night')}
              />
              <ImageItem
                src={galleryImages.light}
                alt={imageData.light?.alt}
                text={imageData.light?.text}
                label={imageData.light?.label}
                onImageClick={() => handleImageClick('light')}
                
              />
              
            </ul>
            <ul className='images-items'>
              <ImageItem
                src={galleryImages.animals}
                alt={imageData.animals?.alt}
                text={imageData.animals?.text}
                label={imageData.animals?.label}
                onImageClick={() => handleImageClick('animals')}
              />
              <ImageItem
                src={galleryImages.nature}
                alt={imageData.nature?.alt}
                text={imageData.nature?.text}
                label={imageData.nature?.label}
                onImageClick={() => handleImageClick('nature')}
              />
              <ImageItem
                src={galleryImages.beach}
                alt={imageData.beach?.alt}
                text={imageData.beach?.text}
                label={imageData.beach?.label}
                onImageClick={() => handleImageClick('beach')}
              />
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  
export default SectionTwo;
