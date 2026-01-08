import React from 'react';
import './CartSidebar.css';
function CartSidebar({ items, isOpen, onClose, onRemove }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <h3>Your Cart</h3>
        <button onClick={onClose} className="close-btn">&times;</button>
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <button onClick={() => onRemove(item.id)} className="remove-btn">-</button>
            </div>
          ))}
        </div>
        <div className="cart-total">Total: ${total.toFixed(2)}</div>
      </div>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
    </>
  );
}
export default CartSidebar;