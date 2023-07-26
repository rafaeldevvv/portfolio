import React, { useState } from "react";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClickOnLink() {
    if (isExpanded) {
      setIsExpanded(false);
    }
  }

  return (
    <header className={isExpanded ? "show-nav" : ""} id="main-header">
      <div className="container">
        <div className="logo">Rafael</div>
        {/* this is supposed to be something nice made with photoshop */}
        {/* make it lowercase and with a game-style font like Space Mono */}
        <MainMenuToggle
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />
        <Nav onClickOnLink={handleClickOnLink} />
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
  return (
    <nav id="main-nav" aria-label="Main menu">
      <menu id="main-menu">
        <li>
          <a
            href="#intro-fragment"
            title="Go to the introduction section"
            onClick={onClickOnLink}
          >
            Introduction
          </a>
        </li>
        <li>
          <a
            href="#about-fragment"
            title="Go to the about section"
            onClick={onClickOnLink}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills-fragment"
            title="Go to the skills section"
            onClick={onClickOnLink}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects-fragment"
            title="Go to the projects section"
            onClick={onClickOnLink}
          >
            Projects
          </a>
        </li>
      </menu>
    </nav>
  );
}
