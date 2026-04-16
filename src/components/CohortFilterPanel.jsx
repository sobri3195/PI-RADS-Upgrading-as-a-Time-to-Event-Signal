import { baselineOptions } from '../lib/analytics';

export default function CohortFilterPanel({ filters, setFilters, onReset, onExport }) {
  return (
    <div className="card space-y-4">
      <h3 className="text-lg font-semibold">Cohort filters</h3>
      <div>
        <label className="text-sm">Baseline PI-RADS</label>
        <select
          value={filters.baseline}
          onChange={(e) => setFilters({ ...filters, baseline: e.target.value })}
          className="mt-1 w-full rounded border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-950"
        >
          <option value="all">All</option>
          {baselineOptions.map((v) => (
            <option key={v} value={String(v)}>{`PI-RADS ${v}`}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-sm">Upgrading</label>
        <select
          value={filters.upgrading}
          onChange={(e) => setFilters({ ...filters, upgrading: e.target.value })}
          className="mt-1 w-full rounded border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-950"
        >
          <option value="all">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input type="number" value={filters.ageMin} onChange={(e) => setFilters({ ...filters, ageMin: +e.target.value })} className="rounded border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-950" />
        <input type="number" value={filters.ageMax} onChange={(e) => setFilters({ ...filters, ageMax: +e.target.value })} className="rounded border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-950" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input type="number" step="0.01" value={filters.psaMin} onChange={(e) => setFilters({ ...filters, psaMin: +e.target.value })} className="rounded border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-950" />
        <input type="number" step="0.01" value={filters.psaMax} onChange={(e) => setFilters({ ...filters, psaMax: +e.target.value })} className="rounded border border-slate-300 p-2 dark:border-slate-700 dark:bg-slate-950" />
      </div>
      <div className="flex gap-2">
        <button onClick={onReset} className="rounded-lg bg-slate-200 px-3 py-2 text-sm dark:bg-slate-800">Reset</button>
        <button onClick={onExport} className="rounded-lg bg-brand-700 px-3 py-2 text-sm text-white">Export JSON</button>
      </div>
    </div>
  );
}
