import React from "react";
import { useAuthor } from "../AuthorContext.js";

export default function IntroSection() {
  const author = useAuthor();
  
  return (
    <section id="intro">
      <div className="content">
        <h1 id="intro-heading" className="fragment-father">
          Hi, I am {author.name}
          <span className="fragment" id="intro-fragment" />
        </h1>
        <p>
          {author.introduction}
        </p>
      </div>
      <div className="hero-container">
        {author.hero ? (
          <img src={author.hero.src} alt={author.hero.alt} />
        ) : (
          <div className="pseudo-hero"></div>
        )}
      </div>
    </section>
  );
}
