import './styles/itemDetailContainer.css';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import ItemDetail from '../itemDetail';
import { useParams } from 'react-router-dom';



export const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

    const { detalleId } = useParams();


    useEffect(() => { 
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', detalleId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data()}));
        

    }, []);


    /* what could be the reason that itemDetailContainer isnt rendering */


    
    


    return (

        <ItemDetail data={data}/>

    );
}

export default ItemDetailContainer;

