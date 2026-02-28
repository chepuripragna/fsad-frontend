import React from 'react';
import Card from '../../components/Card/Card';
import '../CulturalPractices/CulturalLayout.css';
import diwali from '../../assets/images/festivals/diwali.jpg';
import holi from '../../assets/images/festivals/holi.jpg';
import durgaPuja from '../../assets/images/festivals/durga-puja.jpg';
import pongal from '../../assets/images/festivals/pongal.jpg';

const Festivals = () => {
    const festivalsData = [
        { id: 1, name: "Diwali", image: diwali, desc: "The festival of lights, symbolizing the spiritual victory of light over darkness." },
        { id: 2, name: "Holi", image: holi, desc: "The festival of colors, celebrating the arrival of spring and love." },
        { id: 3, name: "Durga Puja", image: durgaPuja, desc: "A major annual festival celebrating the goddess Durga's victory." },
        { id: 4, name: "Pongal", image: pongal, desc: "A harvest festival celebrated enthusiastically with traditional foods." }
    ];

    return (
        <div className="culture-page container section-padding">
            <div className="culture-header">
                <h1 className="culture-title">Festivals of India</h1>
                <p className="culture-subtitle">A celebration of life, seasons, and spirituality.</p>
            </div>

            <div className="culture-info-block">
                <p>India is often called the land of festivals. Every day is a celebration of a deity, a season, or agricultural bounty. These festivals bring people together, transcending boundaries and fostering a spirit of unity.</p>
            </div>

            <div className="festivals-grid">
                {festivalsData.map(fes => (
                    <Card
                        key={fes.id}
                        title={fes.name}
                        description={fes.desc}
                        image={fes.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Festivals;
