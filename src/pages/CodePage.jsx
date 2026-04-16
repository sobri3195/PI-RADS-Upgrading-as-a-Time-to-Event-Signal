export default function CodePage() {
  const pseudo = `for each subject in synthetic_cohort:\n  assign baseline_pirads, age, psa_density, lesion_size\n  compute upgrade_probability by baseline_pirads\n  sample upgrading event over follow-up\n  generate time_to_event via exponential model\n  censor at 60 months\nestimate hazard ratio upgrading vs non_upgrading`;
  return (
    <div className="space-y-4">
      <div className="card"><h2 className="text-2xl font-bold">Code & Reproducibility</h2><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Simulation logic and analysis framing are intentionally transparent for reproducible educational workflows.</p></div>
      <div className="card"><h3 className="font-semibold">Pseudocode appendix</h3><pre className="mt-3 overflow-auto rounded bg-slate-950 p-4 text-xs text-green-300">{pseudo}</pre></div>
    </div>
  );
}
