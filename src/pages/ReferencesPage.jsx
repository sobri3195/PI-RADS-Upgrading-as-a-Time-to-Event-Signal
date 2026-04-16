import { useMemo, useState } from 'react';
import ReferenceCard from '../components/ReferenceCard';
import { referencesData } from '../data/referencesData';

export default function ReferencesPage({ bookmarks, setBookmarks, notify }) {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => referencesData.filter((r) => `${r.title} ${r.journal}`.toLowerCase().includes(q.toLowerCase())), [q]);
  const toggle = (id) => {
    const next = bookmarks.includes(id) ? bookmarks.filter((x) => x !== id) : [...bookmarks, id];
    setBookmarks(next);
    notify('Bookmark updated');
  };

  return (
    <div className="space-y-4">
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search references..." className="w-full rounded-xl border border-slate-300 p-3 dark:border-slate-700 dark:bg-slate-950" />
      {filtered.map((r) => <ReferenceCard key={r.id} refItem={r} active={bookmarks.includes(r.id)} onToggle={toggle} />)}
      {!filtered.length && <div className="card text-sm text-slate-500">No references match your search.</div>}
    </div>
  );
}
