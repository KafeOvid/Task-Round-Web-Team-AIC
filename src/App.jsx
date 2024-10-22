// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Events from './Components/Events';
import Footer from './Components/Footer';

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
