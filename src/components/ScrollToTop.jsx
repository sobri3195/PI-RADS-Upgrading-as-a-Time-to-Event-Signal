import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({ onPath }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onPath(pathname);
  }, [pathname, onPath]);
  return null;
}
