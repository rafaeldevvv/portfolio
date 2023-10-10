import React from "react";
import { useAuthor } from "../AuthorContext";
import Socials from "./Socials";
import capitalize from "../utils/capitalize.js";

export default function Footer() {
  const author = useAuthor();

  return (
    <footer id="main-footer">
      <div className="container">
        <div className="contact-and-socials-container">
          <ContactInfo />
          <Socials />
        </div>
        <FreelanceSocials />
        <p className="copyright-notice">
          <small>Copyright &copy; 2023 {author.name}. All rights reserved</small>
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
          <span className="sr-only">My phone number:</span>
          <span className="content">{author.formattedPhoneNumber}</span>
        </li>
        <li className="contact-item">
          <i className="fa-solid fa-envelope icon" aria-hidden="true"></i>{" "}
          <span className="sr-only">My email:</span>
          <span className="content">{author.email}</span>
        </li>
      </ul>
    </address>
  );
}

function FreelanceSocials() {
  const author = useAuthor();

  return (
    <>
      <div className="freelance-socials-wrapper">
        <p>Freelance Socials</p>
        <ul className="freelance-socials">
          {Object.keys(author.freelanceSocials).map((fs) => {
            return (
              <li key={fs}>
                <a
                  href={author.freelanceSocials[fs]}
                  title={`See ${author.name}'s profile on ${fs}`}
                  target="_blank"
                >
                  {capitalize(fs)} Profile{" "}
                  <i
                    className="fa-solid fa-arrow-up-right-from-square icon-external"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
