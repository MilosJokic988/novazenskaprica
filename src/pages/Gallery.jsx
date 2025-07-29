import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Gallery.css';

const webpImages = Array.from({ length: 8 }, (_, i) => `/images/slika${i + 1}.webp`);
const jpegImages = Array.from({ length: 18 }, (_, i) => `/images/slika${i + 9}.jpeg`);
const images = [...webpImages, ...jpegImages];


const Gallery = () => {
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <div className="gallery-container">
      <h1>Галерија</h1>
      <p>Преглед наших најлепших радова као и салона.</p>

      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-card" onClick={() => openModal(img)}>
            <img src={img} alt={`Galerija slika ${idx + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Назад на почетну
      </button>

      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={modalImage} alt="Povećana slika" />
            <button className="close-button" onClick={closeModal}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
