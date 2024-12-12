import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Remote Sensing Image Change Detection</h3>
        <p>Amazon Rainforest Deforestation Detection (Traditional ML Models): Applied Random Forest and other models for detecting deforestation.</p>
        <p>Urban Expansion Detection (Transformer Models): Used transformer models to track urban growth.</p>
      </div>
      <div className="project-item">
        <h3>ML/DL Projects</h3>
        <p>Heart Disease Classification: Predicting heart disease using a Random Forest classifier.</p>
        <p>Bulldozer Price Prediction: Price prediction using Random Forest Regressor.</p>
        <p>Dog Breed Identification: Deep learning model for dog breed classification.</p>
      </div>
    </section>
  );
}

export default Projects;
