import React, { useState, useEffect } from 'react';
import './ProductPage.css';

const fetchProduct = (productId) => {
  console.log('API: Fetching product data...');
  return new Promise(resolve => setTimeout(() => resolve({
    id: productId,
    name: 'Classic Cotton T-Shirt',
    price: 25.00,
    image: 'https://i.imgur.com/z264hbh.jpeg',
    options: {
      colors: ['Black', 'White', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
  }), 500));
};

function ProductPage({ productId, onAddToCart }) {
  const [product, setProduct] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({ color: 'Black', size:'S' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProduct(productId)
      .then(data => {
        setProduct(data);
      });
  },[]);

  const handleOptionChange = (optionType, value) => {
    setSelectedOptions(prev=>({...prev, [optionType]: value }));
  };
  
  if (!Object.keys(product).length) return <p>Loading...</p>;

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <div className="options">
          <div className="option-group">
            <label>Color:</label>
            {product.options.colors.map(color => (
              <button
                key={color}
                className={`option-btn ${selectedOptions.color === color ? 'selected' : ''}`}
                onClick={() => handleOptionChange('color', color)}
              >{color}</button>
            ))}
          </div>
          <div className="option-group">
            <label>Size:</label>
            {product.options.sizes.map(size => (
              <button
                key={size}
                className={`option-btn ${selectedOptions.size === size ? 'selected' : ''}`}
                onClick={() => handleOptionChange('size', size)}
              >{size}</button>
            ))}
          </div>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product,selectedOptions)}
        >Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductPage;