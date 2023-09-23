import { useState } from "react";

// const stock = 5;

export const ItemCount = ({onAdd, stock}) => {
    const [count, setCount] = useState(1);
    
    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    const handleIncreaseCount = () => {
        if (stock > count) {
            setCount((prev) => prev + 1);
        }
    };

    // const onAdd = () => {
    //     alert(count);
    // };


    return (
        <div className="itemCount container text-center">
            <span onClick={handleDecreaseCount}>-</span>
            <span>{count}</span>
            <span onClick={handleIncreaseCount}>+</span>
            <button onClick={() => onAdd(count)} className="button-31 mt-2 mb-3">Agregar al carrito</button>
        </div>
    )
}