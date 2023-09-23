import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({ product }) => {
        const { addItem } = useContext(CartContext)
        const onAdd = count => addItem(product, count)

return (
<div className="col-2 h-100 border justify-content-center">
        <h1 className="mx-2">{product.title}</h1>
        <img class="mx-2" style={{height:"150px", width:"150px"}} src={product.pictureUrl} alt=""/>
        <div className="mx-2">{product.stock}</div>
        < ItemCount stock={product.stock} onAdd={onAdd}/>
        </div>
)
}