import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import './ExploreStates.css';

const ExploreStates = () => {

    const [states, setStates] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/states")
            .then(res => res.json())
            .then(data => {
                console.log("States:", data);
                setStates(data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="explore-page container section-padding">
            <h1 className="section-title">Explore by State</h1>
            <p className="explore-subtitle text-center">
                Discover the unique heritage, monuments, and culture of each Indian state.
            </p>

            <div className="states-grid">
                {states.length > 0 ? (
                    states.map(state => (
                        <Card
                            key={state.id}
                            title={state.name}
                            description={state.description}
                            image={state.imageUrl}
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