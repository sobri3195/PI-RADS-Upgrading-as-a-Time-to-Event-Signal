export const storageKeys = {
  theme: 'pirads_theme',
  dashboardFilters: 'pirads_dashboard_filters',
  selectedChart: 'pirads_selected_chart',
  bookmarks: 'pirads_reference_bookmarks',
  disclaimerDismissed: 'pirads_disclaimer_dismissed',
  notes: 'pirads_notes',
  lastVisitedPage: 'pirads_last_visited_page',
};

export function getStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
