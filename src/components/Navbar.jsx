import React from 'react';
import '../styles/navbar.css'
import logo from '../assets/logo.png'
function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="nav-right-button">
                <p className="nav-right-register">Register Now for Free!</p>
            </div>
        </nav>
    );
}

export default Navbar;