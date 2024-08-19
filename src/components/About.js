import React from "react";
import '../assets/styles/About.css';
import profil from '../images/profil_lkdn.jpg';
import cv from '../CV_Togji_TAGBIA_LOUEVIE.pdf'

const About = () => {
    return (
        <div className="about">
            <div className="about-section">
                <div className="about-text">
                    <h2>À propos</h2>
                    <p>Fascinée par la science et son application pratique, c’est très tôt que j’ai décidé de m’orienter en informatique. J'ai vite découvert que ce domaine proposait une vaste quantité de branches tout aussi intéressantes les unes que les autres.</p>
                    <p>J’ai d'abord décidé de m’orienter vers une formation générale et de renommée à l’EPITA (Ecole Pour l’Informatique et les Techniques Avancées), où je suis restée un an. Par la suite, j’ai décidé d’entamer un voyage à la découverte des possibilités qui s’offraient à moi dans un domaine en perpétuelle évolution.</p>
                    <p>Aujourd'hui, j'ai décidé de faire de la Data mon domaine de prédilection. C'est dans ce but que je me forme personnellement aux outils et techniques de la Data Analyse avant de pouvoir approfondir mes connaissances au sein de l'IA School pour les deux prochaines années.</p>
                </div>
                <div className="about-image">
                    <img src={ profil } alt="profil"/>
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

            <h3 id="experience">Expérience</h3>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-date">2024 - Présent</div>
                    <div className="timeline-content">
                        <h4>IA School</h4>
                        <p>Parcours Data Analyst</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-date">2022 - 2024</div>
                    <div className="timeline-content">
                        <h4>Université Paris-Saclay</h4>
                        <p>Spécialité Ingénierie Web</p>
                    </div>
                </div>
            </div>
            <div className="skills-button">
                <a href= { cv } target="_blank" className="btn-cv" rel="noreferrer">En savoir plus</a>
            </div>
        </div>
    );
};

export default About;
