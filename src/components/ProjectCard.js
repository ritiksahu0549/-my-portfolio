import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <article className="projectCard" data-sr>
      <div className="projectTop">
        <div className="projectIcon" aria-hidden="true">{project.emoji}</div>
        <div className="projectMeta">
          <h3 className="projectTitle">{project.title}</h3>
          <p className="projectDesc">{project.description}</p>
        </div>
      </div>

      <div className="projectTags" aria-label="Tech tags">
        {project.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <div className="projectLinks">
        {project.demoUrl && project.demoUrl !== '#' ? (
          <a
            className="linkBtn"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(139, 92, 246, 0.15))',
              borderColor: 'var(--primary2)',
              color: 'var(--text)',
            }}
          >
            Live Demo ↗
          </a>
        ) : (
          <span
            className="linkBtn"
            style={{ opacity: 0.6, cursor: 'default', background: 'var(--card)' }}
          >
            In Progress
          </span>
        )}
        <a
          className="linkBtn linkBtnSecondary"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <svg
            viewBox="0 0 24 24"
            style={{ width: 14, height: 14, fill: 'currentColor' }}
            aria-hidden="true"
          >
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
          </svg>
          GitHub
        </a>
      </div>
    </article>
  );
}

