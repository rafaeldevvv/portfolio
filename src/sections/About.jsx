import React from "react";
import { useAuthor } from "../AuthorContext";
import PercentageList from "../global-components/PercentageList";

export default function AboutSection() {
  const author = useAuthor();

  return (
    <section id="about" aria-labelledby="about_me">
      <div className="container">
        <h2 className="fragment-father" id="about_me">
          About Me
          <span className="fragment" id="about-fragment" />
        </h2>

        <div className="paragraphs-and-image">
          <div className="paragraphs">
            {author.aboutParagraphs.map((content, i) => {
              return <p key={i} className="dashed-border-paragraph">{content}</p>;
            })}
          </div>
          <img
              src={author.aboutImage.src}
              alt={author.aboutImage.alt}
              className="about-image"
            />
        </div>

        <section id="languages">
          <h3>Spoken Languages</h3>
          <div className="languages-list">
            <PercentageList items={author.spokenLanguages} />
          </div>
        </section>
      </div>
    </section>
  );
}
