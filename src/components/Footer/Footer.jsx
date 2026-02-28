import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container footer-content">
                <div className="footer-section">
                    <h2 className="footer-logo">InHerit</h2>
                    <p>Explore India's Living Legacy. Discover the rich cultural heritage, majestic monuments, and vibrant traditions.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/states">Explore States</a></li>
                        <li><a href="/monuments">Monuments</a></li>
                        <li><a href="/virtual-tour">Virtual Tour</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Community</h3>
                    <ul>
                        <li><a href="/discussion">Discussion Forum</a></li>
                        <li><a href="/culture/practices">Cultural Practices</a></li>
                        <li><a href="/feedback">Feedback</a></li>
                        <li><a href="/dashboard/guide">Tour Guides</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Connect</h3>
                    <p>Email: contact@inherit.in</p>
                    <div className="social-links">
                        <span>fb</span>
                        <span>tw</span>
                        <span>in</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} InHerit: Explore India's Living Legacy. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
