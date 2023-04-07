import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import './Logement.scss';
import Picture from '../../composants/Picture/Picture';
import Tag from '../../composants/Tag/Tag';
import Rating from '../../composants/Rating/Rating';
import Host from '../../composants/Host/Host';
import Collapse from '../../composants/Collapse/Collapse';
import Error from '../../pages/Error/Error';

const Logement = () => {
    
    // Récupérer le logement grâce à l'id de l'url
    const {id} = useParams();
    const [logement, setLogement] = useState({
        tags: [],
        equipments: [],
        pictures :[],
        rating: "",
        host: {
            name : "",
            picture : ""
        }
    })

    useEffect(() => {
        data.map((logement) => {
            if (logement.id === id) {
               setLogement(logement);
            }
            return null;
        })
    }, [id]);

    if(logement.title === undefined){
        return <Error/>
    }


    return (
        <main className='logement'>
            <Picture logement={logement}></Picture>
            <div className='informationsLogement'>
                <div className='tlthrContainer'>
                    <div className='tltContainer'>
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                        <Tag logement={logement}></Tag>
                    </div>
                    <div className='hrContainer'>
                        <Host logement={logement}></Host>
                        <Rating logement={logement}></Rating>
                    </div>
                </div>
                <div className='collapseContainer'>
                    <Collapse title="Description" logement={logement}></Collapse>
                    <Collapse title="Équipements" logement={logement}></Collapse>
                </div>
            </div>
        </main>
    );
};

export default Logement;