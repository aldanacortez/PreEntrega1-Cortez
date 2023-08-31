import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import data from '../data/products.json';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const promise = new Promise((resolve,rejetc) => {
        setTimeout(() => resolve(data[0]), 2000);
    });

    promise.then(data => setProduct(data));
    }, []);

    if (!product) return <div>Loading...</div>;

    // console.log(products);

    return (
    <Container className="">
        <h1>DETALLE</h1>
        <ItemDetail product={product}/>
        </Container>
    );
};
