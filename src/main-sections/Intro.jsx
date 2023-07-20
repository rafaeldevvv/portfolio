import React from "react";

export default function IntroSection({ author }) {
  return (
    <section id="intro">
      <div className="content">
        <h1 id="intro-heading" className="fragment-father">
          Hi, I am {author.name}
          <span className="fragment" id="intro-fragment" />
        </h1>
        <p>
          I am a freelance front-end developer with a highly qualified skill set
          specialized in creating responsive and accessible web pages. My
          portfolio shows you my skills, projects and how you can reach me!
        </p>
        <a href="#main-footer" className="btn primary-btn">
          Contact me now
        </a>
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
