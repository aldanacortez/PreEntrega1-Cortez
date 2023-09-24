import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

// import data from '../data/products.json';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(() => {
    const db = getFirestore();
    const docRef= doc(db, "productos", id);
        getDoc(docRef)
        .then((resp) => {
        setProduct(
            {...resp.data(), id: resp.id}
        );
    })
    }, [id]);

    if (!product) return <div>Loading...</div>;

    // console.log(products);

    return (
    <Container className="">
        <h2 className='mt-4'>Detalle del Producto</h2>
        <ItemDetail product={product}/>
        </Container>
    );
};
