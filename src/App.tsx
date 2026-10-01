import { useState, useEffect } from 'react';
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
    // Initial loading timer to ensure 3D canvas and resources initialize cleanly
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-500 overflow-hidden">
      
      {/* Loading Overlay */}
      {loading && <Loader />}

      {/* Desktop Custom Liquid Cursor */}
      <CustomCursor />

      {/* Atmospheric Mesh & Background Blobs */}
      <div className="bg-ambient-mesh">
        <div className="blob-cyan" />
        <div className="blob-violet" />
      </div>
      <div className="bg-grid-pattern" />

      {/* Fixed Navbar */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
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

      {/* Minimal Footer */}
      <Footer />

    </div>
  );
}
