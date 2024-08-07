import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import './App.css'; // Import the CSS file

function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Header /> {/* Fixed Header */}
        <div className="main-content">
        
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="education">
            <Education />
          </section>
        </div>
        <Footer /> {/* Fixed Footer */}
      </Router>
    </PortfolioProvider>
  );
}

export default App;
