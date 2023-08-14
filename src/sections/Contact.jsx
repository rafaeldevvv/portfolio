import React from "react";
import { useAuthor } from "../AuthorContext";
import { useState } from "react";

export default function ContactSection() {
  const author = useAuthor();

  return (
    <section id="contact">
      <div className="section-inner-container">
        <h2 className="fragment-father">
          Contact me
          <span className="fragment" id="contact-fragment"></span>
        </h2>
        <p>{author.contactSectionText}</p>

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
    <form action={`mailto:${author.email}`} id="email-form">
      <p>
        <label htmlFor="inSubject">Subject</label>
        <input
          name="subject"
          id="inSubject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
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

      <button className="" type="submit">
        Send email
      </button>
    </form>
  );
}
