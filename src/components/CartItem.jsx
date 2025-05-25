
import React from "react";
import "./CartItem.css";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>{item.price}</p>
        <button onClick={() => onRemove(item.id)} className="remove-button">Ukloni</button>
      </div>
    </div>
  );
};

export default CartItem;
