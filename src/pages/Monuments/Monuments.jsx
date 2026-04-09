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

    const role = localStorage.getItem("role");

    const queryParams = new URLSearchParams(location.search);
    const stateFromURL = queryParams.get("state");

    // ✅ FETCH (only initial data from backend)
    useEffect(() => {
        fetch("https://fsad-backend-bd5s.onrender.com/api/monuments")
            .then(res => res.json())
            .then(data => {
                setAllMonuments(data);
                setFilteredMonuments(data);
            })
            .catch(err => console.log(err));
    }, []);

    // ✅ FILTER
    useEffect(() => {
        let result = [...allMonuments];

        if (stateFromURL) {
            result = result.filter(m => m.state === stateFromURL);
        }

        if (filterState !== 'All') {
            result = result.filter(m => m.state === filterState);
        }

        if (searchTerm) {
            result = result.filter(m =>
                (m.description || "").toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredMonuments(result);
    }, [filterState, searchTerm, allMonuments, stateFromURL]);

    // ✅ ADD (frontend only)
    const handleAdd = () => {
        const title = prompt("Enter title:");
        if (!title) return;

        const description = prompt("Enter description:");
        const state = prompt("Enter state:");
        const imageUrl = prompt("Enter image URL:");

        const newMonument = {
            id: Date.now(),
            title,
            description,
            state,
            imageUrl
        };

        const updated = [...allMonuments, newMonument];
        setAllMonuments(updated);

        alert("Added (frontend)");
    };

    // ✅ DELETE (frontend only)
    const handleDelete = (id) => {
        if (!window.confirm("Delete this monument?")) return;

        const updated = allMonuments.filter(m => m.id !== id);
        setAllMonuments(updated);

        alert("Deleted (frontend)");
    };

    // ✅ UPDATE (frontend only)
    const handleUpdate = (monument) => {
        const title = prompt("Update title:", monument.title);
        if (!title) return;

        const description = prompt("Update description:", monument.description);
        const state = prompt("Update state:", monument.state);
        const imageUrl = prompt("Update image URL:", monument.imageUrl);

        const updatedList = allMonuments.map(m =>
            m.id === monument.id
                ? { ...m, title, description, state, imageUrl }
                : m
        );

        setAllMonuments(updatedList);

        alert("Updated (frontend)");
    };

    return (
        <div className="monuments-page container section-padding">

            <div className="monuments-header">
                <h1 className="section-title">Majestic Monuments</h1>

                {role === "ADMIN" && (
                    <button onClick={handleAdd} className="add-btn">
                        + Add Monument
                    </button>
                )}
            </div>

            <div className="monuments-grid">
                {filteredMonuments.length > 0 ? (
                    filteredMonuments.map((monument) => (
                        <div key={monument.id} style={{ position: "relative" }}>

                            {role === "ADMIN" && (
                                <button
                                    onClick={() => handleDelete(monument.id)}
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        background: "red",
                                        color: "white",
                                        border: "none",
                                        padding: "5px",
                                        cursor: "pointer",
                                        zIndex: 10
                                    }}
                                >
                                    Delete
                                </button>
                            )}

                            {role === "ADMIN" && (
                                <button
                                    onClick={() => handleUpdate(monument)}
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        left: "10px",
                                        background: "blue",
                                        color: "white",
                                        border: "none",
                                        padding: "5px",
                                        cursor: "pointer",
                                        zIndex: 10
                                    }}
                                >
                                    Edit
                                </button>
                            )}

                            <Card
                                title={monument.title}
                                description={monument.state}
                                image={monument.imageUrl}
                                linkTo={`/place/${monument.id}`}
                            />
                        </div>
                    ))
                ) : (
                    <div>No monuments found</div>
                )}
            </div>
        </div>
    );
};

export default Monuments;