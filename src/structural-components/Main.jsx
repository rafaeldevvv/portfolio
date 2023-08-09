import React from 'react';
import Intro from "../sections/Intro.jsx";
import About from "../sections/About.jsx";
import Projects from '../sections/Projects.jsx';
import Services from "../sections/Services.jsx";
import Contact from "../sections/Contact.jsx";

export default function Main() {
   return (
      <main>
         <article className="container">
            <Intro />
            <About />
            <Projects />
            <Services />
            <Contact />
         </article>
      </main>
   );
}