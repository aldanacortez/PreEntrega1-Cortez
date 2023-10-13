import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../contexts/CartContext';
import cart from "../assets/carrito.png";

export const CartWidget = () => {
    const { totalWidget } = useContext(CartContext)

    return (
<Link to='/cart'>
<img src={cart} alt="Cart" /> <span>{totalWidget}</span>
</Link>
    )
    };