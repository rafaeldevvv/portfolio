import React from "react";
import { useAuthor } from "../AuthorContext.js";

export default function ServicesSection() {
  const { services } = useAuthor();

  return (
    <section id="services-section" aria-labelledby="services_heading">
      <div className="container">
        <h2 className="fragment-father" id="services_heading">
          Services
          <span className="fragment" id="services-fragment"></span>
        </h2>

        <section id="price-section">
          <h3>Price</h3>
          <p>$10 per hour on any project</p>
        </section>

        <section id="offerings-section">
          <h3>Offerings</h3>
          <ul id="service-list">
            {services.map((s) => {
              return (
                <li key={s.name}>
                  <Service service={s} />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </section>
  );
}

function Service({ service }) {
  return (
    <div className="service">
      <i className={`${service.fontAwesomeIcon} icon`} aria-hidden="true"></i>
      <h4 className="service-name">{service.name}</h4>
      <p className="service-description">{service.description}</p>
    </div>
  );
}