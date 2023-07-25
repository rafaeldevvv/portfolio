import React, {useState} from "react";
import { useAuthor } from "../AuthorContext.js";

export default function ProjectsSection() {
  const { projects } = useAuthor();

  return (
    <section id="projects">
      <h2 id="projects-heading" className="fragment-father decorated-heading">
        Projects
        <span className="fragment" id="projects-fragment" />
      </h2>
      <p>View my work</p>
      <ul id="projects-list">
        {projects
          .slice()
          .reverse() // this is because the greater the index the more recent the project is
          .map((p) => (
            <li key={p.name}>
              <Project project={p} />
            </li>
          ))}
      </ul>
    </section>
  );
}

export function Project({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`project ${isHovered ? "hover" : ""}`}
      type="button"
      aria-label="Open modal"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <img
        className="project-image"
        src={project.image.src}
        alt={project.image.alt}
      />
      <h3 className={`${isHovered ? 'project-name' : 'sr-only'}`}>{project.name}</h3>
      <i className="fa-regular fa-hand-pointer icon" aria-hidden="true"></i>
      <span className="sr-only">Open modal</span>
    </button>
  );
}