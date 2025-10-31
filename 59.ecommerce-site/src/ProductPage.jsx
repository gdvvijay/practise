import React, { useState, useEffect } from 'react';
import './ProductPage.css';

// --- Mock API Fetch Function ---
// In a real app, this would be a network request.
const fetchProductById = (productId) => {
  console.log('Fetching product data...');
  const mockProduct = {
    id: productId,
    name: 'Classic Cotton T-Shirt',
    price: 25.00,
    description: 'A soft, durable, and stylish t-shirt made from 100% premium cotton. Perfect for any occasion.',
    image: 'https://men-tshirt.com/wp-content/uploads/Fendi-Tshirts-for-men-999931874_800x800.jpg', // Placeholder image
    options: {
      colors: ['Black', 'White', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL'],
    },
  };
  return new Promise(resolve => setTimeout(() => resolve(mockProduct), 500));
};
// --------------------------------

const ProductPage = ({ productId, onAddToCart }) => {
  const [product, setProduct] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({ color: 'Black', size:null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductById(productId)
      .then(data => {
        setProduct(data);
        setIsLoading(false);
      });
  },[]);

  const handleOptionChange = (optionType, value) => {
    setSelectedOptions(prev=>({...prev, [optionType]: value }));
  };

  if (isLoading) {
    return <p>Loading product...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>

        <div className="options">
          <div className="option-group">
            <label>Color:</label>
            {product.options.colors.map(color => (
              <button
                key={color}
                className={`option-btn ${selectedOptions.color === color ? 'selected' : ''}`}
                onClick={() => handleOptionChange('color', color)}
              >
                {color}
              </button>
            ))}
          </div>
          <div className="option-group">
            <label>Size:</label>
            {product.options.sizes.map(size => (
              <button
                key={size}
                className={`option-btn ${selectedOptions.size === size ? 'selected' : ''}`}
                onClick={() => handleOptionChange('size', size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          className="add-to-cart-btn"
          onClick={(e) => onAddToCart(product,selectedOptions,e)}
          disabled={!selectedOptions.size}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;