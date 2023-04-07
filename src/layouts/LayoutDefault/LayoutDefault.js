import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../composants/Header/Header';
import Footer from '../../composants/Footer/Footer';

const LayoutDefault = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default LayoutDefault;