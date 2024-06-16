// src/components/ProductList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import './ProductList.css';
import testProduct from '../assets/images/testproduct.png'; // путь к вашему изображению

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Product 1', image: testProduct, price: '$10.00' },
    { id: 2, name: 'Product 2', image: testProduct, price: '$20.00' },
    { id: 3, name: 'Product 3', image: testProduct, price: '$30.00' },
    // Добавьте больше продуктов по мере необходимости
  ];

  return (
    <div className="product-list">
      <h2>Our Products</h2>
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
    </div>
  );
};

export default ProductList;
