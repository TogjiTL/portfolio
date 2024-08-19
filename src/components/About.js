import React from "react";
import '../assets/styles/About.css';
import image from '../images/about.jpg'
import cv from '../CV_Togji_TAGBIA_LOUEVIE.pdf'

const About = () => {
    return (
        <div className="about">
            <div className="about-section">
                <div className="about-text">
                    <h2>À propos</h2>
                    <p>Fascinée par la science et son application pratique, c’est très tôt que j’ai décidé de m’orienter vers le domaine informatique. J'ai vite découvert que ce monde proposait une vaste quantité de branches tout aussi intéressantes les unes que les autres.</p>
                    <p>J’ai d'abord décidé de m’orienter vers une formation générale et de renommée à l’EPITA (Ecole Pour l’Informatique et les Techniques Avancées), où je suis restée un an. Par la suite, j’ai décidé d’entamer un voyage à la découverte des possibilités qui s’offraient à moi dans un domaine en perpétuelle évolution.</p>
                    <p>Aujourd'hui, j'ai décidé de faire de la Data mon domaine de prédilection. C'est dans ce but que je me forme personnellement aux outils et techniques de la Data Analyse avant de pouvoir approfondir mes connaissances au sein de l'IA School pour les deux prochaines années.</p>
                </div>
                <div className="about-image">
                    <img src={ image } alt="about-image"/>
                </div>
            </div>
            <div className="skills-title" id="skills">
                <h3>Compétences significtives</h3>
            </div>
            <div className="competences">
                <div className="skill-circle" style={{ '--level': 0.8, '--color': 'var(--blue-pastel' }}>
                    <span className="skill-name">SQL</span>
                </div>
                <div className="skill-circle" style={{ '--level': 0.7, '--color': 'var(--violet-pastel' }}>
                    <span className="skill-name">Python</span>
                </div>
                <div className="skill-circle" style={{ '--level': 0.8, '--color': 'var(--violet-dark' }}>
                    <span className="skill-name">Excel</span>
                </div>
                <div className="skill-circle" style={{ '--level': 0.5, '--color': 'var(--rose-pastel' }}>
                    <span className="skill-name">Power BI</span>
                </div>
                <div className="skill-circle" style={{ '--level': 0.7, '--color': 'var(--pastel-green'}}>
                    <span className="skill-name">Matplotlib / <br />Seaborn</span>
                </div>
            </div>

            < div className="timeline-container" id="experience">
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-box">
                            <div className="timeline-date">2021 - 2023</div>
                            <div className="timeline-content">
                                <h4>Linedata Services</h4>
                                <p>Missions</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-box">
                            <div className="timeline-date">2020 - 2021</div>
                            <div className="timeline-content">
                                <h4>Veolia Water Technologies</h4>
                                <p>Missions</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="extra-content">
                    <h3>Expérience</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    {/* <img src={ profil } alt="Example" style={{ width: '100%', borderRadius: '8px' }} /> */}
                </div>
            </div>

            <div className="skills-button">
                <a href= { cv } target="_blank" className="btn-cv" rel="noreferrer">En savoir plus</a>
            </div>
        </div>
    );
};

export default About;
