import React from 'react';

export default function Main({skills, projects}) {
   return (
      <main>
         <article className="container">
            <IntroSection />
            <AboutSection />
            <SkillsSection skills={skills} />
            <ProjectsSection projects={projects} />
         </article>
      </main>
   );
}

function IntroSection() {
   return (
      <section id="intro">
         <h1 id="intro-heading" className="fragment-father">
            Hi, I am Rafael Maia
            <span className="fragment" id="intro-fragment" />
         </h1>
         <p>
            I am a freelance front-end developer with a highly qualified skill set
            specialized in creating responsive and accessible web pages. My
            portfolio shows you my skills, projects and how you can reach me!
         </p>
         <a href="#main-footer" className="btn primary-btn">
            Contact me now
         </a>
      </section>
   );
}

function AboutSection() {
   return (
      <section id="about">
         <h2 id="about-heading" className="fragment-father">
            About
            <span className="fragment" id="about-fragment" />
         </h2>
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

function SkillsSection({skills}) {
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

function ProjectsSection({projects}) {
   return (
      <section id="projects">
         <h2 id="projects-heading" className="fragment-father">
            Projects
            <span className="fragment" id="projects-fragment" />
         </h2>
         <p>A list of my projects: </p>
      </section>
   );
}
