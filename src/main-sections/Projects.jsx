import React from "react";
import { useAuthor } from "../AuthorContext.js";

export default function ProjectsSection() {
   const {projects} = useAuthor();

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