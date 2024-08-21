import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/votreprofil" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="mailto:votreemail@example.com">
                        <i className="fas fa-envelope"></i> Email
                    </a>
                </div>
                <p className="footer-text">
                    &copy; 2024 Togji TAGBIA-LOUEVIE - Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
