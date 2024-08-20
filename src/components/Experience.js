import React from "react";
import '../assets/styles/Experience.css';
import cv from '../CV_Togji_TAGBIA_LOUEVIE.pdf'

const Experience = () => {
    return (
        <div className="experience">
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

export default Experience;