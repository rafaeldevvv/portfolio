import React, { useState } from "react";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className={isExpanded ? "show-nav" : ""}>
      <div className="container">
        <div className="logo">Rafael</div>
        {/* this is supposed to be something nice made with photoshop */}
        {/* make it lowercase and with a game-style font like Space Mono */}
        <MainMenuToggle isExpanded={isExpanded} />
        <Nav />
      </div>
    </header>
  );
}

function MainMenuToggle({ isExpanded }) {
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
      aria-controls="main-nav"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <i className={`fa-solid ${icon} icon`} aria-hidden="true" />
      <span className="sr-only">{message}</span>
    </button>
  );
}

function Nav() {
  return (
    <nav id="main-nav" aria-label="Main menu">
      <ul id="main-menu">
        <li>
          <a href="#intro-fragment" title="Go to the introduction section">
            Introduction
          </a>
        </li>
        <li>
          <a href="#about-fragment" title="Go to the about section">
            About
          </a>
        </li>
        <li>
          <a href="#skills-fragment" title="Go to the skills section">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects-fragment" title="Go to the projects section">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
