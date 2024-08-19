import { CartWidget } from "./CartWidget";
import Logo from "../assets/logo-derive-sin-fondo.png";
import "../styles/navbar.css"

export const Navbar = () => {

    return (
        <nav className="navbar-container">
            <img src={Logo} alt="Logo-dérive" />
            <ul className="sections-container">
                <li>Productos</li>
                <li>Contacto</li>
                <li>Envios</li>
            </ul>
            <CartWidget />
        </nav>
    )
}
