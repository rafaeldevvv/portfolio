import React from "react";
import { useAuthor } from "../AuthorContext";

export default function AboutSection() {
  const author = useAuthor();
  return (
    <section id="about">
      <h2 className="fragment-father">
        About Me
        <span className="fragment" id="about-fragment" />
      </h2>
      <p>
        {author.about}
      </p>

      <section>
        <h3>Technologies</h3>
      </section>
    </section>
  );
}