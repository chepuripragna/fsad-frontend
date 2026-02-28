import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('CulturalEnthusiast');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (role === 'Admin') navigate('/dashboard/admin');
        else if (role === 'CulturalEnthusiast') navigate('/dashboard/enthusiast');
        else if (role === 'ContentCreator') navigate('/dashboard/creator');
        else if (role === 'TourGuide') navigate('/dashboard/guide');
        else navigate('/home');
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2 className="auth-title">Create an Account</h2>
                <form onSubmit={handleSignup} className="auth-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Create a password" />
                    </div>
                    <div className="form-group">
                        <label>I want to join as</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="CulturalEnthusiast">Cultural Enthusiast</option>
                            <option value="ContentCreator">Content Creator</option>
                            <option value="TourGuide">Tour Guide</option>
                        </select>
                    </div>
                    <Button type="submit" variant="primary" className="btn-full">Sign Up</Button>
                </form>
                <p className="auth-footer">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
