import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/togji-tagbia-louevie-913608167/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/TogjiTL" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:tagbial@hotmail.fr">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <div className="footer-separator"></div>
                <p className="footer-text">
                    &copy; 2024 Togji TAGBIA-LOUEVIE - Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
