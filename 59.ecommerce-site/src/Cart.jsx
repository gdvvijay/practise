import React from 'react';
import './Cart.css';

function Cart({ items, isOpen, onClose }) {
  const calculateTotal = () => {
    return items.reduce((total, item) => ((total + item.price)*item.quantity), 0).toFixed(2);
  };

  return (
    <>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <div className="cart-body">
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            items.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-details">
                  <p className="item-name">{item.name} ({item.size})</p>
                  <p className="item-info">Qty: {item.quantity}</p>
                </div>
                <p className="item-price">${item.price?.toFixed(2)}</p>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <h3>Total: ${calculateTotal()}</h3>
        </div>
      </div>
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}
    </>
  );
}

export default Cart;