import React, {useState} from 'react'
import Logo from '../../images/Logo1.png'
import {Link} from 'react-router-dom';
import './Navbar.css'
import {Button} from './Button';

function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <img src={Logo} className="navbar-logo"/>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/gallery' className='nav-links' onClick={closeMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                        
                    </ul>
                    

                </div>
            </nav>
            
        </>
    )
}

export default Navbar;
