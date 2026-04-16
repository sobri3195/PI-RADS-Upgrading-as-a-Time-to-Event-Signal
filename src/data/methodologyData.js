export const methodologySteps = [
  {
    title: 'Synthetic cohort generation',
    description:
      'We generated 30 virtual subjects under active surveillance with baseline PI-RADS 2-5 distributions and clinically plausible covariates.',
  },
  {
    title: 'Longitudinal feature design',
    description:
      'Age, PSA density, lesion size, and baseline PI-RADS informed upgrading probabilities across repeated mpMRI visits.',
  },
  {
    title: 'Time-to-event simulation',
    description:
      'An exponential survival process simulated progression events with administrative censoring at 60 months.',
  },
  {
    title: 'Comparative analysis',
    description:
      'Upgrading and non-upgrading subgroups were compared using hazard ratio framing; study-level summary target HR ≈ 1.95.',
  },
  {
    title: 'Transparency layer',
    description:
      'Risk-of-bias matrix, code appendix mindset, and interpretation boxes support reproducible educational use.',
  },
];
