import React, { useState } from 'react';
import './Collapse.scss';

const Collapse = (props) => {

    // Récupérer les informations
    const title = props.title;
    const logement = props.logement;

    // Variable(s) d'état
    const [isOpen, setIsOpen] = useState(false);

    // Ouvrir ou fermer le collapse
    function openCloseCollapse()
    {
        if (isOpen)
        {
            setIsOpen(false);
        }
        else 
        {
            setIsOpen(true);
        }
    }

    return (
        <div className='collapse' style={{marginTop: "15px", cursor: "pointer"}} onClick={openCloseCollapse}>
            <div className='taContainer'>
                <h2>{title}</h2>
                {isOpen ? <img src="../images/arrowUp.png" alt="" /> : <img src="../images/arrowDown.png" alt=""/>}
            </div>
            {isOpen ? (
                <div className='openCollapse'>
                    {
                        title === "Fiabilité" ? (<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>) : 
                        title === "Respect" ? (<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>) : 
                        title === "Service" ? (<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>) : 
                        title === "Sécurité" ? (<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>) : 
                        title === "Description" ? (<p>{logement.description}</p>) : 
                        title === "Équipements" ? (<ul>{logement.equipments.map((item, index) => (<li key={index}>{item}</li>))}</ul>) : 
                        ""
                    }
                </div>
            ) : ""}
        </div>
    );
};

export default Collapse;