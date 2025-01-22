import {React, useEffect} from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import logo from '../assets/webLogo.png';

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="webLogo" />
            </div>
            <ul className="nav-links">
                <li><Link to="/">Koti</Link></li>
                <li><Link to="/galleria">Galleria</Link></li>
            </ul>
            <button class="contact-button">Puhelin</button>
        </nav>
    )
};

export default Navbar