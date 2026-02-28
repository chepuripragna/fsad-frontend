import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import '../CulturalPractices/CulturalLayout.css';

const TimelinePage = () => {
    const historyEvents = [
        { year: "3300 BCE", title: "Indus Valley Civilization", description: "One of the world's earliest urban civilizations, known for planned cities like Harappa and Mohenjo-Daro." },
        { year: "1500 BCE", title: "Vedic Period", description: "Composition of the Vedas, laying the foundations of Hinduism and early Indian philosophy." },
        { year: "322 BCE", title: "Mauryan Empire", description: "Chandragupta Maurya unifies much of India. Ashoka the Great promotes Buddhism across Asia." },
        { year: "320 CE", title: "Gupta Empire", description: "Often called the Golden Age of India, marked by significant achievements in science, art, and literature." },
        { year: "1206 CE", title: "Delhi Sultanate", description: "Establishment of Islamic rule over large parts of the subcontinent, leading to Indo-Islamic cultural synthesis." },
        { year: "1526 CE", title: "Mughal Empire", description: "A period of immense wealth, cultural flourishing, and architectural masterpieces like the Taj Mahal." },
        { year: "1858 CE", title: "British Raj", description: "Direct rule by the British Crown following the Indian Rebellion of 1857." },
        { year: "1947 CE", title: "Independence", description: "India gains independence, establishing the world's largest democracy." },
    ];

    return (
        <div className="culture-page container section-padding">
            <div className="culture-header">
                <h1 className="culture-title">Historical Timeline</h1>
                <p className="culture-subtitle">The chronological evolution of the Indian subcontinent.</p>
            </div>

            <div className="timeline-wrapper bg-white p-4 radius-md shadow-md">
                <Timeline events={historyEvents} />
            </div>
        </div>
    );
};

export default TimelinePage;
