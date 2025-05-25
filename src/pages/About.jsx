import React from "react";
import { useNavigate } from "react-router-dom";
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1>Salon Nova ženska priča</h1>

      <div className="owner-section">
        <div className="owner-image-placeholder">
          {/* Ovdje možeš dodati pravu sliku vlasnice Vesne */}
          {/* <img src="/images/vesna.jpg" alt="Vlasnica Vesna" /> */}
          <span>Slika Vesne - mesto za fotografiju</span>
        </div>
        <div className="owner-text">
          <h2>Upoznajte Vesnu</h2>
          <p>
            Vesna je stručna frizerka i vlasnica salona "Nova ženska priča", sa
            više od 15 godina iskustva u negovanju i stilizovanju kose.
          </p>
          <p>
            Posvećena je svakoj klijentkinji, stvarajući savršene frizure koje
            naglašavaju lepotu i jedinstvenost svake žene.
          </p>
          <p>
            U našem salonu koristimo samo visokokvalitetne proizvode i pratimo
            najnovije trendove u svetu frizerstva, kako biste uvek izašle sa
            osmehom i samopouzdanjem.
          </p>
        </div>
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Nazad na početnu
      </button>
    </div>
  );
};

export default About;
