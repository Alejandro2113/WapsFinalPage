import { useState } from "react";


function ItemCount({ initialValue = 1, stock, onAdd }) {
    const [count, setCount] = useState(initialValue);


    const decrement = () => {
        if (count > 1) {
            setCount(count => count - 1)
        }
    }
    const increment = () => {
        if (count < stock) {
            setCount((count) => count + 1);
        }
    };

    return (
        <>
            <h4>Agregar: {count}</h4>
            <button onClick={decrement}>Decrementa</button>
            <button style={{ margin: "10px" }} onClick={() => { onAdd(count) }}>Agregar al Carrito</button>
            <button onClick={increment}>Incremento</button>
        </>
    );
}

export default ItemCount
