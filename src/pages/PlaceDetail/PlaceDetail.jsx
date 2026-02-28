import React from 'react';
import { useParams } from 'react-router-dom';
import { statesData } from '../../data/statesData';
import defaultImage from '../../assets/images/default/placeholder.jpg';
import Timeline from '../../components/Timeline/Timeline';
import Card from '../../components/Card/Card';
import './PlaceDetail.css';

const PlaceDetail = () => {
    const { placeId } = useParams();

    // Find the place from all states
    let placeInfo = null;
    let parentState = null;

    for (const state of statesData) {
        const found = state.places.find(p => p.id === placeId);
        if (found) {
            placeInfo = found;
            parentState = state;
            break;
        }
    }

    if (!placeInfo) {
        return <div className="container section-padding">Place not found.</div>;
    }

    const timelineEvents = [
        { year: 'Early Period', title: 'Foundation', description: 'The site was initially established.' },
        { year: 'Middle Ages', title: 'Expansion', description: 'Major architectural additions were made.' },
        { year: 'Modern Era', title: 'Preservation', description: 'Recognized as a protected heritage site.' }
    ];

    return (
        <div className="place-detail-page">
            <div className="place-hero">
                <img
                    src={placeInfo.image || defaultImage}
                    alt={placeInfo.name}
                    className="place-hero-img"
                    onError={(e) => { e.target.src = defaultImage }}
                />
                <div className="place-hero-overlay">
                    <div className="container">
                        <h1 className="place-title">{placeInfo.name}</h1>
                        <p className="place-location">{parentState?.name}</p>
                    </div>
                </div>
            </div>

            <div className="container section-padding place-content-grid">
                <div className="place-main">
                    <h2>Overview</h2>
                    <p className="place-text">{placeInfo.description} This monument stands as a testament to the architectural brilliance and cultural richness of the era. It attracts thousands of visitors who come to marvel at its intricate designs and historical significance.</p>

                    <h2>Historical Background</h2>
                    <p className="place-text">Built several centuries ago, this structure has witnessed the rise and fall of empires. It served multiple purposes throughout history, from a strategic fortification to a center of worship and community gathering.</p>

                    <h2>Architectural Features</h2>
                    <p className="place-text">The architecture reflects a blend of indigenous styles and foreign influences. Notable features include intricate carvings, massive gateways, and a layout designed for both aesthetics and functionality.</p>

                    <h2>Cultural Importance</h2>
                    <p className="place-text">Today, it remains a symbol of regional pride and continues to be a focal point for cultural festivals and traditional ceremonies.</p>

                    <h2 className="mt-4">Timeline</h2>
                    <Timeline events={timelineEvents} />
                </div>

                <div className="place-sidebar">
                    <h3>Related Places in {parentState?.name}</h3>
                    <div className="related-places">
                        {parentState?.places.filter(p => p.id !== placeId).slice(0, 3).map(related => (
                            <Card
                                key={related.id}
                                title={related.name}
                                image={related.image}
                                linkTo={`/place/${related.id}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetail;
