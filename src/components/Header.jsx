import React, { useState } from "react";
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
        <img
          className="logo"
          src={author.logo.src}
          alt={author.logo.alt}
          title={`${author.shortName}'s logo`}
        />
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
      aria-haspopup="menu"
      aria-expanded={isExpanded}
      aria-label={message} // when it is changed in a re-render, the message is announced
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
      href: "#about-me",
      title: "Know me in more details",
    },
    {
      label: "Projects",
      href: "#projects",
      title: "See all of my projects",
    },
    {
      label: "Services",
      href: "#services",
      title: "See all the services that I can provide you with",
    },
    {
      label: "Contact",
      href: "#contact-me",
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
