import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { Container, Table } from "react-bootstrap";


export const Cart = () => {
    const { items, removeItem } = useContext(CartContext);

    const total = () =>
    items.reduce(
        (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.price, 0
    )

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
        </Container>
    )
}
