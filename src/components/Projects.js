import React from "react";
import { FaGithub, FaUnity, FaCode } from "react-icons/fa";
import "../assets/styles/Projects.css";

const Projects = () => {
    return (
        <div className="projects-section">
            <div className="section-title">
                <h2 id="projects">Projets</h2>
            </div>

            < div className="projects-content">

            <div className="project-timeline">
                <div className="project-level">
                    <h3 className="level-title">Terminale</h3>
                    <div className="project-card">
                        <FaCode className="project-icon" />
                        <h4>Premier site web</h4>
                        <p>Bibliographie d'un artiste.</p>
                    </div>
                    <div className="project-card">
                        <FaCode className="project-icon" />
                        <h4>Jeu du pendu</h4>
                        <p>Jeu du pendu en mode console.</p>
                    </div>
                </div>

                <div className="project-level">
                    <h3 className="level-title">EPITA</h3>
                    <div className="project-card">
                        <FaUnity className="project-icon" />
                        <h4>Jeu vidéo RPG</h4>
                        <p>Réalisation d'un jeu vidéo de survie en mode RPG avec Unity.</p>
                    </div>
                </div>

                <div className="project-level">
                    <h3 className="level-title">DUT 1</h3>
                    <div className="project-card">
                        <FaCode className="project-icon" />
                        <h4>Jeu Snake en C</h4>
                        <p>Réalisation du jeu <em>Snake</em> en C.</p>
                    </div>
                    <div className="project-card">
                        <FaCode className="project-icon" />
                        <h4>Portfolio test</h4>
                        <p>Apprentissage des bases du développement Web.</p>
                    </div>
                </div>

                <div className="project-level">
                    <h3 className="level-title">DUT 2</h3>
                    <div className="project-card">
                        <FaCode className="project-icon" />
                        <h4>Jeu vidéo de cuisine</h4>
                        <p>Réalisation d'un jeu vidéo en CSharp.</p>
                    </div>
                </div>

                <div className="project-level">
                    <h3 className="level-title">Licence</h3>
                    <div className="project-card">
                        <FaCode className="project-icon" />
                        <h4>Application périscolaire</h4>
                        <p>Application de gestion d'activités périscolaires en architecture MVC.</p>
                    </div>
                </div>

                <div className="project-level">
                    <h3 className="level-title">Master</h3>
                    <div className="project-card">
                        <FaCode className="project-icon" />
                        <h4>Pilulier intelligent</h4>
                        <p>Prototype de pilulier intelligent pour les personnes atteintes de pathologies.</p>
                    </div>
                </div>
            </div>

            <p className="future-projects">
                La réalisation de ce portfolio est un projet React. À l'avenir, j'ai pour ambition de développer une application de gestion de temps permettant à un persona cible de pouvoir organiser différents aspects de la vie. Plus de détails à venir !
            </p>

            <p className="github-invitation">
                Je vous invite à visiter mon lien <a href="https://www.github.com/TogjiTL">Github <FaGithub /></a> pour plus de détails.
            </p>
            </div>
        </div>
    );
};

export default Projects;
