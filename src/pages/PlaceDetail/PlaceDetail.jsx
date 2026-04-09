import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImage from '../../assets/images/default/placeholder.jpg';
import Timeline from '../../components/Timeline/Timeline';
import './PlaceDetail.css';

const PlaceDetail = () => {
    const { placeId } = useParams();
    const [placeInfo, setPlaceInfo] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/monuments")
            .then(res => res.json())
            .then(data => {
                const found = data.find(
                    (m) => m.id.toString() === placeId
                );
                setPlaceInfo(found);
            })
            .catch(err => console.log(err));
    }, [placeId]);

    // 🔴 Loading / Not found handling
    if (!placeInfo) {
        return <div className="container section-padding">Loading...</div>;
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
                    src={placeInfo.imageUrl || defaultImage}
                    alt={placeInfo.name}
                    className="place-hero-img"
                    onError={(e) => { e.target.src = defaultImage }}
                />
                <div className="place-hero-overlay">
                    <div className="container">
                        <h1 className="place-title">{placeInfo.name}</h1>
                        <p className="place-location">{placeInfo.state}</p>
                    </div>
                </div>
            </div>

            <div className="container section-padding place-content-grid">
                <div className="place-main">
                    <h2>Overview</h2>
                    <p className="place-text">
                        {placeInfo.description || "No description available for this monument."}
                    </p>

                    <h2>Historical Background</h2>
                    <p className="place-text">
                        This monument has witnessed historical events and stands as an important cultural landmark.
                    </p>

                    <h2>Architectural Features</h2>
                    <p className="place-text">
                        It showcases unique architectural styles and craftsmanship of its era.
                    </p>

                    <h2>Cultural Importance</h2>
                    <p className="place-text">
                        It remains a symbol of heritage and attracts visitors from across the country.
                    </p>

                    <h2 className="mt-4">Timeline</h2>
                    <Timeline events={timelineEvents} />
                </div>

                <div className="place-sidebar">
                    <h3>Explore More</h3>
                    <p>Check out more monuments from the list.</p>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetail;