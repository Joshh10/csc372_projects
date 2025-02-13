import React, {useState} from 'react'
import Logo from './Logo2.png'
import './Navbar.css'

function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <img src={Logo} className="logo" alt="main-logo"/>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar
