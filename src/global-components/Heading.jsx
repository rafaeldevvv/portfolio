import React from "react";

export default function Heading({
  level,
  className,
  label,
  fragmentId,
  hasLink = true,
}) {
  if (!level) throw new Error(`No level specified for ${label} heading`);
  if (!label) throw new Error(`Heading level ${level} has no label`);

  const escapedLabel = label
    .toLowerCase()
    .replace(/\W/g, "_")
    .replace(/_{2,}/g, "_");

  switch (level) {
    case 1: {
      return (
        <h1 id={escapedLabel} className={"fragment-father " + className}>
          {hasLink ? (
            <a href={`#${escapedLabel}`} className="heading-link">
              {label}
            </a>
          ) : (
            label
          )}
          {fragmentId && <span id={fragmentId} className="fragment"></span>}
        </h1>
      );
    }
    case 2: {
      <h2 id={escapedLabel} className={"fragment-father " + className}>
        {hasLink ? (
          <a href={`#${escapedLabel}`} className="heading-link">
            {label}
          </a>
        ) : (
          label
        )}
        {fragmentId && <span id={fragmentId} className="fragment"></span>}
      </h2>;
    }
    case 3: {
      <h3 id={escapedLabel} className={"fragment-father " + className}>
        {hasLink ? (
          <a href={`#${escapedLabel}`} className="heading-link">
            {label}
          </a>
        ) : (
          label
        )}
        {fragmentId && <span id={fragmentId} className="fragment"></span>}
      </h3>;
    }
    case 4: {
      <h4 id={escapedLabel} className={"fragment-father " + className}>
        {hasLink ? (
          <a href={`#${escapedLabel}`} className="heading-link">
            {label}
          </a>
        ) : (
          label
        )}
        {fragmentId && <span id={fragmentId} className="fragment"></span>}
      </h4>;
    }
    case 5: {
      <h5 id={escapedLabel} className={"fragment-father " + className}>
        {hasLink ? (
          <a href={`#${escapedLabel}`} className="heading-link">
            {label}
          </a>
        ) : (
          label
        )}
        {fragmentId && <span id={fragmentId} className="fragment"></span>}
      </h5>;
    }
    case 6: {
      <h6 id={escapedLabel} className={"fragment-father " + className}>
        {hasLink ? (
          <a href={`#${escapedLabel}`} className="heading-link">
            {label}
          </a>
        ) : (
          label
        )}
        {fragmentId && <span id={fragmentId} className="fragment"></span>}
      </h6>;
    }
  }
}
