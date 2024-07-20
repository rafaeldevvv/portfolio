import React from "react";
import { useAuthor } from "../AuthorContext.js";
import SectionHeading from "./SectionHeading";

export default function ServicesSection() {
  const { services } = useAuthor();

  return (
    <section id="services-section" aria-labelledby="services">
      <div className="container">
        <SectionHeading content="Services" id="services" />

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
