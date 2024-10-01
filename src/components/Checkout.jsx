import { useCartContext } from "../context/cartContext"
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";

function Checkout() {
    const { cart, getTotal } = useCartContext()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)

        const name = e.target.name.value
        const phone = e.target.phone.value
        const email = e.target.email.value

        const order = {
            buyer: { name, phone, email },
            item: cart,
            date: serverTimestamp(),
            total: getTotal(),
        }

        createOrder(order)
    };

    return (
        <div>
            <div>
                <h3>Resumen de compra:</h3>
                {cart.map(item => <p key={item.id}>{item.name} x {item.quantity}</p>)}
            </div>


            <form className="form-container" onSubmit={handleSubmit}>
                <h2>Formulario de Contacto</h2>
                <div className="form-group" controlId="name">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        required
                    />
                </div>
                <div className="form-group" controlId="phone">
                    <label>Teléfono:</label>
                    <input
                        type="number"
                        required
                    />
                </div>
                <div className="form-group" controlId="email">
                    <label>Email:</label>
                    <input
                        type="email"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>

        </div>
    )
}

export default Checkout