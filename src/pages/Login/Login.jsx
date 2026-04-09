import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // 🔥 Basic validation
        if (!email.includes("@")) {
            alert("Enter valid email");
            return;
        }

        if (password.length < 3) {
            alert("Password too short");
            return;
        }

        try {
            const res = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (!res.ok) {
                alert("Invalid email or password");
                return;
            }

            // ✅ Get JWT token (not JSON anymore)
            const token = await res.text();

            // ✅ Store token
            localStorage.setItem("token", token);

            alert("Login successful");

            // ✅ Navigate (role handling later)
            navigate('/home');

        } catch (error) {
            console.error(error);
            alert("Server error");
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h2 className="auth-title">Welcome Back</h2>

                <form onSubmit={handleLogin} className="auth-form">

                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>

                    <Button type="submit" variant="primary" className="btn-full">
                        Login
                    </Button>

                </form>

                <p className="auth-footer">
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;