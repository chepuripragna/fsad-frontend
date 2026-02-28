import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import '../Dashboard.css';

const CreatorDashboard = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Content submitted for review! (Frontend Simulation)');
        setTitle('');
        setDescription('');
    };

    return (
        <div className="dashboard-page container section-padding">
            <div className="dashboard-header creator-header">
                <h1>Creator Studio</h1>
                <p>Share your knowledge. Add new places, articles, or galleries.</p>
            </div>

            <div className="dashboard-content-grid">
                <div className="dashboard-panel">
                    <h3>Add New Place / Content</h3>
                    <form className="creator-form" onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label>Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Name of the place or article title"
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label>Category</label>
                            <select>
                                <option>Historical Monument</option>
                                <option>Cultural Event</option>
                                <option>Architecture Deep Dive</option>
                            </select>
                        </div>

                        <div className="form-group mb-3">
                            <label>Detailed Description</label>
                            <textarea
                                rows="6"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Write the content here..."
                                required
                            ></textarea>
                        </div>

                        <div className="form-group mb-4">
                            <label>Upload Media (Images/Video)</label>
                            <div className="upload-box">
                                <p>Drag and drop files here or click to browse</p>
                            </div>
                        </div>

                        <Button type="submit" variant="primary">Submit for Review</Button>
                    </form>
                </div>

                <div className="dashboard-panel preview-panel">
                    <h3>Live Preview</h3>
                    {title || description ? (
                        <div className="preview-content">
                            <h2>{title || 'Untitled'}</h2>
                            <div className="preview-image-placeholder">Media Preview</div>
                            <p>{description || 'Your content will appear here...'}</p>
                        </div>
                    ) : (
                        <div className="empty-preview">
                            <p>Start typing to see the preview</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreatorDashboard;
