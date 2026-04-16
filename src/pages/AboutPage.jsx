import SectionHeader from '../components/SectionHeader';

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="About the Study" title="Clinical framing and objective" description="This project explains active surveillance and PI-RADS in an educational synthetic cohort context." />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card"><h3 className="font-semibold">Active Surveillance</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Monitoring low-risk prostate cancer to defer intervention until clear progression signals appear.</p></div>
        <div className="card"><h3 className="font-semibold">PI-RADS</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">A standardized mpMRI reporting system (scores 1-5) used to communicate lesion suspicion and longitudinal changes.</p></div>
        <div className="card"><h3 className="font-semibold">Serial mpMRI importance</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Repeated imaging helps detect temporal signal changes and potential upgrading trajectories.</p></div>
        <div className="card"><h3 className="font-semibold">Objective</h3><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">To show PI-RADS upgrading as a software-trackable time-to-event signal with hazard-based interpretation.</p></div>
      </div>
      <div className="card border-brand-500"><span className="badge bg-brand-50 text-brand-700">Synthetic Cohort Prototype</span><p className="mt-2 text-sm">Educational only. Not for clinical decision-making.</p></div>
    </div>
  );
}
