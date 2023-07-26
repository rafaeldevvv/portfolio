import React from 'react';
import Intro from "../main-sections/Intro.jsx";
import Skills from '../main-sections/Skills.jsx';
import Projects from '../main-sections/Projects.jsx';
import Services from "../main-sections/Services.jsx"

export default function Main() {
   return (
      <main>
         <article className="container">
            <Intro />
            <Skills />
            <Projects />
            <Services />
         </article>
      </main>
   );
}