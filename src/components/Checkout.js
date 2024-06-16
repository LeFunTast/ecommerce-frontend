// src/components/Checkout.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно обработать данные формы, например, отправить их на сервер
    console.log('Order submitted:', formData);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Shipping Information</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={handleChange}
            required
          />

          <h3>Payment Information</h3>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="expiration"
            placeholder="Expiration Date (MM/YY)"
            value={formData.expiration}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-order">Submit Order</button>
        </form>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} x {item.quantity} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Total: ${cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price.slice(1)), 0).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
