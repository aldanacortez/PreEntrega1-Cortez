import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({product}) => (
    <Card key={product.id} style={{ width: '18rem' }} className="m-3">
        <Card.Body>
        <Card.Img style={{height:"200px"}} variant="top" className="mb-2" src={product.pictureUrl} />
            <Card.Title><p className="text-center mb-0">{product.title}</p></Card.Title>
            <Card.Text><p className="text-center mb-0 display-6">${product.price}</p></Card.Text>
            <Link to={`/item/${product.id}`}>
        <Button className="button-31">Agregar al Carrito</Button>
        </Link>
    </Card.Body>
    </Card>
)