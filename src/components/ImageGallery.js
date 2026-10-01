import React, { useEffect, useMemo, useState } from 'react';

// Animated gallery carousel (placeholders by default).
const defaultItems = [
  {
    title: 'AI Career Assistant',
    img: '/images/ai_career_assistant.png',
    demoUrl: 'https://ai-career-assistant-roan.vercel.app/',
    githubUrl: 'https://github.com/ritiksahu0549/ai-career-assistant',
  },
  {
    title: 'Code Compiler',
    img: '/images/code_compiler.png',
    demoUrl: 'https://code-compiler-rosy.vercel.app/',
    githubUrl: 'https://github.com/ritiksahu0549/code-compiler',
  },
  {
    title: 'Smart Parking System',
    img: '/images/smart_parking_system.png',
    demoUrl: 'https://smart-parking-system-rho-steel.vercel.app/',
    githubUrl: 'https://github.com/ritiksahu0549/smart-parking-system',
  },
  {
    title: 'Singhasth (Kumbh Portal)',
    img: '/images/sinhasth.png',
    demoUrl: 'https://singhasth.vercel.app/',
    githubUrl: 'https://github.com/ritiksahu0549/singhasth',
  },
];

export default function ImageGallery({ items = defaultItems }) {
  const [index, setIndex] = useState(0);
  const total = items.length;

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (reduce) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 4200);
    return () => clearInterval(t);
  }, [total]);

  const active = useMemo(() => items[index], [items, index]);

  return (
    <section className="gallery" aria-label="Image gallery">
      <div className="galleryCard" data-sr>
        <div className="galleryBg" style={{ backgroundImage: `url(${active.img})` }} />
        <div className="galleryOverlay" />
        <div className="galleryContent">
          <div className="galleryKicker">Featured Project</div>
          <h3 className="galleryTitle">{active.title}</h3>
          <p className="gallerySubtitle">Dark/Light theme supported · Animated & responsive</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>
            {active.demoUrl && active.demoUrl !== '#' && (
              <a
                href={active.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btnPrimary"
                style={{ padding: '8px 18px', fontSize: '0.85rem' }}
              >
                Live Demo ↗
              </a>
            )}
            <a
              href={active.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btnGhost"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="galleryDots" aria-label="Carousel navigation">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`galleryDot ${i === index ? 'isActive' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

