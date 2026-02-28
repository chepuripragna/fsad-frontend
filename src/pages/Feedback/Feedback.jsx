import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import './Feedback.css';

const Feedback = () => {
    const [rating, setRating] = useState('5');
    const [category, setCategory] = useState('general');
    const [comment, setComment] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
        setRating('5');
        setCategory('general');
        setComment('');
    };

    return (
        <div className="feedback-page container section-padding">
            <div className="feedback-wrapper bg-white shadow-lg radius-lg p-5">
                <div className="text-center mb-5">
                    <h1 className="section-title">We Value Your Feedback</h1>
                    <p>Help us improve your experience on InHerit by sharing your thoughts.</p>
                </div>

                <form onSubmit={handleSubmit} className="feedback-form">
                    <div className="form-group mb-4">
                        <label className="form-label">How would you rate your experience?</label>
                        <div className="rating-options">
                            {[1, 2, 3, 4, 5].map(num => (
                                <label key={num} className="rating-label">
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={num.toString()}
                                        checked={rating === num.toString()}
                                        onChange={(e) => setRating(e.target.value)}
                                    />
                                    <span className="rating-star">★</span>
                                    <span className="rating-num">{num}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-group mb-4">
                        <label className="form-label">Feedback Category</label>
                        <select
                            className="feedback-select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="general">General Feedback</option>
                            <option value="content">Content Accuracy</option>
                            <option value="bug">Report a Bug</option>
                            <option value="feature">Feature Request</option>
                        </select>
                    </div>

                    <div className="form-group mb-4">
                        <label className="form-label">Additional Comments</label>
                        <textarea
                            className="feedback-textarea"
                            rows="5"
                            placeholder="Tell us more about your experience..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <Button type="submit" variant="primary" className="btn-full mt-2 text-lg">Submit Feedback</Button>
                </form>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Thank You!">
                <div className="text-center p-4">
                    <div className="success-icon mb-3">✓</div>
                    <h3>Feedback Received</h3>
                    <p>Thank you for taking the time to share your feedback. We appreciate your contribution to making InHerit better!</p>
                    <Button onClick={() => setIsModalOpen(false)} variant="primary" className="mt-4">Close</Button>
                </div>
            </Modal>
        </div>
    );
};

export default Feedback;
