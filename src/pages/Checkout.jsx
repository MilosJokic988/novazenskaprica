import React from "react";
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem'; // komponenta koju smo napravili
import './Checkout.css'
const Checkout = () => {
  const { cartItems, clearCart, removeFromCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Porudžbina uspešno poslata!");
    clearCart();
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Korpa je prazna.</p>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
        ))
      )}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ime i prezime" required />
        <input type="text" placeholder="Adresa" required />
        <input type="tel" placeholder="Telefon" required />
        <button type="submit" disabled={cartItems.length === 0}>Potvrdi porudžbinu</button>
      </form>
    </div>
  );
};

export default Checkout;
