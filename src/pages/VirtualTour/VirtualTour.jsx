import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import virtualTourBg from '../../assets/images/states/uttar-pradesh.jpg';
import defaultImage from '../../assets/images/default/placeholder.jpg';
import './VirtualTour.css';

const VirtualTour = () => {
    const [activeHotspot, setActiveHotspot] = useState(null);
    const [chatMessages, setChatMessages] = useState([
        { sender: 'guide', text: 'Welcome to the Taj Mahal Virtual Tour! I am your AI guide. Feel free to explore the hotspots or ask me any questions.' }
    ]);
    const [userInput, setUserInput] = useState('');

    const hotspots = [
        { id: 1, top: '40%', left: '50%', title: 'Main Dome', desc: 'The large white marble dome that crowns the tomb. It is nearly 35 meters high.' },
        { id: 2, top: '60%', left: '30%', title: 'Minaret', desc: 'One of the four minarets framing the tomb, each more than 40 meters tall.' },
        { id: 3, top: '75%', left: '50%', title: 'Lotus Pool', desc: 'The reflecting pool that offers a stunning mirroring of the mausoleum.' },
    ];

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        setChatMessages([...chatMessages, { sender: 'user', text: userInput }]);
        setUserInput('');

        // Simulate guide response
        setTimeout(() => {
            setChatMessages(prev => [...prev, {
                sender: 'guide',
                text: 'That is fascinating! The architecture here represents the peak of Mughal design.'
            }]);
        }, 1000);
    };

    return (
        <div className="virtual-tour-page">
            <div className="tour-container">

                <div className="tour-view">
                    <div className="tour-header">
                        <h2>Taj Mahal - 360° Virtual Tour</h2>
                        <div className="progress-bar-container">
                            <span className="progress-text">Tour Progress: 33%</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '33%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="tour-image-wrapper">
                        <img
                            src={virtualTourBg || defaultImage}
                            alt="Taj Mahal Virtual Tour"
                            className="tour-image"
                            onError={(e) => { e.target.src = defaultImage }}
                        />

                        {hotspots.map((hotspot) => (
                            <div
                                key={hotspot.id}
                                className={`hotspot-icon ${activeHotspot === hotspot.id ? 'active' : ''}`}
                                style={{ top: hotspot.top, left: hotspot.left }}
                                onClick={() => setActiveHotspot(hotspot.id)}
                            >
                                +
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tour-sidebar">
                    {activeHotspot ? (
                        <div className="info-panel">
                            <h3>{hotspots.find(h => h.id === activeHotspot).title}</h3>
                            <p>{hotspots.find(h => h.id === activeHotspot).desc}</p>
                            <Button onClick={() => setActiveHotspot(null)} variant="outline" className="mt-3">Close Info</Button>
                        </div>
                    ) : (
                        <div className="info-panel">
                            <h3>Select a Hotspot</h3>
                            <p>Click on the '+' icons on the image to learn more about specific architectural features.</p>
                        </div>
                    )}

                    <div className="chat-panel">
                        <div className="chat-header">
                            <h3>Ask the Guide</h3>
                        </div>
                        <div className="chat-messages">
                            {chatMessages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    <p>{msg.text}</p>
                                </div>
                            ))}
                        </div>
                        <form className="chat-input-form" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Type a question..."
                                className="chat-input"
                            />
                            <button type="submit" className="chat-send">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualTour;
