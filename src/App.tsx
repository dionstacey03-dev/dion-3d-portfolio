import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useTheme } from './hooks/useTheme';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { BuildingNext } from './components/BuildingNext';
import { Journey } from './components/Journey';
import { Education } from './components/Education';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-500 overflow-x-hidden">

      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && <Loader key="portfolio-loader" />}
      </AnimatePresence>

      {/* Portfolio */}
      {!loading && (
        <>
          {/* Desktop Custom Liquid Cursor */}
          <CustomCursor />

          {/* Atmospheric Background */}
          <div className="bg-ambient-mesh">
            <div className="blob-cyan" />
            <div className="blob-violet" />
          </div>

          <div className="bg-grid-pattern" />

          {/* Navigation */}
          <Navbar
            theme={theme}
            onToggleTheme={toggleTheme}
          />

          {/* Main Portfolio */}
          <main className="relative z-10">
            <Hero theme={theme} />
            <About />
            <Skills theme={theme} />
            <Projects theme={theme} />
            <BuildingNext />
            <Journey />
            <Education />
            <GitHubSection />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}

    </div>
  );
}