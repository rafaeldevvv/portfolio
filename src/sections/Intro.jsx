import React from "react";
import { useAuthor } from "../AuthorContext.js";

export default function IntroSection() {
  const author = useAuthor();

  return (
    <header id="main-article-header">
      <div className="container">
        <div className="content">
          <h1>
            Hi, I am <br aria-hidden="true" /> {author.name}
          </h1>
          <p>{author.introduction}</p>
        </div>

        <div className="image-wrapper">
          <img
            src={author.introImage.src}
            alt={author.introImage.alt}
            className="intro-image"
          />
        </div>
      </div>
    </header>
  );
}
