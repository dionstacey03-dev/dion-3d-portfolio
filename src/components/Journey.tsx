import { JOURNEY_MILESTONES } from '../data/timeline';
import { Milestone, ArrowDown } from 'lucide-react';

export function Journey() {
  return (
    <section id="journey" className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span>CHRONOLOGICAL TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] font-mono">
            PROGRESSION FROM COMPUTER SCIENCE FOUNDATIONS TO AI &amp; FULL-STACK ENGINEERING
          </p>
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-[var(--glass-border-hover)] space-y-12">
          {JOURNEY_MILESTONES.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full glass-panel border-2 border-[var(--accent-cyan)] bg-[var(--background)] flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)]" />
              </div>

              {/* Milestone Glass Card */}
              <div className="glass-card p-6 sm:p-8 space-y-3 transition-all duration-300 hover:border-[var(--glass-border-hover)]">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--glass-border)] pb-3">
                  <span className="font-mono text-sm font-black text-[var(--accent-cyan)]">
                    {item.year}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold glass-pill text-[var(--accent-violet)] border border-[var(--glass-border)]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] font-sans">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Arrow linking to next step */}
              {idx < JOURNEY_MILESTONES.length - 1 && (
                <div className="flex justify-center -mb-8 mt-2 text-[var(--text-muted)] opacity-40">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
