import { useState, useEffect } from 'react';
import { ArrowRight, Github, Mail, ChevronDown, Sparkles, Terminal } from 'lucide-react';
import { HeroScene } from './3d/HeroScene';
import { Theme } from '../hooks/useTheme';

interface HeroProps {
  theme: Theme;
}

const ROTATING_ROLES = [
  'Software Developer',
  'AI Builder',
  'Full-Stack Enthusiast',
  'Software Engineering Undergraduate'
];

export function Hero({ theme }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Content Column (Hero Glass Panel) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill border border-[var(--glass-border)] w-fit shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
            <span className="text-xs font-mono tracking-wider font-semibold text-[var(--text-secondary)]">
              PLYMOUTH UNIVERSITY UNDERGRADUATE (NSBM)
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <div>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1] font-sans">
              DION STACEY <br />
              <span className="text-gradient">SELLAR</span>
            </h1>

            <div className="mt-4 flex items-center gap-3 text-lg sm:text-2xl font-semibold text-[var(--text-secondary)]">
              <Terminal className="w-6 h-6 text-[var(--accent-cyan)] shrink-0" />
              <div className="h-8 overflow-hidden relative inline-block">
                <span className="text-[var(--accent-cyan)] font-mono transition-all duration-500 block">
                  {ROTATING_ROLES[roleIndex]}
                </span>
              </div>
            </div>
          </div>

          {/* Main Statement */}
          <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            Building <strong className="text-[var(--text-primary)] font-semibold">intelligent software</strong>, <strong className="text-[var(--text-primary)] font-semibold">AI systems</strong> &amp; modern digital experiences. Focused on practical Python, full-stack web architectures, and local LLM agent innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="glass-button glass-button-primary px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2.5 group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://github.com/dionstacey03-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2.5"
            >
              <Github className="w-4 h-4 text-[var(--text-primary)]" />
              <span>GitHub</span>
            </a>

            <a
              href="#contact"
              className="glass-button px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2.5"
            >
              <Mail className="w-4 h-4 text-[var(--accent-cyan)]" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Highlights Mini Stats */}
          <div className="pt-6 border-t border-[var(--glass-border)] grid grid-cols-3 gap-4 text-left max-w-lg">
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] font-mono">2026–2029</div>
              <div className="text-xs text-[var(--text-muted)] font-mono">BSc (Hons) Study</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[var(--accent-cyan)] font-mono">JARVIS AI</div>
              <div className="text-xs text-[var(--text-muted)] font-mono">Flagship Desktop AI</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[var(--accent-violet)] font-mono">Full-Stack</div>
              <div className="text-xs text-[var(--text-muted)] font-mono">Python &amp; React</div>
            </div>
          </div>

        </div>

        {/* Right 3D Scene Column */}
        <div className="lg:col-span-5 h-[420px] sm:h-[500px] w-full relative">
          <div className="w-full h-full glass-panel rounded-3xl border border-[var(--glass-border)] shadow-[var(--glass-shadow)] p-2 relative overflow-hidden">
            <HeroScene theme={theme} />
            <div className="absolute top-4 right-4 glass-pill px-3 py-1 text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1.5 pointer-events-none">
              <Sparkles className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
              <span>3D INTERACTIVE WORKSTATION</span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[var(--accent-cyan)]" />
      </a>
    </section>
  );
}
