import { EDUCATION_DATA } from '../data/timeline';
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-wider">
            ACADEMIC QUALIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Education &amp; <span className="text-gradient">Academics</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] font-mono">
            UNIVERSITY OF PLYMOUTH SOFTWARE ENGINEERING PROGRAMME
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-12 space-y-8 border border-[var(--glass-border-hover)] relative overflow-hidden">
            
            {/* Top Badge & Duration */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--glass-border)] pb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-[var(--accent-cyan)] shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-wider">
                    {EDUCATION_DATA.status}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-sans">
                    {EDUCATION_DATA.degree}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-pill font-mono text-xs font-semibold text-[var(--text-primary)] border border-[var(--glass-border)]">
                <Calendar className="w-4 h-4 text-[var(--accent-cyan)]" />
                <span>{EDUCATION_DATA.period}</span>
              </div>
            </div>

            {/* Institution & Delivery Partner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-5 rounded-2xl border border-[var(--glass-border)] space-y-2">
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase">Awarding Institution</div>
                <div className="text-lg font-bold text-[var(--text-primary)]">{EDUCATION_DATA.institution}</div>
                <div className="text-xs text-[var(--text-secondary)] font-mono">United Kingdom</div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-[var(--glass-border)] space-y-2">
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase">Delivered Through</div>
                <div className="text-lg font-bold text-[var(--accent-cyan)]">{EDUCATION_DATA.deliveryPartner}</div>
                <div className="text-xs text-[var(--text-secondary)] font-mono flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                  <span>Pitipana, Homagama, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Core Areas of Study */}
            <div className="space-y-4 pt-4">
              <h4 className="text-sm font-mono uppercase text-[var(--text-muted)] tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[var(--accent-cyan)]" />
                <span>Core Areas of Academic Study</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EDUCATION_DATA.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-4 rounded-xl border border-[var(--glass-border)] text-xs text-[var(--text-primary)] font-semibold flex items-center gap-3"
                  >
                    <Award className="w-4 h-4 text-[var(--accent-violet)] shrink-0" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
