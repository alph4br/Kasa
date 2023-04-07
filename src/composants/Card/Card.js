import React from 'react';
import './Card.scss';

const Card = (item) => {
    return (
        <div className='card' style={{backgroundImage: `url(${item.item.cover})`}}>
            <h2>{item.item.title}</h2>
        </div>
    );
};

export default Card;