// src/components/Projects.jsx

import React from 'react';
import ProjectCard from './ProjectCard';
import { projectData } from '../data/projects'; 

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <h2 className="section-header">Featured Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;