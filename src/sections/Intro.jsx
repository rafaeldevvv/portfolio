import React from "react";
import { useAuthor } from "../AuthorContext.js";
import Heading from "../global-components/Heading.jsx";

export default function IntroSection() {
  const author = useAuthor();

  return (
    <header id="main-article-header">
      <div className="container">
        <div className="content">
          <Heading
            level={1}
            label={`Hi, I am ${author.name}`}
            hasLink={false}
          />
          <p>{author.introduction}</p>
        </div>

        <img
          src={author.introImage.src}
          alt={author.introImage.alt}
          className="intro-image"
        />
      </div>
    </header>
  );
}
