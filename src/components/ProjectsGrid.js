import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid({ projects }) {
  return (
    <div className="projectsGrid">
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  );
}

