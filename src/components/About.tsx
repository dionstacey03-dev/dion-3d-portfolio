import { Code, Cpu, Layers, Lightbulb, CheckCircle2 } from 'lucide-react';

const FOCUS_CARDS = [
  {
    title: 'Software Engineering',
    icon: Code,
    description: 'Designing clean algorithms, OOP architectures, relational database schemas, and maintainable software systems.',
    color: 'text-sky-400',
    borderColor: 'hover:border-sky-500/40'
  },
  {
    title: 'AI Development',
    icon: Cpu,
    description: 'Engineering local LLM workflows, speech pipelines, multimodal vision analysis, and autonomous AI desktop tools.',
    color: 'text-violet-400',
    borderColor: 'hover:border-violet-500/40'
  },
  {
    title: 'Full-Stack Development',
    icon: Layers,
    description: 'Building end-to-end web applications with React, Vite, FastAPI microservices, and modern responsive Liquid Glass interfaces.',
    color: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/40'
  },
  {
    title: 'Problem Solving',
    icon: Lightbulb,
    description: 'Translating complex real-world challenges into structured code solutions, efficient data structures, and practical software products.',
    color: 'text-amber-400',
    borderColor: 'hover:border-amber-500/40'
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-wider">
            BACKGROUND &amp; FOCUS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] font-mono">
            ENGINEERING PRACTICAL SOFTWARE &amp; AI INNOVATIONS
          </p>
        </div>

        {/* Main Content & Copy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Bio Glass Card */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 space-y-6">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-3">
              <span>Software Engineering Undergraduate</span>
            </h3>
            
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              I&apos;m a Software Engineering undergraduate passionate about building practical software and exploring how artificial intelligence can improve everyday digital experiences. I enjoy turning ideas into working applications using Python, JavaScript, React, and modern development tools.
            </p>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              My current work includes AI desktop assistants, student platforms, management systems, and interactive web applications. I actively build projects to strengthen my software engineering knowledge and explore technologies beyond university coursework.
            </p>

            {/* Quick Check Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[var(--glass-border)]">
              <div className="flex items-center gap-2.5 text-sm text-[var(--text-primary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan)] shrink-0" />
                <span>BSc (Hons) Plymouth University (NSBM)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[var(--text-primary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan)] shrink-0" />
                <span>Local LLM &amp; Multimodal AI Focus</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[var(--text-primary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan)] shrink-0" />
                <span>Python &amp; FastAPI Backend Systems</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[var(--text-primary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan)] shrink-0" />
                <span>React &amp; Modern UI/UX Engineering</span>
              </div>
            </div>
          </div>

          {/* Code/Terminal Glass Card Preview */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[var(--glass-border)] pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-[var(--text-muted)] text-[11px]">dion_stacey.py</span>
            </div>

            <pre className="text-[var(--text-secondary)] leading-relaxed overflow-x-auto">
              <code>{`class SoftwareEngineer:
    def __init__(self):
        self.name = "Dion Stacey Sellar"
        self.education = "BSc (Hons) Software Engineering"
        self.institution = "University of Plymouth (NSBM)"
        self.location = "Sri Lanka"
        self.focus = ["Python", "AI Systems", "React"]

    def current_mission(self):
        return "Building intelligent, production-ready software"

me = SoftwareEngineer()
print(me.current_mission())`}</code>
            </pre>

            <div className="pt-3 border-t border-[var(--glass-border)] flex items-center justify-between text-[11px] text-[var(--accent-cyan)]">
              <span>STATUS: Active Code Execution</span>
              <span>2026-2029</span>
            </div>
          </div>

        </div>

        {/* 4 Liquid Glass Focus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {FOCUS_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`glass-card p-6 space-y-4 flex flex-col justify-between ${card.borderColor}`}
              >
                <div className="space-y-3">
                  <div className={`w-12 h-12 rounded-2xl glass-panel flex items-center justify-center ${card.color} shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)]">
                    {card.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
