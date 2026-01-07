 import React, { useState } from 'react';
import Header from './Header';
import ProductPage from './ProductPage';
import CartSidebar from './CartSidebar';
import './App.css';

const MOCK_PRODUCT_ID = 'abc-123';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product, options) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === options.size
    );

    if (existingItem) {
      // existingItem.quantity += 1;
      setCartItems(prev=>prev.map(item=>item.id == existingItem.id ? {...item,quantity:item.quantity + 1}:item));
    } else {
      const newItem = {
        ...product,
        size: options.size,
        color: options.color,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleRemoveFromCart = (cartItemId) => {
    setCartItems(cartItems.slice(cartItemId, 1));
  };
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="app-container">
      <Header cartItemCount={cartItems} onCartClick={toggleCart} />
      <main>
        <ProductPage
          productId={MOCK_PRODUCT_ID}
          onAddToCart={handleAddToCart}
        />
      </main>
      <CartSidebar
        items={cartItems}
        isOpen={isCartOpen}
        onClose={toggleCart}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;