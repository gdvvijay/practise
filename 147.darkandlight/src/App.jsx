 import React, { useState } from 'react';
import Page from './Page';
import { ThemeContext } from './ThemeContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    // const newTheme = theme;
    setTheme(prev=>prev == 'light' ? 'dark' : 'light');

  };

  return (
    
   <ThemeContext.Provider value={[theme,setTheme]}>
     <div className={`app ${theme}`}>
      <Page onToggleTheme={toggleTheme} />
    </div>
   </ThemeContext.Provider>
  );
}

export default App;