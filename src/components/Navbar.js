import React, { useEffect, useMemo, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

function scrollToHash(hash) {
  const el = document.querySelector(hash);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = useMemo(() => navItems, []);

  return (
    <nav className={`navbar ${scrolled ? 'isScrolled' : ''}`} aria-label="Primary">
      <div className="navbarInner">
        <a
          href="#home"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            scrollToHash('#home');
          }}
        >
          <span className="brandMark" aria-hidden="true">
            R
          </span>
          Ritik
        </a>

        <button
          className={`burger ${open ? 'isOpen' : ''}`}
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navLinks ${open ? 'isOpen' : ''}`}>
          {items.map((it) => (
            <a
              key={it.href}
              className="navLink"
              href={it.href}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                scrollToHash(it.href);
              }}
            >
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

