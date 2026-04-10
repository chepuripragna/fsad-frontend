import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            alert("Enter valid email");
            return;
        }

        if (password.length < 3) {
            alert("Password too short");
            return;
        }

        try {
            const res = await fetch("https://fsad-backend-bd5s.onrender.com/api/auth/login", {
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

            const token = await res.text();

            // ✅ clear old data (important)
            localStorage.clear();

            localStorage.setItem("token", token);

            const decoded = parseJwt(token);

            console.log("FULL DECODED TOKEN:", decoded);

            // 🔥 STRICT ROLE EXTRACTION
            let role = null;

            if (decoded?.role) {
                role = decoded.role;
            } else if (decoded?.roles) {
                role = Array.isArray(decoded.roles)
                    ? decoded.roles[0]
                    : decoded.roles;
            } else if (decoded?.authorities) {
                role = decoded.authorities[0]?.authority;
            }

            if (!role) {
                console.error("❌ ROLE NOT FOUND IN TOKEN");
                alert("Role not found. Contact backend.");
                return;
            }

            // normalize role
            role = role.toString().toUpperCase();

            // remove ROLE_ prefix if exists
            if (role.startsWith("ROLE_")) {
                role = role.replace("ROLE_", "");
            }

            const userData = {
                email: decoded?.sub || email,
                role: role
            };

            localStorage.setItem("user", JSON.stringify(userData));

            console.log("✅ FINAL STORED USER:", userData);

            alert("Login successful");

            navigate('/home');

        } catch (error) {
            console.error("Login error:", error);
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