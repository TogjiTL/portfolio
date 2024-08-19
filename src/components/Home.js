import React, { useEffect } from "react";
import Typed from 'typed.js';
import '../assets/styles/Home.css';
const Home = () => {
    useEffect(() => {
        const options = {
            strings: [
                "Apprendre",
                "Analyser",
                "Créer"
            ],
            typeSpeed: 20,
            backSpeed: 20,
            loop: true,
            backDelay: 1500,
            showCursor: false
        };

        const typed = new Typed('.typed-text', options);

        return () => {
            typed.destroy();
        };
    }, []);
    return(
        <div className="hero-section">
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>Togji TAGBIA-LOUEVIE</h1>
                <p className="typed-text"></p><br/><br /><br />
                <a href="#projects" className="cta-button">Voir mes projets</a>
            </div>
        </div>
    );
};

export default Home;