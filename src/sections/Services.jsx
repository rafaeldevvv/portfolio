import React from "react";
import { useAuthor } from "../AuthorContext.js";

export default function ServicesSection() {
  const { services } = useAuthor();

  return (
    <section id="services">
      <div className="container">
        <h2 className="fragment-father">
          Services
          <span className="fragment" id="services-fragment"></span>
        </h2>
        <ul id="service-list">
          {services.map((s) => {
            return (
              <li key={s.name}>
                <Service service={s} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Service({ service }) {
  return (
    <div className="service">
      <h3 className="service-name">{service.name}</h3>
      <p className="service-description">{service.shortDescription}</p>
      <button
        className="btn primary-btn"
        type="button"
        aria-label={`Read more about &quot;${service.name}&quot; service`}
      >
        Read more &gt;&gt;
      </button>
    </div>
  );
}
