import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure the path is correct
import logo from '../assets/a.png'; // Ensure the path is correct
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log('Menu toggled:', !isOpen); // Debug log
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar" role="navigation">
            <div className="logo">
                <img src={logo} alt="AI Club Logo" />
                <h1 className="logo-text">AI Club</h1>
            </div>
            <button 
                className="menu-toggle" 
                onClick={toggleMenu} 
                aria-label="Toggle menu" 
                aria-expanded={isOpen}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`} ref={menuRef}>
                <li><Link to="#about" tabIndex="0">About Us</Link></li>
                <li><Link to="#events" tabIndex="0">Events</Link></li>
                <li><Link to="#join" tabIndex="0">Join Us</Link></li>
                <li><Link to="#contact" tabIndex="0">Contact</Link></li>
            </ul>
            <Link to="#join" className="join-button">Join Now</Link>
        </nav>
    );
};

export default Navbar;
