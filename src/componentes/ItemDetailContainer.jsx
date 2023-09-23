import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import data from '../data/products.json';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((resolve,rejetc) => {
        setTimeout(() => {
            const productById = data.find((product) => product.id === id);
            resolve(productById); },
                2000);
    });

    promise.then(data => setProduct(data));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    // console.log(products);

    return (
    <Container className="">
        <h1>DETALLE</h1>
        <ItemDetail product={product}/>
        </Container>
    );
};
