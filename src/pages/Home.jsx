import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Dobrodošli u Novu Žensku Priču</h1>
        <p>
          "Vaša lepota, naša strast. Otkrijte stil koji vas najbolje predstavlja, uz vrhunske usluge i nežan dodir."
        </p>

        <div className="home-buttons">
          <button onClick={() => navigate("/services")}>Usluge</button>
          <button onClick={() => navigate("/shop")}>Prodavnica</button>
          <button onClick={() => navigate("/gallery")}>Galerija</button>
          <button onClick={() => navigate("/about")}>O nama</button>
          <button onClick={() => navigate("/contact")}>Kontakt</button>
        </div>
      </div>

      <footer className="home-footer">
        <p>© 2025 | Nova Ženska Priča | Sa ljubavlju i stilom 💇‍♀️</p>
      </footer>
    </div>
  );
};

export default Home;
