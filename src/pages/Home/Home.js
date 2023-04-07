import React from 'react';
import './Home.scss';
import data from '../../data/data.json';
import Card from '../../composants/Card/Card';
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <main className='home'>
            <div className='quoteContainer'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='annoncesContainer'>
                {data.map((item) => (<NavLink to={`/logement/${item.id}`} key={item.id}><Card item={item} /></NavLink>))}
            </div>
        </main>
    );
};

export default Home;