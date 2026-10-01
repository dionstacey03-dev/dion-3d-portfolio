import { Github, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-[var(--glass-border)] relative z-10 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="flex flex-col text-center md:text-left space-y-1">
          <div className="font-extrabold text-base text-[var(--text-primary)] font-sans flex items-center justify-center md:justify-start gap-2">
            <span>DION STACEY SELLAR</span>
            <span className="text-[10px] font-mono text-[var(--accent-cyan)] px-2 py-0.5 rounded-md glass-pill">
              DS
            </span>
          </div>
          <div className="text-xs text-[var(--text-muted)] font-mono">
            BSc (Hons) Software Engineering Undergraduate — University of Plymouth (NSBM)
          </div>
        </div>

        {/* Links & Socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/dionstacey03-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/dion-stacey-sellar-1066a7339/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent-blue)] flex items-center gap-1.5 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={scrollToTop}
            className="glass-button p-2.5 rounded-xl text-xs font-mono flex items-center gap-1.5 text-[var(--text-primary)] hover:text-[var(--accent-cyan)]"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline">Top</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs font-mono text-[var(--text-muted)] text-center md:text-right">
          &copy; {currentYear} Dion Stacey Sellar. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
