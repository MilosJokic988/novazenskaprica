import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Tvoja korpa</h2>
      {cartItems.length === 0 ? (
        <p>Korpa je prazna.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} width="80" />
              <span>{item.name}</span>
              <span>{item.quantity}x</span>
              <span>{item.price} RSD</span>
              <button onClick={() => removeFromCart(item.id)}>Ukloni</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Ukupno: {total} RSD</h3>
      <button onClick={() => navigate('/checkout')}>Nastavi na plaćanje</button>
    </div>
  );
};

export default Cart;
