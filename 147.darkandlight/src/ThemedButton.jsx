import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton({ onClick }) {
  const [theme] = useContext(ThemeContext);

  return (
    <button onClick={onClick} className={`themed-button theme-${theme}`}>
      Toggle Theme
    </button>
  );
}

export default ThemedButton;