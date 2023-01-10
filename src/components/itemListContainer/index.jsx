
import React, {useState, useEffect} from "react";
import ItemCount from "../itemCount";
import ItemList from "../itemList";
import Title from "../title";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
export const ItemListContainer = (props) => {

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId));
            getDocs(queryFilter)
            .then(res => {
                const data = res.docs.map(product => ({id: product.id, ...product.data()}));
                setData(data);
            })

        } else {
            getDocs(queryCollection)
            .then(res => {
                const data = res.docs.map(product => ({id: product.id, ...product.data()}));
                setData(data);
            })

        }

    }, [categoriaId])

    /*    
    const onAdd = (quantity) => {
    
        console.log(`Compraste ${quantity} productos`);

    }
    */
    return (
        <>  
            <Title greeting={props.texto} />
            {/*    
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            */}
            <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;
 