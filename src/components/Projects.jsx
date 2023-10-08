import React, { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { useAuthor } from "../AuthorContext.js";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  const { projects } = useAuthor();

  const projectsOrderedByDate = projects
    .slice()
    .sort(
      (a, b) =>
        -(
          new Date(a.completionDate).getTime() -
          new Date(b.completionDate).getTime()
        )
    );

  return (
    <section id="projects-section" aria-labelledby="projects">
      <div className="container">
        <SectionHeading content="Projects" id="projects" />
        <p className="dashed-border-paragraph">View my work</p>
        <ProjectList projects={projectsOrderedByDate} />
      </div>
    </section>
  );
}

export function ProjectList({ projects }) {
  const initialNumberOfProjects = 6;
  const [numberOfProjectsShown, setNumberOfProjectsShown] = useState(
    initialNumberOfProjects
  );
  const projectRefs = useRef(null);

  function getMap() {
    if (!projectRefs.current) {
      projectRefs.current = new Map();
    }

    return projectRefs.current;
  }

  function handleShowClick() {
    const scrollOptions = { block: "center", behavior: "smooth" };

    if (numberOfProjectsShown < projects.length) {
      const nextNumberOfProjectsShown = Math.min(
        numberOfProjectsShown + 3,
        projects.length
      );

      // update dom immediately
      flushSync(() => {
        setNumberOfProjectsShown(nextNumberOfProjectsShown);
      });

      // a ref has the last values regardless of the which render the handler is being run in
      const updatedMap = getMap();
      const projectNames = Array.from(updatedMap.keys());

      // get last project in the dom
      const lastProjectName = projectNames[nextNumberOfProjectsShown - 1];
      const lastProject = updatedMap.get(lastProjectName);

      // get the last image and then wait for it to load to scroll it into view
      const lastProjectImage = lastProject.querySelector(".project-image");

      lastProjectImage.onload = function () {
        lastProject.scrollIntoView(scrollOptions);
      };
    } else {
      flushSync(() => {
        setNumberOfProjectsShown(initialNumberOfProjects);
      });
      const map = getMap();
      const firstProjectName = Array.from(map.keys())[0];
      const firstProject = map.get(firstProjectName);

      firstProject.scrollIntoView(scrollOptions);
    }
  }

  const allProjectsAreShown = numberOfProjectsShown === projects.length;
  const buttonMessage = allProjectsAreShown
    ? `Show less projects`
    : "Show more projects";

  return (
    <div>
      <ul
        id="projects-list"
        aria-live="polite"
        role="region"
        aria-relevant="additions removals"
      >
        {projects.map((p, i) => {
          if (i < numberOfProjectsShown) {
            return (
              <li
                key={p.name}
                ref={(node) => {
                  const map = getMap();

                  if (node) map.set(p.name, node);
                  else map.delete(p.name);
                }}
              >
                <Project project={p} />
              </li>
            );
          }
        })}
      </ul>
      <div className="show-button-container">
        <button type="button" onClick={handleShowClick}>
          <span className="button-label">{buttonMessage}</span>
          <i
            className={`fa-solid fa-chevron-${
              allProjectsAreShown ? "up" : "down"
            } icon`}
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  );
}

export function Project({ project }) {
  return (
    <article className="project">
      <h3 className="project-name">{project.name}</h3>
      <img
        className="project-image"
        src={project.image.src}
        alt={project.image.alt}
        title={`${project.name} screenshot`}
      />
      <div className="technologies-used-wrapper">
        <p>Technologies used</p>
        <ul className="technologies-used">
          {project.technologiesUsed.map((t) => {
            return (
              <li key={t} className="technology">
                {t}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`project-links`}>
        {project.liveSite && (
          <a
            href={project.liveSite}
            title={`${project.name} project live site`}
            className="live-site-link"
            target="_blank"
          >
            Live Site
          </a>
        )}
        <a
          href={project.repository}
          title={`Code files, assets and details of ${project.name} project on GitHub`}
          className="repo-link"
          target="_blank"
        >
          Repo
        </a>
        {project.challenge && (
          <a
            href={project.challenge}
            title={`${project.name} challenge page`}
            className="challenge-link"
            target="_blank"
          >
            Challenge
          </a>
        )}
      </div>
    </article>
  );
}
