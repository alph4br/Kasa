import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <img src="../images/logo1.png" alt="" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;



// Routes => index.js et non MyRoutes.js
// Refactorisation du code camelCase ou Snale_case ou PascalCase
// Composant Collapse un seul pour la gestion des deux types d'éléments
// Optionel, créer un deuxieme Layout pour la page 404 sans le footer