import React from 'react';
import { Link } from 'react-router-dom';

function GalleryItem(props) {
  return (
    <>
      <li className='gallery-item'>
        <Link className='gallery-item-link' to={props.path}>
          <figure className='gallery-item-sub' data-category={props.label}>
            <img
              className='gallery-item-img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='gallery-item-info'>
            <h5 className='gallery-item-text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default GalleryItem;
