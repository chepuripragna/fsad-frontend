import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-page">
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">InHerit: Explore India's Living Legacy</h1>
                    <p className="hero-subtitle">Discover the majestic monuments, rich cultural practices, and ancient history of the Indian subcontinent.</p>
                    <div className="hero-actions">
                        <Link to="/home"><Button variant="primary">Explore as Guest</Button></Link>
                        <Link to="/login"><Button variant="secondary">Login</Button></Link>
                        <Link to="/signup"><Button variant="outline">Sign Up</Button></Link>
                    </div>
                </div>
            </div>

            <div className="features-section container">
                <h2 className="section-title">What You'll Discover</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🏛</div>
                        <h3>Majestic Monuments</h3>
                        <p>Explore centuries-old architecture, forts, and temples across India.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎭</div>
                        <h3>Cultural Heritage</h3>
                        <p>Dive into traditional practices, festivals, and arts that live on today.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🧭</div>
                        <h3>Virtual Tours</h3>
                        <p>Experience 360-degree views of India's most famous landmarks.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
