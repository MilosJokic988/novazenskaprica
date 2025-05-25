import React from "react";
import './Contact.css';

const Contact = () => {
  const vesnaEmail = "vesna@novezenskeporice.rs";
  const vesnaPhone = "+381601234567";

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
        onClick={() => window.location.href = `mailto:${vesnaEmail}?subject=Zakazivanje%20termina`}
      >
        Zakaži termin
      </button>
    </div>
  );
};

export default Contact;
