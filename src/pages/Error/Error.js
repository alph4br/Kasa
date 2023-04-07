import React from 'react';
import './Error.scss';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/home">Retourner sur la page d’accueil</NavLink>
        </div>
    );
};

export default Error;