import React from "react";
import { useAuthor } from "../AuthorContext.js";

export default function ProjectsSection() {
  const { projects } = useAuthor();

  return (
    <section id="projects">
      <h2 id="projects-heading" className="fragment-father">
        Projects
        <span className="fragment" id="projects-fragment" />
      </h2>
      <p>View my work</p>
      <ul id="projects-list">
        {projects.map((p) => (
          <li key={p.name}>
            <Project project={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Project({ project }) {
  return (
    <article>
      <div className="image-container">
        <button type="button" aria-label="Open modal">
          <img src={project.image.src} alt={project.image.alt} />
          <span className="hover-text">Open modal</span>
        </button>
      </div>
      <h3 className="project-title">{project.name}</h3>
      <p className="project-description">{project.description}</p>
    </article>
  );
}
