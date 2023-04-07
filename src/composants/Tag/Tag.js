import React from 'react';
import './Tag.scss';

const Tag = (queryLogement) => {
    const logement = queryLogement.logement;

    return (
        <div className='tags'>
            {logement.tags.map((tag, index) => (<p key={index} className="tag">{tag}</p>))}
        </div>
    );
};

export default Tag;