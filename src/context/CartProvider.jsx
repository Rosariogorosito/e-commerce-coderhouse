import { cartContext } from "./cartContext";
import { useState } from "react";

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => setCart([...cart, product])

    const getTotal = () => {
        const pricesOnly = cart.map(prod => prod.price*prod.quantity)

        const totalPrices = pricesOnly.reduce((acc, current) => acc + current, 0)

        return totalPrices
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, getTotal }}>
            {children}
        </cartContext.Provider>

    )
}

export default CartProvider