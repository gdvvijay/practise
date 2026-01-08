import React from 'react';
import './Header.css';
const Header = ({ cartItemCount, onCartClick }) => (
  <header className="site-header">
    <div className="logo">MegaStore</div>
    <button className="cart-button" onClick={onCartClick}>Cart ({cartItemCount || '0'})</button>
  </header>
);
export default Header;