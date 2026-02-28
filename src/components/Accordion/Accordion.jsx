import React, { useState } from 'react';
import './Accordion.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="accordion-item">
            <button className={`accordion-header ${isOpen ? 'active' : ''}`} onClick={onClick}>
                <span className="accordion-title">{title}</span>
                <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="accordion-content" style={{ maxHeight: isOpen ? '1000px' : '0' }}>
                <div className="accordion-body">
                    {content}
                </div>
            </div>
        </div>
    );
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
