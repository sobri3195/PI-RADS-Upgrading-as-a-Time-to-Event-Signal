export const cohortData = [
  { id: 'S01', age: 56, psaDensity: 0.10, lesionSize: 9, baselinePIRADS: 2, upgrading: false, timeMonths: 60, event: 0 },
  { id: 'S02', age: 63, psaDensity: 0.12, lesionSize: 10, baselinePIRADS: 2, upgrading: false, timeMonths: 48, event: 0 },
  { id: 'S03', age: 61, psaDensity: 0.14, lesionSize: 12, baselinePIRADS: 2, upgrading: true, timeMonths: 37, event: 1 },
  { id: 'S04', age: 59, psaDensity: 0.11, lesionSize: 8, baselinePIRADS: 2, upgrading: false, timeMonths: 54, event: 0 },
  { id: 'S05', age: 66, psaDensity: 0.15, lesionSize: 13, baselinePIRADS: 2, upgrading: true, timeMonths: 33, event: 1 },
  { id: 'S06', age: 58, psaDensity: 0.18, lesionSize: 14, baselinePIRADS: 3, upgrading: true, timeMonths: 29, event: 1 },
  { id: 'S07', age: 64, psaDensity: 0.17, lesionSize: 15, baselinePIRADS: 3, upgrading: true, timeMonths: 32, event: 1 },
  { id: 'S08', age: 57, psaDensity: 0.13, lesionSize: 11, baselinePIRADS: 3, upgrading: false, timeMonths: 60, event: 0 },
  { id: 'S09', age: 68, psaDensity: 0.20, lesionSize: 16, baselinePIRADS: 3, upgrading: true, timeMonths: 26, event: 1 },
  { id: 'S10', age: 62, psaDensity: 0.15, lesionSize: 12, baselinePIRADS: 3, upgrading: false, timeMonths: 45, event: 0 },
  { id: 'S11', age: 65, psaDensity: 0.16, lesionSize: 13, baselinePIRADS: 3, upgrading: false, timeMonths: 50, event: 0 },
  { id: 'S12', age: 70, psaDensity: 0.22, lesionSize: 18, baselinePIRADS: 3, upgrading: true, timeMonths: 24, event: 1 },
  { id: 'S13', age: 60, psaDensity: 0.19, lesionSize: 17, baselinePIRADS: 4, upgrading: true, timeMonths: 22, event: 1 },
  { id: 'S14', age: 67, psaDensity: 0.24, lesionSize: 19, baselinePIRADS: 4, upgrading: true, timeMonths: 18, event: 1 },
  { id: 'S15', age: 71, psaDensity: 0.21, lesionSize: 18, baselinePIRADS: 4, upgrading: false, timeMonths: 34, event: 0 },
  { id: 'S16', age: 69, psaDensity: 0.25, lesionSize: 21, baselinePIRADS: 4, upgrading: true, timeMonths: 20, event: 1 },
  { id: 'S17', age: 55, psaDensity: 0.14, lesionSize: 12, baselinePIRADS: 4, upgrading: false, timeMonths: 42, event: 0 },
  { id: 'S18', age: 73, psaDensity: 0.28, lesionSize: 24, baselinePIRADS: 4, upgrading: true, timeMonths: 16, event: 1 },
  { id: 'S19', age: 66, psaDensity: 0.23, lesionSize: 20, baselinePIRADS: 4, upgrading: true, timeMonths: 21, event: 1 },
  { id: 'S20', age: 62, psaDensity: 0.18, lesionSize: 15, baselinePIRADS: 4, upgrading: false, timeMonths: 38, event: 0 },
  { id: 'S21', age: 72, psaDensity: 0.29, lesionSize: 23, baselinePIRADS: 5, upgrading: true, timeMonths: 12, event: 1 },
  { id: 'S22', age: 74, psaDensity: 0.31, lesionSize: 25, baselinePIRADS: 5, upgrading: true, timeMonths: 10, event: 1 },
  { id: 'S23', age: 68, psaDensity: 0.26, lesionSize: 22, baselinePIRADS: 5, upgrading: false, timeMonths: 24, event: 1 },
  { id: 'S24', age: 64, psaDensity: 0.22, lesionSize: 19, baselinePIRADS: 5, upgrading: true, timeMonths: 14, event: 1 },
  { id: 'S25', age: 70, psaDensity: 0.27, lesionSize: 23, baselinePIRADS: 5, upgrading: true, timeMonths: 11, event: 1 },
  { id: 'S26', age: 63, psaDensity: 0.20, lesionSize: 17, baselinePIRADS: 5, upgrading: false, timeMonths: 28, event: 0 },
  { id: 'S27', age: 76, psaDensity: 0.34, lesionSize: 27, baselinePIRADS: 5, upgrading: true, timeMonths: 8, event: 1 },
  { id: 'S28', age: 69, psaDensity: 0.24, lesionSize: 20, baselinePIRADS: 5, upgrading: true, timeMonths: 13, event: 1 },
  { id: 'S29', age: 61, psaDensity: 0.18, lesionSize: 15, baselinePIRADS: 5, upgrading: false, timeMonths: 30, event: 0 },
  { id: 'S30', age: 67, psaDensity: 0.30, lesionSize: 24, baselinePIRADS: 5, upgrading: true, timeMonths: 9, event: 1 },
];

export const survivalSeries = [
  { month: 0, upgrading: 1.0, nonUpgrading: 1.0 },
  { month: 12, upgrading: 0.82, nonUpgrading: 0.93 },
  { month: 24, upgrading: 0.63, nonUpgrading: 0.86 },
  { month: 36, upgrading: 0.51, nonUpgrading: 0.77 },
  { month: 48, upgrading: 0.38, nonUpgrading: 0.69 },
  { month: 60, upgrading: 0.31, nonUpgrading: 0.61 },
];

export const forestData = [
  { group: 'PI-RADS 2', hr: 1.2, low: 0.8, high: 1.8 },
  { group: 'PI-RADS 3', hr: 1.6, low: 1.1, high: 2.4 },
  { group: 'PI-RADS 4', hr: 2.1, low: 1.5, high: 3.0 },
  { group: 'PI-RADS 5', hr: 2.8, low: 2.0, high: 3.9 },
];

export const funnelData = [
  { study: 'Center A', precision: 0.35, effect: 1.8 },
  { study: 'Center B', precision: 0.28, effect: 2.2 },
  { study: 'Center C', precision: 0.32, effect: 1.9 },
  { study: 'Center D', precision: 0.25, effect: 2.5 },
  { study: 'Center E', precision: 0.18, effect: 1.4 },
];

export const biasHeatmapData = [
  { domain: 'Selection Bias', score: 2 },
  { domain: 'Measurement Bias', score: 1 },
  { domain: 'Confounding', score: 2 },
  { domain: 'Attrition Bias', score: 1 },
  { domain: 'Reporting Bias', score: 1 },
];
