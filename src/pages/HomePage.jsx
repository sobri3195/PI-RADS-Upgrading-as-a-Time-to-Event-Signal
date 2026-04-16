import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="card bg-gradient-to-r from-brand-50 to-white dark:from-slate-900 dark:to-slate-900">
        <p className="badge bg-brand-50 text-brand-700">Software-driven longitudinal cohort</p>
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">PI-RADS Upgrading as a Time-to-Event Signal</h1>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">A synthetic longitudinal study using serial mpMRI to demonstrate survival impact, hazard ratios, and digital surveillance implications.</p>
        <div className="mt-5 flex gap-3"><Link to="/dashboard" className="rounded-lg bg-brand-700 px-4 py-2 text-white">Open Dashboard</Link><Link to="/methodology" className="rounded-lg border border-slate-300 px-4 py-2">View Methodology</Link></div>
      </section>
      <section>
        <SectionHeader eyebrow="Key findings" title="What this prototype demonstrates" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{['HR upgrading vs non-upgrading ≈ 1.95','Survival trajectory is worse in upgrading subgroup','Baseline PI-RADS strata show increasing hazard','Transparent synthetic cohort for reproducibility'].map((t)=><div key={t} className="card text-sm">{t}</div>)}</div>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        <div className="card"><h3 className="text-xl font-semibold">Why PI-RADS upgrading matters</h3><p className="mt-2 text-slate-600 dark:text-slate-300">Upgrading on serial mpMRI can signal latent biological progression before overt clinical endpoints. Modeling it as a time-to-event process supports risk-adapted surveillance.</p></div>
        <div className="card"><h3 className="text-xl font-semibold">Clinical + Digital Health significance</h3><p className="mt-2 text-slate-600 dark:text-slate-300">This educational prototype frames how software can unify imaging follow-up, risk flags, and reproducible analytics pipelines for future digital surveillance tools.</p></div>
      </section>
    </div>
  );
}
