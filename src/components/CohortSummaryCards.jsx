export default function CohortSummaryCards({ summary }) {
  const cards = [
    ['Total subjects', summary.total],
    ['Total upgrading', summary.upgrading],
    ['Total progression events', summary.progressions],
    ['Hazard ratio (U vs NU)', summary.hr],
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(([label, value]) => (
        <div key={label} className="card">
          <p className="text-xs uppercase text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-bold">{value}</p>
        </div>
      ))}
    </div>
  );
}
