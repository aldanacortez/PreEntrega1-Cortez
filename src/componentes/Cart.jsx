import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { Container, Table } from "react-bootstrap";
import { collection, getFirestore, addDoc } from "firebase/firestore";
// import { Form } from "react-router-dom";
// import { useState } from "react";

export const Cart = () => {
    const [ formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const { items, removeItem } = useContext(CartContext);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');

    const total = () =>
    items.reduce(
        (acumulador, valorActual) =>
        acumulador + (valorActual.quantity * valorActual.price), 0
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('enviado', {name, email, phone})
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const sendOrder = () => {
        const order = {
            buyer: formValues,
            items,
            total: total(),
        }

        const db = getFirestore()
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order).then(({id}) => {
            if (id) {
                setFormValues({
                    name: "",
                    phone: "",
                    email: "",
                })
                // clear()
                alert("sr/a " + name + " su orden con ID: " + id + " ha sido completada")
            }
        })
    }

    return (
        <Container>
            <Table className="m-5">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <button className="bg-dark text-white" onClick={() => removeItem(item.id)}>x</button>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>${total()}</td>
                        <td></td>
                    </tr>
                </tfoot>
                </Table>

                <form className="container" onSubmit={handleSubmit}>
                <input className="mx-5"
                type="text" 
                placeholder="ingresa tu nombre"
                value={name}
                onChange={handleName}
                required></input>

                <input className="mx-5"
                type="email"
                placeholder="ingresa tu email"
                value={email}
                onChange={handleEmail}
                required></input>

                <input className="mx-5"
                type="text"
                placeholder="ingresa tu celular"
                value={phone}
                onChange={handlePhone}
                required></input>
                
                <button onClick={sendOrder} className="m-5 p-2">Finalizar compra</button> 
                </form>
        </Container>
    )
}