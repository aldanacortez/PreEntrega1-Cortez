import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { Container, Table } from "react-bootstrap";
// import { collection, getFirestore, addDoc } from "firebase/firestore";
// import { Form } from "react-router-dom";
// import { useState } from "react";


export const Cart = () => {
    // const [ formValues, setFormValues] = useState({
    //     name: "",
    //     phone: "",
    //     email: "",
    // })

    const { items, removeItem } = useContext(CartContext);

    const total = () =>
    items.reduce(
        (acumulador, valorActual) =>
        acumulador + (valorActual.quantity * valorActual.price), 0
    )

    // const handleChange = ev => {
    //     setFormValues(prev => ({
    //         ...prev,
    //         [ev.target.name]: ev.target.value,
    //     }))
    // }

    // const sendOrder = () => {
    //     const order = {
    //         buyer: formValues,
    //         items,
    //         total: total(),
    //     }

    //     const db = getFirestore()
    //     const orderCollection = collection(db, "orders")

    //     addDoc(orderCollection, order).then(({id}) => {
    //         if (id) {
    //             setFormValues({
    //                 name: "",
    //                 phone: "",
    //                 email: "",
    //             })
    //             // clear()
    //             alert("Su orden: " + id + "ha sido completada")
    //         }
    //     })
    // }

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
                {/* <h2>Ingresar datos</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                        onChange={handleChange}
                        value={formValues.name}
                        type="text"
                        name="name"
                        required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        onChange={handleChange}
                        value={formValues.email}
                        type="email"
                        name="email"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                        onChange={handleChange}
                        value={formValues.phone}
                        type="text"
                        name="phone"
                        />
                    </Form.Group>
                </Form>
                <button onClick={sendOrder}>Comprar</button> */}
        </Container>
    )
}
