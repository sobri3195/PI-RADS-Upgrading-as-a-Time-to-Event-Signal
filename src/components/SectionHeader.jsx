export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-6">
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-bold md:text-3xl">{title}</h2>
      {description && <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  );
}
