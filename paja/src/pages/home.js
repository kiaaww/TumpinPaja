import React from "react"
import '../styles/home.css'
import map from '../assets/map-from-top.png'

const Home = () => {
    return (
        <div className="home">
            <section className="description">
                <h2>Kuvailu</h2>
            </section>

            <section className="content">
                <p>Tähän kuvia/sisältöä</p>
            </section>

            <section className="map-section">
                <div className="contact-info">
                    <h3>Yhteystiedot</h3>
                    <p>Puhelin</p>
                    <p>Osoite</p>
                </div>
                <div className="map">
                    <img src={map} alt="Map" />
                </div>
            </section>
        </div>
    )
};

export default Home
