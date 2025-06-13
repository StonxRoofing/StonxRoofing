import React from 'react';
import './Ourproject.css';
import p1 from '../../assets/projects/project1.png';
import p2 from '../../assets/projects/project2.png';
import p3 from '../../assets/projects/project3.jpg';
import p4 from '../../assets/projects/project4.jpg';

function Ourproject() {
  return (
    <div className="ourproject-container">
      <h1>Gallery</h1>
      <div className="project-grid">
        <div className="project-card large">
          <img src={p2} alt="Project 1" className="project-image" />
        </div>
        <div className="project-card tall">
          <img src={p3} alt="Project 2" className="project-image" />
        </div>
        <div className="project-card">
          <img src={p1} alt="Project 3" className="project-image" />
        </div>
        <div className="project-card">
          <img src={p4} alt="Project 4" className="project-image" />
        </div>
      </div>
    </div>
  );
}

export default Ourproject;
