import React from "react";
import { useAuthor } from "../AuthorContext.js";

export default function IntroSection() {
  const author = useAuthor();

  return (
    <header id="main-article-header">
      <div className="container">
        <div className="content">
          <h1>Hi, I am {author.name}</h1>
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

