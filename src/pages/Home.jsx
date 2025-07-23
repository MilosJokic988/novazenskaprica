import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Naslov i dugmad */}
      <div className="home-content">
        <h1>Добродошли у Нову Женску Причу</h1>
        <p>
          "Ваша лепота, наша страст. Откријте стил који вас најбоље представља, уз врхунске услуге и нежан додир."
        </p>

        <div className="home-buttons">
          <button onClick={() => navigate("/services")}>Услуге</button>
          <button onClick={() => navigate("/shop")}>Продавница</button>
          <button onClick={() => navigate("/gallery")}>Галерија</button>
          <button onClick={() => navigate("/about")}>О нама</button>
          <button onClick={() => navigate("/contact")}>Контакт</button>
        </div>
      </div>

      {/* Razbacane slike */}
      <img src="/images/style1.jpg" alt="Salon 1" className="scattered-img img1" />
      <img src="/images/style2.jpg" alt="Salon 2" className="scattered-img img2" />
      <img src="/images/style3.jpg" alt="Salon 3" className="scattered-img img3" />

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2025 | Нова Женска Прича | Са љубављу и стилом 💇‍♀️</p>
      </footer>
    </div>
  );
};

export default Home;
