import React from "react";
import { useAuthor } from "../AuthorContext";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const author = useAuthor();

  return (
    <section id="contact-section" aria-labelledby="contact-me">
      <div className="section-inner-container">
        <SectionHeading content="Contact Me" id="contact-me" />
        <p>
          You can preferably{" "}
          <a href={`https://wa.me/${author.phoneNumber}`} target="_blank">
            reach out to me through WhatsApp
          </a>{" "}
          or any of my social media profiles provided below. Alternatively, use
          the form below to send me an email.
        </p>

        <EmailForm />
      </div>
    </section>
  );
}

function EmailForm() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const author = useAuthor();

  return (
    <form
      id="email-form"
      onSubmit={(e) => {
        e.preventDefault();
        const encodedBody = encodeURIComponent(body);
        const encodedSubject = encodeURIComponent(subject);

        //  window.open(`mailto:${author.email}?body=${encodedBody}&subject=${encodedSubject}`);
        location.href = `mailto:${author.email}?body=${encodedBody}&subject=${encodedSubject}`;
      }}
    >
      <p>
        <label htmlFor="inSubject">Subject</label>
        <input
          name="subject"
          id="inSubject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Landing Page"
        />
      </p>

      <p>
        <label htmlFor="inBody">Body</label>
        <textarea
          name="body"
          id="inBody"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </p>

      <button type="submit">
        <span className="text">Send email</span>
        <span className="icon">
          <i className="fa-regular fa-paper-plane"></i>
        </span>
      </button>
    </form>
  );
}
