import { useCartContext } from "../context/cartContext";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";
import { useState } from "react";
import "../styles/checkout.css";
import BackButton from "./BackButton";

function Checkout() {
    const { cart, getTotal, clearCart } = useCartContext();
    const [orderId, setOrderId] = useState(null);
    const [success, setSuccess] = useState(false);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;

        const order = {
            buyer: { name, phone, email },
            items: cart,
            date: serverTimestamp(),
            total: getTotal(),
        };

        const orderId = await createOrder(order);
        setOrderId(orderId);
        setSuccess(true);
        clearCart();
    };

    if (success) {
        return (
            <div className="success-message-checkout">
                <h2>¡Compra Exitosa!</h2>
                <p>Nos contactaremos por WhatsApp para coordinar el pago.</p>
                <p>Tu número de compra es: <strong>{orderId}</strong></p>
            </div>
        );
    }

    return (
        <>
        <BackButton/>
        <div className="checkout-container">
            <div className="summary">
                <h3>Resumen de compra:</h3>
                {cart.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                ) : (
                    cart.map(item => (
                        <p key={item.id}>{item.name} x {item.quantity}</p>
                    ))
                )}
                <p className="total">Total: {formatCurrency(getTotal())}</p>
            </div>

            <form className="form-container" onSubmit={handleSubmit}>
                <h2>Formulario de Contacto</h2>
                <div className="form-group-checkout">
                    <label id="label-checkout">Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        required
                        id="input-checkout"
                    />
                </div>
                <div className="form-group-checkout">
                    <label id="label-checkout">Teléfono:</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        id="input-checkout"
                    />
                </div>
                <div className="form-group-checkout">
                    <label id="label-checkout">Email:</label>
                    <input
                        type="email"
                        name="email"
                        required
                        id="input-checkout"
                    />
                </div>
                <button type="submit" className="submit-button-checkout">Enviar</button>
            </form>
        </div>
        </>
        
    );
}

export default Checkout;
