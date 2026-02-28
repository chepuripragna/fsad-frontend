import React from 'react';
import '../Dashboard.css';

const AdminDashboard = () => {
    return (
        <div className="dashboard-page container section-padding">
            <div className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <p>Manage users, content, and platform analytics.</p>
            </div>

            <div className="dashboard-stats-grid">
                <div className="stat-card">
                    <h3>Total Users</h3>
                    <div className="stat-number">12,450</div>
                    <div className="stat-trend positive">+14% this month</div>
                </div>
                <div className="stat-card">
                    <h3>Active Discussions</h3>
                    <div className="stat-number">342</div>
                    <div className="stat-trend positive">+5% this week</div>
                </div>
                <div className="stat-card">
                    <h3>Content Pending Review</h3>
                    <div className="stat-number">28</div>
                    <div className="stat-trend negative">Needs attention</div>
                </div>
                <div className="stat-card">
                    <h3>Virtual Tours Taken</h3>
                    <div className="stat-number">8,920</div>
                    <div className="stat-trend positive">+22% this month</div>
                </div>
            </div>

            <div className="dashboard-content-grid">
                <div className="dashboard-panel">
                    <h3>Pending Content Approvals</h3>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Creator</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>New image gallery for Hampi</td>
                                <td>@HistoryPhotog</td>
                                <td>Media</td>
                                <td>
                                    <button className="btn-approve">Approve</button>
                                    <button className="btn-reject">Reject</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Article: The lost caves of Ajanta</td>
                                <td>@ScholarExplorer</td>
                                <td>Article</td>
                                <td>
                                    <button className="btn-approve">Approve</button>
                                    <button className="btn-reject">Reject</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="dashboard-panel">
                    <h3>Visitor Analytics</h3>
                    <div className="static-chart">
                        <div className="chart-bar" style={{ height: '60%' }}><span>Mon</span></div>
                        <div className="chart-bar" style={{ height: '80%' }}><span>Tue</span></div>
                        <div className="chart-bar" style={{ height: '40%' }}><span>Wed</span></div>
                        <div className="chart-bar" style={{ height: '90%' }}><span>Thu</span></div>
                        <div className="chart-bar" style={{ height: '100%' }}><span>Fri</span></div>
                        <div className="chart-bar" style={{ height: '70%' }}><span>Sat</span></div>
                        <div className="chart-bar" style={{ height: '50%' }}><span>Sun</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
