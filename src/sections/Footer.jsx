import React from "react";
import { useAuthor } from "../AuthorContext";

export default function Footer() {
  const author = useAuthor();

  return (
    <footer id="main-footer">
      <div className="container">
        <div className="contact-and-socials-container">
          <ContactInfo />
          <Socials />
        </div>
        <p className="copyright-notice">
          <small>@ 2023 {author.name}. All rights reserved</small>
        </p>
      </div>
    </footer>
  );
}

function ContactInfo() {
  const author = useAuthor();

  return (
    <address>
      <ul id="contact-list">
        <li className="contact-item">
          <i className="fa-brands fa-whatsapp icon" aria-hidden="true"></i>{" "}
          <span className="sr-only">Contact me via whatsapp:</span>
          <span className="content">{author.phoneNumber}</span>
        </li>
        <li className="contact-item">
          <i className="fa-solid fa-envelope icon" aria-hidden="true"></i>{" "}
          <span className="sr-only">Send me an email: </span>
          <span className="content">{author.email}</span>
        </li>
      </ul>
    </address>
  );
}

function Socials() {
  const author = useAuthor();
  
  return (
    <ul className="socials">
      {Object.keys(author.socials).map((s) => {
        return (
          <li key={s}>
            <a href={author.socials[s]} className="social-link">
              <i className={`fa-brands fa-${s} icon`} aria-hidden="true"></i>
              <span className="sr-only">{s}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
