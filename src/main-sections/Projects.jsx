import React, { useState, useEffect, useRef } from "react";
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
      <ProjectList projects={projects} />
    </section>
  );
}

export function ProjectList({ projects }) {
  // const [numberOfProjectsShown, setNumberOfProjectsShown] = useState(4);
  const [hoveredProjectName, setHoveredProjectName] = useState(null);
  const projectRefs = useRef(null);

  function getMap() {
    if (!projectRefs.current) {
      projectRefs.current = new Map();
    }

    return projectRefs.current;
  }

  useEffect(() => {
    if (matchMedia("(pointer:fine)").matches) return;

    function handleScroll() {
      const map = getMap();
      const names = Array.from(map.keys());

      const nameOfLastProjectInMiddle = names.findLast((n) => {
        const node = map.get(n);
        const { top } = node.getBoundingClientRect();

        return top < innerHeight / 2 && top > 0 && top < innerHeight;
      });

      if (nameOfLastProjectInMiddle) {
        setHoveredProjectName(nameOfLastProjectInMiddle);
      } else {
        setHoveredProjectName(null);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul id="projects-list">
      {projects
        .slice()
        .reverse() // this is because the greater the index the more recent the project is
        .map((p, i) => (
          <li
            key={p.name}
            onPointerEnter={() => {
              if (matchMedia("(pointer:fine)").matches)
                setHoveredProjectName(p.name);
            }}
            onPointerLeave={() => {
              if (matchMedia("(pointer:fine)").matches)
                setHoveredProjectName(null);
            }}
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(p.name, node);
              } else {
                map.delete(p.name);
              }
            }}
          >
            <Project project={p} isHovered={p.name === hoveredProjectName} />
          </li>
        ))}
    </ul>
  );
}

export function Project({ project, isHovered }) {
  return (
    <div className={`project ${isHovered ? "hover" : ""}`}>
      <h3 className={`${isHovered ? "project-name" : "sr-only"}`}>
        {project.name}
      </h3>
      <button className="project-button" type="button" aria-label="Open modal">
        <img
          className="project-image"
          src={project.image.src}
          alt={project.image.alt}
        />
        <i className="fa-regular fa-hand-pointer icon" aria-hidden="true"></i>
        <span className="sr-only">Open modal</span>
      </button>
    </div>
  );
}
