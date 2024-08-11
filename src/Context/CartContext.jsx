import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    console.log(cart);

    const ItemAdded = (id) => {
        return cart.some(prod => prod.id === id)


    };


    let addItem = (Added) => {
        if (!ItemAdded(Added.id)) {
            setCart(last => [...last, Added])
        }
        else {
            console.error("just already added")
        }
    }

    const getTotalQuantity = () => {
        let num = 0;
        cart.forEach(prod => {
            num += prod.quantity
        })
        return num;
    }


    const TotalQuantity = getTotalQuantity()

    const obj = { cart, addItem, ItemAdded, TotalQuantity };

    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )


}