import './styles/itemDetail.css';

import React, {useState} from 'react';
import ItemCount from "../itemCount";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
export const ItemDetail = ({data}) => {

    const[gotoCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();
    const onAdd = (quantity) => {
    
        setGoToCart(true);
        addProduct(data, quantity);
    }


    return (
        <div className="container">
            <div className="detail">
                <img className='detail__image' src={data.image} alt={data.title}/>
                <div className="content">
                    <h1>{data.title}</h1>
                    <h2>{data.year}</h2>
                    <h3>{data.directedBy}</h3>
                    {
                        gotoCart
                        ? <Link to='/cart'> Terminar compra </Link>
                        : <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
        
    );
}

export default ItemDetail;

