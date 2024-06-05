// src/pages/LandingPage.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; 
import logo from '../assets/logo.jpg'; // Import the logo image

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');  // Redirect to the main app page after 3 seconds
        }, 3000); // 3000 milliseconds = 3 seconds

        return () => clearTimeout(timer); // Cleanup the timer
    }, [navigate]);

    return (
        <div className="landing-page">
            <img src={logo} alt="Logo" className="landing-logo" />
        </div>
    );
};

export default LandingPage;
