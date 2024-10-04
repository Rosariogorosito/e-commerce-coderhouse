import "../../styles/cartWidget.css";
import { useCartContext } from "../../context/cartContext";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    const { cart } = useCartContext();

    const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    return (
        <Link to='/cart'>
            <button className="button-widget">
                <Badge>{totalItems}</Badge>
                <div className="widget-container">
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </button>
        </Link>
    );
};
