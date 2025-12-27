import { Link } from "react-router-dom";
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar({ onThemeChange }) {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDark]);

  const toggleMode = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    const theme = newTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (onThemeChange) onThemeChange(theme);
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li>
          <a 
            href="https://drive.google.com/file/d/1qkQezYFL6oWCKmncJamiX1mpdazDorwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      
      <div className="mode-toggle-wrapper">
        <Sun className={`icon sun-icon ${!isDark ? 'active' : ''}`} size={20} />
        <button
          onClick={toggleMode}
          className="mode-toggle"
          aria-label="Toggle dark mode"
        >
          <span className={`toggle-slider ${isDark ? 'active' : ''}`}></span>
        </button>
        <Moon className={`icon moon-icon ${isDark ? 'active' : ''}`} size={20} />
      </div>
    </nav>
  );
}