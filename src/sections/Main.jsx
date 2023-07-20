import React from 'react';
import Intro from "./main-sections/Intro.jsx";
import About from './main-sections/About.jsx';
import Skills from './main-sections/Skills.jsx';
import Projects from './main-sections/Projects.jsx';
import Services from "./main-sections/Services.jsx"

export default function Main({ author }) {
   return (
      <main>
         <article className="container">
            <Intro author={author} />
            <About />
            <Skills skills={author.skills} />
            <Projects projects={author.projects} />
            <Services services={author.services} />
         </article>
      </main>
   );
}