import './styles/itemDetailContainer.css';
import React, {useEffect, useState} from 'react';
import ItemDetail from '../itemDetail';
import { useParams } from 'react-router-dom';



const films = [
    { id: 1, image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xnaDdiRfZlJaTf6JRc4in40eaeI.jpg", title: "Saló, o los 120 días de Sodoma", year: 1975, directedBy: "Pier Paolo Pasolini" , category: "films"},
    { id: 2, image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vcyr1IZOHtPriQkm0NP6oMXDeLS.jpg", title: "Out 1: Noli me tangere", year: 1971, directedBy: "Jacques Rivette" , category: "films"},
    { id: 3, image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9s8uSm5K1W0vhGPHv2icM6SFib8.jpg", title: "The Texas Chain Saw Massacre", year: 1974, directedBy: "Tobe Hooper" , category: "films"},
    { id: 4, image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qzweZTBnVgEROyiSP4QPBoT7uBV.jpg", title: "Funny Games", year: 1997, directedBy: "Michael Haneke" , category: "films"},
    { id: 5, image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z5uIG81pXyHKg7cUFIu84Wjn4NS.jpg", title: "Pearl" , year: 2022, directedBy: "Ti West" , category: "films"},
    { id: 6, image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A7YPhQKdcr6XB1kCUdS4tHifYWd.jpg", title: "X", year: 2022, directedBy: "Ti West" , category: "films"},
    { id: 7, image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qdTiJhYH72UztsmFhF6Abk3GFQ0.jpg", title: "Police Story", year: 1985, directedBy: "Jackie Chan" , category: "flicks"},
    { id: 8, image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Abnm1Ws3JH0ReCfEhLMPwPcMcGO.jpg", title: "The Raid", year: 2011, directedBy: "Gareth Evans" , category: "flicks"},
    { id: 9, image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/olA39iaXISiKEkACdELgr0ZRvIF.jpg", title: "The Raid 2", year: 2014, directedBy: "Gareth Evans" , category: "flicks"},
    { id: 10, image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mbA77wY7fjh2TSQ3FxEuqpKOOA8.jpg", title: "Hard Boiled", year: 1992, directedBy: "John Woo" , category: "flicks"}
];


export const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    const { detalleId } = useParams();


    useEffect(() => { 
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 2000);
        });
        getData.then((result) => {
            setData(result.find((film) => film.id === parseInt(detalleId)));
        });
    }, [detalleId])
    


    return (

        <ItemDetail data={data}/>

    );
}

export default ItemDetailContainer;

