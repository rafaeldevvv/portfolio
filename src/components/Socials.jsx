import React from "react";
import { useAuthor } from "../AuthorContext";

export default function Socials() {
  const author = useAuthor();

  return (
    <ul className="socials">
      {Object.keys(author.socials).map((k) => {
        const s = author.socials[k];
        return (
          <li key={s.name}>
            <a
              href={s.url}
              className="social-link"
              title={`${author.shortName}'s ${s.name} page`}
              target="_blank"
            >
              {s.iconName ? (
                <i className={`${s.iconName} icon`} aria-hidden="true"></i>
              ) : (
                <img src={s.iconUrl} alt="" />
              )}
              <span className="sr-only">{`${author.name} on ${s.name} (${s.name} page opens in a separate tab)`}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
