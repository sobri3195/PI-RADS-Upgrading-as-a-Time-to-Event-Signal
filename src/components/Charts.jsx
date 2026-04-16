import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export function SurvivalChart({ data }) {
  return (
    <div className="card">
      <h3 className="font-semibold">Kaplan–Meier style survival</h3>
      <ResponsiveContainer width="100%" height={260}><LineChart data={data}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="month"/><YAxis domain={[0,1]}/><Tooltip/><Legend/><Line type="monotone" dataKey="upgrading" stroke="#dc2626"/><Line type="monotone" dataKey="nonUpgrading" stroke="#0284c7"/></LineChart></ResponsiveContainer>
      <p className="mt-2 text-sm text-slate-500">Interpretation: survival declines faster in upgrading subgroup.</p>
    </div>
  );
}

export function ForestPlotChart({ data }) {
  return (
    <div className="card">
      <h3 className="font-semibold">Forest plot (HR by baseline PI-RADS)</h3>
      <ResponsiveContainer width="100%" height={260}><BarChart data={data}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="group"/><YAxis/><Tooltip/><Bar dataKey="hr" fill="#0f5d8a"/></BarChart></ResponsiveContainer>
      <p className="mt-2 text-sm text-slate-500">Interpretation: HR increases from PI-RADS 2 to 5.</p>
    </div>
  );
}

export function FunnelPlotChart({ data }) {
  return (
    <div className="card">
      <h3 className="font-semibold">Funnel plot</h3>
      <ResponsiveContainer width="100%" height={260}><ScatterChart><CartesianGrid/><XAxis dataKey="effect"/><YAxis dataKey="precision"/><Tooltip cursor={{ strokeDasharray: '3 3' }}/><Scatter data={data} fill="#14b8a6"/></ScatterChart></ResponsiveContainer>
      <p className="mt-2 text-sm text-slate-500">Interpretation: moderate asymmetry; educational signal for publication bias checks.</p>
    </div>
  );
}

export function BiasHeatmap({ data }) {
  const c = ['#dcfce7', '#fde68a', '#fecaca'];
  return (
    <div className="card">
      <h3 className="font-semibold">Risk-of-bias heatmap</h3>
      <ResponsiveContainer width="100%" height={260}><BarChart data={data} layout="vertical"><XAxis type="number" domain={[0,2]}/><YAxis type="category" dataKey="domain" width={120}/><Tooltip/><Bar dataKey="score">{data.map((d) => <Cell key={d.domain} fill={c[d.score]} />)}</Bar></BarChart></ResponsiveContainer>
      <p className="mt-2 text-sm text-slate-500">Interpretation: mostly low-to-moderate bias risk across domains.</p>
    </div>
  );
}

export function BaselineDistribution({ data }) {
  const grouped = [2, 3, 4, 5].map((x) => ({ name: `PI-RADS ${x}`, value: data.filter((d) => d.baselinePIRADS === x).length }));
  return (
    <div className="card">
      <h3 className="font-semibold">Baseline cohort distribution</h3>
      <ResponsiveContainer width="100%" height={260}><PieChart><Pie data={grouped} dataKey="value" outerRadius={95} label>{grouped.map((_, i) => <Cell key={i} fill={['#bfdbfe','#93c5fd','#60a5fa','#2563eb'][i]} />)}</Pie><Tooltip/><Legend/></PieChart></ResponsiveContainer>
      <p className="mt-2 text-sm text-slate-500">Interpretation: higher-risk categories (4-5) dominate this synthetic cohort.</p>
    </div>
  );
}
