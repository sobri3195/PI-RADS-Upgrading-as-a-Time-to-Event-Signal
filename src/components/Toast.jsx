export default function Toast({ text }) {
  if (!text) return null;
  return <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white">{text}</div>;
}
