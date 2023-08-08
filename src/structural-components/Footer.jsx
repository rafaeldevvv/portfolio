import React from "react";
import { useAuthor } from "../AuthorContext";
import Socials from "../global-components/Socials";

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
          <small>&copy; 2023 {author.name}. All rights reserved</small>
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
