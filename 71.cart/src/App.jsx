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
console.log(cartItems)
  const handleAddToCart = (productToAdd) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find(item => item.id === productToAdd.id);
    if (existingItem) {
      // Logic to increase quantity of an existing item
      // const newCart = cartItems;
      // existingItem.quantity += 1;
      setCartItems(prev=>{
        return prev.map((items)=>items.id == productToAdd.id ? ({...items,quantity:items.quantity + 1} ): items)
      });
    } else {
      // Logic to add a new item to the cart
      setCartItems(prev=>[...prev,productToAdd])
    }
  };

  const handleRemoveFromCart = (itemToRemove) => {
    // Logic to remove an item from the cart
    const newCart = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(newCart)
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