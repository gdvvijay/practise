import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton() {
  const [theme,onToggleTheme] = useContext(ThemeContext); // No context value is received

  return (
    <button onClick={onToggleTheme} className={`themed-button theme-${theme}`}>
      Toggle Theme
    </button>
  );
}

export default ThemedButton;