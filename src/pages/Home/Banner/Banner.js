import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="home-banner">
            <div className="home-banner-text">
                <h1 className="text-white">One Stop <br />Tour Planner</h1>
                <Link to="/about"><button className="default-button">Know More</button></Link>
            </div>
        </div>
    );
};

export default Banner;