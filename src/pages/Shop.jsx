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

  // Komentari po proizvodu: { productId: [ "komentar1", "komentar2" ] }
  const [comments, setComments] = useState({});

  const [newComment, setNewComment] = useState({}); // privremeni tekst komentara po proizvodu

  const handleCommentChange = (productId, text) => {
    setNewComment(prev => ({ ...prev, [productId]: text }));
  };

  const handleCommentSubmit = (productId, e) => {
    e.preventDefault();
    if (!newComment[productId]) return;

    setComments(prev => {
      const productComments = prev[productId] || [];
      return { ...prev, [productId]: [...productComments, newComment[productId]] };
    });

    setNewComment(prev => ({ ...prev, [productId]: "" }));
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
            <button className="buy-button" onClick={() => addToCart(product)}>
              Dodaj u korpu
            </button>

            {/* Sekcija komentara */}
            <div className="comments-section">
              <h4>Komentari:</h4>
              {comments[product.id]?.length > 0 ? (
                <ul>
                  {comments[product.id].map((comment, i) => (
                    <li key={i}>{comment}</li>
                  ))}
                </ul>
              ) : (
                <p>Još nema komentara.</p>
              )}
              <form onSubmit={(e) => handleCommentSubmit(product.id, e)}>
                <input
                  type="text"
                  placeholder="Napiši komentar..."
                  value={newComment[product.id] || ""}
                  onChange={e => handleCommentChange(product.id, e.target.value)}
                />
                <button type="submit">Pošalji</button>
              </form>
            </div>
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