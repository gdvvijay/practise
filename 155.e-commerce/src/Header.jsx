import React from 'react';
import './Header.css';

const Header = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="site-header">
      <div className="logo">StyleSphere</div>
      <button className="cart-button" onClick={onCartClick}>
        Cart ({cartItemCount.length})
      </button>
    </header>
  );
};

export default Header;