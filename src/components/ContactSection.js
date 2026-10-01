import React from 'react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <div className="contactGrid">
      <div className="contactInfo" data-sr>
        <h3 className="contactTitle">Let&apos;s build something.</h3>
        <p className="contactText">
          Full-stack + animation friendly UI. MERN-ready frontend with theme and responsive layout.
        </p>
        <div className="contactMeta">
          <div className="metaRow">
            <span className="metaLabel">Email</span>
            <span className="metaValue">
              <a href="mailto:ritiksahu915496@gmail.com" style={{ textDecoration: 'underline', color: 'var(--primary2)' }}>
                ritiksahu915496@gmail.com
              </a>
            </span>
          </div>
          <div className="metaRow">
            <span className="metaLabel">Location</span>
            <span className="metaValue">India</span>
          </div>
          <div className="metaRow">
            <span className="metaLabel">Focus</span>
            <span className="metaValue">MERN · AI · UI</span>
          </div>
          <div className="metaRow">
            <span className="metaLabel">Socials</span>
            <span className="metaValue">
              <div className="socialLinks" style={{ display: 'inline-flex', gap: '8px', marginTop: '4px' }}>
                <a
                  className="socialIcon"
                  href="https://github.com/ritiksahu0549"
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: '32px', height: '32px', borderRadius: '8px' }}
                >
                  <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                </a>
                <a
                  className="socialIcon"
                  href="https://www.linkedin.com/in/ritik-sahu-a20302310/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: '32px', height: '32px', borderRadius: '8px' }}
                >
                  <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div className="contactFormWrap" data-sr>
        <ContactForm />
      </div>
    </div>
  );
}

