import React from 'react';
import Button from '../../../components/Button/Button';
import '../Dashboard.css';

const GuideDashboard = () => {
    return (
        <div className="dashboard-page container section-padding">
            <div className="dashboard-header guide-header">
                <h1>Tour Guide Portal</h1>
                <p>Manage your upcoming sessions and answer community questions.</p>
            </div>

            <div className="dashboard-content-grid">
                <div className="dashboard-panel">
                    <h3>Schedule a Live Session</h3>
                    <form className="session-form">
                        <div className="form-group mb-3">
                            <label>Topic / Location</label>
                            <input type="text" placeholder="e.g. Secrets of the Red Fort" />
                        </div>
                        <div className="form-row">
                            <div className="form-group mb-3">
                                <label>Date</label>
                                <input type="date" />
                            </div>
                            <div className="form-group mb-3">
                                <label>Time</label>
                                <input type="time" />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label>Max Attendees</label>
                            <input type="number" defaultValue="20" />
                        </div>
                        <Button variant="primary">Schedule Session</Button>
                    </form>
                </div>

                <div className="dashboard-panel">
                    <h3>Q&A Panel (Pending Answers)</h3>
                    <div className="qa-list">
                        <div className="qa-card">
                            <p className="qa-question"><strong>Q:</strong> "What exactly is the hanging pillar in Lepakshi?"</p>
                            <p className="qa-asker">Asked by @CuriousTraveller</p>
                            <textarea placeholder="Type your answer..." className="qa-reply mt-2"></textarea>
                            <div className="mt-2 text-right">
                                <Button variant="outline" className="btn-small">Reply</Button>
                            </div>
                        </div>
                        <div className="qa-card">
                            <p className="qa-question"><strong>Q:</strong> "Are cameras allowed inside the Taj Mahal main tomb?"</p>
                            <p className="qa-asker">Asked by @PhotoFan</p>
                            <textarea placeholder="Type your answer..." className="qa-reply mt-2"></textarea>
                            <div className="mt-2 text-right">
                                <Button variant="outline" className="btn-small">Reply</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideDashboard;
