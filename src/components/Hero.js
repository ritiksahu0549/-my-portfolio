import React, { useEffect, useMemo, useState } from 'react';

function useTypewriter(words, ms = 45) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) {
          setDeleting(true);
          return;
        }
      } else {
        const next = word.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, ms);

    return () => clearTimeout(timeout);
  }, [words, wordIndex, text.length, deleting, ms]);

  return text;
}

export default function Hero() {
  const words = useMemo(
    () => ['Full-Stack Developer', 'MERN Stack Specialist', 'AI Assistant Creator', 'Software Engineer'],
    []
  );
  const typed = useTypewriter(words, 42);

  return (
    <header className="hero" id="home">
      <div className="heroInner">
        <div className="heroLeft">
          <div className="heroPill" data-sr>
            <span className="heroPillDot" /> Portfolio · Responsive · Premium UI
          </div>
          <h1 className="heroTitle" data-sr>
            Hi, I&apos;m <span className="heroAccent">Ritik Sahu</span>
          </h1>
          <p className="heroSubtitle" data-sr>
            I build <span className="heroTyping">{typed}</span>
            <span className="heroCursor" aria-hidden="true">|</span>
          </p>
          <div className="heroActions" data-sr>
            <a className="btn btnPrimary" href="#projects">View Projects</a>
            <a className="btn btnGhost" href="#contact">Contact Me</a>
            
            <div className="socialLinks" style={{ marginLeft: 10 }}>
              <a
                className="socialIcon"
                href="https://github.com/ritiksahu0549"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
              >
                <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
              <a
                className="socialIcon"
                href="https://www.linkedin.com/in/ritik-sahu-a20302310/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
              >
                <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                className="socialIcon"
                href="mailto:ritiksahu915496@gmail.com"
                aria-label="Email Me"
              >
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </div>
          <div className="heroBadges" data-sr>
            <div className="badge">⚡ Animated Web design</div>
            <div className="badge">🌓 Theme Switcher</div>
            <div className="badge">📱 Mobile Responsive</div>
          </div>
        </div>

        <div className="heroRight" data-sr>
          <div className="heroCard">
            <div className="heroCardTop">Current Focus</div>
            <div className="heroCardMid">
              <div className="stat">
                <div className="statNum">4+</div>
                <div className="statLabel">Core Projects</div>
              </div>
              <div className="stat">
                <div className="statNum">MERN</div>
                <div className="statLabel">Full Stack</div>
              </div>
            </div>
            <div className="heroCardBottom">
              <div className="scanLine" />
              <div className="heroCardNote">Scroll down to explore my work</div>
            </div>
          </div>
        </div>
      </div>

      <div className="heroGlow" aria-hidden="true" />
    </header>
  );
}

