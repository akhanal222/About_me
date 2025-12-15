// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import './App.css'; // Don't forget to import your styles!

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;