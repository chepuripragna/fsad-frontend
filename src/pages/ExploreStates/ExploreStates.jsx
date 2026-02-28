import React from 'react';
import Card from '../../components/Card/Card';
import { statesData } from '../../data/statesData';
import './ExploreStates.css';

const ExploreStates = () => {
    return (
        <div className="explore-page container section-padding">
            <h1 className="section-title">Explore by State</h1>
            <p className="explore-subtitle text-center">
                Discover the unique heritage, monuments, and culture of each Indian state.
            </p>

            <div className="states-grid">
                {statesData.map(state => (
                    <Card
                        key={state.id}
                        title={state.name}
                        description={state.description}
                        image={state.image}
                        linkTo={`/states/${state.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExploreStates;
