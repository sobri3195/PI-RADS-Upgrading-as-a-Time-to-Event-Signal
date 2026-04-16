import { useState } from 'react';

export default function NotesPanel({ pageKey, notes, setNotes, notify }) {
  const [text, setText] = useState(notes[pageKey] || '');
  const save = () => {
    setNotes({ ...notes, [pageKey]: text });
    notify('Note saved');
  };

  return (
    <div className="card">
      <h3 className="mb-3 text-lg font-semibold">Personal notes</h3>
      <textarea
        className="min-h-28 w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add annotations for this section..."
      />
      <button onClick={save} className="mt-3 rounded-lg bg-brand-700 px-3 py-2 text-white">
        Save note
      </button>
    </div>
  );
}
