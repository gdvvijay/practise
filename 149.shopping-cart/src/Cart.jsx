import React from 'react';
import './Cart.css';

function Cart({ cartItems, onRemoveFromCart }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} (Qty: {item.quantity})</span>
              <button onClick={()=>onRemoveFromCart(item)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;