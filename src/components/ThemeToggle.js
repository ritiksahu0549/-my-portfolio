import React from 'react';

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="themeToggle"
      onClick={onToggle}
      aria-label="Toggle theme"
      type="button"
    >
      <span className="themeToggleIcon" aria-hidden="true">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
      <span className="themeToggleText">{theme === 'dark' ? 'Dark' : 'Light'} Mode</span>
    </button>
  );
}


