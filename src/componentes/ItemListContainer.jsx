import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import data from '../data/products.json';
import { ItemList } from './ItemList';


export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve,rejetc) => {
        setTimeout(() => resolve(data), 2000);
    });

    promise.then(data => setProducts(data));
    }, []);

    console.log(products);

    return (
    <Container className="">
        <h1>{props.greeting}</h1>
        <div style={{display:"flex", flexWrap:"wrap"}}> <ItemList products={ products } />
        </div>
        </Container>
    );
};
