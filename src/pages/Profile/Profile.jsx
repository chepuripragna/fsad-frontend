import React from 'react';
import './Profile.css';

const Profile = () => {
    const token = localStorage.getItem("token");

    // 🔥 If not logged in
    if (!token) {
        return <h2>Please login first</h2>;
    }

    // 🔥 Decode JWT token
    const payload = JSON.parse(atob(token.split('.')[1]));

    const email = payload.sub;
    const role = payload.role;

    // ⚠️ Name is NOT in token → so show placeholder
    const name = email.split("@")[0]; // simple fallback

    return (
        <div className="profile-page container section-padding">

            <div className="profile-wrapper bg-white shadow-lg radius-lg p-5">

                <div className="text-center mb-5">
                    <h1 className="section-title">User Profile</h1>
                    <p>Your account details</p>
                </div>

                <div className="profile-field mb-4">
                    <label className="form-label">Name</label>
                    <div className="text-lg">{name}</div>
                </div>

                <div className="profile-field mb-4">
                    <label className="form-label">Email</label>
                    <div className="text-lg">{email}</div>
                </div>

                <div className="profile-field mb-4">
                    <label className="form-label">Role</label>
                    <div className="text-lg">{role}</div>
                </div>

            </div>

        </div>
    );
};

export default Profile;