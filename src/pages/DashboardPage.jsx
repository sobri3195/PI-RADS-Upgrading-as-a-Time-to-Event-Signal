import { useMemo, useState } from 'react';
import CohortFilterPanel from '../components/CohortFilterPanel';
import CohortSummaryCards from '../components/CohortSummaryCards';
import CohortTable from '../components/CohortTable';
import { SurvivalChart } from '../components/Charts';
import { cohortData, survivalSeries } from '../data/cohortData';
import { computeSummary } from '../lib/analytics';

export default function DashboardPage({ filters, setFilters, notify }) {
  const [sort, setSort] = useState({ key: 'id', dir: 'asc' });
  const filtered = useMemo(() => cohortData.filter((r) => {
    if (filters.baseline !== 'all' && r.baselinePIRADS !== Number(filters.baseline)) return false;
    if (filters.upgrading !== 'all' && r.upgrading !== (filters.upgrading === 'yes')) return false;
    return r.age >= filters.ageMin && r.age <= filters.ageMax && r.psaDensity >= filters.psaMin && r.psaDensity <= filters.psaMax;
  }), [filters]);

  const sorted = [...filtered].sort((a, b) => {
    const x = a[sort.key], y = b[sort.key];
    if (x === y) return 0;
    return (x > y ? 1 : -1) * (sort.dir === 'asc' ? 1 : -1);
  });

  const summary = computeSummary(filtered);

  return (
    <div className="space-y-4">
      <CohortSummaryCards summary={summary} />
      <div className="grid gap-4 lg:grid-cols-3">
        <CohortFilterPanel
          filters={filters}
          setFilters={setFilters}
          onReset={() => setFilters({ baseline: 'all', upgrading: 'all', ageMin: 50, ageMax: 80, psaMin: 0.08, psaMax: 0.35 })}
          onExport={() => {
            navigator.clipboard.writeText(JSON.stringify(filters, null, 2));
            notify('Filters copied as JSON');
          }}
        />
        <div className="lg:col-span-2"><SurvivalChart data={survivalSeries} /></div>
      </div>
      <CohortTable rows={sorted} sort={sort} setSort={setSort} />
    </div>
  );
}
