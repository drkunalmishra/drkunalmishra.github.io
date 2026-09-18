import React, { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';
import { BarChart3, Target, ShieldCheck, Code2 } from 'lucide-react';
import { CORE_COMPETENCIES, TECH_STACK_MATRIX, type CompetencyMetric } from '../data/skillsChartData';

export const CompetenciesChart: React.FC = () => {
  const [activeView, setActiveView] = useState<'radar' | 'bar'>('radar');
  const [selectedCompetency, setSelectedCompetency] = useState<CompetencyMetric>(CORE_COMPETENCIES[0]);

  const colors = ['#00f2fe', '#8a2be2', '#10b981', '#38bdf8', '#f59e0b', '#ec4899', '#6366f1', '#14b8a6'];

  return (
    <section id="competencies" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>Competence Convergence Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Multidisciplinary <span className="text-gradient-cyan">Core Competencies</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Visualizing the intersection of Agentic AI, enterprise knowledge graphs, mathematical optimization, and empirical econometrics.
            </p>
          </div>

          {/* View toggle */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveView('radar')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === 'radar'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Radar Matrix</span>
            </button>
            <button
              onClick={() => setActiveView('bar')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === 'bar'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Stack Proficiency</span>
            </button>
          </div>
        </div>

        {/* Visualizer & Detail Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Chart Canvas */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-slate-800/80 shadow-2xl relative min-h-[420px] flex flex-col justify-center">
            <div className="absolute top-4 left-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-400">
                {activeView === 'radar' ? 'Interactive Convergence Radar (Recharts)' : 'Technology Stack Breakdown (Recharts)'}
              </span>
            </div>

            <div className="h-[360px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                {activeView === 'radar' ? (
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={CORE_COMPETENCIES}>
                    <PolarGrid stroke="#1e293b" strokeDasharray="3 3" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: '#94a3b8', fontSize: 11, fontFamily: 'Inter' }}
                    />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 100]}
                      tick={{ fill: '#475569', fontSize: 10 }}
                      stroke="#1e293b"
                    />
                    <Radar
                      name="Competency"
                      dataKey="score"
                      stroke="#00f2fe"
                      strokeWidth={2.5}
                      fill="#00f2fe"
                      fillOpacity={0.25}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload as CompetencyMetric;
                          return (
                            <div className="p-3 rounded-lg bg-dark-900/95 border border-cyan-500/40 shadow-xl backdrop-blur-md">
                              <p className="text-xs font-bold text-white">{data.subject}</p>
                              <p className="text-xs font-mono text-cyan-400 mt-1">Proficiency: {data.score}%</p>
                              <p className="text-[11px] text-slate-400 mt-0.5">{data.keyFrameworks}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </RadarChart>
                ) : (
                  <BarChart
                    data={TECH_STACK_MATRIX}
                    layout="vertical"
                    margin={{ top: 10, right: 20, left: 40, bottom: 5 }}
                  >
                    <XAxis type="number" domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} stroke="#334155" />
                    <YAxis
                      type="category"
                      dataKey="technology"
                      tick={{ fill: '#cbd5e1', fontSize: 11 }}
                      stroke="#334155"
                      width={140}
                    />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="p-3 rounded-lg bg-dark-900/95 border border-violet-500/40 shadow-xl">
                              <p className="text-xs font-bold text-white">{data.technology}</p>
                              <p className="text-xs font-mono text-cyan-400 mt-1">Mastery: {data.proficiency}%</p>
                              <p className="text-[11px] text-slate-400">Category: {data.category}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="proficiency" radius={[0, 6, 6, 0]}>
                      {TECH_STACK_MATRIX.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} fillOpacity={0.85} />
                      ))}
                    </Bar>
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          {/* Interactive Competency Deep Dive Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                  {selectedCompetency.category}
                </span>
                <span className="text-2xl font-display font-extrabold text-white">
                  {selectedCompetency.score}<span className="text-xs font-mono text-cyan-400">/100</span>
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-2">
                {selectedCompetency.subject}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {selectedCompetency.description}
              </p>

              <div className="p-3.5 rounded-xl bg-dark-950/80 border border-slate-800 mb-4">
                <div className="text-xs font-mono text-slate-400 mb-1.5 flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Frameworks & Tools</span>
                </div>
                <div className="text-xs font-mono text-cyan-300 font-medium">
                  {selectedCompetency.keyFrameworks}
                </div>
              </div>

              {/* Competency selector chips */}
              <div className="pt-2 border-t border-slate-800">
                <div className="text-[11px] font-mono text-slate-400 mb-2">Select Domain to Inspect:</div>
                <div className="flex flex-wrap gap-1.5">
                  {CORE_COMPETENCIES.map((comp) => (
                    <button
                      key={comp.subject}
                      onClick={() => setSelectedCompetency(comp)}
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-all ${
                        selectedCompetency.subject === comp.subject
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                          : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {comp.subject}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick architectural principle banner */}
            <div className="p-4 rounded-xl glass-panel border border-violet-500/20 bg-violet-950/20 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-violet-200">The Ontology-First AI Principle</div>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  "Rather than relying on disconnected tables and raw embeddings, enterprise AI systems require structured business taxonomies, knowledge graphs, and ABAC guardrails to eliminate hallucination."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
