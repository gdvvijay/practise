import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import './App.css';

function App() {
  const [theme, setTheme] = useState(()=>{
    const isAvailable=localStorage.getItem('theme')
    return isAvailable || 'light'
  });

  const toggleTheme = () => {
    
    setTheme(prev=>prev==='light'?'dark' : 'light');
  };

  useEffect(() => {
    // Side effect to update the body class and localStorage
    document.body.className = theme === 'dark'? 'dark-theme' : '';
    window.localStorage.setItem('theme', 'light');
  }, [theme]);


  return (
    <div className="container">
      <header>
        <ThemeToggle onToggle={toggleTheme} currentTheme={theme} />
      </header>
      <section className="content">
        <h1>Welcome to the App!</h1>
        <p>This is a sample application to demonstrate a buggy theme switcher. Use the button in the header to attempt to change the theme.</p>
        <button className="primary-button">Primary Action</button>
        <input type="text" placeholder="Enter some text..." />
      </section>
    </div>
  );
}

export default App;