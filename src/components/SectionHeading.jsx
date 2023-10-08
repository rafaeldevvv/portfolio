import React from "react";

export default function SectionHeading({ content, id, className = "" }) {
  const linkText = `Link for ${content}`;
  
  return (
    <div className="anchor-target-wrapper">
      <h2 id={id} className={className + " anchor-target"}>
        {content}
        <a
          className="icon-link"
          href={"#" + id}
          aria-label={linkText}
          title={linkText}
        >
          <i className="fa-solid fa-link" aria-hidden="true"></i>
        </a>
      </h2>
    </div>
  );
}
