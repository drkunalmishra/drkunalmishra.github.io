import React, { useState } from 'react';
import { 
  TrendingUp, 
  Activity, 
  LineChart, 
  GitFork, 
  Brain, 
  Terminal, 
  BookOpen, 
  ArrowUpRight, 
  FunctionSquare,
  Sparkles
} from 'lucide-react';
import { RESEARCH_DOMAINS, type ResearchDomain } from '../data/profileData';

export const ResearchEconometrics: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<ResearchDomain>(RESEARCH_DOMAINS[0]);

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-violet-400" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-emerald-400" />;
      case 'GitFork': return <GitFork className="w-5 h-5 text-amber-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-cyan-400" />;
      default: return <BookOpen className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="research" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/40 text-violet-300 text-xs font-mono mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Doctoral Research & Quantitative Economics</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              Econometrics & <span className="text-gradient-purple">Empirical AI Lab</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Applying rigorous statistical mechanics, structural econometric modeling, and causal inference to quantify enterprise AI impact, financial volatility, and market dynamics.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="https://www.researchgate.net/profile/Kunal-Mishra-22"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl glass-panel text-xs font-mono text-cyan-400 hover:text-white hover:border-cyan-400 transition-colors"
            >
              <span>View ResearchGate Publications</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Research Domains Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {RESEARCH_DOMAINS.map((domain) => {
            const isSelected = domain.id === selectedDomain.id;
            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain)}
                className={`p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'glass-panel border-2 border-violet-400 shadow-glow-violet -translate-y-0.5'
                    : 'bg-dark-950/70 border border-slate-800 hover:border-slate-700 hover:bg-dark-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  {getDomainIcon(domain.icon)}
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                    {domain.badge}
                  </span>
                </div>
                <div className="text-xs font-semibold text-white line-clamp-2">
                  {domain.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Domain Exploration Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800/80 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Domain Overview & Mathematical Formulation */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-violet-950 text-violet-300 border border-violet-500/40">
                  {selectedDomain.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Domain ID: {selectedDomain.id}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                {selectedDomain.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedDomain.abstract}
              </p>

              {/* Mathematical Formulation Display */}
              {selectedDomain.frameworkEquation && (
                <div className="p-4 rounded-xl bg-dark-950/90 border border-slate-800 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <FunctionSquare className="w-3.5 h-3.5 text-violet-400" />
                    <span>Structural Specification & Formulation</span>
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-cyan-300 p-3 bg-dark-900/90 rounded-lg border border-slate-800/80 overflow-x-auto">
                    <code>{selectedDomain.frameworkEquation}</code>
                  </div>
                </div>
              )}

              {/* Key Methodologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Statistical Methodologies:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedDomain.keyMethods.map((method, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-dark-950/60 border border-slate-800/80 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0 mt-1.5" />
                      <span>{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Practical Enterprise Applications */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="p-6 rounded-2xl bg-dark-950/80 border border-slate-800/90 shadow-xl">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Practical Enterprise Applications</span>
                </div>

                <ul className="space-y-3.5">
                  {selectedDomain.practicalApplications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/60 flex items-center justify-center shrink-0 text-[10px] font-mono mt-0.5">
                        0{idx + 1}
                      </span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Research Synergy Box */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-violet-950/30 via-dark-900 to-cyan-950/20 border border-violet-500/20">
                <div className="text-xs font-bold text-violet-300 mb-1">
                  Doctoral Research Thesis Synergy
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Integrating quantitative econometrics with modern multi-agent systems ensures that AI models do not merely generate text, but act as empirical agents capable of causal reasoning, counterfactual evaluation, and risk-calibrated enterprise decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
