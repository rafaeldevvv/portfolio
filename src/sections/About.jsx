import React from "react";
import { useAuthor } from "../AuthorContext";
import PercentageList from "../global-components/PercentageList";

export default function AboutSection() {
  const author = useAuthor();

  return (
    <section id="about">
      <h2 className="fragment-father">
        About Me
        <span className="fragment" id="about-fragment" />
      </h2>
      <p>{author.about}</p>

      <section id="technologies">
        <h3>Technologies</h3>
        <div className="tech-and-modal">
          <div className="technologies">
            <PercentageList items={author.technologies} hasModal={true} />
          </div>
          <img
            src={author.aboutImage.src}
            alt={author.aboutImage.alt}
            className="about-image"
          />
        </div>
      </section>
    </section>
  );
}
