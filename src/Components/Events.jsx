import React from 'react';
import '../styles/Events.css'; // Ensure this CSS file is created

const Events = () => {
    return (
        <section id="events" className="events-section">
            <h2 className="events-title">Upcoming Events</h2>
            <div className="event-cards">
                <div className="event-card">
                    <h3 className="event-title">AI Workshop</h3>
                    <p className="event-date">Date: January 15, 2025</p>
                    <p className="event-description">Join us for an exciting workshop on AI technologies and how they are shaping our future.</p>
                    <button className="cta-button">Learn More</button>
                </div>
                <div className="event-card">
                    <h3 className="event-title">Machine Learning Symposium</h3>
                    <p className="event-date">Date: February 20, 2025</p>
                    <p className="event-description">A gathering of experts discussing the latest trends and innovations in machine learning.</p>
                    <button className="cta-button">Learn More</button>
                </div>
                <div className="event-card">
                    <h3 className="event-title">Data Science Bootcamp</h3>
                    <p className="event-date">Date: March 5, 2025</p>
                    <p className="event-description">A hands-on bootcamp to kickstart your journey in data science.</p>
                    <button className="cta-button">Learn More</button>
                </div>
                <div className="event-card">
                    <h3 className="event-title">AI in Healthcare Conference</h3>
                    <p className="event-date">Date: April 10, 2025</p>
                    <p className="event-description">Explore the impact of AI technologies in the healthcare industry with leading experts.</p>
                    <button className="cta-button">Learn More</button>
                </div>
                {/* Add more event cards as needed */}
            </div>
        </section>
    );
};

export default Events;
