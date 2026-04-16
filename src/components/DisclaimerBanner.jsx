export default function DisclaimerBanner({ dismissed, onDismiss }) {
  if (dismissed) return null;
  return (
    <div className="mx-auto mt-4 max-w-7xl rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-900/40 dark:text-amber-200">
      <p>
        This website uses synthetic data for research education and is not intended for clinical decision-making.
      </p>
      <button onClick={onDismiss} className="mt-2 rounded bg-amber-600 px-3 py-1 text-white">
        Dismiss
      </button>
    </div>
  );
}
