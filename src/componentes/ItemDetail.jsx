import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({ product }) => {
        const { addItem } = useContext(CartContext)
        const onAdd = count => addItem(product, count)

return (
<div className="col-lg-3 col-12 m-4 h-100 border justify-content-center">
        <h3 className="mx-2 text-center">{product.title}</h3>
        <img className="mx-2" style={{height:"150px"}} src={product.pictureUrl} alt=""/>
        <div className="mx-2 mb-1 text-center display-6">${product.price}</div>
        < ItemCount stock={product.stock} onAdd={onAdd} className="mb-4"/>
        </div>
)
}