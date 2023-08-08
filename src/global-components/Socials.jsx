import React from "react";
import { useAuthor } from "../AuthorContext";

export default function Socials() {
   const author = useAuthor();
 
   return (
     <ul className="socials">
       {Object.keys(author.socials).map((s) => {
         return (
           <li key={s}>
             <a
               href={author.socials[s]}
               className="social-link"
               title={`${author.shortName}'s ${s} page`}
             >
               <i className={`fa-brands fa-${s} icon`} aria-hidden="true"></i>
               <span className="sr-only">{s}</span>
             </a>
           </li>
         );
       })}
     </ul>
   );
 }