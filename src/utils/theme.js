export const THEME_STORAGE_KEY = 'portfolio_theme';

export function getInitialTheme() {
  const saved = typeof window !== 'undefined' ? window.localStorage.getItem(THEME_STORAGE_KEY) : null;
  if (saved === 'dark' || saved === 'light') return saved;

  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return 'dark';
}

export function setTheme(theme) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  document.documentElement.setAttribute('data-theme', theme);
}

export function toggleTheme(currentTheme) {
  const next = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

