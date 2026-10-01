import { Sun, Moon } from 'lucide-react';
import { Theme } from '../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="glass-button px-3.5 py-2 text-sm flex items-center gap-2 group transition-all duration-300"
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
    >
      <span className="relative flex items-center justify-center w-5 h-5">
        {isDark ? (
          <Moon className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 group-hover:rotate-45 transition-transform duration-300" />
        )}
      </span>
      <span className="font-mono text-xs tracking-wider uppercase">
        {isDark ? '🌙 Dark' : '☀ Light'}
      </span>
    </button>
  );
}
