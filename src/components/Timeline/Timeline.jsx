import React from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div className="timeline-item" key={index}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">{event.year}</div>
                    <div className="timeline-content">
                        <h4>{event.title}</h4>
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
