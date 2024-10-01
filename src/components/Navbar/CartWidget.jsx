import "../../styles/cartWidget.css";
import { useCartContext } from "../../context/cartContext";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    const { cart } = useCartContext()
    return (
        <Link to='/cart'>
            <button className="button-widget">
                <Badge>{cart.length}</Badge>
                <div className="widget-container">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </button>
        </Link>
    )
}
