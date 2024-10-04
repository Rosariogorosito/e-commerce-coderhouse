import { cartContext } from "./cartContext";
import { useState } from "react";

function CartProvider ({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += product.quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, product]);
        }
    };

    const getTotal = () => {
        return cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    const emptyCart = () => {
        setCart([]);
    };

    return (
        <cartContext.Provider value={{ cart, addToCart, getTotal, removeFromCart, emptyCart }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;
