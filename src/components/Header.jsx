import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // VAŽNO za hamburger meni
import "./Header.css";
import { useCart } from "../context/CartContext";

const ScissorsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="scissors-icon"
  >
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

const Header = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-4">
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <ScissorsIcon />
        <span className="brand-text ms-2">Nova ženska priča</span>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/services">
              Usluge
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop">
              Prodavnica
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/gallery">
              Galerija
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              O nama
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dugme korpe izvan collapse da uvek bude vidljivo */}
      <button
        className="cart-button btn btn-outline-light ms-3"
        onClick={() => navigate("/checkout")}
      >
        🛒 Korpa ({cartItems.length})
      </button>
    </nav>
  );
};

export default Header;
