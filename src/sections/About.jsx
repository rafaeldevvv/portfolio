import React from "react";
import { useAuthor } from "../AuthorContext";
import PercentageList from "../global-components/PercentageList";

export default function AboutSection() {
  const author = useAuthor();

  return (
    <section id="about">
      <div className="container">
        <h2 className="fragment-father">
          About Me
          <span className="fragment" id="about-fragment" />
        </h2>
        <p>{author.about}</p>

        <div className="location-and-job-row">
          <section id="location">
            <h3>Location</h3>
            <p>
              {author.location.country}, {author.location.state}
            </p>
          </section>

          <section id="job">
            <h3>Job</h3>
            <p>{author.job}</p>
          </section>
        </div>

        <section id="languages">
          <h3>Languages</h3>
          <div className="languages-list">
            <PercentageList items={author.languages} hasModal={false} />
          </div>
        </section>

        <section id="technologies">
          <h3>Technologies</h3>
          <div className="tech-and-image">
            <div className="technologies-list-container">
              <PercentageList items={author.technologies} hasModal={true} />
            </div>
            <img
              src={author.aboutImage.src}
              alt={author.aboutImage.alt}
              className="about-image"
            />
          </div>
        </section>
      </div>
    </section>
  );
}

function dummy() {
  return (
    <>
      <h2 id="author-info">Author's Info</h2>
      <hr />
      <p className="author-location icon-and-text">
        <i className="fa-solid fa-location-dot icon" aria-hidden="true"></i>
        <span className="sr-only">Location: </span>
        {author.location.country}, {author.location.state}
      </p>
      <hr />
      <p className="author-job icon-and-text">
        <i className="fa-solid fa-briefcase icon" aria-hidden="true"></i>
        <span className="sr-only">Job: </span>
        {author.job}
      </p>
      <p className="author-status icon-and-text">
        <span
          className={`status-hint ${author.status.className} icon`}
          aria-hidden="true"
        ></span>
        <span className="sr-only">Status: </span>
        {author.status.text}
      </p>
      <hr />
      <div className="languages-container">
        <p className="icon-and-text">
          <i className="fa-solid fa-globe icon" aria-hidden="true"></i>
          <span className="sr-only"></span>
          Languages:
        </p>
        <ul className="author-languages">
          {author.languages.map((l) => {
            return (
              <li className="language" key={l}>
                {l}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
