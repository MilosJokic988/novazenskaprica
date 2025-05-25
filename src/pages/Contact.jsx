import React from "react";
import { useNavigate } from "react-router-dom";
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const vesnaEmail = "novazenskaprica11@gmail.com";
  const vesnaPhone = "+381694638884";

  return (
    <div className="contact-container">
      <h1>Kontakt</h1>
      <p>Dobrodošli u frizerski salon <strong>Nova ženska priča</strong>.</p>
      <p>Vlasnica salona je <strong>Vesna</strong>, profesionalna i pažljiva frizerka sa višegodišnjim iskustvom.</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> <a href={`mailto:${vesnaEmail}`}>{vesnaEmail}</a></p>
        <p><strong>Telefon:</strong> <a href={`tel:${vesnaPhone}`}>{vesnaPhone}</a></p>
      </div>

      <button 
        className="schedule-button" 
        onClick={() => navigate("/booking")}
      >
        Zakaži termin
      </button>
    </div>
  );
};

export default Contact;
