import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/a.png'; // Ensure the path is correct
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for menu toggle

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="AI Club Logo" />
                <h1 className="logo-text">AI Club</h1> {/* Logo text for branding */}
            </div>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle icon */}
            </button>
            {/* Show nav links in desktop view, hide in mobile view */}
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#about">About Us</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#join">Join Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#join" className="join-button">Join Now</a> {/* Join button */}
        </nav>
    );
};

export default Navbar;
