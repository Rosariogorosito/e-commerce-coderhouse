import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-derive-sin-fondo.png";
import "../styles/navbar.css"

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const scrollToElement = (id) => {
        if (location.pathname !== "/") {
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    if (menuActive) setMenuActive(false);
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 500);
            navigate(-1);
        } else {
            const element = document.getElementById(id);
            if (element) {
                if (menuActive) setMenuActive(false);
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    useEffect(() => {
        const handleScroll = (event) => {
            if (menuActive) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
        };

        if (menuActive) {
            document.body.classList.add("menu-active");
            document.addEventListener("touchmove", handleScroll, {
                passive: false,
            });
            document.addEventListener("wheel", handleScroll, { passive: false });
        } else {
            document.body.classList.remove("menu-active");
            document.removeEventListener("touchmove", handleScroll);
            document.removeEventListener("wheel", handleScroll);
        }

        return () => {
            document.removeEventListener("touchmove", handleScroll);
            document.removeEventListener("wheel", handleScroll);
        };
    }, [menuActive]);

    return (
        <header id="header">
            <nav id="navbar">
                <div className="navbar-container">
                    <div className="logo" onClick={() => scrollToElement("navbar")}>
                        <img src={Logo} alt="Logo-dérive" />
                    </div>
                    <ul className={`navbar-links ${menuActive ? "active" : ""}`}>
                        {/* <li>
                            <Link onClick={() => scrollToElement("header")}>Inicio</Link>
                        </li> */}

                        <li>
                            <Link to="/category/all">
                                Todos los productos
                            </Link>
                        </li>

                        <li>
                            <Link to="/category/mates">
                                Mates
                            </Link>
                        </li>

                        <li>
                            <Link to="/category/tablas">
                                Tablas
                            </Link>
                        </li>

                        <li>
                            <Link to="/category/sets">
                                Sets
                            </Link>
                        </li>

                        <li>
                            <Link onClick={() => scrollToElement("seccion-contacto")}>
                                Contacto
                            </Link>
                        </li>

                    </ul>
                    <div className="navbar-toggle" onClick={toggleMenu}>
                        <span className={`bar ${menuActive ? "active" : ""}`}></span>
                        <span className={`bar ${menuActive ? "active" : ""}`}></span>
                        <span className={`bar ${menuActive ? "active" : ""}`}></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
