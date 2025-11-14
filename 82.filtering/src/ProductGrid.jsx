import React from 'react';
import './ProductGrid.css';

function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p className="category">{product.category}</p>
          <p className="price">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;