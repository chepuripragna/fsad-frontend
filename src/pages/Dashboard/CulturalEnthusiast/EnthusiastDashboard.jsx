import React from 'react';
import Card from '../../../components/Card/Card';
import '../Dashboard.css';

const EnthusiastDashboard = () => {
    return (
        <div className="dashboard-page container section-padding">
            <div className="dashboard-header bg-gradient user-header">
                <div className="user-profile">
                    <div className="user-avatar">CE</div>
                    <div className="user-info">
                        <h1>Welcome back, Explorer!</h1>
                        <p>Cultural Enthusiast | Level: Journeyman</p>
                    </div>
                </div>
                <div className="user-progress">
                    <p>Heritage Sites Visited: 12 / 50</p>
                    <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: '24%' }}></div>
                    </div>
                </div>
            </div>

            <div className="dashboard-panel mt-4">
                <h3>Saved Places to Visit</h3>
                <div className="saved-grid">
                    <Card
                        title="Ajanta Caves"
                        image="https://images.unsplash.com/photo-1588612143093-54ec8942a1eb?auto=format&fit=crop&q=80&w=800"
                        description="Maharashtra • Ancient Buddhist caves"
                        linkTo="/place/ajanta"
                    />
                    <Card
                        title="Hawa Mahal"
                        image="https://images.unsplash.com/photo-1594119932077-73d72b21703f?auto=format&fit=crop&q=80&w=800"
                        description="Rajasthan • Palace of Winds"
                        linkTo="/place/hawa-mahal"
                    />
                    <Card
                        title="Brihadeeswara"
                        image="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800"
                        description="Tamil Nadu • Chola architecture"
                        linkTo="/place/brihadeeswara-temple"
                    />
                </div>
            </div>

            <div className="dashboard-panel mt-4">
                <h3>Recently Viewed</h3>
                <ul className="recent-list">
                    <li><strong>Taj Mahal</strong> - Viewed 2 hours ago</li>
                    <li><strong>Virtual Tour: Red Fort</strong> - Completed yesterday</li>
                    <li><strong>Discussion: Architecture of Vijayanagara</strong> - Replied 2 days ago</li>
                </ul>
            </div>
        </div>
    );
};

export default EnthusiastDashboard;
