import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

    import { ItemList } from "./ItemList";
    import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
    } from "firebase/firestore";

    export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    // const [loading] = useState(true);

    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        const db = getFirestore();

        const refCollection = id
        ? query(collection(db, "productos"), where("category", "==", id))
        : collection(db, "productos");

        getDocs(refCollection).then(snapshot => {
        if (snapshot.size === 0) setProducts([]);
        else {
            setProducts(
            snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
            )
        }
        })
    }, [id]);

    //   if (loading) return <div>Loading...</div>;

    return (
        <Container>
        <h1>{props.greeting}</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <ItemList products={products} />
        </div>
        </Container>
    );
    };
