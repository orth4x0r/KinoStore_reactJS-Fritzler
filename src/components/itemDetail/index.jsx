import './styles/itemDetail.css';

import React from 'react';

export const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img className='detail__image' src={data.image} alt={data.title}/>
                <div className="content">
                    <h1>{data.title}</h1>
                    <h2>{data.year}</h2>
                    <h3>{data.directedBy}</h3>
                </div>
            </div>
        </div>
        
    );
}

export default ItemDetail;

