import React from "react";
import Intro from "./Intro.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Availability from "./Availability.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";

export default function Main() {
  return (
    <main id="main-content">
      <article>
        <Intro />
        <About />
        <Projects />
        <Availability />
        <Services />
        <Contact />
      </article>
    </main>
  );
}

