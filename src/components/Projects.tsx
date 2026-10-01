import { useState, useMemo } from 'react';
import { Search, Github, ExternalLink, Sparkles, Cpu, Maximize2 } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { JarvisCore3D } from './3d/JarvisCore3D';
import { Theme } from '../hooks/useTheme';

interface ProjectsProps {
  theme: Theme;
}

const CATEGORIES = ['All', 'AI', 'Web', 'Full Stack', 'Management Systems', 'In Development'];

export function Projects({ theme }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        p.category === selectedCategory ||
        (selectedCategory === 'In Development' && p.status === 'In Development');

      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const flagshipProject = useMemo(() => {
    return PROJECTS_DATA.find((p) => p.isFlagship);
  }, []);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono text-[var(--accent-cyan)] uppercase tracking-wider">
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] font-mono">
            AI ASSISTANTS, STUDENT PLATFORMS &amp; PRACTICAL SOFTWARE APPLICATIONS
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 glass-panel p-4 sm:p-6 rounded-2xl border border-[var(--glass-border)]">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'glass-button-primary text-white shadow-md'
                    : 'glass-button text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search projects or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass-input text-xs pl-10 pr-4 py-2.5 rounded-xl border border-[var(--glass-border)]"
            />
          </div>

        </div>

        {/* FLAGSHIP PROJECT DISPLAY: JARVIS */}
        {flagshipProject && (selectedCategory === 'All' || selectedCategory === 'AI') && !searchQuery && (
          <div className="glass-card glass-flagship p-6 sm:p-10 rounded-3xl border border-sky-400/40 relative overflow-hidden transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-violet-300" />
                    FLAGSHIP PROJECT
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    ● Active Development
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight font-sans">
                    {flagshipProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed">
                    {flagshipProject.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {flagshipProject.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {flagshipProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold glass-panel text-[var(--accent-cyan)] border border-[var(--glass-border-hover)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => setActiveModalProject(flagshipProject)}
                    className="glass-button glass-button-primary px-6 py-3 text-xs font-bold flex items-center gap-2"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Inspect Full Architecture</span>
                  </button>
                  {flagshipProject.github && (
                    <a
                      href={flagshipProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button px-6 py-3 text-xs font-semibold flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: 3D Holographic Visual */}
              <div className="lg:col-span-5 h-[280px] w-full rounded-2xl glass-panel border border-[var(--glass-border)] p-2 relative overflow-hidden flex flex-col items-center justify-center">
                <JarvisCore3D theme={theme} />
                <div className="absolute bottom-3 text-center font-mono text-[11px] text-[var(--accent-cyan)] uppercase tracking-wider">
                  JARVIS LOCAL LLM REASONING CORE
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Standard Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects
            .filter((p) => !p.isFlagship || selectedCategory !== 'All' || !!searchQuery)
            .map((project) => (
              <div
                key={project.id}
                className="glass-card glass-interactive p-6 sm:p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold glass-pill text-[var(--accent-cyan)] border border-[var(--glass-border)]">
                      {project.category}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono ${
                        project.status === 'Active Development'
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : project.status === 'In Development'
                          ? 'text-amber-400 bg-amber-500/10'
                          : 'text-blue-400 bg-blue-500/10'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] font-sans">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono text-[var(--text-muted)] glass-pill"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-lg text-[10px] font-mono text-[var(--text-muted)]">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono font-semibold text-[var(--accent-cyan)] hover:underline flex items-center gap-1"
                  >
                    <span>View Specs</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass-button text-[var(--text-primary)]"
                        title="View GitHub Source"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass-button glass-button-primary"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
        </div>

        {/* Empty state search result */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl border border-[var(--glass-border)]">
            <Cpu className="w-10 h-10 text-[var(--text-muted)] mx-auto mb-3" />
            <p className="text-sm text-[var(--text-secondary)] font-mono">
              No projects found matching &quot;{searchQuery}&quot;. Try adjusting your search query or filter.
            </p>
          </div>
        )}

      </div>

      {/* Expanded Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        theme={theme}
      />
    </section>
  );
}
