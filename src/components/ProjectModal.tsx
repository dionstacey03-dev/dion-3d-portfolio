import { X, Github, ExternalLink, Cpu, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../data/projects';
import { JarvisCore3D } from './3d/JarvisCore3D';
import { Theme } from '../hooks/useTheme';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  theme: Theme;
}

export function ProjectModal({ project, onClose, theme }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-[var(--glass-border-hover)] bg-[var(--glass-bg-heavy)] shadow-2xl p-6 sm:p-10 space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl glass-button text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-4 border-b border-[var(--glass-border)] pb-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold glass-pill text-[var(--accent-cyan)] border border-[var(--glass-border)]">
              {project.category}
            </span>
            <span
              className={`px-3.5 py-1 rounded-full text-xs font-mono font-semibold ${
                project.status === 'Active Development'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : project.status === 'In Development'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              }`}
            >
              ● {project.status}
            </span>
            {project.isFlagship && (
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                ★ FLAGSHIP PROJECT
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* 3D Visual for Flagship JARVIS */}
        {project.isFlagship && (
          <div className="w-full glass-card p-4 rounded-2xl border border-[var(--glass-border)] overflow-hidden">
            <JarvisCore3D theme={theme} />
            <div className="text-center font-mono text-xs text-[var(--accent-cyan)] mt-2">
              HOLOGRAPHIC 3D AI CORE &amp; PERSISTENT MEMORY ENGINE
            </div>
          </div>
        )}

        {/* Overview Description */}
        <div className="space-y-3">
          <h4 className="text-sm font-mono uppercase text-[var(--text-muted)] tracking-wider">
            Project Overview
          </h4>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features List */}
        <div className="space-y-3">
          <h4 className="text-sm font-mono uppercase text-[var(--text-muted)] tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[var(--accent-cyan)]" />
            <span>Key Capabilities &amp; Engineering Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="glass-panel p-3.5 rounded-xl border border-[var(--glass-border)] text-xs text-[var(--text-primary)] flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan)] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture Breakdown (if available) */}
        {project.architecture && (
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase text-[var(--text-muted)] tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--accent-violet)]" />
              <span>Architecture &amp; Data Pipeline</span>
            </h4>
            <div className="glass-card p-4 rounded-xl font-mono text-xs text-[var(--text-secondary)] space-y-2">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-[var(--accent-violet)]">➜</span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Stack */}
        <div className="space-y-3">
          <h4 className="text-sm font-mono uppercase text-[var(--text-muted)] tracking-wider">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="glass-pill px-3 py-1 text-xs font-mono font-semibold text-[var(--text-primary)] border border-[var(--glass-border)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Action Links */}
        <div className="pt-6 border-t border-[var(--glass-border)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-5 py-2.5 text-xs font-semibold flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button glass-button-primary px-5 py-2.5 text-xs font-semibold flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Project Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="glass-button px-5 py-2.5 text-xs font-semibold text-[var(--text-muted)]"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
