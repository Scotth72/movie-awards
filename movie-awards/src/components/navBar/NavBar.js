import React from 'react';

import './navbar.css';

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <h1 className="logo">
                    <a href="#">Shopify</a>
                </h1>
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">Top List</a></li>
                    <li><a href="#">Nomination</a></li>

                </ul>

            </div>
        </nav>
    )
}

export default NavBar;
