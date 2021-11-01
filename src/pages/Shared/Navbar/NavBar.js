import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './NavBar.css';
const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Travel Webbed</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        {/* user name */}
                        {
                            user?.displayName &&
                            <div className="dropdown button-left">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-user login-button"></i> {user.displayName || user.name}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><Link className="dropdown-item" to="/my-bookings">My Booking</Link></li>
                                    <li><Link className="dropdown-item" to="/manage-all-bookings">Manage All Booking</Link></li>
                                    <li><Link className="dropdown-item" to="/add-new-service">Add A New Service</Link></li>
                                </ul>
                            </div>
                        }
                        {/* logout btn / login btn setup */}
                        {
                            user?.displayName ?
                                <Link className="nav-link" to="/" onClick={logOut}><span className="fw-black button-login">LogOut</span></Link > :
                                <Link to="/login"><button className="button-login button-left">Login/Register</button></Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;