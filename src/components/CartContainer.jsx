import { useCartContext } from "../context/cartContext"
import { Link } from "react-router-dom"

function CartContainer () { 
    const {cart, getTotal} = useCartContext()

    return (
        <div>
            <p>Total: {getTotal()}</p>
            {cart.map(prod => <p key={prod.id}>{prod.name}</p>)}
            <Link to='/checkout'>Finalizar compra</Link>
        </div>
    )
} 

export default CartContainer