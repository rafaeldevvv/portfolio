import React, { useRef, useState } from "react";
import { useAuthor } from "../AuthorContext";

export default function Header() {
  const author = useAuthor();

  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <header className={isExpanded ? "show-nav" : ""} id="global-header">
      <div className="container">
        <img className="logo" src={author.logo.src} alt={author.logo.alt} aria-label="logo" />
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
      label: "About",
      href: "#about-fragment",
      title: "Know me in more details",
    },
    {
      label: "Projects",
      href: "#projects-fragment",
      title: "See all of my projects",
    },
    {
      label: "Services",
      href: "#services-fragment",
      title: "See all the services that I can provide you with",
    },
    {
      label: "Contact",
      href: "#contact-fragment",
      title: "Contact me",
    },
  ];

  return (
    <nav id="main-nav" aria-label="Main menu">
      <menu id="main-menu">
        {sections.map((s) => {
          const { label, title, href } = s;
          return (
            <li key={label}>
              <a href={href} title={title} onClick={onClickOnLink}>
                {label}
              </a>
            </li>
          );
        })}
      </menu>
    </nav>
  );
}