 import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

const initialProducts = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 40 },
  { id: 3, name: 'Keyboard', price: 80 },
  { id: 4, name: 'Monitor', price: 300 },
];

function App() {
  const [products] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productToAdd) => {
    
    const existingItem = cartItems.find(item => item.id === productToAdd.id);
    if (existingItem) {
      
      // const newCart = cartItems;
      // existingItem.quantity += 1;
      setCartItems(prev=>prev.map(item=>item.id == existingItem.id ? {...item,quantity:item.quantity + 1} : item));
    } else {
      setCartItems(prev=>[...prev,{...productToAdd,quantity:1}])
    }
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems(prev=>prev.filter(item => item.id !== itemToRemove.id))
  };


  return (
    <div className="container">
      <header>
        <h1>Buggy Shopping Cart</h1>
      </header>
      <div className="main-content">
        <ProductList
          products={products}
          onAddToCart={handleAddToCart}
        />
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </div>
  );
}

export default App;