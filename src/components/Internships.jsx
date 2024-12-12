import React from 'react';
import './Internships.css';

function Internships() {
  return (
    <section className="internships">
      <h2>Internships</h2>
      <div className="internship-item">
        <h3>Machine Vision and Intelligence System Lab, SEECS</h3>
        <p>June 2024 - Aug 2024</p>
        <p>Conducted a project on remote sensing image change detection using traditional machine learning and transformer-based models.</p>
      </div>
      <div className="internship-item">
        <h3>Network Simulation Research</h3>
        <p>Feb 2024 - Present</p>
        <p>Research in NS2 and SUMO to simulate traffic scenarios and implement UAV-based solutions for optimizing communication and network efficiency.</p>
      </div>
    </section>
  );
}

export default Internships;
