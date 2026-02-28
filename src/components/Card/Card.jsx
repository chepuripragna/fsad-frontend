import React from 'react';
import { Link } from 'react-router-dom';
import defaultImage from '../../assets/images/default/placeholder.jpg';
import './Card.css';

const Card = ({ title, image, description, linkTo }) => {
    return (
        <div className="card">
            <div className="card-image-wrapper">
                <img
                    src={image || defaultImage}
                    alt={title}
                    className="card-image"
                    onError={(e) => { e.target.src = defaultImage }}
                />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                {linkTo && (
                    <Link to={linkTo} className="card-link">Explore →</Link>
                )}
            </div>
        </div>
    );
};

export default Card;
