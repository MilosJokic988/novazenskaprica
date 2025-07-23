import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const vesnaEmail = "novazenskaprica@gmail.com";
  const vesnaPhone = "+38162306646";
  const address = "Ратка Митровића 181а";
  const googleMapsLink = "https://www.google.com/maps?q=Ratka+Mitrovica+181a";
  const instagramLink = "#"; // ubaci pravi link
  const tiktokLink = "#"; // ubaci pravi link

  return (
    <div className="contact-container">
      <h1>Контакт</h1>
      <p>Добродошли у фризерски салон <strong>Нова женска прича</strong>.</p>
      <p>Власница салона је <strong>Весна</strong>, професионална и пажљива фризерка са вишегодишњим искуством.</p>

      <div className="contact-info">
        <p>
          <FaMapMarkerAlt className="icon" />{" "}
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
            {address}
          </a>
        </p>
        <p>
          <FaEnvelope className="icon" />{" "}
          <a href={`mailto:${vesnaEmail}`}>{vesnaEmail}</a>
        </p>
        <p>
          <FaPhone className="icon" />{" "}
          <a href={`tel:${vesnaPhone}`}>{vesnaPhone}</a>
        </p>
        <p>
          <FaInstagram className="icon" />{""}
          <a href="https://www.instagram.com/novazenskaprica/" target="_blank" rel="noopener noreferrer">
  @novazenskaprica
</a>

        </p>
        <p>
          <FaTiktok className="icon" />{" "}
          <a href="https://www.tiktok.com/@vesna.ilic08?_t=ZM-8yFSYtd3fxV&_r=1" target="_blank" rel="noopener noreferrer">ViKozmetika official</a>
        </p>
      </div>

      <button 
        className="schedule-button" 
        onClick={() => navigate("/booking")}
      >
        Закажи термин
      </button>
    </div>
  );
};

export default Contact;
