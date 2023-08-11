import React, { useState } from "react";
import { useAuthor } from "../AuthorContext";

export default function Header() {
  const author = useAuthor();

  const [isExpanded, setIsExpanded] = useState(false);
  const [isAuthorModalOmitted, setIsAuthorModalOmitted] = useState(true);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  const handlers = {
    onMouseOut: function (e) {
      setIsAuthorModalOmitted(true);
    },
    onMouseEnter: function (e) {
      setIsAuthorModalOmitted(false);
    },
    onClick: function (e) {
      setIsAuthorModalOmitted(!isAuthorModalOmitted);
    },
  };

  return (
    <header className={isExpanded ? "show-nav" : ""} id="global-header">
      <div className="container">
        <div className="profile-picture-container">
          {author.profilePicture ? (
            <img
              src={author.profilePicture.src}
              alt={author.profilePicture.alt}
              className={`profile-picture ${
                isAuthorModalOmitted ? "" : "hovered"
              }`}
              {...handlers}
            />
          ) : (
            <div
              className={`profile-picture fake ${
                isAuthorModalOmitted ? "" : "hovered"
              }`}
              {...handlers}
            ></div>
          )}

          <AuthorModal author={author} isOmitted={isAuthorModalOmitted} />
        </div>
        <MainMenuToggle isExpanded={isExpanded} onClick={handleClick} />
        <Nav onClickOnLink={handleClick} />
      </div>
    </header>
  );
}

function MainMenuToggle({ isExpanded, onClick }) {
  const message = isExpanded ? "Close main menu" : "Open main menu";
  const icon = isExpanded ? "fa-xmark" : "fa-bars";

  return (
    <button
      className="mobile-only"
      type="button"
      id="main-menu-toggle"
      title={message}
      aria-haspopup="menu"
      aria-expanded={isExpanded}
      aria-label={message}
      onClick={onClick}
    >
      <i className={`fa-solid ${icon} icon`} aria-hidden="true" />
      <span className="sr-only">{message}</span>
    </button>
  );
}

function Nav({ onClickOnLink }) {
  const sections = [
    {
      name: "About",
      href: "#about-fragment",
      title: "Know me in more details",
    },
    {
      name: "Projects",
      href: "#projects-fragment",
      title: "See all of my projects",
    },
    {
      name: "Services",
      href: "#services-fragment",
      title: "See all the services that I can provide you with",
    },
    {
      name: "Contact",
      href: "#contact-fragment",
      title: "Contact me",
    },
  ];

  return (
    <nav id="main-nav" aria-label="Main menu">
      <menu id="main-menu">
        {sections.map((s) => {
          const { name, title, href } = s;
          return (
            <li key={name}>
              <a href={href} title={title} onClick={onClickOnLink}>
                {name}
              </a>
            </li>
          );
        })}
      </menu>
    </nav>
  );
}

function AuthorModal({ author, isOmitted }) {
  return (
    <div
      id={isOmitted ? "" : "author-modal"}
      className={isOmitted ? "sr-only" : ""}
    >
      <h2>Author's Info</h2>
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
    </div>
  );
}
