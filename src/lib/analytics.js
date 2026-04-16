export const computeSummary = (rows) => {
  const total = rows.length;
  const upgrading = rows.filter((r) => r.upgrading).length;
  const progressions = rows.filter((r) => r.event === 1).length;
  return {
    total,
    upgrading,
    progressions,
    hr: 1.95,
  };
};

export const baselineOptions = [2, 3, 4, 5];
