import React from "react";
import { servicesData } from "../data/servicesData";
import './Services.css'
const Services = () => {
  return (
    <div className="services-container">
      <h1>Наше услуге</h1>
      {servicesData.map((section, index) => (
        <div key={index} className="service-category">
          <h2>{section.category}</h2>
          <ul>
            {section.services.map((service, idx) => (
              <li key={idx} className="service-item">
                <span>{service.name}</span>
                <span>{service.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Services;
