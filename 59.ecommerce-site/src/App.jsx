import React, { useState } from 'react';
import Header from './Header';
import ProductPage from './ProductPage';
import Cart from './Cart';
import './App.css';

const PRODUCT_ID = '123-abc'; // A mock product ID for fetching

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
   
  const handleAddToCart = (product, options,e) => {
    
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === options.size
    );
    
    if (existingItem) {
      setCartItems(prev=>{
       return prev.map((item)=>{
          return(
            item.id === product.id && item.size === options.size ? {...item,quantity:item.quantity + 1} : item
          )
        })
      });
    } else {
      const newItem = {
        ...product,
        size: options?.size,
        color: options?.color,
        quantity: 1,
      };
      setCartItems(prev=>[...prev, newItem]);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

 const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="app-container">
      <Header onCartClick={toggleCart} cartCount={totalCartItems}/>
      <main>
        <ProductPage
          productId={PRODUCT_ID}
          onAddToCart={handleAddToCart}
        />
      </main>
      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={toggleCart}
      />
    </div>
  );
}

export default App;