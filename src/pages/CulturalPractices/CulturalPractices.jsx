import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import traditions from '../../assets/images/culture/traditions.jpg';
import defaultImage from '../../assets/images/default/placeholder.jpg';
import './CulturalLayout.css';

const CulturalPractices = () => {
    const practices = [
        {
            title: "Yoga and Meditation",
            content: "Originating in ancient India, Yoga is a physical, mental, and spiritual practice that aims to transform body and mind. It promotes harmony between humanity and nature."
        },
        {
            title: "Ayurveda",
            content: "The traditional system of medicine in India, Ayurveda focuses on balance in the body through diet, herbal treatment, and yogic breathing. It is one of the world's oldest holistic healing systems."
        },
        {
            title: "Classical Dance Forms",
            content: "India has several recognized classical dance forms, including Bharatanatyam, Kathak, Odissi, and Kuchipudi. Each tells ancient stories through intricate footwork and expressive gestures."
        },
        {
            title: "Traditional Crafts",
            content: "From the intricate weaving of silk sarees in Kanchipuram and Banaras to the clay pottery of Rajasthan, traditional crafts have been passed down for generations."
        }
    ];

    return (
        <div className="culture-page container section-padding">
            <div className="culture-header">
                <h1 className="culture-title">Cultural Practices</h1>
                <p className="culture-subtitle">Discover the living traditions that define Indian heritage.</p>
            </div>

            <div className="culture-content">
                <div className="culture-image-wrapper">
                    <img
                        src={traditions || defaultImage}
                        alt="Cultural Practices"
                        className="culture-main-img"
                        onError={(e) => { e.target.src = defaultImage }}
                    />
                </div>

                <div className="culture-info">
                    <h2>Living Traditions</h2>
                    <p className="mb-4">Indian cultural practices are deeply embedded in daily life, blending spirituality, art, and science. These traditions have evolved over millennia yet remain relevant in the modern world.</p>

                    <Accordion items={practices} />
                </div>
            </div>
        </div>
    );
};

export default CulturalPractices;
