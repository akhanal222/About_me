// src/components/ProjectCard.jsx

import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="card-title">{project.title}</h3>
      <p className="card-description">{project.description}</p>

      <div className="tech-stack">
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>

      <div className="card-links">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-live"
          >
            Live Demo
          </a>
        )}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-github"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
