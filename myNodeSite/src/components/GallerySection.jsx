import React, {useState} from 'react'
import GalleryItem from './GalleryItem';
import './GallerySection.css';
import Night from '../../images/night.webp'
import Beach from '../../images/beach.webp'
import Nature from '../../images/nature.webp'
import Dog from '../../images/dog.webp'
import Light from '../../images/lights.webp'


function GallerySection() {

  const [imageTexts, setImageTexts] = useState({
    night: " ",
    light: " ",
    dog: " ",
    nature: " ",
    beach: " "
  });


  const handleImageClick = (imageKey, event) => {
    event.preventDefault(); 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/data/data.json', true);

    xhr.onload = () => {
      if(xhr.status === 200){
        const data = JSON.parse(xhr.responseText);
        setImageTexts(prevTexts => ({
          ...prevTexts,
          [imageKey]: data[imageKey] 
        }));
        
      }
    };

    xhr.send();
  };
    return (
      <div className='gallery'>
        <h1 className='gallery-header'>Gallery</h1>
        <p className='gallery-sub-text'>Click each image for more..</p>
        <div className='gallery-container'>
          <div className='gallery-section'>
            <ul className='gallery-items'>
              <GalleryItem
                src={Night}
                text={imageTexts.night}
                label='Nature'
                onImageClick={(e) => handleImageClick('night', e)}
              />
              <GalleryItem
                src={Light}
                alt="Light"
                text={imageTexts.light}
                label='Nature'
                onImageClick={(e) => handleImageClick('light', e)}
              />
              
            </ul>
            <ul className='gallery-items'>
              <GalleryItem
                src={Dog}
                text={imageTexts.dog}
                label='Dogs'
                onImageClick={(e) => handleImageClick('dog', e)}
              />
              <GalleryItem
                src={Nature}
                text={imageTexts.nature}
                label='Nature'
                onImageClick={(e) => handleImageClick('nature', e)}
              />
              <GalleryItem
                src={Beach}
                text={imageTexts.beach}
                label='Beach'
                onImageClick={(e) => handleImageClick('beach', e)}
              />
              
            </ul>
            
            <ul className='gallery-items'>
              <GalleryItem
                src={Dog}
                text={imageTexts.dog}
                label='Animals'
                onImageClick={(e) => handleImageClick('dog', e)}
              />
              <GalleryItem
                src={Nature}
                text={imageTexts.nature}
                label='Nature'
                onImageClick={(e) => handleImageClick('nature', e)}
              />
              <GalleryItem
                src={Beach}
                text={imageTexts.beach}
                label='Sunset'
                onImageClick={(e) => handleImageClick('beach', e)}
              />
              
            </ul>
            <ul className='gallery-items'>
              <GalleryItem
                src={Night}
                text={imageTexts.night}
                label='Beach'
                onImageClick={(e) => handleImageClick('night', e)}
              />
              <GalleryItem
                src={Light}
                text={imageTexts.light}
                label='Lights'
                onImageClick={(e) => handleImageClick('light', e)}
              />
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  
export default GallerySection;
