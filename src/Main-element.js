import React from 'react';

export default function Main() {
   return (
      <main>
         <article className="container">
            <IntroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
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

function SkillItem(skill) {
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

function SkillsSection() {
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
            <li className="skill-item">
               <button
                  className="skill-button html"
                  type="button"
                  aria-label="Open modal with information about Rafael Maia's skills with HTML5"
                  title="Open modal with information about Rafael Maia's skills with HTML5"
               >
                  <i className="fa-brands icon fa-html5" aria-hidden="true" />
                  <span className="sr-only">HTML5</span>
               </button>
            </li>
            <li className="skill-item">
               <button
                  className="skill-button css"
                  type="button"
                  aria-label="Open modal with information about Rafael Maia's skills with CSS3"
                  title="Open modal with information about Rafael Maia's skills with CSS3"
               >
                  <i className="fa-brands icon fa-css3" aria-hidden="true" />
                  <span className="sr-only">CSS3</span>
               </button>
            </li>
            <li className="skill-item">
               <button
                  className="skill-button javascript"
                  type="button"
                  aria-label="Open modal with information about Rafael Maia's skills with JavaScript"
                  title="Open modal with information about Rafael Maia's skills with JavaScript"
               >
                  <i className="fa-brands icon fa-js" aria-hidden="true" />
                  <span className="sr-only">JavaScript</span>
               </button>
            </li>
            <li className="skill-item">
               <button
                  className="skill-button react"
                  type="button"
                  aria-label="Open modal with information about Rafael Maia's skills with React.js"
                  title="Open modal with information about Rafael Maia's skills with React.js"
               >
                  <i className="fa-brands icon fa-react" aria-hidden="true" />
                  <span className="sr-only">React.js</span>
               </button>
            </li>
            <li className="skill-item">
               <button
                  className="skill-button sass"
                  type="button"
                  aria-label="Open modal with information about Rafael Maia's skills with SASS"
                  title="Open modal with information about Rafael Maia's skills with SASS"
               >
                  <i className="fa-brands icon fa-sass" aria-hidden="true" />
                  <span className="sr-only">SASS/SCSS</span>
               </button>
            </li>
            <li className="skill-item">
               <button
                  className="skill-button github"
                  type="button"
                  aria-label="Open modal with information about Rafael Maia's skills with Git and GitHub"
                  title="Open modal with information about Rafael Maia's skills with Git and GitHub"
               >
                  <i className="fa-brands icon fa-github" aria-hidden="true" />
                  <span className="sr-only">Git/GitHub</span>
               </button>
            </li>
         </ul>
      </section>
   );
}

function ProjectsSection() {
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
