import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-collapse");
    if (navbarToggler.classList.contains("show")) {
      new window.bootstrap.Collapse(navbarToggler).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-4">
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <img
          src="/images/logo.webp"
          alt="Лого"
          className="logo-img"
          style={{ height: "40px", width: "auto", objectFit: "contain" }}
        />
        <span className="brand-text ms-2">Нова женска прича</span>
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
            <NavLink className="nav-link" to="/services" onClick={closeNavbar}>
              Услуге
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop" onClick={closeNavbar}>
              Продавница
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/gallery" onClick={closeNavbar}>
              Галерија
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" onClick={closeNavbar}>
              О нама
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>
              Контакт
            </NavLink>
          </li>
        </ul>
      </div>

      <button
        className="cart-button btn btn-outline-light ms-3"
        onClick={() => navigate("/checkout")}
      >
        🛒 Корпа ({cartItems.length})
      </button>
    </nav>
  );
};

export default Header;
