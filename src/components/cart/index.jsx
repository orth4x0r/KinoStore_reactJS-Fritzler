import './styles/cart.css';
import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../itemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Juan',
            phone: '123456789',
            email: 'bruh@bruh.com',
            address: 'Calle falsa 123'
        },
        items: cart.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: product.quantity
            })),
        date: new Date(),
        total: totalPrice()
    };

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)

    }


    if(cart.length === 0) { return (
        <p>
            <h1>No hay productos en el carrito</h1>
            <Link to='/'>Hacer Compras</Link>
        </p>
    );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <h2>Total: ${totalPrice()}</h2>
            <Link to="/form">
                <button>Terminar Compra</button>
            </Link>
        </>
    );
}

export default Cart;

