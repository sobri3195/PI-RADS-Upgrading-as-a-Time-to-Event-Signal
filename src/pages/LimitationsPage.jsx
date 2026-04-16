export default function LimitationsPage() {
  return (
    <div className="space-y-4">
      <div className="card"><h2 className="text-2xl font-bold">Limitations & Ethics</h2><p className="mt-2 text-sm">Synthetic data simplifies biology and cannot replace validated prospective cohorts.</p></div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card"><h3 className="font-semibold">Small cohort</h3><p className="mt-2 text-sm">N=30 is educational and underpowered for definitive clinical inference.</p></div>
        <div className="card"><h3 className="font-semibold">Non-clinical deployment</h3><p className="mt-2 text-sm">Not intended for diagnosis, treatment, or real patient management.</p></div>
        <div className="card md:col-span-2"><h3 className="font-semibold">Future directions</h3><p className="mt-2 text-sm">Integrate AI detection support, structured reporting pipelines, and digital surveillance tools with transparent governance.</p></div>
      </div>
    </div>
  );
}
