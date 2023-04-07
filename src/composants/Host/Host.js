import React from 'react';
import './Host.scss';

const Host = (queryLogement) => {
    
    // Récupérer le logement
    const logement = queryLogement.logement;
    
    return (
        <div className='host'>
            <div className='hContainer'>
                <p className='hostName'>{logement.host.name}</p>
                <img src={logement.host.picture} alt="" />
            </div>
        </div>
    );
};

export default Host;