import React from "react";
import "../../styles/footer.css"

const Footer = () => {
    return (
        <footer className="footer-inicio">

            <div className="footer-container">

                <div className="address-container" id="section-contact">
                    <h3>Dirección</h3>
                    <p>San Pedro, Buenos Aires</p>
                </div>

                <div className="networks-container">
                    <h3>Seguime</h3>
                    <a href="https://www.instagram.com/derive.deco/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100079281565573">
                    <i className="fa-brands fa-square-facebook"></i>
                    </a>
                </div>

                <div className="contact-container">
                    <h3>Contáctame</h3>
                    <a href="mailto:rosariogorosito428@gmail.com"><i className="fa-regular fa-envelope"></i></a>
                    <a href="https://wa.me/543329548728"><i className="fa-brands fa-whatsapp"></i></a>
                </div>

                <div className="copy-container">
                    <small>Copyrigth © <b>Dérive deco</b> - 2024 - Todos los derechos reservados</small>
                </div>

            </div>

        </footer>
    )
}

export default Footer