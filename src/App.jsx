import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisclaimerBanner from './components/DisclaimerBanner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotesPanel from './components/NotesPanel';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';
import useLocalStorage from './hooks/useLocalStorage';
import AboutPage from './pages/AboutPage';
import AnalysisPage from './pages/AnalysisPage';
import CodePage from './pages/CodePage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LimitationsPage from './pages/LimitationsPage';
import MethodologyPage from './pages/MethodologyPage';
import ReferencesPage from './pages/ReferencesPage';
import { storageKeys } from './utils/storage';

const metaByPath = {
  '/': ['PI-RADS Upgrading Study', 'Interactive synthetic cohort showcase for time-to-event PI-RADS upgrading insights.'],
  '/about': ['About Study', 'Clinical background on active surveillance and serial mpMRI.'],
  '/methodology': ['Methodology', 'Synthetic cohort generation and survival modeling workflow.'],
  '/dashboard': ['Dashboard', 'Filterable cohort dashboard with local persistence.'],
  '/analysis': ['Visual Analysis', 'Kaplan-Meier style, forest, funnel, and bias visualizations.'],
  '/code': ['Code & Reproducibility', 'Pseudocode and reproducibility mindset.'],
  '/references': ['References', 'Search and bookmark scientific references.'],
  '/limitations': ['Limitations & Ethics', 'Synthetic data limitations and future digital-health direction.'],
};

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useLocalStorage(storageKeys.theme, 'light');
  const [filters, setFilters] = useLocalStorage(storageKeys.dashboardFilters, { baseline: 'all', upgrading: 'all', ageMin: 50, ageMax: 80, psaMin: 0.08, psaMax: 0.35 });
  const [selectedChart, setSelectedChart] = useLocalStorage(storageKeys.selectedChart, 'survival');
  const [bookmarks, setBookmarks] = useLocalStorage(storageKeys.bookmarks, []);
  const [dismissedDisclaimer, setDismissedDisclaimer] = useLocalStorage(storageKeys.disclaimerDismissed, false);
  const [notes, setNotes] = useLocalStorage(storageKeys.notes, {});
  const [, setLastPage] = useLocalStorage(storageKeys.lastVisitedPage, '/');
  const [toast, setToast] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const [title, desc] = metaByPath[location.pathname] ?? metaByPath['/'];
    document.title = `${title} | PI-RADS Study`;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.name = 'description';
      document.head.appendChild(tag);
    }
    tag.content = desc;
  }, [location.pathname]);

  const notify = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 1800);
  };

  return (
    <div className="min-h-screen">
      <ScrollToTop onPath={setLastPage} />
      <Navbar theme={theme} setTheme={setTheme} />
      <DisclaimerBanner dismissed={dismissedDisclaimer} onDismiss={() => setDismissedDisclaimer(true)} />
      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/dashboard" element={<DashboardPage filters={filters} setFilters={setFilters} notify={notify} />} />
          <Route path="/analysis" element={<AnalysisPage selectedChart={selectedChart} setSelectedChart={setSelectedChart} />} />
          <Route path="/code" element={<CodePage />} />
          <Route path="/references" element={<ReferencesPage bookmarks={bookmarks} setBookmarks={setBookmarks} notify={notify} />} />
          <Route path="/limitations" element={<LimitationsPage />} />
        </Routes>
        <NotesPanel pageKey={location.pathname} notes={notes} setNotes={setNotes} notify={notify} />
      </main>
      <Footer />
      <Toast text={toast} />
    </div>
  );
}
