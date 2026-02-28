import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button' }) => {
    return (
        <button
            type={type}
            className={`btn btn-${variant} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
