import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';
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