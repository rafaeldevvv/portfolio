import React from "react";
import { useAuthor } from "../AuthorContext.js";

export default function SkillsSection() {
  const { skills } = useAuthor();

  return (
    <section id="skills">
      <h2 id="skills-heading" className="fragment-father decorated-heading">
        Skills
        <span className="fragment" id="skills-fragment" />
      </h2>
      <p>View my skills</p>
      <ul id="skills-list">
        {skills.map((s) => (
          <li key={s.name} className="skill-item">
            <Skill skill={s} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Skill({ skill }) {
  const author = useAuthor();

  const message = `Open modal with information about ${author.shortName}'s skills with ${skill.name}`;

  return (
    <button
      className={`skill-button ${skill.className}`}
      type="button"
      aria-label={message}
      title={message}
    >
      <i className={`${skill.fontAwesomeIcon} icon`} aria-hidden="true" />
      <span className="sr-only">{skill.name}</span>
    </button>
  );
}
