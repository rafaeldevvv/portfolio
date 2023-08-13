import React from "react";
import { useAuthor } from "../AuthorContext";
import { useState } from "react";

export default function ContactSection() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const author = useAuthor();

  return (
    <section id="contact">
      <div className="section-wrapper">
        <h2 className="fragment-father">
          Contact me
          <span className="fragment" id="contact-fragment"></span>
        </h2>
        <p>{author.contactSectionText}</p>

        <form
          action={`mailto:${author.email}`}
          id="email-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
      </div>
    </section>
  );
}
