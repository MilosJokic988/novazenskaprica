import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import './Shop.css';

const productsData = [
  {
    id: 1,
    name: "Уље за нормалну и густу косу",
    description: "Хидрира, штити и храни косу на бази конопље и витамина Е.",
    price: "1800рсд",
    image: "/images/ulje1.jpeg",
  },
  {
    id: 2,
    name: "Уље за танку косу",
    description: "Опоравља,попуњава длаку,штити косу на бази уља коштица кајсија и витамина Е.",
    price: "1800рсд",
    image: "/images/ulje2.jpeg",
  },
  {
    id: 3,
    name: "Шампон против опадања косе",
    description: "Подстиче раст нове косе,на бази белог лука,ђумбира,рицинуса и витамина Е.",
    price: "1500рсд",
    image: "/images/sampon2.jpeg",
  },
  {
    id: 4,
    name: "Шампон против перути",
    description: "Регенерише скалп и косу на бази зеолита, урее и алое.",
    price: "1500рсд",
    image: "/images/sampon1.jpeg",
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
      <h1>Нова Женска Прича —Продавница</h1>
      <p>Откријте наше ексклузивне производе за негу косе, створене са љубављу и магијом.</p>

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
              Додај у корпу
            </button>
            <button className="comment-button" onClick={() => navigate(`/komentari/${product.id}`)}>
  💬 Коментариши
</button>
          </div>
          
        ))}
      </div>

      <div className="checkout-button-container">
        <button className="checkout-button" onClick={() => navigate("/checkout")}>
          🛒 Иди на куповину
        </button>
      </div>
    </div>
  );
};

export default Shop;
