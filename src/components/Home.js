// src/components/Home.js
import React, { useContext } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import testProduct from '../assets/images/testproduct.png'; // путь к вашему изображению
import { CartContext } from '../contexts/CartContext';

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const products = [
    { id: 1, name: 'Product 1', image: testProduct, price: '$10.00' },
    { id: 2, name: 'Product 2', image: testProduct, price: '$20.00' },
    { id: 3, name: 'Product 3', image: testProduct, price: '$30.00' },
    // Добавьте больше продуктов по мере необходимости
  ];

  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to E-Shop</h1>
        <p>Discover the best products at unbeatable prices.</p>
        <button className="shop-now">Shop Now</button>
      </header>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <div className="product-details">
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </Link>
              <button onClick={() => addToCart(product)} className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      <section className="about">
        <h2>About Us</h2>
        <p>We provide a wide range of products to cater to all your needs. Our mission is to offer quality products at affordable prices.</p>
      </section>
    </div>
  );
}

export default Home;
