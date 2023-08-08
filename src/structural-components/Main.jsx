import React from 'react';
import Intro from "../sections/Intro.jsx";
import Skills from '../sections/Skills.jsx';
import Projects from '../sections/Projects.jsx';
import Services from "../sections/Services.jsx"

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