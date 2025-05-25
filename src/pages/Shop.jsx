import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import './Shop.css';

const productsData = [
  {
    id: 1,
    name: "Ulje za normalnu i gustu kosu",
    description: "Hidrira, štiti i hrani kosu na bazi konoplje i vitamina E.",
    price: "1600rsd",
    image: "/images/ulje1.jpeg",
  },
  {
    id: 2,
    name: "Ulje za tanku kosu",
    description: "Oporavlja, popunjava dlaku, štiti kosu na bazi ulja koštice, kajsije i vitamina E.",
    price: "1600rsd",
    image: "/images/ulje2.jpeg",
  },
  {
    id: 3,
    name: "Šampon protiv opadanja kose",
    description: "Zaustavlja opadanje i podstiče rast nove kose, na bazi belog luka, đumbira, ricinusa i vitamina E.",
    price: "1650rsd",
    image: "/images/sampon1.jpeg",
  },
  {
    id: 4,
    name: "Šampon protiv peruti",
    description: "Regeneriše skalp i kosu na bazi zeolita, uree i aloe.",
    price: "1650rsd",
    image: "/images/sampon2.jpeg",
  },
];

const Shop = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Držimo stanje ocena za svaki proizvod (id => rating)
  const [ratings, setRatings] = useState({});

  const handleRating = (productId, ratingValue) => {
    setRatings(prev => ({ ...prev, [productId]: ratingValue }));
  };

  return (
    <div className="shop-container">
      <h1>Nova Ženska Priča — Prodavnica</h1>
      <p>Otkrij naše ekskluzivne proizvode za negu kose, stvorene s ljubavlju i magijom.</p>

      <div className="products-grid">
        {productsData.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-desc">{product.description}</p>
            <p className="product-price">{product.price}</p>

            {/* Zvezdice */}
            <div className="rating">
              {[1, 2, 3, 4, 5].map(value => (
                <span
                  key={value}
                  className={`star ${ratings[product.id] >= value ? "filled" : ""}`}
                  onClick={() => handleRating(product.id, value)}
                >
                  ★
                </span>
              ))}
            </div>

            <button className="buy-button" onClick={() => addToCart(product)}>
              Dodaj u korpu
            </button>
          </div>
        ))}
      </div>

      <div className="checkout-button-container">
        <button className="checkout-button" onClick={() => navigate("/checkout")}>
          🛒 Idi na kupovinu
        </button>
      </div>
    </div>
  );
};

export default Shop;
