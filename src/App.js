import React, { useEffect } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience'
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const header = document.querySelector('.App-header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    const handleScroll = () => {
      if(window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    const toggleMenu = () => {
      navLinks.classList.toggle('active');
    };

    const closeMenu = () => {
      navLinks.classList.remove('active');
    };

    window.addEventListener('scroll', handleScroll);
    hamburger.addEventListener('click', toggleMenu);

    navItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      hamburger.removeEventListener('click', toggleMenu);
      navItems.forEach(item => {
        item.removeEventListener('click', closeMenu);
      });
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="titre">
          <a href="#home">Portfolio</a>
        </div>
        <nav>
          <ul class="nav-links">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#experience">Expérience</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div class="hamburger">
            <i className="fas fa-bars"></i> {}
          </div>
        </nav>
      </header>
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
