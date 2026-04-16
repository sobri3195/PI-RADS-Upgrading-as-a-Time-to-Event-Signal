import { BaselineDistribution, BiasHeatmap, ForestPlotChart, FunnelPlotChart, SurvivalChart } from '../components/Charts';
import { biasHeatmapData, cohortData, forestData, funnelData, survivalSeries } from '../data/cohortData';

export default function AnalysisPage({ selectedChart, setSelectedChart }) {
  const tabs = ['survival', 'forest', 'funnel', 'bias', 'baseline'];
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">{tabs.map((t)=><button key={t} onClick={()=>setSelectedChart(t)} className={`rounded px-3 py-2 text-sm ${selectedChart===t?'bg-brand-700 text-white':'bg-slate-200 dark:bg-slate-800'}`}>{t}</button>)}</div>
      {selectedChart === 'survival' && <SurvivalChart data={survivalSeries} />}
      {selectedChart === 'forest' && <ForestPlotChart data={forestData} />}
      {selectedChart === 'funnel' && <FunnelPlotChart data={funnelData} />}
      {selectedChart === 'bias' && <BiasHeatmap data={biasHeatmapData} />}
      {selectedChart === 'baseline' && <BaselineDistribution data={cohortData} />}
    </div>
  );
}
