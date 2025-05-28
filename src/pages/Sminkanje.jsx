import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sminkanje.css";

const Sminkanje = () => {
  const navigate = useNavigate();

  return (
    <div className="sminkanje-container">
      <h1>Galerija šminkanja</h1>
      <div className="sminkanje-images">
        <img src="/images/sminkanje1.jpeg" alt="Šminkanje 1" />
        <img src="/images/sminkanje2.jpeg" alt="Šminkanje 2" />
      </div>
      <button className="back-button" onClick={() => navigate("/about")}>
        ⬅ Nazad
      </button>
    </div>
  );
};

export default Sminkanje;
