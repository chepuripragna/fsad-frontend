import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { statesData } from '../../data/statesData';
import './Monuments.css';

const Monuments = () => {
    const [allMonuments, setAllMonuments] = useState([]);
    const [filteredMonuments, setFilteredMonuments] = useState([]);
    const [filterState, setFilterState] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Extract all places from statesData to treat them as monuments
        const places = [];
        statesData.forEach(state => {
            state.places.forEach(place => {
                places.push({
                    ...place,
                    stateName: state.name,
                    stateId: state.id
                });
            });
        });
        setAllMonuments(places);
        setFilteredMonuments(places);
    }, []);

    useEffect(() => {
        let result = allMonuments;

        if (filterState !== 'All') {
            result = result.filter(m => m.stateId === filterState);
        }

        if (searchTerm) {
            result = result.filter(m =>
                m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                m.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredMonuments(result);
    }, [filterState, searchTerm, allMonuments]);

    return (
        <div className="monuments-page container section-padding">
            <div className="monuments-header">
                <h1 className="section-title">Majestic Monuments</h1>
                <p className="text-center">Explore the architectural marvels across India.</p>

                <div className="filters-container">
                    <input
                        type="text"
                        placeholder="Search monuments..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <select
                        value={filterState}
                        onChange={(e) => setFilterState(e.target.value)}
                        className="filter-select"
                    >
                        <option value="All">All States</option>
                        {statesData.map(state => (
                            <option key={state.id} value={state.id}>{state.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="monuments-grid">
                {filteredMonuments.length > 0 ? (
                    filteredMonuments.map(monument => (
                        <Card
                            key={monument.id}
                            title={monument.name}
                            description={`${monument.stateName} • ${monument.description}`}
                            image={monument.image}
                            linkTo={`/place/${monument.id}`}
                        />
                    ))
                ) : (
                    <div className="no-results">No monuments found matching your criteria.</div>
                )}
            </div>
        </div>
    );
};

export default Monuments;
