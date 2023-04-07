import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <header>
            <NavLink to="/home"><img src="../images/logo.png" alt="Logo" /></NavLink>
            <nav>
                <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : 'inactif')}>Accueil</NavLink>
                <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'inactif')}>À propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;