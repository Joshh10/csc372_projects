import React from 'react';
import { Link } from 'react-router-dom';

function ImageItem(props) {
  return (
    <>
      <li className='images-item' onClick={props.onImageClick}>
        <Link className='images-item-link' to={props.path}>
          <figure className='images-item-sub' data-category={props.label}>
            <img
              className='images-item-img' alt={props.alt} src={props.src}/>
          </figure>
          <div className='images-item-info'>
            <h5 className='images-item-text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ImageItem;
