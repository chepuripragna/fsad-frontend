import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { statesData } from '../../data/statesData';   // 🔥 IMPORT THIS
import './ExploreStates.css';

const ExploreStates = () => {

    const [states, setStates] = useState([]);

    
    useEffect(() => {
        console.log("States:", statesData);
        setStates(statesData);
    }, []);

    return (
        <div className="explore-page container section-padding">
            <h1 className="section-title">Explore by State</h1>
            <p className="explore-subtitle text-center">
                Discover the unique heritage, monuments, and culture of each Indian state.
            </p>

            <div className="states-grid">
                {states.length > 0 ? (
                    states.map((state, index) => (
                        <Card
                            key={index}
                            title={state.name}
                            description={state.description}
                            image={state.image}
                            linkTo={`/monuments?state=${state.name}`}
                        />
                    ))
                ) : (
                    <p>No states available</p>
                )}
            </div>
        </div>
    );
};

export default ExploreStates;