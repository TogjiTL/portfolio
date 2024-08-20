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

            <div className="timeline-title">
                <h2 id="experience">Expérience</h2>
            </div>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-box">
                        <div className="timeline-date">2021 - 2023</div>
                        <div className="timeline-content">
                            <h4 className="timeline-title">Apprentie Analyste Support</h4>
                            <h5 className="timeline-company">Linedata Services</h5>
                            <p className="timeline-description">Maintenance du progiciel financier Linedata EKIP360 et revue de code.</p>
                            <div className="skills-tags">
                                <span className="skill-tag">SQL</span>
                                <span className="skill-tag">PL/SQL</span>
                                <span className="skill-tag">Java</span>
                                <span className="skill-tag">XML</span>
                                <span className="skill-tag">Git</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-box">
                        <div className="timeline-date">2020 - 2021</div>
                        <div className="timeline-content">
                            <h4 className="timeline-title">Script Developer</h4>
                            <h5 className="timeline-company">Veolia Waters Technologies</h5>
                            <p className="timeline-description">
                            <ul>
                                <li>Automatisation d'un processus de gestion de documents ;</li>
                                <li>Développement d'un hub d'outils pour les collaborateurs ;</li>
                                <li>Gestion de projet :
                                    <ul>
                                        <li>Reccueil des besoins</li>
                                        <li>Rédaction des spécifications fonctionnelles et techniques</li>
                                        <li>Planification des tâches et gestion des priorités</li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="skills-tags">
                            <span className="skill-tag">Java</span>
                            <span className="skill-tag">NodeJS</span>
                            <span className="skill-tag">AWS</span>
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">Google Suite</span>
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills-button">
                <a href= { cv } target="_blank" className="btn-cv" rel="noreferrer">Voir le CV</a>
            </div>
        </div>
    );
};

export default About;
