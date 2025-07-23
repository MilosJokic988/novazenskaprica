import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import './Booking.css';

const Booking = () => {
  const [dateTime, setDateTime] = useState(moment());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Zakazivanje termina za: ${formData.service}`;
    const body = `
Ime i prezime: ${formData.name}
Email: ${formData.email}
Usluga: ${formData.service}
Datum i vreme: ${dateTime.format("DD.MM.YYYY. HH:mm")}
Poruka: ${formData.message}
    `;

    const mailtoLink = `mailto:novazenskaprica11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  // Dozvoljava samo buduće datume
  const isValidDate = (current) => {
    const now = moment();
    return current.isAfter(now, "minute");
  };

  return (
    <div className="booking-container">
      <h2>Закажи свој термин</h2>

      <Datetime
        value={dateTime}
        onChange={setDateTime}
        isValidDate={isValidDate}
        dateFormat="DD.MM.YYYY"
        timeFormat="HH:mm"
        timeConstraints={{ hours: { min: 9, max: 21 }, minutes: { step: 30 } }}
      />

      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          placeholder="Име и презиме"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Eмаил адреса"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Услуга (нпр. шишање, маникир...)"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          required
        />
        <textarea
          placeholder="Порука (није обавезно)"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <button type="submit">Пошаљи захтев</button>
      </form>
    </div>
  );
};

export default Booking;
