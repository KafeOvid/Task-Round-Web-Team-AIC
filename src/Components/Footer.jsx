import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaDiscord, FaGithub } from 'react-icons/fa'; // Import specific icons
import '../styles/Footer.css'; // Ensure you import the new CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 AI Club. All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/aiclub.vitb/?hl=en" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/aiclub-vitb/mycompany/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://discord.gg/CnhaxT8k" target="_blank" rel="noopener noreferrer">
                        <FaDiscord />
                    </a>
                    <a href="https://github.com/aiclubvitbhopal" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
