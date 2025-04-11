import { useState } from 'react';
import './App.css';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <h1>Theme Toggle</h1>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
