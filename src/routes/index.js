import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutDefault from '../layouts/LayoutDefault/LayoutDefault';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Logement from '../pages/Logement/Logement';
import Error from '../pages/Error/Error';

const MyRoutes = () => {
    return (
        <>
          <BrowserRouter>
            <Routes>
                <Route element={<LayoutDefault />}>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/logement/:id' element={<Logement/>}/>
                  <Route path='*' element={<Error/>}/>
                </Route>
            </Routes>
          </BrowserRouter>  
        </>
    );
};

export default MyRoutes;