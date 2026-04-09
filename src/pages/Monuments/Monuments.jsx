import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';
import './Monuments.css';

const Monuments = () => {

    const location = useLocation();

    const [allMonuments, setAllMonuments] = useState([]);
    const [filteredMonuments, setFilteredMonuments] = useState([]);
    const [filterState, setFilterState] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // Get state from URL
    const queryParams = new URLSearchParams(location.search);
    const stateFromURL = queryParams.get("state");

    // ✅ FIXED FETCH
    useEffect(() => {
        fetch("http://localhost:8080/api/monuments")
            .then(res => res.json())
            .then(data => {
                console.log("Monuments:", data);
                setAllMonuments(data);
            })
            .catch(err => console.log(err));
    }, []);

    // ✅ FIXED FILTERING
    useEffect(() => {
        let result = [...allMonuments];

        // Filter from URL
        // URL filter
if (stateFromURL) {
    result = result.filter(m => m.state === stateFromURL);
}

// Dropdown filter
if (filterState !== 'All') {
    result = result.filter(m => m.state === filterState);
}

        // Search filter
        if (searchTerm) {
            result = result.filter(m =>
                (m.description || "").toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredMonuments(result);
    }, [filterState, searchTerm, allMonuments, stateFromURL]);

    return (
        <div className="monuments-page container section-padding">
            <div className="monuments-header">
                <h1 className="section-title">Majestic Monuments</h1>
                <p className="text-center">
                    Explore the architectural marvels across India.
                </p>

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
                        <option value="Telangana">Telangana</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                    </select>
                </div>
            </div>

            <div className="monuments-grid">
                {filteredMonuments.length > 0 ? (
                    filteredMonuments.map(monument => (
                        <Card
                            key={monument.id}
                            title={monument.name || monument.title || monument.description || "No Title"}
                            description={monument.state}
                            image={monument.imageUrl}
                            linkTo={`/place/${monument.id}`}
                        />
                    ))
                ) : (
                    <div className="no-results">
                        No monuments found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Monuments;