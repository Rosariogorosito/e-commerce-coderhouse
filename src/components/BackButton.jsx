import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/backButton.css";
const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); 
    };

    return (
        <button className="back-button" onClick={handleBack}>
            <i className="fa-solid fa-arrow-left"></i> Volver
        </button>
    );
};

export default BackButton;
