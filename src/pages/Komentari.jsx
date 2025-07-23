import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Komentari.css';

const productsData = [
  { id: 1, name: "Ulje za normalnu i gustu kosu" },
  { id: 2, name: "Ulje za tanku kosu" },
  { id: 3, name: "Šampon protiv opadanja kose" },
  { id: 4, name: "Šampon protiv peruti" },
];

// Početni demo komentari
const defaultComments = {
  1: [{ name: "Ana", text: "Predivno ulje, kosa mi je mekša!" }],
  2: [{ name: "Mila", text: "Lagana tekstura, savršeno za moju tanku kosu." }],
  3: [{ name: "Jovana", text: "Stvarno pomaže kod opadanja!" }],
  4: [],
};

const Komentari = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productsData.find(p => p.id === parseInt(productId));
  const productName = product ? product.name : "Nepoznat proizvod";

  const [name, setName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  // Učitavanje komentara iz localStorage
  useEffect(() => {
    const stored = localStorage.getItem("komentari");
    const parsed = stored ? JSON.parse(stored) : defaultComments;
    setComments(parsed[productId] || []);
  }, [productId]);

  // Dodavanje komentara i čuvanje u localStorage
  const handleAddComment = () => {
    if (newComment.trim()) {
      const commentObj = {
        name: name.trim() || "Anonimno",
        text: newComment.trim()
      };

      const updated = [...comments, commentObj];
      setComments(updated);

      const allStored = localStorage.getItem("komentari");
      const parsed = allStored ? JSON.parse(allStored) : defaultComments;
      const updatedAll = { ...parsed, [productId]: updated };

      localStorage.setItem("komentari", JSON.stringify(updatedAll));
      setNewComment("");
      setName("");
    }
  };

  return (
    <div className="komentari-container">
      <h1>Коментари за: {productName}</h1>

      <div className="comments-list">
        {comments.length === 0 ? (
          <p>Још увек нема коментара.</p>
        ) : (
          comments.map((comment, idx) => (
            <p key={idx}><strong>{comment.name}:</strong> {comment.text}</p>
          ))
        )}
      </div>

      <div className="comment-form">
        <input
          type="text"
          placeholder="Vaše ime (opciono)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Ostavi svoj komentar..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Пошаљи коментар</button>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="back-button" onClick={() => navigate("/shop")}>
          ⬅ Назад на продавницу
        </button>
      </div>
    </div>
  );
};

export default Komentari;
