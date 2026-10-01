import React, { useEffect, useMemo, useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import ImageGallery from './components/ImageGallery';
import AboutSection from './components/AboutSection';
import Section from './components/Section';
import ProjectsGrid from './components/ProjectsGrid';
import SkillStack from './components/SkillStack';
import FeatureList from './components/FeatureList';
import GithubActivity from './components/GithubActivity';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import { getInitialTheme, setTheme, toggleTheme } from './utils/theme';
import { useScrollReveal } from './utils/useScrollReveal';

export default function App() {
  const [theme, setThemeState] = useState('dark');

  useEffect(() => {
    const initial = getInitialTheme();
    setThemeState(initial);
    setTheme(initial);
  }, []);

  useScrollReveal();

  const projects = useMemo(
    () => [
      {
        title: 'AI Career Assistant',
        description: 'AI-driven roadmap, resume guidance and interview practice UI (MERN-ready).',
        emoji: '🤖',
        tags: ['React', 'Node/Express', 'MongoDB', 'LLM-ready UI', 'Auth-ready'],
        demoUrl: 'https://ai-career-assistant-roan.vercel.app/',
        githubUrl: 'https://github.com/ritiksahu0549/ai-career-assistant',
      },
      {
        title: 'Code Compiler',
        description: 'Language selection + run/compile UX with console and test-case flow design.',
        emoji: '🧑‍💻',
        tags: ['React', 'Monaco-like UX', 'REST APIs', 'Sandbox-ready'],
        demoUrl: 'https://code-compiler-rosy.vercel.app/',
        githubUrl: 'https://github.com/ritiksahu0549/code-compiler',
      },
      {
        title: 'Smart Parking System',
        description: 'IoT-enabled slot booking, real-time vacancy tracking, QR entry pass, and parking analytics.',
        emoji: '🚗',
        tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Real-time UX'],
        demoUrl: 'https://smart-parking-system-rho-steel.vercel.app/',
        githubUrl: 'https://github.com/ritiksahu0549/smart-parking-system',
      },
      {
        title: 'Singhasth (Kumbh Portal)',
        description: 'Event portal UI with schedules, highlights, and animated image gallery section.',
        emoji: '🕉️',
        tags: ['React', 'Content Sections', 'Responsive', 'Gallery UI'],
        demoUrl: 'https://singhasth.vercel.app/',
        githubUrl: 'https://github.com/ritiksahu0549/singhasth',
      },
    ],
    []
  );

  function onToggleTheme() {
    setThemeState((cur) => {
      const next = toggleTheme(cur);
      return next;
    });
  }

  return (
    <div>
      <Navbar />
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '10px 18px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>

      <Hero />
      <ImageGallery />

      <Section id="about" kicker="About Me" title="Who I Am">
        <AboutSection />
      </Section>

      <Section id="projects" kicker="Projects" title="Built with MERN-ready UI">
        <ProjectsGrid projects={projects} />
      </Section>

      <Section id="skills" kicker="Skills" title="Full-stack + AI UX focus">
        <SkillStack />
        <div style={{ height: 18 }} />
        <FeatureList />
      </Section>

      <Section id="github" kicker="Open Source" title="GitHub Contributions & Activity">
        <GithubActivity />
      </Section>

      <Section id="contact" kicker="Contact" title="Let&apos;s collaborate">
        <ContactSection />
      </Section>

      <Footer />
    </div>
  );
}

