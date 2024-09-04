import React from "react";
import '../assets/styles/Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import image from '../images/contact.jpg';

const Contact = () => {
    return (
        <div className="contact-section">
            <h2>Contactez-moi !</h2>
            <div className="contact-content">
                <div className="contact-form-container">
                    <form className="contact-form" action="https://formspree.io/f/xjkbzwlo" method="post">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Nom</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
                <div className="contact-image-wrapper">
                    <img src={ image } alt="contact-image" className="contact-image"/>
                </div>
            </div>
        </div>
    );
};

export default Contact;
