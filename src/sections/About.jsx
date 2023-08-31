import React from "react";
import { useAuthor } from "../AuthorContext";
import PercentageList from "../global-components/PercentageList";

import { format } from "date-fns";

export default function AboutSection() {
  const author = useAuthor();

  return (
    <section id="about-section" aria-labelledby="about_me">
      <div className="container">
        <h2 className="fragment-father" id="about_me">
          About Me
          <span className="fragment" id="about-fragment" />
        </h2>

        <div className="paragraphs-and-image">
          <div className="paragraphs">
            {author.aboutParagraphs.map((content, i) => {
              return (
                <p key={i} className="dashed-border-paragraph">
                  {content}
                </p>
              );
            })}
          </div>
          <img
            src={author.aboutImage.src}
            alt={author.aboutImage.alt}
            className="about-image"
          />
        </div>

        <section id="languages-section">
          <h3>Spoken Languages</h3>
          <div className="languages-list">
            <PercentageList items={author.spokenLanguages} />
          </div>
        </section>

        <section id="skills-and-technologies">
          <h3>Skills and technologies</h3>
          <ul className="list">
            {author.skillsAndTechnologies.map((s) => {
              return (
                <li key={s.name}>
                  <Skill skill={s} />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </section>
  );
}

function Skill({ skill }) {
  let initialDate = null;
  if (skill.initialDate) {
    initialDate = new Date(skill.initialDate);
  }

  return (
    <div className="skill">
      <div className="skill-name-container">
        <h4 className="skill-name">{skill.name}</h4>
        {skill.fontAwesomeIcon && (
          <i className={`${skill.fontAwesomeIcon} icon`} aria-hidden="true"></i>
        )}
      </div>
      {initialDate && (
        <p className="experience">
          Since{" "}
          <time dateTime={skill.initialDate}>
            {format(initialDate, "MMMM, yyyy")}
          </time>
        </p>
      )}
      <p className="proficiency">Proficiency: {skill.proficiency}</p>
    </div>
  );
}
