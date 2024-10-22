import React from 'react';
import '../styles/Hero.css'; // Create a separate CSS file for styling
import logo from '../assets/ab.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to the AI Club!</h1>
                <p className="hero-description">
                    Join us in exploring the future of technology and artificial intelligence.
                </p>
                <p className="hero-description">
                    Our mission is to foster learning and collaboration among enthusiasts interested in AI technologies. Whether you're a beginner or an expert, we offer workshops, guest lectures, and projects to help you enhance your skills.
                </p>
                <button className="cta-button">Get Started</button>
            </div>
            <img src={logo} alt="AI Technology" className="hero-image" />
        </section>
    );
};

export default Hero;
