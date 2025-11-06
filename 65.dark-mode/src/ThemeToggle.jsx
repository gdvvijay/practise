import React from 'react';

function ThemeToggle({ onToggle, currentTheme }) {
  return (
    <button onClick={onToggle} className="theme-toggle-button">
      Currently in {currentTheme} mode
    </button>
  );
}

export default ThemeToggle;