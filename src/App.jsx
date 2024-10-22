import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Events from './Components/Events';
import Footer from './Components/Footer';
import './App.css'; // Main CSS file for overall styling

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Events />
            <Footer />
        </>
    );
};

export default App;
