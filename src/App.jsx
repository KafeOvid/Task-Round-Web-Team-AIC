// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';
import './App.css'; // Main CSS file for overall styling

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Hero />} />
            </Routes>
            <Events />
            <Footer />
        </Router>
    );
};

export default App;
