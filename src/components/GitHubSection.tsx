import { Github, ExternalLink, Code2, GitBranch, GitCommit } from 'lucide-react';

export function GitHubSection() {
  return (
    <section className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-wider">
            OPEN SOURCE &amp; REPOSITORIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Building in <span className="text-gradient">Public</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] font-mono">
            EXPLORE SOURCE CODE, REPOSITORIES &amp; EXPERIMENTS ON GITHUB
          </p>
        </div>

        {/* Developer GitHub Glass Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-[var(--glass-border-hover)] space-y-8 relative overflow-hidden">
            
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--glass-border)] pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-[var(--text-primary)] shadow-md">
                  <Github className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] font-sans">
                    dionstacey03-dev
                  </h3>
                  <p className="text-xs font-mono text-[var(--accent-cyan)] mt-0.5">
                    github.com/dionstacey03-dev
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/dionstacey03-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button glass-button-primary px-6 py-3 text-xs font-bold flex items-center gap-2"
              >
                <span>View GitHub Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Content Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="glass-panel p-5 rounded-2xl border border-[var(--glass-border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-cyan)]">
                  <Code2 className="w-4 h-4" />
                  <span>PRIMARY STACK</span>
                </div>
                <div className="text-base font-bold text-[var(--text-primary)]">Python &amp; React</div>
                <p className="text-xs text-[var(--text-muted)]">AI tools, local LLM integrations, and modern frontend platforms.</p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-[var(--glass-border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-violet)]">
                  <GitBranch className="w-4 h-4" />
                  <span>FLAGSHIP REPO</span>
                </div>
                <div className="text-base font-bold text-[var(--text-primary)]">JARVIS AI Assistant</div>
                <p className="text-xs text-[var(--text-muted)]">Voice interaction, local LLMs, FastAPI backend, and React dashboard.</p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-[var(--glass-border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-emerald)]">
                  <GitCommit className="w-4 h-4" />
                  <span>DEVELOPMENT STYLE</span>
                </div>
                <div className="text-base font-bold text-[var(--text-primary)]">Clean Architecture</div>
                <p className="text-xs text-[var(--text-muted)]">Data-driven components, modular design, and robust API endpoints.</p>
              </div>

            </div>

            {/* Note */}
            <div className="text-center pt-2">
              <span className="text-xs font-mono text-[var(--text-muted)]">
                All major projects, AI experiments, and full-stack source code are regularly published to GitHub.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
