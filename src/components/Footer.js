import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="footer">
      <div className="footerInner">
        {/* Main Footer Content Grid */}
        <div className="footerMainGrid">
          {/* Brand & About */}
          <div className="footerCol footerBrandCol">
            <div className="footerBrandHeader">
              <span className="brandMark" aria-hidden="true">
                R
              </span>
              <span className="footerBrandName">Ritik Sahu</span>
            </div>
            <p className="footerTagline">
              MERN Stack Developer building full-featured web applications, IoT solutions, and modern interactive UIs with clean code and scalable architecture.
            </p>
            <div className="footerAvailability">
              <span className="availabilityDot" />
              <span>Available for new projects & opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footerCol">
            <h4 className="footerColTitle">Navigation</h4>
            <ul className="footerLinksList">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills & Stack</a></li>
              <li><a href="#github">GitHub Activity</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Featured Projects */}
          <div className="footerCol">
            <h4 className="footerColTitle">Projects</h4>
            <ul className="footerLinksList">
              <li>
                <a
                  href="https://ai-career-assistant-roan.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AI Career Assistant ↗
                </a>
              </li>
              <li>
                <a
                  href="https://code-compiler-rosy.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Compiler ↗
                </a>
              </li>
              <li>
                <a
                  href="https://smart-parking-system-rho-steel.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Smart Parking System ↗
                </a>
              </li>
              <li>
                <a
                  href="https://singhasth.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Singhasth Portal ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="footerCol">
            <h4 className="footerColTitle">Connect</h4>
            <div className="footerContactInfo">
              <div className="footerContactItem">
                <span className="footerContactLabel">Email</span>
                <a
                  href="mailto:ritiksahu915496@gmail.com"
                  className="footerContactLink"
                >
                  ritiksahu915496@gmail.com
                </a>
              </div>
              <div className="footerContactItem">
                <span className="footerContactLabel">Location</span>
                <span style={{ color: 'var(--text)', fontWeight: 600 }}>India</span>
              </div>
            </div>

            <div className="socialLinks" style={{ marginTop: '16px' }}>
              <a
                className="socialIcon"
                href="https://github.com/ritiksahu0549"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
              <a
                className="socialIcon"
                href="https://www.linkedin.com/in/ritik-sahu-a20302310/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                className="socialIcon"
                href="mailto:ritiksahu915496@gmail.com"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to top */}
        <div className="footerBottomBar">
          <p className="footerCopy">
            © {currentYear} <strong>Ritik Sahu</strong> · Designed & Built with MERN Stack
          </p>
          <button
            type="button"
            className="footerBackToTop"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
