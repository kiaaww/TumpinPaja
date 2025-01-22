import {React, useEffect} from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css'

const Footer = () => {

    return (
        <footer class="footer">
        <div class="footer-content">
            <p>Nettisivun nimi</p>
            <p>Yhteystiedot</p>
            <p>Lyhyt kuvailu</p>
        </div>
    </footer>
    )
};

export default Footer