import React from 'react';
import ThemedButton from './ThemedButton';

function Header() {
  // This component passes the prop down again
  return (
    <header className="header">
      <h2>My Themed App</h2>
      <ThemedButton />
    </header>
  );
}

export default Header;