import { Bookmark } from 'lucide-react';

export default function ReferenceCard({ refItem, active, onToggle }) {
  return (
    <div className="card flex items-start justify-between gap-3">
      <div>
        <h3 className="font-semibold">{refItem.title}</h3>
        <p className="text-sm text-slate-500">{refItem.journal} • {refItem.year}</p>
      </div>
      <button onClick={() => onToggle(refItem.id)} className={`rounded p-2 ${active ? 'bg-brand-700 text-white' : 'bg-slate-200 dark:bg-slate-800'}`}>
        <Bookmark size={18} />
      </button>
    </div>
  );
}
