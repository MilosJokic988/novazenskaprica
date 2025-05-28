import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        {/* Prikaz cene sa količinom i formatiranjem */}
        <p>
          Cena: {parseFloat(item.price).toFixed(2)} RSD x {item.quantity || 1} = {(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)} RSD
        </p>
        <button onClick={() => onRemove(item.id)} className="remove-button">
          Ukloni
        </button>
      </div>
    </div>
  );
};

export default CartItem;
