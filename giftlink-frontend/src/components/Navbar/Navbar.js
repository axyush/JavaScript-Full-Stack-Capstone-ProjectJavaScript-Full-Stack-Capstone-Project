import React from 'react';
// there is no <Link> tag in standard html. so we need:
import { Link } from 'react-router-dom';

/*
In React Router, the <Link> component is used to navigate between different routes 
in a single-page application (SPA) without causing a full page reload.
*/


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">GiftLink</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item">
                    <a className="nav-link" href="/home.html">Home</a> {/* Link to home.html */}                                                                                                                                                     
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/app">Gifts</a> {/* Updated Link */}                        
                    </li>
                <li className="nav-item">
                        <Link className="nav-link" to="/app/search">Search</Link>{/* link to search */}
                    </li>
               
                </ul>
            </div>
        </nav>
    );
}