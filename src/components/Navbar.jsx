import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/methodology', 'Methodology'],
  ['/dashboard', 'Dashboard'],
  ['/analysis', 'Visual Analysis'],
  ['/code', 'Code'],
  ['/references', 'References'],
  ['/limitations', 'Limitations'],
];

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <p className="text-sm font-bold text-brand-700 dark:text-brand-500">PI-RADS Upgrading Study</p>
        <nav className="hidden gap-3 md:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className="text-sm text-slate-600 hover:text-brand-700 dark:text-slate-300">
              {label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
}
