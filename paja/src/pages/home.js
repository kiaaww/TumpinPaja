import React from "react"
import '../styles/home.css'
import map from '../assets/map-from-top.png'
import mainpicture from '../assets/mainPicture.png'

const Home = () => {
    return (
        <div className="home">
            <section className="description">
                <h2>Kuvailu</h2>
            </section>

            <section className="content">
                <div className="image-container">
                    <img src={mainpicture} alt="MainPicture" />
                    <div className="overlay">
                        <h2>Tähän tekstiä</h2>
                    </div>
                </div>
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
