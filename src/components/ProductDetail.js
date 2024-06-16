// src/components/ProductDetail.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import testProduct from '../assets/images/testproduct.png'; // путь к вашему изображению
import { CartContext } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = {
    id: parseInt(id, 10),
    name: `Product ${id}`,
    image: testProduct,
    price: `$${id * 10}.00`,
    description: `This is the description for Product ${id}.`,
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
