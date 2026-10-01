import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Theme } from '../hooks/useTheme';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl px-5 py-3 transition-all duration-300 flex items-center justify-between ${
          isScrolled
            ? 'glass-panel bg-[var(--glass-bg-heavy)] shadow-[var(--glass-shadow)] border-[var(--glass-border)] py-2.5'
            : 'glass-panel bg-[var(--glass-bg)] border-[var(--glass-border)]'
        }`}
      >
        {/* DS Monogram Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center border border-[var(--glass-border)] group-hover:border-[var(--accent-cyan)] transition-colors duration-300 shadow-[var(--glass-shadow)]">
            <span className="font-extrabold text-lg text-gradient font-sans">
              DS
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-tight text-[var(--text-primary)] font-sans group-hover:text-[var(--accent-cyan)] transition-colors">
              DION STACEY SELLAR
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
              SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1.5 glass-pill px-3 py-1.5 border border-[var(--glass-border)]">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 relative ${
                  isActive
                    ? 'text-[#ffffff] font-bold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-[var(--accent-cyan)] opacity-20 blur-sm" />
                )}
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-violet)] opacity-30 border border-white/30" />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right Section: Theme Toggle & Mobile Button */}
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Mobile Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden glass-button p-2.5 rounded-xl border border-[var(--glass-border)]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[var(--text-primary)]" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--text-primary)]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 p-6 glass-panel rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg-heavy)] shadow-2xl backdrop-blur-3xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-3 rounded-2xl text-sm font-semibold flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-[var(--glass-bg-hover)] border border-[var(--glass-border-hover)] text-[var(--accent-cyan)] font-bold'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--glass-bg)]'
                  }`}
                >
                  <span>{item.label}</span>
                  <Code2 className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
