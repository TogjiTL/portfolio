import React from "react";
import '../assets/styles/Experience.css';
import cv from '../CV_Togji_TAGBIA_LOUEVIE.pdf'

const experiences = [
    { year: "2021 - 2023", title: "Apprentie Analyste Support", company: "Linedata Services", description: "Maintenance du progiciel financier Linedata EKIP360 et revue de code.", skills: ["SQL", "PL/SQL", "Java", "XML", "Git"] },
    { year: "2020 - 2021", title: "Apprentie Script Developer", company: "Veolia Waters Technologies", description: "Automatisation d'un processus de gestion de documents, développement d'un hub d'outils pour les collaborateurs, gestion de projet.", skills: ["Java", "NodeJS", "AWS", "Git", "Google Suite"] }
];

const Experience = () => {
    return (
        <div className="experience">
            <div className="timeline-title">
                <h2 id="experience">Expérience</h2>
            </div>
            <div className="experience-tags">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-date">{exp.year}</div>
                        <div className="experience-content">
                            <h4 className="experience-title">{exp.title}</h4>
                            <h5 className="experience-company">{exp.company}</h5>
                            <p className="experience-description">{exp.description}</p>
                            <div className="skills-tags">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="skills-button">
                <a href={cv} target="_blank" className="btn-cv" rel="noreferrer">Voir le CV</a>
            </div>
        </div>
    );
};

export default Experience;
