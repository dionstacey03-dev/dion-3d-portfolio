import { BUILDING_NEXT_PROJECTS } from '../data/buildingNext';
import { Rocket } from 'lucide-react';

export function BuildingNext() {
  return (
    <section className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-[var(--accent-violet)] uppercase tracking-wider">
            PROJECT PIPELINE &amp; ROADMAP
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Building <span className="text-gradient">Next</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] font-mono">
            PLANNED CONCEPTS &amp; UPCOMING SOFTWARE ENGINEERING PROJECTS
          </p>
        </div>

        {/* 15 Planned Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUILDING_NEXT_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="glass-card p-6 space-y-4 flex flex-col justify-between border border-[var(--glass-border)] hover:border-[var(--accent-violet)] transition-all duration-300 group"
            >
              <div className="space-y-3">
                
                {/* Header line: Number + Status */}
                <div className="flex items-center justify-between border-b border-[var(--glass-border)] pb-3">
                  <span className="font-mono text-xl font-black text-[var(--accent-cyan)] group-hover:text-[var(--accent-violet)] transition-colors">
                    {proj.number}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold ${
                      proj.status === 'In Development'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-slate-500/20 text-[var(--text-muted)] border border-slate-500/30'
                    }`}
                  >
                    {proj.status === 'In Development' ? '● In Development' : '○ Planned Concept'}
                  </span>
                </div>

                {/* Title & Category */}
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-sans group-hover:text-[var(--accent-cyan)] transition-colors">
                    {proj.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[var(--accent-violet)]">
                    {proj.category}
                  </span>
                </div>

                {/* Concept text */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {proj.concept}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-3 border-t border-[var(--glass-border)] flex flex-wrap gap-1.5">
                {proj.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-[var(--text-muted)] glass-pill"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="glass-panel p-6 rounded-2xl text-center max-w-2xl mx-auto space-y-2 border border-[var(--glass-border)]">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[var(--accent-cyan)]">
            <Rocket className="w-4 h-4" />
            <span>TRANSPARENT DEVELOPMENT PIPELINE</span>
          </div>
          <p className="text-xs text-[var(--text-muted)] font-mono">
            These concepts represent upcoming planned software projects. None are marked completed until full code verification &amp; deployment.
          </p>
        </div>

      </div>
    </section>
  );
}
