import React from 'react';
import { Link } from 'react-router-dom';

function AboutItem(props) {
  return (
    <>
      <li className='about-item'>
        <div className='about-item-link'>
          <div className='about-item-sub'>
            <img className='about-item-img' src={props.src}/>
          </div>
        </div>
      </li>
    </>
  );
}

export default AboutItem;