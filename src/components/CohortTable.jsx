export default function CohortTable({ rows, sort, setSort }) {
  const sortBy = (key) => setSort(sort.key === key ? { key, dir: sort.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' });
  return (
    <div className="card overflow-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500">
            {['id', 'age', 'psaDensity', 'lesionSize', 'baselinePIRADS', 'upgrading', 'timeMonths', 'event'].map((k) => (
              <th key={k} className="cursor-pointer px-2 py-2" onClick={() => sortBy(k)}>{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-t border-slate-200 dark:border-slate-800">
              <td className="px-2 py-2">{r.id}</td><td>{r.age}</td><td>{r.psaDensity}</td><td>{r.lesionSize}</td>
              <td><span className="badge bg-blue-100 text-blue-700">{r.baselinePIRADS}</span></td>
              <td>{r.upgrading ? 'Yes' : 'No'}</td><td>{r.timeMonths}</td><td>{r.event}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
