// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfileImage from './components/ProfileImage';
import Summary from './components/Summary';
import Education from './components/Education';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <ProfileImage />
        <Summary />
        <Education />
        <Internships />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default App;