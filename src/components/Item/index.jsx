import './styles/item.css';

import React from 'react';

import { Link } from 'react-router-dom';

const Item = ({info}) => {
    return (
        <Link to={`/detail/${info.id}`} className='film'>
            <img src={info.image} alt={info.title} />
            <h3>{info.title}</h3>
            <p>{info.year}</p>
            <p>{info.directedBy}</p>
        </Link>
        
    );
}

export default Item;
