import React from 'react';
import './ProductList.css';

function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list-container">
      <h2>Products</h2>
      {products.map(product => (
        <div className="product-item">
          <span>{product.name} - ${product.price}</span>
          <button onClick={()=>onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;