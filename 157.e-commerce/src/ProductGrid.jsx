import React from 'react';
import './ProductGrid.css';
function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={`https://picsum.photos/seed/${product.id}/400`} alt={product.name} />
          <h4>{product.name}</h4>
          <p>${product.price.toFixed(2)}</p>
          <button onClick={e=>onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
export default ProductGrid;