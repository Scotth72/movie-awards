import React from 'react';

import './moviecard.css';

const MovieCard =() => {
    return (
        <div className="movie-card">
            <div className="img-container">
                <img src="" alt=""></img>
            </div>
            <div className="info">
                <h3 className="title">Hello from Movie Card</h3>
                <h3 className="release-year">2020</h3>
            </div>
            <button className="card-btn">Nominate</button>
            
        </div>
    );
}

export default MovieCard;
