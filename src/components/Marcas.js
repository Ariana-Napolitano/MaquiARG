import React from 'react';
import { Link } from 'react-router-dom';

const Marcas = () =>{
    const marcas = [{nombre:'itCosmetics'},{nombre:'Tarte'}, {nombre:'UrbanDecay'}, {nombre:'BeautyBlender'}, {nombre:'Mac'}];
    const lista = marcas.map(({nombre}) => (
        <div>
            <li><Link to= "/{nombre}"> {nombre}</Link></li>
        </div>
    ));
    return(
        <>
            <ul>{lista}</ul>
        </>
    )
};

export default Marcas;