import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo">
                    InHerit
                </Link>
                <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className="icon">{isMenuOpen ? '✕' : '☰'}</span>
                </div>
                <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink to="/home" className={({ isActive }) => 'nav-links' + (isActive ? ' active-link' : '')} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/states" className={({ isActive }) => 'nav-links' + (isActive ? ' active-link' : '')} onClick={() => setIsMenuOpen(false)}>Explore by State</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/monuments" className={({ isActive }) => 'nav-links' + (isActive ? ' active-link' : '')} onClick={() => setIsMenuOpen(false)}>Monuments</NavLink>
                    </li>
                    <li className="nav-item" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                        <div className="nav-links has-dropdown">
                            Culture ▾
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/culture/practices" onClick={() => setIsMenuOpen(false)}>Practices</Link></li>
                                    <li><Link to="/culture/festivals" onClick={() => setIsMenuOpen(false)}>Festivals</Link></li>
                                    <li><Link to="/culture/architecture" onClick={() => setIsMenuOpen(false)}>Architecture</Link></li>
                                    <li><Link to="/culture/timeline" onClick={() => setIsMenuOpen(false)}>Timeline</Link></li>
                                </ul>
                            )}
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/virtual-tour" className={({ isActive }) => 'nav-links' + (isActive ? ' active-link' : '')} onClick={() => setIsMenuOpen(false)}>Virtual Tour</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/discussion" className={({ isActive }) => 'nav-links' + (isActive ? ' active-link' : '')} onClick={() => setIsMenuOpen(false)}>Discussion</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/feedback" className={({ isActive }) => 'nav-links' + (isActive ? ' active-link' : '')} onClick={() => setIsMenuOpen(false)}>Feedback</NavLink>
                    </li>
                    <li className="nav-item nav-auth">
                        <button onClick={() => { setIsMenuOpen(false); navigate('/login'); }} className="btn-outline">Login</button>
                        <button onClick={() => { setIsMenuOpen(false); navigate('/signup'); }} className="btn-primary">Sign Up</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
