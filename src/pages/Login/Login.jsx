import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('CulturalEnthusiast');
    const navigate = useNavigate();

    const handleLogin = (e) => {
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
                <h2 className="auth-title">Welcome Back</h2>
                <form onSubmit={handleLogin} className="auth-form">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" />
                    </div>
                    <div className="form-group">
                        <label>Login As</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="Admin">Admin</option>
                            <option value="CulturalEnthusiast">Cultural Enthusiast</option>
                            <option value="ContentCreator">Content Creator</option>
                            <option value="TourGuide">Tour Guide</option>
                        </select>
                    </div>
                    <Button type="submit" variant="primary" className="btn-full">Login</Button>
                </form>
                <p className="auth-footer">
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
