import React from "react";

export default function SkillsSection({skills}) {
   return (
      <section id="skills">
         <h2 id="skills-heading" className="fragment-father">
            Skills
            <span className="fragment" id="skills-fragment" />
         </h2>
         <p>
            Click on one of the boxes to see more information about its
            correspondent skill:
         </p>
         <ul id="skills-list">
            {skills.map(s => <SkillItem skill={s} key={s.name} />)}
         </ul>
      </section>
   );
}

function SkillItem({skill}) {
   const message = `Open modal with information about Rafael Maia's skills with ${skill.name}`;

   return (
      <li className="skill-item">
         <button
            className={`skill-button ${skill.className}`}
            type="button"
            aria-label={message}
            title={message}
         >
            <i className={`${skill.icon} icon`} aria-hidden="true" />
            <span className="sr-only">{skill.name}</span>
         </button>
      </li>
   );
}
