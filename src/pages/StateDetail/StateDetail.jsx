import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { statesData } from '../../data/statesData';
import './StateDetail.css';

const StateDetail = () => {
    const { stateId } = useParams();
    const stateInfo = statesData.find(s => s.id === stateId);

    if (!stateInfo) {
        return <div className="container section-padding">State not found.</div>;
    }

    return (
        <div className="state-detail-page">
            <div className="state-hero" style={{ backgroundImage: `linear-gradient(rgba(31, 58, 138, 0.7), rgba(31, 58, 138, 0.8)), url(${stateInfo.image})` }}>
                <div className="container">
                    <h1 className="state-title">{stateInfo.name}</h1>
                    <p className="state-description">{stateInfo.description}</p>
                </div>
            </div>

            <div className="container section-padding">
                <h2 className="section-title">Must Visit Places in {stateInfo.name}</h2>
                <div className="places-grid">
                    {stateInfo.places.map(place => (
                        <Card
                            key={place.id}
                            title={place.name}
                            description={place.description}
                            image={place.image}
                            linkTo={`/place/${place.id}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StateDetail;
