import React from "react";
import { useAuthor } from "../AuthorContext";

export default function Availability() {
   const author = useAuthor();
 
   return (
     <section id="availability-section" aria-labelledby="availability_heading">
       <h2 id="availability_heading">Availability</h2>
       <Heading  />
       <p className={`availability ${author.availability.className}`}>
         {author.availability.text}
       </p>
     </section>
   );
 }
 