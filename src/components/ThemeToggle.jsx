import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="rounded-xl border border-slate-300 p-2 dark:border-slate-700"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
