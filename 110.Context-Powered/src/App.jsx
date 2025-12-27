import React, { useState } from 'react';
import Page from './Page';
import { ThemeContext } from './ThemeContext'; // The context is defined in another file
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    // Logic to toggle between 'light' and 'dark'
    const newTheme = theme == 'light' ? 'dark' : 'light'; // This is a bug
    setTheme(newTheme);
  };

  return (
    // The Provider is missing here, so no value is passed down.
   <ThemeContext.Provider value={[theme,toggleTheme]}>
     <div className={`app ${theme}`}>
      <Page />
    </div>
   </ThemeContext.Provider>
  );
}

export default App;