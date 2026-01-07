import React from 'react';
import ThemedButton from './ThemedButton';
import Section from './Section';

function Header({ onToggleTheme }) {
  
  return (
   <>
     <header className="header">
      <h2>My Themed App</h2>
      <ThemedButton onClick={onToggleTheme} />
    </header>
    <main>
        <Section/>
    </main>
   </>
  );
}

export default Header;