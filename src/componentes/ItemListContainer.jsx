import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {  
    getDocs, 
    collection,
    query,
    where
    } from 'firebase/firestore';

// import data from '../data/products.json';
import { ItemList } from './ItemList';
import { db } from '../index'


export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const { id } = useParams();

    console.log(id)

    useEffect(() => {

        const productosRef = collection(db, "productos");
        
        getDocs(productosRef)
        .then((resp) => {

            setProducts(
                resp.docs.map((doc) => {
                    return {...doc.data(),id: doc.id }
                })
            )
        })
    }, [id])  
    
    return (
    <Container className="">
        <h1 className='mt-4'>{props.greeting}</h1>
        <div style={{display:"flex", flexWrap:"wrap"}}> <ItemList products={ products } />
        </div>
        </Container>
    );
};
