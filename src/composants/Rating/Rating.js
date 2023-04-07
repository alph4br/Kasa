import React from 'react';
import './Rating.scss';

const Rating = (queryLogement) => {
    // Récupérer le logement
    const logement = queryLogement.logement;
    
    return (
        <div className='rating'>
            <div className='rContainer'>
                {[...Array(parseInt(logement.rating))].map((element, index) => (
                    <img key={index} src="../images/starRed.png" alt="" />
                ))}
                {[...Array(parseInt(5 - logement.rating))].map((element, index) => (
                    <img key={index} src="../images/star.png" alt="" />
                ))}
            </div>
        </div>
    );
};

export default Rating;