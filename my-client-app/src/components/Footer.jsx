import React from 'react'
import Logo from '../../images/Logo1.png'
import './Footer.css'
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <nav className='footer'>
        <div className='footer-container'>
            <div>
                <ul className='footer-menu'>
                    <li className='footer-item'>
                        <Link to='/' className='footer-links'>
                            Home
                        </Link>
                        
                    </li>
                    <li className='footer-item'>
                        <Link to='/Gallery' className='footer-links'>
                            Gallery
                        </Link>
                        
                    </li>
                    <li className='footer-item'>
                        <Link to='/Contact' className='footer-links'>
                            Contact
                        </Link>
                        
                    </li> 
                </ul>
                
            </div>
            
        </div>
        <img src={Logo} className="footer-logo"/>
    </nav>

    
            
  )
}

export default Footer;
