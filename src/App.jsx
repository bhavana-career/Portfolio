import React from 'react';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechnicalExpertise from './components/TechnicalExpertise';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Hero />
      <FeaturedProjects />
    </div>
  );
}

export default App;
