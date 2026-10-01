import { SKILL_CATEGORIES } from '../data/skills';
import { TechOrbit } from './3d/TechOrbit';
import { Theme } from '../hooks/useTheme';
import { Cpu, Terminal, Sparkles } from 'lucide-react';

interface SkillsProps {
  theme: Theme;
}

export function Skills({ theme }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-wider">
            TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] font-mono">
            STACK &amp; TOOLS FOR BUILDING AI-POWERED &amp; FULL-STACK APPLICATIONS
          </p>
        </div>

        {/* 3D Tech Orbit Constellation Banner */}
        <div className="w-full">
          <TechOrbit theme={theme} />
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="glass-card p-6 sm:p-8 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[var(--glass-border)] pb-3">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2.5">
                    {cat.title === 'Artificial Intelligence' && <Cpu className="w-5 h-5 text-[var(--accent-violet)]" />}
                    {cat.title === 'Programming' && <Terminal className="w-5 h-5 text-[var(--accent-cyan)]" />}
                    {cat.title !== 'Artificial Intelligence' && cat.title !== 'Programming' && (
                      <Sparkles className="w-5 h-5 text-[var(--accent-blue)]" />
                    )}
                    <span>{cat.title}</span>
                  </h3>
                </div>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Capsules */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all duration-300 ${
                        skill.highlight
                          ? 'glass-panel bg-[var(--glass-bg-hover)] border-[var(--glass-border-hover)] text-[var(--accent-cyan)] shadow-sm'
                          : 'glass-pill text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
