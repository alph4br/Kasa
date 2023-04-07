import React, { useState } from 'react';
import './Picture.scss';

const Picture = (queryLogement) => {

    // Récupérer le logement
    const logement = queryLogement.logement;
    
    // useState
    const [index, setIndex] = useState(0);

    // Next Image Function
    function nextImage()
    {
        if (index + 1 < logement.pictures.length)
        {
            setIndex(index + 1);
        }
        else 
        {
            setIndex(0)
        }
    }

    // Previous Image Function
    function previousImage()
    {
        if (index === 0)
        {
            setIndex(logement.pictures.length - 1);
        }
        else 
        {
            setIndex(index - 1);
        }
    }

    return (
        <div className='imagesContainer'>
            <img className='picture' src={logement.pictures[index]} alt="" />
            {logement.pictures.length > 1 ? (<img className='arrowRight' src="../images/arrowRight.png" alt="" onClick={nextImage}/>) : ""}
            {logement.pictures.length > 1 ? (<img className='arrowLeft' src="../images/arrowLeft.png" alt="" onClick={previousImage} />) : ""}
            {logement.pictures.length > 1 ? (<p className='compteur'>{index + 1}/{logement.pictures.length}</p>) : ""}
        </div>
    );
};

export default Picture;