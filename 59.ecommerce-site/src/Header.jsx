import React from 'react';
import './Header.css';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="site-header">
      <div className="logo">StyleSphere</div>
      <button className="cart-button" onClick={onCartClick}>
        Cart ({cartCount || 0})
      </button>
    </header>
  );
};

export default Header;