import React from "react";
import { useAuthor } from "../AuthorContext.js";

export default function ServicesSection() {
   const {services} = useAuthor();
   
   return (
      <section id="services" className="decorated-heading">
         <h2 className="fragment-father">
            Services
            <span className="fragment"></span>
         </h2>
      </section>
   )
}