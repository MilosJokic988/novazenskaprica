import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, clearCart, removeFromCart } = useCart();
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  // Ukupna cena
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity) || 1;
    return acc + price * quantity;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8ojxtjk',       // ← tvoj service ID
      'template_o7j9fyr',      // ← tvoj template ID
      formRef.current,
      'C2h12Qysm1nt-m9la'      // ← tvoj public key
    ).then(
      () => {
        setStatusMessage("✅ Porudžbina uspešno poslata!");
        clearCart();
      },
      (error) => {
        setStatusMessage("❌ Došlo je do greške. Pokušajte ponovo.");
        console.error(error.text);
      }
    );
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Korpa je prazna.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}
        </>
      )}

      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Ime i prezime" required />
        <input type="text" name="address" placeholder="Adresa" required />
        <input type="tel" name="phone" placeholder="Telefon" required />

        <select name="payment" required>
          <option value="">Izaberi način plaćanja</option>
          <option value="Pouzećem">Pouzećem</option>
          <option value="Uplatom na račun">Uplatom na račun</option>
        </select>

        {/* Sakriveno polje sa narudžbinom */}
        <textarea
          name="order_details"
          readOnly
          value={cartItems.map(item =>
            `${item.name} — ${item.quantity} kom — ${(item.price * item.quantity).toFixed(2)} RSD`
          ).join('\n')}
          style={{ display: 'none' }}
        />

        {/* Sakriveno polje sa ukupnom cenom */}
        <input
          type="hidden"
          name="total_price"
          value={`${totalPrice.toFixed(2)} RSD`}
        />

        <button type="submit" disabled={cartItems.length === 0}>
          Potvrdi porudžbinu
        </button>
      </form>

      {/* Prikaz ukupne cene ispod forme */}
      {cartItems.length > 0 && (
        <div className="total-price-summary">
          <h3>Ukupno za naplatu: {totalPrice.toFixed(2)} RSD</h3>
        </div>
      )}

      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default Checkout;
