import React from 'react';

import './navbar.css';

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <h1 className="logo">
                    <a href="https://www.shopify.com/">Shopify </a>
                </h1>
                <ul>
                    <li><a href="#" className="active">Movies</a></li>
                    <li><a href="#">Top List</a></li>
                    <li><a href="#">Nominations</a></li>

                </ul>

            </div>
        </nav>
    )
}

export default NavBar;
