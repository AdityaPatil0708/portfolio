import { Link } from "react-router-dom";
import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  const toggleMode = () => {
    setIsDark(!isDark);
    
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li>
          <a 
            href="https://drive.google.com/file/d/1OzS5iCJWlJKqsmrREoIbMyrxCWRNTS0B/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </li>
      </ul>
      
      {/* Mode Toggle Button */}
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