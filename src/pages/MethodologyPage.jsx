import SectionHeader from '../components/SectionHeader';
import { methodologySteps } from '../data/methodologyData';

export default function MethodologyPage() {
  return (
    <div>
      <SectionHeader eyebrow="Methodology" title="Synthetic cohort and survival workflow" description="30 subjects, baseline PI-RADS 2-5, exponential survival model, censoring at 60 months." />
      <div className="space-y-4">
        {methodologySteps.map((step, idx) => (
          <div key={step.title} className="card">
            <p className="text-xs text-brand-500">Step {idx + 1}</p>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
