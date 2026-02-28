import React, { useState } from 'react';
import Tabs from '../../components/Tabs/Tabs';
import Button from '../../components/Button/Button';
import './Discussion.css';

const Discussion = () => {
    const [threads, setThreads] = useState([
        { id: 1, author: 'HistoryBuff', title: 'Best time to visit Khajuraho?', replies: 12, likes: 45, category: 'Travel Advice' },
        { id: 2, author: 'CultureExplorer', title: 'Meaning behind the Ajanta cave paintings', replies: 8, likes: 32, category: 'History' },
        { id: 3, author: 'HeritageGuide', title: 'Upcoming classical dance festivals in December', replies: 5, likes: 21, category: 'Events' }
    ]);

    const [newReply, setNewReply] = useState('');
    const [activeThread, setActiveThread] = useState(null);

    const handleReplySubmit = (e) => {
        e.preventDefault();
        if (newReply.trim()) {
            alert("Reply posted successfully! (Frontend Simulation)");
            setNewReply('');
        }
    };

    const ThreadList = () => (
        <div className="thread-list">
            {threads.map(thread => (
                <div key={thread.id} className="thread-card" onClick={() => setActiveThread(thread)}>
                    <div className="thread-badge">{thread.category}</div>
                    <h3 className="thread-title">{thread.title}</h3>
                    <div className="thread-meta">
                        <span>Posted by <strong>{thread.author}</strong></span>
                        <div className="thread-stats">
                            <span>💬 {thread.replies} replies</span>
                            <span>❤️ {thread.likes} likes</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const ThreadView = () => (
        <div className="active-thread-view">
            <button className="back-btn" onClick={() => setActiveThread(null)}>← Back to discussions</button>
            <div className="thread-post main-post">
                <h2>{activeThread.title}</h2>
                <div className="post-meta">Posted by {activeThread.author} in {activeThread.category}</div>
                <p className="post-content">I'm planning a visit soon. Any recommendations or insights regarding this topic would be highly appreciated. Looking forward to learning from the community!</p>
            </div>

            <div className="thread-replies">
                <h4>Replies ({activeThread.replies})</h4>
                <div className="thread-post reply">
                    <div className="post-meta">Reply by <strong>LocalExpert</strong></div>
                    <p className="post-content">You should definitely try to visit early in the morning. The light is beautiful and it's much less crowded. Make sure to hire an official guide!</p>
                </div>
                <div className="thread-post reply">
                    <div className="post-meta">Reply by <strong>TravelYogi</strong></div>
                    <p className="post-content">I agree with the previous reply. Also, carry plenty of water and wear comfortable walking shoes as you'll be exploring for hours.</p>
                </div>
            </div>

            <form className="reply-form" onSubmit={handleReplySubmit}>
                <h4>Add a Reply</h4>
                <textarea
                    rows="4"
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    placeholder="Share your thoughts..."
                    required
                ></textarea>
                <Button type="submit" variant="primary">Post Reply</Button>
            </form>
        </div>
    );

    const discussionTabs = [
        { label: "All Discussions", content: activeThread ? <ThreadView /> : <ThreadList /> },
        { label: "History", content: <div className="p-4 text-center">History discussions loading...</div> },
        { label: "Events", content: <div className="p-4 text-center">Events discussions loading...</div> },
        { label: "Travel Advice", content: <div className="p-4 text-center">Travel Advice loading...</div> }
    ];

    return (
        <div className="discussion-page container section-padding">
            <div className="discussion-header text-center mb-5">
                <h1 className="section-title">Community Dashboard</h1>
                <p>Join the conversation! Ask questions, share your experiences, and connect with heritage enthusiasts.</p>
                {!activeThread && <Button variant="primary" className="mt-3">Start New Discussion</Button>}
            </div>

            <div className="bg-white p-4 radius-md shadow-sm">
                <Tabs tabs={discussionTabs} />
            </div>
        </div>
    );
};

export default Discussion;
