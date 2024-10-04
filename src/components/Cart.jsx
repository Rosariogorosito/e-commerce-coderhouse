import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import "../styles/cartContainer.css";
import BackButton from "./BackButton";

function Cart() {
    const { cart, getTotal, removeFromCart, emptyCart } = useCartContext();

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };

    return (
        <>
            <BackButton />
            <div className="cart-container">
                {cart.length === 0 ? (
                    <p>Tu carrito está vacío. <Link to="/">Volver a la tienda</Link></p>
                ) : (
                    <>
                        <h2>Tu Carrito</h2>
                        <ul>
                            {cart.map(prod => (
                                <li key={prod.id} className="cart-item">
                                    <span>{prod.name} (x{prod.quantity})</span>
                                    <span>{formatCurrency(prod.price * prod.quantity)}</span>
                                    <button className="checkout-button-cart" onClick={() => removeFromCart(prod.id)}>Eliminar</button>
                                </li>
                            ))}
                        </ul>
                        <p className="total">Total: {formatCurrency(getTotal())}</p>
                        <button onClick={emptyCart} className="checkout-button-cart">Vaciar Carrito</button>
                        <Link to='/checkout' className="checkout-button">Finalizar compra</Link>
                    </>
                )}
            </div>
        </>
    );
}

export default Cart;
